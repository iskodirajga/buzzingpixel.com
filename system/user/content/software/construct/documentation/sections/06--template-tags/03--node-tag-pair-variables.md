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
{construct:node_external_link} (new in v2)<br>
{construct:node_full_route}<br>
{construct:node_link} (new in v2)<br>
{construct:node_routing} (new in v2)<br>
{construct:node_pagination} (new in v2)<br>
{construct:node_pagination_amount} (new in v2)<br>
{construct:node_entry_id}<br>
{construct:node_listing_channels} (new in v2)<br>
{construct:node_output} (new in v2)<br>
{construct:level_index} (new in v2)<br>
{construct:level_count}<br>
{construct:level_total_results}<br>
{construct:index} (new in v2)<br>
{construct:count} (new in v2)<br>
{construct:total_results} (new in v2)<br>
{construct:has_children}<br>
{construct:children}
</div>

#### `{construct:node_id}` <span class="content-blocks__heading-note">Variable</span>

The unique ID (integer) of the Node.

#### `{construct:node_tree_id}` <span class="content-blocks__heading-note">Variable</span>

The Tree ID the Node belongs to.

#### `{construct:node_parent}` <span class="content-blocks__heading-note">Variable</span>

The parent node ID of the Node. If the node is at the root level, the value will be 0.

#### `{construct:node_level}` <span class="content-blocks__heading-note">Variable</span>

The level of the Node (if the Node root level, the level will be 1. If the Node has one parent, the level will be 2. If the Node has two parents, the level will be 3, and so on).

#### `{construct:node_name}` <span class="content-blocks__heading-note">Variable</span>

The name of the Node.

#### `{construct:node_slug}` <span class="content-blocks__heading-note">Variable</span>

The Node's slug.

#### `{construct:node_external_link}` <span class="content-blocks__heading-note">Variable</span> <span class="content-blocks__heading-note">New in v2</span>

The external link field of the Node.

#### `{construct:node_full_route}` <span class="content-blocks__heading-note">Variable</span>

The full URI (all segments) of the Node.

#### `{construct:node_link}` <span class="content-blocks__heading-note">Variable</span> <span class="content-blocks__heading-note">New in v2</span>

This is the link of the Node. If the Node has an external link, that will be used, otherwise, the full route will be used, preceded by a forward slash for a root-relative link.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>Construct does not use a trailing slash on links by default. If you need for Construct to use a trailing slash for the link, use this config item in your ExpressionEngine config file:</p>
	<p><code>$config['construct_link_trailing_slash'] = true;</code></p>
</div>

#### `{construct:node_routing}` <span class="content-blocks__heading-note">Variable</span> <span class="content-blocks__heading-note">New in v2</span>

Boolean variable for whether routing has been enabled for this Node.

#### `{construct:node_pagination}` <span class="content-blocks__heading-note">Variable</span> <span class="content-blocks__heading-note">New in v2</span>

Boolean variable for whether pagination has been enabled for this Node.

#### `{construct:node_pagination_amount}` <span class="content-blocks__heading-note">Variable</span> <span class="content-blocks__heading-note">New in v2</span>

The number of entries specified for this Node's pagination.

#### `{construct:node_entry_id}` <span class="content-blocks__heading-note">Variable</span>

The ExpressionEngine Entry ID associated with this Node (if one exists).

#### `{construct:node_listing_channels}` <span class="content-blocks__heading-note">Variable</span> <span class="content-blocks__heading-note">New in v2</span>

The channel(s) chosen for listing on this Node. If there is more than on channel, they will be pipe delimited.

#### `{construct:node_output}` <span class="content-blocks__heading-note">Variable</span> <span class="content-blocks__heading-note">New in v2</span>

Boolean variable for whether menu output is enabled for this Node.

#### `{construct:level_index}` <span class="content-blocks__heading-note">Variable</span> <span class="content-blocks__heading-note">New in v2</span>

0 based index of the current level.

#### `{construct:level_count}` <span class="content-blocks__heading-note">Variable</span>

The count of the current level.

#### `{construct:level_total_results}` <span class="content-blocks__heading-note">Variable</span>

The total count of the current level.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{if construct:level_count == construct:level_total_results}
	{!-- Do awesome stuff here! --}
{/if}
</code>
</pre>
</div>

#### `{construct:index}` <span class="content-blocks__heading-note">Variable</span> <span class="content-blocks__heading-note">New in v2</span>

0 based index for all Nodes being output.

#### `{construct:count}` <span class="content-blocks__heading-note">Variable</span> <span class="content-blocks__heading-note">New in v2</span>

Count for all Nodes being output.

#### `{construct:total_results}` <span class="content-blocks__heading-note">Variable</span> <span class="content-blocks__heading-note">New in v2</span>

The total results of all Nodes being output.

#### `{construct:has_children}` <span class="content-blocks__heading-note">Variable</span>

Boolean variable to check if the current node has children.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{if construct:has_children}
	This node has children!
{/if}
</code>
</pre>
</div>

#### `{construct:children}` <span class="content-blocks__heading-note">Special Output Variable</span>

This variable is treated differently than other variables. Think of it as a marker, or a placeholder for where the children of the current node will be inserted (if they exist). All nodes are parsed through the same code between your tag pair. Once children are parsed, they are place where the `{construct:children}` marker/variable is at.

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

For the sake of the length of example code, let’s assume you have two nodes that would be output in this situation and the second node is a parent of the first node. That output would look like this:

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

That’s simple, clean, and dry. It allows us to use the same markup for both levels of nodes AND it puts it in the right place because of the `{construct:children}` marker/tag, and it still leaves you completely in control.

But what if you want to have different markup for differing levels of nodes? Not a problem. That’s where all those node level tags come in at. Just because we’re doing magic with the placement of node children doesn’t mean we can’t still make use of ExpressionEngine’s template parser as we would with any other tag pair.

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
