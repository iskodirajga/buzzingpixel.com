---
Title: SVG
---

#### `.fill();`

<table class="doc-table">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@color</td>
      <td>color</td>
      <td>@baseColor</td>
      <td>Color value</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>-</td>
      <td>Opacity</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.fill(#123);
.fill(red; 50%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>fill: #123;
fill: rgba(155, 155, 155, .5);</code>
    </pre>
  </div>
</div>

<table class="doc-table">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>light, dark</td>
      <td>keyword</td>
      <td>-</td>
      <td>Light or dark preset</td>
    </tr>
    <tr>
      <td>@opacity</td>
      <td>unit</td>
      <td>@defaultOpacity</td>
      <td>Fill opacity</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.fill(light);
.fill(dark; 25%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>fill: rgba(255, 255, 255, .2);
fill: rgba(0, 0, 0, .25);</code>
    </pre>
  </div>
</div>

#### `.stroke();`

<table class="doc-table">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@color</td>
      <td>color</td>
      <td>@baseColor</td>
      <td>Color value</td>
    </tr>
    <tr>
      <td>@width</td>
      <td>unit</td>
      <td>-</td>
      <td>Stroke width</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.stroke(#123);
.stroke(red; 2px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>stroke: #123;
stroke: red 2px;</code>
    </pre>
  </div>
</div>
