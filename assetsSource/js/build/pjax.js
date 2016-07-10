(function(F, W) {
	'use strict';

	// Html and Body
	var $htmlBody = $('html, body');

	// Body
	var $body = $('body');

	// Page title
	var $htmlTitle = $('title');

	// Page main
	var $siteWrapper = $('.site-wrapper');

	// Create PJAX loader el
	var $pjaxLoader = $('<div class="pjax-loader js-hide"></div>');

	// Insert PJAX loader
	$body.after($pjaxLoader);

	/**
	 * PJAX controller
	 */
	F.fn.make('pjax', {
		autoInit: true,

		init: function() {
			// Save a reference to the view
			var self = this;

			// In the future we might want to call a runOnPageLoad function here

			// Create a global state for uriPath
			F.set('uriPath', W.location.pathname + W.location.search);

			// Set global state for page rendered
			F.set('pageRendered', 1);

			// Watch for changes to uriPath and request the page when changed
			F.on('change:uriPath', function() {
				self.requestPage(F.get('uriPath'));
			});

			// Watch the popstate
			window.addEventListener('popstate', function() {
				F.set('uriPath', W.location.pathname + W.location.search);
			});

			$body.on('click', 'a:not([href^="http"]):not(".js-pjax"):not([href^="#"])', function(e) {
				self.linkClick(e);
			});

			// Watch for clicks on js-pjax
			$body.on('click', '.js-pjax', function(e) {
				self.linkClick(e);
			});

			// Watch for post render
			F.on('change:pageRendered', function() {
				self.postRender();
			});
		},

		/**
		 * Link click
		 *
		 * @param {Object} e
		 */
		linkClick: function(e) {
			// Save a reference to the view
			var self = this;

			// Get the element data
			var $el = $(e.currentTarget);

			// Get the href
			var href = $el.attr('href');

			// Check if we have an href, set from data if not
			if (! href) {
				href = $el.data('pjaxUrl');
			}

			// Check if we have a URL
			if (! href) {
				return;
			}

			// If we got here, prevent the default
			e.preventDefault();

			// Update the global state
			self.historyPush(href);
		},

		/**
		 * Push history state
		 *
		 * @param {String} uri
		 */
		historyPush: function(uri) {
			// Update the global state
			F.set('uriPath', uri);

			// Update the history state
			if (window.location.pathname + window.location.search !== uri) {
				history.pushState(null, null, uri);
			}
		},

		/**
		 * Request page
		 *
		 * @param {String} href
		 */
		requestPage: function(href) {
			// Save a reference to the view
			var self = this;

			// Insert PJAX loader
			$pjaxLoader.jsShow().css('opacity', '1');

			// Initial PJAX loader animation
			$pjaxLoader.animate({
				width: '20%'
			}, 200);

			// Run request
			$.ajax({
				url: href,
				headers: {
					'X-PJAX': 'true'
				},
				success: function(html) {
					// Render the page
					self.render(html);
				},
				error: function(xhr) {
					if (xhr.status === 404) {
						// Render the page
						self.render(xhr.responseText);
					}
				}
			});
		},

		/**
		 * Render
		 *
		 * @param {String} html
		 */
		render: function(html) {
			// Cast the html
			var $html = $('<div>' + html + '</div>');

			// Replace the page title
			$htmlTitle.html($html.find('title').html());

			// Scroll to the top of the page
			$htmlBody.animate({
				scrollTop: 0
			}, 400);

			// Fade out the old content
			$siteWrapper.fadeOut(200, function() {
				// Place the new content on the DOM
				$siteWrapper.html($html.find('.site-wrapper'));

				// Animate the PJAX loader all the way across
				$pjaxLoader.animate({
					width: '100%'

				// When the animation is finished
				}, 200, function() {
					// Fade out the PJAX loader
					$pjaxLoader.animate({
						opacity: '0'

					// When the animation is finished
					}, 400, function() {
						// Remove the PJAX loader
						$pjaxLoader.jsHide().css('width', '0%');
					});
				});

				// Fade in the new content
				$siteWrapper.fadeIn(200, function() {
					// Increment rendered state to trigger subscribed changes
					F.set('pageRendered', F.get('pageRendered') + 1);
				});
			});
		},

		/**
		 * Post render
		 */
		postRender: function() {
			if (typeof ga !== 'undefined') { // jshint ignore:line
				ga('send', 'pageview', location.pathname); // jshint ignore:line
			}

			F.accordion.init();
			F.codeHighlighting.init();
			F.comingSoon.init();
			F.contact.init();
			F.hamburger.init();
			F.heroParallax.init();
			F.menuDropDown.init();
			F.navFade.init();
		}
	});
})(window.FAB, window);
