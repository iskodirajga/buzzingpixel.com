---
Title: Tag Parameters
---

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>
		All parameters with an "_operator" suffix take the following values:
		<ul>
			<li>==</li>
			<li>!=</li>
			<li><</li>
			<li>></li>
			<li><=</li>
			<li>>=</li>
			<li>IN</li>
			<li>NOT IN</li>
		</ul>
	</p>
</div>

<div class="content-blocks__pre-wrapper">
<pre class="content-blocks__pre content-blocks__pre--example language-ee">
<code class="content-blocks__code content-blocks__code--example language-ee">
{exp:treasury:files
	id="38|45"
	id_operator="!="

	location_id="1|3"
	location_id_operator="NOT IN"

	site_id="1|3"
	site_id_operator="IN"

	file_name="my_file.jpg"
	file_name_operator="=="

	uploaded_by_member_id="2|6"
	uploaded_by_member_id_operator="!="

	modified_by_member_id="2|6"
	modified_by_member_id_operator="!="

	width="200"
	width_operator=">"

	height="200"
	height_operator="<"

	limit="10"
	offset="10"

	order="file_name"
	sort="asc"

	namespace="my_namespace"
}
</code>
</pre>
</div>
