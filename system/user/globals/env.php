<?php

switch ($_SERVER['SERVER_NAME']) {
	case 'buzzingpixel.com':
		$env = 'prod';
		break;
	case 'stage.buzzingpixel.com':
		$env = 'stage';
		break;
	default:
		$env = 'local';
}

return compact('env');
