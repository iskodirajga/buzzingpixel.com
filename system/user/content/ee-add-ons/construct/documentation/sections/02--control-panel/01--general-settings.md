---
Title: General Settings
FloatingImage: /assets/img/documentation/construct/construct-settings-empty.png
FloatingImageSide: right
---

### Member Groups that can access these settings

As the setting name indicates, this setting dictates what member groups can access the settings. Under normal circumstances the best practice is probably to leave this blank. Super Admins can always access the settings.

### Member Groups that can add Trees

This setting may be more applicable to your situation — though probably not. But if you do wish to allow other member groups to add trees, you may add them here.

<div class="content-blocks__note">
<div class="content-blocks__note-title">Note</div>
<p>
With both of these settings, there are checks in place to make sure that non-Super Admin members cannot remove their own member group from the preferences.
</p>
</div>

### Enable Routing

By default, when you install Construct, Routing will be enabled. What does this mean? It means when you have a node with the slug of `my-page`, and that node has a template assigned to it, when `mysite.com/my-page` is loaded, Construct will route that URI to that Node’s template. So, “Enable Routing” simply means that Construct will behave in a similar manner to the native pages module and route any applicable URIs. You probably want to leave this enabled.

But, in case you only want to use Construct for making and managing menus, you can turn off routing and save a query when loading templates (and it really only is one query to check if a route exists).
