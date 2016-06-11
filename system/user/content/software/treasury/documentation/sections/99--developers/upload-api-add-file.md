---
Title: Upload API: Add File
---

`ee('treasury:UploadAPI')::addFile()`

The `addFile()` method will upload the provided file and add it to the Treasury file manager and database.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$result = ee('treasury:UploadAPI')::addFile(
	'locationHandle',
	'pathToFileOnDisk',
	'nameYouWantUploadedFileTohave.png',
	'File Title', // Optional
	'File Description' // Optional
);
</code>
</pre>
</div>

## Return Value

the `addFile()` method returns a [Treasury Validation Result Class](#validation-result-class).
