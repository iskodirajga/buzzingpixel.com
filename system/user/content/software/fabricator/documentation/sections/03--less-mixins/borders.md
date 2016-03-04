---
Title: Borders
---

#### `.border();`

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
      <td>@lighterGray</td>
      <td>Border Rules, Color</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>1px</td>
      <td>Size</td>
    </tr>
    <tr>
      <td>@style</td>
      <td>keyword</td>
      <td>solid</td>
      <td>Style</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border(red; 4px; dotted);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border: 4px dotted #f00;</code>
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
      <td>Light or dark preset</td>
    </tr>
    <tr>
      <td>@opacity</td>
      <td>float</td>
      <td>Opacity</td>
      <td>Border Rules, Color</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>1px</td>
      <td>Size</td>
    </tr>
    <tr>
      <td>@style</td>
      <td>keyword</td>
      <td>solid</td>
      <td>Style</td>
    </tr>
    <tr>
      <td>@fallback</td>
      <td>color</td>
      <td>@black</td>
      <td>Fallback color</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border(dark; 40%; 2px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border: 2px solid rgba(0, 0, 0, 0.4);</code>
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
      <td>-</td>
      <td>Side preset</td>
    </tr>
    <tr>
      <td>@color</td>
      <td>color</td>
      <td>@lighterGray</td>
      <td>Color</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>1px</td>
      <td>Size</td>
    </tr>
    <tr>
      <td>@style</td>
      <td>keyword</td>
      <td>solid</td>
      <td>Style</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border(top; blue);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border-top: 1px solid #00f;</code>
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
      <td>-</td>
      <td>Side preset</td>
    </tr>
    <tr>
      <td>light, dark</td>
      <td>keyword</td>
      <td>Light or dark preset</td>
      <td>Color</td>
    </tr>
    <tr>
      <td>@opacity</td>
      <td>float</td>
      <td>@defaultOpacity</td>
      <td>Color</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>1px</td>
      <td>Width</td>
    </tr>
    <tr>
      <td>@style</td>
      <td>keyword</td>
      <td>solid</td>
      <td>Style</td>
    </tr>
    <tr>
      <td>@fallback</td>
      <td>color</td>
      <td>@white, @black</td>
      <td>Fallback color</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border(top; light; 50%; 3px; dotted);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border: 3px dotted rgba(255, 255, 255, 0.5);</code>
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
      <td>horizontal, vertical</td>
      <td>keyword</td>
      <td>-</td>
      <td>Horizontal or vertical preset</td>
    </tr>
    <tr>
      <td>@color</td>
      <td>color</td>
      <td>@lighterGray</td>
      <td>Color</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>1px</td>
      <td>Width</td>
    </tr>
    <tr>
      <td>@style</td>
      <td>keyword</td>
      <td>solid</td>
      <td>Style</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border(horizontal; red; 2px; dotted);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border-left: 2px dotted #ff0000;
border-right: 2px dotted #ff0000;</code>
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
      <td>horizontal, vertical</td>
      <td>keyword</td>
      <td>-</td>
      <td>Horizontal or vertical preset</td>
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
      <td>Opactiy</td>
    </tr>
    <tr>
      <td>@value</td>
      <td>unit</td>
      <td>1px</td>
      <td>Width</td>
    </tr>
    <tr>
      <td>@style</td>
      <td>keyword</td>
      <td>solid</td>
      <td>Style</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border(vertical; dark; 0.4);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border-top: 1px solid rgba(0, 0, 0, 0.4);
border-bottom: 1px solid rgba(0, 0, 0, 0.4);</code>
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
      <td>@top</td>
      <td>unit</td>
      <td>-</td>
      <td>Top size</td>
    </tr>
    <tr>
      <td>@right</td>
      <td>unit</td>
      <td>-</td>
      <td>Right size</td>
    </tr>
    <tr>
      <td>@bottom</td>
      <td>unit</td>
      <td>-</td>
      <td>Bottom size</td>
    </tr>
    <tr>
      <td>@left</td>
      <td>unit</td>
      <td>-</td>
      <td>Left size</td>
    </tr>
    <tr>
      <td>@color</td>
      <td>color</td>
      <td>@lighterGray</td>
      <td>Color</td>
    </tr>
    <tr>
      <td>@style</td>
      <td>keyword</td>
      <td>solid</td>
      <td>Style</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border(1px; 3px; 4px; 2px; blue; dotted);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border-bottom: 4px dotted #00f;
border-left: 2px dotted #00f;
border-right: 3px dotted #00f;
border-top: 1px dotted #00f;</code>
    </pre>
  </div>
</div>

#### `.border-image();`

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
      <td>@filename</td>
      <td>string</td>
      <td>-</td>
      <td>Name of file</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@slice</td>
      <td>unit</td>
      <td>100%</td>
      <td>Slice offset</td>
      <td></td>
    </tr>
    <tr>
      <td>@width</td>
      <td>unit</td>
      <td>1</td>
      <td>Border width</td>
      <td></td>
    </tr>
    <tr>
      <td>@outset</td>
      <td>unit</td>
      <td>0</td>
      <td>Extend beyond border box</td>
      <td></td>
    </tr>
      <td>@repeat</td>
      <td>keyword</td>
      <td>stretch</td>
      <td>Match size of border</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border-image('border.png');</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-border-image: url('../img/border.png') 100% 1 0 stretch;
border-image: url('../img/border.png') 100% 1 0 stretch;</code>
    </pre>
  </div>
</div>

#### `.border-color(); .border-style(); .border-width();`

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border-color(blue);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border-color: #00f;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border-color(top; blue);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border-top-color: #00f;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border-style(dotted);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border-style: dotted;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border-style(right; dotted);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border-right-style: dotted;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border-width(4px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border-width: 4px;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.border-width(bottom; 4px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>border-bottom-width: 4px;</code>
    </pre>
  </div>
</div>
