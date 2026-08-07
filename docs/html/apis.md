---
id: apis
title: HTML Browser APIs
sidebar_label: APIs
description: Intersection Observer, Resize Observer, MutationObserver, Geolocation, Clipboard, and other browser APIs.
---

# HTML Browser APIs

## Intersection Observer

Detect when elements enter or leave the viewport:

```typescript
// Angular directive for lazy loading
@Directive({
  selector: '[appLazyLoad]',
  standalone: true,
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private observer?: IntersectionObserver;
  loaded = output<void>();

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.loaded.emit();
        this.observer?.disconnect();
      }
    }, { threshold: 0.1 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() { this.observer?.disconnect(); }
}
```

## Resize Observer

```javascript
const ro = new ResizeObserver(entries => {
  for (const entry of entries) {
    console.log('Size:', entry.contentRect.width, entry.contentRect.height);
  }
});
ro.observe(document.querySelector('.container'));
```

## MutationObserver

```javascript
const mo = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      console.log('Children changed');
    }
  }
});
mo.observe(targetNode, { childList: true, subtree: true });
```

## Clipboard API

```javascript
// Write
await navigator.clipboard.writeText('Copied text');

// Read
const text = await navigator.clipboard.readText();
```

## Geolocation

```javascript
navigator.geolocation.getCurrentPosition(
  pos => console.log(pos.coords.latitude, pos.coords.longitude),
  err => console.error('Denied:', err.message)
);
```

---

## Related Topics

- **Previous:** [Web Components](./web-components)
- **Related:** [Browser Internals](/docs/browser/introduction)
