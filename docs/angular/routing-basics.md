---
id: routing-basics
title: Angular Routing Basics
sidebar_label: Routing Basics
description: Angular Router — routes configuration, RouterOutlet, RouterLink, route parameters, query params, and navigation.
---

# Angular Routing

## Route Configuration

```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  {
    path: 'admin',
    canActivate: [authGuard],
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'settings', component: AdminSettingsComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
```

---

## RouterOutlet and RouterLink

```html
<!-- App shell -->
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/users" routerLinkActive="nav__link--active">Users</a>
  <a [routerLink]="['/users', userId]">My Profile</a>
  <a [routerLink]="['/users']" [queryParams]="{ page: 2 }">Page 2</a>
</nav>

<main>
  <router-outlet />
</main>
```

---

## Reading Route Parameters

```typescript
@Component({ standalone: true })
export class UserDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly userService = inject(UserService);

  // Static snapshot (for data that doesn't change while on route)
  readonly userId = this.route.snapshot.paramMap.get('id')!;

  // Reactive params (for components that reuse the same instance)
  readonly user = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id')!),
      switchMap(id => this.userService.getUser(id))
    ),
    { initialValue: null }
  );
}
```

---

## Programmatic Navigation

```typescript
@Component({ standalone: true })
export class LoginComponent {
  private readonly router = inject(Router);

  async onLoginSuccess(user: User) {
    await this.router.navigate(['/dashboard']);

    // With query params
    await this.router.navigate(['/search'], {
      queryParams: { q: 'angular', page: 1 }
    });

    // Relative navigation
    await this.router.navigate(['../sibling'], {
      relativeTo: this.route
    });
  }
}
```

---

## Functional Guards

```typescript
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};
```

---

## Related Topics

- **Next:** [Lazy Loading](./lazy-loading)
- **Related:** [Angular Guards](./guards)
