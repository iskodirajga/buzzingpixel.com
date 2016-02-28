---
Title: Animation
---

#### `.animation();`

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
      <td>value</td>
      <td>Animation rules</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.animation(name 4s linear 0s 1);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-animation: name 4s linear 0s 1;
animation: name 4s linear 0s 1;</code>
    </pre>
  </div>
</div>

#### `.keyframes();`

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
      <td>@name</td>
      <td>value</td>
      <td>Animation name</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@start</td>
      <td>value</td>
      <td>Starting value</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>@end</td>
      <td>value</td>
      <td>Ending value</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.keyframes(name, {
    .transparent();
}, {
    .opaque();
});</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>@-webkit-keyframes name {
    0% {
        opacity: 0:
    }
    100% {
        opacity: 1:
    }
}
@keyframes name {
    0% {
        opacity: 0:
    }
    100% {
        opacity: 1:
    }
}</code>
    </pre>
  </div>
</div>
