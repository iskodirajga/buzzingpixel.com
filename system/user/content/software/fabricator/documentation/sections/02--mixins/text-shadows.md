---
Title: Text Shadows
---

#### `.text-shadow();`

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
      <td>string, keyword</td>
      <td>'1px 1px 0 rgba(0, 0, 0, @{defaultOpacity})'</td>
      <td>Text shadow rules, color, or inner preset</td>
    </tr>
    <tr>
      <td>@x</td>
      <td>unit</td>
      <td>1px</td>
      <td>Horizontal offset</td>
    </tr>
    <tr>
      <td>@y</td>
      <td>unit</td>
      <td>1px</td>
      <td>Vertical offset</td>
    </tr>
    <tr>
      <td>@blur</td>
      <td>unit</td>
      <td>0</td>
      <td>Blur distance</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.text-shadow(blue; 4px; 3px; 2px);
.text-shadow(inner; blue);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>text-shadow: 4px 3px 2px #00f;
text-shadow: -1px -1px 0 #00f;</code>
    </pre>
  </div>
</div>
