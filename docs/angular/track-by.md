---
id: track-by
title: Angular track in @for loops
sidebar_label: Track By
description: The track expression in Angular @for loops — how it works, why it matters for performance, and correct usage.
---

# Track in Angular @for Loops

## Introduction

The `track` expression in `@for` tells Angular how to identify items in a list. When the list updates, Angular uses the track value to determine which DOM elements to keep, move, or recreate.

---

## Why It Matters

Without proper tracking, Angular destroys and recreates all DOM elements on every list change. For a list of 100 users, adding one user would rebuild 100 component trees. With `track user.id`, Angular only creates the one new element.

---

## Correct Usage

```html
<!-- Track by unique ID — preferred for server-side data -->
@for (user of users(); track user.id) {
  <app-user-card [user]="user" />
}

<!-- Track by index — only for static lists that don't change -->
@for (tab of tabs; track $index) {
  <app-tab [tab]="tab" />
}

<!-- Track by reference — when objects are recreated on each change -->
@for (item of items(); track item) {
  <app-item [item]="item" />
}
```

---

## What Happens Without track

```html
<!-- Bad — Angular has no identity, recreates all elements -->
@for (user of users(); track user) {
  <!-- If 'users' is a new array each render, this is equivalent to no tracking -->
}
```

---

## Best Practice

Always use a stable, unique identifier — usually the database `id` field. Never track by the whole object if it's recreated on each data fetch.

---

## Related Topics

- **Related:** [Angular Templates](./templates)
- **Related:** [Angular Performance](./onpush-strategy)
---

## Related Topics

- **Previous:** [OnPush Strategy](./onpush-strategy)
- **Next:** [Bundle Optimization](./bundle-optimization)
- **Related:** [Angular Templates](./templates)