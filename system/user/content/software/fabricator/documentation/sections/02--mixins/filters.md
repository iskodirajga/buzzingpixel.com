---
Title: Filters
---

#### `.filter();`

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
      <td>string, keyword</td>
      <td>Filter rules</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.filter('grayscale(50%)');</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-filter: grayscale(50%);
filter: grayscale(50%);</code>
    </pre>
  </div>
</div>

#### `.blur();`

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
      <td>2px</td>
      <td>Radius</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.blur(4px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-filter: blur(4px);
filter: blur(4px);</code>
    </pre>
  </div>
</div>

#### `.brightness();`

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
      <td>0.5</td>
      <td>Multiplier</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.brightness(0.8);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-filter: brightness(0.8);
filter: brightness(0.8);</code>
    </pre>
  </div>
</div>

#### `.contrast();`

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
      <td>1.5</td>
      <td>Multiplier</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.contrast(1.2);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-filter: contrast(1.2);
filter: contrast(1.2);</code>
    </pre>
  </div>
</div>

#### `.grayscale();`

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
      <td>1</td>
      <td>Amount</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.grayscale();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-filter: grayscale(1);
filter: grayscale(1);</code>
    </pre>
  </div>
</div>

#### `.hue-rotate();`

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
      <td>180deg</td>
      <td>Angle</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.hue-rotate(60deg);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-filter: hue-rotate(60deg);
filter: hue-rotate(60deg);</code>
    </pre>
  </div>
</div>

#### `.invert();`

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
      <td>1</td>
      <td>Amount</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.invert(20%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-filter: invert(20%);
filter: invert(20%);</code>
    </pre>
  </div>
</div>

#### `.saturate();`

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
      <td>0.5</td>
      <td>Amount</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.saturate(200%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-filter: saturate(200%);
filter: saturate(200%);</code>
    </pre>
  </div>
</div>

#### `.sepia();`

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
      <td>0.5</td>
      <td>Amount</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.sepia(100%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-filter: sepia(100%);
filter: sepia(100%);</code>
    </pre>
  </div>
</div>

#### `.drop-shadow();`

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
      <td>Drop-shadow rules, Color</td>
    </tr>
    <tr>
      <td>@x</td>
      <td>unit</td>
      <td>1px</td>
      <td>X-offset</td>
    </tr>
    <tr>
      <td>@y</td>
      <td>unit</td>
      <td>1px</td>
      <td>Y-offset</td>
    </tr>
    <tr>
      <td>@blur</td>
      <td>unit</td>
      <td>0</td>
      <td>Blur radius</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.drop-shadow('2px 2px 1px rgba(120, 80, 40, 0.5)');</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>filter: drop-shadow('2px 2px 1px rgba(120, 80, 40, 0.5)');</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.drop-shadow(blue; 2px; 4px; 1px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>filter: drop-shadow('2px 4px 1px #00f');</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.drop-shadow(light; 0.4);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>filter: drop-shadow('1px 1px 0 rgba(255, 255, 255, 0.4)');</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.drop-shadow(dark; 0.8; 2px; 1px; 1px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>filter: drop-shadow('2px 1px 1px rgba(0, 0, 0, 0.8)');</code>
    </pre>
  </div>
</div>
