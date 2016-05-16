---
Title: Configuring
---

Ansel has a few settings you may want to look at before diving in to making your Ansel fields.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>All global settings have config override options you can put in your Ansel config file. To use a config file with Ansel, create a config file called <code>ansel.php</code> in your Craft config directory. This file should return an array of keys you wish to set configs for. Those keys are noted with the items below</p>
</div>

<!-- ![Ansel Settings](/assets/img/documentation/ansel/ansel-settings.png) -->

### License Key

You will need to enter the license key for this Ansel installation

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Remember</div>
	<p>You will need to purchase a site license for each of the sites you install Ansel on.</p>
</div>

### Default maximum quantity

Use this to set a default value for maximum quantity when creating new fields.

The config override key is `defaultMaxQty`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in the Max Quantity field when creating new fields.</p>
</div>

### Default image quality

Use this to set a default value for the image quality setting when creating new fields.

The config override key is `defaultImageQuality`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in the Image Quality field when creating new fields.</p>
</div>

### Default force JPG setting

Use this to set newly created fields to default to forcing JPG.

The config override key is `defaultJpg`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in the Force JPEG field when creating new fields.</p>
</div>

### Default retina mode

Use this to set newly created fields to default to retina mode.

The config override key is `defaultRetina`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in the Retina Mode field when creating new fields.</p>
</div>

### Default display title field

Use this to set newly created fields to default to show the title field.

The config override key is `defaultShowTitle`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in Display title field when creating new fields.</p>
</div>

### Default display caption field

Use this to set newly created fields to default to show the caption field.

The config override key is `defaultShowCaption`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in Display caption field when creating new fields.</p>
</div>

### Default display cover field

Use this to set newly created fields to default to show the cover field.

The config override key is `defaultShowCover`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in Display cover field when creating new fields.</p>
</div>

### Hide the Upload/Save directory instructions when setting up a new field?

Hide the instructions for how to use the Upload/Save directory settings when setting up/editing Ansel fields.

The config override key is `hideSourceSaveInstructions`.

### Config file example

The following example and example values can be placed in a file named `ansel.php` in your Craft config directory.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-php">
<code class="content-blocks__code content-blocks__code--example  language-php">
&lt;?php

return array(
	'licenseKey' => 'xxxx',
	'defaultMaxQty' => 4,
	'defaultImageQuality' => 95,
	'defaultJpg' => true,
	'defaultRetina' => true,
	'defaultShowTitle' => true,
	'defaultShowCaption' => true,
	'defaultShowCover' => true,
	'hideSourceSaveInstructions' => true
);
</code>
</pre>
</div>
