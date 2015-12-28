/* globals Prism */

(function(F) {
	'use strict';

	/**
	 * Code highlighting
	 */
	F.fn.make('codeHighlighting', {
		/**
		 * Constructor
		 *
		 * This constructor runs on page load and sets up code highlighting
		 */
		_construct: function() {
			if ($('pre').length > 0) {
				this.init();
			}
		},

		/**
		 * Initialize code highlighting
		 */
		init: function() {
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
