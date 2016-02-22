---
Title: Parameters
---

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Parameters Reference
</div>
entry_id="23|36"<br>
not_entry_id="82|18"<br>
url_title="my-entry|my-other-entry"<br>
not_url_title="another-entry|other-content"<br>
channel_id="2|4"<br>
not_channel_id="3|5"<br>
channel="my-channel|my-other-channel"<br>
not_channel="another-channel|more-channels"<br>
category_id="2|3"<br>
not_category_id="4|5"<br>
category_url_title="my-category|my-other-category"<br>
not_category_url_title="another-category|more-categories"<br>
category_group_id="2|3"<br>
not_category_group_id="4|5"<br>
status="open|other"<br>
not_status="draft|other"<br>
show_future_entries="true"<br>
show_expired_entries="true"<br>
format="%d-%m-%Y"
</div>

Here are a few specific notes for some of the parameters:

### Not Parameter Counterparts

As you can see from the reference above, all applicable parameters have `not_` parameter counterparts. Specifying these excludes them.

### Pipe Delimited

As you can also see from the reference above, all applicable parameters support pipe-delimited lists.

#### Formatting the date (`format="%d-%m-%Y"`)

Formatting uses the same formatting variables as [ExpressionEngine’s native date formatting](https://docs.expressionengine.com/latest/templates/date_variable_formatting.html#date-formatting-codes). If no format is specified, a Unix timestamp will be returned.

#### Default Status `status="open|other"`

If no `status` or `not_status` parameter is provided, the status defaults to `open`.

### `show_future_entries` and `show_expired_entries` take “truthy” values

You can use the following values on these params to indicate you want future or expired entries:

- `y`
- `yes`
- `true`

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:last_edit_date
	channel_id="4|5"
	format="%d-%m-%Y"
	status="open|other"
}
</code>
</pre>
</div>
