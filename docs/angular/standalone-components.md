---
id: standalone-components
title: Angular Standalone Components
sidebar_label: Standalone Components
description: Standalone components without NgModules — bootstrapApplication, importing dependencies, lazy loading, and migration.
---

# Angular Standalone Components

## Introduction

Standalone components are Angular components that manage their own dependencies directly via the `imports` array — no NgModule required. They became stable in Angular 15 and are the recommended approach for all new Angular code in v17+.

---

## Creating a Standalone Component

```typescript
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    // Import what this component needs directly
    NgOptimizedImage,
    RouterLink,
    AsyncPipe,
    UserAvatarComponent,
    DatePipe,
  ],
  template: `
    <div class="profile">
      <app-user-avatar [user]="user()" />
      <h1>{{ user().name }}</h1>
      <p>Member since {{ user().createdAt | date:'longDate' }}</p>
      <a [routerLink]="['/users', user().id, 'edit']">Edit Profile</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {
  user = input.required<User>();
}
```

---

## Bootstrapping a Standalone App

```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { authInterceptor } from './app/core/interceptors/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations(),
  ],
}).catch(err => console.error(err));
```

---

## Lazy Loading Standalone Components

```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.routes').then(m => m.USER_ROUTES),
  },
];
```

---

## Key Benefits

- **Tree shaking** — only imports actually used in each component are bundled
- **Simplicity** — no need to create a module for every feature
- **Better lazy loading** — individual components can be lazy-loaded
- **Easier testing** — no TestBed NgModule setup boilerplate

---

## Related Topics

- **Previous:** [Modules](./modules)
- **Next:** [Control Flow](./control-flow)
- **Related:** [Angular Dependency Injection](./dependency-injection)
