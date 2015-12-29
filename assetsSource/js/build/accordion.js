(function(F) {
	'use strict';

	/**
	 * Accordion controller
	 */
	F.fn.make('accordion', {
		/**
		 * Constructor
		 *
		 * This constructor runs on page load and sets up accordions
		 */
		_construct: function() {
			var _this = this;

			F.screen.map([
				{
					max: 3,
					callback: function() {
						_this.bind();
					}
				},
				{
					min: 4,
					init: false,
					callback: function() {
						_this.desktopClose();
					}
				}
			]);
		},

		/**
		 * Bind
		 */
		bind: function() {
			var _this = this;

			$('.js-accordion-heading').on('click', function() {
				var $el = $(this);

				if ($el.hasClass('open')) {
					_this.close($el);
				} else {
					_this.open($el);
				}
			});
		},

		/**
		 * Open accordion
		 *
		 * @param {jQuery} $el
		 */
		open: function($el) {
			$el.addClass('open');

			$el.siblings('.js-accordion-content').addClass('open');
		},

		/**
		 * Close accordion
		 *
		 * @param {jQuery} $el
		 */
		close: function($el) {
			$el.removeClass('open');

			$el.siblings('.js-accordion-content').removeClass('open');
		},

		/**
		 * Desktop close
		 */
		desktopClose: function() {
			var _this = this;

			$('.js-accordion-heading').each(function() {
				var $el = $(this);

				_this.close($el);

				$el.off('click');
			});
		}
	});
})(window.FAB);
