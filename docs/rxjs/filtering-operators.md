---
id: filtering-operators
title: RxJS Filtering Operators
sidebar_label: Filtering Operators
description: filter, take, debounceTime, distinctUntilChanged, throttleTime, and other RxJS filtering operators.
---

# RxJS Filtering Operators

## filter / take / skip

```typescript
// Keep only values matching predicate
source$.pipe(filter(n => n > 0))

// Complete after N emissions
source$.pipe(take(3))

// Complete when predicate becomes false
source$.pipe(takeWhile(n => n < 100))

// Skip first N emissions
source$.pipe(skip(5))
```

## Timing-Based Filters

```typescript
// Emit after X ms of silence — ideal for search inputs
input.valueChanges.pipe(debounceTime(300))

// Emit immediately, then ignore for X ms
button.clicks.pipe(throttleTime(1000))

// Emit after X ms without being cancelled
source$.pipe(auditTime(300))
```

## Distinct Filters

```typescript
// Skip same consecutive value (strict equality)
source$.pipe(distinctUntilChanged())

// Skip same by a key
users$.pipe(distinctUntilKeyChanged('role'))

// Skip same by custom comparison
source$.pipe(distinctUntilChanged((a, b) => a.id === b.id))
```

## Conditional Take/Until

```typescript
// Complete when another observable emits
data$.pipe(takeUntil(destroy$))

// Modern Angular pattern
data$.pipe(takeUntilDestroyed(this.destroyRef))

// Take last N before completion
source$.pipe(takeLast(3))
```

---

## Related Topics

- **Previous:** [Transformation Operators](./transformation-operators)
- **Next:** [Combination Operators](./combination-operators)
