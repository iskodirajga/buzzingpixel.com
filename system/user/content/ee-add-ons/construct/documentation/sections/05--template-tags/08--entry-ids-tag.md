---
Title: Entry IDs Single Tag
---

The `{exp:construct:entry_ids}` single tag has one purpose: to retrieve nodes and output the Channel Entry IDs associated with those nodes as a pipe-delimited string. As such, it will not retrieve any nodes that do not have an assigned entry.

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Output
</div>
23|56|456|543
</div>

<div class="content-blocks__note software-docs-blocks__quick-ref">
<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
Parameters Quick Reference
</div>
tree_id="1"<br>
max_depth="2"<br>
parent_id="{construct_route:node_id}"<br>
node_slug="{segment_2}"<br>
node_full_route="{segment_1}/{segment_2}"
</div>
