(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=n(3),u=n.n(l),s=n(6),i=n(2),m=(n(13),n(1)),d=function(e){var t=e.user;return r.a.createElement("td",null,t.name)},p=function(e){var t=e.todo;return r.a.createElement("tr",null,r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.title),r.a.createElement(d,{user:t.user}),r.a.createElement("td",null,t.completed?"completed":"not completed"))},f=function(e){var t=e.getTodos,n=Object(a.useState)([]),c=Object(i.a)(n,2),o=c[0],l=c[1],s=Object(a.useState)(!1),d=Object(i.a)(s,2),f=d[0],b=d[1],E=Object(a.useState)(!1),j=Object(i.a)(E,2),O=j[0],h=j[1],v=Object(a.useState)(),y=Object(i.a)(v,2),k=y[0],w=y[1],C=Object(a.useState)(!1),S=Object(i.a)(C,2),T=S[0],g=S[1],x=function(){var e;return u.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,u.a.awrap(t());case 4:e=n.sent,l(e),b(!1),h(!0),g(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),g(!0);case 14:case"end":return n.stop()}},null,null,[[0,11]])};return r.a.createElement("div",null,0===o.length&&!T&&r.a.createElement("button",{className:"button",type:"button",onClick:x},"Load"),f&&!T&&r.a.createElement("p",null,"Loading..."),O&&!f&&r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(e){0!==e&&(e=0),k!==e?(l(Object(m.a)(o).sort(function(e,t){return e.id-t.id})),w(e)):(l(Object(m.a)(o).sort(function(e,t){return t.id-e.id})),w())}},"ID"),r.a.createElement("th",{onClick:function(e){k!==e?(l(Object(m.a)(o).sort(function(e,t){return e.title.localeCompare(t.title)})),w(e)):(l(Object(m.a)(o).sort(function(e,t){return t.title.localeCompare(e.title)})),w())}},"TITLE"),r.a.createElement("th",{onClick:function(e){k!==e?(l(Object(m.a)(o).sort(function(e,t){return e.user.name.localeCompare(t.user.name)})),w(e)):(l(Object(m.a)(o).sort(function(e,t){return t.user.name.localeCompare(e.user.name)})),w())}},"USER"),r.a.createElement("th",{onClick:function(e){k!==e?(l(Object(m.a)(o).sort(function(e,t){return e.completed-t.completed})),w(e)):(l(Object(m.a)(o).sort(function(e,t){return t.completed-e.completed})),w())}},"STATUS"))),r.a.createElement("tbody",null,o.map(function(e){return r.a.createElement(p,{todo:e,key:e.id})}))),T&&r.a.createElement("div",null,"Error",r.a.createElement("button",{className:"button",type:"button",onClick:x},"Try again")))},b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"Dynamic list of todos"),r.a.createElement(f,{getTodos:function(){var e,t,n,a;return u.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.awrap(Promise.all([fetch("https://jsonplaceholder.typicode.com/users"),fetch("https://jsonplaceholder.typicode.com/todos")]).then(function(e){return Promise.all(e.map(function(e){return e.json()}))}));case 2:return e=r.sent,t=Object(i.a)(e,2),n=t[0],a=t[1],r.abrupt("return",a.map(function(e){return Object(s.a)({},e,{user:n.find(function(t){return t.id===e.userId})})}));case 7:case"end":return r.stop()}})}}))};o.a.render(r.a.createElement(b,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.06b93365.chunk.js.map