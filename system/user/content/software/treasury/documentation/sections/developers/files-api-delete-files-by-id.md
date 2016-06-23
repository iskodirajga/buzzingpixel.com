---
Title: Files API: Delete Files By ID
---

`ee('treasury:FilesAPI')->deleteFilesById(array(2, 45))`

The `deleteFilesById()` method takes and array of Treasury file IDs to delete.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$result = ee('treasury:FilesAPI')->deleteFilesById(array(2, 45));
</code>
</pre>
</div>

## Return Value

The `deleteFilesById()` method returns a [Treasury Validation Result Class](#validation-result-class).
