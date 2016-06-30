---
Title: Files API: Get Files
---

`ee('treasury:FilesAPI')->getFiles()`

The `getFiles()` method acts as a factory for a Treasury Collection of Treasury Files models representing Treasury files.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$fileModelsCollection = ee('treasury:FilesAPI')->getFiles();
</code>
</pre>
</div>

## Filtering

By default, the `getFiles()` method will get all files in the database ordered by upload date descending. But you can control what files are retrieved by filtering.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>
		All filters can use the the following comparisons:
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
$filesAPI = ee('treasury:FilesAPI')
	->filter('id', 'IN', array(38, 39))
	->filter('location_id', 2)
	->filter('site_id', 2) // defaults to current site
	->filter('file_name', 'my-file.jpg')
	->filter('uploaded_by_member_id', 4)
	->filter('modified_by_member_id', 2)
	->filter('width', '>', 200)
	->filter('height', '<', 300)
	->search('My Search Key Words') // Searches title, mime_type, file_name, and description
	->limit(4)
	->offset(8)
	->order('modified_date', 'asc') // second arg optional. Defaults to upload_date desc
	// Order by values: upload_date|modified_date|title|file_name|mime_type

$file = $filesAPI->getFirst();
$files = $filesAPI->getFiles();
$total = $filesAPI->getCount();
</code>
</pre>
</div>
