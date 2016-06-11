---
Title: Files API: Get Files
---

`ee('treasury:FilesAPI')::getFiles()`

The `getFiles()` method acts as a factory for a Treasury Collection of Treasury Files models representing Treasury files.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$fileModelsCollection = ee('treasury:FilesAPI')::getFiles();
</code>
</pre>
</div>

## Get Files options

By default, the `getFiles()` method will get all files in the database ordered by upload date descending. But you can control various aspects of the factory by passing in an array as the first argument.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>
		All parameters with an "_operator" suffix take the following values:
		<ul>
			<li>==</li>
			<li>!=</li>
			<li><</li>
			<li>></li>
			<li><=</li>
			<li>>=</li>
			<li>IN</li>
			<li>NOT IN</li>
		</ul>
	</p>
</div>

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$options = array(
	'id' => 38, // integer or array of integers
	'id_operator' => '!=', // optional
	'location_id' => 2, // integer or array of integers
	'location_id_operator' => '!=', // optional
	'site_id' => 1, // integer or array of integers (defaults to current site)
	'site_id_operator' => '!=', // optional
	'file_name' => 'my-file.jpg', // string or array of strings
	'file_name_operator' => '!=', // optional
	'uploaded_by_member_id' =>  2, // integer or array of integers
	'uploaded_by_member_id_operator' => '!=', // optional
	'modified_by_member_id' =>  2, // integer or array of integers
	'modified_by_member_id_operator' => '!=', // optional
	'width' =>  2, // integer or array of integers
	'width_operator' => '!=', // optional
	'height' =>  2, // integer or array of integers
	'height_operator' => '!=', // optional
	'limit' => 4, // integer or array of integers
	'offset' => 8, // integer or array of integers
	'order' => 'title', // optional. default: upload_date. values: upload_date|modified_date|title|file_name|mime_type
	'sort' => 'asc' // optional. default: desc values: asc|desc
);

$fileModelsCollection = ee('treasury:FilesAPI')::getFiles($options);
</code>
</pre>
</div>

## Get Files behavior

By default, `getFiles()` will return a Treasury collection of all matching results based on the array of options you give it. But sometimes you would like to return the first matching result directly. Or sometimes you just need to get a count of everything matching the criteria.

The second argument of `getFiles()` allows you to specify behavior.

### single

By specifying `single` as the second argument, `getFiles()` will limit the query to 1 and return a single Treasury Files model (rather than a collection of models).

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$fileModel = ee('treasury:FilesAPI')::getFiles(array('id' => 38), 'single');
</code>
</pre>
</div>

### count

Returns a count (integer) of all matching files based on criteria.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$numberOfFiles = ee('treasury:FilesAPI')::getFiles(array('location_id' => 2), 'count');
</code>
</pre>
</div>
