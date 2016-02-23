---
Title: Categories Tag Pair Parameters
---

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Parameters Quick Reference
</div>
group_id="1"<br>
namespace="my_namespace"<br>
max_depth="2"<br>
parent_id="24"<br>
parent_id_with_children="2|4|6" (new in 2.1.0)<br>
direct_parent="28"<br>
cat_url_title="hunting"<br>
cat_id="4"<br>
entry_id="32"<br>
show_empty="false"<br>
nested="false"<br>
channel_id="1|2"<br>
status="open|custom_status"<br>
entry_count="true"
</div>

#### `group_id="1"` <span class="content-blocks__heading-note">Param</span>

The ID of the group you would like to get categories from.

#### `namespace="my_namespace"` <span class="content-blocks__heading-note">Param</span>

The default namespace is “construct” so you would get variables within the tag pair by using `{construct:var_name}`. If you set your namespace to “foo”, you would access variables as `{foo:var_name}`.

#### `max_depth="2"` <span class="content-blocks__heading-note">Param</span>

Limit the depth of nesting the tag will output.

#### `parent_id="24"` <span class="content-blocks__heading-note">Param</span>

Specify the parent ID to get the child categories of that parent.

#### `parent_id_with_children="2|4|6"` <span class="content-blocks__heading-note">Param</span> <span class="content-blocks__heading-note">new in 2.1.0</span>

This paramater gets one or more category with all children levels.

#### `direct_parent="28"` <span class="content-blocks__heading-note">Param</span>

This differs slightly from `parent_id` in that in will get only categories whose parent is the specified parent category ID. It will not get any children of those categories.

<div class="content-blocks__note">
<div class="content-blocks__note-title">Note</div>
If you know you do not need any children, using this parameter will make the query and rendering slightly more efficient.
</div>

#### `cat_url_title="hunting"` <span class="content-blocks__heading-note">Param</span>

This will fetch any category with the specified slug.

#### `cat_id="4"` <span class="content-blocks__heading-note">Param</span>

This will fetch any category with the specified ID.

#### `entry_id="32"` <span class="content-blocks__heading-note">Param</span>

This will limit tag output to the specified entry ID. It checks to make sure the categories being output have been assigned to the entry ID. It’s great for using Category Construct to output categories for a specified entry — for instance, if you are inside a channel loop and want to output categories for that entry, then use this param.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:channel:entries channel="blog"}
	{title}
	{body}
	{exp:category_construct:categories entry_id="{entry_id}"}
		{construct:cat_name}
	{/exp:category_construct:categories}
{/exp:channel:entries}
</code>
</pre>
</div>

#### `show_empty="false"` <span class="content-blocks__heading-note">Param</span>

This parameter only accepts “false” and makes sure that the category has been assigned to at least one entry.

#### `nested="false"` <span class="content-blocks__heading-note">Param</span>

This sets all categories to output as if they were level 1.

#### `channel_id="1|2"` <span class="content-blocks__heading-note">Param</span>

This parameter works with the `entry_count` and `show_empty` parameters to count only entries from specified channel IDs.

#### `status="open|custom_status"` <span class="content-blocks__heading-note">Param</span>

When any parameter calls for retrieving channel entry information with the tag, this parameter will limit what statuses to retrieve. Works with:

- `show_empty="false"`
- `channel_id="1|2"`
- `entry_count="true"`

#### `entry_count="true"` <span class="content-blocks__heading-note">Param</span>

This retrieves entry counts for each category. If you are also using the `status` and `channel_id` parameters, it will limit the count query based on those parameters.
