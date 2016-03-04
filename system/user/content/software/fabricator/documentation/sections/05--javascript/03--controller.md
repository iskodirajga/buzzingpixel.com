---
Title: controller.js
---

The controller calles Fabricator function sets for specific pages. Think of it as a routing file of sorts.

The controller works in conjunction with setting Fabricator variables from the DOM. So you could set the page type like so:

<pre class="language-javascript">
<code>
&lt;div data-set="pageType" data-value="myPageType">
</code>
</pre>

Then in your controller specify the Fabricator function sets you would like to run.

<pre class="language-javascript">
<code>
(function(F) {
    'use strict';

    F.controller = {
        myPageType: [
            'myFabFunctionSet',
            'anotherFabFunctionSet'
        ]
    };
})(window.FAB);
</code>
</pre>

This will call the init function of your specified function set when the pageType var is `myPageType`.
