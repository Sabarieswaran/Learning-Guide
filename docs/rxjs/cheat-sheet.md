---
id: cheat-sheet
title: RxJS Cheat Sheet
sidebar_label: Cheat Sheet
description: RxJS quick reference — creation, transformation, filtering, combination, and Angular integration.
---

# RxJS Cheat Sheet

## Creation

```typescript
of(1, 2, 3)              // sync values
from([])                 // from iterable/Promise
interval(ms)             // counter every ms
timer(delay, interval)   // starts after delay
fromEvent(el, 'click')   // DOM events
EMPTY                    // completes immediately
NEVER                    // never emits/completes
```

## Transformation

```typescript
map(v => v * 2)
scan((acc, v) => acc + v, 0)   // accumulate
switchMap(v => obs$)            // cancel prev (search)
mergeMap(v => obs$)             // parallel
concatMap(v => obs$)            // sequential
exhaustMap(v => obs$)           // ignore during flight
```

## Filtering

```typescript
filter(v => v > 0)
take(n)
takeUntil(signal$)
takeUntilDestroyed(destroyRef)
debounceTime(300)
throttleTime(1000)
distinctUntilChanged()
first() / last()
skip(n)
```

## Error Handling

```typescript
catchError(err => of(fallback))
retry(n)
throwError(() => new Error('msg'))
```

## Combination

```typescript
combineLatest([a$, b$])      // latest of all (after each emits once)
forkJoin([a$, b$])           // wait for all to complete
merge(a$, b$)                // merge streams
withLatestFrom(b$)           // combine with latest from b$
```

## Utility

```typescript
tap(v => side_effect(v))
startWith(value)
shareReplay(1)               // cache + replay
finalize(() => cleanup())
delay(ms)
timeout(ms)
```

## Angular Integration

```typescript
// Subscribe with cleanup
obs$.pipe(takeUntilDestroyed(inject(DestroyRef))).subscribe()

// Convert to signal
const data = toSignal(obs$, { initialValue: [] });

// Convert signal to observable
const obs$ = toObservable(signal);

// Template
{{ obs$ | async }}
@if (obs$ | async; as value) { {{ value }} }
```

## Subjects Quick Reference

```typescript
new Subject<T>()             // no replay, current only
new BehaviorSubject<T>(init) // holds current, replays to new
new ReplaySubject<T>(N)      // replay last N emissions
```
---

## Related Topics

- **Previous:** [Interview Questions](./interview-questions)
- **Related:** [RxJS Introduction](./introduction)