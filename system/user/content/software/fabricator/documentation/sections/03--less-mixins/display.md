---
Title: Display
---

#### `.hide();`

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.hide();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>display: none;</code>
    </pre>
  </div>
</div>

#### `.show();`

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.show();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>display: inherit;</code>
    </pre>
  </div>
</div>

#### `.hidden();`

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.hidden();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>visibility: hidden;</code>
    </pre>
  </div>
</div>

#### `.visible();`

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.visible();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>visibility: visible;</code>
    </pre>
  </div>
</div>

#### `.block();`

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
      <td>@width</td>
      <td>unit</td>
      <td>Width</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.block(40px; 30px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>display: block;
width: 40px;
height: 30px;</code>
    </pre>
  </div>
</div>

#### `.spaced();`

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
      <td>@margin</td>
      <td>unit</td>
      <td>@blockMarginBottom</td>
      <td>Bottom margin</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.spaced(5px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>margin-bottom: 5px;</code>
    </pre>
  </div>
</div>

#### `.spaced-block();`

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
      <td>@margin</td>
      <td>unit</td>
      <td>@blockMarginBottom</td>
      <td>Bottom margin</td>
    </tr>
    <tr>
      <td>@width</td>
      <td>unit</td>
      <td>-</td>
      <td>Width</td>
    </tr>
    <tr>
      <td>@height</td>
      <td>unit</td>
      <td>-</td>
      <td>Height</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.spaced-block(0.5; 2; 4);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>display: block;
margin-bottom: 0.5rem;
width: 2rem;
height: 4rem;</code>
    </pre>
  </div>
</div>

#### `.clear();`

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
      <td>keyword</td>
      <td>border-box</td>
      <td>Box-sizing value</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.box-sizing(content-box);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-moz-box-sizing: content-box;
-webkit-box-sizing: content-box;
box-sizing: content-box;</code>
    </pre>
  </div>
</div>

#### `.border-box();`

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border-box();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;</code>
    </pre>
  </div>
</div>

#### `.content-box();`

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border-box();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-moz-box-sizing: content-box;
-webkit-box-sizing: content-box;
box-sizing: content-box;</code>
    </pre>
  </div>
</div>
