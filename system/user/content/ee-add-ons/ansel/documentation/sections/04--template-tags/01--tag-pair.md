---
Title: Tag Pair
---

The tag pair is how you output Ansel images. Whether you are using the custom field tag within a channel entry tag pair, a grid field tag pair, a blocks field tag pair, or a Low Variables tag pair, or the stand alone tag pair, usage is almost identical. In fact, the only real difference is with the stand alone tag pair, which has just a few extra parameters available to it.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example  language-ee">
<code class="content-blocks__code content-blocks__code--example  language-ee">
{exp:channel:entries channel="my_channel"}
	{!-- Number of images in field --}
	{my_ansel_field count="true"}

	{!-- Check if field has images --}
	{if my_ansel_field}
		// Do stuff if field has images
	{/if}

	{!-- Output images --}
	{my_ansel_field}
		{img:tag}
	{/my_ansel_field}

	{!-- Output images from a grid field --}
	{grid_field}
		{grid_field:my_ansel_field}
			{img:url}
		{/grid_field:my_ansel_field}
	{/grid_field}

	{!-- Output images from a blocks field --}
	{blocks_field}
		{my_block}
			{my_ansel_block_field}
				{img:tag}
			{/my_ansel_block_field}
		{/my_block}
	{/blocks_field}
{/exp:channel:entries}

{!-- Output images from a Low Variables Ansel field --}
{exp:low_variables:pair var="my_ansel_var"}
	{img:tag width="500"}
{/exp:low_variables:pair}

{!-- Output images with the stand alone tag --}
{exp:ansel:images content_id="102" field_id="33"}
	{if img:no_results}
		// Do no results markup here
	{/if}
	{img:tag width="400"}
{/exp:ansel:images}
</code>
</pre>
</div>
