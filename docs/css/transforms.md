---
id: transforms
title: CSS Transforms
sidebar_label: Transforms
description: CSS 2D and 3D transforms, transform origin, hardware acceleration, and animation use cases.
---

# CSS Transforms

## 2D Transforms

```css
/* Translation */
transform: translateX(50px);
transform: translateY(-20px);
transform: translate(50px, -20px);
transform: translate(50%, 0);  /* relative to element size */

/* Rotation */
transform: rotate(45deg);
transform: rotate(-0.25turn);

/* Scaling */
transform: scale(1.5);        /* uniform scale */
transform: scaleX(2);
transform: scale(1.2, 0.8);   /* different axes */

/* Skewing */
transform: skewX(30deg);
transform: skew(10deg, 5deg);

/* Chaining (right to left) */
transform: translateX(50px) rotate(45deg) scale(1.2);
```

## 3D Transforms

```css
.card {
  transform-style: preserve-3d;  /* enable 3D space for children */
  perspective: 1000px;           /* distance from viewer */
}

.card__front, .card__back {
  backface-visibility: hidden;   /* hide when facing away */
}

.card.is-flipped {
  transform: rotateY(180deg);
}
```

## Transform Origin

```css
.element {
  transform-origin: center;           /* default */
  transform-origin: top left;
  transform-origin: 50% 100%;
}
```

## Why `transform` for Animations

`transform` doesn't affect layout — the element keeps its original space. Combined with `opacity`, these are the only CSS properties that run on the GPU compositor thread, enabling 60fps animations without triggering layout or paint.

---

## Related Topics

- **Previous:** [Animations](./animations)
- **Next:** [Performance](./performance)
