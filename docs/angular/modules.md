---
id: modules
title: Angular Modules (NgModules)
sidebar_label: Modules
description: NgModules — declarations, imports, exports, providers, and migrating to standalone components.
---

# Angular Modules (NgModules)

## Introduction

NgModules were Angular's primary organizational mechanism before standalone components. They group components, directives, and pipes and control what is imported and exported between features.

In modern Angular (v17+), standalone components are preferred. NgModules are still common in existing codebases.

---

## NgModule Anatomy

```typescript
@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent,
    UserStatusPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    UserCardComponent,  // available to modules that import UserModule
  ],
  providers: [
    UserService,        // scoped to this module's injector
  ],
})
export class UserModule {}
```

---

## Feature Modules and Lazy Loading

```typescript
// app-routing.module.ts
const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
];
```

---

## Migrating to Standalone

The Angular CLI migration command:

```bash
ng generate @angular/core:standalone
```

Manual pattern — replace `NgModule` with standalone component imports:

```typescript
// Before (NgModule)
@NgModule({
  declarations: [UserCardComponent],
  imports: [CommonModule],
  exports: [UserCardComponent],
})
export class UserModule {}

// After (Standalone)
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgIf, NgFor], // import only what you need
  template: `...`,
})
export class UserCardComponent {}
```

---

## When NgModules Still Make Sense

- Large existing codebases — incremental migration is safer than a big bang
- Third-party libraries that haven't migrated to standalone yet
- Features that require complex provider scoping across many components

---

## Related Topics

- **Next:** [Standalone Components](./standalone-components)
- **Related:** [Angular Dependency Injection](./dependency-injection)
