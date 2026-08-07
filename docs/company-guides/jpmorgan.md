---
id: jpmorgan
title: JPMorgan Chase Frontend Interview Guide
sidebar_label: JPMorgan
description: JPMorgan Chase frontend interview process, question patterns, and preparation strategy for Angular engineers.
---

# JPMorgan Chase — Frontend Interview Guide

## Overview

JPMorgan Chase is one of the largest banks in the world. The Technology division runs large-scale Angular applications for trading platforms, wealth management, and customer portals. The interview process is thorough and emphasizes **production readiness** — they want engineers who write code that works at financial industry scale.

---

## Interview Process

Typically 4–5 rounds:

| Round | Format | Duration | Focus |
|---|---|---|---|
| 1. Phone Screen | Technical Q&A | 45 min | JS/TS fundamentals, Angular basics |
| 2. Coding Round | Live coding | 60 min | DSA or machine coding |
| 3. Deep Technical | Architecture discussion | 60 min | Angular internals, performance |
| 4. System Design | Frontend design | 60 min | Scalable UI architecture |
| 5. Behavioral | Behavioral | 45 min | Leadership, conflict, delivery |

---

## Key Focus Areas

### JavaScript / TypeScript
- Event loop and microtask queue
- `this` binding in different contexts
- TypeScript strict mode, generics, `unknown` vs `any`
- ES2020+ features: optional chaining, nullish coalescing, logical assignment

### Angular
- Change detection — Default vs OnPush vs Signals
- Dependency injection — hierarchical injectors, injection tokens
- Reactive forms — typed forms, async validators
- Security — preventing XSS in Angular templates, HttpClient interceptors
- Performance — lazy loading, `@defer`, bundle analysis

### Performance
- Core Web Vitals measurement and improvement
- Memory leak detection in Angular (unsubscribed observables)
- Network waterfall analysis

### Security (Important at JPMorgan)
- Angular's built-in XSS protection (DomSanitizer, template escaping)
- Content Security Policy (CSP) configuration
- CSRF protection patterns with Angular HttpClient

---

## Frequently Asked Questions

**Q: How does Angular protect against XSS?**

Angular's template compiler escapes all interpolated values by default — `{{ userInput }}` is HTML-escaped before insertion. For dynamic HTML, Angular requires explicit `DomSanitizer.bypassSecurityTrustHtml()`, which makes the security decision visible in code review. Angular also prevents binding to dangerous properties like `innerHTML` without sanitization.

**Q: What is the difference between `markForCheck()` and `detectChanges()`?**

`markForCheck()` marks the component and all its ancestors as dirty but doesn't run change detection immediately — it waits for the next CD cycle. Use it in OnPush components when state changes outside Angular's zone (WebSocket callbacks, setTimeout without Zone.js). `detectChanges()` runs change detection synchronously for the component and its subtree. Use it only when you need immediate synchronous rendering, such as after programmatic focus management.

**Q: How would you implement an HTTP interceptor for authentication in a financial application?**

Implement an `HttpInterceptor` that attaches the Authorization header (JWT or session token), handles 401 responses by refreshing the token or redirecting to login, and adds request correlation IDs for debugging. Use `HttpContextToken` to mark requests that should not have the auth header (public APIs). Ensure interceptors don't leak tokens in error logs.

---

## Preparation Strategy

**Weeks 1–2:** Angular security — read the Angular security guide thoroughly. Practice implementing CSP headers and DomSanitizer usage.

**Week 3:** Performance profiling — take a real Angular app and achieve Lighthouse 90+ on Performance.

**Week 4:** Company-specific — study JPMorgan's public Angular engineering blog posts and open-source contributions.

---

## Related Topics

- **Related:** [Angular Change Detection](/docs/angular/change-detection)
- **Related:** [Performance Introduction](/docs/performance/introduction)
- **Related:** [Senior Interview Path](/docs/roadmap/senior-interview-path)
---

## Related Topics

- **Previous:** [Company Guides Overview](./overview)
- **Next:** [Microsoft Guide](./microsoft)
- **Related:** [Performance Introduction](/docs/performance/introduction)
- **Related:** [Angular Change Detection](/docs/angular/change-detection)
- **Related:** [Senior Interview Path](/docs/roadmap/senior-interview-path)