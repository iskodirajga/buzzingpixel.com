/*============================================================================*\
	DO NOT EDIT THIS FILE. THIS IS A CORE FILE.
/*============================================================================*/

module.exports = function(grunt, vars) {
	// Delete compile cache
	if (grunt.file.exists(vars.assetsSource + '/coreFAB/compileCache/js/')) {
		grunt.file.delete(vars.assetsSource + '/coreFAB/compileCache/js/');
	}

	// Delete module files
	if (grunt.file.exists(vars.assetsPath + '/modules/')) {
		grunt.file.delete(vars.assetsPath + '/modules/');
	}

	// Delete JS files
	if (grunt.file.exists(vars.assetsPath + '/js/')) {
		grunt.file.delete(vars.assetsPath + '/js/');
	}

	// Delete font files
	if (grunt.file.exists(vars.assetsPath + '/fonts/')) {
		grunt.file.delete(vars.assetsPath + '/fonts/');
	}

	// Delete CSS files
	if (grunt.file.exists(vars.assetsPath + '/css/')) {
		grunt.file.delete(vars.assetsPath + '/css/');
	}

	// Delete images
	if (grunt.file.exists(vars.assetsPath + '/img/')) {
		grunt.file.delete(vars.assetsPath + '/img/');
	}

	// Return the variables
	return vars;
};