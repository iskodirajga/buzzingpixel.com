(function(F) {
	'use strict';

	/**
	 * Hero paralax controller
	 */
	F.fn.make('contact', {
		/**
		 * Constructor
		 *
		 * This constructor runs on page load and sets up hero paralax
		 */
		_construct: function() {
			var $contactForm = $('.js-contact-form');

			// If there is a contact form on the page, initialize
			if ($contactForm.length) {
				this.init($contactForm);
			}
		},

		/**
		 * Initialize contact form
		 *
		 * @param {jQuery} $contactForm
		 */
		init: function($contactForm) {
			var _this = this;

			// Hijack form submission
			$contactForm.on('submit', function(e) {
				var $form = $(this);
				var $submitBtn = $form.find('.js-submit');
				var formValidation = _this.inputValidation($(':input'));

				// Don't let the form submit
				e.preventDefault();

				// Disable the submit button and set working state text
				$submitBtn.attr('disabled', true)
					.val($submitBtn.data('working'));

				// Remove any previous input errors
				$('.input-error').removeClass('input-error');

				// Check if the form validated or not
				if (formValidation.validated) {
					// Submit the form
					_this.submitForm($form, $submitBtn);
				} else {
					// Show the errors
					_this.formNotValidated(formValidation, $submitBtn);
				}
			});
		},

		/**
		 * Validate inputs
		 *
		 * @param {jQuery} $inputSel
		 * @return {object}
		 */
		inputValidation: function($inputSel) {
			var _this = this;
			var obj = {
				validated: true,
				inputs: {}
			};

			// Loop through each of the inputs
			$inputSel.each(function() {
				var $el = $(this);
				var name = $el.prop('name');

				// Make sure the input has a name
				if (name) {
					obj.inputs[name] = {};
					obj.inputs[name].$el = $el;
					obj.inputs[name].errors = [];

					// If the input is required, check if there is a value
					if ($el.prop('required')) {
						if (! $el.val()) {
							obj.validated = false;

							obj.inputs[name].errors.push('This field is required');
						}
					}

					// If the input type is email, check if it is a valid email
					if ($el.prop('type') === 'email') {
						if (! _this.validateEmail($el.val())) {
							obj.validated = false;

							obj.inputs[name].errors.push('A valid email address is required');
						}
					}
				}
			});

			return obj;
		},

		/**
		 * Validate email address
		 *
		 * @param {string} email Email address
		 * @return {boolean}
		 */
		validateEmail: function(email) {
			var regex = /\S+@\S+\.\S+/;
			return regex.test(email);
		},

		/**
		 * Form not validated
		 *
		 * @param {object} validation
		 * @param {jQuery} $form
		 */
		formNotValidated: function(validation, $submitBtn) {
			// Go through the validation object
			for (var item in validation.inputs) {
				// If there are errors, add the error class
				if (validation.inputs[item].errors.length) {
					validation.inputs[item].$el.addClass('input-error');
				}
			}

			// Re-enable the submit button
			$submitBtn.attr('disabled', false).val($submitBtn.data('val'));
		},

		/**
		 * Submit form
		 *
		 * @param {jQuery} $form
		 * @param {jQuery} $submitBtn
		 */
		submitForm: function($form, $submitBtn) {
			$.ajax({
				url: window.location.href,
				type: 'post',
				data: $form.serialize(),
				dataType: 'json',
				success: function() {
					$form.find(':input').val('');
					$submitBtn.val('Done');
					$('.js-contact-note').removeClass('js-hide');
				}
			});
		}
	});
})(window.FAB);
