---
Title: Looping Through Images
---

There are two ways to get Ansel images, and both involve looping through the results in Twig.

If you aren’t already familiar with looping in Twig, it’s very simple. Twig loops can loop through any variable or return value that is loopable (an array or object in PHP parlance) with the `{% for var in loopableItem %}` tag. For instance, looping through every Ansel image stored anywhere in Craft and outputting a simple image tag would look like this:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-twig">
<code class="content-blocks__code content-blocks__code--example  language-twig">
{% for image in craft.ansel.images %}
	&lt;img src="{{ image.asset.url }}" alt="{{ image.title }}">
{% endfor %}
</code>
</pre>
</div>

Regardless of how you are getting your images, you are ultimately going to need to loop through Ansel’s images in just such a manner.
