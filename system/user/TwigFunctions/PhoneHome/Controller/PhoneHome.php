<?php

/**
 * Frame Phone Home controller
 *
 * @package frame
 * @author TJ Draper <tj@buzzingpixel.com>
 * @link https://buzzingpixel.com/frame-cms
 * @copyright Copyright (c) 2015, BuzzingPixel
 */

namespace Frame\TwigFunctions\PhoneHome\Controller;

class PhoneHome
{
	/**
	 * PhoneHome controller
	 */
	public function run()
	{
		header('Content-type: application/json');

		$dataPath = realpath(dirname(__FILE__)) . '/../Data/';

		// Make sure required params are in place
		if (
			! isset($_POST['app']) or
			! $_POST['app'] or
			! isset($_POST['domain']) or
			! $_POST['domain']
		) {
			exit('{"success": false, "message": "invalid request"}');
		}

		$licenseExists = isset($_POST['license']) && $_POST['license'];
		$license = $licenseExists ? $_POST['license'] : 'no-license';
		$appPath = $dataPath . $_POST['app'];
		$licensePath = $appPath . '/' . $license;
		$file = $licensePath . '/' . $_POST['domain'] . '.md';

		if (! is_dir($appPath)) {
			mkdir($appPath);
		}

		if (! is_dir($licensePath)) {
			mkdir($licensePath);
		}

		if ($licenseExists && is_dir($appPath . '/no-license')) {
			$files = array_diff(scandir($appPath . '/no-license'), array('.', '..'));

			foreach ($files as $file) {
				unlink($appPath . '/no-license/' . $file);
			}

			rmdir($appPath . '/no-license');
		}

		file_put_contents(
			$file,
			"---\nApp: {$_POST['app']}\nDomain: {$_POST['domain']}\nLicense: {$license}\n---\n"
		);

		exit('{"success": true}');
	}
}
