---
id: observables
title: RxJS Observables
sidebar_label: Observables
description: Observable contract, creation, subscription, unsubscription, cold vs hot observables, and marble diagrams.
---

# RxJS Observables

## The Observable Contract

An Observable emits `next` notifications (zero or more), then either:
- `complete` — stream ended normally
- `error` — stream ended with an error

After complete or error, no more notifications are sent.

```typescript
const obs$ = new Observable<number>(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.complete();
  subscriber.next(3); // ignored — already completed
});
```

## Creating Observables

```typescript
// From values
of(1, 2, 3)                      // 1 → 2 → 3 → complete

// From array
from([1, 2, 3])                  // same

// From DOM event
fromEvent(window, 'resize')

// Timer
interval(1000)                   // 0 → 1 → 2 → ... every second
timer(3000, 1000)                // 3s delay then every second

// HTTP (Angular)
this.http.get<User[]>('/api/users')
```

## Cold vs Hot

**Cold** — creates a new execution for each subscriber:
```typescript
const cold$ = this.http.get('/api/users'); // new HTTP request per subscribe
```

**Hot** — shared execution, late subscribers miss past values:
```typescript
const subject = new Subject<string>();
const hot$ = subject.asObservable();
// All subscribers see same emissions going forward
```

## Subscription and Cleanup

```typescript
const sub = obs$.subscribe({
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log('done'),
});

sub.unsubscribe(); // stop receiving values and clean up

// Better — use takeUntilDestroyed
obs$.pipe(
  takeUntilDestroyed(this.destroyRef)
).subscribe(value => this.data.set(value));
```

---

## Related Topics

- **Previous:** [RxJS Introduction](./introduction)
- **Next:** [Subjects](./subjects)
