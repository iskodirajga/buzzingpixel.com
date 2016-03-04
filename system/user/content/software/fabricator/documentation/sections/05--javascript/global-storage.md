---
Title: Global Storage
---

Fabricator makes global storage avaiable via methods for getting and setting.

#### `FAB.$set('myVar', 'myVal')`

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
      <td>Global storage key for the variable you are settings. If this value already exists in global storage, the value will be overwritten.</td>
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

#### `FAB.$get('myVar')`

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
      <td>The key for the global storage item you would like to retrive</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>Fallback</td>
      <td>mixed</td>
      <td>null</td>
      <td>The value to fall back to if the variable does not exist in global storage.</td>
      <td></td>
    </tr>
  </tbody>
</table>
