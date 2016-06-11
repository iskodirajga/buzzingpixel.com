---
Title: Locations API: Save Location
---

`ee('treasury:LocationsAPI')::saveLocation()`

This method allows you to save a new location or update an existing location.

The following example adds a new location.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$saveData = array(
	'name' => 'My Location',
	'handle' => 'my_location',
	'type' => 'amazon_s3',
	'settings' => array(
		'access_key_id' => 'xxx',
		'secret_access_key' => 'xxx',
		'bucket' => 'mybucket',
		'subfolder' => 'mysubfolder', // optional
		'url' => 'http://s3.amazonaws.com/mybucketname',
		'allowed_file_types' => 'images_only'
	)
);

$result = ee('treasury:LocationsAPI')::saveLocation($saveData);
</code>
</pre>
</div>

To update an existing location, provide the original location handle as the second argument.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$result = ee('treasury:LocationsAPI')::saveLocation($saveData, 'my_old_location');
</code>
</pre>
</div>

## Return Value

the `saveLocation()` method returns a [Treasury Validation Result Class](#validation-result-class).
