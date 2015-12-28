<?php

/**
 * Frame MandrillMailer Mailer controller
 *
 * @package frame
 * @author TJ Draper <tj@buzzingpixel.com>
 * @link https://buzzingpixel.com/frame-cms
 * @copyright Copyright (c) 2015, BuzzingPixel
 */

namespace Frame\TwigFunctions\MandrillMailer\Controller;

use Frame\Model;

class Mailer
{
	private $identifier = '';
	private $allowed = [];
	private $required = [];
	private $to = [];
	private $from = false;
	private $fromName = false;
	private $subject = false;
	private $message = false;
	private $return = false;
	private $json = false;
	private $privMessage = false;

	protected $missingFields = [];

	/**
	 * Mailer constructor
	 *
	 * @param  array $conf {
	 *     @var string $identifier
	 *     @var string $allowed
	 *     @var string $required
	 *     @var string|array $to
	 *     @var string $from
	 *     @var string $subject
	 *     @var string $message
	 *     @var string $return
	 *     @var bool $json
	 *     @var bool $privMessage
	 * }
	 */
	public function __construct($conf = [])
	{
		if (isset($conf['identifier'])) {
			$this->identifier = (string) $conf['identifier'];
		}

		if (isset($conf['allowed'])) {
			$this->allowed = (array) $conf['allowed'];
		}

		if (isset($conf['required'])) {
			$this->required = (array) $conf['required'];

			$this->allowed = array_unique(array_merge(
				$this->allowed,
				$this->required
			));
		}

		if (isset($conf['to'])) {
			$this->to = (array) $conf['to'];
		}

		if (isset($conf['from'])) {
			$this->from = (string) $conf['from'];
		}

		if (isset($conf['subject'])) {
			$this->subject = (string) $conf['subject'];
		}

		if (isset($conf['message'])) {
			$this->message = (string) $conf['message'];
		}

		if (isset($conf['return'])) {
			$this->return = (string) $conf['return'];
		}

		if (isset($conf['json'])) {
			$this->json = (bool) $conf['json'];
		}

		if (isset($conf['privMessage'])) {
			$this->privMessage = (bool) $conf['privMessage'];
		}
	}

	/**
	 * Mailer controller
	 *
	 * @param mixed $conf
	 * @return array
	 */
	public function run($conf = [])
	{
		if (! isset($_POST[$this->identifier])) {
			return [
				'post' => false,
				'success' => false,
				'missingFields' => false
			];
		}

		$post = $_POST[$this->identifier];

		$this->checkRequirements($post);

		if ($this->missingFields) {
			return [
				'post' => true,
				'success' => false,
				'missingFields' => $this->missingFields
			];
		}

		// Get the user directory
		global $userDir;

		// Get Mandrill API Key
		$config = new Model\Config();
		$mandrillMailerConfig = $config->get('mandrillMailer');

		// Set up Mandrill
		require_once "{$userDir}/TwigFunctions/MandrillMailer/Vendor/Mandrill.php";
		$mandrill = new \Mandrill($mandrillMailerConfig['key']);

		// Start the message
		$message = array(
			'important' => false,
			'track_opens' => false,
			'track_clicks' => false,
		);

		// Set the reply-to to the from email
		if ($this->from) {
			$message['headers']['Reply-To'] = $this->from;
		} else {
			$message['headers']['Reply-To'] = $post['from'];
		}

		// Set the "from" name if it exists
		if ($this->fromName) {
			$message['from_name'] = $this->fromName;
		} elseif (isset($post['fromName'])) {
			$message['from_name'] = $post['fromName'];
		}

		// Set the "to" email
		if ($this->to) {
			foreach ($this->to as $key => $email) {
				$message['to'][$key]['type'] = 'to';
				$message['to'][$key]['email'] = $email;
			}
		} elseif (isset($post['to'])) {
			$message['to'][0]['email'] = $post['to'];

			// Set the "to" name if it exists
			if (isset($post['toName'])) {
				$message['to'][0]['name'] = $post['toName'];
			}
		}

		// Set the subject
		if (! empty($this->subject)) {
			$message['subject'] = $this->subject;
		} elseif (isset($post['subject'])) {
			$message['subject'] = addslashes($post['subject']);
		}

		// Set the from email to the config email for best deliverability
		$message['from_email'] = $mandrillMailerConfig['fromEmail'];

		// Disable logging if private message has been set
		if ($this->privMessage) {
			$message['view_content_link'] = false;
		}

		/**
		 * Content
		 */

		$htmlContent = '';
		$textContent = '';

		foreach ($this->allowed as $key) {
			if (! isset($post[$key])) {
				continue;
			}

			$humanKey = preg_replace(array('/(?<=[^A-Z])([A-Z])/', '/(?<=[^0-9])([0-9])/'), ' $0', $key);
			$humanKey = ucwords($humanKey);

			$value = $post[$key] . '
';

			$htmlContent .= '<strong>' . $humanKey . '</strong>: ';
			$htmlContent .= nl2br(htmlentities($value, ENT_QUOTES));

			$textContent .= $humanKey . ': ';
			$textContent .= addslashes($value);

			// Set the content to the $message array
			$message['html'] = $htmlContent;
			$message['text'] = $textContent;
		}

		// Send the message
		try {
			$mandrill->messages->send($message, true);

			$mandrillSuccess = true;
		} catch(Mandrill_Error $e) {
			$mandrillSuccess = false;
		}

		if ($this->json) {
			$output = array(
				'success' => $mandrillSuccess
			);

			// Clear the output buffer of any previous content
			ob_clean();

			exit(json_encode($output));
		} elseif ($this->return) {
			header("Location: {$this->return}");
		} else {
			return [
				'post' => true,
				'success' => $mandrillSuccess,
				'missingFields' => false
			];
		}
	}

	/**
	 * Check for requirements
	 *
	 * @param array $post
	 */
	private function checkRequirements($post)
	{
		/**
		 * Make sure we have from and to email addresses and a subject
		 */

		if ($this->to === false) {
			if (! in_array('to', $this->required)) {
				$this->required[] = 'to';
			}

			if (! in_array('to', $this->allowed)) {
				$this->allowed[] = 'to';
			}
		}

		if ($this->from === false) {
			if (! in_array('from', $this->required)) {
				$this->required[] = 'from';
			}

			if (! in_array('from', $this->allowed)) {
				$this->allowed[] = 'from';
			}
		}

		if ($this->subject === false) {
			if (! in_array('subject', $this->required)) {
				$this->required[] = 'subject';
			}

			if (! in_array('subject', $this->allowed)) {
				$this->allowed = 'subject';
			}
		}

		/**
		 * Make sure required inputs are present
		 */
		foreach ($this->required as $req) {
			if (! isset($post[$req])) {
				$this->missingFields = $req;
			}
		}
	}
}
