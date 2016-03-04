---
Title: CSS Columns
---

#### `.columns();`

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
      <td>@count</td>
      <td>integer</td>
      <td>2</td>
      <td>Column width</td>
    </tr>
    <tr>
      <td>@gap</td>
      <td>unit</td>
      <td>-</td>
      <td>Column gap</td>
    </tr>
    <tr>
      <td>@style</td>
      <td>keyword</td>
      <td>@gridColumns</td>
      <td>Column rule style</td>
    </tr>
    <tr>
      <td>@width</td>
      <td>unit</td>
      <td>@gridMargin</td>
      <td>Column width</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.columns(3; 20px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-moz-column-count: 3;
-webkit-column-count: 3;
column-count: 3;
-moz-column-gap: 20px;
-webkit-column-gap: 20px;
column-gap: 20px;</code>
    </pre>
  </div>
</div>

#### `.columns-count();`

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
      <td>integer</td>
      <td>Column count</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.columns-count(2);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-moz-column-count: 2;
-webkit-column-count: 2;
column-count: 2;</code>
    </pre>
  </div>
</div>

#### `.columns-gap();`

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
      <td>Column gap width</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.columns-gap(10px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-moz-column-gap: 10px;
-webkit-column-gap: 10px;
column-gap: 10px;</code>
    </pre>
  </div>
</div>

#### `.columns-style();`

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
      <td>keyword</td>
      <td>Column rule style</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.columns-style(dotted);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-moz-column-rule-style: dotted;
-webkit-column-rule-style: dotted;
column-rule-style: dotted;</code>
    </pre>
  </div>
</div>

#### `.columns-width();`

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
      <td>Column width</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.columns-width(200px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-moz-column-rule-width: 200px;
-webkit-column-rule-width: 200px;
column-rule-width: 200px;</code>
    </pre>
  </div>
</div>
