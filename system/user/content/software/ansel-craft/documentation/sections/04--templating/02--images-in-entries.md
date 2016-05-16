---
Title: Images in Entries
---

Perhaps the most common way you’ll be accessing Ansel images is in association with an entry. Here's an example:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-twig">
<code class="content-blocks__code content-blocks__code--example  language-twig">
{% for entry in craft.entries.section('mySection') %}
	{% for image in entry.myAnselField %}
		&lt;img src="{{ image.asset.url }}" alt="{{ image.title }}">
	{% endfor %}
{% endfor %}
</code>
</pre>
</div>

The Ansel field in an entry context will return an object pre-populated with the correct criteria to get all the images from that field for that entry. When you iterate over the images in that field in a `{% for %}` loop as above, Ansel automatically retrieves the images from the database (not before to save on query overhead if you don’t need that field).
