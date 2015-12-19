(function(F) {
	'use strict';

	F.fn.make('heroParallax', {
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
