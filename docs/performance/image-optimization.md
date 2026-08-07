---
id: image-optimization
title: Image Optimization
sidebar_label: Image Optimization
description: Modern image formats, lazy loading, responsive images, and Angular's NgOptimizedImage.
---

# Image Optimization

## Modern Image Formats

| Format | Best For | Browser Support |
|---|---|---|
| WebP | General (photo + graphics) | All modern |
| AVIF | High compression photos | All modern |
| SVG | Icons, logos, illustrations | All |
| PNG | Graphics with transparency | All |
| JPEG | Photographs | All |

Use WebP with JPEG fallback in `<picture>`.

## Angular NgOptimizedImage

```typescript
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  template: `
    <!-- Above fold — priority disables lazy loading -->
    <img ngSrc="/hero.webp" width="1200" height="600" alt="Hero" priority />

    <!-- Below fold — lazy loads automatically -->
    <img ngSrc="/card.webp" width="400" height="300" alt="Card image" />

    <!-- With image CDN (Cloudinary, Imgix) -->
    <img ngSrc="hero.jpg" width="800" height="450" alt="..." />
    <!-- Automatically generates: /cdn/hero.jpg?w=800&q=85&f=webp -->
  `,
})
export class ImageComponent {}
```

`NgOptimizedImage` provides:
- Lazy loading by default
- `loading="eager"` for priority images
- Automatic `fetchpriority="high"` for priority images
- Width/height validation (prevents CLS)
- srcset generation for responsive images
- Image CDN transforms via loaders

## Responsive Images

```html
<picture>
  <source type="image/avif" srcset="/hero.avif 1x, /hero@2x.avif 2x" />
  <source type="image/webp" srcset="/hero.webp 1x, /hero@2x.webp 2x" />
  <img src="/hero.jpg" width="800" height="450" alt="Hero" loading="eager" />
</picture>
```

---

## Related Topics

- **Previous:** [Angular Performance](./angular-performance)
- **Next:** [Caching](./caching)
