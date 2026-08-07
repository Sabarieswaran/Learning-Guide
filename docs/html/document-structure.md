---
id: document-structure
title: HTML Document Structure
sidebar_label: Document Structure
description: DOCTYPE, html/head/body structure, meta tags, viewport, character encoding, and Angular's index.html.
---

# HTML Document Structure

## Complete Document Template

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Page description for SEO" />
    <meta property="og:title" content="Page Title" />
    <meta property="og:description" content="Social sharing description" />
    <meta property="og:image" content="https://example.com/og.png" />
    <title>Page Title — Site Name</title>
    <link rel="canonical" href="https://example.com/page" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <header>...</header>
    <main id="main-content">...</main>
    <footer>...</footer>
    <script src="/app.js" defer></script>
  </body>
</html>
```

## Angular's index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Angular App</title>
  <base href="/">  <!-- Required for Angular Router -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>  <!-- Angular bootstraps here -->
</body>
</html>
```

The `<base href="/">` is critical for Angular's Router — it sets the base URL for relative links.

---

## Key Meta Tags

| Meta Tag | Purpose |
|---|---|
| `charset="UTF-8"` | Enable international characters |
| `viewport` | Mobile scaling control |
| `description` | SEO — appears in search results |
| `og:title/description/image` | Social media sharing |
| `theme-color` | Mobile browser chrome color |
| `robots` | Search engine crawling instructions |

---

## Related Topics

- **Previous:** [HTML Introduction](./introduction)
- **Next:** [Semantic Elements](./semantic-elements)
