---
Title: Transforms
---

#### `.transform();`

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
      <td>@arguments</td>
      <td>keywords</td>
      <td>Transform rules</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.transform(translateX(10px));</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-ms-transform: translateX(10px);
-webkit-transform: translateX(10px);
transform: translateX(10px);</code>
    </pre>
  </div>
</div>

#### `.rotate();`

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
      <td>@angle</td>
      <td>integer</td>
      <td>45</td>
      <td>Angle</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.rotate(30);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-ms-transform: rotate(30deg);
-webkit-transform: rotate(30deg);
transform: rotate(30deg);</code>
    </pre>
  </div>
</div>

#### `.scale();`

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
      <td>@value</td>
      <td>float</td>
      <td>1</td>
      <td>Scale</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.scale(2);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-ms-transform: scale(2);
-webkit-transform: scale(2);
transform: scale(2);</code>
    </pre>
  </div>
</div>

#### `.skew();`

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
      <td>@x</td>
      <td>integer</td>
      <td>45</td>
      <td>Horizontal skew</td>
    </tr>
    <tr>
      <td>@y</td>
      <td>integer</td>
      <td>0</td>
      <td>Vertical skew</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.skew(30, 15);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-ms-transform: skew(30deg, 15deg);
-webkit-transform: skew(30deg, 15deg);
transform: skew(30deg, 15deg);</code>
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
      <td>x, y</td>
      <td>keyword</td>
      <td>-</td>
      <td>X or Y preset</td>
    </tr>
    <tr>
      <td>@x, @y</td>
      <td>integer</td>
      <td>45</td>
      <td>Vertical or horizontal skew</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.skew(y; 15);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-ms-transform: skewY(15deg);
-webkit-transform: skewY(15deg);
transform: skewY(15deg);</code>
    </pre>
  </div>
</div>

#### `.transform-origin();`

<table class="doc-table">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@x</td>
      <td>integer</td>
      <td>45</td>
      <td>Horizontal origin</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@y</td>
      <td>integer</td>
      <td>0</td>
      <td>Vertical origin</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.transform-origin(15%; 10%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-ms-transform: transform-origin(15%, 10%);
-webkit-transform: transform-origin(15%, 10%);
transform: transform-origin(15%, 10%);</code>
    </pre>
  </div>
</div>

#### `.translate();`

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
      <td>@x</td>
      <td>integer</td>
      <td>0</td>
      <td>X translation</td>
    </tr>
    <tr>
      <td>@y</td>
      <td>integer</td>
      <td>0</td>
      <td>Y translation</td>
    </tr>
    <tr>
      <td>@z</td>
      <td>integer</td>
      <td>-</td>
      <td>Z translation</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.translate(10px; 15px; 20%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-transform: translate3d(10px, 15px, 20%);
transform: translate3d(10px, 15px, 20%);</code>
    </pre>
  </div>
</div>
