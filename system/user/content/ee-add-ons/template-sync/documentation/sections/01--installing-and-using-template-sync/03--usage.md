---
Title: Usage
---

- Saving templates as files is required and Tempalte Sync will only run when this is enabled in ExpressionEngine.
- Template Sync will run syncing any time you load a control panel page regardless of your environment.
- Template Sync will also run on any load of any page, CP or not, if you have defined an `ENV` constant and it is anything other than `prod`.

What generally happens when template sync runs:

- If a template, template partial, or template variable is in the database, but not present in your template files, it will be deleted from the database.
- For templates (not partials or variables), if the file extension is changed to one of the accepted ExpressionEngine template file types, the template type will be updated in the database.
- If you have a template group without an index template in the file system, an index file will be created with the contents `{redirect="404"}` (index templates exist for all template groups regardless of whether they are in the file system or not). The content of the index template can be changed at any time.
- Template sync will also create a `_spec` directory with files for all of EE’s specialty templates. Any time one of those files goes missing (like you accidentally delete it), it will be recreated since those templates cannot be deleted.
- Any time the content of one of those specialty templates changes on disk, it will be updated in the database.
