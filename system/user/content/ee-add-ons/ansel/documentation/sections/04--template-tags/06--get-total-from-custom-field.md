---
Title: Get Total from Custom Field
---

Sometimes you would like to display the total number of images in a field. Ansel makes this really easy with a parameter on the custom field tag:

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-ee">
<code class="content-blocks__code content-blocks__code--example  language-ee">
{exp:channel:entries channel="my_channel"}
	{my_ansel_field count="true"}
{/exp:channel:entries}
</code>
</pre>
</div>
