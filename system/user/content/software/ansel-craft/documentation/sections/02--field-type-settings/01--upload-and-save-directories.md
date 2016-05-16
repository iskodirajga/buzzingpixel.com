---
Title: Upload and Save Directories
---

The first two settings for any Ansel field are very related and require a tiny bit of explanation.

The Upload directory is where source images are drawn from or uploaded to. It is meant to be a user facing directory — the one your users will see when they add an image to an Ansel field.

The save directory is where Ansel saves images the user crops or otherwise adds to the field. The end user should not ever need to see this directory. Ansel uses the save directory for high quality source files, cropped files, thumbnail files and more. Ansel also names the files in this directory with image IDs and timestamps for cache breaking purposes and so on when the user updates the images in any field.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>There are a few different approaches and ways of thinking about this. You could create a source and save directory for each field and keep everything separate, or you could create one general upload directory for all source images, and a save directory for each field. Or you could create a single save directory to use for all your Ansel fields. There are merits to each approach. Regardless, it is important to remember never to use a user-facing directory for the save directory of any Ansel field.</p>
</div>
