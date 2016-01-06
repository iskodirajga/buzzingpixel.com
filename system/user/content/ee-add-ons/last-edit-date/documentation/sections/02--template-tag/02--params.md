---
Title: Parameters
---

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Parameters Quick Reference
</div>
category_id="2"<br>
channel_id="4"<br>
entry_id="23"<br>
format="%d-%m-%Y"<br>
status="open|other"
</div>

#### `category_id="2|3"` <span class="content-blocks__heading-note">Param</span>

Specify 1 or more categories (pipe delimited) to check for the latest entry date.

#### `channel_id="4|5"` <span class="content-blocks__heading-note">Param</span>

Specify 1 or more channels (pipe delimited) to check for the latest entry date.

#### `entry_id="23|24"` <span class="content-blocks__heading-note">Param</span>

Specify 1 or more entry IDs (pipe delimited) to check for the latest entry date.

#### `format="%d-%m-%Y"` <span class="content-blocks__heading-note">Param</span>

Specify the formatting of the date here. This uses the same formatting variables as [ExpressionEngine’s native date formatting](https://docs.expressionengine.com/latest/templates/date_variable_formatting.html#date-formatting-codes). If no format is specified, a Unix timestamp will be returned.

#### `status="open|other"` <span class="content-blocks__heading-note">Param</span>

Specify the status(es) (pipe delimited) of the entries you would like to check. The default is “open” if you do not provide this parameter.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:last_edit_date
	channel_id="4"
	format="%d-%m-%Y"
	status="open|other"
}
</code>
</pre>
</div>
