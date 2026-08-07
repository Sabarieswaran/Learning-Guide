---
id: svg
title: HTML SVG
sidebar_label: SVG
description: Inline SVG, SVG icons, accessibility, and Angular component SVG patterns.
---

# HTML SVG

## Inline SVG

```html
<!-- Inline SVG gives full CSS/JS control -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none"
     aria-hidden="true">
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor" stroke-width="2" />
</svg>
```

`currentColor` inherits the CSS `color` property — SVG icon automatically matches text color.

## Accessible Icon Usage

```html
<!-- Icon only — needs label -->
<button aria-label="Delete item">
  <svg aria-hidden="true" focusable="false">...</svg>
</button>

<!-- Icon with text — icon is decorative -->
<button>
  <svg aria-hidden="true">...</svg>
  Delete
</button>

<!-- Decorative illustration -->
<img src="/illustration.svg" alt="Team collaborating on a project" />
```

## Angular SVG Component

```typescript
@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg [attr.width]="size()" [attr.height]="size()"
         viewBox="0 0 24 24" fill="none" aria-hidden="true">
      @switch (name()) {
        @case ('check') { <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2"/> }
        @case ('x') { <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2"/> }
      }
    </svg>
  `,
})
export class IconComponent {
  name = input.required<'check' | 'x'>();
  size = input(24);
}
```

---

## Related Topics

- **Previous:** [SEO](./seo)
- **Next:** [Canvas](./canvas)
