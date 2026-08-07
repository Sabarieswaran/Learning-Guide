---
id: combination-operators
title: RxJS Combination Operators
sidebar_label: Combination Operators
description: combineLatest, forkJoin, merge, zip, withLatestFrom — combining multiple observable streams.
---

# RxJS Combination Operators

## combineLatest

Emits when any source emits, after all sources have emitted at least once:

```typescript
// Dashboard data — always have the latest of everything
combineLatest({
  user: this.userService.currentUser$,
  permissions: this.authService.permissions$,
  notifications: this.notificationService.count$,
}).subscribe(({ user, permissions, notifications }) => {
  this.dashboardData.set({ user, permissions, notifications });
});
```

## forkJoin

Emits once when ALL sources complete:

```typescript
// Load all required data before rendering
forkJoin({
  user: this.userService.getUser(id),
  posts: this.postService.getUserPosts(id),
  stats: this.statsService.getUserStats(id),
}).subscribe(({ user, posts, stats }) => {
  // all data available together
});
```

## merge

Merge multiple observables into one — emits whenever any source emits:

```typescript
merge(
  fromEvent(document, 'click'),
  fromEvent(document, 'touchstart'),
  fromEvent(document, 'keydown'),
).pipe(
  debounceTime(5 * 60 * 1000) // 5 min inactivity
).subscribe(() => this.logout());
```

## withLatestFrom

Combine with latest value from another stream without subscribing to it:

```typescript
// Attach current user to each form submission
saveButton.clicks.pipe(
  withLatestFrom(this.authService.currentUser$),
  map(([, user]) => ({ ...formData, authorId: user.id })),
  switchMap(data => this.http.post('/api/posts', data))
)
```

---

## Related Topics

- **Previous:** [Filtering Operators](./filtering-operators)
- **Next:** [Error Handling](./error-handling)
