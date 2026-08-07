---
id: interview-questions
title: Machine Coding Interview Questions
sidebar_label: Interview Questions
description: Common machine coding questions, what interviewers look for, and how to handle time pressure.
---

# Machine Coding Interview Questions

## Common Problems by Company

| Company | Common Problems |
|---|---|
| Flipkart | Shopping cart, product search, infinite scroll grid |
| JPMorgan | Trading order form, data table with filters |
| Microsoft | Tree view, drag-and-drop list, multi-step form |
| Adobe | Color picker, image editor toolbar, rich text editor |
| Oracle | Configurable data grid, form builder |

---

## Question Bank

**Easy:**
- Build a todo list with add/edit/delete and localStorage
- Build a star rating component (1–5, half stars)
- Build a tabs component with keyboard navigation
- Build an accordion (show/hide panels)

**Medium:**
- Build a type-ahead search with debounce and cancellation
- Build a multi-step form wizard with validation
- Build a pagination component
- Build a tag input (add/remove tags)

**Hard (Senior):**
- Build a Kanban board with drag and drop
- Build a tree view with lazy loading
- Build a data grid with sort, filter, and virtual scroll
- Build a rich text editor toolbar

---

## What Interviewers Evaluate

```
TypeScript:
  ✓ Defined interfaces before components
  ✓ No 'any' types
  ✓ Proper generics where appropriate

Angular:
  ✓ OnPush on all components
  ✓ track in all @for loops
  ✓ Smart/dumb component separation
  ✓ No manual subscription management (toSignal / async pipe)

Code Quality:
  ✓ Readable variable names
  ✓ Small, focused functions
  ✓ No logic in templates

Accessibility:
  ✓ Keyboard navigation (Enter, Escape, arrow keys)
  ✓ ARIA where needed
  ✓ Focus management after actions

Edge Cases:
  ✓ Empty state
  ✓ Loading state
  ✓ Error state
  ✓ Boundary conditions (empty list, max length)
```

---

## Time Pressure Tactics

When running low on time:

1. **Stub what you can't finish** — comment "TODO: implement drag and drop using CDK DragDrop"
2. **Prioritize the core feature** — a working basic version beats incomplete advanced features
3. **Talk through what you'd add** — interviewers credit verbal architecture even if unimplemented
4. **Don't perfect early** — get the skeleton working before styling

---

## Related Topics

- **Previous:** [Data Grid](./data-grid)
- **Related:** [Angular Signals](/docs/angular/signals)
- **Related:** [Frontend System Design](/docs/frontend-system-design/introduction)
