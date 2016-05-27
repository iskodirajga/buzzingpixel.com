<?php

namespace Frame\TwigFunctions\Redirect;

class Redirect_Function
{
	/**
	 * PhoneHome
	 *
	 * @param mixed $conf
	 */
	public static function index($url, $statusCode = 301)
	{
		ob_clean();
		header("Location: {$url}", true, $statusCode);
		exit();
	}
}
