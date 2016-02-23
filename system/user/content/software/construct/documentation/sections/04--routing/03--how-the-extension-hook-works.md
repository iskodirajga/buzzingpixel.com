---
Title: How the Extension Hook Works
---

The Construct extension uses the core_template_route hook. When you load any URI in ExpressionEngine, the [core_template_route hook](https://docs.expressionengine.com/latest/development/extension_hooks/global/core/index.html) is run.

Construct checks to see if there is a Node with routing enabled that matches the current URI and has a template associated with it. It also checks to see if the route is a match for any config file routes.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>It is recommended that you completely disable the ExpressionEngine build-in Pages module since it also has to run queries to see if the current URI is a match for the page. The routing functionality of Construct is intended to replace the first party Pages module.</p>
</div>
