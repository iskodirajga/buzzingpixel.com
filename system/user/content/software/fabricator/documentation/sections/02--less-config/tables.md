---
Title: Tables
---

<pre class="language-less">
<code>
@tableStyled: true;   // apply base styling by default
@tableBordered: true; // apply outer border by default
@tableStriped: true;  // apply striping by default

@tableFontSize: @baseFontSize;

@tableBorderedClassModifier: table-bordered;
@tableStripedClassModifier: table-striped;

// Table Cells

@tableCellLineHeight: @paragraphLineHeight;

@tableCellBorderColor: @lighterGray;

@tableCellPaddingHorizontal: 16px;
@tableCellPaddingVertical: 6px;

// Table Captions

@tableCaptionFontStyle: italic;

@tableCaptionBackground: @lightestGray;

@tableCaptionPaddingVertical: 12px;
@tableCaptionPaddingHorizontal: @tableCellPaddingHorizontal;

// Striping

@tableStripedBackground: @lightestGray;
@tableStripedPosition: odd; // even, odd
</code>
</pre>
