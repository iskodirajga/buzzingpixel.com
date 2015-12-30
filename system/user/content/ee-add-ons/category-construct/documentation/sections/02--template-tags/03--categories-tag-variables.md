---
Title: Categories Tag Variables
---

All examples assume the default namespace of “construct.” If you change your namespace with the parameter, you will need to take that into account when copying/pasting.

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Variables Quick Reference
</div>
{construct:cat_id}<br>
{construct:group_id}<br>
{construct:parent_id}<br>
{construct:cat_level}<br>
{construct:cat_name}<br>
{construct:cat_url_title}<br>
{construct:cat_url_path}<br>
{construct:cat_description}<br>
{construct:cat_image}<br>
{construct:custom_field_name}<br>
{construct:entry_count}<br>
{construct:count}<br>
{construct:total_results}<br>
{construct:level_count}<br>
{construct:level_total_results}<br>
{construct:has_children}<br>
{construct:children}
</div>

#### `{construct:cat_id}` <span class="content-blocks__heading-note">Variable</span>

The ID of the current category in the tag pair loop.

#### `{construct:group_id}` <span class="content-blocks__heading-note">Variable</span>

The Group ID the current category belongs to.

#### `{construct:parent_id}` <span class="content-blocks__heading-note">Variable</span>

The parent category ID of the current category in the loop. If the category is at the root level, the value will be 0.

#### `{construct:cat_level}` <span class="content-blocks__heading-note">Variable</span>

The level of the current category in the tag pair loop.

#### `{construct:cat_name}` <span class="content-blocks__heading-note">Variable</span>

The name of the current category in the tag pair loop.

#### `{construct:cat_url_title}` <span class="content-blocks__heading-note">Variable</span>

The URL title (slug) of the current category in the tag pair loop.

#### `{construct:cat_url_path}` <span class="content-blocks__heading-note">Variable</span>

The full URL path of the current category. If your current category URL title is “bear” and it is a child of a category whose slug is “hunting” then your full path will be “hunting/bear”.

#### `{construct:cat_description}` <span class="content-blocks__heading-note">Variable</span>

The description of the current category in the tag pair loop.

#### `{construct:cat_image}` <span class="content-blocks__heading-note">Variable</span>

The image associated with the category. Though Category Construct does not allow you to edit this, ExpressionEngine does have a category image feature and it is retrieved in the query. So it is made available to you in Category Construct.

#### `{construct:custom_field_name}` <span class="content-blocks__heading-note">Variable</span>

You can access your custom fields by using your namespace plus your fieldname: `{construct:field_name}`.

#### `{construct:entry_count}` <span class="content-blocks__heading-note">Variable</span>

Access the entry count for the current category if you have set `entry_count=“true”` parameter.

#### `{construct:count}` <span class="content-blocks__heading-note">Variable</span>

The overall count of the current output (does not take nesting into account).

#### `{construct:total_results}` <span class="content-blocks__heading-note">Variable</span>

The overall total categories being output by the tag (does not take nesting into account).

#### `{construct:level_count}` <span class="content-blocks__heading-note">Variable</span>

The count of the current level category output. This works the same way the count variable usually does in tags, except this is the count of the current category level.

#### `{construct:level_total_results}` <span class="content-blocks__heading-note">Variable</span>

As with the previous tag, this works the way you would understand it to based on the total_results tags in other ExpressionEngine loops. So you could use it as a comparison against the {construct:level_count} tag.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{if construct:level_count == construct:level_total_results}
	{!-- Do awesome stuff here! --}
{/if}
</code>
</pre>
</div>

#### `{construct:has_children}` <span class="content-blocks__heading-note">Boolean Variable</span>

Use this variable as a boolean check. If the current category has children, this will return true.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{if construct:has_children}
	This category has children!
{/if}
</code>
</pre>
</div>

#### `{construct:children}` <span class="content-blocks__heading-note">Special Output Tag</span>

This tag is treated differently than other tags. Think of it as a marker, or a placeholder for where the children of the current category will be inserted (if they exist). All categories are parsed through the same code between your tag pair. Once children are parsed, they are place where the `{construct:children}` marker/tag is at.

Rather than trying to explain it further, let’s have a demo.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:category_construct:categories group_id="2"}
	{if construct:level_count == 1}
	&lt;ul>
	{/if}
		&lt;li>
			&lt;a href="/{construct:cat_url_path}">
				{construct:cat_name}
			&lt;/a>
			{construct:children}
		&lt;/li>
	{if construct:level_count == construct:level_total_results}
	&lt;/ul>
	{/if}
{/exp:category_construct:categories}
</code>
</pre>
</div>

For the sake of the length of demo code, let’s assume you have two categories that would be output in this situation and the second category is a child of the first category. That output would look like this:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
&lt;ul>
	&lt;li>
		&lt;a href="/my/category/path">
			My Category Name
		&lt;/a>
		&lt;ul>
			&lt;li>
				&lt;a href="/my/category/path/other">
					My Second Category Name
				&lt;/a>
			&lt;/li>
		&lt;/ul>
	&lt;/li>
&lt;/ul>
</code>
</pre>
</div>

That’s simple, right? Nice and clean. And specifically, it’s quite DRY. It allows us to use the same markup for both levels of categories AND it puts it in the right place because of the `{construct:children}` marker/tag, and it still leaves you completely in control.

But what if you want to have different markup for differing levels of categories? Not a problem. That’s where all those category level tags come in at. Just because we’re doing magic with the placement of category children doesn’t mean we can’t still make use of ExpressionEngine’s template parser as we would with any other tag pair. Observe:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:category_construct:categories group_id="2"}
	{if construct:cat_level == 1}
		{if construct:level_count == 1}
		&lt;ul>
		{/if}
			&lt;li>
				&lt;a href="/{construct:cat_url_path}">
					{construct:cat_name}
				&lt;/a>
				{construct:children}
			&lt;/li>
		{if construct:level_count == construct:level_total_results}
		&lt;/ul>
		{/if}
	{if:elseif construct:cat_level == 2}
		&lt;div>
			&lt;a href="/{construct:cat_url_path}">
				{construct:cat_name}
			&lt;/a>
		&lt;/div>
	{/if}
{/exp:category_construct:categories}
</code>
</pre>
</div>

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
&lt;ul>
	&lt;li>
		&lt;a href="/my/category/path">
			My Category Name
		&lt;/a>
		&lt;div>
			&lt;a href="/my/category/path/other">
				My Second Category Name
			&lt;/a>
		&lt;/div>
	&lt;/li>
&lt;/ul>
</code>
</pre>
</div>

You’re in charge. You can go as simple or as crazy as you want. You can use the same markup for 3 or 4 levels, then use different markup for level 1. Or whatever you want. Be creative! That’s what Category Construct is here for!
