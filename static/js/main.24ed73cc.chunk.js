(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(7),s=r.n(a),l=(r(12),r(6)),i=r(4),o=(r(13),r(0));function u(){var e=c.a.useState(Array(9).fill(null)),t=Object(i.a)(e,2),r=t[0],n=t[1],a=c.a.useState(Array(9).fill(null)),s=Object(i.a)(a,2),u=s[0],j=s[1],b=function(e){return e.filter(Boolean).length%2===0?"X":"O"}(r),d=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(i.a)(t[r],3),c=n[0],a=n[1],s=n[2];if(e[c]&&e[c]===e[a]&&e[c]===e[s])return e[c]}return null}(r),f=function(e,t,r){return e?"".concat(e," won the game!"):t.every(Boolean)?"Game Draw":"Current Turn: Player ".concat(r)}(d,r,b);function h(e){if(!d&&!r[e]){var t=Object(l.a)(r);t[e]=b,n(t);var c=Object(l.a)(u);c[e]=function(e){return e.filter(Boolean).length%2===0?Object(o.jsxs)("svg",{className:"xmark",children:[Object(o.jsx)("rect",{className:"r1",fill:"white",width:"20",rx:"5",transform:"rotate(-45) translate(-25, 25)"}),Object(o.jsx)("rect",{className:"r2",fill:"white",width:"20",rx:"5",transform:"rotate(45) translate(68, -38)"})]}):Object(o.jsx)("svg",{className:"omark",children:Object(o.jsx)("circle",{className:"circ",cx:"50",cy:"68",r:"40",stroke:"white",fill:"transparent"})})}(r),j(c)}}function m(e){return Object(o.jsx)("div",{className:"square",onClick:function(){return h(e)},children:u[e]})}return Object(o.jsxs)("div",{className:"boardlayout",children:[Object(o.jsx)("div",{className:"status",children:f}),Object(o.jsxs)("div",{className:"board-row",children:[m(0),m(1),m(2)]}),Object(o.jsxs)("div",{className:"board-row",children:[m(3),m(4),m(5)]}),Object(o.jsxs)("div",{className:"board-row",children:[m(6),m(7),m(8)]}),Object(o.jsx)("button",{className:"restart",onClick:function(){n(Array(9).fill(null)),j(Array(9).fill(null))},children:"Restart"})]})}function j(){return Object(o.jsx)("div",{className:"game",children:Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(u,{})})})}var b=function(){return Object(o.jsx)(j,{})},d=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.24ed73cc.chunk.js.map