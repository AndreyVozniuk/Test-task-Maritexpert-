(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a(5),i=a.n(r),l=a(3),s=a(4),o=a(6),d=a(2),u="CHARACTERS/SET_CHARACTERS",j="CHARACTERS/ADD_CHARACTER",p="CHARACTERS/REMOVE_CHARACTER",b="CHARACTERS/CHANGE_NAME",h={characters:null},O=Object(s.b)({charactersStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{characters:t.payload});case j:var a=Object(d.a)({},e.characters);return a[t.payload.race]=[].concat(Object(o.a)(a[t.payload.race]),[t.payload.character]),Object(d.a)(Object(d.a)({},e),{},{characters:a});case p:var c=Object(d.a)({},e.characters);return c[t.payload.race]=c[t.payload.race].filter((function(e){return e.id!==t.payload.id})),Object(d.a)(Object(d.a)({},e),{},{characters:c});case b:var n=Object(d.a)({},e.characters),r=n[t.payload.race].findIndex((function(e){return e.id===t.payload.id}));return n[t.payload.race][r].name=t.payload.name,Object(d.a)(Object(d.a)({},e),{},{characters:n});default:return e}}}),m=Object(s.c)(O);a(23);function f(e){var t=e.children,a=e.onClick,n=e.style;return Object(c.jsx)("button",{className:"btn",onClick:a,style:n,children:t})}a(24);function y(e){var t=e.children,a=e.title,n=Object(l.b)();return Object(c.jsxs)("div",{className:"column",children:[Object(c.jsxs)("div",{className:"column-title",children:["\u0420\u0430\u0441\u0430 - ",a,Object(c.jsx)(f,{onClick:function(){var e=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430"),t={character:{id:Date.now(),name:e},race:a};null!==e&&e.replaceAll(" ","")&&n({type:j,payload:t})},style:{marginLeft:"25px"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),t]})}a(25);function x(e){var t=e.name,a=e.id,n=e.race,r=Object(l.b)();return Object(c.jsxs)("div",{className:"character",children:[Object(c.jsxs)("div",{className:"character-name",children:["\u0418\u043c\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430 - ",Object(c.jsx)("span",{style:{fontStyle:"italic",color:"salmon",fontSize:"16px"},children:t})]}),Object(c.jsxs)("div",{style:{width:"100%"},children:[Object(c.jsx)(f,{style:{marginRight:"10px",marginBottom:"5px",padding:"8px"},onClick:function(){var e=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0438\u043c\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430");null!==e&&e.replaceAll(" ","")&&r(function(e,t,a){return{type:b,payload:{race:e,id:t,name:a}}}(n,a,e))},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043c\u044f"}),Object(c.jsx)(f,{style:{padding:"8px"},onClick:function(){return r(function(e,t){return{type:p,payload:{race:e,id:t}}}(n,a))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})}a(26);var v=new WebSocket("ws://testapi.marit.expert:3004");var A=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.charactersStore.characters}));return Object(n.useEffect)((function(){v.onopen=function(){return v.send({cmd:"get_list"})},v.onmessage=function(t){var a=t.data,c={};JSON.parse(a).forEach((function(e){var t=e.race;Object.keys(c).includes(t)?c[t]=[].concat(Object(o.a)(c[t]),[{id:e.id,name:e.name}]):c[t]=[{id:e.id,name:e.name}]})),e(function(e){return{type:u,payload:e}}(c))}}),[]),Object(c.jsx)("div",{className:"app",children:t?Object.keys(t).map((function(e,a){return Object(c.jsx)(y,{title:e,children:0===t[e].length?Object(c.jsx)("div",{style:{marginTop:"25px",textAlign:"center"},children:"\u0412\u044b \u0443\u0434\u0430\u043b\u0438\u043b\u0438 \u0432\u0441\u0435\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u0439 \ud83d\ude04"}):t[e].map((function(t){return Object(c.jsx)(x,{name:t.name,id:t.id,race:e},t+t.id)}))},e+a)})):null})};i.a.render(Object(c.jsx)(l.a,{store:m,children:Object(c.jsx)(A,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.1d7c5fc2.chunk.js.map