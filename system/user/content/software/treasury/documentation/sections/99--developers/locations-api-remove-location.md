---
Title: Locations API: Remove Location
---

`ee('treasury:LocationsAPI')::removeLocation()`

Removes a location.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$locationModel = ee('treasury:LocationsAPI')::removeLocation('my-location');
</code>
</pre>
</div>

## Return Value

the `removeLocation()` method returns a [Treasury Validation Result Class](#validation-result-class).
