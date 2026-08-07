---
id: tables
title: HTML Tables
sidebar_label: Tables
description: HTML table structure, accessibility, captions, and when NOT to use tables for layout.
---

# HTML Tables

## Accessible Table Structure

```html
<table>
  <caption>Q3 2026 Revenue by Region</caption>
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="col">Q3 Revenue</th>
      <th scope="col">Growth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">North America</th>
      <td>$4.2M</td>
      <td>+12%</td>
    </tr>
    <tr>
      <th scope="row">Europe</th>
      <td>$2.8M</td>
      <td>+8%</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>$7.0M</td>
      <td>+10%</td>
    </tr>
  </tfoot>
</table>
```

## Key Accessibility Rules

- Always add `<caption>` describing the table's content
- Use `scope="col"` on column headers, `scope="row"` on row headers
- Use `<th>` not `<td>` for headers
- Never use tables for page layout — use CSS Grid or Flexbox

---

## Related Topics

- **Previous:** [Forms](./forms)
- **Next:** [Accessibility](./accessibility)
