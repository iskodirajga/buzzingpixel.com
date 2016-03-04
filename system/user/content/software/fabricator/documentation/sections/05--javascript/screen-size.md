---
Title: Screen Size
---

Fabricator has 6 screen sizes. 1 corresponds to the smallest size (mobile portrait) and 6 corresponds to the largest size (desktop large).

#### `FAB.screen.size()`

Returns the current screen size as an integer.

#### `FAB.screen.map()`

This is the real power of Fabricator's screen sizing. `FAB.screen.map()` takes an array of objects as an argument. You can pass in as many or as few as you want, and you can call it at any time to map things up.

<pre class="language-javascript">
<code>
FAB.screen.map([
    {
        min: 2,
        max: 4,
        callback: function() {
            // Do stuff here when breakpoint reaches two, or drops
            // back down to 4
        }
    },
    {
        max: 2,
        callback: function() {
            // Do stuff here when breakpoint drops to 2 or below
        }
    },
    {
        size: 3,
        callback: function() {
            // Do stuff here when the breakpoint size is exactly 3
            // This will only run if there's no min and max
        }
    }
]);
</code>
</pre>
