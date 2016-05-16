---
Title: Looping Through Images
---

Getting at your Ansel images almost always involves the Twig `{% for %}` loop (the exception is when using the `first` method explained more below).

If you aren’t already familiar with looping in Twig, it’s very simple. Twig `{% for %}` loops can loop through any variable or return value that is loopable (an array or object in PHP parlance) with the `{% for var in loopableItem %}` loop. For instance, looping through every Ansel image stored anywhere in Craft and outputting a simple image tag would look like this:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-twig">
<code class="content-blocks__code content-blocks__code--example  language-twig">
{% for image in craft.ansel.images %}
	&lt;img src="{{ image.asset.url }}" alt="{{ image.title }}">
{% endfor %}
</code>
</pre>
</div>

When getting Ansel images, you are ultimately going to need to loop through them in just such a manner.
