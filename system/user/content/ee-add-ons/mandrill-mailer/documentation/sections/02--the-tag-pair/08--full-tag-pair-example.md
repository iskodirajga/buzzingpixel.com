---
Title: Full Tag Pair Example
---

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:mandrill_mailer:form
	to="janedoe@internet.com"
	subject="Cool Stuff Happening"
	class="my-class"
	allowed="from-name|from-email|phone|content"
	required="from-name|from-email|content"
}

	{if success}
		Yay!
	{if:elseif error}
		Your submission did not go through, please check your info.
	{/if}

	&lt;input type="text" name="from-name" placeholder="Your Name" value="{from-name}">
	{if error:from-name}Oops, you need a name!{/if}

	&lt;input type="email" name="from-email" placeholder="Email Address" value="{from-email}">
	{if error:from-email}Oops, you need a email address!{/if}

	&lt;input type="text" name="phone" placeholder="Phone Number" value="{phone}">

	&lt;textarea name="content" placeholder="Message" value="{message}"></textarea>
	{if error:content}Oops, you need to write something!{/if}

	&lt;input type="submit">
{/exp:mandrill_mailer:form}
</code>
</pre>
</div>
