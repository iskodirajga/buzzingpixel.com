---
Title: Fonts
---

#### `.font-family();`

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
      <td>@baseFont</td>
      <td>Font family rules</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.font-family(Georgia, Serif);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>font-family: Georgia, Serif;</code>
    </pre>
  </div>
</div>

#### `.load-font();`

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
      <td>@name</td>
      <td>string</td>
      <td>-</td>
      <td>Font family rules</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@file</td>
      <td>file</td>
      <td>@name</td>
      <td>Font file</td>
      <td></td>
    </tr>
    <tr>
      <td>@weight</td>
      <td>integer, keyword</td>
      <td>normal</td>
      <td>Font weight</td>
      <td></td>
    </tr>
    <tr>
      <td>@style</td>
      <td>keyword</td>
      <td>normal</td>
      <td>Font style</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.load-font(icons);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>@font-face {
    font-family: Example;
        src: url('../fonts/icons.eot');
        src: url('../fonts/icons.eot?#iefix') format('embedded-opentype'),
            url('../fonts/icons.woff2') format('woff2'),
             url('../fonts/icons.woff') format('woff'),
             url('../fonts/icons.ttf') format('truetype');
        font-style: normal;
        font-weight: normal;

    // Window Chrome fix
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
        @font-face {
            font-family: ~'@{name}';
            src: url('../fonts/icons.svg#icons') format('svg');
        }
    }
}</code>
    </pre>
  </div>
</div>

#### `.font();`

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
      <td>@family</td>
      <td>font</td>
      <td>@baseFont</td>
      <td>Font family rules</td>
    </tr>
    <tr>
      <td>@size</td>
      <td>unit</td>
      <td>-</td>
      <td>Font size</td>
    </tr>
    <tr>
      <td>@weight</td>
      <td>unit</td>
      <td>-</td>
      <td>Font weight</td>
    </tr>
    <tr>
      <td>@lineHeight</td>
      <td>unit</td>
      <td>-</td>
      <td>Line height</td>
    </tr>
    <tr>
      <td>@style</td>
      <td>keyword</td>
      <td>-</td>
      <td>Font style</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.font(Helvetica; 20px; 100; 20px; italic);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>font-family: Helvetica;
font-size: 2px;
font-weight: 100;
line-height: 20px;
font-style: italic;</code>
    </pre>
  </div>
</div>

#### `.font-size();`

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
      <td>@baseFontSize</td>
      <td>Font size</td>
    </tr>
    <tr>
      <td>@lineHeight</td>
      <td>unit</td>
      <td>-</td>
      <td>Line height rules</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.font-size(30px; 16px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>font-size: 30px;
line-height: 16px;</code>
    </pre>
  </div>
</div>

#### `.font-style();`

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
      <td>keyword</td>
      <td>normal</td>
      <td>Font style</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.font-style(italic);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>font-style: italic;</code>
    </pre>
  </div>
</div>

#### `.font-weight();`

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
      <td>@baseFontWeight</td>
      <td>Font weight</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.font-weight(300);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>font-weight: 300;</code>
    </pre>
  </div>
</div>
