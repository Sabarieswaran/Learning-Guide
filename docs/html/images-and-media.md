---
id: images-and-media
title: HTML Images and Media
sidebar_label: Images and Media
description: img, picture, srcset, video, audio, and Angular's NgOptimizedImage for Core Web Vitals.
---

# HTML Images and Media

## Images

```html
<!-- Always include width, height, and alt -->
<img
  src="/hero.jpg"
  alt="Team celebrating product launch"
  width="800"
  height="450"
  loading="lazy"
/>

<!-- Above-the-fold — eager loading -->
<img src="/logo.png" alt="Company Logo" width="200" height="60" />

<!-- Responsive images -->
<img
  src="/photo-800.jpg"
  srcset="/photo-400.jpg 400w, /photo-800.jpg 800w, /photo-1600.jpg 1600w"
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
  alt="Team photo"
  width="800"
  height="600"
/>

<!-- Art direction with picture -->
<picture>
  <source media="(max-width: 600px)" srcset="/hero-mobile.webp" type="image/webp" />
  <source media="(min-width: 601px)" srcset="/hero-desktop.webp" type="image/webp" />
  <img src="/hero-desktop.jpg" alt="Hero image" width="1920" height="800" />
</picture>
```

## Angular NgOptimizedImage

```typescript
// Import
import { NgOptimizedImage } from '@angular/common';

// Template — replaces src with ngSrc
<img ngSrc="/hero.jpg" width="800" height="450" alt="Hero" priority />
//                                                              ↑ above fold
```

`NgOptimizedImage` automatically:
- Sets `loading="lazy"` unless `priority` is set
- Generates `srcset` for responsive images
- Warns if `width`/`height` are missing (prevents CLS)
- Uses image CDN transforms if configured

## Video

```html
<video controls width="640" height="360" poster="/thumbnail.jpg">
  <source src="/video.webm" type="video/webm" />
  <source src="/video.mp4" type="video/mp4" />
  <track kind="captions" src="/captions.vtt" srclang="en" label="English" default />
  <p>Your browser does not support video.</p>
</video>
```

---

## Related Topics

- **Previous:** [Links and Navigation](./links-and-navigation)
- **Next:** [Forms](./forms)
