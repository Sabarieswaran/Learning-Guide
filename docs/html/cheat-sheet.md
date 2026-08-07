---
id: cheat-sheet
title: HTML Cheat Sheet
sidebar_label: Cheat Sheet
description: HTML quick reference — elements, attributes, ARIA, meta tags, and form elements.
---

# HTML Cheat Sheet

## Document

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title</title>
</head>
<body></body>
</html>
```

## Landmark Elements

```
<header>    site/section header
<nav>       navigation (use aria-label for multiple navs)
<main>      primary content (ONE per page)
<section>   thematic grouping (must have heading)
<article>   self-contained content
<aside>     secondary content
<footer>    page/section footer
```

## Text

```
<h1>–<h6>   headings (no skipping levels)
<p>         paragraph
<strong>    important (bold)
<em>        emphasis (italic)
<code>      inline code
<pre>       preformatted block
<blockquote cite="url">  long quote
<q>         inline quote
<time datetime="2026-08-07">  machine-readable date
<mark>      highlighted
<abbr title="Explanation">  abbreviation
```

## Lists

```
<ul><li>    unordered list
<ol><li>    ordered list (start, reversed attrs)
<dl><dt><dd> description list
```

## Media

```
<img src="" alt="" width="" height="" loading="lazy" />
<picture><source media=""><img /></picture>
<video controls poster=""><source /></video>
<audio controls><source /></audio>
```

## Forms

```
<form action method novalidate>
<fieldset><legend>
<label for="id">
<input id type name autocomplete required pattern minlength maxlength>
<textarea rows cols>
<select><option value>
<button type="submit|reset|button">
```

## ARIA Roles

```
role="banner"         → <header>
role="navigation"     → <nav>
role="main"           → <main>
role="complementary"  → <aside>
role="contentinfo"    → <footer>
role="alert"          → live error
role="status"         → live status
role="dialog"         → modal
role="button"         → button-like element
```

## Script Loading

```
<script src="" defer>   → after parse, in order
<script src="" async>   → when ready, any order
<link rel="preload" href="" as="font|image|style|script">
<link rel="prefetch" href="">    → background preload
<link rel="preconnect" href="">  → DNS + TLS early
```


---

## Related Topics

- **Previous:** [Interview Questions](./interview-questions)
- **Related:** [HTML Introduction](./introduction)
- **Related:** [CSS Introduction](/docs/css/introduction)
