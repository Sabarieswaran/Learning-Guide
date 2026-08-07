---
id: semantic-elements
title: HTML Semantic Elements
sidebar_label: Semantic Elements
description: article, section, nav, main, aside, header, footer — semantic HTML and why it matters for accessibility and SEO.
---

# HTML Semantic Elements

## Landmark Elements

```html
<header>          <!-- site or section header -->
<nav>             <!-- navigation links -->
<main>            <!-- primary content (one per page) -->
<section>         <!-- thematic content grouping -->
<article>         <!-- self-contained content -->
<aside>           <!-- secondary/supplementary content -->
<footer>          <!-- footer for page or section -->
```

## A Semantic Page Layout

```html
<body>
  <header>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>

  <main id="main-content">
    <article>
      <header>
        <h1>Article Title</h1>
        <p><time datetime="2026-08-07">August 7, 2026</time></p>
      </header>
      <section>
        <h2>Introduction</h2>
        <p>Content here.</p>
      </section>
      <footer>
        <p>Author: Jane Doe</p>
      </footer>
    </article>

    <aside aria-label="Related articles">
      <h2>Related</h2>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Company Name</p>
  </footer>
</body>
```

## section vs article vs div

- `<article>` — self-contained, could be extracted from page (blog post, news story, comment)
- `<section>` — thematic grouping within a page (must have a heading)
- `<div>` — no semantic meaning, use for styling/layout only

---

## Related Topics

- **Previous:** [Document Structure](./document-structure)
- **Next:** [Text Content](./text-content)
