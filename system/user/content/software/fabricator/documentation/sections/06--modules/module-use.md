---
Title: Module Use
---

Fabricator modules are a way to group and segregate specific features and functionality JS and CSS together. This allows for more modular development as well as great organization of sections.

The modules directory is located at `assetsSource/modules`. In this directory you will see two places for modules to go because there are two types of modules — though the file structure of both types is almost identical with one minor exception.

#### `build`

Modules placed in the `build` directory will be built into the primary CSS and JS output files. You will see an example module which you can rename to start your first module.

#### `compile`

Modules placed in the `compile` directory will be compiled into their own CSS and JS files. The only difference in structure is that modules in the `compile` directory must contain the module.less file in the CSS directory. That is the file that is compiled into the CSS file. You should never need to edit this file.

## Creating Modules

- It is recommended that you stop your build process first.
- From the command line run one of the following commands
	- Build module: `grunt module:build:myModuleName`
	- Compile module: `grunt module:compile:myModuleName`
