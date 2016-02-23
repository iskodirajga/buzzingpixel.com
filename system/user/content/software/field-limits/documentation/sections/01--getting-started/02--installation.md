---
Title: Installing or Updating
---

Installing and updating Field Limits is very easy.

### ExpressionEngine 2

1. Download the latest release tagged for ExpressionEngine 2 from the [GitHub Releases] page.
	- Note that releases for EE 2 will be tagged with the suffix `-ee2`. If the release does not have this suffix, it is for EE 3.
2. Unarchive the file and copy `system/expressionengine/third_party/field_limits` to your third_party addons system directory
	- If you are updating, replace the existing `field_limits` directory
3. Log in to your ExpressionEngine control panel and navigate to Add-Ons > Field Types
4. If you are installing field_limits, locate the Field Limits" field types in the list and click install.

That's it. Field Limits for ExpressionEngine 2 is now ready to go.

### ExpressionEngine 3

1. Download the latest release tagged for ExpressionEngine 3 from the [GitHub Releases] page.
	- Note that releases for EE 3 will **not** be tagged with the suffix `-ee2`. If the release **does** have this suffix, it is for EE 2.
2. Copy `system/user/addons/field_limits` to the same directory location in your EE instance
	- If you are updating, replace the existing `field_limits` directory
3. Now log in to your ExpressionEngine control panel and navigate to the Add-on Manager
4. In the Third Party Add-Ons section, locate “Field Limits” in the list and click Install or Update

That's it. Field Limits for ExpressionEngine 3 is now ready to go.

[GitHub Releases]: https://github.com/tjdraper/ee-field-limits/releases
