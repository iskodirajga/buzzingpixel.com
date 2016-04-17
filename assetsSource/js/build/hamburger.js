(function(F) {
	'use strict';

	/**
	 * Hamburger controller
	 */
	F.fn.make('hamburger', {
		autoInit: true,

		/**
		 * Constructor
		 *
		 * This constructor runs on page load and sets up the mobile hamburger
		 */
		init: function() {
			var _this = this;
			var $hamburger = $('.js-hamburger');
			var $siteWrapperInner = $('.js-site-wrap-inner');

			// When the hamburger is clicked
			$hamburger.on('click', function() {
				// If it has the open class, close it
				if ($hamburger.hasClass('open')) {
					_this.closeMenu($hamburger, $siteWrapperInner);

					return;
				}

				// Open the menu
				_this.openMenu($hamburger, $siteWrapperInner);
			});

			// Let's set up some things to happen at our breakpoints
			F.screen.map([
				{
					// We need to close the menu if we reach breakpoint 3
					min: 4,

					// No need to do it on page load
					init: false,

					// Run this callback when breakpoint is reached
					callback: function() {
						_this.closeMenu($hamburger, $siteWrapperInner);
					}
				}
			]);
		},

		/**
		 * Open the mobile menu
		 *
		 * @param {jQuery} $hamburger
		 * @param {jQuery} $siteWrapperInner
		 */
		openMenu: function($hamburger, $siteWrapperInner) {
			$hamburger.addClass('open');
			$siteWrapperInner.addClass('open');
		},

		/**
		 * Close the mobile menu
		 *
		 * @param {jQuery} $hamburger
		 * @param {jQuery} $siteWrapperInner
		 */
		closeMenu: function($hamburger, $siteWrapperInner) {
			$hamburger.removeClass('open');
			$siteWrapperInner.removeClass('open');
		}
	});
})(window.FAB);
