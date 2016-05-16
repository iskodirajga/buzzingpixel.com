---
Title: Images Standalone
---

If you need to get images outside of an entry context, use `craft.ansel.images` which returns the same loopable object seen above when getting images from a field.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-twig">
<code class="content-blocks__code content-blocks__code--example  language-twig">
{% for image in craft.ansel.images %}
	&lt;img src="{{ image.asset.url }}" alt="{{ image.title }}">
{% endfor %}
</code>
</pre>
</div>
