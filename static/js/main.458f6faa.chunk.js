(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{11:function(n){n.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},12:function(n){n.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},20:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var c,a,i,r,s,d,o,b,l,p,x,j,f,u=t(1),h=t.n(u),O=t(10),g=t.n(O),m=(t(20),t(4)),w=t(6),y=t(11),v=t(12),k=t(3),N=t(2),U=Object(N.a)(c||(c=Object(k.a)(["\n  *, :after, :before {\n    box-sizing: border-box;\n};\n"]))),J=N.b.section(a||(a=Object(k.a)(["\n  padding: 40px;\n"]))),M=N.b.div(i||(i=Object(k.a)(["\n  &.description {\n    padding: 30px;\n    text-align: center;\n  }\n\n  &.profile-card {\n    width: calc(100% / 3);\n    box-shadow: 8px 0px 0px 0px #dcd0c0, 0px 8px 0px 0px #b1938b,\n      -8px 0px 0px 0px #4e4e56, 0px 0px 0px 8px #da635d,\n      5px 5px 15px 5px rgba(165, 230, 255, 0);\n  }\n"]))),S=N.b.img(r||(r=Object(k.a)(["\n  width: 70px;\n  border-radius: 50%;\n"]))),z=N.b.p(s||(s=Object(k.a)(["\n  margin: 0;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n\n  &: nth-child(2) {\n    margin-top: 8px;\n  }\n  &: not(: last-child) {\n    margin-bottom: 8px;\n  }\n"])),(function(n){return n.name?"18px":"14px"}),(function(n){return n.name?"600":"400"}),(function(n){return n.name?"black":"rgb(148 165 203)"})),G=N.b.ul(d||(d=Object(k.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n"]))),L=N.b.li(o||(o=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: calc(100% / 3);\n\n  padding: 20px;\n  background-color: #92c2c2;\n  border: 1px solid #aeb5b5;\n"]))),q=N.b.span(b||(b=Object(k.a)(["\n  &.label {\n    color: white;\n    font-size: 14px;\n  }\n  &.quantity {\n    font-weight: 700;\n  }\n"]))),A=t(0),C=function(n){var e=n.followers,t=n.views,c=n.likes;return Object(A.jsxs)(G,{children:[Object(A.jsxs)(L,{children:[Object(A.jsx)(q,{className:"label",children:"Followers"}),Object(A.jsx)(q,{className:"quantity",children:e})]}),Object(A.jsxs)(L,{children:[Object(A.jsx)(q,{className:"label",children:"Views"}),Object(A.jsx)(q,{className:"quantity",children:t})]}),Object(A.jsxs)(L,{children:[Object(A.jsx)(q,{className:"label",children:"Likes"}),Object(A.jsx)(q,{className:"quantity",children:c})]})]})},D=function(n){var e=n.src,t=n.name,c=n.tag,a=n.location,i=n.followers,r=n.views,s=n.likes;return Object(A.jsxs)(J,{children:[Object(A.jsx)(U,{}),Object(A.jsxs)(M,{className:"profile-card",children:[Object(A.jsxs)(M,{className:"description",children:[Object(A.jsx)(S,{src:e,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",class:"avatar"}),Object(A.jsx)(z,{name:!0,children:t}),Object(A.jsx)(z,{class:"tag",children:c}),Object(A.jsx)(z,{class:"location",children:a})]}),Object(A.jsx)(C,{followers:i,views:r,likes:s})]})]})},P=N.b.section(l||(l=Object(k.a)(["\npadding 40px"]))),R=N.b.h2(p||(p=Object(k.a)(["\n  margin: 0;\n  display: flex;\n  height: 200px;\n  width: calc(100% / 2);\n  justify-content: center;\n  align-items: center;\n"]))),T=N.b.ul(x||(x=Object(k.a)(["\n  display: flex;\n  width: calc(100% / 2);\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n\n  box-shadow: 0px 20px 0px -10px #ffffff, 0px -20px 0px -10px #ffffff,\n    20px 0px 0px -10px #ffffff, -20px 0px 0px -10px #ffffff,\n    0px 0px 0px 6px #bd6716a1, 5px 5px 15px 5px rgb(165 230 255 / 0%);\n"]))),F=N.b.li(j||(j=Object(k.a)(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 50px;\n  height: auto;\n\n  color: white;\n  background-color: ",";\n"])),(function(n){return n.color})),K=N.b.span(f||(f=Object(k.a)(["\n  font-size: ",";\n"])),(function(n){return n.percentage?"18px":"11px"}));var W,Y,B,E,H,I,X,V,Q,Z,$,_,nn=function(n,e){return Math.ceil(Math.random()*(e-n)+n)},en=function(n){var e=n.stats;return Object(A.jsx)(T,{children:e.map((function(n){var e=n.id,t=n.label,c=n.percentage,a="rgb(\n            ".concat(nn(0,255),",\n            ").concat(nn(0,255),",\n            ").concat(nn(0,255),"\n        )");return Object(A.jsxs)(F,{color:a,children:[Object(A.jsx)(K,{children:t}),Object(A.jsxs)(K,{percentage:!0,children:[c,"%"]})]},e)}))})},tn=function(n){var e=n.title,t=n.stats;return Object(A.jsxs)(P,{children:[e&&Object(A.jsx)(R,{children:e}),Object(A.jsx)(en,{stats:t})]})},cn=N.b.section(W||(W=Object(k.a)(["\n  padding: 40px;\n"]))),an=N.b.ul(Y||(Y=Object(k.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: calc(100% / 2);\n"]))),rn=N.b.li(B||(B=Object(k.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  padding: 10px 15px;\n  box-shadow: 0px 5px 9px -2px #000000;\n\n  &: not(: last-child) {\n    margin-bottom: 20px;\n  }\n"]))),sn=N.b.span(E||(E=Object(k.a)(["\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-color: ",";\n  border-radius: 50%;\n"])),(function(n){return n.online?"green":"red"})),dn=N.b.img(H||(H=Object(k.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 20%;\n  margin-left: 15px;\n  margin-right: 15px;\n"]))),on=N.b.p(I||(I=Object(k.a)(["\n  font-weight: 500;\n  font-size: 20px;\n"]))),bn=function(n){return n.friends.map((function(n){var e=n.avatar,t=n.name,c=n.isOnline,a=n.id;return Object(A.jsxs)(rn,{class:"item",children:[c?Object(A.jsx)(sn,{online:!0}):Object(A.jsx)(sn,{}),Object(A.jsx)(dn,{src:e,alt:"\u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(A.jsx)(on,{class:"name",children:t})]},a)}))},ln=function(n){var e=n.friends;return Object(A.jsx)(cn,{children:Object(A.jsx)(an,{children:Object(A.jsx)(bn,{friends:e})})})},pn=Object(N.a)(X||(X=Object(k.a)(["\n  *, :after, :before {\n    box-sizing: border-box;\n};\n"]))),xn=N.b.section(V||(V=Object(k.a)(["\n  padding: 40px;\n"]))),jn=N.b.table(Q||(Q=Object(k.a)(["\n  width: calc(100% / 3);\n  box-shadow: 0px 10px 13px -7px #000000,\n    5px 5px 15px 5px rgba(165, 230, 255, 0);\n"]))),fn=N.b.th(Z||(Z=Object(k.a)(["\n  font-weight: 600;\n  color: white;\n  background-color: #519aa5;\n  padding: 10px 15px;\n\n  &: not(: last-child) {\n    border-right: 1px solid white;\n  }\n"]))),un=N.b.td($||($=Object(k.a)(["\n  padding: 10px 15px;\n  &: nth-child(2n +1) {\n    border-right: 1px solid #519aa5;\n    border-left: 1px solid #519aa5;\n  }\n"]))),hn=N.b.tr(_||(_=Object(k.a)(["\n  border-right: 1px solid #519aa5;\n    border-left: 1px solid #519aa5;\n    \n  &: not:(last-child) {\n      border-bottom:  1px solid #b8aeae;\n  }\n  &: nth-child(2n) {\n    background-color: #adc4c4;\n  }\n"]))),On=function(n){var e=n.transctions;return Object(A.jsxs)(xn,{children:[Object(A.jsx)(pn,{}),Object(A.jsxs)(jn,{children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)(fn,{children:"Type"}),Object(A.jsx)(fn,{children:"Amount"}),Object(A.jsx)(fn,{children:"Currency"})]})}),Object(A.jsx)("tbody",{children:e.map((function(n){var e=n.id,t=n.type,c=n.amount,a=n.currency;return Object(A.jsxs)(hn,{children:[Object(A.jsx)(un,{children:t}),Object(A.jsx)(un,{children:c}),Object(A.jsx)(un,{children:a})]},e)}))})]})]})},gn=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(D,{src:m.avatar,name:m.name,location:m.location,tag:m.tag,followers:m.stats.followers,views:m.stats.views,likes:m.stats.likes}),Object(A.jsx)(tn,{stats:w}),Object(A.jsx)(tn,{title:"Upload stats",stats:w}),Object(A.jsx)(ln,{friends:y}),Object(A.jsx)(On,{transctions:v})]})};g.a.render(Object(A.jsx)(h.a.StrictMode,{children:Object(A.jsx)(gn,{})}),document.getElementById("root"))},4:function(n){n.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},6:function(n){n.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')}},[[26,1,2]]]);
//# sourceMappingURL=main.458f6faa.chunk.js.map