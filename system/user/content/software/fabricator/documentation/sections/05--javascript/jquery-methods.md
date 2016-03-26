---
Title: jQuery Methods
---

Fabricator includes a few custom jQuery chainable methods:

#### `$('.my-el').jsHide();`

The `jsHide()` method adds the class `js-hide` to the element(s).

#### `$('.my-el').jsShow();`

The `jsShow()` method will remove the class `js-hide` from the element(s).

#### `$('.my-el').swipe({swipe: function(){}})`

Add swipe events to an element on touch enabled devices. More: https://github.com/mattbryson/TouchSwipe-Jquery-Plugin

#### `$('.my-el').hasScrollBar()`

Checks if the content of the element has a scrollbar (overflowing content not visible). Useful for elements with overflow hidden and you need to do things if the content is too long.
