(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[3],{413:function(e,t,c){"use strict";var n=c(16),a=c(2);t.a=function(e){return Object(a.jsxs)(n.g,{children:[Object(a.jsx)(n.j,{alt:"Card image cap",src:e.image}),Object(a.jsxs)(n.h,{className:"p-4",children:[Object(a.jsx)(n.m,{tag:"h5",children:e.title}),Object(a.jsx)(n.k,{children:e.subtitle}),Object(a.jsx)(n.l,{className:"mt-3",children:e.text}),Object(a.jsx)(n.e,{color:e.color,children:"Read More"})]})]})}},414:function(e,t,c){"use strict";t.a=c.p+"static/media/bg1.537e9bd5.jpg"},415:function(e,t,c){"use strict";t.a=c.p+"static/media/bg2.94ab4b60.jpg"},416:function(e,t,c){"use strict";t.a=c.p+"static/media/bg3.5668e1f0.jpg"},417:function(e,t,c){"use strict";t.a=c.p+"static/media/bg4.62319dde.jpg"},420:function(e,t,c){},432:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(9),s=c(16),i=c(401),r=c(399),l=c(407),j=c(397),o=c(58),b=c.n(o),d=c(189),u=c(392),g=c(396),O=c(403),x=(c(418),c(2)),h=c(0),f=(c(207),function(e){return Object(x.jsx)(s.g,{children:Object(x.jsx)(s.h,{children:Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("div",{className:"circle-box lg-box d-inline-block ".concat(e.bg),children:Object(x.jsx)("i",{className:e.icon})}),Object(x.jsxs)("div",{className:"ms-3",children:[Object(x.jsx)("h3",{className:"mb-0 font-weight-bold",children:e.earning}),Object(x.jsx)("small",{className:"text-muted",children:e.subtitle})]})]})})})}),m=(c(413),c(414),c(415),c(416),c(417),c(44)),v=c(21),p=c(68),w=(c(118),c(175)),N=c(91),S=c(121),C=(c(420),c.p+"static/media/spinner.e8697d57.gif"),D=Object(h.createContext)({scan:null,write:null,setActions:function(){}}),k=function(){var e=Object(h.useContext)(D),t=e.actions,c=e.setActions;return Object(x.jsxs)("div",{className:"scanner",children:[Object(x.jsx)("p",{className:"scanner-exit",onClick:function(){return c(Object(n.a)(Object(n.a)({},t),{},{scan:null}))},children:"X"}),Object(x.jsxs)("div",{className:"scanner-container",children:[Object(x.jsx)("img",{src:C,alt:"spinning log",className:"scanner-image"}),Object(x.jsx)("p",{className:"scanner-text",children:"Scanning..."})]})]})},y=(c(174),c(158),c(36)),F=c.n(y),E=c(54),T=function(){var e=Object(h.useState)(""),t=Object(a.a)(e,2),c=(t[0],t[1]),n=Object(v.e)(),s=Object(h.useState)(),i=Object(a.a)(s,2),r=i[0],l=i[1],j=Object(h.useContext)(D),o=j.actions,b=j.setActions,d=Object(E.c)(),u=Object(h.useCallback)(Object(S.a)(Object(N.a)().mark((function e(){var t;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("NDEFReader"in window)){e.next=13;break}return e.prev=1,t=new window.NDEFReader,e.next=5,t.scan();case 5:console.log("Scan started successfully."),t.onreadingerror=function(){console.log("Cannot read data from the NFC tag. Try another one?")},t.onreading=function(e){console.log("NDEF message read."),g(e),b({scan:"scanned",write:null})},e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("Error! Scan failed to start: ".concat(e.t0,"."));case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),[b]),g=function(e){var t=e.message,n=e.serialNumber;l(n);var a,s=Object(w.a)(t.records);try{for(s.s();!(a=s.n()).done;){var i=a.value;if("text"===i.recordType){var r=new TextDecoder(i.encoding);c(r.decode(i.data))}}}catch(j){s.e(j)}finally{s.f()}};return Object(h.useEffect)((function(){u()}),[u]),Object(x.jsx)(x.Fragment,{children:"scanned"===o.scan?Object(x.jsxs)("div",{children:["scanner"===d&&n("/tags/scan/"+r),"tagger"===d&&n("/tags/register/"+r),"admin"===d&&n("/tags/register/"+r),"superAdmin"===d&&n("/tags/register/"+r)]}):Object(x.jsx)(k,{status:o.scan})})},A=c(48),R=c(153);c(211),t.default=function(){var e=Object(h.useState)(b()()),t=Object(a.a)(e,2),c=t[0],o=t[1],w=Object(h.useState)(""),N=Object(a.a)(w,2),S=N[0],C=N[1],k=Object(h.useState)([]),y=Object(a.a)(k,2),z=(y[0],y[1]),Q=Object(h.useState)(),Y=Object(a.a)(Q,2),I=(Y[0],Y[1]),H=Object(v.e)(),J=(Object(p.b)(),Object(h.useState)(!1)),M=Object(a.a)(J,2),P=M[0],W=M[1],B=Object(p.c)((function(e){return e.tagDetails.tagScanStatus})),L=Object(h.useState)(null),V=Object(a.a)(L,2),X=V[0],q=V[1],G=X||{},K=G.scan,U=(G.write,{actions:X,setActions:q}),Z=Object(h.useState)(),$=Object(a.a)(Z,2),_=$[0],ee=$[1];Object(h.useEffect)((function(){ee(Object(E.c)())}),[]);var te=function(e){q(Object(n.a)({},e))};Object(h.useState)({total:"",scanned:"",left:""});Object(h.useEffect)((function(){console.log(B),W(B)}),[B]),Object(h.useEffect)((function(){var e=sessionStorage.getItem("userCity");console.log("!!",e),z(e)}),[]),Object(h.useEffect)((function(){if(""!==S){var e=b()(c).format("D/M/YYYY");I(e);var t={date:e,cityName:S};console.log(t),A.a.getTagStatusForVisitor(t).then((function(e){console.log(e.data),W((function(t){return Object(n.a)(Object(n.a)({},t),{},{total:e.data.totalTags,scanned:e.data.scannedTags,left:e.data.notScanned})}))})).catch((function(e){console.log(e),F.a.fire({icon:"error",title:"Error",text:e.response.data.message})}))}}),[c,S]);return Object(x.jsxs)("div",{children:[Object(x.jsxs)(s.F,{children:[Object(x.jsx)(s.n,{sm:"6",lg:"6",children:("scanner"===_||"admin"===_||"superAdmin"===_)&&Object(x.jsx)(m.a,{title:"Scan Tag",children:Object(x.jsxs)(s.F,{children:[Object(x.jsx)(s.n,{lg:"4",children:Object(x.jsx)("div",{className:"mt-3",children:Object(x.jsx)(s.e,{color:"primary",size:"lg",disabled:"scanner"!==_,onClick:function(){return te({scan:"scanning",write:null})},children:"Scan"})})}),Object(x.jsx)(s.n,{lg:"4",children:Object(x.jsx)("div",{className:"mt-3",children:Object(x.jsx)(s.e,{size:"lg",color:"warning",disabled:"scanner"!==_,onClick:function(){return H("/tags/scanQr")},children:"Scan QR"})})})]})})}),Object(x.jsx)(s.n,{sm:"6",lg:"6",children:("tagger"===_||"admin"===_||"superAdmin"===_)&&Object(x.jsx)(m.a,{title:"Register New Tag",children:Object(x.jsxs)(s.F,{children:[Object(x.jsx)(s.n,{lg:"6",children:Object(x.jsx)("div",{className:"mt-3",children:Object(x.jsx)(s.e,{color:"primary",size:"lg",onClick:function(){return te({scan:"scanning",write:null})},children:"Register Tag"})})}),Object(x.jsx)(s.n,{lg:"6",children:Object(x.jsx)("div",{className:"mt-3",children:Object(x.jsx)(s.e,{color:"warning",size:"lg",onClick:function(){return H("/tags/scanQr")},children:"Register QR"})})})]})})})]}),("visitor"===_||"admin"===_||"superAdmin"===_)&&Object(x.jsxs)(s.F,{children:[Object(x.jsx)(s.n,{sm:"6",lg:"3",children:Object(x.jsxs)(R.a,{children:[Object(x.jsxs)(l.a,{sx:{marginBottom:1,minWidth:"100%"},children:[Object(x.jsx)(i.a,{id:"demo-simple-select-autowidth-label",children:"City"}),Object(x.jsxs)(j.a,{labelId:"city",id:"city",value:S,onChange:function(e){C(e.target.value)},autoWidth:!0,label:"City",children:[Object(x.jsx)(r.a,{value:"",children:Object(x.jsx)("em",{children:"None"})}),Object(x.jsx)(r.a,{value:"Hisar",children:"Hisar"}),Object(x.jsx)(r.a,{value:"Sirsa",children:"Sirsa"}),Object(x.jsx)(r.a,{value:"Delhi",children:"Delhi"})]})]}),Object(x.jsx)(d.a,{dateAdapter:u.a,children:Object(x.jsx)(g.a,{value:c,onChange:function(e){console.log("!!",e),o(e)},renderInput:function(e){return Object(x.jsx)(O.a,Object(n.a)({},e))},disableFuture:!0,shouldDisableDate:function(e){var t=new Date(e);if(t>new Date)return!0;if(0===t.getDay())return!0;var c=new Date;return c.setDate(c.getDate()-30),t<c}})})]})}),Object(x.jsx)(s.n,{sm:"6",lg:"3",children:Object(x.jsx)(f,{bg:"bg-light-info text-into",title:"Sales",subtitle:"Total",earning:P.total,icon:"bi bi-bag"})}),Object(x.jsx)(s.n,{sm:"6",lg:"3",children:Object(x.jsx)(f,{bg:"bg-light-warning text-warning",title:"New Project",subtitle:"Scanned",earning:P.scanned,icon:"bi bi-basket3"})}),Object(x.jsx)(s.n,{sm:"6",lg:"3",children:Object(x.jsx)(f,{bg:"bg-light-danger text-danger",title:"Refunds",subtitle:"Left",earning:P.left,icon:"bi bi-wrong"})})]}),Object(x.jsx)(D.Provider,{value:U,children:K&&Object(x.jsx)(T,{})})]})}}}]);
//# sourceMappingURL=3.925d6466.chunk.js.map