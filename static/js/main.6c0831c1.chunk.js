(this["webpackJsonpsample-integration-react-typescript"]=this["webpackJsonpsample-integration-react-typescript"]||[]).push([[0],{188:function(e,t,a){e.exports=a(395)},387:function(e,t,a){var n={"./p-button-pure.entry.js":[399,4],"./p-button.entry.js":[400,13],"./p-checkbox-wrapper.entry.js":[401,9],"./p-content-wrapper.entry.js":[402,21],"./p-divider.entry.js":[403,22],"./p-fieldset-wrapper.entry.js":[404,23],"./p-flex-item.entry.js":[405,24],"./p-flex.entry.js":[406,25],"./p-grid-item.entry.js":[407,26],"./p-grid.entry.js":[408,27],"./p-headline.entry.js":[409,18],"./p-icon_2.entry.js":[410,6],"./p-link-pure.entry.js":[411,5],"./p-link-social.entry.js":[412,15],"./p-link.entry.js":[413,16],"./p-marque.entry.js":[414,17],"./p-pagination.entry.js":[415,14],"./p-radio-button-wrapper.entry.js":[416,10],"./p-select-wrapper.entry.js":[417,11],"./p-spinner.entry.js":[418,28],"./p-text-field-wrapper.entry.js":[419,7],"./p-text-list-item.entry.js":[420,19],"./p-text-list.entry.js":[421,29],"./p-textarea-wrapper.entry.js":[422,12]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=387,e.exports=r},388:function(e,t,a){},389:function(e,t,a){},394:function(e,t,a){var n={"./phn-back-button_43.entry.js":[426,31]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=394,e.exports=r},395:function(e,t,a){"use strict";a.r(t);a(189),a(198);var n=a(0),r=a.n(n),l=a(85),c=a.n(l),i=a(120),m=a(14),o=a(2),s=(a(388),a(27)),u=["text","checkbox","button"],d=[25,50,100],E=a(116),p=(a(389),[{name:"Collection",path:"/collection",component:function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(1),i=Object(s.a)(c,2),m=i[0],u=i[1],d=Object(n.useState)(!1),E=Object(s.a)(d,2),p=E[0],h=E[1];return r.a.createElement(o.g,null,r.a.createElement(o.h,{size:"12"},r.a.createElement(o.i,{variant:"headline-4"},"Buttons")),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.d,{className:"divider"})),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.a,{disabled:p,onClick:function(){l(!0),h((function(e){return!e}))}},"Submit")),r.a.createElement(o.h,{size:"12",className:"contentWrapperSmall"},r.a.createElement(o.b,{disabled:!p,onClick:function(){l(!1),h((function(e){return!e}))}},"Dismiss")),a&&r.a.createElement(o.h,{size:"12",className:"contentWrapperSmall"},r.a.createElement(o.i,{variant:"headline-4"},"Headline appears through Button click")),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.d,{className:"divider"})),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.i,{variant:"headline-4"},"Links")),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.d,{className:"divider"})),r.a.createElement(o.h,{size:"12"},r.a.createElement("a",{href:"https://www.porsche.com",className:"removeLinkStyle"},r.a.createElement(o.k,null,"porsche.com"))),r.a.createElement(o.h,{size:"12",className:"contentWrapperBig"},r.a.createElement("a",{href:"#hashTest",className:"removeLinkStyle"},r.a.createElement(o.l,null,"Test PLinkPure")),r.a.createElement(o.l,{href:"#propHashTest"},"Test propHash")),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.d,{className:"divider"})),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.i,{variant:"headline-4"},"Icons")),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.d,{className:"divider"})),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.p,{size:"small"})),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.j,{size:"medium",name:"highway",role:"img"})),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.d,{className:"divider"})),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.i,{variant:"headline-4"},"You are on Page ",m," Page")),r.a.createElement(o.h,{size:"12"},r.a.createElement(o.m,{"data-testid":"pagination",totalItemsCount:11,itemsPerPage:3,activePage:m,onPageChange:function(e){u(e.detail.page)}})))}},{name:"Forms",path:"/forms",component:function(){var e=Object(n.useState)("Change this Headline by selecting"),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),m=i[0],u=i[1],d=Object(n.useState)(!1),E=Object(s.a)(d,2),p=E[0],h=E[1],f=Object(n.useState)("Change this Headline by typing"),v=Object(s.a)(f,2),b=v[0],y=v[1],g=function(e){y(e.target.value)};return r.a.createElement(o.e,{direction:"column"},r.a.createElement(o.f,null,r.a.createElement(o.i,{variant:"headline-3"},"Form examples")),r.a.createElement(o.f,null,r.a.createElement(o.d,{className:"divider"})),r.a.createElement(o.f,null,r.a.createElement(o.i,{variant:"headline-4"},a),r.a.createElement("form",null,r.a.createElement(o.o,null,r.a.createElement("select",{"data-testid":"select",value:a,onChange:function(e){return function(e){l(e.target.value)}(e)}},r.a.createElement("option",{value:"Headline A"},"A"),r.a.createElement("option",{value:"Headline B"},"B"),r.a.createElement("option",{value:"Headline C"},"C"))))),r.a.createElement(o.f,null,r.a.createElement(o.d,{className:"divider"})),r.a.createElement(o.f,null,m?r.a.createElement(o.i,{variant:"headline-4"},"Checkbox Works"):"",r.a.createElement(o.c,{label:"Some label",hideLabel:!1},r.a.createElement("input",{"data-testid":"checkbox",type:"checkbox",name:"TestBox",onInput:function(e){u(!m)}}))),r.a.createElement(o.f,{className:"contentWrapperSmall"},p?r.a.createElement(o.i,{variant:"headline-4"},"Radio Works"):"",r.a.createElement(o.n,{label:"Some label",hideLabel:!1},r.a.createElement("input",{"data-testid":"radiobutton",type:"radio",name:"RadioButton",onInput:function(e){h(!0)}}))),r.a.createElement(o.f,null,r.a.createElement(o.d,{className:"divider"})),r.a.createElement(o.f,null,r.a.createElement("form",null,r.a.createElement(o.s,{label:"Test TextArea",hideLabel:!1},r.a.createElement("textarea",{name:"Testarea"})))),r.a.createElement(o.f,{className:"contentWrapperSmall"},r.a.createElement(o.i,{variant:"headline-4"},b),r.a.createElement(o.r,{label:"Test TextField",hideLabel:!1},r.a.createElement("input",{"data-testid":"input",type:"text",name:"Textfield",onChange:function(e){return g(e)}}))),r.a.createElement(o.f,{className:"contentWrapperSmall"},r.a.createElement("form",null,r.a.createElement(o.f,null,r.a.createElement(o.r,null,r.a.createElement("span",{slot:"label"},"Some label with a"," ",r.a.createElement("a",{"data-testid":"slottedHref",href:"https://designsystem.porsche.com"},"Slotted Link"),"."),r.a.createElement("input",{"data-testid":"slottedInput",type:"text","aria-invalid":!0,name:"some-name",onChange:function(e){return g(e)}}))))))}},{name:"Performance",path:"/performance",component:function(){var e=Object(n.useState)("text"),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(25),i=Object(s.a)(c,2),m=i[0],E=i[1],p=Object(n.useState)(!0),h=Object(s.a)(p,2),f=h[0],v=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.g,null,r.a.createElement(o.h,{size:"12"},r.a.createElement(o.i,{variant:"headline-4"},"Choose Element and Count")),r.a.createElement(o.h,{size:"4"},r.a.createElement(o.o,null,r.a.createElement("select",{value:a,onChange:function(e){return l(e.target.value)}},u.map((function(e){return r.a.createElement("option",{key:e,value:e,children:e})}))))),r.a.createElement(o.h,{size:"4"},r.a.createElement(o.o,null,r.a.createElement("select",{value:m,onChange:function(e){return E(+e.target.value)}},d.map((function(e){return r.a.createElement("option",{key:e,value:e,children:e})}))))),r.a.createElement(o.h,{size:"4"},r.a.createElement(o.c,{label:"Render"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return v(e.target.checked)},checked:f})))),r.a.createElement(o.g,{style:{marginTop:"2rem"}},r.a.createElement(o.h,{size:"12"},f&&Array.from(Array(m)).map((function(e,t){return function(e){var t="Lorem Ipsum "+e;switch(a){case"checkbox":return r.a.createElement(o.c,{key:e,label:t},r.a.createElement("input",{type:"checkbox"}));case"button":return r.a.createElement(o.a,{key:e,variant:"primary",children:t});case"text":return r.a.createElement(o.q,{key:e,children:t})}}(t)})))))}},{name:"Phn Header",path:"/phn-header",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("phn-header",{env:"preview",style:{position:"absolute",left:0,right:0}}),r.a.createElement("div",{style:{paddingTop:150}},r.a.createElement("div",null,r.a.createElement(o.a,null,"Some PButton")),r.a.createElement("div",null,r.a.createElement(o.l,null,"Some PLinkPure")),r.a.createElement("div",null,r.a.createElement(o.j,{name:"configurate"}),r.a.createElement(o.j,{name:"compare"}),r.a.createElement(o.j,{name:"search"}))))}},{name:"Utilities",path:"/utilities",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:E.b.medium},"JS utilities"),r.a.createElement("div",{style:{width:50,height:50,background:E.a.brand}}),r.a.createElement("div",{className:"textSizeMedium"},"Scss utilities"),r.a.createElement("div",{style:{width:50,height:50},className:"backgroundColorPds"}))}}]),h=function(){var e;return r.a.createElement(i.a,null,r.a.createElement("div",{className:"pageLayout"},r.a.createElement(o.g,null,r.a.createElement(o.h,{size:12},r.a.createElement(o.i,{variant:"headline-2",align:"center"},"Example usage of the Porsche-Design-System React")),r.a.createElement(o.h,{size:12},r.a.createElement(o.d,{className:"divider"})),r.a.createElement(o.h,{size:12},p.map((function(e){return r.a.createElement(o.l,{key:e.path},r.a.createElement(i.b,{to:e.path,children:e.name}))}))),r.a.createElement(o.h,{size:12},r.a.createElement(o.d,{className:"divider"}))),r.a.createElement(m.d,null,p.map((function(e){return r.a.createElement(m.b,Object.assign({key:e.path},e))})),r.a.createElement(m.b,{path:"/",exact:!0},r.a.createElement(m.a,{to:null===(e=p.find((function(e){return"Collection"===e.name})))||void 0===e?void 0:e.path})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(121);c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Object(f.a)().then((function(){Object(f.b)(window)}))}},[[188,2,3]]]);
//# sourceMappingURL=main.6c0831c1.chunk.js.map