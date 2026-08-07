---
id: memory-management
title: Browser Memory Management
sidebar_label: Memory Management
description: JavaScript garbage collection, memory leaks in Angular, detection with Chrome DevTools, and prevention patterns.
---

# Browser Memory Management

## Garbage Collection

JavaScript uses mark-and-sweep garbage collection. The GC marks all objects reachable from roots (global, stack), then collects unreachable objects. Modern V8 uses generational GC — short-lived objects (most Angular signals, component state) are collected cheaply.

---

## Common Angular Memory Leaks

### 1. Unsubscribed Observables

```typescript
// Bad
export class MyComponent implements OnInit {
  ngOnInit() {
    interval(1000).subscribe(n => this.count.set(n)); // never unsubscribes
  }
}

// Good
export class MyComponent {
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    interval(1000).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(n => this.count.set(n));
  }
}
```

### 2. DOM Event Listeners Not Removed

```typescript
// Bad
ngOnInit() {
  document.addEventListener('click', this.handler);
}
// No ngOnDestroy to remove the listener

// Good
ngOnDestroy() {
  document.removeEventListener('click', this.handler);
}
```

### 3. Closures Holding Large Objects

```typescript
// Bad — closure keeps large dataset alive
const largeData = getLargeDataset();
this.processButton.onClick = () => {
  process(largeData); // largeData never collected
};

// Good
processData() {
  const largeData = getLargeDataset();
  process(largeData);
  // largeData collected when function returns
}
```

## Detecting Leaks with Chrome DevTools

1. Open Chrome DevTools → Memory tab
2. Take heap snapshot before the suspected leak
3. Perform the action (navigate, open/close modal)
4. Take another snapshot
5. Compare — look for objects that grew unexpectedly
6. The Allocation timeline view shows what's being retained

---

## Related Topics

- **Previous:** [Event Loop](./event-loop)
- **Next:** [Storage](./storage)
