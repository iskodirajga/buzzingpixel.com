---
Title: Requirements
---

Fabricator requires jQuery 2 to be present before it instantiates itself. Here is a simple method to make sure jQuery is available to Fabricator. This will serve jQuery from the Google CDN (most popular and so most browsers will already have it cached) if it is available. If for whatever reason it is not available, it will serve jQuery from `/assets/js/lib/jQuery-2.1.4.min.js`.

<pre class="language-javascript">
<code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">&lt;/script>
&lt;script>
    window.jQuery || document.write(
        '&lt;script src="/assets/js/lib/jQuery-2.1.4.min.js">\x3C/script>'
    )
&lt;/script>
&lt;script src="/assets/js/script.min.js"></script>
</code>
</pre>
