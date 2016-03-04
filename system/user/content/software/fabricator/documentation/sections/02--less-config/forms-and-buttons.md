---
Title: Forms and Buttons
---

<pre class="language-less">
<code>
// Inputs

@inputColor: @darkerGray;
@inputFont: @baseFont;
@inputFontSize: @baseFontSize;
@inputFontWeight: @baseFontWeight;

@inputBackground: @white;

@inputBorderColor: @lighterGray;
@inputBorderColorHover: darken(@inputBorderColor, 10%);
@inputBorderColorFocus: darken(@inputBorderColor, 20%);
@inputBorderWidth: 1px; // false to disable
@inputRounded: @defaultRadius; // false to disable

@inputMinWidth: false; // false to disable
@inputMinHeight: false; // false to disable

@inputPaddingHorizontal: 16px;
@inputPaddingVertical: 10px;

@inputMarginBottom: 20px;

@inputPlaceholderColor: lighten(@inputColor, 40%);

// Invalid Inputs

@inputColorInvalid: darken(@inputBorderColorInvalid, 10%);

@inputBackgroundInvalid: @white;

@inputBorderColorInvalid: #a41818;
@inputBorderColorInvalidHover: darken(@inputBorderColorInvalid, 10%);
@inputBorderColorInvalidFocus: darken(@inputBorderColorInvalid, 20%);
@inputBorderWidthInvalid: 1px; // false to disable

// Required Inputs

@inputColorRequired: darken(@inputBorderColorRequired, 10%);

@inputBackgroundRequired: @white;

@inputBorderColorRequired: @darkGray;
@inputBorderColorRequiredHover: darken(@inputBorderColorRequired, 10%);
@inputBorderColorRequiredFocus: darken(@inputBorderColorRequired, 20%);
@inputBorderWidthRequired: 1px; // false to disable

// Disabled Inputs

@inputColorDisabled: @darkGray;

@inputBackgroundDisabled: @lightestGray;

@inputBorderWidthDisabled: false; // false to disable

@inputCursorDisabled: not-allowed;

// Selects

@multiSelectMinHeight: 80px;

// Checkboxes

@checkboxMarginBottom: 10px;
@checkboxMarginRight: 5px;

// Textareas

@textareaLineHeight: 1.3em;
@textareaMinHeight: 80px;
@textareaResize: vertical; // none, horizontal, vertical, both
@textareaPaddingHorizontal: 16px;
@textareaPaddingVertical: 10px;

// Legends

@legendColor: @darkerGray;
@legendFont: @baseFont;
@legendFontSize: 18px;

@legendMarginBottom: 14px;

// Labels

@labelFontWeight: normal;
@labelLineHeight: 1.3em;

@labelMarginBottom: 4px;
@labelMarginRight: 10px;
</code>
</pre>

<pre class="language-less">
<code>
@buttonStyled: true;

@buttonColor: @white;
@buttonFont: @baseFont;
@buttonFontSize: @baseFontSize;
@buttonFontWeight: normal;

@buttonPaddingHorizontal: 30px;
@buttonPaddingVertical: 13px;

@buttonMarginBottom: false;

@buttonRounded: @defaultRadius; // false to disable

@buttonTransitionEnabled: false;

@buttonBackground: @darkGray;
@buttonBackgroundHover: darken(@buttonBackground, 5%);
@buttonBackgroundActive: darken(@buttonBackground, 10%);

@buttonBorderColor: false; // false to disable

// Colored Buttons

@coloredButtonClassModifier: button-colored;

@coloredButtonColor: @white; // font color

@coloredButtonBackground: @linkColor;
@coloredButtonBackgroundHover: darken(@coloredButtonBackground, 5%);
@coloredButtonBackgroundActive: darken(@coloredButtonBackground, 10%);

@coloredButtonBorderColor: false;

// Disabled Buttons

@disabledButtonClassModifier: button-disabled;

@disabledButtonColor: @darkGray;

@disabledButtonBackground: @lightGray;

@disabledButtonBorderColor: false;

@disabledButtonCursor: not-allowed;
</code>
</pre>
