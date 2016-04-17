/* globals Prism */

(function(F) {
	'use strict';

	/**
	 * Code highlighting
	 */
	F.fn.make('codeHighlighting', {
		autoInit: true,

		/**
		 * Initialize code highlighting
		 */
		init: function() {
			if (! $('pre').length) {
				return;
			}

			F.assets.load({
				css: [
					'assets/css/lib/prism/prism.min.css',
					'assets/css/lib/prism/lang.customee.min.css'
				],
				js: [
					'assets/js/lib/prism/prism.min.js',
					'assets/js/lib/prism/lang.ee.min.js'
				],
				success: function() {
					Prism.highlightAll();
				}
			});
		}
	});
})(window.FAB);
