---
Title: Getting One Result
---

Sometimes you just want to get one result. That’s why the Ansel image object has the `first()` function. It returns just one result. If you have not already run the query on that object (either by looping through it or calling the `get()` function), the limit will also be set to `1` on the query for effeciency.

Here are some examples:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-twig">
<code class="content-blocks__code content-blocks__code--example  language-twig">
{% set image = craft.ansel.images.first %}

&lt;img src="{{ image.asset.url }}" alt="{{ image.title }}">
</code>
</pre>
</div>

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-twig">
<code class="content-blocks__code content-blocks__code--example  language-twig">
{% for entry in craft.entries.section('mySection') %}
	&lt;img src="{{ entry.myAnselField.first.asset.url }}" alt="{{ entry.title }}">
{% endfor %}
</code>
</pre>
</div>
