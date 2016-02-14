---
Title: Configuring
---

Ansel has a few settings you may want to look at before diving in to making your Ansel fields.

### License Key

The first thing you will want to do is visit the License page and enter your license key from your purchase on devote:ee.

- In ExpressionEngine 2, the license page can be located by clicking on "Ansel" from the list of Modules, then clicking on the "License" tab
- In ExpressionEngine 3, the license page can by licated by clicking on "Ansel" from the list of Add-ons in the Add-on Manager, then clicking on the "License" link in the sidebar

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Remember</div>
	<p>You will need a license from devote:ee for each of the sites you install Ansel on.</p>
</div>

### Global Settings

Ansel has a number of other global settings you may wish to take advantage of. To access them:

- In ExpressionEngine 2, click on "Ansel" from the list of Modules
- In ExpressionEngine 3, click on "Ansel" from the list of Add-ons in the Add-on Manager

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>All global settings have config override options you can put in your ExpressionEngine config file.</p>
</div>

#### Default host

This field is blank on new installs. If you wish all image URLs to be served from a CDN (for instance), you can enter a fully qualified URL here.

The config override item is `$config['ansel']['default_host']`.

#### Image cache location

This must be a full server path to a publicly URL accessible directory Ansel can use for caching images that are resized on the fly. By default, it will be `path/to/public/dir/images/ansel_image_cache/`. Make sure this directory has the appropriate permissions for PHP to write to it.

The config override item is `$config['ansel']['image_cache_location']`.

#### Default maximum quantity

Use this to set a default value for maximum quantity when creating new fields.

The config override item is `$config['ansel']['default_max_qty']`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in the Max Quantity field when creating new fields.</p>
</div>

#### Default image quality

Use this to set a default value for the image quality setting when creating new fields.

The config override item is `$config['ansel']['default_image_quality']`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in the Image Quality field when creating new fields.</p>
</div>

#### Default force JPG setting

Use this to set newly created fields to default to forcing JPG.

The config override item is `$config['ansel']['default_jpg']`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in the Force JPEG field when creating new fields.</p>
</div>

#### Default retina mode

Use this to set newly created fields to default to retina mode.

The config override item is `$config['ansel']['default_retina']`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in the Retina Mode field when creating new fields.</p>
</div>

#### Default display title field

Use this to set newly created fields to default to show the title field.

The config override item is `$config['ansel']['default_show_title']`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in Display title field when creating new fields.</p>
</div>

#### Default display caption field

Use this to set newly created fields to default to show the caption field.

The config override item is `$config['ansel']['default_show_caption']`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in Display caption field when creating new fields.</p>
</div>

#### Default display cover field

Use this to set newly created fields to default to show the cover field.

The config override item is `$config['ansel']['default_show_cover']`.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This does not affect field settings, only the default value populated in Display cover field when creating new fields.</p>
</div>
