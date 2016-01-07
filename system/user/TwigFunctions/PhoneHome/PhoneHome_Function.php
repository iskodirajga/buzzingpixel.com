<?php

/**
 * Phone Home twig function
 *
 * @package frame
 * @author TJ Draper <tj@buzzingpixel.com>
 * @link https://buzzingpixel.com/frame-cms
 * @copyright Copyright (c) 2015, BuzzingPixel
 */

namespace Frame\TwigFunctions\PhoneHome;

class PhoneHome_Function
{
	/**
	 * PhoneHome
	 *
	 * @param mixed $conf
	 */
	public static function index()
	{
		$phoneHomeController = new Controller\PhoneHome();
		$phoneHomeController->run();
	}
}
