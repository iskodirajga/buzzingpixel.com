---
Title: Box Shadows
---

#### `.shadow();`

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
      <td>'1px 1px 0 0 rgba(0, 0, 0, @{defaultOpacity})'</td>
      <td>Box-shadow rules</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.shadow('3px 2px 1px 0 #000');</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>box-shadow: 3px 2px 1px 0 #000;</code>
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
      <td>inner</td>
      <td>keyword</td>
      <td>-</td>
      <td>Inner preset</td>
    </tr>
    <tr>
      <td>@color</td>
      <td>color</td>
      <td>-</td>
      <td>Shadow color</td>
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
    <tr>
      <td>@spread</td>
      <td>unit</td>
      <td>0</td>
      <td>Shadow size</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.shadow(blue);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>box-shadow: 1px 1px 0 0 #00f;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.shadow(rgba(0, 0, 0, 0.6); 4px; 3px; 2px; 2px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>box-shadow: 4px 3px 2px 2px rgba(0, 0, 0, 0.6);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.shadow(inner; blue);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>box-shadow: inset 1px 1px 0 0 #00f;</code>
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
      <td>light, dark</td>
      <td>keyword</td>
      <td>-</td>
      <td>  Light or dark preset</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>percentage</td>
      <td>@defaultOpacity</td>
      <td>Opacity</td>
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
    <tr>
      <td>@spread</td>
      <td>unit</td>
      <td>0</td>
      <td>Shadow size</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.shadow(light; 40%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>box-shadow: 1px 1px 0 0 rgba(255, 255, 255, 0.4);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.shadow(dark; 50%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.5);</code>
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
      <td>inner</td>
      <td>keyword</td>
      <td>-</td>
      <td>Inner preset</td>
    </tr>
    <tr>
      <td>light, dark</td>
      <td>keyword</td>
      <td>-</td>
      <td>Light or dark preset</td>
    </tr>
    <tr>
      <td>@opacity</td>
      <td>float</td>
      <td>@defaultOpacity</td>
      <td>Opacity</td>
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
    <tr>
      <td>@spread</td>
      <td>unit</td>
      <td>0</td>
      <td>Shadow size</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.shadow(inner; light; 40%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.4);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.shadow(inner; dark; 50%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>box-shadow: inset 1px 1px 0 0 rgba(0, 0, 0, 0.5);</code>
    </pre>
  </div>
</div>
