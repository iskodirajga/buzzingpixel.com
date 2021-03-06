---
Title: Installing
---

### Node and Grunt

Fabricator uses Node, Grunt, and the Grunt CLI so make sure you have those installed in your environment.

### npm install

Download the [latest release] and copy the relevant files to your project, then `cd` to your project directory from the command line and run:

```
npm install
```

[latest release]: https://github.com/tjdraper/buzzing-pixel-fabricator/releases

### Grunt Tasks

You will run tasks such as watch, compile, create new modules, check for updates, and update via the Grunt command line. Here are the commands you can run:

#### `grunt`

This is the command you will use most often. Running simply `grunt` will compile your project and watch for changes. Whenever you make changes to JS or Less files, the appropriate tasks will run to compile your Less or JS. Additionally, if you have your proxy set to your dev url, Fabricator will open a browser window to that URL and reload or refresh as needed when you make changes.

#### `grunt compile`

If you would just like to compile your project once without keeping a task open watching for changes, run `grunt compile`.

Note that the build process manages the `css`, `fonts,`, `img`, and `js` directories. Those directories will be cleared out every time the grunt process is started and rebuilt. If you want anything in those directories, use the corresponding directory in your `assetsSource` directory.

#### `grunt module:build:myModuleName` and `grunt module:compile:myModuleName`

These commands create new build and compile modules respectively.

#### `grunt check`

Checks for updates and lets you know whether you are up to date or if you need to update.

#### `grunt update`

This self-updates Fabricator from the latest release.

<div class="content-blocks__note">
	<div class="content-blocks__note-title">Note</div>
	<p>This command completely replaces the `coreFAB` directory, `Gruntfile.js` and `package.js`. In a perfect world you will not have edited anything in these files and directory, but you should be aware of it in case you did.</p>
</div>
