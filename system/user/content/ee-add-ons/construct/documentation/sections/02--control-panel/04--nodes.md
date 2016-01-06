---
Title: Template Preferences
FloatingImage: /assets/img/documentation/construct/add-node-button.png
FloatingImageSide: right
FloatingImageWidth: 115
---

Nodes are Construct’s bread and butter. Think of a node like an ExpressionEngine URI segment. A top level node’s slug will be an ExpressionEngine `{segment_1}`. Any nodes nested under a top level node at level 2 will be `{segment_2}` and so on. This allows you to create logical hierarchy​.

In order to add a node, click the “plus” button located on the lower right of a tree.

### Adding a Node

<p><img src="/assets/img/documentation/construct/add-node-dialog.png" width="604"></p>

#### Node Name

If you are using Construct to output menus, this will be important because this will be the name of the menu item in your tag output.

#### Slug

The slug is the segment portion of the URI. It will be used to build the full URI route to this page. Which segment it is depends on the level of the node.

<div class="content-blocks__note">
<div class="content-blocks__note-title">Note</div>
<p>
Why slug? Why not URL Title or some other ExpressionEngine familiar nomenclature?
</p>
<p>
Well, URL Title didn’t feel right when naming this field since it is not equivelant to anything else EE calls a URL Title. URL is also not right because depending on the depth, the URL will have other segments in it. Slug seemed the best way to describe what this field does.
</p>
</div>

#### Template

If you want this node to route to a template, chose one of the templates you’ve set up and made available to this tree here.

#### Entry

This menu will be populated with the entries from the template you’ve chosen (if you set up a channel for your template and the channel has any entries). Choose one if you want an entry to be associated with your node.

#### Routing Toggle

This tells Construct whether you want this node to route or not. It can be useful to have a node only for menu output. Let’s say you have a paginated blog that is routing via other means (perhaps simply using EE’s built in `template-group/template` routing scheme, or maybe you’re using Rob Sanchez’s excellent [Resource Router](https://github.com/rsanchez/resource_router)). You would still need to get that item into your menu, but you would not want to use Construct for routing in that case.

#### Menu Output

In the same way that you may not want a Node to route, you also may want to have a hidden page, or in some way have a page that will route, but not output in the menu. In that case, this toggle is your friend.
