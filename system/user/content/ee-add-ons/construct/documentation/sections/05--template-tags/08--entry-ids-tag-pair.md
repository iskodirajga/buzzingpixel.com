---
Title: Entry IDs Tag Pair (deprecated)
---

**The `{exp:construct:entry_ids_pair}` tag pair has been deprecated and will be removed in the next major version of Construct as it is no longer necesary.** In fact, while the tag is still here to be compatible with older site builds using Construct and wishing to upgrade to Construct 2, it litterally calls into the methods of the primary Nodes tag.

Instead of using this tag pair, you should use the `{exp:construct:nodes}` tag with the parameter `node_entry_id_not_empty="true"` and any other parameters you need to get the required Nodes. `{construct:node_entry_id}` will be available to you in that tag pair.
