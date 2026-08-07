---
id: creation-operators
title: RxJS Creation Operators
sidebar_label: Creation Operators
description: RxJS creation operators — of, from, interval, timer, fromEvent, ajax, and custom observables.
---

# RxJS Creation Operators

## Core Creation

```typescript
import { of, from, interval, timer, fromEvent, EMPTY, NEVER, range } from 'rxjs';
import { ajax } from 'rxjs/ajax';

of(1, 2, 3)                      // 1, 2, 3, complete
of({ name: 'Alice' })            // single object emission

from([1, 2, 3])                  // from iterable
from(Promise.resolve('data'))    // from Promise
from('hello')                    // from string: h, e, l, l, o

range(1, 5)                      // 1, 2, 3, 4, 5

interval(1000)                   // 0, 1, 2... every second
timer(3000)                      // emit 0 after 3s, complete
timer(2000, 1000)                // emit after 2s, then every 1s

fromEvent(button, 'click')       // DOM event stream
fromEvent(window, 'resize')
fromEvent(input, 'input')

EMPTY                            // complete immediately, no emissions
NEVER                            // never emits, never completes
```

## defer — Lazy Observable Creation

```typescript
// Create a new observable for each subscription
const deferred$ = defer(() => {
  // This runs at subscription time
  return of(new Date().getTime()); // different value each subscribe
});
```

## iif — Conditional

```typescript
const result$ = iif(
  () => user.isAdmin,
  adminData$,
  userData$
);
```

---

## Related Topics

- **Previous:** [RxJS Introduction](./introduction)
- **Next:** [Transformation Operators](./transformation-operators)
