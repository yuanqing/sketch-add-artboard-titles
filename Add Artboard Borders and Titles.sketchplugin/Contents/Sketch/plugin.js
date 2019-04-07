!function(t,e){for(var r in e)t[r]=e[r]}(this,function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)}([function(t,e,r){"use strict";var n={};r.r(n),r.d(n,"CHECK_BOX",function(){return d}),r.d(n,"DROP_DOWN",function(){return u}),r.d(n,"RADIO_BUTTONS",function(){return c}),r.d(n,"NUMERIC_TEXT_BOX",function(){return l.a}),r.d(n,"STRING_TEXT_BOX",function(){return b}),r.d(n,"TEXT_BOX",function(){});const i="sketch-plugin-helper";function o(){return JSON.parse('{"private": true,"version": "0.7.1","devDependencies": {"sketch-plugin-helper": "*"},"scripts": {"build": "sph build","fix": "sph lint --fix","lint": "sph lint","symlink": "sph symlink","test": "sph test","unlink": "sph symlink --delete","version": "sph version","watch": "sph build --watch"},"sketch-plugin-helper": {"pluginName": "Add Artboard Borders and Titles","pluginDescription": "A Sketch plugin to automatically add borders and titles to artboards","authorName": "Lim Yuan Qing","githubUserName": "yuanqing","githubRepositoryName": "sketch-add-artboard-borders-and-titles","menu": [{"handler": "add-artboard-borders/add-artboard-borders","label": "Add Artboard Borders"},{"handler": "add-artboard-titles/add-artboard-titles","label": "Add Artboard Titles"},"-",{"Settings": [{"handler": "add-artboard-borders/settings","label": "Settings for Add Artboard Borders"},{"handler": "add-artboard-titles/settings","label": "Settings for Add Artboard Titles"},"-",{"handler": "reset-settings","label": "Reset Settings"}]}],"defaultSettings": {"addArtboardBorders.borderColor": "#7f7f7f","addArtboardBorders.borderWidth": 2,"addArtboardTitles.font": "Helvetica","addArtboardTitles.fontSize": 24,"addArtboardTitles.lineHeight": 32,"addArtboardTitles.verticalSpace": 16}}\n}\n')}var a=r(1);function s(){const{defaultSettings:t}=o()[i];return void 0===t?{}:Object.keys(t).reduce(function(e,r){const n=Object(a.sessionVariable)(r),i=Object(a.settingForKey)(r),o=void 0!==n?n:i,s=t[r];return e[r]=void 0!==o?o:s,e},{})}function d({width:t,height:e,label:r,value:n}){const i=NSButton.alloc().initWithFrame(NSMakeRect(0,0,t,e));return i.setButtonType(NSSwitchButton),i.setBezelStyle(0),i.setState(n?NSOnState:NSOffState),i.setTitle(r),{view:i,retrieveValue:function(){return"1"===i.stringValue()}}}function u({width:t,height:e,value:r,possibleValues:n}){const i=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,0,t,e));n.forEach(function(t){i.addItemWithTitle(t)});const o=void 0!==r?n.indexOf(r):0;return i.selectItemAtIndex(o),{view:i,retrieveValue:function(){const t=i.indexOfSelectedItem();return n[t]}}}function c({width:t,height:e,value:r,possibleValues:n}){const i=NSButtonCell.alloc().init();i.setButtonType(NSRadioButton);const o=n.length,a=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,0,t,e),NSRadioModeMatrix,i,1,o);a.setCellSize(CGSizeMake(Math.floor(t/o),e)),a.cells().forEach(function(t,e){t.setTitle(n[e])});const s=void 0!==r?n.indexOf(r):0;return a.selectCellAtRow_column(0,s),{view:a,retrieveValue:function(){const t=a.cells().indexOfObject(a.selectedCell());return n[t]}}}var l=r(5),f=r(3);const b=Object(f.a)(),p=20,h=12,g=20,S=6,y=300;function v({title:t,inputs:e}){const r=s(),{inputs:i,views:o,stackViewHeight:a}=function({inputsConfig:t,settings:e}){const r={},i=[];let o=0;return t.forEach(function({type:t,key:a,label:s,value:d,...u}){if(s&&"CHECK_BOX"!==t){const t=function({label:t,width:e,height:r}){const n=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,e,r));return n.setBezeled(!1),n.setDrawsBackground(!1),n.setEditable(!1),n.setLineBreakMode(NSLineBreakByTruncatingTail),n.setSelectable(!1),n.setStringValue(t),n}({label:s,width:y,height:g});i.push({view:t,paddingBottom:S}),o+=g+S}const c=e[a],l=void 0!==c?c:d,{view:f,retrieveValue:b}=n[t]({label:s,value:l,width:y,height:p,...u});i.push({view:f,paddingBottom:h}),o+=p+h,r[a]=b}),{inputs:r,views:i,stackViewHeight:o-=h}}({inputsConfig:e,settings:r}),d=function({width:t,height:e,views:r}){const n=NSStackView.alloc().initWithFrame(NSMakeRect(0,0,t,e));return n.setAlignment(NSLayoutAttributeLeft),n.setOrientation(NSUserInterfaceLayoutOrientationVertical),n.setSpacing(0),n.setTranslatesAutoresizingMaskIntoConstraints(!0),n.updateConstraintsForSubtreeIfNeeded(),r.forEach(function({view:t,paddingBottom:e}){n.addView_inGravity_(t,NSStackViewGravityTop),n.setCustomSpacing_afterView_(e,t)}),n}({width:y,height:a,views:o}),u=function(t){const e=NSAlert.alloc().init();return e.window().setAutorecalculatesKeyViewLoop(!0),e.setMessageText(t),e.addButtonWithTitle("OK"),e.addButtonWithTitle("Cancel"),e}(t);return u.setAccessoryView(d),"1000"==u.runModal()?Object.keys(i).reduce(function(t,e){const r=i[e];return t[e]=r(),t},{}):null}var m=r(6),_=r.n(m);function O(t,e){_.a.message(e&&e.symbol?`${e.symbol} ${t}`:t)}function A(t){O(t,{symbol:"✔"})}function T(t){O(t,{symbol:"✘"})}function k(){const{defaultSettings:t}=o()[i];void 0!==t&&(Object.keys(t).forEach(function(t){Object(a.setSettingForKey)(t,void 0),Object(a.setSessionVariable)(t,void 0)}),O("Reset settings"))}const N=w(a.setSettingForKey);w(a.setSessionVariable);function w(t){return function(e,r){if(void 0===e)return;Object.keys(e).forEach(function(r){const n=e[r];void 0!==n&&t(r,n)});const n=void 0!==r&&r.successMessage;n&&O(n)}}r(7),r(8);r(9);var B=r(10);function x(){const t=NSApplication.sharedApplication().orderedDocuments();return Object(B.fromNative)(t[0])}function M(t){return x().selectedPage.sketchObject.addLayers(t)}function j(){return x().selectedPage.layers}function V(){return j().filter(function(t){return"Artboard"===t.type})}r.d(e,"f",function(){return s}),r.d(e,"g",function(){return v}),r.d(e,"h",function(){return k}),r.d(e,"i",function(){return N}),r.d(e,"a",function(){return"NUMERIC_TEXT_BOX"}),r.d(e,"b",function(){return"STRING_TEXT_BOX"}),r.d(e,"c",function(){return M}),r.d(e,"e",function(){return j}),r.d(e,"d",function(){return V}),r.d(e,"k",function(){return A}),r.d(e,"j",function(){return T})},function(t,e){t.exports=require("sketch/settings")},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(0);function i({mapArtboards:t,groupName:e,successMessage:r}){return function({settings:i}){var o;o=e,Object(n.e)().forEach(function(t){"Group"===t.type&&t.name===o&&t.remove()});const a=Object(n.d)();if(0===a.length)return void Object(n.j)("No artboards");const s=t({artboards:a,settings:i||Object(n.f)(),groupName:e});Object(n.c)([s]),Object(n.k)(r)}}},function(t,e,r){"use strict";function n(t){return function({width:e,height:r,value:n,placeholder:i}){const o=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,e,r)),a=null==n?"":`${n}`;return o.setStringValue(a),i&&o.setPlaceholderString(i),{view:o,retrieveValue:function(){const e=`${o.stringValue()}`;return t?t(e):e}}}}r.d(e,"a",function(){return n})},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(0);function i(t){return function(){const e=Object(n.g)(t);e&&Object(n.i)(e,{successMessage:"Saved settings"})}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return numericTextBox});var _text_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);const numericTextBox=Object(_text_box__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(t,e){t.exports=require("sketch/ui")},function(t,e){t.exports=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}},function(t,e,r){"use strict";const n=async(t,e)=>{let r=0;for(const n of t)await e(await n,r++);return t};t.exports=n,t.exports.default=n},function(t,e){t.exports=require("sketch/dom")},function(t,e){t.exports=require("sketch")},function(t,e,r){t.exports=r(12)},function(t,e,r){t.exports={"add-artboard-borders/add-artboard-borders":r(13).default,"add-artboard-titles/add-artboard-titles":r(14).default,"add-artboard-borders/settings":r(15).default,"add-artboard-titles/settings":r(16).default,"reset-settings":r(17).default}},function(t,e,r){"use strict";r.r(e);var n=r(2);e.default=Object(n.a)({mapArtboards:function({artboards:t,settings:e,groupName:r}){const n=[];t.forEach(function(t){const r=MSRectangleShape.alloc().initWithFrame(t.sketchObject.rect());r.setName(t.name),r.setIsLocked(!0);const i=MSStyle.alloc().init(),o=i.addStylePartOfType(1);o.color=MSImmutableColor.colorWithSVGString(e["addArtboardBorders.borderColor"]),o.thickness=e["addArtboardBorders.borderWidth"],o.position=2,r.setStyle(i),n.push(r)});const i=MSLayerArray.arrayWithLayers(n),o=MSLayerGroup.groupWithLayers(i);return o.setName(r),o.setIsLocked(!0),o},groupName:"@ArtboardBorders",successMessage:"Added artboard borders"})},function(t,e,r){"use strict";r.r(e);var n=r(2);e.default=Object(n.a)({mapArtboards:function({artboards:t,settings:e,groupName:r}){const n=[];t.forEach(function(t){const r=t.name,i=t.frame,o=MSTextLayer.alloc().initWithFrame(NSMakeRect(0,0,0,0));o.setFontPostscriptName(e["addArtboardTitles.font"]),o.setFontSize(e["addArtboardTitles.fontSize"]),o.setLineHeight(e["addArtboardTitles.lineHeight"]),o.setStringValue(r),o.setName(r),o.setIsLocked(!0),o.setVerticalAlignment("bottom"),o.frame().setWidth(i.width),o.setTextBehaviour(1),o.adjustFrameToFit(),o.frame().setX(i.x),o.frame().setY(i.y-o.frame().height()-parseInt(e["addArtboardTitles.verticalSpace"],10)),n.push(o)});const i=MSLayerArray.arrayWithLayers(n),o=MSLayerGroup.groupWithLayers(i);return o.setName(r),o.setIsLocked(!0),o},groupName:"@ArtboardTitles",successMessage:"Added artboard titles"})},function(t,e,r){"use strict";r.r(e);var n=r(0),i=r(4);const o={title:"Settings for Add Artboard Borders",inputs:[{type:n.a,key:"addArtboardBorders.borderWidth",label:"Border width"},{type:n.b,key:"addArtboardBorders.borderColor",label:"Border color"}]};e.default=Object(i.a)(o)},function(t,e,r){"use strict";r.r(e);var n=r(0),i=r(4);const o={title:"Setings for Add Artboard Titles",inputs:[{type:n.b,key:"addArtboardTitles.font",label:"Font"},{type:n.a,key:"addArtboardTitles.fontSize",label:"Font size"},{type:n.a,key:"addArtboardTitles.lineHeight",label:"Line-height"},{type:n.a,key:"addArtboardTitles.verticalSpace",label:"Vertical space"}]};e.default=Object(i.a)(o)},function(t,e,r){"use strict";r.r(e);var n=r(0);e.default=n.h}]));