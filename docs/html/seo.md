---
id: seo
title: HTML SEO
sidebar_label: SEO
description: HTML for SEO — meta tags, Open Graph, structured data, canonical URLs, and Angular SSR for search indexing.
---

# HTML SEO

## Essential Meta Tags

```html
<head>
  <title>Page Title | Site Name</title>          <!-- 50-60 chars -->
  <meta name="description" content="..." />        <!-- 120-158 chars -->
  <link rel="canonical" href="https://example.com/page" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="https://example.com/og.jpg" />
  <meta property="og:url" content="https://example.com/page" />
  <meta property="og:type" content="article" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Page Title" />
</head>
```

## Structured Data (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": { "@type": "Person", "name": "Jane Doe" },
  "datePublished": "2026-08-07"
}
</script>
```

## Angular SSR and SEO

Single-page Angular apps need SSR for SEO:

```typescript
// app.config.server.ts
import { provideServerRendering } from '@angular/platform-server';

// Components use Meta and Title services
@Component({ standalone: true })
export class ArticleComponent implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Article Title | My Site');
    this.meta.updateTag({ name: 'description', content: 'Description here' });
    this.meta.updateTag({ property: 'og:title', content: 'Article Title' });
  }
}
```

---

## Related Topics

- **Previous:** [Accessibility](./accessibility)
- **Next:** [SVG](./svg)
