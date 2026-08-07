---
id: approach-framework
title: Machine Coding Approach Framework
sidebar_label: Approach Framework
description: A structured approach for live Angular machine coding interviews — planning, types, components, and time management.
---

# Machine Coding Approach Framework

## The 6-Step Approach

```
1. Clarify (3 min)        → requirements, edge cases, definition of done
2. Types first (5 min)    → TypeScript interfaces drive everything
3. Sketch component tree (3 min) → smart/dumb, state ownership
4. Build skeleton (5 min) → components, service, routes
5. Implement core (40 min) → feature by feature, not file by file
6. Polish (5 min)         → accessibility, error states, edge cases
```

---

## Step 1 — Clarify Before Coding

Questions to ask:

```
"Should this work on mobile?"
"Does sorting persist when I add a new item?"
"What happens when the list is empty?"
"Should I use routing or is this a single view?"
"Do I need to persist state to localStorage?"
"What error states should I handle?"
```

Even if the answer is "just build something", asking shows senior thinking.

---

## Step 2 — Types First

```typescript
// Define all interfaces before writing any component
interface Column {
  id: string;
  title: string;
  cardIds: string[];
}

interface Card {
  id: string;
  title: string;
  columnId: string;
  priority: 'low' | 'medium' | 'high';
}

interface BoardState {
  columns: Record<string, Column>;
  cards: Record<string, Card>;
  columnOrder: string[];
}
```

Types tell the interviewer you think in terms of data structures, not just UI.

---

## Step 3 — Component Tree

Sketch it on paper or describe it:

```
BoardPage (Smart — owns state)
  ├── BoardColumn (Dumb — receives column + cards)
  │     ├── ColumnHeader (Dumb)
  │     ├── CardList (Dumb)
  │     │     └── CardItem (Dumb — emits drag events)
  │     └── AddCardForm (Smart — calls service)
  └── AddColumnForm (Smart)
```

---

## Step 4 — Skeleton First

Build the shell before filling in logic:

```typescript
// 1. Types ✓
// 2. Service with signal state ✓
// 3. Empty components with correct inputs/outputs ✓
// 4. Router (if needed) ✓
// 5. Now implement feature by feature
```

---

## Time Management (90 min interview)

```
0:00–0:08   Clarify + plan
0:08–0:20   Types + service skeleton
0:20–0:50   Core feature (display + primary action)
0:50–1:10   Secondary features (edit, delete, filter)
1:10–1:20   Polish (accessibility, error states, edge cases)
1:20–1:30   Code review with interviewer, discuss trade-offs
```

---

## What Earns Points

```
✓ TypeScript interfaces before any code
✓ OnPush on all components
✓ track item.id in @for
✓ Reactive state with signals
✓ Keyboard accessibility (Enter to submit, Escape to cancel)
✓ Loading and empty states
✓ Clean separation of smart/dumb components
✓ No memory leaks (takeUntilDestroyed)
✗ Incorrect any types
✗ Missing track in @for (performance red flag)
✗ Logic in templates
✗ Nested subscriptions
```

---

## Related Topics

- **Previous:** [Machine Coding Introduction](./introduction)
- **Next:** [Kanban Board](./kanban-board)
