(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[3],{210:function(e,t,a){},211:function(e,t,a){e.exports=a.p+"static/media/clear-dark.4def21f1.svg"},212:function(e,t,a){e.exports=a.p+"static/media/add-dark.24833611.svg"},213:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a(30),s=a(4),u=a(45),i=(a(210),a(211)),l=a.n(i),g=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],i=function(){e.deleteCategoryThunkCreator(e.id)},g=function(){o(!1)};return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(u.a,{className:"confirm show",title:"Are you sure?",func:i,close:g}):r.a.createElement(u.a,{className:"confirm",title:"Are you sure?",func:i,close:g}),r.a.createElement("div",{key:e.name,className:"category"},r.a.createElement("p",null,e.name),r.a.createElement("button",{className:"button",onClick:function(){o(!0)}},r.a.createElement("img",{src:l.a,alt:""}))))},m=a(212),C=a.n(m),d=(a(213),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),i=Object(s.a)(u,2),l=i[0],m=i[1];Object(n.useEffect)((function(){e.getCategoriesThunkCreator()}),[e.isAuth]);return r.a.createElement("div",{className:"settings__item categories"},r.a.createElement("h3",null,"Categories"),r.a.createElement("div",{className:"categories__form"},r.a.createElement("input",{className:l?"category-name category-name--error":"category-name",type:"text",value:c,onBlur:function(){return m(!1)},onChange:function(e){o(e.currentTarget.value),l&&m(!1)}}),r.a.createElement("button",{className:"button",onClick:function(){c?(e.addCategoriesThunkCreator(c,Date.now()),o("")):m(!0)}},r.a.createElement("img",{src:C.a,alt:""}))),e.categories.map((function(t){return r.a.createElement(g,{key:t.id,name:t.name,id:t.id,deleteCategoryThunkCreator:e.deleteCategoryThunkCreator})})))}),f=a(7),h=a(31);t.default=Object(c.b)((function(e){return{categories:e.settings.categories,isAuth:e.account.isAuth}}),{addCategoriesThunkCreator:o.a,deleteCategoryThunkCreator:o.c,getUser:f.b,getCategoriesThunkCreator:o.e})((function(e){return Object(n.useEffect)((function(){e.getUser()}),[]),e.isAuth?r.a.createElement("div",{className:"settings"},r.a.createElement("h2",null,"Settings"),r.a.createElement(d,{isAuth:e.isAuth,deleteCategoryThunkCreator:e.deleteCategoryThunkCreator,addCategoriesThunkCreator:e.addCategoriesThunkCreator,getCategoriesThunkCreator:e.getCategoriesThunkCreator,categories:e.categories})):r.a.createElement(h.a,{to:"login"})}))}}]);
//# sourceMappingURL=3.1484b2e6.chunk.js.map