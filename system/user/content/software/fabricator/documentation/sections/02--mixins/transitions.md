---
Title: Transitions
---

#### `.transition();`

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
      <td>string</td>
      <td>‘all 0.2s ease-in-out 0s’</td>
      <td>Transition rules</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.transition('all 4s ease-in 1s');</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-backface-visibility: hidden;
-webkit-transition: all 4s ease-in 1s;
transition: all 4s ease-in 1s;</code>
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
      <td>@property</td>
      <td>keyword</td>
      <td>all</td>
      <td>Animatable Property</td>
    </tr>
    <tr>
      <td>@duration</td>
      <td>seconds</td>
      <td>@defaultDuration</td>
      <td>Duration</td>
    </tr>
    <tr>
      <td>@ease</td>
      <td>keyword</td>
      <td>ease-in-out</td>
      <td>Timing function</td>
    </tr>
    <tr>
      <td>@delay</td>
      <td>seconds</td>
      <td>0s</td>
      <td>Delay</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.transition(all; 2s; ease-in; 0.2s);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-backface-visibility: hidden;
-webkit-transition: all 2s ease-in 0.2s;
transition: all 2s ease-in 0.2s;</code>
    </pre>
  </div>
</div>

#### `.transition-delay();`

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
      <td>@delay</td>
      <td>seconds</td>
      <td>1s</td>
      <td>Delay value</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.transition-delay(3s);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-transition-delay: 3s;
transition-delay: 3s;</code>
    </pre>
  </div>
</div>

#### `.transition-duration();`

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
      <td>@duration</td>
      <td>seconds</td>
      <td>@defaultDuration</td>
      <td>Duration value</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.transition-duration(0.5s);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>-webkit-transition-duration: 0.5s;
transition-duration: 0.5s;</code>
    </pre>
  </div>
</div>
