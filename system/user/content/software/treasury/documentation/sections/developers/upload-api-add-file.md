---
Title: Upload API: Add File
---

`ee('treasury:UploadAPI')->addFile()`

The `addFile()` method will upload the provided file and add it to the Treasury file manager and database.

Before you can call the `addFile` method, you must set:

- `locationHandle`
- `filePath`
- `fileName`

You can optionally set:

- `title`
- `description`

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$result = ee('treasury:UploadAPI')
	->locationHandle('my-location')
	->filePath('/path/to/file/on/disk.jpg')
	->fileName('nameYouWantUploadedFileTohave.png')
	->title('Optional Title')
	->description('Optional Description')
	->addFile();
</code>
</pre>
</div>

## Return Value

the `addFile()` method returns a [Treasury Validation Result Class](#validation-result-class).
