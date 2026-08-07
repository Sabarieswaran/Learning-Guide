---
id: network-optimization
title: Network Performance Optimization
sidebar_label: Network Optimization
description: Reducing Angular bundle size, HTTP caching, compression, preloading, and CDN strategies.
---

# Network Performance Optimization

## Bundle Size Reduction

```bash
# Analyze bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/my-app/browser/stats.json
```

Key strategies:
- Lazy load every route with `loadComponent`
- Replace heavy libraries (moment → date-fns, lodash → native)
- Use `@defer` for non-critical components
- Import only needed Angular Material components

## HTTP Caching

```typescript
// Service worker for offline caching
// ng add @angular/pwa

// ngsw-config.json
{
  "dataGroups": [
    {
      "name": "api-freshness",
      "urls": ["/api/**"],
      "cacheConfig": {
        "strategy": "freshness",
        "maxSize": 100,
        "maxAge": "1d",
        "timeout": "10s"
      }
    }
  ]
}
```

## Resource Hints

```html
<!-- Preconnect to critical third-party domains -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://api.example.com" />

<!-- Preload critical assets -->
<link rel="preload" href="/fonts/inter.woff2" as="font" crossorigin />
<link rel="preload" href="/hero.jpg" as="image" />

<!-- Prefetch next likely navigation -->
<link rel="prefetch" href="/dashboard-bundle.js" />
```

## Compression

Enable Brotli/gzip on your server:

```nginx
# Nginx
gzip on;
gzip_types text/css application/javascript application/json;
brotli on;
brotli_types text/css application/javascript application/json;
```

Brotli is ~15-25% smaller than gzip for text assets.

---

## Related Topics

- **Previous:** [Core Web Vitals](./core-web-vitals)
- **Next:** [Rendering Performance](./rendering-performance)
