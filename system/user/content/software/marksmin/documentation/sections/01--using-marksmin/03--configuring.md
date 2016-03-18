---
Title: Configuring Marksmin
---

There are two required config items you need to put in your ExpressionEngine config file.

#### `$config['marksmin_enabled'] = true;`

You need to set this in your config file to enable Marksmin HTML minification on template render. You can set this item to `false` to disable.

#### `$config['marksmin_xhtml'] = false;`

If you need to minify XHTML (for instance, if you are living in the past), set this to true. Otherwise set to false.
