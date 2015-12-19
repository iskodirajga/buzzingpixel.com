(function(F) {
	'use strict';

	/**
	 * Hero paralax controller
	 */
	F.fn.make('heroParallax', {
		/**
		 * Constructor
		 *
		 * This constructor runs on page load and sets up hero paralax
		 */
		_construct: function() {
			var divider = 2.5;
			var $win = $(window);
			var initialOffset = $win.scrollTop() / divider;
			var $hero = $('.js-hero');

			$hero.css('background-position', '50% ' + initialOffset + 'px');

			$win.on('scroll', function() {
				var offset = $win.scrollTop() / divider;

				$hero.css('background-position', '50% ' + offset + 'px');
			});
		}
	});
})(window.FAB);
