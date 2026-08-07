---
id: rendering-performance
title: Rendering Performance
sidebar_label: Rendering Performance
description: Layout thrashing, paint storms, compositor layers, virtual scrolling, and browser DevTools profiling.
---

# Rendering Performance

## Frame Budget — The 16ms Rule

```mermaid
gantt
    title Browser Frame Budget (16ms at 60fps)
    dateFormat X
    axisFormat %Lms

    section JavaScript
    JS execution (budget: 10ms) :0, 10

    section Rendering Pipeline
    Style recalculation :10, 11
    Layout / Reflow :11, 12
    Paint :12, 13
    Composite :13, 14

    section Idle
    Idle time (2ms) :14, 16
```

---

## The Performance Budget

Target: 60fps = one frame every 16ms.

Browser frame budget breakdown:
- JavaScript: ~10ms
- Style recalculation: ~1ms
- Layout: ~1ms
- Paint: ~1ms
- Composite: ~1ms

If JavaScript takes > 10ms, the frame is dropped — users see jank.

---

## Avoid Layout Thrashing

```javascript
// Bad — forces synchronous layout repeatedly
elements.forEach(el => {
  const h = el.clientHeight; // forced layout
  el.style.height = h + 'px'; // write
});

// Good — batch reads, then writes
const heights = elements.map(el => el.clientHeight);
elements.forEach((el, i) => {
  el.style.height = heights[i] + 'px';
});
```

Properties that trigger synchronous layout: `offsetWidth/Height`, `clientWidth/Height`, `scrollTop`, `getBoundingClientRect()`.

---

## Virtual Scrolling with Angular CDK

For lists with thousands of items:

```typescript
@Component({
  standalone: true,
  imports: [ScrollingModule],
  template: `
    <cdk-virtual-scroll-viewport itemSize="72" class="viewport">
      <div *cdkVirtualFor="let user of users" class="user-row">
        {{ user.name }}
      </div>
    </cdk-virtual-scroll-viewport>
  `,
  styles: [`
    .viewport { height: 600px; }
    .user-row { height: 72px; }
  `],
})
export class UserListComponent {
  users = input.required<User[]>();
}
```

CDK virtual scrolling renders only ~20 items instead of thousands.

---

## Chrome DevTools Profiling

1. Performance tab → Record
2. Interact with the page
3. Stop recording
4. Look for:
   - Long Tasks (red) > 50ms
   - Forced reflow warnings
   - Large paint areas
   - Layout events

---

## Related Topics

- **Previous:** [Network Optimization](./network-optimization)
- **Next:** [Angular Performance](./angular-performance)
