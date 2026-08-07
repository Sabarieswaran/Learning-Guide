---
id: schedulers
title: RxJS Schedulers
sidebar_label: Schedulers
description: RxJS schedulers — asyncScheduler, animationFrameScheduler, queueScheduler — and when to use them.
---

# RxJS Schedulers

## Introduction

Schedulers control when and how observable subscriptions and notifications are delivered. They're used internally by many operators but rarely configured directly in application code.

---

## Common Schedulers

```typescript
import { asyncScheduler, animationFrameScheduler, queueScheduler } from 'rxjs';
import { observeOn, subscribeOn } from 'rxjs/operators';

// asyncScheduler — uses setTimeout/setInterval
// Default for timer-based operators
of(1, 2, 3).pipe(
  observeOn(asyncScheduler) // deliver to subscriber asynchronously
)

// animationFrameScheduler — uses requestAnimationFrame
// For smooth UI animations
interval(0, animationFrameScheduler).pipe(
  map(() => getScrollPosition())
)

// queueScheduler — synchronous, queued execution
// Default for synchronous observable creation operators
```

## When It Matters

Most Angular developers never need to configure schedulers directly. Knowing they exist is enough for most interviews. Deep scheduler knowledge is for:
- Writing custom Observable operators
- Building animation libraries
- Optimizing high-frequency UI updates

---

## Related Topics

- **Previous:** [Operators](./operators)
- **Next:** [Angular Patterns](./angular-patterns)
