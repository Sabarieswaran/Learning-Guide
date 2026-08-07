---
id: canvas
title: HTML Canvas
sidebar_label: Canvas
description: Canvas 2D API, drawing primitives, animations, and Angular integration for data visualization.
---

# HTML Canvas

## Canvas Basics

```html
<canvas id="myCanvas" width="800" height="600">
  Fallback content for browsers without canvas support.
</canvas>
```

```typescript
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

// Drawing
ctx.fillStyle = '#dd0031';
ctx.fillRect(10, 10, 100, 80);

ctx.strokeStyle = '#333';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(200, 100, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.font = '16px Inter';
ctx.fillText('Hello Canvas', 20, 200);
```

## Angular Canvas Component

```typescript
@Component({
  selector: 'app-chart',
  standalone: true,
  template: `<canvas #canvas [width]="width()" [height]="height()"></canvas>`,
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  data = input.required<number[]>();
  width = input(600);
  height = input(300);

  ngAfterViewInit() {
    this.draw();
  }

  private draw() {
    const ctx = this.canvasRef.nativeElement.getContext('2d')!;
    // draw chart with this.data()
  }
}
```

For production data visualization in Angular, use Chart.js, D3.js, or Angular-specific libraries like ngx-charts.

---

## Related Topics

- **Previous:** [SVG](./svg)
- **Next:** [Web Components](./web-components)
