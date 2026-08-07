---
id: best-practices
title: Angular Best Practices
sidebar_label: Best Practices
description: Angular best practices for production — component design, performance, state management, security, and testing.
---

# Angular Best Practices

## Component Design

- Use `ChangeDetectionStrategy.OnPush` on all components
- Prefer `input()` and `output()` over `@Input()` / `@Output()`
- Keep components small — split when template exceeds ~50 lines
- Separate smart (container) and dumb (presentational) components
- Use content projection (`ng-content`) for flexible component APIs

## State Management

- Use signals for component and feature state
- Use services with signal stores for global state
- Avoid storing derived data — use `computed()` instead
- Never mutate signal values directly — use `.set()`, `.update()`, `.mutate()`

## Performance

- Use `track item.id` in every `@for` loop
- Apply `@defer` for non-critical components (reviews, recommendations, charts)
- Lazy-load all routes with `loadComponent`/`loadChildren`
- Use `NgOptimizedImage` for all `<img>` elements
- Apply `async` pipe or `toSignal()` instead of manual subscriptions

## Security

- Never bypass Angular's built-in XSS protection with `bypassSecurityTrustHtml()` unless absolutely necessary
- Validate all user inputs — frontend validation is UX, backend validation is security
- Use Angular's `HttpClient` — it automatically sends XSRF tokens
- Never store JWTs in localStorage — use httpOnly cookies instead
- Enable Content Security Policy (CSP) headers from the server

## Testing

- Test components with `@testing-library/angular` for behavior-focused tests
- Use `HttpClientTestingModule` for service tests
- Mock services in component tests — don't rely on real HTTP
- Test edge cases: empty states, error states, loading states
- Write at least one E2E test per user journey

## Code Style

- Enable `strict` mode in `tsconfig.json`
- Use barrel files (`index.ts`) for clean imports
- Define interfaces for all API response types
- Co-locate tests with components (`my.component.spec.ts`)
- Use ESLint with `@angular-eslint` rules

---

## Related Topics

- **Related:** [Angular Interview Questions](./interview-questions)
- **Related:** [Angular Cheat Sheet](./cheat-sheet)
