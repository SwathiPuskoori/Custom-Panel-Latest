(()=>{"use strict";var n={406:(n,e,t)=>{t.d(e,{A:()=>l});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,'.info-component-wrapper,\n.info-component-wrapper * {\n  box-sizing: border-box;\n  margin-bottom: 1rem;\n}\n\n.info-component-wrapper-green {\n  background: rgba(211, 238, 159, 0.2); /* Light green background */\n  border-radius: 8px;\n  border-style: dashed;\n  border-color: #8cc223;\n  border-width: 1px;\n  padding: 8px 12px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: 1rem;\n}\n\n.info-component-wrapper-blue {\n    background: rgba(209, 234, 245, 0.2); /* Light green background */\n    border-radius: 8px;\n    border-style: dashed;\n    border-color: #106389;\n    border-width: 1px;\n    padding: 8px 12px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    margin-bottom: 1rem;\n  }\n\n.info-component-header-blue {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1rem;  /* Size of the icon container */\n  height: 1rem; /* Size of the icon container */\n  border-radius: 50%; /* Circle shape */\n  background-color: #106389; /* Green background */\n}\n\n.info-component-header-green {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 1rem;  /* Size of the icon container */\n    height: 1rem; /* Size of the icon container */\n    border-radius: 50%; /* Circle shape */\n    background-color: #77b336; /* Green background */\n  }\n\n.info-icon i, .info-icon {\n  color: white; /* Color for both icon and text */\n  font-size: 0.75rem; /* Adjusted icon size */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.info-component-content {\n  color: #1e1e1e;\n  font-size: 14px;\n  font-weight: 400;\n  flex: 1;\n  padding-left: 12px;\n}\n\n.highlight {\n  background: #d1eaf5;\n  border-radius: var(--corner-extra-small, 4px);\n  border-style: solid;\n  border-color: #bccf96;\n  border-width: 0.5px;\n  padding: 2px 8px 2px 8px;\n  display: inline-flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  white-space: nowrap;\n  font-family: "Inter-SemiBold", sans-serif;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  font-weight: 600;\n  color: #106389;\n}\n',""]);const l=a},779:(n,e,t)=>{t.d(e,{A:()=>l});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,'.custom-panel-header {\n  color: black;\n  cursor: pointer;\n  background: #bfbfbf;\n  border-radius: 8px !important;\n  border-style: solid;\n  border-color: #e0e0e0;\n  border-width: 0px 0px 1px 0px;\n  padding: 12px 16px 12px 16px;\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  height: 64px;\n  position: relative;\n  overflow: hidden;\n}\n\n.custom-panel-sucess {\n  color: black !important;\n  cursor: pointer;\n  background: #77b336 !important;\n  border-radius: 8px !important;\n  border-style: solid !important;\n  border-color: #e0e0e0 !important;\n  border-width: 0px 0px 1px 0px !important;\n  padding: 12px 16px 12px 16px !important;\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  height: 64px;\n  position: relative;\n  overflow: hidden;\n}\n\n.step-label {\n    display: flex;\n    align-items: center;\n    width: 100%; \n}\n\n.step-label.justify-content-between {\n    justify-content: space-between;\n}\n\n.step-number {\n    background-color: #d0d0d0;\n    color: black;\n    font-weight: 400;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 10px;\n    font-size: 14px;\n}\n\n.step-number-sucess {\n    background-color: #add261;\n    color: black;\n    font-weight: 400;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 10px;\n    font-size: 14px;\n}\n\n.toggle-icon {\n    font-size: 12px;\n    transition: transform 0.3s;\n    margin-left: auto; \n}\n\n.panel-content {\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-top: none;\n    border-radius: 0 0 5px 5px;\n}\n\nbody {\n    color: var(--greyscale-icon-title, #27252d);\n    text-align: left;\n    font-family: "Montserrat-Regular", sans-serif;\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 400;\n    position: relative;\n    align-self: stretch;\n  }\n\n  .checkmark-icon {\n    width: 20px; \n    height: 20px;\n    margin-left: 10px;\n    vertical-align: middle; \n  }\n  \n\n\n\n\n\n\n\n\n\n  /* global form css */\n  \n.choices__input.form-control {\n    border-radius: 10px !important;\n  }\n  \n  .form-control.ui.fluid.selection.dropdown {\n    border-radius: 10px !important;\n    height: calc(2em + 2px + 0.75rem) !important;\n  }\n  \n  .choices__list {\n    border-radius: 10px !important;\n  }\n  \n  \n  body {\n    color: #333;\n    font-family: "Montserrat-Regular", sans-serif;\n    font-weight: 400;\n    line-height: 1.6;\n    letter-spacing: 0.5px;\n    word-wrap: break-word;\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n  }\n  \n  input.form-control {\n    border-radius: 10px !important;\n    height: calc(2em + 2px + 0.75rem) !important;\n  }\n  textarea.form-control{\n   border-radius: 10px !important;\n  }\n  select.form-control {\n      border-radius: 10px !important;\n      height: calc(2em + 2px + 0.75rem) !important;\n  }\n  /* Scoped styling for formio-component-file (File Upload) */\n  .formio-component-file {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n  \n  .formio-component-file label {\n    font-family: var(--v-text-button-font-family);\n    font-weight: var(--v-text-button-font-weight);\n    font-size: 16px;\n    color: #000;\n    margin-bottom: 10px;\n  }\n  \n  /* File upload drop area (only for file upload component) */\n  .formio-component-file .fileSelector {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    border: 1px solid #527a21;\n    background-color: #f8ffe9;\n    text-transform: uppercase;\n    border-radius: 25px;\n    cursor: pointer;\n    transition: background-color 0.3s ease, border-color 0.3s ease;\n  }\n  \n  .formio-component-file .fileSelector:hover {\n    background-color: #e1f1a3;\n    border-color: #4a6d1b;\n  }\n  \n  /* Browse link style within the file selector */\n  .formio-component-file .fileSelector .browse {\n    font-size: var(--v-text-button-font-size);\n    font-weight: var(--v-text-button-font-weight);\n    color: #527a21;\n    text-decoration: underline;\n  }\n  \n  .formio-component-file .fileSelector .browse:hover {\n    color: #4a6d1b;\n  }\n  \n  /* Loader (only visible during file processing) */\n  .formio-component-file .loader-wrapper {\n    display: none;\n  }\n  \n  .formio-component-file .loader-wrapper.active {\n    display: block;\n  }\n  \n  .formio-component-file .loader {\n    width: 30px;\n    height: 30px;\n    border: 4px solid #ddd;\n    border-top: 4px solid #527a21;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n  }\n  \n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n  \n  /* File list area specific to file upload component */\n  .formio-component-file .list-group {\n    width: 100%;\n    margin-top: 10px;\n  }\n  \n  .formio-component-file .list-group-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    border: 1px solid #ddd;\n    background-color: #f9f9f9;\n    margin-bottom: 5px;\n    border-radius: 8px;\n  }\n  \n  .formio-component-file .list-group-item .file-name {\n    font-family: var(--v-text-button-font-family);\n    font-weight: var(--v-text-button-font-weight);\n    color: #000;\n    font-size: 14px;\n  }\n  \n  .formio-component-file .list-group-item .file-size {\n    font-family: var(--v-text-button-font-family);\n    font-weight: var(--v-text-button-font-weight);\n    color: #000;\n    font-size: 12px;\n    text-align: right;\n  }\n  \n  /* Error message specific to file upload component */\n  .formio-component-file .formio-errors {\n    color: #dc3545;\n    font-size: 12px;\n    margin-top: 10px;\n  }\n  \n  /* Alert message (e.g., for file upload storage issues) */\n  .formio-component-file .alert {\n    background-color: #fff3cd;\n    color: #856404;\n    border-radius: var(--shape-corner-full);\n    padding: 10px;\n    font-family: var(--v-text-button-font-family);\n    font-weight: var(--v-text-button-font-weight);\n    font-size: var(--v-text-button-font-size);\n    margin-top: 10px;\n  }\n  \n  /* Warning text inside the alert box */\n  .formio-component-file .alert p {\n    margin: 0;\n    font-size: 14px;\n    font-weight: 400;\n  }\n  .highlight {\n      background: #d1eaf5;\n      border-radius: var(--corner-extra-small, 4px);\n      border-style: solid;\n      border-color: #bccf96;\n      border-width: 0.5px;\n      padding: 2px 8px 2px 8px;\n      display: inline-flex;\n      gap: 10px;\n      align-items: center;\n      justify-content: center;\n      white-space: nowrap;\n      font-family: "Inter-SemiBold", sans-serif;\n      font-size: 13px;\n      line-height: 20px;\n      letter-spacing: 0.01em;\n      font-weight: 600;\n      color: #106389;\n    }\n  .list-group-item.list-group-header {\n    display: none !important;\n  }\n  \n  .customButton{\n    background: #77b336 !important;\n    background-color: #77b336 !important;\n    color: black !important;\n  }\n  .btn.btn-danger {\n    background-color: transparent !important;\n    border-color: black !important;\n    color: black !important;\n  }\n  .btn.btn-secondary{\n  background-color : transparent !important;\n  color: black !important;\n  }\n  .btn.btn-primary {\n    background-color: #77b336 !important;\n    border-color: #77b336 !important; \n    color: black !important;\n  }\n  .btn.btn-success {\n      --bs-btn-bg: #77b336 !important;\n      --bs-btn-color: black !important;\n      --bs-btn-border-color: #77b336 !important;\n      --bs-btn-hover-bg: #6aa02d !important;\n      --bs-btn-hover-border-color: #6aa02d !important;\n      --bs-btn-active-bg: #62982a !important; \n      --bs-btn-active-border-color: #5a9027 !important;\n      --bs-btn-disabled-bg: #77b336 !important;\n      --bs-btn-disabled-border-color: #77b336 !important;\n  }',""]);const l=a},105:(n,e,t)=>{t.d(e,{A:()=>l});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,' /* global form css */\n  \n .choices__input.form-control {\n    border-radius: 10px !important;\n  }\n  \n  .form-control.ui.fluid.selection.dropdown {\n    border-radius: 10px !important;\n    height: calc(2em + 2px + 0.75rem) !important;\n  }\n  \n  .choices__list {\n    border-radius: 10px !important;\n  }\n  \n  \n  body {\n    color: #333;\n    font-family: "Montserrat-Regular", sans-serif;\n    font-weight: 400;\n    line-height: 1.6;\n    letter-spacing: 0.5px;\n    word-wrap: break-word;\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n  }\n  \n  input.form-control {\n    border-radius: 10px !important;\n    height: calc(2em + 2px + 0.75rem) !important;\n  }\n  textarea.form-control{\n   border-radius: 10px !important;\n  }\n  select.form-control {\n      border-radius: 10px !important;\n      height: calc(2em + 2px + 0.75rem) !important;\n  }\n  /* Scoped styling for formio-component-file (File Upload) */\n  .formio-component-file {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n  \n  .formio-component-file label {\n    font-family: var(--v-text-button-font-family);\n    font-weight: var(--v-text-button-font-weight);\n    font-size: 16px;\n    color: #000;\n    margin-bottom: 10px;\n  }\n  \n  /* File upload drop area (only for file upload component) */\n  .formio-component-file .fileSelector {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    border: 1px solid #527a21;\n    background-color: #f8ffe9;\n    text-transform: uppercase;\n    border-radius: 25px;\n    cursor: pointer;\n    transition: background-color 0.3s ease, border-color 0.3s ease;\n  }\n  \n  .formio-component-file .fileSelector:hover {\n    background-color: #e1f1a3;\n    border-color: #4a6d1b;\n  }\n  \n  /* Browse link style within the file selector */\n  .formio-component-file .fileSelector .browse {\n    font-size: var(--v-text-button-font-size);\n    font-weight: var(--v-text-button-font-weight);\n    color: #527a21;\n    text-decoration: underline;\n  }\n  \n  .formio-component-file .fileSelector .browse:hover {\n    color: #4a6d1b;\n  }\n  \n  /* Loader (only visible during file processing) */\n  .formio-component-file .loader-wrapper {\n    display: none;\n  }\n  \n  .formio-component-file .loader-wrapper.active {\n    display: block;\n  }\n  \n  .formio-component-file .loader {\n    width: 30px;\n    height: 30px;\n    border: 4px solid #ddd;\n    border-top: 4px solid #527a21;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n  }\n  \n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n  \n  /* File list area specific to file upload component */\n  .formio-component-file .list-group {\n    width: 100%;\n    margin-top: 10px;\n  }\n  \n  .formio-component-file .list-group-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    border: 1px solid #ddd;\n    background-color: #f9f9f9;\n    margin-bottom: 5px;\n    border-radius: 8px;\n  }\n  \n  .formio-component-file .list-group-item .file-name {\n    font-family: var(--v-text-button-font-family);\n    font-weight: var(--v-text-button-font-weight);\n    color: #000;\n    font-size: 14px;\n  }\n  \n  .formio-component-file .list-group-item .file-size {\n    font-family: var(--v-text-button-font-family);\n    font-weight: var(--v-text-button-font-weight);\n    color: #000;\n    font-size: 12px;\n    text-align: right;\n  }\n  \n  /* Error message specific to file upload component */\n  .formio-component-file .formio-errors {\n    color: #dc3545;\n    font-size: 12px;\n    margin-top: 10px;\n  }\n  \n  /* Alert message (e.g., for file upload storage issues) */\n  .formio-component-file .alert {\n    background-color: #fff3cd;\n    color: #856404;\n    border-radius: var(--shape-corner-full);\n    padding: 10px;\n    font-family: var(--v-text-button-font-family);\n    font-weight: var(--v-text-button-font-weight);\n    font-size: var(--v-text-button-font-size);\n    margin-top: 10px;\n  }\n  \n  /* Warning text inside the alert box */\n  .formio-component-file .alert p {\n    margin: 0;\n    font-size: 14px;\n    font-weight: 400;\n  }\n  .highlight {\n      background: #d1eaf5;\n      border-radius: var(--corner-extra-small, 4px);\n      border-style: solid;\n      border-color: #bccf96;\n      border-width: 0.5px;\n      padding: 2px 8px 2px 8px;\n      display: inline-flex;\n      gap: 10px;\n      align-items: center;\n      justify-content: center;\n      white-space: nowrap;\n      font-family: "Inter-SemiBold", sans-serif;\n      font-size: 13px;\n      line-height: 20px;\n      letter-spacing: 0.01em;\n      font-weight: 600;\n      color: #106389;\n    }\n  .list-group-item.list-group-header {\n    display: none !important;\n  }\n  \n  .customButton{\n    background: #77b336 !important;\n    background-color: #77b336 !important;\n    color: black !important;\n  }\n  .btn.btn-danger {\n    background-color: transparent !important;\n    border-color: black !important;\n    color: black !important;\n  }\n  .btn.btn-secondary{\n  background-color : transparent !important;\n  color: black !important;\n  }\n  .btn.btn-primary {\n    background-color: #77b336 !important;\n    border-color: #77b336 !important; \n    color: black !important;\n  }\n  .btn.btn-success {\n      --bs-btn-bg: #77b336 !important;\n      --bs-btn-color: black !important;\n      --bs-btn-border-color: #77b336 !important;\n      --bs-btn-hover-bg: #6aa02d !important;\n      --bs-btn-hover-border-color: #6aa02d !important;\n      --bs-btn-active-bg: #62982a !important; \n      --bs-btn-active-border-color: #5a9027 !important;\n      --bs-btn-disabled-bg: #77b336 !important;\n      --bs-btn-disabled-border-color: #77b336 !important;\n  }',""]);const l=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],l=0;l<n.length;l++){var s=n[l],c=o.base?s[0]+o.base:s[0],p=i[c]||0,d="".concat(c," ").concat(p);i[c]=p+1;var f=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var u=r(m,o);o.byIndex=l,e.splice(l,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);e[l].references--}for(var s=o(n,r),c=0;c<i.length;c++){var p=t(i[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;const o=[{weight:1,type:"textfield",label:"Step Number",tooltip:"Step Number to be displayed on Panel Header",key:"stepNumber",input:!0,defaultValue:1},{weight:2,type:"textfield",label:"CSS for Header",tooltip:"Custom CSS for Panel Header",key:"headerCSS",input:!0,defaultValue:"custom-panel-header"},{weight:3,type:"textfield",label:"CSS for Step Number",tooltip:"Custom CSS for Step Number",key:"stepNumberCSS",input:!0,defaultValue:"step-number"},{weight:3,type:"textfield",label:"IsCompleted",tooltip:"If valid then Iscompleted is true else false",key:"isCompleted",input:!0,defaultValue:"false"}],r=Formio.Components.components.panel.editForm;function i(...n){return r([{key:"display",components:o}],...n)}var a=t(72),l=t.n(a),s=t(825),c=t.n(s),p=t(659),d=t.n(p),f=t(56),m=t.n(f),u=t(540),b=t.n(u),g=t(113),h=t.n(g),x=t(779),y={};y.styleTagTransform=h(),y.setAttributes=m(),y.insert=d().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=b(),l()(x.A,y),x.A&&x.A.locals&&x.A.locals;var v=t(105),w={};w.styleTagTransform=h(),w.setAttributes=m(),w.insert=d().bind(null,"head"),w.domAPI=c(),w.insertStyleElement=b(),l()(v.A,w),v.A&&v.A.locals&&v.A.locals;const k=Formio.Components.components.panel;Formio.Templates.defaultTemplates.myTemplate={form:function(n){let e,t="";return Array.prototype.join,t+='<div class="mb-2 card border panel-with-step">\n  ',(!n.component.hideLabel||n.builder||n.component.collapsible||n.component.tooltip)&&(t+='\n  <div class="'+n.component.headerCSS+'"\n    ',n.component.collapsible&&(t+='\n    tabindex="0"\n    '),t+='\n    role="button"\n    aria-expanded="'+(0==(e=!n.component.collapsible||!n.collapsed)?"":e)+'"\n    aria-controls="'+(null==(e=n.instance.id)?"":e)+"-"+(null==(e=n.component.key)?"":e)+'"\n    ref="header"\n  >\n    ',t+='<div class="step-label d-flex align-items-center '+(n.component.collapsible?"justify-content-between":"")+'">\n<div class="'+n.component.stepNumberCSS+'">'+(null==(e=n.component.stepNumber)?"":e)+'</div>\n  <span class="ml-2">'+(null==(e=n.component.title||"Step Panel")?"":e)+("true"===n.component.isCompleted?' <span class="text-success"> ✔ </span>':"")+"</span>\n",n.component.collapsible&&(t+='  <div class="toggle-icon" style="transform: '+(n.collapsed?"rotate(180deg)":"rotate(0deg)")+';">\n<i class="fa fa-chevron-down"></i>  </div>\n'),t+="</div>\n",t+="\n  </div>\n"),t+="\n  ",n.collapsed&&!n.builder||(t+='\n  <div class="card-body" ref="'+(null==(e=n.nestedKey)?"":e)+'" id="'+(null==(e=n.instance.id)?"":e)+"-"+(null==(e=n.component.key)?"":e)+'">\n    '+(null==(e=n.children)?"":e)+"\n  </div>\n  "),t+="\n</div>\n",t}};class S extends k{static editForm=i;static schema(...n){return k.schema({type:"customPanel",label:"Custom Panel",key:"customPanel",stepNumber:"1",headerCSS:"custom-panel-header",stepNumberCSS:"step-number",title:"Custom Panel",isCompleted:"false",theme:"default",breadcrumb:"default",components:[],clearOnHide:!1,input:!1,tableView:!1,persistent:!1,...n})}static get builderInfo(){return{title:"Custom Panel",icon:"list-alt",group:"basic",documentation:"/userguide/form-building/layout-components#panel",showPreview:!1,weight:0,schema:S.schema()}}get templateName(){return"myTemplate"}constructor(...n){super(...n),this.handleNextClick=this.handleNextClick.bind(this),this.validatePanel=this.validatePanel.bind(this)}handleNextClick(){const n=this.validatePanel();return n.length>0?(this.setAlert("danger",n,{classes:"alert alert-danger"}),!1):(this.emit("next"),!0)}validatePanel(){const n=[];return this.component&&this.component.components&&(e=>{e.forEach((e=>{if(!e.columns&&!e.components){const t=this.getComponent(e.key);t&&!t.checkValidity()&&n.push({message:`${e.label||e.key} is required.`,component:t,componentKey:e.key})}}))})(this.component.components),n}}const C=[{weight:1,type:"textfield",label:"Information",tooltip:"Enter the information to be displayed",key:"information",input:!0,defaultValue:"information"},{weight:2,type:"textfield",label:"Icon",tooltip:"Enter the icon to be displayed",key:"icon",input:!0,defaultValue:"fa fa-info-circle"},{weight:3,type:"textfield",label:"Color",tooltip:"Enter the color to be displayed",key:"color",input:!0,defaultValue:"green"}],z=Formio.Components.components.field.editForm;function A(...n){return z([{key:"display",components:C}],...n)}var j=t(406),I={};I.styleTagTransform=h(),I.setAttributes=m(),I.insert=d().bind(null,"head"),I.domAPI=c(),I.insertStyleElement=b(),l()(j.A,I),j.A&&j.A.locals&&j.A.locals;const P=Formio.Components.components.field;class F extends P{static editForm=A;static schema(...n){return P.schema({type:"infoComponent",label:"Information",key:"infoComponent",title:"Information",theme:"default",information:"Information",icon:"𝓲",color:"green",breadcrumb:"default",components:[],clearOnHide:!1,input:!1,tableView:!1,persistent:!1,...n})}static get builderInfo(){return{title:"Information",icon:"info-circle",group:"basic",documentation:"/userguide/form-building/layout-components#InfoComponent",showPreview:!1,weight:30,schema:F.schema()}}render(n){const e=this.component.icon&&this.component.icon.startsWith("fa")?`<i class="fa ${this.component.icon}"></i>`:this.component.icon||"Info";return super.render(`\n      <div class="info-component-wrapper-${this.component.color}">\n        <div class="info-component-header-${this.component.color}">\n          <div class="info-icon">\n            ${e}\n          </div>\n        </div>\n        <div class="info-component-content">\n          ${this.component.information}\n        </div>\n      </div>\n    `)}}Formio.use([{components:{customPanel:S,infoComponent:F}}])})();