---
Title: Rounded Corners
---

#### `.rounded();`

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
      <td>@defaultRadius</td>
      <td>Size of radius</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.rounded(3px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-clip: border-box;
border-radius: 3px;</code>
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
      <td>top, right, bottom, left</td>
      <td>keyword</td>
      <td></td>
      <td>Side presets</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>@defaultRadius</td>
      <td>Size of radius</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.rounded(top);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-clip: border-box;
border-top-left-radius: 3px;
border-top-right-radius: 3px;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.rounded(right; 5px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-clip: border-box;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;</code>
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
      <td>top, bottom</td>
      <td>keyword</td>
      <td></td>
      <td>Vertical presets</td>
    </tr>
    <tr>
      <td>right, left</td>
      <td>keyword</td>
      <td></td>
      <td>Horizontal presets</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>@defaultRadius</td>
      <td>Size of radius</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.rounded(bottom; left);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-clip: border-box;
border-bottom-left-radius: 3px;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.rounded(top; right; 4px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-clip: border-box;
border-top-right-radius: 4px;</code>
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
      <td>Top Radius</td>
    </tr>
    <tr>
      <td>@right</td>
      <td>unit</td>
      <td>Right Radius</td>
    </tr>
    <tr>
      <td>@bottom</td>
      <td>unit</td>
      <td>Bottom Radius</td>
    </tr>
    <tr>
      <td>@left</td>
      <td>unit</td>
      <td>Left Radius</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.rounded(2px; 3px; 4px; 5px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-clip: border-box;
border-top-left-radius: 2px;
border-top-right-radius: 3px;
border-bottom-right-radius: 4px;
border-bottom-left-radius: 5px;</code>
    </pre>
  </div>
</div>
