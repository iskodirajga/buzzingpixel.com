---
Title: On the Fly Cropping and Resizing
---

Ansel can crop and resize images on the fly. Doing so is very efficient because the cropped/resized image is cached after the first request for it is made. Any request for that cropped/resized image thereafter comes straight from the cache on disk.

Cropping/resizing is available to the `{img:url}` and `{img:tag}` variables.

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
On the Fly Cropping/Resizing parameters
</div>
width="400"<br>
height="100"<br>
crop="true"<br>
background="d34747"<br>
force_jpg="true"<br>
quality="80"<br>
scale_up="true"<br>
</div>

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-ee">
<code class="content-blocks__code content-blocks__code--example  language-ee">
{img:url:resize
	width="400"
	height="100"
	crop="true"
	background="d34747"
	force_jpg="true"
	quality="80"
	scale_up="true"
}

{img:tag
	attr:class="whatever"
	attr:id="test"
	width="600"
	height="100"
	crop="true"
	background="d34747"
	force_jpg="true"
	quality="80"
	scale_up="true"
}
</code>
</pre>
</div>
