(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[3],{346:function(e,t,a){},347:function(e,t,a){e.exports=a.p+"static/media/clear-dark.4def21f1.svg"},348:function(e,t,a){e.exports=a.p+"static/media/add-dark.24833611.svg"},349:function(e,t,a){},350:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),o=a(24),s=a(4),u=a(54),i=(a(346),a(347)),l=a.n(i),g=function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],i=function(){e.deleteCategoryThunkCreator(e.id)},g=function(){o(!1)};return n.a.createElement(n.a.Fragment,null,c?n.a.createElement(u.a,{className:"confirm show",title:"Are you sure?",func:i,close:g}):n.a.createElement(u.a,{className:"confirm",title:"Are you sure?",func:i,close:g}),n.a.createElement("div",{key:e.name,className:"category"},n.a.createElement("p",null,e.name),n.a.createElement("button",{className:"button",onClick:function(){o(!0)}},n.a.createElement("img",{src:l.a,alt:""}))))},m=a(348),d=a.n(m),C=(a(349),function(e){var t=Object(r.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],u=Object(r.useState)(!1),i=Object(s.a)(u,2),l=i[0],m=i[1];Object(r.useEffect)((function(){e.getCategoriesThunkCreator()}),[e.isAuth]),Object(r.useEffect)((function(){e.getCategoriesThunkCreator()}),[]);return n.a.createElement("div",{className:"settings__item categories"},n.a.createElement("h3",null,"Categories"),n.a.createElement("div",{className:"categories__form"},n.a.createElement("input",{onKeyPress:function(t){"Enter"===t.key&&c&&c.replace(/\s+/g,"")?(e.addCategoriesThunkCreator(c,Date.now()),o("")):m(!0)},placeholder:"Products, Bills, etc.",autoFocus:!0,className:l?"category-name category-name--error":"category-name",type:"text",value:c,onBlur:function(){return m(!1)},onChange:function(e){o(e.currentTarget.value),l&&m(!1)}}),n.a.createElement("button",{className:"button",onClick:function(){c&&c.replace(/\s+/g,"")?(e.addCategoriesThunkCreator(c,Date.now()),o("")):m(!0)}},n.a.createElement("img",{src:d.a,alt:""}))),e.categories.map((function(t){return n.a.createElement(g,{key:t.id,name:t.name,id:t.id,deleteCategoryThunkCreator:e.deleteCategoryThunkCreator})})))}),f=a(6),h=a(35),k=a(42),E=a(16),b=a(64);t.default=Object(c.b)((function(e){return{categories:Object(b.a)(e),isAuth:Object(E.b)(e),isLoading:Object(E.c)(e)}}),{addCategoriesThunkCreator:o.a,deleteCategoryThunkCreator:o.c,getUser:f.b,getCategoriesThunkCreator:o.e})((function(e){return Object(r.useEffect)((function(){e.getUser()}),[]),e.isAuth?n.a.createElement("div",{className:"settings"},n.a.createElement("h2",null,"Settings"),e.isLoading?n.a.createElement(k.a,null):n.a.createElement(C,{isAuth:e.isAuth,deleteCategoryThunkCreator:e.deleteCategoryThunkCreator,addCategoriesThunkCreator:e.addCategoriesThunkCreator,getCategoriesThunkCreator:e.getCategoriesThunkCreator,categories:e.categories})):n.a.createElement(h.a,{to:"login"})}))}}]);
//# sourceMappingURL=3.b8005f7b.chunk.js.map