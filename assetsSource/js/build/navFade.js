(function(F) {
	'use strict';

	/**
	 * Code highlighting
	 */
	F.fn.make('navFade', {
		autoInit: true,

		/**
		 * Constructor
		 *
		 * This constructor runs on page load and sets up nav fading
		 */
		init: function() {
			var _this = this;
			var $siteHeader = $('.js-site-header');
			var $headerNav = $('.js-header-nav');

			_this.faderTimeout = setTimeout(function() {
				$headerNav.addClass('site-header__navigation--faded');
			}, 1000);

			$siteHeader.on('mousemove', function() {
				clearTimeout(_this.faderTimeout);

				$headerNav.removeClass('site-header__navigation--faded');
			});

			$siteHeader.on('mouseleave', function() {
				_this.faderTimeout = setTimeout(function() {
					$headerNav.addClass('site-header__navigation--faded');
				}, 1000);
			});
		}
	});
})(window.FAB);
