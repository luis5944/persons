(this.webpackJsonppart2phonebook=this.webpackJsonppart2phonebook||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(19),u=n.n(c),s=(n(24),n(9)),i=n(1),o=n.n(i),p=n(4),b=n(6),d=n(5),j=n.n(d),l="/api/persons",f=function(){var e=Object(p.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(l);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post(l,r);case 2:n([].concat(Object(s.a)(t),[r]));case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),O=n(0),x=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),u=Object(b.a)(c,2),i=u[0],d=u[1],l=Object(r.useState)(""),x=Object(b.a)(l,2),m=x[0],v=x[1],w=Object(r.useState)(""),k=Object(b.a)(w,2),g=k[0],y=k[1],S=Object(r.useState)(!1),C=Object(b.a)(S,2),M=C[0],N=C[1],E=Object(r.useState)(""),J=Object(b.a)(E,2),L=J[0],A=J[1],B=Object(O.jsxs)("div",{className:"add",children:[i," added"]});Object(r.useEffect)((function(){(function(){var e=Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);var D=function(){var e=Object(p.a)(o.a.mark((function e(t){var r,c,u,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),void 0===(r=n.find((function(e){return e.name===i})))){e.next=11;break}return console.log(r),e.next=6,j.a.put("/api/persons/".concat(r.id),{name:r.name,number:m});case 6:return e.next=8,f();case 8:return c=e.sent,a(c),e.abrupt("return");case 11:u={id:function(){return(n.length>0?Math.max.apply(Math,Object(s.a)(n.map((function(e){return e.id})))):0)+1},name:i,number:m},b=function(){var e=Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n,a,u);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N(!0),setTimeout((function(){return N(!1)}),2e3),b();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Phonebook"}),""!==L?Object(O.jsxs)("div",{className:"error",children:["$",L]}):"",M?B:"","Search:"," ",Object(O.jsx)("input",{value:g,onChange:function(e){y(e.target.value)}}),Object(O.jsxs)("form",{onSubmit:D,children:[Object(O.jsx)("h1",{children:"Add new"}),Object(O.jsxs)("div",{children:["name:"," ",Object(O.jsx)("input",{type:"text",id:"name",value:i,onChange:function(e){d(e.target.value)},name:"name"}),Object(O.jsxs)("div",{children:["number:"," ",Object(O.jsx)("input",{type:"text",value:m,onChange:function(e){v(e.target.value)},name:"number"})]})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"submit",children:"add"})})]}),Object(O.jsx)("h2",{children:"Numbers"}),""===g?n.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[e.name," - ",e.number]}),Object(O.jsx)("button",{onClick:Object(p.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.delete("/api/persons/".concat(e.id));case 3:a(n.filter((function(t){return t.id!==e.id}))),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("hola"),A(e.name);case 10:case"end":return t.stop()}}),t,null,[[0,6]])}))),children:"delete"})]},e.id)})):n.filter((function(e){return e.name.toLocaleLowerCase().includes(g)})).map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[e.name," - ",e.number]}),Object(O.jsx)("button",{onClick:Object(p.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.delete("/api/persons/".concat(e.id));case 3:a(n.filter((function(t){return t.id!==e.id}))),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("hola"),A(e.name);case 10:case"end":return t.stop()}}),t,null,[[0,6]])}))),children:"delete"})]},e.id)}))]})};u.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d7eafb1c.chunk.js.map