---
Title: The Tag Pair
---

Use the `{exp:typographee:parse}` tag pair to parse typography for any text, variable, or field in your template.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:typographee:parse}
	{body}
{/exp:typographee:parse}
</code>
</pre>
</div>

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Parameters Quick Reference
</div>
text_format="lite"<br>
html_format="safe"<br>
auto_links="yes"<br>
allow_img_url="no"
</div>

#### `text_format="lite"` <span class="content-blocks__heading-note">Param</span>

The default is “all” but you may not always want that. For instance if you have a simple text field you want parsed with proper curly quotes and apostrophes, but you don’t want paragraphs parsed, you might set this to “lite”. Certain text types can behave strangely with all at times, so you can try various settings (most often “lite”) to make the typoraphy parser behave appropritately.

Possible values are:

- `all` (default)
- `xhtml`
- `br`
- `lite`

#### `html_format="safe"` <span class="content-blocks__heading-note">Param</span>

Choose which HTML formats are allowed. The default is “all”. Possible values are:

- `all` (default)
- `safe`
- `none`

#### `auto_links="yes"` <span class="content-blocks__heading-note">Param</span>

Set this if you would like to automatically convert links into clickable anchor tags. The deafult is “no”.

#### `allow_img_url="no"` <span class="content-blocks__heading-note">Param</span>

Set to no if you would like to disallow image URLs. Default is “yes”.
