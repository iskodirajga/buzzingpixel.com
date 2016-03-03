---
Title: Shapes
---

#### `.caret();`

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
      <td>up, down, right, left</td>
      <td>keyword</td>
      <td>-</td>
      <td>Direction</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@color</td>
      <td>color</td>
      <td>@darkGray</td>
      <td>Color</td>
      <td></td>
    </tr>
    <tr>
      <td>@size</td>
      <td>unit</td>
      <td>5px</td>
      <td>Size</td>
      <td></td>
    </tr>
    <tr>
      <td>@verticalSize</td>
      <td>unit</td>
      <td>@size</td>
      <td>Vertical size</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.caret(up; red; 10px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>content: ' ';
height: 0;
width: 0;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-bottom: 10px solid #ff0000;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.caret(left; blue);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>content: ' ';
height: 0;
width: 0;
border-bottom: 5px solid transparent;
border-top: 5px solid transparent;
border-right: 5px solid #0000ff;</code>
    </pre>
  </div>
</div>
