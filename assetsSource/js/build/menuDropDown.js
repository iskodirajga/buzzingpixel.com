(function(F) {
	'use strict';

	/**
	 * Menu dropdown controller
	 */
	F.fn.make('menuDropDown', {
		autoInit: true,

		/**
		 * Constructor
		 *
		 * This constructor runs on page load and sets up menu dropdowns
		 */
		init: function() {
			var _this = this;
			var $menuParent = $('.js-menu-parent');

			// Set mouseenter event to open menu items
			$menuParent.on('mouseenter', function() {
				var $el = $(this);
				var name = $el.data('name');

				// Close all open sub menus
				_this.closeSubMenu($menuParent);

				// If a timer has been set to close this menu, cancel it
				if (_this['menuTimer' + name]) {
					clearTimeout(_this['menuTimer' + name]);
				}

				// Open the menu
				_this.openSubMenu($el);
			});

			// Set mouseleave event to close menu items
			$menuParent.on('mouseleave', function() {
				var $el = $(this);
				var name = $el.data('name');

				// Set a timer to close the menu so it does not close abruptly
				// on mouseout
				_this['menuTimer' + name] = setTimeout(function() {
					_this.closeSubMenu($el);
				}, 400);
			});
		},

		/**
		 * Open sub menu
		 *
		 * @param {jQuery} $el Menu item <li> jQuery object
		 */
		openSubMenu: function($el) {
			var $child = $el.find('.js-menu-child');

			// If there is a menu, open it
			if ($child.length > 0) {
				$el.addClass('is-open');
				$child.addClass('is-open');
			}
		},

		/**
		 * Close sub menu
		 *
		 * @param {jQuery} $el Menu item <li> jQuery object
		 */
		closeSubMenu: function($el) {
			var $child = $el.find('.js-menu-child');

			// If there is a menu, close it
			if ($child.length > 0) {
				$el.removeClass('is-open');
				$child.removeClass('is-open');
			}
		}
	});
})(window.FAB);
