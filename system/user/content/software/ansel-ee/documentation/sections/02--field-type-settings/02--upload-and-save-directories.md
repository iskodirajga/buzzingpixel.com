---
Title: Upload and Save Directories
---

The first two settings for any Ansel field are very related and require a tiny bit of explanation.

The Upload directory is where source images are drawn from or uploaded to. It is meant to be a user facing directory — the one your users will see when they add an image to an Ansel field.

The save directory is where Ansel saves images the user crops or otherwise adds to the field. The end user should not ever need to see this directory. Ansel names the files with image IDs and timestamps for cache breaking purposes and so on when the user updates the images in any field.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>There are a few different approaches and ways of thinking about this. You could create a source and save directory for each field and keep everything separate, or you could create one general upload directory for all source images, and a save directory for each field. Either approach has its merits. Either way, it is highly recommended that you create a save directory for each field you create. This allows you to keep your images well segregated and create unique image manipulations per directory and field as well.</p>
</div>
