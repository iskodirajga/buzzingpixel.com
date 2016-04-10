---
Title: Prototype Methods
---

#### `'string'.toCamelCase();`

Fabricator adds the `toCamelCase()` method on the `String` prototype. This method removes spaces, dashes, and underscores and capitalizes the letter right after — hence, camelCase.

#### `Array.filterUnique()`

Filters the array to have only unique items (no duplicates in the array). This permenantly changes the array by removing duplicate items.

<pre class="language-javascript">
<code>
['item 1', 'item 1', 'item2'].filterUnique();
</code>
</pre>

#### `Array.getUnique()`

Gets only unique items from the array.

<pre class="language-javascript">
<code>
var myAarray = ['item 1', 'item 1', 'item2'];

var filtered = myArray.getUnique();
</code>
</pre>

#### `Array.pushUnique()`

Pushes only unique items into the array. If the item is already in the array it will not be added.

<pre class="language-javascript">
<code>
var myAarray = [];

myArray.pushUnique(1, 1, 2, 3);
</code>
</pre>
