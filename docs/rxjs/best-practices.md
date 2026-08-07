---
id: best-practices
title: RxJS Best Practices
sidebar_label: Best Practices
description: RxJS best practices — avoiding memory leaks, operator selection, error handling, and testing patterns.
---

# RxJS Best Practices

## Always Clean Up Subscriptions

```typescript
// Option 1 — async pipe (auto-cleanup)
@Component({ template: `{{ users$ | async | json }}` })

// Option 2 — takeUntilDestroyed (Angular 16+)
this.source$.pipe(
  takeUntilDestroyed(this.destroyRef)
).subscribe();

// Option 3 — toSignal (auto-cleanup)
users = toSignal(this.userService.getUsers(), { initialValue: [] });
```

## Use the Right Flattening Operator

| Use Case | Operator |
|---|---|
| Search / type-ahead | `switchMap` |
| Parallel requests | `mergeMap` |
| Sequential operations | `concatMap` |
| Prevent double-submit | `exhaustMap` |

## Handle All Observable Paths

```typescript
// Always handle error and complete
this.service.getData().pipe(
  catchError(err => {
    this.error.set(err.message);
    return EMPTY; // don't re-throw unless caller needs to handle it
  })
).subscribe(data => this.data.set(data));
```

## Don't Nest Subscriptions

```typescript
// Bad — nested subscribe
this.userService.getUser(id).subscribe(user => {
  this.postsService.getUserPosts(user.id).subscribe(posts => {
    // nested subscriptions — memory leak risk
  });
});

// Good — use switchMap
this.userService.getUser(id).pipe(
  switchMap(user => this.postsService.getUserPosts(user.id))
).subscribe(posts => this.posts.set(posts));
```

## Avoid Side Effects in map()

```typescript
// Bad — side effects in transform operator
.pipe(map(data => { this.cache.set(data); return data; }))

// Good — use tap for side effects
.pipe(
  tap(data => this.cache.set(data)),
  map(data => data.items)
)
```

---

## Related Topics

- **Related:** [Angular Patterns](./angular-patterns)
- **Related:** [Angular Signals](/docs/angular/signals)
