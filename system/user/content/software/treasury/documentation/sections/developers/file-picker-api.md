---
Title: File Picker API
---

`ee('treasury:FilePicker')->make()`

The File Picker API lets you get a link or a URL to a file picker modal.

### `make()`

Takes one optional argument of the location handle you would like the File Picker to use and returns the Treasury FilePicker service. The FilePicker service has the follwing methods:

#### `setLocation()`

Set the location handle for the location you would like to use (defaults to all).

#### `getUrl()`

Gets the URL to the location modal.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>In order for Treasury to be able to instantiate a model off of this URL, the link you build will need to have the class <code>js-treasury-filepicker</code>.</p>
</div>

#### `getLink()`

Takes one optional argument of the text you would like to use for the `<a>` tag.

This method returns the Treasury FilePicker\Link service which you can use to build an HTML anchor link. The following methods are available from the FilePicker\Link service:

##### `setAttribute($key, $val)`

Allows you to add attributes to the `<a> tag`.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$link = ee('treasury:FilePicker')->make('my-location')
	->getLink('Click Me')
	->setAttribute('class', 'my-button');
</code>
</pre>
</div>

##### `addAttributes(array())`

Allows you to add multiple attributes to the `<a> tag` at once.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$link = ee('treasury:FilePicker')->make('my-location')
	->getLink('Click Me')
	->addAttributes(array(
		'class' => 'my-button',
		'id' => 'my-id'
	));
</code>
</pre>
</div>

##### `setText('Click Me')`

Set the text of the `<a>` tag.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$link = ee('treasury:FilePicker')->make('my-location')
	->getLink()
	->setText('Click Me');
</code>
</pre>
</div>

##### `setHtml($html)`

Set the HTML content of the `<a>` tag.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$link = ee('treasury:FilePicker')->make('my-location')
	->getLink()
	->setHtml('<span>my html</span>');
</code>
</pre>
</div>

##### `render()`

While the magic `__toString()` method will usually run the render method when needed, it may sometimes be necesary to manually run the render method to get your rendered HTML `<a>` tag. Here‘s a full example:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$link = ee('treasury:FilePicker')->make('my-location')
	->getLink('Click Me')
	->setAttribute('class', 'my-button')
	->render();
</code>
</pre>
</div>

## The JavaScript Side

The button opens an EE modal and you can select a file, but you need to do something with it after it is selected. In order to do that, you need to set a callback on your button.

### `$('.my-button-el').TreasuryFilePicker()`

Use the `TreasuryFilePicker` jQuery plugin to set a callback function to use for your button instance.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-php">
<code class="content-blocks__code content-blocks__code--example language-php">
$('.my-button-el').TreasuryFilePicker({
	callback: function(file) {
		console.log(file);
	}
});
</code>
</pre>
</div>

The first argument is an object with all the properties of the file, plus any of those properties that don’t match EE’s file object translated.
