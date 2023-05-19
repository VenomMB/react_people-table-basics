(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),s=(c(21),c(22),c(2)),r=(c(23),c(0)),j=c(1),i=Object(r.memo)((function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})})),b=c(8),o=c(9),l=c(12),d=c(4),h=(c(25),Object(r.memo)((function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}))),O=c(6),x=c.n(O),m=Object(r.memo)((function(e){var t=e.person,c=Object(s.h)().slug,n=t.name,r=t.sex,i=t.born,b=t.died,o=t.fatherName,l=t.motherName,d=t.mother,h=t.father,O=t.slug;return Object(j.jsxs)("tr",{"data-cy":"person",className:x()({"has-background-warning":O===c}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(a.b,{to:"../".concat(O),className:x()({"has-text-danger":"f"===r}),children:n})}),Object(j.jsx)("td",{children:r}),Object(j.jsx)("td",{children:i}),Object(j.jsx)("td",{children:b}),d?Object(j.jsx)("td",{children:Object(j.jsx)(a.b,{to:"../".concat(d.slug),className:"has-text-danger",children:l})}):Object(j.jsx)("td",{children:l||"-"}),h?Object(j.jsx)("td",{children:Object(j.jsx)(a.b,{to:"../".concat(h.slug),children:o})}):Object(j.jsx)("td",{children:o||"-"})]})})),u=Object(r.memo)((function(e){var t=e.people,c=e.isLoading;return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"block",children:Object(j.jsx)("div",{className:"box table-container",children:c?Object(j.jsx)(h,{}):Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(m,{person:e})}))})]})})})})}));function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var f=function(e,t){return e.find((function(e){return e.name===t}))},v=Object(r.memo)((function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(d.a)(a,2),i=s[0],h=s[1],O=Object(r.useState)(!1),x=Object(d.a)(O,2),m=x[0],v=x[1],g=Object(r.useState)(!1),N=Object(d.a)(g,2),w=N[0],y=N[1],k=!w&&!i,P=Object(r.useCallback)(Object(l.a)(Object(b.a)().mark((function e(){var t,c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,p();case 4:t=e.sent,c=t.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{mother:f(t,e.motherName),father:f(t,e.fatherName)})})),t.length?(v(!1),n(c)):y(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h(!0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[]);return Object(r.useEffect)((function(){P()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),i&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),w&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),k&&Object(j.jsx)(u,{people:c,isLoading:m})]})})),g=Object(r.memo)((function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})})),N=Object(r.memo)((function(e){var t=e.to,c=e.text;return Object(j.jsx)(a.b,{className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:c})})),w=Object(r.memo)((function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(N,{to:"/",text:"Home"}),Object(j.jsx)(N,{to:"/people",text:"People"})]})})})})),y=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(w,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{path:"/",element:Object(j.jsx)(i,{})}),Object(j.jsx)(s.b,{path:"home",element:Object(j.jsx)(s.a,{to:"/",replace:!0})}),Object(j.jsxs)(s.b,{path:"/people",children:[Object(j.jsx)(s.b,{index:!0,element:Object(j.jsx)(v,{})}),Object(j.jsx)(s.b,{path:":slug",element:Object(j.jsx)(v,{})})]}),Object(j.jsx)(s.b,{path:"*",element:Object(j.jsx)(g,{})})]})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(y,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.195c820d.chunk.js.map