---
Title: Route Template Tags
---

When the route of a node is matched and a template is served, Construct makes certain template tags available for your use.

### `{construct_route:node_id}`

This is the ID of the node currently matched.

### `{construct_route:node_tree_id}`

This is the ID of the Tree from the currently matched node.

### `{construct_route:node_name}`

The name of the currently matched node.

### `{construct_route:node_slug}`

The slug of the currently matched node — which will be the same as the last URI segment.

### `{construct_route:node_full_route}`

This is the full route of the currently matched node. Example: `about/executives/ceo`.

### `{construct_route:node_entry_id}`

This is arguably the most important tag available to a matched Construct route. This is how you can make the magic happen and connect everything together. You can feed this tag into the `entry_id` parameter of an `exp:channel:entries` tag pair to serve the specified node entry.

Here’s an example:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:channel:entries
	disable="categories|member_data|pagination"
	dynamic="no"
	entry_id="{construct_route:node_entry_id}"
	limit="1"
	status="open"
}
	&lt;h1>{title}&lt;/h1>
	{body}
{/exp:channel:entries}
</code>
</pre>
</div>
