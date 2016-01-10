---
Title: Breadcrumbs Tag Pair Parameters
---

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Parameters Quick Reference
</div>
namespace="my_namespace"<br>
node_id="32"
tree_id="1"
node_full_route="{segment_1}/{segment_2}"<br>
</div>

#### `namespace="my_namespace"` <span class="content-blocks__heading-note">Param</span>

The default namespace is “construct” so you would get variables within the tag pair by using `{construct:var_name}`. If you set your namespace to “foo”, you would access variables as `{foo:var_name}`.

#### `node_id="32"` <span class="content-blocks__heading-note">Param</span>

This is an optional parameter to set the node ID to get the hierarchy of. If this parameter is not provided, Construct will check to see if you are on a Construct page and if you are, get the hierarchy of that page. If you are not on a Construct served page, or this parameter is not provided, the tag will have no output, which makes it safe to use in pretty much any context.

#### `tree_id="1"` <span class="content-blocks__heading-note">Param</span>

The ID of the Tree you would like to get Node hierarchy from.

#### `node_full_route="home/about"` <span class="content-blocks__heading-note">Param</span>

Specify the full route of the Node to get hierarchy from.
