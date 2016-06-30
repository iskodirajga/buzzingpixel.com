---
Title: Files API: File Exists
---

`ee('treasury:FilesAPI')->fileExists('my-location', 'file-name.png')`

The `fileExists()` method takes a location handle and a filename and checks if the file exists.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$filesExists = ee('treasury:FilesAPI')->fileExists('my-location', 'file-name.zip');
</code>
</pre>
</div>

## Return Value

The `fileExists()` method returns a boolean.
