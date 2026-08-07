---
id: best-practices
title: HTML Best Practices
sidebar_label: Best Practices
description: HTML best practices for performance, accessibility, and SEO with Angular-specific guidance.
---

# HTML Best Practices

## Structure

- One `<h1>` per page — describes the page topic
- Never skip heading levels (`h1` → `h2` → `h3`)
- Use `<main>` to wrap primary content (one per page)
- Include `lang="en"` on the `<html>` element
- Add `charset="UTF-8"` as the first meta tag

## Performance

```html
<!-- Preload critical resources -->
<link rel="preload" href="/fonts/inter.woff2" as="font" crossorigin />
<link rel="preconnect" href="https://api.example.com" />

<!-- Defer non-critical scripts -->
<script src="/app.js" defer></script>
<script src="/analytics.js" async></script>

<!-- Explicit image dimensions (prevents CLS) -->
<img src="/hero.jpg" alt="..." width="1200" height="600" />

<!-- Lazy load below-fold images -->
<img src="/card.jpg" alt="..." loading="lazy" width="300" height="200" />
```

## Accessibility Checklist

- All images have `alt` text (empty for decorative)
- All form inputs have associated `<label>`
- Interactive elements are keyboard-accessible
- Color is not the only way to convey information
- Focus styles are visible
- Skip links are present for keyboard users
- ARIA is used to enhance, not replace, semantic HTML

## Angular-Specific

- Set meaningful `<title>` per route using Angular's `Title` service
- Update `meta[description]` per route for SPA SEO
- Use `NgOptimizedImage` for all `<img>` elements
- Add `aria-live` regions for dynamic content updates

---

## Related Topics

- **Previous:** [HTML APIs](./apis)
- **Next:** [Interview Questions](./interview-questions)
