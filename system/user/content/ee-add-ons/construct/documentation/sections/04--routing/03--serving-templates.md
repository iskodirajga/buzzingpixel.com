---
Title: Serving Templates
---

Construct can serve both regular and hidden templates, but it is recommend that you use hidden templates so they can’t be accessed directly — apart from a Construct route — and therefore serve duplicate end-points or run into errors because Construct Route Template Tags aren’t available.

<div class="content-blocks__note">
<div class="content-blocks__note-title">Note</div>
<p>
ExpressionEngine uses the dot (<code>.</code>) character by default to indicate a hidden template. But there is a configuration setting to change the character to something else (underscores are popular). Construct does not care what the character is and should handle it regardless.
</p>
</div>
