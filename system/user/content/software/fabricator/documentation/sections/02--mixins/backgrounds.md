---
Title: Backgrounds
---

#### `.background();`

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
      <td>string, keyword, color</td>
      <td>@bodyBackground</td>
      <td>Background rules, Background color</td>
    </tr>
    <tr>
      <td>@filename</td>
      <td>string</td>
      <td>-</td>
      <td>Image file</td>
    </tr>
    <tr>
      <td>@repeat</td>
      <td>string, keyword</td>
      <td>-</td>
      <td>Image repeat</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background(transparent);
.background('url("bg.png") #00f no-repeat');</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background: transparent;
background: url("bg.png") #00f no-repeat;</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background(#00f);
.background(#00f; 'bg.png');
.background(#00f; 'bg.png'; no-repeat);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background: #00f;
background: #00f url('../img/bg.png');
background: #00f url('../img/bg.png') no-repeat;</code>
    </pre>
  </div>
</div>

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
      <td>@color</td>
      <td>color</td>
      <td>Background color</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@opacity</td>
      <td>unit</td>
      <td>Background opacity</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background(#00f; 0.2);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-color: rgba(0, 0, 255, 0.2);</code>
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
      <td>@color</td>
      <td>color</td>
      <td>-</td>
      <td>Background color</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@filename</td>
      <td>string</td>
      <td>-</td>
      <td>Image File</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@x</td>
      <td>unit</td>
      <td>-</td>
      <td>Horizontal offset</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@y</td>
      <td>unit</td>
      <td>0</td>
      <td>Vertical offset</td>
      <td></td>
    </tr>
    <tr>
      <td>@repeat</td>
      <td>keyword</td>
      <td>no-repeat</td>
      <td>Image repeat</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background(#00f; 'bg.png'; 10%; 15%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background: #00f url('../img/bg.png') 10% 15% no-repeat;</code>
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
      <td>@value</td>
      <td>preset</td>
      <td>-</td>
      <td>light, dark</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@opacity</td>
      <td>unit</td>
      <td>@defaultOpacity</td>
      <td>Background opacity</td>
      <td></td>
    </tr>
    <tr>
      <td>@fallback</td>
      <td>color</td>
      <td>#fff, #000</td>
      <td>Fallback background color</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background(light; 50%);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-color: rgba(255, 255, 255, 0.5);</code>
    </pre>
  </div>
</div>

#### `.background-color();`

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
      <td>@color</td>
      <td>color</td>
      <td>@bodyBackground</td>
      <td>Background color</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background-color(blue);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-color: #00f;</code>
    </pre>
  </div>
</div>

#### `.background-image();`

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
      <td>@filename</td>
      <td>string</td>
      <td>Image file</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@repeat</td>
      <td>keyword</td>
      <td>Image repeat</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background-image(bg.png);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-image: '../img/bg.png';</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background-image('bg.png'; no-repeat);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-image: url('../img/bg.png');
background-repeat: no-repeat;</code>
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
      <td>retina</td>
      <td>keyword</td>
      <td>-</td>
      <td>Retina preset</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@filename</td>
      <td>string</td>
      <td>-</td>
      <td>Image file</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@width</td>
      <td>unit</td>
      <td>auto</td>
      <td>Width</td>
      <td></td>
    </tr>
    <tr>
      <td>@height</td>
      <td>unit</td>
      <td>auto</td>
      <td>Height</td>
      <td></td>
    </tr>
    <tr>
      <td>@x</td>
      <td>unit</td>
      <td>-</td>
      <td>Horizontal offset</td>
      <td>0</td>
    </tr>
    <tr>
      <td>@y</td>
      <td>unit</td>
      <td>0</td>
      <td>Vertical offset</td>
      <td></td>
    </tr>
    <tr>
      <td>@repeat</td>
      <td>keyword</td>
      <td>no-repeat</td>
      <td>Repeat</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.selector {
    .background-image(retina; 'bg.png'; 10px);
}</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>.selector {
    background-image: url('../img/bg.png');
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    .selector {
        background-image: url('../img/bg-2x.png');
        background-size: 10px auto;
    }
}</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.selector {
    .background-image(retina; 'bg.png'; 40px; 30px; 10px);
}</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>.selector {
    background-image: url('../img/bg.png');
    background-position: 10px 0;
    background-repeat: no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    .selector {
        background-image: url('../img/bg-2x.png');
        background-size: 40px 30px;
    }
}</code>
    </pre>
  </div>
</div>

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
      <td>@filename</td>
      <td>string</td>
      <td>Image file</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@x</td>
      <td>unit</td>
      <td>Horizontal offset</td>
      <td></td>
    </tr>
    <tr>
      <td>@y</td>
      <td>unit</td>
      <td>Vertical offset</td>
      <td></td>
    </tr>
    <tr>
      <td>@repeat</td>
      <td>keyword</td>
      <td>Repeat</td>
      <td></td>
    </tr>
    <tr>
      <td>@attachment</td>
      <td>keyword</td>
      <td>Attachment value</td>
      <td></td>
    </tr>
    <tr>
      <td>@width</td>
      <td>unit</td>
      <td>Width</td>
      <td></td>
    </tr>
    <tr>
      <td>@height</td>
      <td>unit</td>
      <td>Height</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background-image('bg.png'; 10px; 8px; no-repeat; fixed; 400px; 300px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-attachment: fixed;
background-image: url('../img/bg.png');
background-position: 10px 8px;
background-repeat: no-repeat;
background-size: 400px 300px;</code>
    </pre>
  </div>
</div>

#### `.background-gradient();`

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
      <td>@color</td>
      <td>color</td>
      <td>@gray</td>
      <td>Fallback color</td>
    </tr>
    <tr>
      <td>@start</td>
      <td>color</td>
      <td>rgba(0, 0, 0, 0.8)</td>
      <td>Starting color</td>
    </tr>
    <tr>
      <td>@end</td>
      <td>color</td>
      <td>rgba(0, 0, 0, 0.2)</td>
      <td>Ending color</td>
    </tr>
    <tr>
      <td>@angle</td>
      <td>integer</td>
      <td>180</td>
      <td>Angle</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background-gradient(blue; green; yellow; 90);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-color: #00f;
background: -webkit-linear-gradient(0deg, #008000, #ff0);
background: linear-gradient(90deg, #008000, #ff0);</code>
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
      <td>@color</td>
      <td>color</td>
      <td>@gray</td>
      <td>Fallback color</td>
    </tr>
    <tr>
      <td>@spread</td>
      <td>percentage</td>
      <td>-</td>
      <td>Color range</td>
    </tr>
    <tr>
      <td>@angle</td>
      <td>integer</td>
      <td>180</td>
      <td>Angle</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background-gradient(blue; 15%; 90);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-color: #00f;
background: -webkit-linear-gradient(0deg, #4d4dff, #0000b3);
background: linear-gradient(90deg, #4d4dff, #0000b3);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4d4dff', endColorstr='#0000b3', GradientType=0);</code>
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
      <td>@start</td>
      <td>integer </td>
      <td>0</td>
      <td>Starting opacity</td>
    </tr>
    <tr>
      <td>@end</td>
      <td>integer</td>
      <td>1</td>
      <td>Ending opacity</td>
    </tr>
    <tr>
      <td>@angle</td>
      <td>integer</td>
      <td>180</td>
      <td>Angle</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background-gradient(dark);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-color: rgba(0, 0, 0, 0);
background: -webkit-linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2));
background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));</code>
    </pre>
  </div>
</div>

#### `.background-attachment();`

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
      <td>@arguments</td>
      <td>keyword</td>
      <td>Attachment value</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background-attachment(scroll);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-attachment: scroll;</code>
    </pre>
  </div>
</div>

#### `.background-repeat();`

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
      <td>@arguments</td>
      <td>keyword</td>
      <td>Repeat value</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background-repeat(repeat);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-repeat: repeat;</code>
    </pre>
  </div>
</div>

#### `.background-size();`

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
      <td>@size</td>
      <td>unit</td>
      <td>Size value</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background-size(30px);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-size: 30px;</code>
    </pre>
  </div>
</div>

#### `.background-clip();`

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
      <td>border-box</td>
      <td>Clip value</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.background-clip();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-clip: border-box;</code>
    </pre>
  </div>
</div>

#### `.sprite();`

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
      <td>@color</td>
      <td>color</td>
      <td>-</td>
      <td>Background Color</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@x</td>
      <td>unit</td>
      <td>0</td>
      <td>Horizontal offset</td>
      <td></td>
    </tr>
    <tr>
      <td>@y</td>
      <td>unit</td>
      <td>0</td>
      <td>Vertical offset</td>
      <td></td>
    </tr>
    <tr>
      <td>@repeat</td>
      <td>keyword</td>
      <td>no-repeat</td>
      <td>Repeat</td>
      <td></td>
    </tr>
    <tr>
      <td>@filename</td>
      <td>string</td>
      <td>@spriteFilename</td>
      <td>Image file</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.sprite(blue);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background: #00f url('../img/sprite.png') 0 0 no-repeat;</code>
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
      <td>retina</td>
      <td>keyword</td>
      <td>-</td>
      <td>Retina preset</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@color</td>
      <td>color</td>
      <td>-</td>
      <td>Background Color</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@x</td>
      <td>unit</td>
      <td>0</td>
      <td>Horizontal offset</td>
      <td></td>
    </tr>
    <tr>
      <td>@y</td>
      <td>unit</td>
      <td>0</td>
      <td>Vertical offset</td>
      <td></td>
    </tr>
    <tr>
      <td>@repeat</td>
      <td>keyword</td>
      <td>no-repeat</td>
      <td>Repeat</td>
      <td></td>
    </tr>
    <tr>
      <td>@filename</td>
      <td>string</td>
      <td>@spriteFilename</td>
      <td>Image file</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.selector {
    .sprite(retina; blue);
}</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>.selector {
    background: #0000ff url('../img/sprite.png') 0 0 no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    .selector {
        background-image: url('../img/sprite-2x.png');
        background-size: auto auto;
    }
}</code>
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
      <td>@x</td>
      <td>unit</td>
      <td>0</td>
      <td>Horizontal offset</td>
    </tr>
    <tr>
      <td>@y</td>
      <td>unit</td>
      <td>0</td>
      <td>Vertical offset</td>
    </tr>
    <tr>
      <td>@repeat</td>
      <td>keyword</td>
      <td>no-repeat</td>
      <td>Repeat</td>
    </tr>
    <tr>
      <td>@filename</td>
      <td>string</td>
      <td>@spriteFilename</td>
      <td>Image file</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.sprite();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>background-image: url('../img/sprite.png');
background-position: 0 0;
background-repeat: no-repeat;</code>
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
      <td>retina</td>
      <td>keyword</td>
      <td>-</td>
      <td>Retina preset</td>
    </tr>
    <tr>
      <td>@x</td>
      <td>unit</td>
      <td>0</td>
      <td>Horizontal offset</td>
    </tr>
    <tr>
      <td>@y</td>
      <td>unit</td>
      <td>0</td>
      <td>Vertical offset</td>
    </tr>
    <tr>
      <td>@width</td>
      <td>unit</td>
      <td>@retinaSpriteWidth</td>
      <td>Width</td>
    </tr>
    <tr>
      <td>@height</td>
      <td>unit</td>
      <td>@retinaSpriteHeight</td>
      <td>Height</td>
    </tr>
    <tr>
      <td>@repeat</td>
      <td>keyword</td>
      <td>no-repeat</td>
      <td>Repeat</td>
    </tr>
    <tr>
      <td>@filename</td>
      <td>string</td>
      <td>@spriteFilename</td>
      <td>Image file</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.selector {
    .sprite(retina);
}</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>.selector {
    background-image: url('../img/sprite.png');
    background-position: 0 0;
    background-repeat: no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {
    .selector {
        background-image: url('../img/sprite-2x.png');
        background-size: auto auto;
    }
}</code>
    </pre>
  </div>
</div>
