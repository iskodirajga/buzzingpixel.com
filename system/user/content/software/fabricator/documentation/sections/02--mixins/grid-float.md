---
Title: Grid
---

#### `.row(); .row-modify();`

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
      <td>Left margin</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.selector {
    .row(2%);
}</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>.selector {
    margin-left: -2%;
    max-width: 102%;
}
.selector:after {
    clear: both;
    content: ' ';
    display: table;
}</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.row-modify(2%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>margin-left: -2%;
max-width: 102%;</code>
    </pre>
  </div>
</div>

#### `.row-reset();`

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.row-reset();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>margin-left: 0;
max-width: none;</code>
    </pre>
  </div>
</div>

#### `.column(); .column-modify();`

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
      <code>.column(2; 3);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>float: left;
width: 66.66666667%;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.column-modify(2; 3);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>width: 66.66666667%;</code>
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
      <td>spaced</td>
      <td>keyword</td>
      <td>-</td>
      <td>Set margin between columns</td>
    </tr>
    <tr>
      <td>@share</td>
      <td>float</td>
      <td>-</td>
      <td>Column span</td>
    </tr>
    <tr>
      <td>@columns</td>
      <td>float</td>
      <td>@gridColumns</td>
      <td>Number of columns</td>
    </tr>
    <tr>
      <td>@margin</td>
      <td>percentage</td>
      <td>@gridMargin</td>
      <td>Left margin</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.column(spaced; 2; 3; 2%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>float: left;
width: 64.66666667%;
margin-left: 2%;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.column-modify(spaced; 2; 3; 2%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>width: 64.66666667%;
margin-left: 2%;</code>
    </pre>
  </div>
</div>



#### `.column-reset();`

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
      <td>@resetMargin</td>
      <td>boolean</td>
      <td>false</td>
      <td>Reset left margin</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.column-reset(true);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>float: none;
width: auto;
margin-left: 0;</code>
    </pre>
  </div>
</div>

#### `.column-pull(); .column-push();`

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
      <code>.column-pull(2);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>position: relative;
right: 25%;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.column-push(3; 4);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>left: 75%;
position: relative;</code>
    </pre>
  </div>
</div>

#### `.column-offset();`

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
      <td></td>
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
    <tr>
      <td>@margin</td>
      <td>percentage</td>
      <td>@gridMargin</td>
      <td>Left margin</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.column-offset(2; 4);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>margin-left: 50%;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.column-offset(spaced; 1; 3; 0.02);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>margin-left: 33.33%;</code>
    </pre>
  </div>
</div>
