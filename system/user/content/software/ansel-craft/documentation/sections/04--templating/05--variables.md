---
Title: Variables
---

When looping through the Ansel Images object (above), you are looping through an array of models. Each model in the array represents an image row in your field(s). Those models have certain properties available as variables in your template.

Below the `image` variable represents the model in your loop as if you were running:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-twig">
<code class="content-blocks__code content-blocks__code--example  language-twig">
{% for image in craft.ansel.images %}
	{{ image.id }}
{% endfor %}
</code>
</pre>
</div>

### `{{ image.id }}`

Ansel's internal ID for the image. If you need something unique about the image for a class or ID or something in your markup, this will do nicely.

### `{{ image.elementId }}`

The ID of the owning elmement of the field the image is from.

### `{{ image.fieldId }}`

The field ID the image is from.

### `{{ image.asset }}`

This is a [Craft AssetFileModel] and can do anything you see in the linked documentaiton like get the URL, a transform URL and more.

[Craft AssetFileModel]: https://craftcms.com/docs/templating/assetfilemodel

### `{{ image.highQualityAsset }}`

This is a [Craft AssetFileModel]. Sometimes when running transforms or in other various curcumstances, you want the super high quality version of the image. Luckily, Ansel saves a high quality version regardless of your field quality settings and this is how you access it.

### `{{ image.thumbAsset }}`

This is a [Craft AssetFileModel]. Ansel uses this internally for it's own thumbnails, but also makes it available to you here.

### `{{ image.width }}`

The width of the image in pixels.

### `{{ image.height }}`

The height of the image in pixels.

### `{{ image.title }}`

The image title.

### `{{ image.caption }}`

The image caption.

### `{{ image.cover }}`

Whether the images is set as the cover image or not.

### `{{ image.position }}`

The position of the image in the field.

### `{{ image.dateCreated }}`

A DateTime object.

### `{{ image.dateUpdated }}`

A DateTime object.
