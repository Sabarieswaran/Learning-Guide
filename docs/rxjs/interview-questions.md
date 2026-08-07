---
id: interview-questions
title: RxJS Interview Questions
sidebar_label: Interview Questions
description: RxJS interview questions from Easy to Senior — observables, subjects, operators, and Angular integration.
---

# RxJS Interview Questions

## Easy

**Q: What is an Observable and how does it differ from a Promise?**

A Promise handles a single future value and is eager (starts immediately). An Observable is lazy (starts on subscribe), can emit multiple values over time, supports cancellation via unsubscribe, and has a rich operator library for transformation.

**Q: What is the `async` pipe in Angular?**

The `async` pipe subscribes to an Observable (or Promise) and returns the latest value, handling subscription and unsubscription automatically when the component is destroyed. It triggers change detection when new values arrive.

---

## Medium

**Q: Explain the four flattening operators.**

All four subscribe to an inner observable returned by a function:
- `switchMap` — cancels pending inner when new outer arrives. Best for search.
- `mergeMap` — concurrent, all inner observables run simultaneously.
- `concatMap` — sequential queue, one at a time in order.
- `exhaustMap` — ignores new outer while inner is running.

**Q: When would you use a BehaviorSubject vs a signal?**

`BehaviorSubject` holds the current value, replays to new subscribers, and is integrated with RxJS operators. Use it in existing reactive codebases or when you need `.pipe()` operators on the state. Signals are simpler, don't need subscriptions, integrate with Angular's change detection directly, and are preferred for new code.

---

## Hard

**Q: What is `shareReplay(1)` and when would you use it?**

`shareReplay(1)` multicasts an observable to all subscribers and caches the last emission for replay to new subscribers. Use it for HTTP requests that should not be repeated: authentication checks, configuration loading, data that multiple components need from the same source. Without it, each component subscribing would trigger a new HTTP request (cold observable).

**Q: Explain how `takeUntilDestroyed` works in Angular.**

`takeUntilDestroyed` uses `DestroyRef` to get notified when the component's injection context is destroyed. Internally, it creates an observable from the `DestroyRef` that emits when `onDestroy` fires, then uses `takeUntil` with that observable. When the component is destroyed, the subject emits, and `takeUntil` completes the source observable, unsubscribing automatically.

---

## Cheat Sheet

```
Observable lifecycle: next* → (complete | error)
Cold: new execution per subscriber (HTTP)
Hot: shared execution (Subject, DOM events)

Subjects:
  Subject         → no replay, current subscribers only
  BehaviorSubject → current value, replays to new subscribers
  ReplaySubject(N)→ replay last N

Flattening:
  switchMap   → cancel prev (search)
  mergeMap    → parallel (load list items)
  concatMap   → sequential (save operations)
  exhaustMap  → ignore during flight (submit)

Cleanup:
  async pipe
  takeUntilDestroyed(destroyRef)
  toSignal()
```
