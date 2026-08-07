---
id: interview-questions
title: Angular Interview Questions
sidebar_label: Interview Questions
description: 30+ Angular interview questions at Easy, Medium, Hard, and Senior level with complete answers.
---

# Angular Interview Questions

## Easy

**Q: What is the difference between a component and a directive?**

A component has a template and creates DOM elements. A directive adds behavior to existing elements without creating new DOM. Every component is technically a directive, but not every directive is a component.

**Q: What is data binding in Angular?**

Data binding connects component data to the template. Types:
- Interpolation `{{ value }}` — component to template (one-way)
- Property binding `[property]="value"` — component to template (one-way)
- Event binding `(event)="handler()"` — template to component (one-way)
- Two-way binding `[(ngModel)]="value"` — both directions

**Q: What is the purpose of `trackBy` / `track` in Angular loops?**

`@for` uses `track` to identify items in a list by a unique key. Without it, Angular recreates all DOM elements when the list changes. With `track item.id`, Angular only updates items that actually changed, preserving DOM nodes and component state.

**Q: What are lifecycle hooks? Name the most important ones.**

Functions called at specific points in a component's life:
- `ngOnChanges` — when input values change
- `ngOnInit` — after first `ngOnChanges`, component initialized
- `ngOnDestroy` — before component is destroyed (unsubscribe here)
- `ngAfterViewInit` — after component's view and children are initialized

---

## Medium

**Q: What is the difference between `BehaviorSubject` and `Subject` in Angular state management?**

`Subject` emits to current subscribers only — late subscribers miss previous emissions. `BehaviorSubject` holds the current value and replays it to new subscribers, and provides `.getValue()` for synchronous access. For Angular state management, `BehaviorSubject` is better because new subscribers (components that mount later) receive the current state immediately. Prefer signals for new code.

**Q: How do you prevent memory leaks from observables in Angular?**

Three approaches:
1. `async` pipe — automatically subscribes and unsubscribes
2. `takeUntilDestroyed(destroyRef)` — unsubscribes when component is destroyed
3. `toSignal()` — automatically manages subscription lifecycle

**Q: What is `ChangeDetectionStrategy.OnPush` and when should you use it?**

OnPush makes Angular skip change detection for a component unless: an input reference changes, an event originates from within it, an async pipe observable emits, or `markForCheck()` is called. Use OnPush for all components — it prevents unnecessary renders. With signals, OnPush is even more important because signals bypass Zone.js.

**Q: What are Angular Guards and when would you use each type?**

Guards protect routes:
- `CanActivate` — prevent route activation (auth check)
- `CanActivateChild` — protect all child routes
- `CanDeactivate` — prevent navigation away (unsaved form warning)
- `CanMatch` — conditionally match a route configuration
- `Resolve` — fetch data before route activates

---

## Hard

**Q: Explain Angular's hierarchical dependency injection in detail.**

Angular maintains a tree of injectors mirroring the component tree. When a component requests a token, Angular searches: the component's own injector, then parent component injectors, then the environment (root) injector, then the platform injector. `providedIn: 'root'` creates a singleton in the root environment injector. A `providers` array in a component creates a new injector node — new instances for that subtree, destroyed with the component.

**Q: How does Angular's Ivy compiler differ from ViewEngine?**

ViewEngine used global compilation — it compiled all components together and generated factory files. Ivy compiles each component independently into a self-describing `ɵcmp` definition. This enables:
- Tree-shaking — unused Angular features are eliminated from bundles
- Incremental compilation — only changed files are recompiled
- Smaller bundles — Ivy's locality principle means only used code is included
- Better error messages — Ivy type-checks templates against the component class

**Q: What is the difference between `@ViewChild` and `@ContentChild`?**

`@ViewChild` accesses elements in the component's own template. `@ContentChild` accesses elements projected into the component via `<ng-content>`. A `CardComponent` with `<ng-content>` uses `@ContentChild` to access elements that parent components project into it. Both are available after `ngAfterViewInit` / `ngAfterContentInit` respectively.

---

## Senior

**Q: How would you architect a large-scale Angular application for a team of 30 engineers?**

Use Nx monorepo with feature libraries, shared libraries, and utility libraries. Each feature is a standalone set of components with its own routes, loaded lazily. Shared UI components live in a `ui` library, domain types in a `data-access` library. Enforce boundaries with Nx module boundary rules and ESLint. Use a signal-based global store for app-level state and local signal stores for feature state. Standardize on `takeUntilDestroyed`, typed HTTP clients with OpenAPI-generated types, and OnPush everywhere.

**Q: How do you ensure Angular performance in a financial dashboard with real-time WebSocket data?**

1. Use WebWorkers for data processing — never block the main thread
2. Normalize WebSocket data into a signal store — update only changed records
3. Use OnPush everywhere — changes only propagate where signals are read
4. Use CDK virtual scrolling for data tables — render only visible rows
5. Throttle WebSocket messages before feeding them into signals — don't update faster than the frame rate
6. Use `@defer` for charts and heavy components — load after main content

---

## Cheat Sheet

```
Lifecycle:     ngOnChanges → ngOnInit → ngDoCheck → ngAfterContentInit
               → ngAfterViewInit → [updates] → ngOnDestroy

DI:            inject() / constructor injection
               providedIn: 'root' = singleton
               providers: [X] in component = scoped

CD Strategies: Default = check everything
               OnPush = check only on input change / event / markForCheck
               Signals = targeted, zone-free

Routing:       Routes[], RouterOutlet, RouterLink
               Guards: CanActivate, CanDeactivate, Resolve, CanMatch
               Lazy: loadComponent, loadChildren

Forms:         Template-driven: NgModel, two-way binding
               Reactive: FormControl, FormGroup, FormBuilder
               Typed: FormControl<string>, AbstractControl<T>
```
