---
id: adobe
title: Adobe Frontend Interview Guide
sidebar_label: Adobe
description: Adobe frontend interview process — component APIs, design systems, Angular and React expertise.
---

# Adobe — Frontend Interview Guide

## Overview

Adobe builds complex creative tools like Photoshop on the web, Adobe Express, and enterprise products like Adobe Experience Manager (AEM) and Adobe Analytics. Frontend engineers work on highly interactive, performance-critical applications used by millions of creative professionals.

---

## Interview Process

Typically 4–5 rounds:

| Round | Focus |
|---|---|
| Technical Screen | JS fundamentals, React/Angular |
| Machine Coding | Build a UI component live |
| System Design | Component library or creative tool |
| Behavioral | Leadership, craft, creativity |
| Final | Hiring Manager + skip-level |

---

## Key Focus Areas

### Component API Design
Adobe has extensive component libraries (Spectrum). Questions focus on:
- Designing a composable, accessible component API
- Prop/input design — when to use slots/content projection vs inputs
- Versioning component APIs without breaking changes

### Machine Coding
Adobe frequently asks machine coding problems involving creative tools:
- Build a color picker component
- Implement an image cropping interface
- Create a rich text editor toolbar

### Performance at Scale
Adobe's web apps process large files (images, videos, documents):
- Web Workers for off-thread processing
- Canvas and WebGL rendering
- Memory management for large assets

---

## Frequently Asked Questions

**Q: How would you design the API for a reusable Angular modal component?**

A well-designed modal exposes: `@Input() open`, `@Output() closed`, content via `ng-content`, accessibility handled internally (focus trap, ARIA, scroll lock), size variants via input, and programmatic API via a service for imperative usage. The service approach (`ModalService.open(MyComponent)`) is better for complex modals with dynamic content. Use Angular CDK's overlay for production-grade positioning and backdrop management.

**Q: How would you handle a 50MB image upload with progress feedback?**

Break the file into chunks (5–10MB each), upload sequentially or in parallel using FormData and XHR/fetch, track progress per chunk and aggregate for overall progress, implement retry for failed chunks, resume from the last successful chunk on failure. In Angular, use observables to model the upload stream and expose upload progress via a BehaviorSubject that the template subscribes to.

---

## Related Topics

- **Related:** [Machine Coding Introduction](/docs/machine-coding/introduction)
- **Related:** [Component Library Design](/docs/frontend-system-design/component-library)
