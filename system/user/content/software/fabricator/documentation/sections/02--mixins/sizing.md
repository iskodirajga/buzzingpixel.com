---
Title: Sizing
---

#### `.width(); .height();`

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
      <td>Width or Height</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@max</td>
      <td>unit</td>
      <td>Maximum</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.width(40px; 50px);
.height(30px; 40%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>width: 40px;
max-width: 50px;
height: 30px;
max-height: 40%;</code>
    </pre>
  </div>
</div>

#### `.min-width(); .max-width(); .min-height(); .max-height();`

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
      <td>Minimum or maximum</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.max-width(40px);
.min-width(20px);
.max-height(50px);
.min-height(30px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>max-width: 40px;
min-width: 20px;
max-height: 50px;
min-height: 30px;</code>
    </pre>
  </div>
</div>

#### `.size(); .min-size(); .max-size();`

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
      <td>@width</td>
      <td>unit</td>
      <td>Width or Width/Height</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@height</td>
      <td>unit</td>
      <td>Height</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.size(150px);
.size(100px; 60px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>height: 150px;
width: 150px;

height: 60px;
width: 100px;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.min-size(120px);
.min-size(20px; 30px);

.max-size(200px);
.max-size(40px; 50px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>min-height: 120px;
min-width: 120px;

min-height: 30px;
min-width: 20px;

max-height: 200px;
max-width: 200px;

max-height: 50px;
max-width: 40px;</code>
    </pre>
  </div>
</div>

#### `.square();`

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
      <td>@size</td>
      <td>unit</td>
      <td>Width and height</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.square(50px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>height: 50px;
width: 50px;</code>
    </pre>
  </div>
</div>

#### `.ratio();`

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
      <td>embed</td>
      <td>keyword</td>
      <td>-</td>
      <td>Embed</td>
    </tr>
    <tr>
      <td>@ratio</td>
      <td>unit</td>
      <td>(16/9)</td>
      <td>Ratio</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.ratio((4 / 3));</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>display: block;
height: 0;
padding-top: 75%;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.selector {
    .ratio(embed; (16 / 9));
}</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>.selector {
    overflow: hidden;
    position: relative;
}
.selector:before {
    content: ' ';
    display: block;
    height: 0;
    padding-top: 56.25%;
}</code>
    </pre>
  </div>
</div>

#### `.circle();`

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
      <td>@diameter</td>
      <td>unit</td>
      <td>-</td>
      <td>Diameter</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@crop</td>
      <td>boolean</td>
      <td>false</td>
      <td>Crop</td>
      <td></td>
    </tr>
    <tr>
      <td>@display</td>
      <td>block, inline</td>
      <td>block</td>
      <td>Display value</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.circle(10px; true);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>display: block;
height: 10px;
background-clip: border-box;
border-radius: 5px;
width: 10px;
overflow: hidden;</code>
    </pre>
  </div>
</div>
