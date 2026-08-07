---
id: dependency-injection
title: Angular Dependency Injection
sidebar_label: Dependency Injection
description: Angular's hierarchical DI system — providers, injectors, injection tokens, and the inject() function.
---

# Angular Dependency Injection

## Introduction

Angular's Dependency Injection (DI) system provides dependencies to components and services without requiring them to create their dependencies themselves. This enables testability, modularity, and scoped state management.

---

## How DI Works

```typescript
// 1. Define a service
@Injectable({ providedIn: 'root' }) // singleton across the app
export class UserService {
  private readonly http = inject(HttpClient);

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`);
  }
}

// 2. Inject it — Angular creates and provides the instance
@Component({ standalone: true })
export class ProfileComponent {
  private readonly userService = inject(UserService);

  user = toSignal(
    this.userService.getUser('123'),
    { initialValue: null }
  );
}
```

---

## The Injector Hierarchy

Angular maintains a tree of injectors. When a dependency is requested, Angular walks up until it finds a provider:

```
PlatformInjector (top level)
  └── EnvironmentInjector (root)
        └── ComponentInjector (per component)
              └── Child ComponentInjector
```

- `providedIn: 'root'` → singleton in the root environment injector
- `providers: [MyService]` in a component → new instance per component subtree

---

## Injection Tokens

For values that aren't class instances (config, feature flags):

```typescript
import { InjectionToken, inject } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');

// Provide at bootstrap
bootstrapApplication(AppComponent, {
  providers: [
    { provide: API_URL, useValue: 'https://api.example.com' },
  ]
});

// Inject anywhere
@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = inject(API_URL);
}
```

---

## `inject()` Function

The `inject()` function can be used in component constructors, property initializers, and factory functions — not just constructors:

```typescript
@Component({ standalone: true })
export class MyComponent {
  // Works in property initializers
  private readonly logger = inject(LoggerService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
}
```

---

## Interview Questions

**Q (Medium): What is the difference between `providedIn: 'root'` and providing in a component's `providers` array?**

`providedIn: 'root'` creates a singleton in the root injector — one instance shared across the entire application. Providing in a component's `providers` array creates a new instance for that component's subtree. When the component is destroyed, the scoped instance is also destroyed. This is useful for feature-specific state: a `FormWizardService` provided in a wizard component is automatically cleaned up when the wizard closes.

**Q (Hard): How would you provide different implementations of a service in different environments?**

Use an `InjectionToken` and `useFactory` or `useClass` providers. In testing, provide mock implementations in TestBed. For environment-specific behavior (dev vs prod), use `environment.ts` values in the factory. For A/B testing feature variants, use `useClass: FeatureAService` or `useClass: FeatureBService` based on feature flags.

---

## Related Topics

- **Previous:** [Angular Introduction](./introduction)
- **Related:** [Angular Signals](./signals)
