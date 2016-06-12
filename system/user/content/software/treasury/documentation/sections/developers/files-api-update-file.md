---
Title: Files API: Update File
---

`ee('treasury:FilesAPI')->updateFile()`

This method lets you update the title and description of a file.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$result = ee('treasury:FilesAPI')->updateFile(
	15, // Required. ID of the file to update
	'title', // Required. File title
	'description' // Optional. Description.
);
</code>
</pre>
</div>

## Return Value

the `updateFile()` method returns a [Treasury Validation Result Class](#validation-result-class).
