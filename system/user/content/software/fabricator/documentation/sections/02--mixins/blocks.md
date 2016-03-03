---
Title: Blocks
---

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
    <tr>
      <td>@height</td>
      <td>unit</td>
      <td>Height</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.block(4; 3);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>display: block;
width: 4rem;
height: 3rem;</code>
    </pre>
  </div>
</div>

#### `.centered-block();`

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
      <td>@maxWidth</td>
      <td>unit</td>
      <td>Max width</td>
    </tr>
    <tr>
      <td>@margin</td>
      <td>unit</td>
      <td>Bottom margin</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.centered-block(50%; 2px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>display: block;
margin-left: auto;
margin-right: auto;
max-width: 50%;
margin-bottom: 2px;</code>
    </pre>
  </div>
</div>

#### `.overflow();`

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
      <td>x, y</td>
      <td>keyword</td>
      <td>Overflow axis</td>
      <td></td>
    </tr>
    <tr>
      <td>@value</td>
      <td>keyword</td>
      <td>Overflow value</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.overflow(hidden);
.overflow(x; scroll);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>overflow: hidden;
overflow-x: scroll;</code>
    </pre>
  </div>
</div>

#### `.crop(); .scroll();`

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
      <td>horizontal, vertical</td>
      <td>keyword</td>
      <td>-</td>
      <td>Horizontal or vertical preset</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>keyword</td>
      <td>true</td>
      <td>Overflow value</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.crop(both);
.crop(vertical);
.scroll();
.scroll(horizontal);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>overflow: hidden;
overflow-y: hidden;
overflow: scroll;
overflow-x: scroll;</code>
    </pre>
  </div>
</div>
