(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(7),i=n.n(r),a=(n(13),n(6)),o=(n(5),n(0)),u=function(e){var t=e.months,n=e.chosenEmployees,s=Object(c.useMemo)((function(){return t.map((function(e,t){return{title:e,users:n.filter((function(e){return new Date(e.dob).getMonth()===t}))}}))}),[n]);Object(c.useEffect)((function(){localStorage.setItem("monthsWithUsers",JSON.stringify(s))}),[s]);var r=JSON.parse(localStorage.getItem("monthsWithUsers")||"");return Object(o.jsxs)("div",{className:"birthdays",children:[Object(o.jsx)("h2",{children:"Birthdays"}),Object(o.jsx)("div",{children:r.map((function(e){var t=e.title,n=e.users;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:t}),Object(o.jsx)("div",{children:n.map((function(e){var t=e.lastName,n=e.firstName,c=e.dob;return Object(o.jsx)("div",{children:"".concat(t," ").concat(n," - ").concat(new Date(c).toDateString())})}))})]},t)}))})]})},l=n(8),j=function(e){var t=e.alphabet,n=e.users,s=(e.setUsers,e.chosenEmployees),r=e.setChosenEmployees,i=Object(c.useMemo)((function(){return s.map((function(e){return e.id}))}),[s]),a=function(e,t){if(e.lastName[0]===t)return e};return Object(o.jsx)("div",{className:"table",children:t.map((function(e){return Object(o.jsxs)("div",{className:"column",children:[e,Object(o.jsx)("div",{className:"employee-list",children:n.filter((function(t){return a(t,e)})).length?n.filter((function(t){return a(t,e)})).map((function(e){var t=function(t){"active"===t.currentTarget.value?(r([e].concat(Object(l.a)(s))),console.log(s)):(!function(e){var t=s.filter((function(t){return t.id!==e}));r(t)}(e.id),console.log(s))};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:i.includes(e.id)?"active":"",children:[e.lastName," ",e.firstName]}),Object(o.jsxs)("div",{className:"radio-group",children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",value:"not active",defaultChecked:!0,name:e.firstName,onChange:t}),"Not active"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",value:"active",name:e.firstName,onChange:t}),"Active"]})]})]})})):Object(o.jsx)("div",{children:" No employees "})})]},e)}))})},h=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],d=["January","February","March","April","May","June","July","August","September","October","November","December"],b=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),i=Object(a.a)(r,2),l=i[0],b=i[1];return Object(c.useEffect)((function(){fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(j,{alphabet:h,users:n,setUsers:s,chosenEmployees:l,setChosenEmployees:b}),Object(o.jsx)(u,{months:d,chosenEmployees:l})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),m()},5:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.3bff8db2.chunk.js.map