---
Title: Images Criteria
---

As with pretty much anything in Craft, you can also use criteria to get exactly the images you need in any given context.

Criteria can be specified as an associative array:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-twig">
<code class="content-blocks__code content-blocks__code--example  language-twig">
{% for image in entry.myAnselField({
	coverFirst: true,
	limit: 3
}) %}
	&lt;img src="{{ image.asset.url }}" alt="{{ image.title }}">
{% endfor %}
</code>
</pre>
</div>

Or they can be chained:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-twig">
<code class="content-blocks__code content-blocks__code--example  language-twig">
{% for image in craft.ansel.images.coverFirst.id('3,4').limit(2) %}
	&lt;img src="{{ image.asset.url }}" alt="{{ image.title }}">
{% endfor %}
</code>
</pre>
</div>

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Available Criteria
</div>
id: [3,4]<br>
elementId: [3,4]<br>
fieldId: [3,4]<br>
title: ['myTitle', 'My Other Title']<br>
caption: 'My Caption'<br>
coverOnly: true<br>
coverFirst: true<br>
skipCover: true<br>
limit: 4
</div>
