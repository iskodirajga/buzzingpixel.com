---
Title: Locations API: Get All Locations
---

`ee('treasury:LocationsAPI')::getAllLocations()`

The `getAllLocations()` method returns a Treasury collection of Treasury Locations models representing Treasury Locations. An argument can be passed in to control the order and sorting of locations.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$locationsCollection = ee('treasury:LocationsAPI')::getAllLocations('name:desc');
</code>
</pre>
</div>
