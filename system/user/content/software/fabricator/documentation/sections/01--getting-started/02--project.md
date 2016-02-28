---
Title: project.json
---

The `project.json` file is your file to configure. All keys present in the sample file and listed here are required.

All path settings should be relative to your project file except where noted.

### `root`

Type: string

The public directory for your website.

### `assets`

Type: string

The assets directory where your compiled files will go (should be in your `root` (public) direcotry).

### `source`

Type: string

The directory where your source files live. `assetsSource` is the default name.

### `proxy`

Type: string|boolean

The url for Browsersync to proxy (for reloading) or false. If set to false, you can copy and paste a JavaScript snippet into your page for reloading if you like.

### `watch`

Type: array

Add any custom watch paths to this array. You can use file globbing patterns. When any changes are made to the files listed in this array, Browsersync will trigger a refresh just like with core files.

### `lessCompress`

Type: boolean

Set to `true` to compress and minify the CSS output, `false` for un-minified CSS output.

### `lessBuild`

Type: array  
Note: Items are relative to the `source` directory

All files listed in this array will be compiled into the primary CSS output file.

### `lessFiles`

Type: object  
Note: Keys in this object are relative to the `assets` directory and values to the `source` directory

The key of items in this object is the output file name and location. The value can be either a string file path to compile, or an array of files to compile.

### `jsBuild`

Type: array  
Note: Items are relative to the `source` directory

All files listed in this array will be compiled into the primary JS output file.

### `jsFiles`

Type: object  
Note: Keys in this object are relative to the `assets` directory and values to the `source` directory

The key of items in this object is the output file name and location. The value can be either a string file path to compile, or an array of files to compile.

### `sourcemaps`

Type: boolean

Enable or disable sourcemaps.
