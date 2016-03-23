---
Title: Models
---

Fabricator makes use of a model system for storing variables and watching for changes to those values.

#### `FAB.set('myVar', 'myVal')`

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
      <td>Variable Name</td>
      <td>string</td>
      <td>Model key for the variable you are setting. If this value already exists in the model, the value will be overwritten.</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Variable Value</td>
      <td>mixed</td>
      <td>Anything you want to store: object, array, string, function, etc.</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

#### `FAB.get('myVar')`

<table class="doc-table">
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Variable Name</td>
      <td>string</td>
      <td>-</td>
      <td>The key for the model item you would like to retrive</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Fallback</td>
      <td>mixed</td>
      <td>null</td>
      <td>The value to fall back to if the variable does not exist in the model.</td>
      <td></td>
    </tr>
  </tbody>
</table>

#### `FAB.on('change:myVar', function(value, oldValue) {})`

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
      <td>Event type</td>
      <td>string</td>
      <td>The event type. While there may be more in the future, the only available option at this time is change. you can also watch for changes to a specific variable by using a colon seperator. Add a namespace so that you can `off` a specific event later by using a period: `change:myVar.myNamespace`</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Callback</td>
      <td>function</td>
      <td>Function to run when the model value changes.</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

#### `FAB.off('change:myVar.myNamespace')`

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
      <td>Event type</td>
      <td>string</td>
      <td>The event to off</td>
      <td>✔</td>
    </tr>
  </tbody>
</table>

All [function sets](#function-sets) also have their own storage models. Instead of working off the FAB global object, you work from your local scope (`this`) in your function set object, or directly on the function set at `FAB.myFunctionSet.set('myVar', 'myVal')`.
