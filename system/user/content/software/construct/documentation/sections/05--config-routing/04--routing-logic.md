---
Title: Routing Logic
---

There is one additional item you can set in your route key. The key is logic and the value of that key would be a function. This function will be run if your route is matched.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-php">
<code class="content-blocks__code content-blocks__code--example  language-php">
$config['construct_routes'] = array(
	'my/route/:pagination' => array(
		'logic' => function($routing, $path, $pagination) {
			// do stuff here
		}
	)
);
</code>
</pre>
</div>

### Arguments

The logic function receives various arguments. The first argument will always be the Routing object that you can use to do various things.

#### The Routing Object

The routing object offers you a number of helpful options like set the template, or the entry ID, or check what they are already set to.

##### `$routing->get('template')`

The `get()` method let's you check the value of any predefined Construct variables (such as the template as you see in the example above). You can get any of the settings variables in the section above.

##### `$routing->setTemplate('group/template')`

As indicated, you can set the template with this method.

You must declare `template => true` in your route key to set this item.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-php">
<code class="content-blocks__code content-blocks__code--example  language-php">
$config['construct_routes'] = array(
	'my/route' => array(
		'logic' => function($routing) {
			$routing->setTemplate('group/template');
		},
		'template' => true
	)
);
</code>
</pre>
</div>

##### `$routing->setEntryId(389)`

Set the Construct entry id.

You must declare `entryId => true` in your route key to set this item.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-php">
<code class="content-blocks__code content-blocks__code--example  language-php">
$config['construct_routes'] = array(
	'my/route' => array(
		'logic' => function($routing) {
			$routing->setEntryId(389);
		},
		'entryId' => true
	)
);
</code>
</pre>
</div>

##### `$routing->setPagination(18)`

Set the pagination.

You must declare `pagination => true` in your route key to set this item.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-php">
<code class="content-blocks__code content-blocks__code--example  language-php">
$config['construct_routes'] = array(
	'my/route' => array(
		'logic' => function($routing) {
			$routing->setPagination(18);
		},
		'pagination' => true
	)
);
</code>
</pre>
</div>

##### `$routing->setlistingChannels('blog|news')`

Set the listing channels.

You must declare `listingChannels => true` in your route key to set this item.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-php">
<code class="content-blocks__code content-blocks__code--example  language-php">
$config['construct_routes'] = array(
	'my/route' => array(
		'logic' => function($routing) {
			$$routing->setlistingChannels('blog|news');
		},
		'listingChannels' => true
	)
);
</code>
</pre>
</div>

##### `$routing->set404()`

This tell ExpresisonEngine to show the 404 error page.

##### `$routing->setStop()`

This prevents any further routes in the `construct_routes` array from being evaluated.

##### `$routing->setGlobal('my_global', 'my_value')`

The `setGlobal()` method allows you to set variables which will be available in your template.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-ee">
<code class="content-blocks__code content-blocks__code--example  language-ee">
{my_global}
</code>
</pre>
</div>

##### `$routing->setPair()`

The `setPair()` method takes two arguments, the first is the name of the pair you are setting, the second an array of variables for the tag pair to parse.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-php">
<code class="content-blocks__code content-blocks__code--example  language-php">
$routing->setPair('my_pair', array(
	0 => array(
		'my_var' => 'my_value'
	),
	1 => array(
		'my_var' => 'another_value'
	)
));
</code>
</pre>
</div>

Use the `route_pair` tag to retrieve that tag pair in your template:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-ee">
<code class="content-blocks__code content-blocks__code--example  language-ee">
{exp:construct:route_pair name="my_pair"}
	{my_var}
{/exp:construct:route_pair}
</code>
</pre>
</div>

The `route_pair` tag is running ExpressionEngine's native tag parsing methods and uses the array you set to parse the variables, so you can nest variables or do anything with the array you would do in any ExpressionEngine tag pair.

#### Matches

Any arguments after the `$routing` object are determined by your route. Each of the regex matches are passed into your function as arguments. For instance, a route key of `news/blog/:pagination` would have three arguments, the `$routing` object, the first match of `news/blog`, and the second match of the pagination segment.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-php">
<code class="content-blocks__code content-blocks__code--example  language-php">
$config['construct_routes'] = array(
	'news/blog/:pagination' => array(
		'logic' => function($routing, $val, $page) {
			var_dump($val, $page);
		}
	)
);
</code>
</pre>
</div>
