(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/edit.b79003c0.svg"},101:function(e,t,n){e.exports=n.p+"static/media/empty.7cc6dd27.svg"},102:function(e,t,n){e.exports=n.p+"static/media/nodata.2d46dca5.svg"},103:function(e,t,n){e.exports=n.p+"static/media/add.fc75b7e4.svg"},104:function(e,t,n){e.exports=n.p+"static/media/delete.fa5e6b6a.svg"},105:function(e,t,n){e.exports=n.p+"static/media/prev.bb69c57d.svg"},106:function(e,t,n){e.exports=n.p+"static/media/next.a68f625a.svg"},107:function(e,t,n){e.exports=n.p+"static/media/end.4ac8d67a.svg"},108:function(e,t,n){e.exports=n.p+"static/media/start.156456ab.svg"},110:function(e,t,n){e.exports=n(205)},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return E})),n.d(t,"g",(function(){return b})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return y}));var a=n(8),r=n.n(a),c=n(16),s=n(6),o=n(11),i=n(7),l=n(22),u=n(36),m={expenses:[],pages:1,limit:5},p=function(e){return{type:"ADD_EXPENSE",expense:e}},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.c)(!0)),t.prev=1,t.next=4,l.b.addExpense(e);case 4:n(Object(i.c)(!1)),n(p(e)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.response.data);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return{type:"DELETE_EXPENSE",id:e}},f=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.c)(!0)),t.prev=2,t.next=5,l.b.deleteExpense(e);case 5:n(Object(i.c)(!1)),n(g(e)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0.response.data);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return{type:"GET_EXPENSES",expenses:e}},h=function(e){return{type:"GET_PAGES",pages:e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.c)(!0)),t.prev=1,t.next=4,u.get("https://analyzerserver.herokuapp.com/api/history/expenses?page=".concat(e,"&limit=5"),{headers:{token:"".concat(localStorage.getItem("token"))}});case 4:a=t.sent,n(Object(i.c)(!1)),n(E(a.data.expenses)),n(h(a.data.length)),console.log(a.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0.response.data);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e,t,n,a,r,c){return{type:"CHANGE_EXPENSE",id:e,name:t,category:n,spent:a,count:r,price:c}},y=function(e,t,n,a,s,o){return function(){var u=Object(c.a)(r.a.mark((function c(u){return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u(Object(i.c)(!0)),r.prev=1,r.next=4,l.b.changeExpense(e,t,n,a,s,o);case 4:u(Object(i.c)(!1)),u(v(e,t,n,a,s,o)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0.response.data);case 11:case"end":return r.stop()}}),c,null,[[1,8]])})));return function(e){return u.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return Object(o.a)({},e,{expenses:[].concat(Object(s.a)(e.expenses),[Object(o.a)({},t.expense,{date:"".concat((new Date).toLocaleString())})])});case"DELETE_EXPENSE":return Object(o.a)({},e,{expenses:Object(s.a)(e.expenses.filter((function(e){return!t.id.includes(e.id)})))});case"GET_EXPENSES":return Object(o.a)({},e,{expenses:Object(s.a)(t.expenses)});case"GET_PAGES":return Object(o.a)({},e,{pages:Math.ceil(t.pages/e.limit)});case"CHANGE_EXPENSE":return Object(o.a)({},e,{expenses:Object(s.a)(e.expenses.map((function(e){return e.id===t.id?Object(o.a)({},e,{name:t.name,category:t.category,count:t.count,spent:t.spent,price:t.price}):e})))});default:return e}}},141:function(e,t,n){},142:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),s=n.n(c),o=(n(115),n(116),n(19)),i=(n(117),n(93)),l=n.n(i),u=n(94),m=n.n(u),p=n(95),d=n.n(p),g=n(13),f=n(7),E=function(e){return r.a.createElement("button",{disabled:e.disabled,className:e.className,onClick:e.func},r.a.createElement("img",{src:e.image,alt:""}),e.title?r.a.createElement("p",null,e.title):null)},h=n(97),b=n.n(h),v=Object(g.b)((function(e){return{isAuth:e.account.isAuth,infoF:e.account.infoF}}),{userLogoutThunkCreator:f.e})((function(e){return r.a.createElement("nav",null,r.a.createElement(o.b,{to:"/history"},r.a.createElement("p",null,"History"),r.a.createElement("img",{src:l.a,alt:""})),r.a.createElement(o.b,{to:"/analytics"},r.a.createElement("p",null,"Analytics"),r.a.createElement("img",{src:m.a,alt:""})),r.a.createElement(o.b,{to:"/settings"},r.a.createElement("p",null,"Settings"),r.a.createElement("img",{src:d.a,alt:""})),r.a.createElement("p",null,e.infoF),r.a.createElement("div",{className:"login-buttons"},e.isAuth?r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{image:b.a,className:"button button--logout",func:function(){return e.userLogoutThunkCreator()},title:"Logout"})):null))})),y=n(4),O=n(12),j=(n(141),n(50)),x=n.n(j),C=n(30),k=Object(g.b)((function(e){return{expenses:e.history.expenses,categories:e.settings.categories}}),{changeExpense:O.b,getExpensesThunkCreator:O.g,addExpenseThunkCreator:O.a,getCategoriesThunkCreator:C.e})((function(e){var t=Object(a.useState)(""),n=Object(y.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),i=Object(y.a)(o,2),l=i[0],u=i[1],m=Object(a.useState)(0),p=Object(y.a)(m,2),d=p[0],g=p[1],f=Object(a.useState)(1),E=Object(y.a)(f,2),h=E[0],b=E[1],v=Object(a.useState)(!1),O=Object(y.a)(v,2),j=O[0],C=O[1];Object(a.useEffect)((function(){e.getExpensesThunkCreator(),e.getCategoriesThunkCreator()}),[]),Object(a.useEffect)((function(){e.categories.length&&u(e.categories[0].name)}),[e.categories]);return r.a.createElement(r.a.Fragment,null,e.showForm?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form__element"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:j?"name name--error":"name",id:"name",value:c,onChange:function(e){s(e.target.value),C(!1)}})),r.a.createElement("div",{className:"form__element"},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("select",{value:l,onChange:function(e){return u(e.target.value)},name:"category",id:"category"},e.categories.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)})))),r.a.createElement("div",{className:"form__element"},r.a.createElement("label",{htmlFor:"count"},"Count"),r.a.createElement("input",{type:"number",id:"count",value:h,min:0,onChange:function(e){return b(parseInt(e.target.value))}})),r.a.createElement("div",{className:"form__element"},r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{type:"number",id:"price",value:d,min:0,onChange:function(e){return g(parseInt(e.target.value))}})),r.a.createElement("button",{className:"button button--addItem",onClick:function(){c.replace(/\s+/g,"")?(e.addExpenseThunkCreator({category:l,count:h,name:c,price:d,spent:d*h,id:Date.now()}),s(""),b(1),g(0)):C(!0)}},r.a.createElement("img",{src:x.a,alt:""})))):null)})),N=(n(41),n(142),n(39)),w=n.n(N),_=n(51),S=n.n(_),L=n(52),D=n.n(L),I=function(e){var t=Object(a.useState)(!1),n=Object(y.a)(t,2),c=n[0],s=n[1];Object(a.useEffect)((function(){c?e.setFilterInRange(!0):e.setFilterInRange(!1)}),[c]);return r.a.createElement("div",{className:"filter__item filter__item--dates"},r.a.createElement("label",{htmlFor:"sort"},"Dates"),r.a.createElement("div",{className:"dates"},r.a.createElement("div",{className:"dates__element"},r.a.createElement("p",null,"From:"),r.a.createElement(w.a,{maxDate:e.dateHigher,showTimeSelect:!0,onChange:e.onChangeDateLower,selected:e.dateLower})),r.a.createElement("div",{className:"dates__element"},r.a.createElement("p",null,"To:"),r.a.createElement(w.a,{minDate:e.dateLower,showTimeSelect:!0,disabled:e.dateLower>e.dateHigher,onChange:e.onChangeDateHigher,selected:e.dateHigher}))),r.a.createElement("input",{onChange:function(){s(!c),console.log(e.dateHigher),console.log(e.dateLower)},id:"dark-check",type:"checkbox"}),r.a.createElement("label",{className:"dark-mode",htmlFor:"dark-check"},r.a.createElement("div",{className:"toggle",style:c?{backgroundImage:"url(".concat(D.a,")"),backgroundColor:"#FF7777"}:{backgroundImage:"url(".concat(S.a,")")}})))},T=function(e){return r.a.createElement("div",{className:"filter__item filter__item--filter"},r.a.createElement("label",{htmlFor:"filter"},"Filter"),r.a.createElement("select",{value:e.filter,onChange:function(t){return e.setFilter(t.target.value)},name:"filter",id:"filter"},r.a.createElement("option",{value:"noFilter"},"No filter"),e.categories.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)}))))},A=function(e){return r.a.createElement("div",{className:"filter__item filter__item--sort"},r.a.createElement("label",{htmlFor:"sort"},"Sort"),r.a.createElement("select",{value:e.sort,onChange:function(t){return e.setSort(t.target.value)},name:"filter",id:"sort"},e.sortValues.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))},F=function(e){return r.a.createElement("div",{className:"filter__item filter__item--direction"},r.a.createElement("label",{htmlFor:"sort"},"Direction"),r.a.createElement("select",{value:e.descending,onChange:function(t){return e.setDescending(t.target.value)},name:"descending"},r.a.createElement("option",{value:"noSort"},"No sort"),r.a.createElement("option",{value:"Ascending"},"Ascending"),r.a.createElement("option",{value:"Descending"},"Descending")))},R=function(e){return r.a.createElement("div",{className:"filter"},r.a.createElement(T,{filter:e.filter,categories:e.categories,setFilter:e.setFilter,setSort:e.setSort,setDescending:e.setDescending}),r.a.createElement(A,{sort:e.sort,sortValues:e.sortValues,setSort:e.setSort}),r.a.createElement(F,{descending:e.descending,setDescending:e.setDescending}),r.a.createElement(I,{filterInRange:e.filterInRange,dateHigher:e.dateHigher,dateLower:e.dateLower,onChangeDateLower:e.onChangeDateLower,onChangeDateHigher:e.onChangeDateHigher,setFilterInRange:e.setFilterInRange}))},H=n(6),G=n(45),P=(n(202),n(100)),M=n.n(P),B=function(e){var t=Object(a.useState)(e.name),n=Object(y.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(!1),i=Object(y.a)(o,2),l=i[0],u=i[1],m=Object(a.useState)(e.category),p=Object(y.a)(m,2),d=p[0],g=p[1],f=Object(a.useState)(e.price),h=Object(y.a)(f,2),b=h[0],v=h[1],O=Object(a.useState)(e.spent),j=Object(y.a)(O,2),C=j[0],k=j[1],N=Object(a.useState)(e.count),w=Object(y.a)(N,2),_=w[0],S=w[1],L=Object(a.useState)(!1),D=Object(y.a)(L,2),I=D[0],T=D[1],A=Object(a.useState)(e.checkedAll),F=Object(y.a)(A,2),R=F[0],P=F[1];Object(a.useEffect)((function(){k(b*_)}),[_,b]),Object(a.useEffect)((function(){P(e.checkedAll)}),[e.checkedAll]);Object(a.useEffect)((function(){var t;R?null!=(t=e.chosenItems)&&"function"===typeof t[Symbol.iterator]&&e.setChosenItems(Array.from(new Set([].concat(Object(H.a)(e.chosenItems),[e.id])))):(e.chosenItems.splice(e.chosenItems.indexOf(e.id),-1===e.chosenItems.indexOf(e.id)?0:1),e.setChosenItems(Object(H.a)(e.chosenItems)))}),[R]);return r.a.createElement("div",{className:R?"expense expense--chosen":"expense"},I?r.a.createElement(G.a,{className:"confirm",title:"Are you sure?",func:function(){e.deleteExpense(e.id)},close:function(){return T(!1)}}):null,l?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null),r.a.createElement("input",{type:"text",onChange:function(e){s(e.currentTarget.value)},value:c}),r.a.createElement("select",{value:d,onChange:function(e){g(e.currentTarget.value)},name:"filter",id:"filter"},e.categories.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)}))),r.a.createElement("input",{type:"number",id:"price",value:b,min:0,onChange:function(e){return v(e.target.value)}}),r.a.createElement("input",{type:"number",id:"count",value:_,min:1,onChange:function(e){return S(e.target.value)}}),r.a.createElement("p",null,C),r.a.createElement("div",null,r.a.createElement("p",null,e.date)),r.a.createElement(E,{image:x.a,func:function(){e.changeExpenseThunkCreator(e.id,c,d,C,_,b),u(!1)},className:"button button--save"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"checkbox-element"},r.a.createElement("input",{checked:R,onChange:function(){P(!R)},type:"checkbox"}),r.a.createElement("label",null,r.a.createElement("div",{className:"checked"}))),r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.category),r.a.createElement("p",null,e.price),r.a.createElement("p",null,e.count),r.a.createElement("p",null,e.spent),r.a.createElement("div",null,r.a.createElement("p",null,e.date)),r.a.createElement(E,{image:M.a,func:function(){u(!0)},className:"button button--edit"})))},U=(n(91),n(34)),Y=n.n(U),X=r.a.memo((function(e){return r.a.createElement("div",{className:"table__header"},r.a.createElement("div",{className:"checkbox-element"},r.a.createElement("input",{checked:e.checkedAll,onChange:e.chooseAllItems,type:"checkbox"}),r.a.createElement("label",null,r.a.createElement("div",{className:"checked"}))),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:Y.a,alt:""}),r.a.createElement("p",null,"Name")),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:Y.a,alt:""}),r.a.createElement("p",null,"Category")),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:Y.a,alt:""}),r.a.createElement("p",null,"Price")),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:Y.a,alt:""}),r.a.createElement("p",null,"Count")),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:Y.a,alt:""}),r.a.createElement("p",null,"Spent")),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:Y.a,alt:""}),r.a.createElement("p",null,"Date")))})),W=n(101),z=n.n(W),J=n(102),V=n.n(J),$=n(58),q=n.n($),K=(n(203),function(){return r.a.createElement("img",{className:"loader",src:q.a,alt:""})}),Q=function(e){var t=Object(a.useState)(!1),n=Object(y.a)(t,2),c=n[0],s=n[1];Object(a.useEffect)((function(){c&&e.filterInRange?e.setChosenItems(p.filter((function(t){return t.props.id<e.dateHigher&&t.props.id>e.dateLower})).length?p.filter((function(t){return t.props.id<e.dateHigher&&t.props.id>e.dateLower})).map((function(e){return e.props.id})):null):c&&!e.filterInRange?e.expenses.length&&"noFilter"!==e.filter&&"Descending"===e.descending?e.setChosenItems(Object(H.a)(u.filter((function(t){return t.category===e.filter})).map((function(e){return e.id})))):e.expenses.length&&"noFilter"!==e.filter&&"Descending"!==e.descending?e.setChosenItems(Object(H.a)(u.sort(l()).filter((function(t){return t.category===e.filter})).map((function(e){return e.id})).reverse())):"Descending"===e.descending?e.setChosenItems(Object(H.a)(u.map((function(e){return e.id})))):e.setChosenItems(Object(H.a)(u.map((function(e){return e.id})).reverse())):e.setChosenItems([])}),[c,e.filterInRange]);var o=function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0},i=function(e,t){return e.category.toLowerCase()>t.category.toLowerCase()?1:e.category.toLowerCase()<t.category.toLowerCase()?-1:0},l=function(){switch(e.sort){case"By Date":return function(e,t){return t.id-e.id};case"By Spent":return function(e,t){return t.spent-e.spent};case"By Categories":return i;case"By Name":return o;case"By Count":return function(e,t){return t.count-e.count};default:return function(e,t){return t.id-e.id}}},u=Object(H.a)(e.expenses).sort(l()),m=function(t){return r.a.createElement(B,{id:t.id,key:t.id,categories:e.categories,name:t.name,category:t.category,chosenItems:e.chosenItems,setChosenItems:e.setChosenItems,checkedAll:c,count:t.count,price:t.price,spent:t.spent,date:t.date,deleteExpense:e.deleteExpense,changeExpenseThunkCreator:e.changeExpenseThunkCreator})},p=e.expenses.length&&"noFilter"!==e.filter&&"Descending"===e.descending?u.filter((function(t){return t.category===e.filter})).map((function(e){return m(e)})):e.expenses.length&&"noFilter"!==e.filter&&"Descending"!==e.descending?u.sort(l()).filter((function(t){return t.category===e.filter})).map((function(e){return m(e)})).reverse():"Descending"===e.descending?u.map((function(e){return m(e)})):u.map((function(e){return m(e)})).reverse(),d=Object(a.useCallback)((function(){s(!c)}),[c]);return r.a.createElement("div",{className:"table"},r.a.createElement(X,{checkedAll:c,chooseAllItems:d}),e.isLoading?r.a.createElement(K,null):null,e.filterInRange?p.filter((function(t){return t.props.id<e.dateHigher&&t.props.id>e.dateLower})).length?p.filter((function(t){return t.props.id<e.dateHigher&&t.props.id>e.dateLower})):r.a.createElement("div",{className:"empty"},r.a.createElement("p",null,"You don't have any data for this period"),r.a.createElement("img",{src:V.a,alt:""})):p,0!==e.expenses.length||e.filterInRange?null:r.a.createElement("div",{className:"empty"},r.a.createElement("p",null,"Add your first expense"),r.a.createElement("img",{src:z.a,alt:""})))},Z=n(103),ee=n.n(Z),te=n(104),ne=n.n(te),ae=n(31),re=n(105),ce=n.n(re),se=n(106),oe=n.n(se),ie=n(107),le=n.n(ie),ue=n(108),me=n.n(ue),pe=Object(g.b)((function(e){return{expenses:e.history.expenses,pages:e.history.pages,categories:e.settings.categories,isAuth:e.account.isAuth,isLoading:e.account.isLoading}}),{getUser:f.b,getExpensesThunkCreator:O.g,getExpenses:O.f,deleteExpensesThunkCreator:O.e,changeExpenseThunkCreator:O.c})((function(e){var t=Object(a.useState)("noFilter"),n=Object(y.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)("By Date"),i=Object(y.a)(o,2),l=i[0],u=i[1],m=Object(a.useState)("Descending"),p=Object(y.a)(m,2),d=p[0],g=p[1],f=Object(a.useState)((new Date).setHours(0)),h=Object(y.a)(f,2),b=h[0],v=h[1],O=Object(a.useState)((new Date).setDate((new Date).getDate()+1)),j=Object(y.a)(O,2),x=j[0],C=j[1],N=Object(a.useState)(!1),w=Object(y.a)(N,2),_=w[0],S=w[1],L=Object(a.useState)(!1),D=Object(y.a)(L,2),I=D[0],T=D[1],A=Object(a.useState)([]),F=Object(y.a)(A,2),H=F[0],P=F[1],M=Object(a.useState)(!1),B=Object(y.a)(M,2),U=B[0],Y=B[1],X=Object(a.useState)(1),W=Object(y.a)(X,2),z=W[0],J=W[1],V=Object(a.useState)(!0),$=Object(y.a)(V,2),q=$[0],K=$[1];Object(a.useEffect)((function(){e.getExpensesThunkCreator(),e.getUser()}),[]),Object(a.useEffect)((function(){e.getExpensesThunkCreator(z)}),[z,q]);var Z=function(){e.deleteExpensesThunkCreator(H),e.getExpensesThunkCreator(z),K(!q),P([]),Y(!1)},te=[];return te=z===e.pages?e.pages>2?[z-2,z-1,z]:[z-1,z]:1===z?e.pages>2?[z,z+1,z+2]:[z,z+1]:[z-1,z,z+1],e.isAuth?r.a.createElement("div",{className:"history"},r.a.createElement("h2",null,"Your history"),U?r.a.createElement(G.a,{className:"confirm show",title:"Do you want delete ".concat(null===H?0:H.length," items?"),func:Z,close:function(){return Y(!1)}}):r.a.createElement(G.a,{className:"confirm",title:"Do you want delete ".concat(null===H?0:H.length," items?"),func:Z,close:function(){return Y(!1)}}),r.a.createElement(R,{categories:e.categories,descending:d,setDescending:g,filter:c,setFilter:s,sort:l,setSort:u,sortValues:["By Date","By Spent","By Categories","By Name","By Count"],dateLower:b,dateHigher:x,onChangeDateLower:function(e){v(e)},onChangeDateHigher:function(e){C(e)},filterInRange:_,setFilterInRange:S}),r.a.createElement("div",{style:e.isLoading?{opacity:".5",pointerEvents:"none"}:{},className:"history__buttons"},r.a.createElement(E,{image:ee.a,func:function(){return T(!I)},className:"button button--add",title:""}),r.a.createElement(E,{image:ne.a,func:function(){H.length&&Y(!0)},className:"button button--delete",title:"".concat(null===H?0:H.length)})),r.a.createElement(k,{showForm:I}),r.a.createElement(Q,{isLoading:e.isLoading,changeExpenseThunkCreator:e.changeExpenseThunkCreator,chosenItems:H,setChosenItems:P,categories:e.categories,filter:c,sort:l,descending:d,expenses:e.expenses,deleteExpense:e.deleteExpense,setExpenses:e.setExpenses,dateLower:b,dateHigher:x,filterInRange:_}),e.pages>1?r.a.createElement("div",{className:"buttons"},r.a.createElement(E,{image:me.a,className:"button button--pages",func:function(){return J(1)}}),r.a.createElement(E,{image:ce.a,className:"button button--pages",func:function(){return 1!==z?J(z-1):null}}),r.a.createElement("div",{className:"pages"},te.map((function(t){return r.a.createElement("button",{className:"button",key:t||0,style:t===z?{fontWeight:"bold"}:{},onClick:function(){e.getExpensesThunkCreator(t),J(t||0)}},t)}))),r.a.createElement(E,{image:oe.a,className:"button button--pages",func:function(){return z!==e.pages?J(z+1):null}}),r.a.createElement(E,{image:le.a,className:"button button--pages",func:function(){return J(e.pages)}})):null):r.a.createElement(ae.a,{to:"login"})})),de=(n(204),function(e){var t=Object(a.useState)(!1),n=Object(y.a)(t,2),c=n[0],s=n[1];Object(a.useEffect)((function(){o(c)}),[c]);var o=function(t){e.setShowForPeriod(t),e.setShowMoreInfo(!1)};return r.a.createElement("div",{className:"period"},r.a.createElement("div",{className:"dates"},r.a.createElement("div",{className:"dates__element"},r.a.createElement("p",null,"From:"),r.a.createElement(w.a,{maxDate:e.dateHigher,showTimeSelect:!0,onChange:function(t){e.setDateLower(t)},selected:e.dateLower})),r.a.createElement("div",{className:"dates__element"},r.a.createElement("p",null,"To:"),r.a.createElement(w.a,{minDate:e.dateLower,showTimeSelect:!0,disabled:e.dateLower>e.dateHigher,onChange:function(t){e.setDateHigher(t)},selected:e.dateHigher}))),r.a.createElement("input",{onChange:function(){s(!c)},id:"dark-check",type:"checkbox"}),r.a.createElement("label",{className:"dark-mode",htmlFor:"dark-check"},r.a.createElement("div",{className:"toggle",style:c?{backgroundImage:"url(".concat(D.a,")"),backgroundColor:"#FF7777"}:{backgroundImage:"url(".concat(S.a,")")}})))}),ge=function(e){return r.a.createElement("div",{className:"analytics__wrapper"},r.a.createElement("h3",null,e.title),r.a.createElement("div",{className:"analytics__info"},r.a.createElement("div",{className:"analytics__info__item"},r.a.createElement("h3",null,"Total spent:"),e.findTotalSpending()),r.a.createElement("div",{className:"analytics__info__item"},r.a.createElement("h3",null,"Most spent for:"),e.findBiggerSpent()),r.a.createElement("div",{className:"analytics__info__item"},r.a.createElement("h3",null,"Spending by categories:"),r.a.createElement("div",{className:"analytics__categories"},e.findSpentCategory())),e.showMoreInfo?r.a.createElement("div",{className:"analytics__info__item detail-info"},r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"Name"),r.a.createElement("p",null,"Category"),r.a.createElement("p",null,"Price"),r.a.createElement("p",null,"Count"),r.a.createElement("p",null,"Spent"),r.a.createElement("p",null,"Date")),e.moreInfo.map((function(e){return r.a.createElement("div",{key:e.id,className:"more-info"},r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.category),r.a.createElement("p",null,e.price),r.a.createElement("p",null,e.count),r.a.createElement("p",null,e.spent),r.a.createElement("p",null,e.date))}))):null,e.showExpensesPerDay?r.a.createElement("div",{className:"analytics__info__item"},r.a.createElement("h3",null,"Spending per day:"),e.findTotalSpending()/Math.ceil((e.dateHigher-e.dateLower)/864e5)):null))},fe=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.spent),r.a.createElement("div",{onClick:e.func,style:{width:"1.5rem",height:"".concat(e.spent/e.sum*150,"px"),backgroundColor:"rgb(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),")")},className:"column"}),r.a.createElement("h5",null,e.category))},Ee=Object(g.b)((function(e){return{expenses:e.history.expenses,categories:e.settings.categories,isAuth:e.account.isAuth}}),{getCategories:C.d,getExpensesThunkCreator:O.g,getCategoriesThunkCreator:C.e,addCategoriesThunkCreator:C.a})((function(e){var t=Object(a.useState)(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),0,0,0)),n=Object(y.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+1,0,0,0)),i=Object(y.a)(o,2),l=i[0],u=i[1],m=Object(a.useState)(!1),p=Object(y.a)(m,2),d=p[0],g=p[1],f=Object(a.useState)(!1),E=Object(y.a)(f,2),h=E[0],b=E[1],v=Object(a.useState)({}),O=Object(y.a)(v,2),j=O[0],x=O[1];Object(a.useEffect)((function(){e.getExpensesThunkCreator(),e.getCategoriesThunkCreator()}),[]);return e.isAuth?r.a.createElement("div",{className:"analytics"},r.a.createElement("h2",null,"Analytics"),r.a.createElement(de,{setShowMoreInfo:b,dateHigher:l,dateLower:c,setDateLower:s,setDateHigher:u,showForPeriod:d,setShowForPeriod:g}),d?r.a.createElement(ge,{moreInfo:j,showMoreInfo:h,showExpensesPerDay:!0,dateLower:c,dateHigher:l,categories:e.categories,title:"Analytics for the time period",findTotalSpending:function(){return Object(H.a)(e.expenses).filter((function(e){return e.id>c&&e.id<l})).reduce((function(e,t){return e+t.spent}),0)},findSpentCategory:function(){var t=[];e.categories.forEach((function(n){return t.push({category:n.name,spent:Object(H.a)(e.expenses).filter((function(e){return e.id>c&&e.id<l&&e.category===n.name})).reduce((function(e,t){return e+t.spent}),0),expenses:Object(H.a)(e.expenses).filter((function(e){return e.id>c&&e.id<l&&e.category===n.name}))})}));var n=t.reduce((function(e,t){return e+t.spent}),0);return t.filter((function(e){return 0!==e.spent})).sort((function(e,t){return e.spent-t.spent})).map((function(e){return r.a.createElement(fe,{func:function(){b(!0),x(e.expenses)},key:e.category,spent:e.spent,category:e.category,sum:n})}))},findBiggerSpent:function(){return Object(H.a)(e.expenses).filter((function(t){return t.id>=c&&t.id<=l&&t.spent===Math.max.apply(Math,Object(H.a)(e.expenses.filter((function(e){return e.id>=c&&e.id<=l})).map((function(e){return e.spent}))))})).map((function(e){return r.a.createElement("div",{className:"biggest-spending",key:e.id},r.a.createElement("p",null,"Name:"),r.a.createElement("span",null,e.name),r.a.createElement("p",null,"Spent:"),r.a.createElement("span",null,e.spent),r.a.createElement("p",null,"Category:"),r.a.createElement("span",null,e.category),r.a.createElement("p",null,"Date:"),r.a.createElement("span",null,e.date),r.a.createElement("p",null,"Count:"),r.a.createElement("span",null,e.count))}))}}):r.a.createElement(ge,{moreInfo:j,showMoreInfo:h,showExpensesPerDay:!1,dateLower:c,dateHigher:l,categories:e.categories,title:"Summary analytics",findTotalSpending:function(){return Object(H.a)(e.expenses).reduce((function(e,t){return e+t.spent}),0)},findSpentCategory:function(){var t=[];e.categories.forEach((function(n){return t.push({category:n.name,spent:Object(H.a)(e.expenses).filter((function(e){return e.category===n.name})).reduce((function(e,t){return e+t.spent}),0),expenses:Object(H.a)(e.expenses).filter((function(e){return e.category===n.name}))})}));var n=t.reduce((function(e,t){return e+t.spent}),0);return t.filter((function(e){return 0!==e.spent})).sort((function(e,t){return e.spent-t.spent})).map((function(e){return r.a.createElement(fe,{func:function(){b(!0),x(e.expenses)},key:e.category,spent:e.spent,category:e.category,sum:n})}))},findBiggerSpent:function(){return Object(H.a)(e.expenses).filter((function(t){return t.spent===Math.max.apply(Math,Object(H.a)(e.expenses.map((function(e){return e.spent}))))})).map((function(e){return r.a.createElement("div",{className:"biggest-spending",key:e.id},r.a.createElement("p",null,"Name:"),r.a.createElement("span",null,e.name),r.a.createElement("p",null,"Spent:"),r.a.createElement("span",null,e.spent),r.a.createElement("p",null,"Category:"),r.a.createElement("span",null,e.category),r.a.createElement("p",null,"Date:"),r.a.createElement("span",null,e.date),r.a.createElement("p",null,"Count:"),r.a.createElement("span",null,e.count))}))}})):r.a.createElement(ae.a,{to:"login"})})),he=n(23),be=(n(92),Object(he.d)(Object(g.b)((function(e){return{isAuth:e.account.isAuth,isLoading:e.account.isLoading,isLoginLoading:e.account.isLoginLoading}}),{userLoginThunkCreator:f.d,userLogoutThunkCreator:f.e,userRegisterThunkCreator:f.f,getUser:f.b}),ae.g)((function(e){var t=Object(a.useState)(""),n=Object(y.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),i=Object(y.a)(o,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){e.getUser()}),[]),e.isAuth?r.a.createElement(ae.a,{to:"/history"}):r.a.createElement(r.a.Fragment,null,e.isLoginLoading?r.a.createElement(K,null):r.a.createElement("div",{className:"login"},r.a.createElement("h3",null,"Login"),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",value:c,onChange:function(e){return s(e.target.value)}}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",value:l,onChange:function(e){return u(e.target.value)}}),r.a.createElement("div",null,r.a.createElement("button",{className:"button",onClick:function(){return e.userLoginThunkCreator(c,l)}},"Login"),"or",r.a.createElement("button",{className:"button",onClick:function(){return e.history.push("register")}},"Register"))))}))),ve=Object(he.d)(Object(g.b)((function(e){return{isAuth:e.account.isAuth}}),{userLoginThunkCreator:f.d,userLogoutThunkCreator:f.e,userRegisterThunkCreator:f.f,getUser:f.b}),ae.g)((function(e){var t=Object(a.useState)(""),n=Object(y.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),i=Object(y.a)(o,2),l=i[0],u=i[1],m=Object(a.useState)(""),p=Object(y.a)(m,2),d=p[0],g=p[1];return Object(a.useEffect)((function(){e.getUser()}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"login"},r.a.createElement("h3",null,"Registration"),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{id:"name",type:"text",value:c,onChange:function(e){return s(e.target.value)}}),r.a.createElement("label",{htmlFor:"name"},"Email"),r.a.createElement("input",{id:"email",type:"text",value:l,onChange:function(e){return u(e.target.value)}}),r.a.createElement("label",{htmlFor:"name"},"Password"),r.a.createElement("input",{id:"password",type:"password",value:d,onChange:function(e){return g(e.target.value)}}),r.a.createElement("div",null,r.a.createElement("button",{className:"button",onClick:function(){e.userRegisterThunkCreator(c,l,d),e.history.push("login")}},"Register"))))})),ye=r.a.lazy((function(){return n.e(3).then(n.bind(null,214))})),Oe=function(e){var t,n=(t=ye,function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("img",{src:q.a,alt:""})},r.a.createElement(t,null))});return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement("div",{className:"content"},r.a.createElement(ae.d,null,"// @ts-ignore",r.a.createElement(ae.b,{path:"/login",render:function(){return r.a.createElement(be,null)}}),"// @ts-ignore",r.a.createElement(ae.b,{path:"/register",render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(ae.b,{path:"/history",render:function(){return r.a.createElement(pe,null)}}),r.a.createElement(ae.b,{path:"/analytics",render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(ae.b,{path:"/settings",render:function(){return r.a.createElement(n,null)}}),r.a.createElement(ae.a,{to:"/history"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je={},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ce=n(109),ke=Object(he.c)({account:f.a,analytics:xe,history:O.d,settings:C.b}),Ne=Object(he.e)(ke,Object(he.a)(Ce.a));window.store=Ne;var we=Ne;s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(g.a,{store:we},r.a.createElement(Oe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o}));var a=n(36),r=a.create({baseURL:"https://analyzerserver.herokuapp.com/api/",headers:{token:"".concat(localStorage.getItem("token"))}}),c={register:function(e,t,n){return r.post("user/register",{name:e,email:t,password:n})},logout:function(){return r.post("user/logout")}},s={getExpenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return r.get("history/expenses?page=".concat(e,"&limit=").concat(t))},addExpense:function(e){return r.post("history/expenses",{name:e.name,category:e.category,count:e.count,spent:e.spent,price:e.price,date:"".concat((new Date).toLocaleString()),id:e.id})},changeExpense:function(e,t,n,a,c,s){return r.put("history/change",{id:e,name:t,category:n,spent:a,count:c,price:s})},deleteExpense:function(e){return r.put("history/delete",{id:e})}},o={addCategory:function(e,t){return r.post("settings/categories",{name:e,id:t})},getCategories:function(){return r.get("settings/categories")},deleteExpense:function(e){return r.put("settings/delete",{id:e})}}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return f}));var a=n(8),r=n.n(a),c=n(16),s=n(6),o=n(11),i=n(22),l={categories:[]},u=function(e,t){return{type:"ADD_CATEGORY",name:e,id:t}},m=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.c.addCategory(e,t);case 3:a(u(e,t)),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0.response.data);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()},p=function(e){return{type:"GET_CATEGORIES",categories:e}},d=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.c.getCategories();case 3:n=e.sent,t(p(n.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return{type:"DELETE_CATEGORY",id:e}},f=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.c.deleteExpense(e);case 3:n(g(e)),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.response.body);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORIES":return e;case"GET_CATEGORIES":return Object(o.a)({},e,{categories:t.categories});case"ADD_CATEGORY":return Object(o.a)({},e,{categories:[].concat(Object(s.a)(e.categories),[{name:t.name,id:t.id}])});case"DELETE_CATEGORY":return Object(o.a)({},e,{categories:Object(s.a)(e.categories.filter((function(e){return e.id!==t.id})))});default:return e}}},34:function(e,t,n){e.exports=n.p+"static/media/separator.13ff7084.svg"},45:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(201);t.a=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("p",null,e.title),r.a.createElement("button",{className:"button button--confirm",onClick:e.func},"Yes"),r.a.createElement("button",{className:"button button--reject",onClick:e.close},"No"))}},50:function(e,t,n){e.exports=n.p+"static/media/save.33e01ffd.svg"},51:function(e,t,n){e.exports=n.p+"static/media/search.234c234c.svg"},52:function(e,t,n){e.exports=n.p+"static/media/clear.cbf86002.svg"},58:function(e,t,n){e.exports=n.p+"static/media/loading-1.e42ec6d6.svg"},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"f",(function(){return E})),n.d(t,"e",(function(){return h}));var a=n(8),r=n.n(a),c=n(16),s=n(11),o=n(36),i=n(22),l=n(12),u={isAuth:localStorage.getItem("isAuth")||!1,isLoading:!1,isLoginLoading:!1,infoF:""},m=function(e){return{type:"USER_LOGIN",isAuth:e}},p=function(){return{type:"GET_USER"}},d=function(e){return{type:"SHOW_LOADING",isLoading:e}},g=function(e){return{type:"LOGIN_LOADING",isLoading:e}},f=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(g(!0)),n.prev=1,n.next=4,o.post("https://analyzerserver.herokuapp.com/api/user/login",{email:e,password:t});case 4:(c=n.sent).data&&(localStorage.setItem("token",c.data),a(g(!1)),a(m(!0))),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(1),a(g(!1)),a(m(!1)),console.log(n.t0.response.data);case 13:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},E=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.register(e,t,n);case 3:a.sent.data&&c(m(!1)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0.response.data);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},h=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(m(!1)),t(Object(l.f)([])),localStorage.setItem("token",""),e.prev=3,e.next=6,i.a.logout();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADING":return Object(s.a)({},e,{isLoading:t.isLoading});case"INFO":return Object(s.a)({},e,{infoF:t.infoF});case"LOGIN_LOADING":return Object(s.a)({},e,{isLoginLoading:t.isLoading});case"USER_LOGIN":return localStorage.setItem("isAuth",JSON.stringify(t.isAuth)),Object(s.a)({},e,{isAuth:t.isAuth});case"GET_USER":var n=JSON.parse(localStorage.getItem("isAuth"))||!1;return Object(s.a)({},e,{isAuth:n});default:return e}}},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){e.exports=n.p+"static/media/history.2ec496af.svg"},94:function(e,t,n){e.exports=n.p+"static/media/analytics.0e0ff751.svg"},95:function(e,t,n){e.exports=n.p+"static/media/settings.a4fe81f9.svg"},97:function(e,t,n){e.exports=n.p+"static/media/logout.8b4c5e56.svg"}},[[110,1,2]]]);
//# sourceMappingURL=main.61edf7e9.chunk.js.map