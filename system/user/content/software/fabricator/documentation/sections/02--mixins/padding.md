---
Title: Padding
---

#### `.padding();`

<table class="doc-table">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>Padding value</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.padding(50px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>padding: 50px;</code>
    </pre>
  </div>
</div>

<table class="doc-table">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>top, right, bottom, left</td>
      <td>keyword</td>
      <td>Side presets</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>Padding value</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.padding(left; 20px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>padding-left: 20px;</code>
    </pre>
  </div>
</div>

<table class="doc-table">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>horizontal, vertical</td>
      <td>keyword</td>
      <td>Horizontal or vertical preset</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>Padding value</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.padding(vertical; 20px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>padding-top: 20px;
padding-bottom: 20px;</code>
    </pre>
  </div>
</div>

<table class="doc-table">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>horizontal, vertical</td>
      <td>keyword</td>
      <td>Horizontal or vertical preset</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@left, @top</td>
      <td>unit</td>
      <td>Padding value</td>
      <td></td>
    </tr>
    <tr>
      <td>@right, @bottom</td>
      <td>unit</td>
      <td>Padding value</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.padding(horizontal; 20px; 30px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>padding-left: 20px;
padding-right: 30px;</code>
    </pre>
  </div>
</div>

<table class="doc-table">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@y</td>
      <td>unit</td>
      <td>Vertical padding</td>
    </tr>
    <tr>
      <td>@x</td>
      <td>unit</td>
      <td>Horizontal padding</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.padding(20px; 30px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>padding-top: 20px;
padding-right: 30px;
padding-bottom: 20px;
padding-left: 30px;</code>
    </pre>
  </div>
</div>

<table class="doc-table">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@top</td>
      <td>unit</td>
      <td>Top padding</td>
    </tr>
    <tr>
      <td>@right</td>
      <td>unit</td>
      <td>Top padding</td>
    </tr>
    <tr>
      <td>@bottom</td>
      <td>unit</td>
      <td>Bottom padding</td>
    </tr>
    <tr>
      <td>@left</td>
      <td>unit</td>
      <td>Left padding</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.padding(20px; 30px; 30px; 40px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>padding-top: 20px;
padding-right: 30px;
padding-bottom: 30px;
padding-left: 40px;</code>
    </pre>
  </div>
</div>

#### `.padded();`

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
      <td>@padding</td>
      <td>unit</td>
      <td>@bumperPadding</td>
      <td>Padding value</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.padded(2%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>padding-left: 2%;
padding-right: 2%;</code>
    </pre>
  </div>
</div>
