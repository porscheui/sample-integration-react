(this["webpackJsonpsample-integration-react-typescript"]=this["webpackJsonpsample-integration-react-typescript"]||[]).push([[0],{189:function(e,t,a){e.exports=a(395)},388:function(e,t,a){var n={"./p-button-pure.entry.js":[399,5],"./p-button.entry.js":[400,6],"./p-checkbox-wrapper.entry.js":[401,11],"./p-content-wrapper.entry.js":[402,12],"./p-divider.entry.js":[403,13],"./p-fieldset-wrapper.entry.js":[404,14],"./p-flex-item.entry.js":[405,15],"./p-flex.entry.js":[406,16],"./p-grid-item.entry.js":[407,17],"./p-grid.entry.js":[408,18],"./p-headline.entry.js":[409,19],"./p-icon_2.entry.js":[410,20],"./p-link-pure.entry.js":[411,7],"./p-link-social.entry.js":[412,8],"./p-link.entry.js":[413,9],"./p-marque.entry.js":[414,21],"./p-pagination.entry.js":[415,10],"./p-radio-button-wrapper.entry.js":[416,22],"./p-select-wrapper.entry.js":[417,23],"./p-spinner.entry.js":[418,24],"./p-text-field-wrapper.entry.js":[419,25],"./p-text-list-item.entry.js":[420,26],"./p-text-list.entry.js":[421,27],"./p-textarea-wrapper.entry.js":[422,28]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=388,e.exports=r},389:function(e,t,a){},394:function(e,t,a){var n={"./context-consumer_34.entry.js":[426,31]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=394,e.exports=r},395:function(e,t,a){"use strict";a.r(t);a(190),a(199);var n=a(0),r=a.n(n),l=a(89),c=a.n(l),i=a(72),m=a(14),s=a(2),o=(a(389),a(40)),u=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(1),i=Object(o.a)(c,2),m=i[0],u=i[1],E=Object(n.useState)(!1),d=Object(o.a)(E,2),p=d[0],h=d[1];return r.a.createElement(s.g,null,r.a.createElement(s.h,{size:"12"},r.a.createElement(s.i,{variant:"headline-4"},"Buttons")),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.d,{className:"divider"})),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.a,{disabled:p,onClick:function(){l(!0),h((function(e){return!e}))}},"Submit")),r.a.createElement(s.h,{size:"12",className:"contentWrapperSmall"},r.a.createElement(s.b,{disabled:!p,onClick:function(){l(!1),h((function(e){return!e}))}},"Dismiss")),a&&r.a.createElement(s.h,{size:"12",className:"contentWrapperSmall"},r.a.createElement(s.i,{variant:"headline-4"},"Headline appears through Button click")),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.d,{className:"divider"})),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.i,{variant:"headline-4"},"Links")),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.d,{className:"divider"})),r.a.createElement(s.h,{size:"12"},r.a.createElement("a",{href:"https://www.porsche.com",className:"removeLinkStyle"},r.a.createElement(s.k,null,"porsche.com"))),r.a.createElement(s.h,{size:"12",className:"contentWrapperBig"},r.a.createElement("a",{href:"#hashTest",className:"removeLinkStyle"},r.a.createElement(s.l,null,"Test PLinkPure")),r.a.createElement(s.l,{href:"#propHashTest"},"Test propHash")),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.d,{className:"divider"})),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.i,{variant:"headline-4"},"Icons")),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.d,{className:"divider"})),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.p,{size:"small"})),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.j,{size:"medium",name:"highway",role:"img"})),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.d,{className:"divider"})),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.i,{variant:"headline-4"},"You are on Page ",m," Page")),r.a.createElement(s.h,{size:"12"},r.a.createElement(s.m,{"data-testid":"pagination",totalItemsCount:11,itemsPerPage:3,activePage:m,onPageChange:function(e){u(e.detail.page)}})))},E=function(){var e=Object(n.useState)("Change this Headline by selecting"),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),m=i[0],u=i[1],E=Object(n.useState)(!1),d=Object(o.a)(E,2),p=d[0],h=d[1],f=Object(n.useState)("Change this Headline by typing"),v=Object(o.a)(f,2),b=v[0],y=v[1],j=function(e){y(e.target.value)};return r.a.createElement(s.e,{direction:"column"},r.a.createElement(s.f,null,r.a.createElement(s.i,{variant:"headline-3"},"Form examples")),r.a.createElement(s.f,null,r.a.createElement(s.d,{className:"divider"})),r.a.createElement(s.f,null,r.a.createElement(s.i,{variant:"headline-4"},a),r.a.createElement("form",null,r.a.createElement(s.o,null,r.a.createElement("select",{"data-testid":"select",value:a,onChange:function(e){return function(e){l(e.target.value)}(e)}},r.a.createElement("option",{value:"Headline A"},"A"),r.a.createElement("option",{value:"Headline B"},"B"),r.a.createElement("option",{value:"Headline C"},"C"))))),r.a.createElement(s.f,null,r.a.createElement(s.d,{className:"divider"})),r.a.createElement(s.f,null,m?r.a.createElement(s.i,{variant:"headline-4"},"Checkbox Works"):"",r.a.createElement(s.c,{label:"Some label",hideLabel:!1},r.a.createElement("input",{"data-testid":"checkbox",type:"checkbox",name:"TestBox",onInput:function(e){u(!m)}}))),r.a.createElement(s.f,{className:"contentWrapperSmall"},p?r.a.createElement(s.i,{variant:"headline-4"},"Radio Works"):"",r.a.createElement(s.n,{label:"Some label",hideLabel:!1},r.a.createElement("input",{"data-testid":"radiobutton",type:"radio",name:"RadioButton",onInput:function(e){h(!0)}}))),r.a.createElement(s.f,null,r.a.createElement(s.d,{className:"divider"})),r.a.createElement(s.f,null,r.a.createElement("form",null,r.a.createElement(s.r,{label:"Test TextArea",hideLabel:!1},r.a.createElement("textarea",{name:"Testarea"})))),r.a.createElement(s.f,{className:"contentWrapperSmall"},r.a.createElement(s.i,{variant:"headline-4"},b),r.a.createElement(s.q,{label:"Test TextField",hideLabel:!1},r.a.createElement("input",{"data-testid":"input",type:"text",name:"Textfield",onChange:function(e){return j(e)}}))),r.a.createElement(s.f,{className:"contentWrapperSmall"},r.a.createElement("form",null,r.a.createElement(s.f,null,r.a.createElement(s.q,null,r.a.createElement("span",{slot:"label"},"Some label with a"," ",r.a.createElement("a",{"data-testid":"slottedHref",href:"https://designsystem.porsche.com"},"Slotted Link"),"."),r.a.createElement("input",{"data-testid":"slottedInput",type:"text","aria-invalid":!0,name:"some-name",onChange:function(e){return j(e)}}))))))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("phn-header",{env:"preview",style:{position:"absolute",left:0,right:0}}),r.a.createElement("div",{style:{paddingTop:150}},r.a.createElement("div",null,r.a.createElement(s.a,null,"Some PButton")),r.a.createElement("div",null,r.a.createElement(s.l,null,"Some PLinkPure")),r.a.createElement("div",null,r.a.createElement(s.j,{name:"configurate"}),r.a.createElement(s.j,{name:"compare"}),r.a.createElement(s.j,{name:"search"}))))},p=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"pageLayout"},r.a.createElement(s.g,null,r.a.createElement(s.h,{size:12},r.a.createElement(s.i,{variant:"headline-2",align:"center"},"Example usage of the Porsche-Design-System React")),r.a.createElement(s.h,{size:12},r.a.createElement(s.d,{className:"divider"})),r.a.createElement(s.h,{size:12},r.a.createElement(i.b,{to:"/collection",className:"removeLinkStyle"},r.a.createElement(s.l,null,"Components Collection")),r.a.createElement(i.b,{to:"/forms",className:"removeLinkStyle"},r.a.createElement(s.l,null,"Forms")),r.a.createElement(i.b,{to:"/phn-header",className:"removeLinkStyle"},r.a.createElement(s.l,null,"Phn Header"))),r.a.createElement(s.h,{size:12},r.a.createElement(s.d,{className:"divider"}))),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0},r.a.createElement(m.a,{to:"/collection"})),r.a.createElement(m.b,{path:"/collection"},r.a.createElement(u,null)),r.a.createElement(m.b,{path:"/forms"},r.a.createElement(E,null)),r.a.createElement(m.b,{path:"/phn-header"},r.a.createElement(d,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(122);c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Object(h.a)().then((function(){Object(h.b)(window)}))}},[[189,2,3]]]);
//# sourceMappingURL=main.659219d3.chunk.js.map