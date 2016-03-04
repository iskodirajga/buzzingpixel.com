---
Title: Margin
---

#### `.margin();`

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
      <td>Margin value</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.margin(50px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>margin: 50px;</code>
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
      <td>Margin value</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.margin(left; 20px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>margin-left: 20px;</code>
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
      <td>Margin value</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.margin(vertical; 20px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>margin-top: 20px;
margin-bottom: 20px;</code>
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
      <td>Margin value</td>
      <td></td>
    </tr>
    <tr>
      <td>@right, @bottom</td>
      <td>unit</td>
      <td>Margin value</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.margin(horizontal; 20px; 30px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>margin-left: 20px;
margin-right: 30px;</code>
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
      <td>Vertical margins</td>
    </tr>
    <tr>
      <td>@x</td>
      <td>unit</td>
      <td>Horizontal margins</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.margin(20px; 30px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>margin-top: 20px;
margin-right: 30px;
margin-bottom: 20px;
margin-left: 30px;</code>
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
      <td>Top margin</td>
    </tr>
    <tr>
      <td>@right</td>
      <td>unit</td>
      <td>Top margin</td>
    </tr>
    <tr>
      <td>@bottom</td>
      <td>unit</td>
      <td>Bottom margin</td>
    </tr>
    <tr>
      <td>@left</td>
      <td>unit</td>
      <td>Left margin</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.margin(20px; 30px; 30px; 40px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>margin-top: 20px;
margin-right: 30px;
margin-bottom: 30px;
margin-left: 40px;</code>
    </pre>
  </div>
</div>
