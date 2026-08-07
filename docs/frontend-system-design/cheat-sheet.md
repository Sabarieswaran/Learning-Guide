---
id: cheat-sheet
title: System Design Cheat Sheet
sidebar_label: Cheat Sheet
description: Frontend system design quick reference — framework, state, real-time, performance, and common patterns.
---

# Frontend System Design Cheat Sheet

## The 7-Step Framework

```
1. Clarify (5 min)     → functional + non-functional + out of scope
2. Architecture        → high-level diagram (browser → CDN → API → DB)
3. Components          → smart/dumb tree
4. State               → classify: server / shared / local / URL
5. Data / API          → REST/WS, pagination, error format
6. Performance         → LCP, INP, CLS — specific fixes
7. Trade-offs          → why you chose X over Y
```

## State Classification

```
Server state     → HTTP + signal store, shareReplay(1)
Shared client    → Global signal service
Local UI         → Component signals
URL/router       → Query params (survives refresh)
Form             → Reactive forms
Real-time        → WebSocket → signal store
```

## Real-Time Decision

```
Polling (5–30s)  → operational dashboards, simple
WebSocket        → chat, live metrics, <200ms latency
SSE              → notifications, one-way server push
```

## Performance Patterns

```
Large lists      → CdkVirtualScrollViewport
Heavy components → @defer (on viewport | idle)
Images           → NgOptimizedImage + priority
Initial load     → Angular SSR + lazy routes
Bundle size      → loadComponent, no large libraries
Long tasks       → Web Workers
```

## Common Component Patterns

```
Upload           → chunked, progress signal, retry operator
Search           → debounceTime(300) + switchMap + error recovery
Infinite scroll  → IntersectionObserver on last item
Optimistic UI    → add to signal → send to API → replace on confirm
Virtual scroll   → CdkVirtualScrollViewport + fixed itemSize
```

## API Design for Components

```typescript
// Good — composable, type-safe
name = input.required<string>();
size = input<'sm' | 'md' | 'lg'>('md');
clicked = output<MouseEvent>();

// Good — ng-content for flexible layout
<lib-card>
  <span slot="header">Title</span>
  Body content
</lib-card>
```
---

## Related Topics

- **Previous:** [Interview Questions](./interview-questions)
- **Related:** [System Design Introduction](./introduction)