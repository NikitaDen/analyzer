(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[3],{213:function(e,t,a){},214:function(e,t,a){e.exports=a.p+"static/media/clear-dark.4def21f1.svg"},215:function(e,t,a){e.exports=a.p+"static/media/add-dark.24833611.svg"},216:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a(31),s=a(4),i=a(45),u=(a(213),a(214)),l=a.n(u),g=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],u=function(){e.deleteCategoryThunkCreator(e.id)},g=function(){o(!1)};return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(i.a,{className:"confirm show",title:"Are you sure?",func:u,close:g}):r.a.createElement(i.a,{className:"confirm",title:"Are you sure?",func:u,close:g}),r.a.createElement("div",{key:e.name,className:"category"},r.a.createElement("p",null,e.name),r.a.createElement("button",{className:"button",onClick:function(){o(!0)}},r.a.createElement("img",{src:l.a,alt:""}))))},m=a(215),d=a.n(m),C=(a(216),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),u=Object(s.a)(i,2),l=u[0],m=u[1];Object(n.useEffect)((function(){e.getCategoriesThunkCreator()}),[e.isAuth]);return r.a.createElement("div",{className:"settings__item categories"},r.a.createElement("h3",null,"Categories"),r.a.createElement("div",{className:"categories__form"},r.a.createElement("input",{onKeyPress:function(t){"Enter"===t.key&&c&&c.replace(/\s+/g,"")?(e.addCategoriesThunkCreator(c,Date.now()),o("")):m(!0)},placeholder:"Products, Bills, etc.",autoFocus:!0,className:l?"category-name category-name--error":"category-name",type:"text",value:c,onBlur:function(){return m(!1)},onChange:function(e){o(e.currentTarget.value),l&&m(!1)}}),r.a.createElement("button",{className:"button",onClick:function(){c&&c.replace(/\s+/g,"")?(e.addCategoriesThunkCreator(c,Date.now()),o("")):m(!0)}},r.a.createElement("img",{src:d.a,alt:""}))),e.categories.map((function(t){return r.a.createElement(g,{key:t.id,name:t.name,id:t.id,deleteCategoryThunkCreator:e.deleteCategoryThunkCreator})})))}),f=a(5),h=a(32),k=a(49);t.default=Object(c.b)((function(e){return{categories:e.settings.categories,isAuth:e.account.isAuth,isLoading:e.account.isLoading}}),{addCategoriesThunkCreator:o.a,deleteCategoryThunkCreator:o.c,getUser:f.b,getCategoriesThunkCreator:o.e})((function(e){return Object(n.useEffect)((function(){e.getUser()}),[]),e.isAuth?r.a.createElement("div",{className:"settings"},r.a.createElement("h2",null,"Settings"),e.isLoading?r.a.createElement(k.a,null):r.a.createElement(C,{isAuth:e.isAuth,deleteCategoryThunkCreator:e.deleteCategoryThunkCreator,addCategoriesThunkCreator:e.addCategoriesThunkCreator,getCategoriesThunkCreator:e.getCategoriesThunkCreator,categories:e.categories})):r.a.createElement(h.a,{to:"login"})}))}}]);
//# sourceMappingURL=3.bb462170.chunk.js.map