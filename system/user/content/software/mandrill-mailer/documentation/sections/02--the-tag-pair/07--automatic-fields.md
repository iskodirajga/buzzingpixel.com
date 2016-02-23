---
Title: Automatic Fields
---

Depending on the type of form you need, you may or may not wish to use the automatic fields available. These fields can be overridden by tag parameters, but if those tag parameters are not present, Mandrill Mailer falls back to these fields.

#### `<input name="from-email">`

If you wish to let the user specify a from email, give your input the name of `from-email`. This will automatically be set as the reply-to address.

#### `<input name="from-name">`

If you wish to let the user specify their name, set your input name to `from-name`. This will be set as the from name on the email.

#### `<input name="to-email">`

Lets the user specify the email recipient. Set your input name to `to-email`. Useful for “email a friend” forms. This will be set as the to email.

#### `<input name="to-name">`

Allow the user to specify the name of the recipient by setting this input name to to-name.

#### `<input name="subject">`

Allow the user to specify the subject by setting the input name to subject.
