(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{221:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"custom-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-fields"}},[t._v("#")]),t._v(" Custom fields")]),t._v(" "),a("p",[t._v("The module allows you to add custom fields to your products.")]),t._v(" "),a("h2",{attrs:{id:"create-a-custom-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-custom-field"}},[t._v("#")]),t._v(" Create a custom field")]),t._v(" "),a("p",[t._v("Add a new custom field by clicking on the "),a("code",[t._v("Add a new field")]),t._v(" button and give it a name and a label (optional).")]),t._v(" "),a("img",{attrs:{src:"/optimized/dynamicproduct/images/custom-fields/add-custom-field-1x.webp",width:"929",height:"250",loading:"lazy","data-zoom-src":"/optimized/dynamicproduct/images/custom-fields/add-custom-field.webp",srcset:"/optimized/dynamicproduct/images/custom-fields/add-custom-field.webp 2x"}}),t._v(" "),a("p",[t._v("In this case, we created a custom field named "),a("code",[t._v("time_picker")]),t._v(", which will allow the customer to pick a time.")]),t._v(" "),a("p",[t._v("In the field settings, you can configure the script name and the JSON config. Both are optional.")]),t._v(" "),a("img",{attrs:{srcset:"/dynamicproduct/images/custom-fields/settings.jpg.jpg 2x"}}),t._v(" "),a("h3",{attrs:{id:"script-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-name"}},[t._v("#")]),t._v(" Script name")]),t._v(" "),a("p",[t._v("The script name, if set, will tell the module to load the script "),a("code",[t._v("dynamicproduct/scripts/[script name]/script.js")]),t._v("."),a("br"),t._v("\nOtherwise the field name will be used as the script name.")]),t._v(" "),a("p",[t._v("Using the script name is useful if you want to use the same script for multiple fields.")]),t._v(" "),a("h3",{attrs:{id:"json-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-config"}},[t._v("#")]),t._v(" JSON config")]),t._v(" "),a("p",[t._v("The JSON config is used to configure the field. It is a JSON object that may contain any properties that you want to use\nin your script.\nIt's useful if you want to have a different behavior for each custom field.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9:00am"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maxTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6:00pm"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"startTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10:00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This JSON config will be passed to the script as the "),a("code",[t._v("config")]),t._v(" variable. In this case, the config will serve to configure\nthe time picker.")]),t._v(" "),a("h2",{attrs:{id:"script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script"}},[t._v("#")]),t._v(" Script")]),t._v(" "),a("p",[t._v("The script is a JavaScript file that will be loaded when the field is displayed.")]),t._v(" "),a("p",[t._v("Optionally, you can create a "),a("code",[t._v("style.css")]),t._v(" file to add custom styles to the field.")]),t._v(" "),a("p",[t._v("Files:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/dynamicproduct/scripts/[script name]/script.js\n/dynamicproduct/scripts/[script name]/style.css (Optional)\n\nIn this example, the script name is `time_picker` so the files will be:\n/dynamicproduct/scripts/time_picker/script.js\n/dynamicproduct/scripts/time_picker/style.css\n")])])]),a("h3",{attrs:{id:"gettings-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gettings-started"}},[t._v("#")]),t._v(" Gettings started")]),t._v(" "),a("p",[t._v("After creating the files, add the init function to the "),a("code",[t._v("script.js")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dpInitScriptName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("field_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your code here")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Replace "),a("code",[t._v("ScriptName")]),t._v(" in the function name with the script name that you used in the field settings. It should be in\nPascalCase.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can open the console to see the function name that you should add to the script.")]),t._v(" "),a("p",[t._v("Here's an example of the error message that you will see if you don't add the function:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dynamic_product[time_picker]: function window.dpInitTimePicker not found\n")])])])]),t._v(" "),a("p",[t._v("In our example, the function name will be "),a("code",[t._v("dpInitTimePicker")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dpInitTimePicker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("field_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your code here")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Actual script:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dpInitTimePicker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("field_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// the target div is the field div with id="dp_[field_name]"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("#dp_")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("field_name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create an <input/> element and append it to the target div")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" input "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('<input type="text" class="form-control" id="dp_time_')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("field_name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/>')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"head"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// init the timepicker on the input and pass the config directly")]),t._v("\n    input\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timepicker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time-change"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when the timepicker value changes, update the field value")]),t._v("\n        window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The field will be displayed like this")]),t._v(" "),a("img",{staticClass:"padding border",attrs:{src:"/optimized/dynamicproduct/images/custom-fields/time-picker-1x.webp",width:"540",height:"277",loading:"lazy","data-zoom-src":"/optimized/dynamicproduct/images/custom-fields/time-picker.webp",srcset:"/optimized/dynamicproduct/images/custom-fields/time-picker.webp 2x"}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The recommended way to write the custom script is to use "),a("a",{attrs:{href:"https://svelte.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Svelte"),a("OutboundLink")],1),t._v(" as it allows you to write your\ncustom field in a declarative and simple way.")])]),t._v(" "),a("p",[t._v("The field will be displayed like this in cart:")]),t._v(" "),a("img",{staticClass:"border",attrs:{src:"/optimized/dynamicproduct/images/custom-fields/cart-1x.webp",width:"730",height:"272",loading:"lazy","data-zoom-src":"/optimized/dynamicproduct/images/custom-fields/cart.webp",srcset:"/optimized/dynamicproduct/images/custom-fields/cart.webp 2x"}}),t._v(" "),a("h2",{attrs:{id:"customizing-the-field-display-in-cart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-field-display-in-cart"}},[t._v("#")]),t._v(" Customizing the field display in cart")]),t._v(" "),a("p",[t._v("If you'd like to customize the field display in cart, you can add an "),a("code",[t._v("InputField.php")]),t._v(" file to the script folder.")]),t._v(" "),a("p",[t._v("Path: "),a("code",[t._v("/dynamicproduct/scripts/[script name]/InputField.php")])]),t._v(" "),a("p",[t._v("Sample content:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" DynamicProductData\\scripts\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("script name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("classes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DynamicInputField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("InputField")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DynamicInputField")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Open the DynamicInputField class to see all the available methods")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Path: /modules/tunisoft/apps/dynamicproduct/classes/models/DynamicInputField.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("p",[t._v("Replace the "),a("code",[t._v("[script name]")]),t._v(" with the script name that you used in the field settings.")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Examples:")]),t._v(" "),a("p",[t._v("Skip the field in cart:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("DynamicProductData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("scripts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("time_picker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("classes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DynamicInputField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("InputField")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DynamicInputField")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("isSkipped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Don't display the field in cart")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("hr"),t._v(" "),a("p",[t._v("Display the field value in lowercase:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("DynamicProductData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("scripts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("time_picker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("classes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DynamicInputField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("InputField")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DynamicInputField")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("displayValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Display the field value in lowercase")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strtolower")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])]),a("img",{staticClass:"border",attrs:{src:"/optimized/dynamicproduct/images/custom-fields/time-picker-lowercase-1x.webp",width:"730",height:"272",loading:"lazy","data-zoom-src":"/optimized/dynamicproduct/images/custom-fields/time-picker-lowercase.webp",srcset:"/optimized/dynamicproduct/images/custom-fields/time-picker-lowercase.webp 2x"}}),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Display a custom value:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("DynamicProductData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("scripts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("time_picker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("classes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DynamicInputField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("InputField")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DynamicInputField")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("getTemplatePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/template.tpl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])]),a("div",{staticClass:"language-smarty extra-class"},[a("pre",{pre:!0,attrs:{class:"language-smarty"}},[a("code",[a("span",{pre:!0,attrs:{class:"token smarty language-smarty"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{* Path: /dynamicproduct/scripts/time_picker/template.tpl *}")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("material-icons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("schedule"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token smarty language-smarty"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$input_field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}")])]),t._v("\n")])])]),a("img",{staticClass:"border",attrs:{src:"/optimized/dynamicproduct/images/custom-fields/time-picker-icon-1x.webp",width:"730",height:"276",loading:"lazy","data-zoom-src":"/optimized/dynamicproduct/images/custom-fields/time-picker-icon.webp",srcset:"/optimized/dynamicproduct/images/custom-fields/time-picker-icon.webp 2x"}})])}),[],!1,null,null,null);s.default=e.exports}}]);