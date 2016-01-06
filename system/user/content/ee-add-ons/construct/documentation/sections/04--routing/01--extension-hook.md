---
Title: How the Extension Hook Works
EndNote: It is highly recommended that you completely disable the ExpressionEngine built-in Pages module. It has to do queries as well to see if the route is a match. The routing functionality of Construct is intended to replace the first party Pages module.
---

If you’re into knowing what’s going on and how pages are served, this is what happens (if you just want to know the tags made available to your template by Construct, skip down).

The Construct extension uses the [core_template_route hook](https://ellislab.com/expressionengine/user-guide/development/extension_hooks/global/core/index.html). When you load any URI in ExpressionEngine, the core_template_route hook is run and Construct runs a query to see if there is a Node with routing enabled that matches the current URI and has a template associated with it. If one is returned then Construct will serve that template and make certain variables available to the template.
