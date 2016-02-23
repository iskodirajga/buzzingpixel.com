---
Title: Adding and Managing Variables
FloatingImage: /assets/img/documentation/collective/collective2-manage-mag.jpg
FloatingImageSide: right
EndNote: WYSIWYG and Checkbox fields do not have any settings.
---

Once you have created a group or groups, you will need to add variables to your groups and organize or otherwise manage them.

To get started, click the edit icon in the sidebar of the group you wish to add or orginaize variables in.

![Manage Collective Groups](/assets/img/documentation/collective/collective-manage-group.png)

To add a new variable, type a Name and Short Name (the Short Name will auto populate based on your name, but you can change it if you wish), chose the variable type you would like to use, and then click submit.

### Text Input and Textarea Settings

Text Input and Textarea fields have a setting for Max Length. If you enter an integer in this field the variable will be limited to that length and will display a counter when entering text in the variable to let you know what the limit is and how close you are to it.

### Simple Grid Settings

Simple grid is not as powerful as ExpressionEngine’s Grid field type, but it does offer simple text input fields. Populate the settings field in the following format:

<div class="content-blocks__pre-wrapper">
<pre>
<code class="language-ee">field_handle|Field Name||another_field_handle|Another Field Name</code>
</pre>
</div>

A single pipe ( | ) seperates the field handle and the field name and a double pipe (  ||  ) seperates fields.
