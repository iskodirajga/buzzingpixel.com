(function(F) {
	'use strict';

	/**
	 * Hero paralax controller
	 */
	F.fn.make('comingSoon', {
		/**
		 * Constructor
		 *
		 * This constructor runs on page load and sets up hero paralax
		 */
		_construct: function() {
			var $btn = $('.js-coming-soon-btn');

			if ($btn.length) {
				this.init($btn);
			}
		},

		/**
		 * Initialize coming soon buttons
		 *
		 * @param {jQuery} $btn
		 */
		init: function($btn) {
			var _this = this;

			$btn.on('click', function(e) {
				var $el = $(this);
				var $comingSoonInner = $el.find('.js-coming-soon-inner');

				e.preventDefault();

				if ($comingSoonInner.hasClass('is-active')) {
					_this.close();
				} else {
					_this.open($comingSoonInner);
				}
			});
		},

		/**
		 * Open coming soon notice
		 *
		 * @param {jQuery} $comingSoonInner
		 */
		open: function($comingSoonInner) {
			var _this = this;

			_this.close();

			$comingSoonInner.addClass('is-active');

			setTimeout(function() {
				$('body').on('click', function() {
					_this.close();
				});
			}, 200);
		},

		/**
		 * Close coming soon notice
		 */
		close: function() {
			$('.js-coming-soon-inner').removeClass('is-active');

			$('body').off('click');
		}
	});
})(window.FAB);
