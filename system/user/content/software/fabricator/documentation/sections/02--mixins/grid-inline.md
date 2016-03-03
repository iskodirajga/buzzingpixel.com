---
Title: Inline Grid
---

#### `.inline-row();`

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
      <td>percentage</td>
      <td>@gridMargin</td>
      <td>Left Margin</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.selector {
    .inline-row(2%);
}</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>.selector {
    margin-left: -2%;
    max-width: 102%;
    letter-spacing: -.32em;
}</code>
    </pre>
  </div>
</div>

#### `.inline-column();`

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
      <td>@share</td>
      <td>float</td>
      <td>-</td>
      <td>Column span</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@columns</td>
      <td>float</td>
      <td>@gridColumns</td>
      <td>Number of columns</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.inline-column(2; 3);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>width: 66.66666667%;
display: inline-block;
vertical-align: top;</code>
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
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>spaced</td>
      <td>keyword</td>
      <td>-</td>
      <td>Set margin between columns</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@share</td>
      <td>float</td>
      <td>-</td>
      <td>Column span</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@columns</td>
      <td>float</td>
      <td>@gridColumns</td>
      <td>Number of columns</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.clear(left);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>clear: left;</code>
    </pre>
  </div>
</div>
