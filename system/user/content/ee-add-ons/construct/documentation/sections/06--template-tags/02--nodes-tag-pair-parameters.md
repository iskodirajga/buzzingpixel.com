---
Title: Nodes Tag Pair Parameters
---

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Parameters Quick Reference
</div>
tree_id="1"<br>
namespace="my_namespace"<br>
max_depth="2"<br>
parent_id="{construct_route:node_id}"<br>
node_entry_id="103"<br>
direct_parent="{construct_route:node_id}"<br>
node_slug="{segment_2}"<br>
node_full_route="{segment_1}/{segment_2}"<br>
nested="false"<br>
menu_output_only="false" (new in v2)<br>
node_entry_id_not_empty="true" (new in v2)
</div>

#### `tree_id="1"` <span class="content-blocks__heading-note">Param</span>

The ID of the Tree you would like to get nodes from.

#### `namespace="my_namespace"` <span class="content-blocks__heading-note">Param</span>

The default namespace is “construct” so you would get variables within the tag pair by using `{construct:var_name}`.

If you set your namespace to “foo”, you would access variables as `{foo:var_name}`.

#### `max_depth="2"` <span class="content-blocks__heading-note">Param</span>

Limit the depth of nesting the tag will output.

#### `parent_id="15"` <span class="content-blocks__heading-note">Param</span>

Specify a parent ID to get the child nodes of that parent. For instance, if you have nav on a page that is a child of the current page, you could do something like this:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:construct:nodes tree_id="2" parent_id="{construct_route:node_id}"}
	{construct:node_name}
{/exp:construct:nodes}
</code>
</pre>
</div>

#### `node_entry_id="103"` <span class="content-blocks__heading-note">Param</span>

This will get a node or nodes that have the specified Channel Entry ID associated with it.

#### `direct_parent="4"` <span class="content-blocks__heading-note">Param</span>

This differs slightly from `parent_id` in that in will get only nodes whose parent is the specified parent node ID. It will not get any children of those nodes.

<div class="content-blocks__note">
<div class="content-blocks__note-title">Note</div>
<p>
If you know you do not need any children, using this parameter will make the query and rendering slightly more efficient.
</p>
</div>

#### `node_slug="about"` <span class="content-blocks__heading-note">Param</span>

This will fetch any node with the specified slug.

#### `node_full_route="home/about"` <span class="content-blocks__heading-note">Param</span>

This will fetch any node with the specified full route.

#### `nested="false"` <span class="content-blocks__heading-note">Param</span>

This sets all nodes to output as if they were level 1.

#### `menu_output_only="false"` <span class="content-blocks__heading-note">Param</span> <span class="content-blocks__heading-note">New in v2</span>

If you wish for nodes to be included in the tag pair that have been set to not output in the menu, use this parameter.

#### `node_entry_id_not_empty="true"` <span class="content-blocks__heading-note">Param</span> <span class="content-blocks__heading-note">New in v2</span>

Use this parameter if you would like to make sure nodes in the tag pair have an assigned Entry ID.
