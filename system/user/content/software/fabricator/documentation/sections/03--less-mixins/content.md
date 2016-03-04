---
Title: Content
---

#### `.content();`

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
      <td>both</td>
      <td>Content</td>
    </tr>
    <tr>
      <td>@font</td>
      <td>string, keyword</td>
      <td>false</td>
      <td>Font family</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.content(text);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>content: 'text';</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.content(example; Georgia);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>content: 'example';
font-family: Georgia;</code>
    </pre>
  </div>
</div>

#### `.prefix(); .suffix(); .bookends();`

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
      <td>'-'</td>
      <td>Content</td>
    </tr>
    <tr>
      <td>@margin</td>
      <td>unit</td>
      <td>0.5em</td>
      <td>Left or right margin</td>
    </tr>
    <tr>
      <td>@font</td>
      <td>string, keyword</td>
      <td>false</td>
      <td>Font family</td>
    </tr>
    <tr>
      <td>@color</td>
      <td>color</td>
      <td>false</td>
      <td>Font color</td>
    </tr>
  </tbody>
</table>

<div class="example-output">
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.prefix();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>:before {
    content: '-';
    margin-right: 0.5em;
}</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.suffix('text'; 1em; Georgia; blue);</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>:after {
    content: 'text';
    margin-left: 1em;
    font-family: Georgia;
    color: #0000ff;
}</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Example</div>
    <pre class="language-less">
      <code>.bookends();</code>
    </pre>
  </div>
  <div class="example-output__block">
    <div class="example-output__heading">Output</div>
    <pre class="language-css">
      <code>:before {
    content: '-';
    margin-right: 0.5em;
}
:after {
    content: '-';
    margin-left: 0.5em;
}</code>
    </pre>
  </div>
</div>
