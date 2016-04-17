(function(F) {
	'use strict';

	/**
	 * Coming soon controller
	 */
	F.fn.make('comingSoon', {
		autoInit: true,

		/**
		 * Initialize coming soon buttons
		 *
		 * @param {jQuery} $btn
		 */
		init: function() {
			var _this = this;
			var $btn = $('.js-coming-soon-btn');

			if (! $btn.length) {
				return;
			}

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
