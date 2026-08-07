---
id: transformation-operators
title: RxJS Transformation Operators
sidebar_label: Transformation Operators
description: map, scan, switchMap, mergeMap, concatMap, exhaustMap — with marble diagrams and Angular patterns.
---

# RxJS Transformation Operators

## map

Transform each emitted value:

```typescript
this.http.get<UserDto[]>('/api/users').pipe(
  map(dtos => dtos.map(dto => User.fromDto(dto)))
)
```

## scan

Accumulate state over time (like `Array.reduce` but streaming):

```typescript
// Running total
source$.pipe(
  scan((total, value) => total + value, 0)
)

// Collect into array
clicks$.pipe(
  scan((acc, click) => [...acc, click], [])
)
```

## The Four Flattening Operators

All four subscribe to an inner observable returned by a projection function:

### switchMap — Cancel Previous

```typescript
// New search query cancels pending HTTP request
searchInput.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(q => this.http.get<Result[]>(`/api/search?q=${q}`))
)
```

### mergeMap — Run Concurrently

```typescript
// Load all user profiles in parallel
userIds$.pipe(
  mergeMap(id => this.userService.getUser(id))
)
```

### concatMap — Queue and Run Sequentially

```typescript
// Save files one at a time, preserving order
filesToUpload$.pipe(
  concatMap(file => this.uploadFile(file))
)
```

### exhaustMap — Ignore New While Running

```typescript
// Submit button — ignore clicks while request is in flight
fromEvent(submitButton, 'click').pipe(
  exhaustMap(() => this.http.post('/api/form', formData))
)
```

---

## Related Topics

- **Previous:** [Creation Operators](./creation-operators)
- **Next:** [Filtering Operators](./filtering-operators)
