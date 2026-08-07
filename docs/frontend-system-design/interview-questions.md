---
id: interview-questions
title: System Design Interview Questions
sidebar_label: Interview Questions
description: Frontend system design interview questions and model answers for Senior Angular engineers.
---

# Frontend System Design Interview Questions

## Framework

For every answer, follow this structure:
1. Clarify requirements
2. High-level architecture
3. Component breakdown
4. State management
5. Data fetching / real-time
6. Performance strategy
7. Trade-offs

---

## Common Questions

**Q: Design a notification system for a banking app.**

Requirements: real-time alerts, persistent notification history, unread count badge, mark as read, different notification types (security alert, payment, info).

Architecture: WebSocket for real-time delivery, REST API for history/mark-as-read. State: `NotificationStore` with `signal<Notification[]>` and `computed unreadCount`. Components: `NotificationBell` (badge), `NotificationDropdown` (list), `NotificationItem`. Performance: `@defer (on interaction)` for dropdown, virtual scroll if >100 items. Accessibility: `aria-live="polite"` region for new notifications, `aria-label="X unread notifications"` on bell icon.

**Q: Design an autocomplete search component.**

Input → `debounceTime(300)` → `distinctUntilChanged()` → `switchMap(q => search(q))` → render results. Handle: loading state, empty state, error state, keyboard navigation (ArrowUp/Down/Enter), screen reader announcements (`role="combobox"`, `aria-expanded`, `aria-activedescendant`), highlight matching text.

**Q: Design a data grid for 100,000 rows.**

Use `CdkVirtualScrollViewport` from Angular CDK. Only render visible rows (~20) + buffer. Server-side pagination + sorting: send sort/filter params to API, don't sort 100k rows client-side. Column virtualization for wide tables. Fixed header via sticky positioning. Row selection with shift+click range. Export to CSV via Web Worker (prevent main thread block).

**Q: How would you architect a micro-frontend solution with Angular?**

Use Module Federation (Webpack 5) with Angular's `@angular-architects/native-federation`. Shell app loads remote entry points lazily via the router: `{ path: 'checkout', loadRemoteModule({ ... }) }`. Share singleton Angular core via `shared: { singleton: true }`. Communicate between microfrontends via a shared event bus (CustomEvents or shared signal store). Consider: CSS isolation (CSS custom properties with prefixes), route ownership, error boundaries for failed remote loads.

---

## Cheat Sheet

```
State types:
  Server state    → HTTP + signal store
  UI state        → local signals
  Shared state    → global signal service
  URL state       → router query params

Real-time options:
  Polling         → simple, wastes bandwidth
  WebSocket       → bidirectional, complex reconnect
  SSE             → one-way, auto-reconnect

Performance for large data:
  Virtual scroll  → render only visible items
  Pagination      → server-side for >10k rows
  @defer          → lazy-load off-screen components
  Web Workers     → heavy computation off main thread
```
