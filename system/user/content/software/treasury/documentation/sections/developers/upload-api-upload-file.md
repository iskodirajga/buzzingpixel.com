---
Title: Upload API: Upload File
---

`ee('treasury:UploadAPI')::uploadFile()`

The `uploadFile()` method uploads a file to the provided location, but it is not added to the Treasury File Manager or database. You are responsible for knowing about the file and keeping track of it. Basically, Treasury is acting as a conduit to get your file to it's selected location. You can use the [Locations API](#locations-api-get-location-by-handle) to get the Locations Model and get the URL to the location for future display or retrieval of the file.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$result = ee('treasury:UploadAPI')::uploadFile(
	'locationHandle',
	'pathToFileOnDisk',
	'optionalSubDirectory/nameYouWantUploadedFileTohave.png'
);
</code>
</pre>
</div>

## Return Value

the `uploadFile()` method returns a [Treasury Validation Result Class](#validation-result-class).
