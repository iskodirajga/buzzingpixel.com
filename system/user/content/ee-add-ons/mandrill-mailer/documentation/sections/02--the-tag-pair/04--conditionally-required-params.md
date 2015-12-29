---
Title: Conditionally Required Parameters
---

#### `to="janedoe@internet.com"` <span class="content-blocks__heading-note">Param (conditional)</span>

This is a pipe delimited list of email addresses.

**This is required if you do not have an input with a name of `to-email`.**

#### `from="johndoe@internet.com"` <span class="content-blocks__heading-note">Param (conditional)</span>

A single email address that the email is from. This will only be used in the reply-to header.

**This is required if you do not have an input with a name of `from-email`.**

#### `subject="Cool Stuff Happening"` <span class="content-blocks__heading-note">Param (conditional)</span>

Specify a subject for the email.

**Required if you do not have an input with the name of `subject`.**
