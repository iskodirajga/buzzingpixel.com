(function(F, $html, $win) {
	'use strict';

	// Create a function for running a rule through
	var runRule = function(rule, currentSize, newSize, dir) {
			if (typeof rule.callback !== 'function') {
				return;
			}

			// Run min rules
			if (rule.min && newSize >= rule.min && ! rule.hasRun && dir === 'up' && (! rule.max || newSize <= rule.max)) {
				rule.callback();

				rule.hasRun = true;
			} else if (rule.min && newSize < rule.min) {
				rule.hasRun = false;
			}

			// Run max rules
			if (rule.max && newSize <= rule.max && ! rule.hasRun && dir === 'down' && (! rule.min || newSize >= rule.min)) {
				rule.callback();

				rule.hasRun = true;
			} else if (rule.max && newSize > rule.max) {
				rule.hasRun = false;
			}

			// Run size rule
			if (! rule.min && ! rule.max && rule.size) {
				if (newSize === rule.size) {
					rule.callback();
				}
			}
		},
		allRules = [],
		currentSize,
		dir;

	F.screen = {
		/**
		 * Get the current screen size
		 *
		 * @returns {Number}
		 */
		size: function() {
			return parseFloat(
				$html.css('font-family').replace(/[^0-9\.]+/g, ''),
				10
			);
		},

		/**
		 * Map screen size functions
		 *
		 * @param {Array.<{
		 *     min: int,
		 *     max: int,
		 *     size: int,
		 *     callback: function,
		 *     init: bool
		 * }>} rules
		 */
		map: function(rules) {
			currentSize = F.screen.size();

			// Go through the rules in this set
			rules.forEach(function(rule) {
				// Run the rules as soon as they are set up
				if (rule.init !== false) {
					if ((rule.min && currentSize >= rule.min) && (! rule.max || currentSize <= rule.max)) {
						runRule(rule, 0, currentSize, 'up');
					} else if ((rule.max && currentSize <= rule.max) && (! rule.min || currentSize >= rule.min)) {
						runRule(rule, 6, currentSize, 'down');
					} else if (! rule.max && ! rule.min && rule.size && rule.size === currentSize) {
						runRule(rule, rule.size, rule.size, 'up');
					}
				}

				// Push the rule into the array to run again when rules match
				allRules.push(rule);
			});
		}
	};

	// Run resize event when DOM ready
	$(function() {
		currentSize = F.screen.size();

		// Check the screen size on window resize
		$win.on('resize', function() {
			var newSize = F.screen.size();

			// If the size hasn't changed we don't need to do anything
			if (currentSize === F.screen.size()) {
				return;
			}

			// Get the direction the window is headed
			dir = newSize > currentSize ? 'up' : 'down';

			// Run each of the rules
			allRules.forEach(function(rule) {
				runRule(rule, currentSize, newSize, dir);
			});

			// Set the new window size
			currentSize = newSize;
		});
	});
})(window.FAB, $('html'), $(window));
