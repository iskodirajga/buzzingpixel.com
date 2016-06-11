---
Title: Validation Result Class
---

The Validation Result Class is returned by Treasury whenever applicable. It has two properties:

- `(bool) hasErrors`
- `(array) errors`

Here's an example of how Treasury uses this internally:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
// Run the upload
$result = ee('treasury:UploadAPI')::addFile(
	$this->locationModel->handle,
	$this->saveData['filePath'],
	$this->saveData['fileName'],
	$this->saveData['title'],
	$this->saveData['description']
);

// Check if validation has errors
if ($result->hasErrors) {
	// Concatenate the errors
	$errors = '&lt;ul>&lt;li>' . implode('&lt;/li>&lt;li>', $result->errors) . '&lt;/li>&lt;/ul>';

	// Set errors
	ee('CP/Alert')->makeInline('upload_errors')
		->asIssue()
		->canClose()
		->withTitle(lang('upload_errors'))
		->addToBody($errors)
		->defer();

	// Redirect and show error
	ee()->functions->redirect(
		ee('CP/URL', "addons/settings/treasury/upload/{$this->locationId}")
	);
}
</code>
</pre>
</div>
