---
id: animations
title: CSS Animations
sidebar_label: Animations
description: CSS transitions, keyframe animations, animation performance, reduced motion, and Angular animations.
---

# CSS Animations

## Transitions

```css
.button {
  background: #dd0031;
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition:
    background 200ms ease,
    transform 200ms ease,
    box-shadow 200ms ease;
}

.button:hover {
  background: #c50029;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(221,0,49,0.35);
}
```

## @keyframes

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeInUp 300ms ease forwards;
}

/* Stagger children */
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 100ms; }
.card:nth-child(3) { animation-delay: 200ms; }
```

## Performance — Only Animate These

Animations that stay on the compositor thread (no layout or paint):
- `transform: translate/scale/rotate`
- `opacity`
- `filter`

Animations that trigger layout (avoid for smooth 60fps):
- `width`, `height`, `top`, `left`, `margin`, `padding`

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Always respect `prefers-reduced-motion` — some users experience vestibular disorders.

---

## Related Topics

- **Previous:** [Custom Properties](./custom-properties)
- **Next:** [Transforms](./transforms)
