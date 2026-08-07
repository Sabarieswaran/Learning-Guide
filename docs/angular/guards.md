---
id: guards
title: Angular Guards
sidebar_label: Guards
description: Angular route guards — CanActivate, CanDeactivate, Resolve, CanMatch — functional and class-based patterns.
---

# Angular Guards

## Overview

Guards control access to routes. Modern Angular uses functional guards (plain functions) which are simpler than class-based guards.

```typescript
// Auth guard
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isAuthenticated()
    ? true
    : router.createUrlTree(['/login']);
};

// Role guard
export const roleGuard = (requiredRoles: string[]): CanActivateFn =>
  (route) => {
    const auth = inject(AuthService);
    return auth.hasAnyRole(requiredRoles)
      ? true
      : inject(Router).createUrlTree(['/unauthorized']);
  };

// Usage
{ path: 'admin', canActivate: [authGuard, roleGuard(['admin'])] }
```

---

## CanDeactivate

```typescript
export interface CanDeactivateComponent {
  hasUnsavedChanges(): boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<CanDeactivateComponent> =
  (component) => {
    if (!component.hasUnsavedChanges()) return true;
    return confirm('You have unsaved changes. Leave anyway?');
  };
```

---

## Resolvers

```typescript
export const userResolver: ResolveFn<User> = (route) => {
  return inject(UserService).getUser(route.paramMap.get('id')!).pipe(
    catchError(() => inject(Router).navigate(['/not-found']))
  );
};

// Access in component
const user = inject(ActivatedRoute).snapshot.data['user'] as User;
```

---

## Related Topics

- **Previous:** [Lazy Loading](./lazy-loading)
- **Next:** [Resolvers](./resolvers)
