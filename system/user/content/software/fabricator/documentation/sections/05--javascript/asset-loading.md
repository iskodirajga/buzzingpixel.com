---
Title: Asset Loading
---

Asset loading allows you to dynamically load CSS or JS files on the fly.

#### `FAB.assets.load();`

This method takes one argument: an object.

Object keys and values:

<table class="doc-table">
  <thead>
    <tr>
      <th>Object key</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>root</td>
      <td>string</td>
      <td>-</td>
      <td>Optionally set the root domain to request assets from (useful for CDN requests)</td>
    </tr>
    <tr>
      <td>js</td>
      <td>string, array</td>
      <td>-</td>
      <td>Set a js file (string) or js files (array) to to be loaded. Path relative to `root` else site root</td>
    </tr>
    <tr>
      <td>css</td>
      <td>string, array</td>
      <td>-</td>
      <td>Set a css file (string) or css files (array) to to be loaded. Path relative to `root` else site root</td>
    </tr>
    <tr>
      <td>async</td>
      <td>boolean</td>
      <td>false</td>
      <td>Whether to load the JS asynchronously</td>
    </tr>
    <tr>
      <td>failure</td>
      <td>function</td>
      <td>-</td>
      <td>Callback function run if loading fails</td>
    </tr>
    <tr>
      <td>success</td>
      <td>function</td>
      <td>-</td>
      <td>Callback function run when loading is finished</td>
    </tr>
  </tbody>
</table>

<pre class="language-javascript">
<code>
FAB.assets.load({
    root: 'https://cdn.site.com/',
    js: 'assets/js/lib/myCSS.min.js',
    css: 'assets/css/lib/myJS.min.js',
    failure: function() {
        console.log('fail');
    },
    success: function() {
        console.log('success');
    }
});
</code>
</pre>
