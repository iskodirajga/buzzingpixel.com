---
Title: Tags
---

Mandrill makes a few tags available within the tag pair as well.

#### `{field-name}` <span class="content-blocks__heading-note">Output Tag</span>

(Where field-name is the name parameter of your input field)

Mandrill Mailer makes tags for all of your allowed fields available so that on post back, if there is an error, the content the user entered in will still be available and the user does not have to re-enter all of their content.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
&lt;input type="text" name="from-name" placeholder="Your Name" value="{from-name}">
</code>
</pre>
</div>

In the example, `{from-name}` will contain the submission value of the field and so the field will be re-populated.

#### `{if error:field-name}` <span class="content-blocks__heading-note">Boolean Tag</span>

If a required field is left blank and you are not returning JSON, you’ll need to let the user know that they didn’t fill in one of the required inputs.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
&lt;input type="text" name="from-name" placeholder="Your Name" value="{from-name}">
{if error:from-name}Oops, you need a name!{/if}
</code>
</pre>
</div>

#### `{if success}` <span class="content-blocks__heading-note">Boolean Tag</span>

If submission is successful, this tag returns true.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{if success}
	Yay! Your email has been sent.
{/if}
</code>
</pre>
</div>

#### `{if error}` <span class="content-blocks__heading-note">Boolean Tag</span>

If submission is unsuccessfu, this tag returns true.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{if error}
	Rats! Your submission did not go through, please check your info.
{/if}
</code>
</pre>
</div>
