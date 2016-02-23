---
Title: Configuration
---

### Webmaster Email

Mandrill Mailer uses the ExpressionEngine webmaster email as the trusted sending address. The reply-to header will be set as you specify, but the actual from address should be a trusted address. You should also make sure to have this set up as a sending address in your Mandrill account.

### API Key

Mandrill Mailer also requires the API key to be set up in your ExpressionEngine config file like so:

```
$config['mandrill_key'] = 'XXXXXXXXXXXX';
```

<div class="content-blocks__note software-docs-blocks__quick-ref">
	<div class="content-blocks__note-title software-docs-blocks__quick-ref-title">
		Note
	</div>
	If your standard ExpressionEngine email settings are in the config file and you’ve already set up ExpressionEngine to use Mandrill you might want to do something like this so you don’t have to enter your Mandrill API key in more than one place:
</div>

```
$config['mandrill_key'] = $config['smtp_password'];
```
