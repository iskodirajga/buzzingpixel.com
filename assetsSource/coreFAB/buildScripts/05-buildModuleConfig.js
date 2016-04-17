/*============================================================================*\
	DO NOT EDIT THIS FILE. THIS IS A CORE FILE.
/*============================================================================*/

module.exports = function(grunt, vars) {
	// Copy build modules lib, font, and image files
	grunt.file.expand(vars.assetsSource + '/modules/build/*').forEach(function(i) {
		var moduleName = i.split('/').pop();

		// Copy lib CSS files
		grunt.file.expand(i + '/css/lib/**/*').forEach(function(file) {
			var fileName = file.replace(i, '');

			if (grunt.file.isFile(file)) {
				grunt.file.copy(
					file,
					vars.assetsPath + '/modules/' + moduleName + fileName
				);
			}
		});

		// Copy image files
		grunt.file.expand(i + '/img/**/*').forEach(function(file) {
			var fileName = file.replace(i, '');

			if (grunt.file.isFile(file)) {
				grunt.file.copy(
					file,
					vars.assetsPath + '/modules/' + moduleName + fileName
				);
			}
		});

		// Copy font files
		grunt.file.expand(i + '/font/**/*').forEach(function(file) {
			var fileName = file.replace(i, '');

			if (grunt.file.isFile(file)) {
				grunt.file.copy(
					file,
					vars.assetsPath + '/modules/' + moduleName + fileName
				);
			}
		});
	});

	// Return the modified variables
	return vars;
};
