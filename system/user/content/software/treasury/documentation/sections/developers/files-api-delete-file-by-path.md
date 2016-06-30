---
Title: Files API: Delete File By Path
---

`ee('treasury:FilesAPI')->deleteFileByPath('my-location', 'file-name.zip')`

The `deleteFileByPath()` method takes a location handle and a filename and deletes that file.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$result = ee('treasury:FilesAPI')->deleteFileByPath('my-location', 'file-name.zip');
</code>
</pre>
</div>

## Return Value

The `deleteFileByPath()` method returns a [Treasury Validation Result Class](#validation-result-class).
