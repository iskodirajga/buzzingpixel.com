---
Title: Position
---

#### `.top(); .right(); .bottom(); .left();`

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
      <td>unit</td>
      <td>0</td>
      <td>Amount</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.top(40px);
.right(20px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>top: 40px;
right: 20px;</code>
    </pre>
  </div>
</div>

#### `.position();`

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
      <td>Positioning</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@top</td>
      <td>unit</td>
      <td>Top amount</td>
      <td></td>
    </tr>
    <tr>
      <td>@right</td>
      <td>unit</td>
      <td>Right amount</td>
      <td></td>
    </tr>
    <tr>
      <td>@bottom</td>
      <td>unit</td>
      <td>Bottom amount</td>
      <td></td>
    </tr>
    <tr>
      <td>@left</td>
      <td>unit</td>
      <td>Left amount</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.position(fixed; 4px; 30px; 2%; 1px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>position: fixed;
top: 4px;
right: 30px;
bottom: 2%;
left: 1px;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.position(fixed; false; 30px; false; 1px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>position: fixed;
right: 30px;
left: 1px;</code>
    </pre>
  </div>
</div>

#### `.absolute(); .fixed()`

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
      <td>@top</td>
      <td>unit</td>
      <td>Top amount</td>
      <td></td>
    </tr>
    <tr>
      <td>@right</td>
      <td>unit</td>
      <td>Right amount</td>
      <td></td>
    </tr>
    <tr>
      <td>@bottom</td>
      <td>unit</td>
      <td>Bottom amount</td>
      <td></td>
    </tr>
    <tr>
      <td>@left</td>
      <td>unit</td>
      <td>Left amount</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.absolute();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>position: absolute;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.absolute(30px; 20px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>position: absolute;
top: 30px;
right: 20px;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.fixed(15px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>position: fixed;
top: 15px;</code>
    </pre>
  </div>
</div>

#### `.relative(); .static();`

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.relative();
.static();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>position: relative;
position: static;</code>
    </pre>
  </div>
</div>
