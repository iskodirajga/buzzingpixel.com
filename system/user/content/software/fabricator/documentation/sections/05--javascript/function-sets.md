---
Title: Function Sets
---

A Fabricator function set is really just a fancy wrapper around an object that contains a related set of functions. Use `FAB.fn.make();` to create a function set.

#### `FAB.fn.make();`

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
      <td>Function Set Name</td>
      <td>string</td>
      <td>The name of your function set</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Object of functions</td>
      <td>object</td>
      <td>The object should contain at least an `init` key and function</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

<pre class="language-javascript">
<code>
(function(F) {
    'use strict';

    F.fn.make('myFabFunction', {
        _construct: {
            // constructor stuff happens here when FAB loads
        },
        init: function() {
            console.log('myFabFunction');
        },
        thing: function(arg) {
            console.log(arg)
        }
    });
})(window.FAB);
</code>
</pre>

In addition to being run from a controller, this function set can be accessed directly like so:

<pre class="language-javascript">
<code>
FAB.myFabFunction.init();
FAB.myFabFunction.thing(true);
</code>
</pre>

#### `FAB.fn.clone('myFabFunction');`

This will return a new instance of the function set. Note that the original, untouched function set will be duplicated so even if you have modified the function set or manipulated it in some way, `FAB.fn.clone();` will give you a completely clean and original clone of the function set.

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
      <td>Function Set Name</td>
      <td>string</td>
      <td>The name of your function set</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Run `_construct`</td>
      <td>boolean</td>
      <td>Set `true` to run the constructor of the newly cloned function set</td>
      <td></td>
    </tr>
  </tbody>
</table>
