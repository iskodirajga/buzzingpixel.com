---
Title: Optional Parameters
---

#### `from-name="John Doe"` <span class="content-blocks__heading-note">Param</span>

If specifying the from parameter in the tag, you can also specify the `from-name` parameter.

This can also be set from an input with the name of `from-name`.

#### `required="phone|message"` <span class="content-blocks__heading-note">Param</span>

This is a pipe delimited list of field names that are required for this form submission.

#### `message="phone|message"` <span class="content-blocks__heading-note">Param</span>

By default, Mandrill Mailer includes all fields in the body of the email. However, if you do not want all fields in the body, use this parameter to specify the field names you would like to include in the body.

#### `return="/my/uri"` <span class="content-blocks__heading-note">Param</span>

By default, Mandrill Mailer will not redirect to a new page on successful form submission. However, if you would like to redirect to another page, use this parameter to do so.

#### `json="yes"` <span class="content-blocks__heading-note">Param</span>

Output a JSON response object on form submission rather than returning the template HTML.

If the submission was successful, the object will contain `"success": 1`.

If submission was unsuccessful, the object will contain `"success": 0`, and if there are errors related to fields in the submission, they will be listed in the errors array as a list of field names.

<div class="content-blocks__pre-wrapper content-blocks__pre-wrapper--example">
<pre class="content-blocks__pre content-blocks__pre--example">
<code class="language-javascript content-blocks__code content-blocks__code--example">
{
	"success": 0,
	"errors": [
		"field-name",
		"another-field",
		"more-fields"
	]
}
</code>
</pre>
</div>

#### `class="my-class"` <span class="content-blocks__heading-note">Param</span>

Specifies the class parameter for the `form` tag.

#### `id="my-id"` <span class="content-blocks__heading-note">Param</span>

Specifies the ID parameter for the `form` tag.

#### `attr:my-attribute="my-data"` <span class="content-blocks__heading-note">Param</span>

Specifies any arbitrary parameters you would like to add to your `form` tag. Useful for data attributes and the like.

#### `private_message="yes"` <span class="content-blocks__heading-note">Param</span>

Disables logging of email content in Mandrill.
