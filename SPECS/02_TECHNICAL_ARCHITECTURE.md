# 02_TECHNICAL_ARCHITECTURE.md

# Technical Architecture

## Purpose

This document defines the technical architecture for the Learning Guide
documentation website.

The goal is to provide a maintainable, scalable, mobile-friendly
documentation platform that can grow to thousands of pages while
remaining easy to navigate.

------------------------------------------------------------------------

# Technology Stack

## Documentation Framework

Docusaurus (latest stable)

Reasons:

-   Markdown-first authoring
-   Automatic sidebar generation
-   Search support
-   Dark mode
-   Responsive design
-   GitHub Pages deployment
-   Mermaid support
-   Excellent documentation ecosystem

------------------------------------------------------------------------

# Repository Layout

``` text
Learning-Guide/
├── docs/
│   ├── roadmap/
│   ├── html/
│   ├── css/
│   ├── javascript/
│   ├── typescript/
│   ├── angular/
│   ├── rxjs/
│   ├── browser/
│   ├── performance/
│   ├── frontend-system-design/
│   ├── machine-coding/
│   ├── leadership/
│   └── company-guides/
├── static/
├── src/
├── blog/
├── docusaurus.config.js
├── sidebars.js
└── package.json
```

------------------------------------------------------------------------

# Documentation Rules

-   One topic per Markdown file.
-   Split files longer than \~300 lines into logical subtopics.
-   Cross-link related concepts.
-   Use meaningful filenames.

Example:

``` text
docs/angular/
  signals.md
  standalone-components.md
  lifecycle-hooks.md
  change-detection.md
```

------------------------------------------------------------------------

# Sidebar Design

Group content by learning path.

-   Roadmap
-   HTML
-   CSS
-   JavaScript
-   TypeScript
-   Angular
-   RxJS
-   Browser Internals
-   Performance
-   Frontend System Design
-   Machine Coding
-   Leadership
-   Company Guides

------------------------------------------------------------------------

# UI Requirements

The site must provide:

-   Sticky sidebar
-   Sticky header
-   Search
-   Breadcrumbs
-   Reading time
-   Table of contents
-   Previous/Next navigation
-   Dark/Light mode
-   Mobile responsive layout
-   Mermaid diagram rendering
-   Syntax highlighting
-   Copy code button

------------------------------------------------------------------------

# Search

Search should index:

-   Titles
-   Headings
-   Interview questions
-   Code examples
-   Keywords

Results should navigate directly to the matching page.

------------------------------------------------------------------------

# Performance

Target Lighthouse:

-   Performance: 95+
-   Accessibility: 100
-   Best Practices: 100
-   SEO: 100

Optimize:

-   Lazy loading
-   Optimized images
-   Minimal JavaScript
-   Static generation

------------------------------------------------------------------------

# Accessibility

Follow WCAG 2.1 AA.

Requirements:

-   Semantic HTML
-   Keyboard navigation
-   Focus visibility
-   Color contrast
-   Alt text
-   Accessible tables
-   Accessible code blocks

------------------------------------------------------------------------

# Mermaid Diagrams

Use Mermaid for:

-   Component diagrams
-   Architecture diagrams
-   Sequence diagrams
-   Flowcharts
-   State diagrams

------------------------------------------------------------------------

# Code Examples

Every code example should include:

-   Language identifier
-   Explanation
-   Production notes
-   Common mistakes

------------------------------------------------------------------------

# Deployment

Deploy automatically through GitHub Actions to GitHub Pages.

Every merge to main should:

1.  Build documentation
2.  Validate links
3.  Publish latest version

------------------------------------------------------------------------

# Future Enhancements

-   PWA support
-   Offline reading
-   AI-powered search
-   Interactive quizzes
-   Flashcards
-   Progress tracking
-   PDF export
-   Version selector

------------------------------------------------------------------------

# Engineering Principles

-   Prefer simplicity.
-   Avoid custom implementations when framework features exist.
-   Keep documentation content separate from presentation.
-   Optimize for maintainability.
-   Review architecture before introducing new plugins.
