---
id: control-flow
title: Angular Control Flow
sidebar_label: Control Flow
description: Angular built-in control flow — @if, @for, @switch, @defer — the modern replacement for *ngIf, *ngFor, and *ngSwitch.
---

# Angular Control Flow

## Introduction

Angular 17 introduced built-in control flow syntax — `@if`, `@for`, `@switch`, and `@defer` — replacing the older structural directives `*ngIf`, `*ngFor`, and `*ngSwitch`. The new syntax is more readable, type-safe, and produces smaller bundles.

---

## @if

```html
<!-- Basic conditional -->
@if (isLoggedIn()) {
  <app-dashboard />
}

<!-- With else -->
@if (user()) {
  <p>Welcome, {{ user()!.name }}</p>
} @else {
  <a routerLink="/login">Sign in</a>
}

<!-- With alias for null-checking -->
@if (currentUser(); as user) {
  <p>{{ user.name }}</p>  <!-- user is non-null here -->
}
```

---

## @for

```html
<!-- Basic loop with required track -->
@for (product of products(); track product.id) {
  <app-product-card [product]="product" />
}

<!-- With index and empty state -->
@for (item of items(); track item.id; let i = $index, last = $last) {
  <li [class.last]="last">{{ i + 1 }}. {{ item.name }}</li>
} @empty {
  <li>No items found.</li>
}
```

Available loop variables: `$index`, `$first`, `$last`, `$even`, `$odd`, `$count`

---

## @switch

```html
@switch (status()) {
  @case ('loading') {
    <app-skeleton-loader />
  }
  @case ('error') {
    <app-error-state [message]="errorMessage()" />
  }
  @case ('success') {
    <app-content [data]="data()" />
  }
  @default {
    <app-empty-state />
  }
}
```

---

## @defer

Deferred loading — lazy-load components until a trigger condition is met:

```html
<!-- Triggers -->
@defer (on viewport) { ... }        <!-- when element enters viewport -->
@defer (on interaction) { ... }     <!-- when user interacts -->
@defer (on hover) { ... }           <!-- on mouse hover -->
@defer (on timer(3s)) { ... }       <!-- after delay -->
@defer (on idle) { ... }            <!-- when browser is idle -->
@defer (when shouldLoad()) { ... }  <!-- when signal/expression is true -->

<!-- With all states -->
@defer (on viewport; prefetch on idle) {
  <app-heavy-chart [data]="chartData()" />
} @placeholder (minimum 100ms) {
  <div class="chart-placeholder"></div>
} @loading (minimum 300ms; after 100ms) {
  <app-spinner />
} @error {
  <p>Chart failed to load.</p>
}
```

---

## Migrating from Old Syntax

| Old | New |
|---|---|
| `*ngIf="cond"` | `@if (cond) { }` |
| `*ngIf="cond; else tmpl"` | `@if (cond) { } @else { }` |
| `*ngFor="let x of items; trackBy: trackFn"` | `@for (x of items; track x.id)` |
| `*ngSwitch` + `*ngSwitchCase` | `@switch` + `@case` |

Migrate automatically: `ng generate @angular/core:control-flow`

---

## Related Topics

- **Previous:** [Standalone Components](./standalone-components)
- **Next:** [Deferred Loading](./deferred-loading)
