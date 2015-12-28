<?php

/**
 * Frame MandrillMailer twig function
 *
 * @package frame
 * @author TJ Draper <tj@buzzingpixel.com>
 * @link https://buzzingpixel.com/frame-cms
 * @copyright Copyright (c) 2015, BuzzingPixel
 */

namespace Frame\TwigFunctions\MandrillMailer;

class MandrillMailer_Function
{
	/**
	 * MandrillMailer
	 *
	 * @param mixed $conf
	 */
	public static function index($conf = [])
	{
		$mailerController = new Controller\Mailer($conf);

		return $mailerController->run();
	}
}
