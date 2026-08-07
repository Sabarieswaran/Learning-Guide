---
id: text-content
title: HTML Text Content
sidebar_label: Text Content
description: Headings, paragraphs, lists, quotes, code, and text formatting elements with accessibility guidance.
---

# HTML Text Content

## Headings

```html
<h1>Page Title (one per page)</h1>
<h2>Major Section</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Rarely needed</h5>
<h6>Rarely needed</h6>
```

**Rule:** Never skip heading levels. `h1` → `h2` → `h3`, never `h1` → `h3`.

## Text Elements

```html
<p>Paragraph of text.</p>
<strong>Important text</strong>  <!-- semantic: importance -->
<em>Emphasized text</em>         <!-- semantic: emphasis -->
<b>Bold text</b>                 <!-- visual bold, no semantic meaning -->
<i>Italic text</i>               <!-- visual italic, no semantic meaning -->
<small>Fine print</small>
<mark>Highlighted text</mark>
<del>Deleted text</del>
<ins>Inserted text</ins>
<abbr title="World Wide Web">WWW</abbr>
<code>inline code</code>
<pre><code>block code</code></pre>
<kbd>Ctrl+K</kbd>                <!-- keyboard input -->
<samp>console output</samp>
<var>x</var>                    <!-- variable name -->
```

## Lists

```html
<!-- Unordered -->
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>

<!-- Ordered -->
<ol start="3" reversed>
  <li>Third item</li>
  <li>Fourth item</li>
</ol>

<!-- Description list (key-value pairs) -->
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
  <dt>Another term</dt>
  <dd>Its definition</dd>
</dl>
```

## Quotes

```html
<blockquote cite="https://source.com">
  <p>A long quotation that stands on its own.</p>
</blockquote>

<q>An inline quotation.</q>  <!-- browser adds " " automatically -->
```

---

## Related Topics

- **Previous:** [Semantic Elements](./semantic-elements)
- **Next:** [Links and Navigation](./links-and-navigation)
