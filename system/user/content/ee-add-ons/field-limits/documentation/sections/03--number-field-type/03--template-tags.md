---
Title: Template Tags
---

For Channel Entries, Grid, and Blocks, getting the field output in your templates works as you would expect with the `{my_field_name}` tag — using Grid field prefixes for your Grid fields.

For Low Variables, there is one additional step if you want your field formatting to match what you selected in your field settings.

```
{exp:low_variables:single var="my_var"}
```
