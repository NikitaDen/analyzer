(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),s=n.n(c),l=(n(89),n(90),n(23)),i=(n(91),n(73)),o=n.n(i),u=n(74),m=n.n(u),d=n(75),g=n.n(d),p=function(){return r.a.createElement("nav",null,r.a.createElement(l.b,{to:"/history"},r.a.createElement("p",null,"History"),r.a.createElement("img",{src:o.a,alt:""})),r.a.createElement(l.b,{to:"/analytics"},r.a.createElement("p",null,"Analytics"),r.a.createElement("img",{src:m.a,alt:""})),r.a.createElement(l.b,{to:"/settings"},r.a.createElement("p",null,"Settings"),r.a.createElement("img",{src:g.a,alt:""})))},E=n(4),f=n(15),h=n(6),b=n(14),y={expenses:[]},v=function(e){return{type:"ADD_EXPENSE",expense:e}},O=function(){return{type:"SET_EXPENSES"}},x=function(){return{type:"GET_EXPENSES"}},j=function(e,t,n,a,r,c){return{type:"CHANGE_EXPENSE",id:e,name:t,category:n,spent:a,count:r,price:c}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return Object(b.a)({},e,{expenses:[].concat(Object(h.a)(e.expenses),[Object(b.a)({},t.expense,{date:"".concat((new Date).toLocaleString()),id:Date.now()})])});case"DELETE_EXPENSE":return Object(b.a)({},e,{expenses:Object(h.a)(e.expenses.filter((function(e){return!t.id.includes(e.id)})))});case"SET_EXPENSES":return localStorage.setItem("expenses",JSON.stringify(Object(h.a)(e.expenses))),e;case"GET_EXPENSES":var n=JSON.parse(localStorage.getItem("expenses"))||[];return Object(b.a)({},e,{expenses:n});case"CHANGE_EXPENSE":return Object(b.a)({},e,{expenses:Object(h.a)(e.expenses.map((function(e){return e.id===t.id?Object(b.a)({},e,{name:t.name,category:t.category,count:t.count,spent:t.spent,price:t.price}):e})))});default:return e}},C=(n(97),n(41)),_=n.n(C),N=Object(f.b)((function(e){return{expenses:e.history.expenses,categories:e.settings.categories}}),{addExpense:v,setExpenses:O,getExpenses:x,changeExpense:j})((function(e){var t=Object(a.useState)(""),n=Object(E.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)("Products"),i=Object(E.a)(l,2),o=i[0],u=i[1],m=Object(a.useState)("0"),d=Object(E.a)(m,2),g=d[0],p=d[1],f=Object(a.useState)("1"),h=Object(E.a)(f,2),b=h[0],y=h[1],v=Object(a.useState)(!1),O=Object(E.a)(v,2),x=O[0],j=O[1];Object(a.useEffect)((function(){e.getExpenses()}),[]);return r.a.createElement(r.a.Fragment,null,e.showForm?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form__element"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:x?"name name--error":"name",id:"name",value:c,onChange:function(e){s(e.target.value),j(!1)}})),r.a.createElement("div",{className:"form__element"},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("select",{value:o,onChange:function(e){return u(e.target.value)},name:"category",id:"category"},e.categories.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)})))),r.a.createElement("div",{className:"form__element"},r.a.createElement("label",{htmlFor:"count"},"Count"),r.a.createElement("input",{type:"number",id:"count",value:b,min:0,onChange:function(e){return y(e.target.value)}})),r.a.createElement("div",{className:"form__element"},r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{type:"number",id:"price",value:g,min:0,onChange:function(e){return p(e.target.value)}})),r.a.createElement("button",{className:"button button--addItem",onClick:function(){c?(e.addExpense({category:o,count:b,name:c,price:g,spent:g*b}),e.setExpenses(),s(""),u("Products"),y("1"),p("0")):j(!0)}},r.a.createElement("img",{src:_.a,alt:""}),r.a.createElement("p",null,"Save item")))):null)})),D=(n(38),n(98),n(30)),w=n.n(D),I=function(e){return r.a.createElement("button",{disabled:e.disabled,className:e.className,onClick:e.func},r.a.createElement("img",{src:e.image,alt:""}),r.a.createElement("p",null,e.title))},k=n(42),F=n.n(k),L=n(43),H=n.n(L),A=function(e){return r.a.createElement("div",{className:"filter__item filter__item--dates"},r.a.createElement("label",{htmlFor:"sort"},"Dates"),r.a.createElement(w.a,{maxDate:e.dateHigher,onChange:e.onChangeDateLower,selected:e.dateLower}),r.a.createElement(w.a,{minDate:e.dateLower,disabled:e.dateLower>e.dateHigher,onChange:e.onChangeDateHigher,selected:e.dateHigher}),r.a.createElement("div",{className:"buttons"},r.a.createElement(I,{image:F.a,func:function(){e.setFilterInRange(!0)},className:"button button--search",title:"Set",disabled:e.dateLower>e.dateHigher}),r.a.createElement(I,{image:H.a,func:function(){e.setFilterInRange(!1)},className:"button button--clear",title:"Clear",disabled:e.dateLower>e.dateHigher})))},T=function(e){return r.a.createElement("div",{className:"filter__item filter__item--filter"},r.a.createElement("label",{htmlFor:"filter"},"Filter"),r.a.createElement("select",{value:e.filter,onChange:function(t){return e.setFilter(t.target.value)},name:"filter",id:"filter"},r.a.createElement("option",{value:"noFilter"},"No filter"),e.categories.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)}))))},P=function(e){return r.a.createElement("div",{className:"filter__item filter__item--sort"},r.a.createElement("label",{htmlFor:"sort"},"Sort"),r.a.createElement("select",{value:e.sort,onChange:function(t){return e.setSort(t.target.value)},name:"filter",id:"sort"},e.sortValues.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("select",{value:e.descending,onChange:function(t){return e.setDescending(t.target.value)},name:"descending"},r.a.createElement("option",{value:"noSort"},"No sort"),r.a.createElement("option",{value:"Ascending"},"Ascending"),r.a.createElement("option",{value:"Descending"},"Descending")))},R=function(e){return r.a.createElement("div",{className:"filter"},r.a.createElement(T,{filter:e.filter,categories:e.categories,setFilter:e.setFilter,setSort:e.setSort,setDescending:e.setDescending}),r.a.createElement(P,{sort:e.sort,sortValues:e.sortValues,descending:e.descending,setSort:e.setSort,setDescending:e.setDescending}),r.a.createElement(A,{filterInRange:e.filterInRange,dateHigher:e.dateHigher,dateLower:e.dateLower,onChangeDateLower:e.onChangeDateLower,onChangeDateHigher:e.onChangeDateHigher,setFilterInRange:e.setFilterInRange}))},B=(n(157),function(e){return r.a.createElement("div",{className:"confirm"},r.a.createElement("p",null,e.title),r.a.createElement("button",{className:"button button--confirm",onClick:e.func},"Yes"),r.a.createElement("button",{className:"button button--reject",onClick:e.close},"No"))}),M=(n(158),n(79)),G=n.n(M),X=function(e){var t=Object(a.useState)(e.name),n=Object(E.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(!1),i=Object(E.a)(l,2),o=i[0],u=i[1],m=Object(a.useState)(e.category),d=Object(E.a)(m,2),g=d[0],p=d[1],f=Object(a.useState)(e.price),b=Object(E.a)(f,2),y=b[0],v=b[1],O=Object(a.useState)(e.spent),x=Object(E.a)(O,2),j=x[0],S=x[1],C=Object(a.useState)(e.count),N=Object(E.a)(C,2),D=N[0],w=N[1],k=Object(a.useState)(!1),F=Object(E.a)(k,2),L=F[0],H=F[1],A=Object(a.useState)(e.checkedAll),T=Object(E.a)(A,2),P=T[0],R=T[1];Object(a.useEffect)((function(){S(y*D)}),[D,y]),Object(a.useEffect)((function(){R(e.checkedAll)}),[e.checkedAll]),Object(a.useEffect)((function(){P?e.setChosenItems(Array.from(new Set([].concat(Object(h.a)(e.chosenItems),[e.id])))):(e.chosenItems.splice(e.chosenItems.indexOf(e.id),-1===e.chosenItems.indexOf(e.id)?0:1),e.setChosenItems(Object(h.a)(e.chosenItems)))}),[P]);return r.a.createElement("div",{className:P?"expense expense--chosen":"expense"},L?r.a.createElement(B,{title:"Are you sure?",func:function(){e.deleteExpense(e.id),e.setExpenses()},close:function(){return H(!1)}}):null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null),r.a.createElement("input",{type:"text",onChange:function(e){s(e.currentTarget.value)},value:c}),r.a.createElement("select",{value:g,onChange:function(e){p(e.currentTarget.value)},name:"filter",id:"filter"},e.categories.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)}))),r.a.createElement("input",{type:"number",id:"price",value:y,min:0,onChange:function(e){return v(e.target.value)}}),r.a.createElement("input",{type:"number",id:"count",value:D,min:1,onChange:function(e){return w(e.target.value)}}),r.a.createElement("p",null,j),r.a.createElement("div",null,r.a.createElement("p",null,e.date),r.a.createElement(I,{image:_.a,func:function(){e.changeExpense(e.id,c,g,j,D,y),e.setExpenses(),u(!1)},className:"button button--save",title:"Save"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"checkbox-element"},r.a.createElement("input",{checked:P,onChange:function(){R(!P)},type:"checkbox"}),r.a.createElement("label",null,r.a.createElement("div",{className:"checked"}))),r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.category),r.a.createElement("p",null,e.price),r.a.createElement("p",null,e.count),r.a.createElement("p",null,e.spent),r.a.createElement("div",null,r.a.createElement("p",null,e.date),P?r.a.createElement(I,{image:G.a,func:function(){u(!0)},className:"button button--edit",title:"Edit"}):null)))},Y=(n(159),n(26)),J=n.n(Y),V=function(e){var t=function(e,t){return e.name>t.name?1:e.name<t.name?-1:0},n=function(e,t){return e.category>t.category?1:e.category<t.category?-1:0},c=function(){switch(e.sort){case"By Date":return function(e,t){return t.id-e.id};case"By Spent":return function(e,t){return t.spent-e.spent};case"By Categories":return n;case"By Name":return t;case"By Count":return function(e,t){return t.count-e.count};default:return function(e,t){return t.id-e.id}}},s=Object(h.a)(e.expenses).sort(c()),l=Object(a.useState)(!1),i=Object(E.a)(l,2),o=i[0],u=i[1],m=function(t){return r.a.createElement(X,{id:t.id,key:t.id,categories:e.categories,name:t.name,category:t.category,chosenItems:e.chosenItems,setChosenItems:e.setChosenItems,checkedAll:o,count:t.count,price:t.price,spent:t.spent,date:t.date,changeExpense:e.changeExpense,deleteExpense:e.deleteExpense,setExpenses:e.setExpenses})},d=e.expenses.length&&"noFilter"!==e.filter&&"Descending"===e.descending?s.filter((function(t){return t.category===e.filter})).map((function(e){return m(e)})):e.expenses.length&&"noFilter"!==e.filter&&"Descending"!==e.descending?s.sort(c()).filter((function(t){return t.category===e.filter})).map((function(e){return m(e)})).reverse():"Descending"===e.descending?s.map((function(e){return m(e)})):s.map((function(e){return m(e)})).reverse();Object(a.useEffect)((function(){o&&e.filterInRange?e.setChosenItems(d.filter((function(t){return t.props.id<e.dateHigher&&t.props.id>e.dateLower})).length?d.filter((function(t){return t.props.id<e.dateHigher&&t.props.id>e.dateLower})).map((function(e){return e.props.id})):null):o&&!e.filterInRange?e.expenses.length&&"noFilter"!==e.filter&&"Descending"===e.descending?e.setChosenItems(Object(h.a)(s.filter((function(t){return t.category===e.filter})).map((function(e){return e.id})))):e.expenses.length&&"noFilter"!==e.filter&&"Descending"!==e.descending?e.setChosenItems(Object(h.a)(s.sort(c()).filter((function(t){return t.category===e.filter})).map((function(e){return e.id})).reverse())):"Descending"===e.descending?e.setChosenItems(Object(h.a)(s.map((function(e){return e.id})))):e.setChosenItems(Object(h.a)(s.map((function(e){return e.id})).reverse())):e.setChosenItems([])}),[o,e.filterInRange]);return r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table__header"},r.a.createElement("div",{className:"checkbox-element"},r.a.createElement("input",{checked:o,onChange:function(){u(!o)},type:"checkbox"}),r.a.createElement("label",null,r.a.createElement("div",{className:"checked"}))),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:J.a,alt:""}),r.a.createElement("p",null,"Name")),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:J.a,alt:""}),r.a.createElement("p",null,"Category")),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:J.a,alt:""}),r.a.createElement("p",null,"Price")),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:J.a,alt:""}),r.a.createElement("p",null,"Count")),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:J.a,alt:""}),r.a.createElement("p",null,"Spent")),r.a.createElement("div",{className:"table__header__item"},r.a.createElement("img",{src:J.a,alt:""}),r.a.createElement("p",null,"Date"))),e.filterInRange?d.filter((function(t){return t.props.id<e.dateHigher&&t.props.id>e.dateLower})).length?d.filter((function(t){return t.props.id<e.dateHigher&&t.props.id>e.dateLower})):r.a.createElement("div",{className:"empty"},"You don't have any data for this period"):d,0===e.expenses.length?r.a.createElement("div",{className:"empty"},"Add your first spent"):null)},W=n(80),$=n.n(W),q=n(81),z=n.n(q),K=Object(f.b)((function(e){return{expenses:e.history.expenses,categories:e.settings.categories}}),{addExpense:v,setExpenses:O,getExpenses:x,changeExpense:j,deleteExpense:function(e){return{type:"DELETE_EXPENSE",id:e}}})((function(e){var t=Object(a.useState)("noFilter"),n=Object(E.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)("By Date"),i=Object(E.a)(l,2),o=i[0],u=i[1],m=Object(a.useState)("Descending"),d=Object(E.a)(m,2),g=d[0],p=d[1],f=Object(a.useState)((new Date).setHours(0)),h=Object(E.a)(f,2),b=h[0],y=h[1],v=Object(a.useState)((new Date).setDate((new Date).getDate()+1)),O=Object(E.a)(v,2),x=O[0],j=O[1],S=Object(a.useState)(!1),C=Object(E.a)(S,2),_=C[0],D=C[1],w=Object(a.useState)(!1),k=Object(E.a)(w,2),F=k[0],L=k[1],H=Object(a.useState)([]),A=Object(E.a)(H,2),T=A[0],P=A[1],M=Object(a.useState)(!1),G=Object(E.a)(M,2),X=G[0],Y=G[1];return Object(a.useEffect)((function(){console.log(T)}),[T]),r.a.createElement("div",{className:"history"},r.a.createElement("h2",null,"Your history"),X?r.a.createElement(B,{title:"Do you want delete ".concat(T.length," items?"),func:function(){e.deleteExpense(T),e.setExpenses(),P([]),Y(!1)},close:function(){return Y(!1)}}):null,r.a.createElement("div",{className:"history__buttons"},r.a.createElement(I,{image:$.a,func:function(){return L(!F)},className:"button button--add",title:"Add new"}),r.a.createElement(I,{image:z.a,func:function(){T.length&&Y(!0)},className:"button button--delete",title:"Delete items (".concat(T.length,")")})),r.a.createElement(N,{showForm:F}),r.a.createElement(R,{categories:e.categories,descending:g,setDescending:p,filter:c,setFilter:s,sort:o,setSort:u,sortValues:["By Date","By Spent","By Categories","By Name","By Count"],dateLower:b,dateHigher:x,onChangeDateLower:function(e){y(e)},onChangeDateHigher:function(e){j(e)},filterInRange:_,setFilterInRange:D}),r.a.createElement(V,{chosenItems:T,setChosenItems:P,categories:e.categories,filter:c,sort:o,descending:g,expenses:e.expenses,deleteExpense:e.deleteExpense,changeExpense:e.changeExpense,setExpenses:e.setExpenses,dateLower:b,dateHigher:x,filterInRange:_}))})),Q={categories:[{name:"Products",id:1},{name:"Entertainment",id:2},{name:"Bill",id:3}]},U=function(){return{type:"GET_CATEGORIES"}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORIES":return localStorage.setItem("categories",JSON.stringify(Object(h.a)(e.categories))),e;case"GET_CATEGORIES":var n=JSON.parse(localStorage.getItem("categories"))||[{name:"Products",id:1},{name:"Entertainment",id:2},{name:"Bill",id:3}];return Object(b.a)({},e,{categories:n});case"ADD_CATEGORY":return Object(b.a)({},e,{categories:[].concat(Object(h.a)(e.categories),[{name:t.name,id:Date.now()}])});case"DELETE_CATEGORY":return Object(b.a)({},e,{categories:Object(h.a)(e.categories.filter((function(e){return e.id!==t.id})))});default:return e}},ee=(n(160),n(82)),te=n.n(ee),ne=function(e){var t=Object(a.useState)(!1),n=Object(E.a)(t,2),c=n[0],s=n[1];return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(B,{title:"Are you sure?",func:function(){e.deleteCategory(e.id),e.setCategories()},close:function(){s(!1)}}):null,r.a.createElement("div",{key:e.name,className:"category"},r.a.createElement("p",null,e.name),r.a.createElement("button",{className:"button",onClick:function(){s(!0)}},r.a.createElement("img",{src:te.a,alt:""}))))},ae=n(83),re=n.n(ae),ce=(n(161),function(e){var t=Object(a.useState)(""),n=Object(E.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(!1),i=Object(E.a)(l,2),o=i[0],u=i[1];Object(a.useEffect)((function(){e.getCategories()}),[]);return r.a.createElement("div",{className:"settings__item categories"},r.a.createElement("h3",null,"Categories"),r.a.createElement("div",{className:"categories__form"},r.a.createElement("input",{className:o?"category-name category-name--error":"category-name",type:"text",value:c,onBlur:function(){return u(!1)},onChange:function(e){s(e.currentTarget.value),o&&u(!1)}}),r.a.createElement("button",{className:"button",onClick:function(){c?(e.addCategory(c),e.setCategories(),s("")):u(!0)}},r.a.createElement("img",{src:re.a,alt:""}))),e.categories.map((function(t){return r.a.createElement(ne,{key:t.id,name:t.name,id:t.id,setCategories:e.setCategories,deleteCategory:e.deleteCategory})})))}),se=Object(f.b)((function(e){return{categories:e.settings.categories}}),{addCategory:function(e){return{type:"ADD_CATEGORY",name:e}},getCategories:U,setCategories:function(){return{type:"SET_CATEGORIES"}},deleteCategory:function(e){return{type:"DELETE_CATEGORY",id:e}}})((function(e){return r.a.createElement("div",{className:"settings"},r.a.createElement("h2",null,"Settings"),r.a.createElement(ce,{categories:e.categories,setCategories:e.setCategories,getCategories:e.getCategories,addCategory:e.addCategory,deleteCategory:e.deleteCategory}))})),le=(n(162),function(e){return r.a.createElement("div",{className:"period"},r.a.createElement(w.a,{maxDate:e.dateHigher,onChange:function(t){e.setDateLower(t)},selected:e.dateLower}),r.a.createElement(w.a,{minDate:e.dateLower,disabled:e.dateLower>e.dateHigher,onChange:function(t){e.setDateHigher(t)},selected:e.dateHigher}),r.a.createElement("div",{className:"buttons"},r.a.createElement(I,{image:F.a,func:function(){return e.setShowForPeriod(!0)},className:"button button--search",title:"Set",disabled:e.dateLower>e.dateHigher}),r.a.createElement(I,{image:H.a,func:function(){return e.setShowForPeriod(!1)},className:"button button--clear",title:"Clear",disabled:e.dateLower>e.dateHigher})))}),ie=function(e){return r.a.createElement("div",{className:"analytics__wrapper"},r.a.createElement("h3",null,e.title),r.a.createElement("div",{className:"analytics__info"},r.a.createElement("div",{className:"analytics__info__item"},r.a.createElement("h3",null,"Total spent:"),e.findTotalSpending()),r.a.createElement("div",{className:"analytics__info__item"},r.a.createElement("h3",null,"Most spent for:"),e.findBiggerSpent()),r.a.createElement("div",{className:"analytics__info__item"},r.a.createElement("h3",null,"Spending by categories:"),r.a.createElement("div",{className:"analytics__categories"},e.findSpentCategory())),e.showExpensesPerDay?r.a.createElement("div",{className:"analytics__info__item"},r.a.createElement("h3",null,"Spending per day:"),e.findTotalSpending()/Math.ceil((e.dateHigher-e.dateLower)/864e5)):null))},oe=Object(f.b)((function(e){return{expenses:e.history.expenses,categories:e.settings.categories}}),{getExpenses:x,getCategories:U})((function(e){var t=Object(a.useState)(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),0,0,0)),n=Object(E.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+1,0,0,0)),i=Object(E.a)(l,2),o=i[0],u=i[1],m=Object(a.useState)(!1),d=Object(E.a)(m,2),g=d[0],p=d[1];Object(a.useEffect)((function(){e.getExpenses(),e.getCategories()}),[]);return r.a.createElement("div",{className:"analytics"},r.a.createElement("h2",null,"Analytics"),r.a.createElement(le,{dateHigher:o,dateLower:c,setDateLower:s,setDateHigher:u,showForPeriod:g,setShowForPeriod:p}),g?r.a.createElement(ie,{showExpensesPerDay:!0,expenses:e.expenses,dateLower:c,dateHigher:o,categories:e.categories,title:"Analytics for the time period",findTotalSpending:function(){return Object(h.a)(e.expenses).filter((function(e){return e.id>c&&e.id<o})).reduce((function(e,t){return e+t.spent}),0)},findSpentCategory:function(){var t=[];e.categories.forEach((function(n){return t.push({category:n.name,spent:Object(h.a)(e.expenses).filter((function(e){return e.id>c&&e.id<o&&e.category===n.name})).reduce((function(e,t){return e+t.spent}),0)})}));var n=t.reduce((function(e,t){return e+t.spent}),0);return t.filter((function(e){return 0!==e.spent})).sort((function(e,t){return e.spent-t.spent})).map((function(e){return r.a.createElement("div",{key:e.category},r.a.createElement("p",null,e.spent),r.a.createElement("div",{style:{width:"1.5rem",height:"".concat(e.spent/n*150,"px"),backgroundColor:"rgb(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),")")},className:"column"}),r.a.createElement("h5",null,e.category))}))},findBiggerSpent:function(){return Object(h.a)(e.expenses).filter((function(t){return t.id>=c&&t.id<=o&&t.spent===Math.max.apply(Math,Object(h.a)(e.expenses.filter((function(e){return e.id>=c&&e.id<=o})).map((function(e){return e.spent}))))})).map((function(e){return r.a.createElement("div",{className:"biggest-spending",key:e.id},r.a.createElement("p",null,"Name:"),r.a.createElement("span",null,e.name),r.a.createElement("p",null,"Spent:"),r.a.createElement("span",null,e.spent),r.a.createElement("p",null,"Category:"),r.a.createElement("span",null,e.category),r.a.createElement("p",null,"Date:"),r.a.createElement("span",null,e.date),r.a.createElement("p",null,"Count:"),r.a.createElement("span",null,e.count))}))}}):r.a.createElement(ie,{showExpensesPerDay:!1,expenses:e.expenses,dateLower:c,dateHigher:o,categories:e.categories,title:"Summary analytics",findTotalSpending:function(){return Object(h.a)(e.expenses).reduce((function(e,t){return e+t.spent}),0)},findSpentCategory:function(){var t=[];e.categories.forEach((function(n){return t.push({category:n.name,spent:Object(h.a)(e.expenses).filter((function(e){return e.category===n.name})).reduce((function(e,t){return e+t.spent}),0)})}));var n=t.reduce((function(e,t){return e+t.spent}),0);return t.filter((function(e){return 0!==e.spent})).sort((function(e,t){return e.spent-t.spent})).map((function(e){return r.a.createElement("div",{key:e.category},r.a.createElement("p",null,e.spent),r.a.createElement("div",{style:{width:"1.5rem",height:"".concat(e.spent/n*150,"px"),backgroundColor:"rgb(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),")")},className:"column"}),r.a.createElement("h5",null,e.category))}))},findBiggerSpent:function(){return Object(h.a)(e.expenses).filter((function(t){return t.spent===Math.max.apply(Math,Object(h.a)(e.expenses.map((function(e){return e.spent}))))})).map((function(e){return r.a.createElement("div",{className:"biggest-spending",key:e.id},r.a.createElement("p",null,"Name:"),r.a.createElement("span",null,e.name),r.a.createElement("p",null,"Spent:"),r.a.createElement("span",null,e.spent),r.a.createElement("p",null,"Category:"),r.a.createElement("span",null,e.category),r.a.createElement("p",null,"Date:"),r.a.createElement("span",null,e.date),r.a.createElement("p",null,"Count:"),r.a.createElement("span",null,e.count))}))}}))})),ue=n(22);var me=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(p,null),r.a.createElement("div",{className:"content"},r.a.createElement(ue.d,null,r.a.createElement(ue.b,{path:"/history"},r.a.createElement(K,null)),r.a.createElement(ue.b,{path:"/settings"},r.a.createElement(se,null)),r.a.createElement(ue.b,{path:"/analytics"},r.a.createElement(oe,null)),r.a.createElement(ue.a,{to:"/history"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=n(37),ge={},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ee={},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;return t.type,e},he=Object(de.b)({account:fe,analytics:pe,history:S,settings:Z}),be=Object(de.c)(he);window.store=be;var ye=be;s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(f.a,{store:ye},r.a.createElement(me,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,n){e.exports=n.p+"static/media/separator.13ff7084.svg"},41:function(e,t,n){e.exports=n.p+"static/media/save.33e01ffd.svg"},42:function(e,t,n){e.exports=n.p+"static/media/search.234c234c.svg"},43:function(e,t,n){e.exports=n.p+"static/media/clear.57f77dce.svg"},73:function(e,t,n){e.exports=n.p+"static/media/history.2ec496af.svg"},74:function(e,t,n){e.exports=n.p+"static/media/analytics.0e0ff751.svg"},75:function(e,t,n){e.exports=n.p+"static/media/settings.a4fe81f9.svg"},79:function(e,t,n){e.exports=n.p+"static/media/edit.b79003c0.svg"},80:function(e,t,n){e.exports=n.p+"static/media/add.671c5d46.svg"},81:function(e,t,n){e.exports=n.p+"static/media/delete.fa5e6b6a.svg"},82:function(e,t,n){e.exports=n.p+"static/media/clear-dark.1df4a4af.svg"},83:function(e,t,n){e.exports=n.p+"static/media/add-dark.58e58a78.svg"},84:function(e,t,n){e.exports=n(163)},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.779b6855.chunk.js.map