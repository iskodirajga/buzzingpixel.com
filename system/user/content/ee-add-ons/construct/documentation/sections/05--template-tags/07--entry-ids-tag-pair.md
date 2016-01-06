---
Title: Entry IDs Tag Pair
---

The `{exp:construct:entry_ids_pair}` tag pair has one purpose: to loop through the nodes retrieved in a flat loop and output the entry_id associated with those nodes. As such, it will not retrieve any nodes that do not have an assigned entry.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:construct:entry_ids_pair tree_id="1"}
	{construct:node_entry_id}
{/exp:construct:entry_ids_pair}
</code>
</pre>
</div>

### Parameters

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Parameters Quick Reference
</div>
tree_id="1"<br>
namespace="my_namespace"<br>
max_depth="2"<br>
parent_id="{construct_route:node_id}"<br>
node_slug="{segment_2}"<br>
node_full_route="{segment_1}/{segment_2}"
</div>

### Variable

#### `{construct:node_entry_id}` <span class="content-blocks__heading-note">Variable</span>

This outputs the Channel Entry ID associated with the current node in the tag pair loop.
