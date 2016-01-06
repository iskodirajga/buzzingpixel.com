---
Title: System Requirements
---

- ExpressionEngine 2.9.0 or greater
	- While there is no known reason why Construct could not work as far back as 2.6.0 (when ExpressionEngine introduced the `ee()` super global), it has not been tested with versions prior to 2.9.0.
- A modern browser
	- Chrome (tested with 41.0.2272.118)
	- Firefox (tested with 36.0.4)
	- Safari (Mac) (tested with 8.0.4)
	- Opera (tested with 27.0.1689.76)
	- Internet Explorer 10 or greater
		- There is a known issue in all versions of Internet Explorer where the node being dragged does not stay with the cursor. It does not affect functionality
		- Construct does work in IE 9, but not very well. The dragging is very sluggish and unresponsive.
		- Construct definitely doesn’t work well at all in IE 8.
- PHP 5.3.10 or greater
	- Construct should support the same versions of PHP that ExpressionEngine supports (currently 5.3.10), though it is very difficult to test every version of PHP. Construct was developed with PHP version 5.3.29 in MAMP and also tested with PHP versions 5.4.34, 5.5.18, and 5.6.2.
