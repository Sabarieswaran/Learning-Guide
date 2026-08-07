---
id: subjects
title: RxJS Subjects
sidebar_label: Subjects
description: Subject, BehaviorSubject, ReplaySubject, AsyncSubject — when to use each and Angular state patterns.
---

# RxJS Subjects

## Subject

A Subject is both an Observable and an Observer. It multicasts to all current subscribers. No initial value, no replay:

```typescript
const subject = new Subject<string>();

// Subscribe before emission
subject.subscribe(v => console.log('A:', v));

subject.next('hello'); // A: hello

// Subscribe after emission — misses 'hello'
subject.subscribe(v => console.log('B:', v));

subject.next('world'); // A: world, B: world
```

## BehaviorSubject

Holds the current value. Replays it to new subscribers:

```typescript
const theme$ = new BehaviorSubject<'light' | 'dark'>('dark');

theme$.subscribe(t => applyTheme(t)); // immediately gets 'dark'
theme$.getValue(); // 'dark' — synchronous access

theme$.next('light'); // both subscribers get 'light'
```

**Common Angular use:** service state that components subscribe to. Prefer signals for new code.

## ReplaySubject

Replays the last N emissions to new subscribers:

```typescript
const replay$ = new ReplaySubject<number>(3); // buffer last 3

replay$.next(1);
replay$.next(2);
replay$.next(3);
replay$.next(4);

replay$.subscribe(v => console.log(v)); // 2, 3, 4 (last 3)
```

## AsyncSubject

Emits only the last value, and only when it completes:

```typescript
const async$ = new AsyncSubject<number>();

async$.subscribe(v => console.log(v)); // nothing yet

async$.next(1);
async$.next(2);
async$.next(3);
async$.complete(); // now emits: 3
```

---

## Related Topics

- **Previous:** [Observables](./observables)
- **Next:** [Operators](./operators)
