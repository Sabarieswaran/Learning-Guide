---
id: interview-questions
title: HTML Interview Questions
sidebar_label: Interview Questions
description: 20+ HTML interview questions at Easy, Medium, Hard, and Senior levels with full answers.
---

# HTML Interview Questions

## Easy

**Q: What is the difference between `<div>` and `<section>`?**

`<div>` has no semantic meaning — it's a generic container for styling. `<section>` semantically groups related content and is a landmark region that screen readers can navigate to. Always prefer semantic elements when the content has meaning.

**Q: Why is the `alt` attribute important on images?**

Screen readers announce the alt text to visually impaired users. Search engines index it for image SEO. It shows when the image fails to load. Empty alt (`alt=""`) tells screen readers to skip a decorative image. Missing alt is an accessibility violation.

**Q: What does `<link rel="canonical">` do?**

It tells search engines which URL is the "master" version of a page. Important when content is accessible at multiple URLs (with/without trailing slash, HTTP/HTTPS, www/no-www). Without canonical tags, search engines may split link equity across duplicates.

---

## Medium

**Q: Explain the difference between `defer` and `async` on script tags.**

Both download scripts without blocking HTML parsing. `defer` executes in document order after HTML is fully parsed. `async` executes immediately when downloaded, in no guaranteed order. Use `defer` for scripts that depend on the DOM or each other. Use `async` for independent analytics scripts.

**Q: What is the Shadow DOM and how does it affect CSS?**

Shadow DOM creates an encapsulated DOM subtree with its own styles that don't leak out, and page styles don't leak in. Angular uses it with `ViewEncapsulation.ShadowDom`. Styles inside a shadow root only apply to elements inside it. CSS custom properties (variables) can still cross shadow boundaries.

---

## Hard

**Q: What is the `<base>` element and why is it required in Angular?**

`<base href="/">` sets the base URL for all relative URLs in the document. Angular's Router uses it to calculate route paths. Without it, relative URLs in templates and `RouterLink` are resolved incorrectly, breaking navigation. It's the first element Angular places in `<head>`.

**Q: Explain how `IntersectionObserver` works and how it improves performance.**

`IntersectionObserver` watches elements and calls a callback when their intersection with a viewport (or ancestor element) changes. It's efficient because it's calculated asynchronously by the browser (not on every scroll event), uses the compositor thread, and batches observations. Used for: lazy loading images and components, infinite scroll, read tracking, and Angular's `@defer (on viewport)`.

---

## Cheat Sheet

```
Structure:    DOCTYPE html, html[lang], head, body
Head:         charset, viewport, title, meta[description], canonical
Landmarks:    header, nav, main (one!), section, article, aside, footer
Text:         h1-h6 (no skipping), p, strong, em, code, pre, dl/dt/dd
Lists:        ul+li, ol+li, dl+dt+dd
Forms:        form, fieldset, legend, label[for], input[id], button
Tables:       table, caption, thead, th[scope], tbody, tr, td, tfoot
Images:       img[alt][width][height], picture, source
Accessibility: aria-label, aria-labelledby, role, aria-expanded, aria-hidden
Scripts:      <script defer>, <script async>
```


---

## Related Topics

- **Previous:** [Best Practices](./best-practices)
- **Next:** [Cheat Sheet](./cheat-sheet)
- **Related:** [CSS Interview Questions](/docs/css/interview-questions)
- **Related:** [Accessibility](./accessibility)
