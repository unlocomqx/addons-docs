(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{228:function(t,e,s){"use strict";s.r(e);var i=s(6),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"conditions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conditions"}},[t._v("#")]),t._v(" Conditions")]),t._v(" "),s("p",[t._v("The conditions feature allows you to show/hide fields based on the value of another field or other\nfields."),s("br"),t._v("\nThe conditions also allow to show/hide field groups.")]),t._v(" "),s("p",[t._v("Start by adding a new condition then configure the condition formula.")]),t._v(" "),s("p",[t._v("When the result of the condition formula is "),s("strong",[t._v("true")]),t._v(", then the module will hide the field and groups\nthat are marked as hidden.")]),t._v(" "),s("img",{attrs:{src:"/optimized/dynamicproduct/images/conditions-1x.webp",width:"857",height:"354",loading:"lazy","data-zoom-src":"/optimized/dynamicproduct/images/conditions.webp",srcset:"/optimized/dynamicproduct/images/conditions.webp 2x"}}),t._v(" "),s("p",[t._v("In this example, we hide the "),s("strong",[t._v("Glass")]),t._v(" checkbox when the "),s("strong",[t._v("Width")]),t._v(" is bigger than 200 cm."),s("br"),t._v("\nWe can also use more field in the formula, for example if we want to hide a field when either width\nor length are bigger than 200 cm, then we can write this formula")]),t._v(" "),s("p",[s("code",{staticClass:"formula"},[s("strong",[t._v("[width]")]),t._v(" > 200 | "),s("strong",[t._v("[length]")]),t._v(" > 200")])]),t._v(" "),s("p",[t._v("The pipe symbol "),s("strong",[t._v("|")]),t._v(" signifies the logical OR, if we want to use AND, then we use an ampersand **\n&**")]),t._v(" "),s("p",[t._v("Example\n"),s("code",{staticClass:"formula"},[s("strong",[t._v("[width]")]),t._v(" > 200 & "),s("strong",[t._v("[length]")]),t._v(" > 200")])]),t._v(" "),s("p",[t._v("This would that if both width and length are bigger than 200, then hide the marked fields.")]),t._v(" "),s("p",[t._v("We can of course hide more than one field")]),t._v(" "),s("img",{staticClass:"border",attrs:{src:"/optimized/dynamicproduct/images/condition-more-1x.webp",width:"400",height:"200",loading:"lazy","data-zoom-src":"/optimized/dynamicproduct/images/condition-more.webp",srcset:"/optimized/dynamicproduct/images/condition-more.webp 2x"}}),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When a field is hidden, its value will be 0 or empty so it doesn't have an effect on the price")])]),t._v(" "),s("h2",{attrs:{id:"hiding-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hiding-options"}},[t._v("#")]),t._v(" Hiding options")]),t._v(" "),s("p",[t._v("Besides fields and groups, we can also hide individual options of a dropdown or radio or image list\nfield.")]),t._v(" "),s("p",[t._v("To hide a field options, click the cog icon to open the options list.")]),t._v(" "),s("img",{staticClass:"border",attrs:{src:"/optimized/dynamicproduct/images/condition-cog-1x.webp",width:"413",height:"204",loading:"lazy","data-zoom-src":"/optimized/dynamicproduct/images/condition-cog.webp",srcset:"/optimized/dynamicproduct/images/condition-cog.webp 2x"}}),t._v(" "),s("p",[t._v("Then you can hide the options of your choice by clicking them")]),t._v(" "),s("img",{staticClass:"border",attrs:{src:"/optimized/dynamicproduct/images/condition-options-1x.webp",width:"427",height:"105",loading:"lazy","data-zoom-src":"/optimized/dynamicproduct/images/condition-options.webp",srcset:"/optimized/dynamicproduct/images/condition-options.webp 2x"}}),t._v(" "),s("h2",{attrs:{id:"working-with-fields-having-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-fields-having-options"}},[t._v("#")]),t._v(" Working with fields having options")]),t._v(" "),s("p",[t._v("When working with field which have options, you will need to reference the option value in the\ncondition formula. Referencing with numeric values can hinder readability, this is why you can use\nstrings instead.")]),t._v(" "),s("p",[t._v("In out case, we can reconfigure the "),s("strong",[t._v("material")]),t._v(" field and set a string value for each option.\n"),s("img",{staticClass:"border",attrs:{srcset:"/dynamicproduct/images/condition-strings.jpg 2x"}})]),t._v(" "),s("p",[t._v("Then when we configure our condition formula, we can click the option to insert its value directly\n"),s("img",{staticClass:"border",attrs:{srcset:"/dynamicproduct/images/dropdown-formula-strings.jpg 2x"}})]),t._v(" "),s("p",[t._v("Note how the quotes are used around both the field name and the string itself, this is to avoid\nsyntax errors and to ensure correct parsing of the formula.")]),t._v(" "),s("h2",{attrs:{id:"labels-vs-numbers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#labels-vs-numbers"}},[t._v("#")]),t._v(" Labels vs. Numbers")]),t._v(" "),s("p",[t._v("When you have a dropdown or an image list, it's better to use string values instead of number to\nreference your options")]),t._v(" "),s("p",[t._v("For example, if you have a dropdown containing colors, it's better to use the color names instead of\narbitrary values. Here's an example:")]),t._v(" "),s("img",{staticClass:"border",attrs:{src:"/optimized/dynamicproduct/images/dropdown-labels-1x.webp",width:"555",height:"257",loading:"lazy","data-zoom-src":"/optimized/dynamicproduct/images/dropdown-labels.webp",srcset:"/optimized/dynamicproduct/images/dropdown-labels.webp 2x"}}),t._v(" "),s("p",[t._v("That way, you can write clearer condition formulas like")]),t._v(" "),s("div",{staticClass:"language-xls extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xls"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[colors]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[colors]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),t._v("\n... etc\n")])])]),s("p",[t._v("It's better than using arbitrary numbers like")]),t._v(" "),s("div",{staticClass:"language-xls extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xls"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When using string values, make sure to wrap both the field and the value is quotes to avoid syntax\nerrors.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);