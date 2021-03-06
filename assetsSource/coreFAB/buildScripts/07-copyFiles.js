/*============================================================================*\
	DO NOT EDIT THIS FILE. THIS IS A CORE FILE.
/*============================================================================*/

module.exports = function(grunt, vars) {
	/**
	 * Copy JS lib
	 */

	// Loop through any files in the JS Lib directory
	grunt.file.expand(vars.assetsSource + '/js/lib/**/*').forEach(function(i) {
		// Turn the file string into an array
		var file = i.split('/');
		// Start a new file var
		var newFile = vars.assetsPath + '/';

		// Make sure this is a file (not a directory)
		if (grunt.file.isFile(i)) {
			// Remove the first item from the file array
			file.shift();

			// Set the new file path
			newFile += file.join('/');

			// Copy the file into place
			grunt.file.copy(i, newFile);
		}
	});

	/**
	 * Copy CSS lib
	 */

	grunt.file.expand(vars.assetsSource + '/css/lib/**/*').forEach(function(i) {
		var file = i.split('/');
		var newFile = vars.assetsPath + '/';

		if (grunt.file.isFile(i)) {
			file.shift();
			newFile += file.join('/');

			// Copy the file into place
			grunt.file.copy(i, newFile);
		}
	});

	/**
	 * Copy images
	 */

	grunt.file.expand(vars.assetsSource + '/img/**/*').forEach(function(i) {
		var file = i.split('/');
		var newFile = vars.assetsPath + '/';

		if (grunt.file.isFile(i)) {
			file.shift();
			newFile += file.join('/');

			// Copy the file into place
			grunt.file.copy(i, newFile);
		}
	});

	/**
	 * Copy fonts
	 */

	grunt.file.expand(vars.assetsSource + '/fonts/**/*').forEach(function(i) {
		var file = i.split('/');
		var newFile = vars.assetsPath + '/';

		if (grunt.file.isFile(i)) {
			file.shift();
			newFile += file.join('/');

			// Copy the file into place
			grunt.file.copy(i, newFile);
		}
	});

	// Return the modified variables
	return vars;
};
