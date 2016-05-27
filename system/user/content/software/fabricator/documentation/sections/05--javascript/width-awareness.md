---
Title: Width Awareness
---

One of the big challenges with making context independent components on the web is making them aware of their width and adjusting their style accordingly. We can use media queries on the window width, but we can’t on individual elements which is terrible for placing componenents in any context regardless of the size of the context. That’s why the `widthAwareness` api was created in Fabricator.

With `widthAwareness` you tell the api to watch an element. As that element resizes, the `data-widths` attribute is dynamically updated on the element so that you can style based on the size of the element.

<pre class="language-javascript">
<code>
F.widthAwareness.add('.myClass', 400, 800);
// or
F.widthAwareness.add($('.myClass'), [
	400,
	800
]);
</code>
</pre>

<pre class="language-css">
<code>
.myClass {
	background: red;
}
.myClass[data-widths~="400"] {
	background: blue;
}
.myClass[data-widths~="800"] {
	background: yellow;
}
</code>
</pre>

As you can see, the concept is pretty simple and the cascade works pretty much as would expect and use for standard media query based responsive styling.

### Methods

#### `F.widthAwareness.add('.myClass', 400, 800);`

Adds width awareness to the specified element(s).

<table class="doc-table">
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Selector, DOM Object, or jQuery Object</td>
      <td>string|object</td>
      <td>The element(s) to make width aware</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Size</td>
      <td>integer|array</td>
      <td>Multiple arguments can be specified as integers or arrays of integers</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

#### `F.widthAwareness.add('.myClass', 400, 800);`

Removes width awareness from the specified element(s).

<table class="doc-table">
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Class DOM, Object, or jQuery Object</td>
      <td>string|object</td>
      <td>The element(s) to remove from width awareness</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

#### `F.widthAwareness.watchSelector('.myClass', 400, 800);`

Watches the DOM for elements of the specified selector being inserted and adds width awareness to them. It will also add width awareness to any already existing DOM elemenents when instantiated

##### `$('.myClass').trigger('widthAwarenessCheck')`

Programatically triggers an width check on the element.

<table class="doc-table">
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Selector</td>
      <td>string|object</td>
      <td>The element(s) to watch for on the DOM</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Size</td>
      <td>integer|array</td>
      <td>Multiple arguments can be specified as integers or arrays of integers</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

### Classes and data elements

Any element with the class `.js-width-aware` or the data attribute `data-width-aware="true"` already on the DOM or inserted onto the DOM will be made width aware and will receive the follwing size awareness:

```
400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600
```
