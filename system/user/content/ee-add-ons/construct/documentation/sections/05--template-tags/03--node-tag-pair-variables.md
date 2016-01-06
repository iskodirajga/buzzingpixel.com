---
Title: Node Tag Pair Variables
---

All examples assume the default namespace of “construct.” If you change your namespace with the parameter, you will need to take that into account when copying/pasting.

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Variables Quick Reference
</div>
{construct:node_id}<br>
{construct:node_tree_id}<br>
{construct:node_parent}<br>
{construct:node_level}<br>
{construct:node_name}<br>
{construct:node_slug}<br>
{construct:node_full_route}<br>
{construct:node_entry_id}<br>
{construct:level_count}<br>
{construct:level_total_results}<br>
{construct:has_children}<br>
{construct:children}
</div>

#### `{construct:node_id}` <span class="content-blocks__heading-note">Variable</span>

The node ID of the current node in the tag pair loop.

#### `{construct:node_tree_id}` <span class="content-blocks__heading-note">Variable</span>

The Tree ID the current node belongs to.

#### `{construct:node_parent}` <span class="content-blocks__heading-note">Variable</span>

The parent node ID of the current node in the loop. If the node is at the root level, the value will be 0.

#### `{construct:node_level}` <span class="content-blocks__heading-note">Variable</span>

The level of the current node in the tag pair loop.

#### `{construct:node_name}` <span class="content-blocks__heading-note">Variable</span>

The name of the current node in the tag pair loop.

#### `{construct:node_slug}` <span class="content-blocks__heading-note">Variable</span>

The slug of the current node in the tag pair loop.

#### `{construct:node_full_route}` <span class="content-blocks__heading-note">Variable</span>

The full URI (all segments) of the current node.

#### `{construct:node_entry_id}` <span class="content-blocks__heading-note">Variable</span>

The ExpressionEngine Entry ID associated with the current node (if one exists).

#### `{construct:level_count}` <span class="content-blocks__heading-note">Variable</span>

The count of the current level node output. This works the same way the count variable usually does in tags, except this is the count of the current node level.

#### `{construct:level_total_results}` <span class="content-blocks__heading-note">Variable</span>

As with the previous tag, this works the way you would understand it to based on the total_results tags in other ExpressionEngine loops. So you could use it as a comparison against the `{construct:level_count}` tag.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{if construct:level_count == construct:level_total_results}
	{!-- Do awesome stuff here! --}
{/if}
</code>
</pre>
</div>

#### `{construct:has_children}` <span class="content-blocks__heading-note">Variable</span>

Use this variable as a boolean check. If the current node has children, this will return true.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{if construct:has_children}
	This node has children!
{/if}
</code>
</pre>
</div>

#### `{construct:children}` <span class="content-blocks__heading-note">Special Output Tag</span>

This tag is treated differently than other tags. Think of it as a marker, or a placeholder for where the children of the current node will be inserted (if they exist). All nodes are parsed through the same code between your tag pair. Once children are parsed, they are place where the `{construct:children}` marker/tag is at.

Rather than trying to explain it further, let’s have a demo.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:construct:nodes tree_id="2"}
	{if construct:level_count == 1}
	&lt;ul>
	{/if}
		&lt;li>
			&lt;a href="/{construct:node_full_route}">
				{construct:node_name}
			&lt;/a>
			{construct:children}
		&lt;/li>
	{if construct:level_count == construct:level_total_results}
	&lt;/ul>
	{/if}
{/exp:construct:nodes}
</code>
</pre>
</div>

For the sake of the length of demo code, let’s assume you have two nodes that would be output in this situation and the second node is a parent of the first node. That output would look like this:

<div class="content-blocks__pre-wrapper">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
&lt;ul>
	&lt;li>
		&lt;a href="/my/node/route">
			My Node Name
		&lt;/a>
		&lt;ul>
			&lt;li>
				&lt;a href="/my/node/route/other">
					My Second Node Name
				&lt;/a>
			&lt;/li>
		&lt;/ul>
	&lt;/li>
&lt;/ul>
</code>
</pre>
</div>

That’s simple, right? Nice and clean. And specifically, it’s quite dry. It allows us to use the same markup for both levels of nodes AND it puts it in the right place because of the `{construct:children}` marker/tag, and it still leaves you completely in control.

But what if you want to have different markup for differing levels of nodes? Not a problem. That’s where all those node level tags come in at. Just because we’re doing magic with the placement of node children doesn’t mean we can’t still make use of ExpressionEngine’s template parser as we would with any other tag pair. Observe:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:construct:nodes tree_id="2"}
	{if construct:node_level == 1}
		{if construct:level_count == 1}
		&lt;ul>
		{/if}
			&lt;li>
				&lt;a href="/{construct:node_full_route}">
					{construct:node_name}
				&lt;/a>
				{construct:children}
			&lt;/li>
		{if construct:level_count == construct:level_total_results}
		&lt;/ul>
		{/if}
	{if:elseif construct:node_level == 2}
		&lt;div>
			&lt;a href="/{construct:node_full_route}">
				{construct:node_name}
			&lt;/a>
		&lt;/div>
	{/if}
{/exp:construct:nodes}
</code>
</pre>
</div>

<div class="content-blocks__pre-wrapper">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
&lt;ul>
	&lt;li>
		&lt;a href="/my/node/route">
			My Node Name
		&lt;/a>
		&lt;div>
			&lt;a href="/my/node/route/other">
				My Second Node Name
			&lt;/a>
		&lt;/div>
	&lt;/li>
&lt;/ul>
</code>
</pre>
</div>

You’re in charge. You can go as simple or as crazy as you want. You can use the same markup for 3 or 4 levels, then use different markup for level 1. Or whatever you want. Be creative! That’s what Construct is here for!
