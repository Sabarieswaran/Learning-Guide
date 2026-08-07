---
id: lazy-loading
title: Angular Lazy Loading
sidebar_label: Lazy Loading
description: Route-level and component-level lazy loading with loadComponent, loadChildren, and @defer in Angular.
---

# Angular Lazy Loading

## Introduction

Lazy loading splits your application into chunks that are downloaded on demand. Instead of loading all code upfront, users download only what they need for the current page.

A properly lazy-loaded Angular app can reduce initial bundle size by 60–80%.

---

## Route-Level Lazy Loading

```typescript
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component')
        .then(m => m.DashboardComponent),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.routes')
        .then(m => m.USER_ROUTES),
  },
];
```

---

## Preloading Strategies

```typescript
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules), // preload all lazy routes in background
    ),
  ],
});

// Custom strategy — preload routes with `data: { preload: true }`
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return route.data?.['preload'] ? load() : EMPTY;
  }
}
```

---

## Bundle Analysis

```bash
ng build --stats-json
npx webpack-bundle-analyzer dist/my-app/browser/stats.json
```

Look for:
- Large chunks that could be split further
- Common libraries being duplicated across chunks
- Angular Material components included but unused

---

## `@defer` for Component-Level Lazy Loading

See [Deferred Loading](./deferred-loading) for component-level lazy loading without routing.

---

## Impact on Core Web Vitals

| Metric | Impact |
|---|---|
| LCP | Reduces time to first meaningful paint |
| FID/INP | Reduces JavaScript parse/execute time — fewer tasks blocking main thread |
| CLS | No direct impact (no layout shift) |

---

## Related Topics

- **Previous:** [Routing Basics](./routing-basics)
- **Related:** [Deferred Loading](./deferred-loading)
- **Related:** [Bundle Optimization](./bundle-optimization)
