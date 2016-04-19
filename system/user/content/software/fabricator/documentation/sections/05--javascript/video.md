---
Title: Video
---

Fabricator has a few convenience functions for working with HTML5 video.

#### `FAB.video.support();`

Returns boolean for whether the browser supports HTML5 video.

#### `FAB.video.supportedTypes();`

Returns an object of supported video types.

Example of the return object:

<pre class="language-javascript">
<code>
{
	h264: 'probably',
	webm: 'maybe',
	ogg: ''
}
</code>
</pre>

#### `FAB.video.create(obj);`

Creates a video element with your preferred supported video type. Specify an object as the argument with the order of preference you have for which video file is used. If the first item in the object is supported it will be used, if not, the second will be used, and so on.

<pre class="language-javascript">
<code>
var videoEl = FAB.video.create({
	h264: 'myvideo.mp4',
	webm: 'myvideo.webm',
	ogg: 'myvideo.ogg'
});
</code>
</pre>
