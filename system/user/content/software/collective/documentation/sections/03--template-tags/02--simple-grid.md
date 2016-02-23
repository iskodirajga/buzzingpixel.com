---
Title: Simple Grid
---

Though the Simple Grid fields are available as single tags, you will notice if you try to call one that they need a bit more processing so we need to use the tag pair.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre>
<code class="language-ee">{exp:collective:simple_grid variable="tiers"}
	{simple_grid:tier} - {simple_grid:amount}
{/exp:collective:simple_grid}</code>
</pre>
</div>

### Parameters

<div class="content-blocks__note software-docs-blocks__quick-ref">
	<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
		Parameters Quick Reference
	</div>
	variable="var_name"<br>
	namespace="my_namespace"
</div>

#### `variable="var_name"`<span class="content-blocks__heading-note">Param</span>

Specify the Collective Simple Grid variable you are processing.

#### `namespace="my_namespace"`<span class="content-blocks__heading-note">Param</span>

The default namespace is `simple_grid`. If you would like to change the namespace, use this parameter.

### Simple Grid Tag Pair Tags

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>All examples assume the default namespace of “simple_grid.” If you change the namespace with the paramter, you will need to take that into account when copying/pasting.</p>
</div>

<div class="content-blocks__note software-docs-blocks__quick-ref">
	<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
		Simple Grid Tags Quick Reference
	</div>
	{simple_grid:field_short_name}<br>
	{simple_grid:index}<br>
	{simple_grid:count}<br>
	{simple_grid:total_results}
</div>

#### `{simple_grid:field_short_name}`<span class="content-blocks__heading-note">Output Tag</span>

All of your variable’s fields are available with by their short name (with the namespace).

#### `{simple_grid:index}`<span class="content-blocks__heading-note">Output Tag</span>

Zero indexed count of your variables loop.

#### `{simple_grid:count}`<span class="content-blocks__heading-note">Output Tag</span>

The count of the current itteration/row of the tag pair loop. This works the same way the count variable usually does in tags such as the channel entries tag.

#### `{simple_grid:total_results}`<span class="content-blocks__heading-note">Output Tag</span>

This is the total count of the number of grid rows. It works the same way the total_results variable usually does in tags such as the channel entries tag.
