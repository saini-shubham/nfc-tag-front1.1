(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[0],{183:function(e,t,c){"use strict";c.d(t,"b",(function(){return s}));var n=c(193),a=Object(n.b)({name:"tag",initialState:{tagId:"",tagScanStatus:!1,tagListRequiredDetails:{}},reducers:{setTagId:function(e,t){e.tagId=t.payload},setTagScanStatus:function(e,t){e.tagScanStatus=t.payload},setTagDetailsRequiredDetails:function(e,t){e.tagListRequiredDetails=t.payload}}}),s=a.actions;t.a=a.reducer},185:function(e,t,c){"use strict";t.a=c.p+"static/media/user1.f3714f33.jpg"},200:function(e,t,c){"use strict";t.a=c.p+"static/media/user2.ddd14b39.jpg"},201:function(e,t,c){"use strict";t.a=c.p+"static/media/user3.a57a5165.jpg"},202:function(e,t,c){"use strict";t.a=c.p+"static/media/user4.6ac95ef9.jpg"},203:function(e,t,c){"use strict";t.a=c.p+"static/media/user5.847ea5a9.jpg"},221:function(e,t,c){"use strict";var n=c(20),a=c(3);t.a=function(e){var t=e.children,c=(e.title,e.subtitle);return Object(a.jsx)(n.g,{children:Object(a.jsxs)(n.h,{className:"p-4",children:[Object(a.jsx)(n.k,{className:"text-muted mb-3",children:c||""}),Object(a.jsx)("div",{children:t})]})})}},258:function(e,t,c){"use strict";var n=c(5),a=c(4),s=c(12),r=c(1),i=c(102),l=c(165),j=c(781),d=c(412),o=c(416),u=c(414),b=c(211),h=c(413),O=c(60),x=c(91),m=c(26),g=c(63),f=c(45),p=c.n(f),v=c(71),y=c(3);t.a=function(e){var t=Object(m.e)(),c=(Object(x.b)(),Object(m.f)().tagId),f=Object(v.b)(),N=Object(r.useState)({tagId:c,userId:f,name:"",houseNo:"",phoneNo:"",locality:"",city:"",state:"",pincode:"0000000"}),S=Object(s.a)(N,2),C=S[0],D=S[1],T=function(e){var t=e.target,c=t.name,s=t.value;console.log(c,s),D((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(n.a)({},c,s))}))};return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(O.a,{title:"Form Details",children:Object(y.jsx)("form",{onSubmit:function(e){e.preventDefault(),g.a.tagRegister(C).then((function(e){console.log(e),p.a.fire({icon:"Already Registerd"===e.data.message?"error":"success",title:e.data.message}),D({tagId:"",userId:"",name:"",houseNo:"",phoneNo:"",locality:"",city:"",state:"",pincode:""}),t("/starter")})).catch((function(e){console.log(e.response.data),p.a.fire({icon:"error",title:"Error",text:"Enter Correct Details"})}))},children:Object(y.jsxs)(i.a,{container:!0,spacing:2,children:[Object(y.jsx)(i.a,{item:!0,xs:12,children:Object(y.jsx)(l.a,{name:"name",label:"Name",variant:"outlined",fullWidth:!0,value:C.name,onChange:T,required:!0})}),Object(y.jsx)(i.a,{item:!0,xs:12,children:Object(y.jsx)(l.a,{name:"houseNo",label:"House No",variant:"outlined",fullWidth:!0,value:C.houseNo,onChange:T,required:!0})}),Object(y.jsx)(i.a,{item:!0,xs:6,children:Object(y.jsx)(l.a,{name:"phoneNo",label:"Phone No",variant:"outlined",fullWidth:!0,value:C.phoneNo,onChange:T,required:!0})}),Object(y.jsx)(i.a,{item:!0,xs:6,children:Object(y.jsx)(l.a,{name:"locality",label:"Locality",variant:"outlined",fullWidth:!0,value:C.locality,onChange:T,required:!0})}),Object(y.jsx)(i.a,{item:!0,xs:6,children:Object(y.jsxs)(d.a,{fullWidth:!0,required:!0,children:[Object(y.jsx)(o.a,{fullWidth:!0,children:"City"}),Object(y.jsxs)(u.a,{name:"city",fullWidth:!0,value:C.city,onChange:T,children:[Object(y.jsx)(b.a,{value:"Ellenabad",children:"Ellenabad"}),Object(y.jsx)(b.a,{value:"Hisar",children:"Hisar"}),Object(y.jsx)(b.a,{value:"Sirsa",children:"Sirsa"}),Object(y.jsx)(b.a,{value:"Delhi",children:"Delhi"})]}),Object(y.jsx)(h.a,{children:"Select your city"})]})}),Object(y.jsx)(i.a,{item:!0,xs:6,children:Object(y.jsx)(l.a,{name:"state",label:"State",variant:"outlined",fullWidth:!0,value:C.state,onChange:T})}),Object(y.jsx)(i.a,{item:!0,xs:12,children:Object(y.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0Submit"})})]})})})})}},282:function(e,t,c){"use strict";var n=c(12),a=c(1),s=c(26),r=(c(60),c(63)),i=c(45),l=c.n(i),j=c(3);t.a=function(){var e=Object(s.f)(),t=Object(s.e)(),c=Object(a.useState)(!0),i=Object(n.a)(c,2),d=(i[0],i[1],Object(a.useState)()),o=Object(n.a)(d,2);o[0],o[1];return Object(a.useEffect)((function(){console.log(e),r.a.scanTag(e.tagId).then((function(e){console.log(e.data),e.data.message&&"Scanned Successfully"===e.data.message?l.a.fire({icon:"Scanned Successfully"===e.data.message?"success":"info",title:e.data.message}).then((function(){return t("/starter")})):l.a.fire({icon:"info",title:e.data.error||e.data.message}).then((function(){return t("/starter")}))})).catch((function(e){return l.a.fire({icon:"error",title:e.response.data.error}).then((function(){return t("/starter")}))}))}),[]),Object(j.jsx)(j.Fragment,{})}},417:function(e,t,c){"use strict";var n=c(20),a=c(185),s=c(200),r=c(201),i=c(202),l=c(203),j=c(3),d=[{avatar:a.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Flexy React",status:"pending",weeks:"35",budget:"95K"},{avatar:s.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Lading pro React",status:"done",weeks:"35",budget:"95K"},{avatar:r.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Elite React",status:"holt",weeks:"35",budget:"95K"},{avatar:i.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Flexy React",status:"pending",weeks:"35",budget:"95K"},{avatar:l.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Ample React",status:"done",weeks:"35",budget:"95K"}];t.a=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(n.g,{children:Object(j.jsxs)(n.h,{children:[Object(j.jsx)(n.m,{tag:"h5",children:"RegisteredUser Listing"}),Object(j.jsx)(n.k,{className:"mb-2 text-muted",tag:"h6",children:"Overview of the projects"}),Object(j.jsxs)(n.H,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Team Lead"}),Object(j.jsx)("th",{children:"Project"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{children:"Weeks"}),Object(j.jsx)("th",{children:"Weeks"}),Object(j.jsx)("th",{children:"Weeks"}),Object(j.jsx)("th",{children:"Budget"})]})}),Object(j.jsx)("tbody",{children:d.map((function(e,t){return Object(j.jsxs)("tr",{className:"border-top",children:[Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:e.name}),Object(j.jsx)("span",{className:"text-muted",children:e.email})]})})}),Object(j.jsx)("td",{children:e.project}),Object(j.jsx)("td",{children:"pending"===e.status?Object(j.jsx)("span",{className:"p-2 bg-danger rounded-circle d-inline-block ms-3"}):"holt"===e.status?Object(j.jsx)("span",{className:"p-2 bg-warning rounded-circle d-inline-block ms-3"}):Object(j.jsx)("span",{className:"p-2 bg-success rounded-circle d-inline-block ms-3"})}),Object(j.jsx)("td",{children:e.weeks}),Object(j.jsx)("td",{children:e.budget})]},t)}))})]})]})})})}},452:function(e,t,c){},509:function(e,t){},511:function(e,t){},540:function(e,t){},541:function(e,t){},60:function(e,t,c){"use strict";var n=c(20),a=c(3);t.a=function(e){var t=e.children,c=e.title,s=e.subtitle;return Object(a.jsxs)(n.g,{children:[Object(a.jsx)(n.m,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:c}),Object(a.jsxs)(n.h,{className:"p-4",children:[Object(a.jsx)(n.k,{className:"text-muted mb-3",children:s||""}),Object(a.jsx)("div",{children:t})]})]})}},615:function(e,t){},63:function(e,t,c){"use strict";var n=c(116),a=c(71),s={headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",accept:"application/json",token:Object(a.a)()}},r="http://13.234.104.94";t.a={tagRegister:function(e){return n.a.post(r+"/tagRegister",e,s)},scanTag:function(e){return n.a.get(r+"/tags/"+e,s)},getTagStatusCompleteDetails:function(e){return n.a.post(r+"/tagDetailsByCity",e,s)},getAllRegiteredTagsInACity:function(e){return n.a.get(r+"/tags/byCity/"+e,s)},getTagStatusForVisitor:function(e){return n.a.post(r+"/tags/count",e,s)},deleteTagById:function(e){return n.a.delete(r+"/tags/remove/"+e,s)},getPdf:function(e){return n.a.post(r+"/tags/generatepdf/date",s)}}},71:function(e,t,c){"use strict";function n(){return sessionStorage.getItem("token")}function a(){return sessionStorage.getItem("userType")}function s(){return sessionStorage.getItem("userId")}c.d(t,"a",(function(){return n})),c.d(t,"c",(function(){return a})),c.d(t,"b",(function(){return s}))},764:function(e,t,c){},769:function(e,t,c){},770:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(27),s=c.n(a),r=(c(452),c(26)),i=c(20),l=c(60),j=c(3),d=function(){var e=Object(r.e)();return Object(j.jsxs)(i.F,{children:[Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsx)(l.a,{title:"Create New User",children:Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){return e("/users/createUser")},children:"Create User"})})})})})}),Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsx)(l.a,{title:"User Details",children:Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){return e("/users/details")},children:"List of Users"})})})})})})]})},o=c(4),u=c(12),b=c(102),h=c(165),O=c(893),x=c(891),m=c(899),g=c(889),f=c(888),p=c(76),v=c.n(p),y=c(390),N=c(884),S=c(63),C=c(91),D=c(183),T=(c(421),function(){var e=Object(C.b)(),t=Object(r.e)(),c=Object(n.useState)(v()()),a=Object(u.a)(c,2),s=a[0],d=a[1],p=Object(n.useState)(),S=Object(u.a)(p,2),T=S[0],w=S[1],I=function(e){w(e.target.value)};v()();return Object(j.jsxs)(i.F,{children:[Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsxs)(l.a,{title:"Live Status",children:[Object(j.jsxs)(b.a,{container:!0,spacing:1,children:[Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsxs)(m.a,{sx:{marginBottom:1,minWidth:"100%"},children:[Object(j.jsx)(O.a,{id:"demo-simple-select-autowidth-label",children:"City"}),Object(j.jsxs)(g.a,{required:!0,labelId:"city",id:"city",value:T,onChange:I,autoWidth:!0,label:"City",children:[Object(j.jsx)(x.a,{value:"",children:Object(j.jsx)("em",{children:"None"})}),Object(j.jsx)(x.a,{value:"Ellenabad",children:"Ellenabad"}),Object(j.jsx)(x.a,{value:"Hisar",children:"Hisar"}),Object(j.jsx)(x.a,{value:"Sirsa",children:"Sirsa"}),Object(j.jsx)(x.a,{value:"Delhi",children:"Delhi"})]})]})}),Object(j.jsx)(y.a,{dateAdapter:N.a,children:Object(j.jsx)(f.a,{value:s,onChange:function(e){d(e)},renderInput:function(e){return Object(j.jsx)(h.a,Object(o.a)({},e))},disableFuture:!0,shouldDisableDate:function(e){var t=new Date(e);if(t>new Date)return!0;var c=new Date;return c.setDate(c.getDate()-60),t<c}})})]}),Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){new Date(s).toLocaleDateString();var c=v()(s).format("D/M/YYYY"),n={city:T,date:c};e(D.b.setTagDetailsRequiredDetails(n)),t("/tags/completeDetail")},children:"Tag List"})})})})]})}),Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsx)(l.a,{title:"All Registered Tags",children:Object(j.jsxs)(i.F,{children:[Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{children:Object(j.jsx)(b.a,{container:!0,spacing:1,children:Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsxs)(m.a,{sx:{marginBottom:1,minWidth:"100%"},children:[Object(j.jsx)(O.a,{id:"demo-simple-select-autowidth-label",children:"City"}),Object(j.jsxs)(g.a,{required:!0,labelId:"city",id:"city",value:T,onChange:I,autoWidth:!0,label:"City",children:[Object(j.jsx)(x.a,{value:"",children:Object(j.jsx)("em",{children:"None"})}),Object(j.jsx)(x.a,{value:"Ellenabad",children:"Ellenabad"}),Object(j.jsx)(x.a,{value:"Hisar",children:"Hisar"}),Object(j.jsx)(x.a,{value:"Sirsa",children:"Sirsa"}),Object(j.jsx)(x.a,{value:"Delhi",children:"Delhi"})]})]})})})})}),Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){t("/tags/registeredInCity/"+T)},children:"List of Registered Tags"})})})})]})})})]})}),w=c(258),I=c(116),k=c(71),F={headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",accept:"application/json",token:Object(k.a)()}},W="http://13.234.104.94",A=function(e){return I.a.post(W+"/createUser",e,F)},R=function(){return I.a.get(W+"/users",F)},H=function(e){return I.a.delete(W+"/users/"+e,F)},L=c(412),E=c(416),q=c(414),P=c(211),B=c(781),U=c(45),G=c.n(U),z=["Ellenabad","Hisar","Sirsa","Pune","Delhi"],K=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(u.a)(s,2),i=r[0],d=r[1],o=Object(n.useState)(""),O=Object(u.a)(o,2),x=O[0],m=O[1],g=Object(n.useState)([]),f=Object(u.a)(g,2),p=f[0],v=f[1],y=Object(n.useState)(""),N=Object(u.a)(y,2),S=N[0],C=N[1],D=Object(n.useState)(""),T=Object(u.a)(D,2),w=T[0],I=T[1];return Object(j.jsx)(l.a,{title:"User Details",children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),A({name:c,adhaarNumber:i,firmName:x,selectedCities:p,phoneNumber:S,userType:w}).then((function(e){console.log(e),G.a.fire({icon:"success",title:e.data.message,text:"user Id: "+e.data.userId+"-----Password: "+e.data.password})})).catch((function(e){return G.a.fire("Adhar/Phone not valid")}))},children:Object(j.jsxs)(b.a,{container:!0,spacing:1,children:[Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Name",value:c,onChange:function(e){a(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Aadhaar Number",value:i,onChange:function(e){d(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Firm Name",value:x,onChange:function(e){m(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsxs)(L.a,{fullWidth:!0,required:!0,children:[Object(j.jsx)(E.a,{children:"City"}),Object(j.jsxs)(q.a,{multiple:!0,value:p,onChange:function(e){v(e.target.value)},renderValue:function(e){return e.join(", ")},children:["\xa0 \xa0 \xa0 \xa0 \xa0 \xa0",z.map((function(e){return Object(j.jsxs)(P.a,{value:e,children:["\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",e]},e)}))]})]})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Phone Number",value:S,onChange:function(e){C(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsxs)(L.a,{fullWidth:!0,required:!0,children:[Object(j.jsx)(E.a,{fullWidth:!0,children:"User Type"}),Object(j.jsxs)(q.a,{value:w,onChange:function(e){I(e.target.value)},children:[Object(j.jsx)(P.a,{value:"admin",children:"Admin"}),Object(j.jsx)(P.a,{value:"tagger",children:"Tagger"}),Object(j.jsx)(P.a,{value:"scanner",children:"Scanner"}),Object(j.jsx)(P.a,{value:"visitor",children:"Visitor"})]})]})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(B.a,{type:"submit",variant:"contained",color:"primary",children:"\xa0 \xa0 \xa0 \xa0 \xa0Submit"})})]})})})},Y=c(900),J=(c(417),c(396)),M=c.n(J),V=c(185),Q=c(200),_=c(201),X=c(202),Z=c(203),$=(V.a,Q.a,_.a,X.a,Z.a,function(){Object(r.e)();var e=Object(n.useState)(),t=Object(u.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){R().then((function(e){console.log(e.data),a(e.data)})).catch((function(e){return console.log(e)}))}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"12",children:Object(j.jsx)(i.g,{children:Object(j.jsxs)(i.h,{children:[Object(j.jsx)(i.m,{tag:"h5",children:"Registered User Listing"}),Object(j.jsx)(i.k,{className:"mb-2 text-muted",tag:"h6"}),Object(j.jsxs)(i.H,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"User"}),Object(j.jsx)("th",{children:"Id"}),Object(j.jsx)("th",{children:"Firm"}),Object(j.jsx)("th",{children:"Phone No."}),Object(j.jsx)("th",{children:"Adhaar"}),Object(j.jsx)("th",{children:"City"}),Object(j.jsx)("th",{children:"Password"}),Object(j.jsx)("th",{children:"Delete"})]})}),Object(j.jsx)("tbody",{children:null===c||void 0===c?void 0:c.map((function(e,t){return"superAdmin"!==e.userType&&Object(j.jsxs)("tr",{className:"border-top",children:[Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:e.name}),Object(j.jsx)("span",{className:"text-muted",children:e.userType})]})})}),Object(j.jsx)("td",{children:e.userId}),Object(j.jsx)("td",{children:e.firmName}),Object(j.jsx)("td",{children:e.phoneNumber}),Object(j.jsx)("td",{children:e.adhaarNumber}),Object(j.jsx)("td",{children:e.city}),Object(j.jsx)("td",{children:e.password}),Object(j.jsx)("td",{children:Object(j.jsx)(Y.a,{onClick:(c=e.userId,function(){console.log("HI"),"sadmin"===c?G.a.fire({icon:"warn",title:"Sorry"}):(console.log(c),H(c).then((function(e){G.a.fire({icon:"success",title:e.data.message}).then((function(){R().then((function(e){console.log(e.data),a(e.data)})).catch((function(e){return console.log(e)}))})),console.log(e)})).catch((function(e){return alert(e)})))}),"aria-label":"delete",children:Object(j.jsx)(M.a,{})})})]},t);var c}))})]})]})})})})})}),ee=c(282),te=c(84),ce=c(124),ne=c(886),ae=c(887),se=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),d=i[0],o=i[1],O=Object(n.useState)({}),x=Object(u.a)(O,2),m=x[0],g=x[1],f=Object(r.e)(),p=Object(n.useCallback)(function(){var e=Object(ce.a)(Object(te.a)().mark((function e(t){var c,n;return Object(te.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://13.234.104.94/login",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}});case 3:if(403!==(c=e.sent).status&&401!==c.status||(console.log("hiii"),G.a.fire({icon:"error",title:"Authentication Error",text:"User not found"})),200!==c.status){e.next=15;break}return e.next=8,c.json();case 8:n=e.sent,console.log(n),sessionStorage.setItem("token",n.token),sessionStorage.setItem("userId",n.userId),sessionStorage.setItem("userType",n.userType),sessionStorage.setItem("userCity",n.city),f("/starter");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(j.jsx)(l.a,{children:Object(j.jsx)(ne.a,{maxWidth:"sm",children:Object(j.jsx)("form",{onSubmit:function(e){(e.preventDefault(),function(){var e=!0,t={};return c||(e=!1,t.email="Email is required"),d||(e=!1,t.password="Password is required"),g(t),e}())&&(p({userId:c,password:d}),console.log("Login successful"))},children:Object(j.jsxs)(b.a,{container:!0,spacing:2,children:[Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(ae.a,{variant:"h4",align:"center",gutterBottom:!0,children:"Login"})}),Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(h.a,{label:"Email",fullWidth:!0,value:c,onChange:function(e){return a(e.target.value)},error:!!m.email,helperText:m.email})}),Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(h.a,{label:"Password",type:"password",fullWidth:!0,value:d,onChange:function(e){return o(e.target.value)},error:!!m.password,helperText:m.password})}),Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(B.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Log In"})})]})})})})},re=c(221),ie=c(262),le=c.n(ie),je=(c(476),c(38)),de=(c(405),je.StyleSheet.create({heading:{fontSize:25,textAlign:"center",marginTop:"1%",marginBottom:"1%"},table:{display:"table",width:"80%",marginLeft:"auto",marginRight:"auto",borderStyle:"solid",borderWidth:1},tableRow:{margin:"auto",flexDirection:"row"},tableCol:{width:"25%",borderStyle:"solid",borderWidth:1},tableCell:{margin:"auto",marginTop:10,fontSize:10}}),function(e){var t=Object(n.useState)(),c=Object(u.a)(t,2),a=c[0],s=c[1],l=Object(C.c)((function(e){return e.tagDetails.tagListRequiredDetails})),d=new Date,o=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear(),b=Object(r.e)();Object(n.useRef)();Object(n.useEffect)((function(){console.log(l),S.a.getTagStatusCompleteDetails(l).then((function(e){console.log(e),404===e.status?alert(e.message):s(e.data)})).catch((function(e){console.log(e.response.data),G.a.fire({icon:"error",title:"Error",text:e.response.data.message}).then((function(){return b(-1)}))}))}),[l]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(re.a,{children:Object(j.jsxs)(i.g,{children:[Object(j.jsx)(i.g,{children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){S.a.getPdf(l).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Get PDF"})}),Object(j.jsxs)(i.h,{children:[Object(j.jsx)(i.m,{tag:"h5",children:"Status Report"}),Object(j.jsx)(i.k,{className:"mb-2 text-muted",tag:"h6"}),Object(j.jsxs)(i.H,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"House Detail"}),Object(j.jsx)("th",{children:"Locality"}),Object(j.jsx)("th",{children:"City"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{children:"Time"}),Object(j.jsx)("th",{children:"Scanned By"}),Object(j.jsx)("th",{children:"Action"})]})}),Object(j.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(j.jsxs)("tr",{className:"border-top",children:[Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:e.name}),Object(j.jsx)("span",{className:"text-muted",children:e.houseNo})]})})}),Object(j.jsx)("td",{children:e.locality}),Object(j.jsx)("td",{children:e.city}),Object(j.jsx)("td",{children:!1===e.scanned?Object(j.jsx)("span",{className:"p-2 bg-danger rounded-circle d-inline-block ms-3"}):Object(j.jsx)("span",{className:"p-2 bg-success rounded-circle d-inline-block ms-3"})}),Object(j.jsx)("td",{children:e.time}),Object(j.jsx)("td",{children:e.userId}),Object(j.jsx)("td",{children:Object(j.jsx)(Y.a,{"aria-label":"delete",disabled:l.date!==o,onClick:function(){return t=e.tagId,console.log(t),void S.a.scanTag(t).then((function(e){console.log(e.data),G.a.fire({icon:"Already Scanned Today"===e.data.message?"info":"success",title:"success",text:e.data.message}).then((function(){S.a.getTagStatusCompleteDetails(l).then((function(e){console.log(e),404===e.status?alert(e.message):s(e.data)})).catch((function(e){console.log(e.response.data),G.a.fire({icon:"error",title:"Error",text:e.response.data.message}).then((function(){return b(-1)}))}))}))})).catch((function(e){return console.log(e)}));var t},children:Object(j.jsx)(le.a,{})})})]},t)}))})]})]})]})})})}),oe=c(406),ue=c.n(oe),be=function(){var e=Object(r.f)(),t=Object(n.useState)(),c=Object(u.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){var t=e.city;S.a.getAllRegiteredTagsInACity(t).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){return console.log(e)}))}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.g,{children:Object(j.jsxs)(i.h,{children:[Object(j.jsxs)(i.m,{tag:"h5",children:["Registered Tags in ",e.city]}),Object(j.jsxs)(i.H,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"House Details"}),Object(j.jsx)("th",{children:"Phone No."}),Object(j.jsx)("th",{children:"Registered By"}),Object(j.jsx)("th",{children:"Date & Time"}),Object(j.jsx)("th",{children:"Action"})]})}),Object(j.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map((function(t,c){return Object(j.jsxs)("tr",{className:"border-top",children:[Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:t.houseNo}),Object(j.jsx)("span",{className:"text-muted",children:t.name+", "}),Object(j.jsx)("span",{className:"text-muted",children:t.locality})]})})}),Object(j.jsx)("td",{children:t.phoneNo}),Object(j.jsx)("td",{children:t.userId}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:t.registryDateTime.split("T")[0]}),Object(j.jsx)("span",{className:"text-muted",children:t.registryDateTime.split("T")[1]})]})})}),Object(j.jsx)("td",{children:Object(j.jsx)(Y.a,{"aria-label":"delete",onClick:function(){return c=t._id,console.log(c),void S.a.deleteTagById(c).then((function(t){console.log(t.data),G.a.fire({icon:"success",title:t.data.message}).then((function(){S.a.getAllRegiteredTagsInACity(e.city).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){return console.log(e)}))}))})).catch((function(e){console.log(e)}));var c},children:Object(j.jsx)(ue.a,{})})})]},c)}))})]})]})})})},he=(c(764),c(407)),Oe=c.n(he),xe=c(139),me=function(){var e=Object(r.e)(),t=Object(n.useState)("environment"),c=Object(u.a)(t,2),a=(c[0],c[1],Object(n.useState)(!0)),s=Object(u.a)(a,2),i=s[0],l=s[1],d=Object(n.useState)(!1),o=Object(u.a)(d,2),b=o[0],h=o[1],O=Object(n.useState)(),x=Object(u.a)(O,2),m=x[0],g=x[1],f=Object(n.useState)(!0),p=Object(u.a)(f,2),v=p[0],y=p[1],N=Object(k.c)(),S=function(){var e=Object(ce.a)(Object(te.a)().mark((function e(t){return Object(te.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!0),console.log("loaded data data",t,typeof t),t&&""!==t&&(console.log("loaded >>>",t),g(t),l(!1),h(!1));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(xe.a,{show:v,onHide:function(){y(!1),e("/starter")},size:"sm",scrollable:!0,children:[Object(j.jsx)(xe.a.Header,{closeButton:!0,children:Object(j.jsx)(xe.a.Title,{children:"Scan Tag"})}),Object(j.jsxs)(xe.a.Body,{children:[i&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Oe.a,{facingMode:"environment",delay:500,onError:function(e){console.error(e)},onScan:S})}),b&&Object(j.jsx)("p",{children:"Loading"}),""!==m&&Object(j.jsx)("p",{children:m})]})]}),b?Object(j.jsx)("p",{children:"Loading..."}):Object(j.jsxs)(j.Fragment,{children:["scanner"===N&&e("/tags/scan/"+m),"tagger"===N&&e("/tags/register/"+m),"admin"===N&&e("/tags/register/"+m),"superAdmin"===N&&e("/tags/register/"+m)]})]})},ge=Object(n.lazy)((function(){return c.e(7).then(c.bind(null,1087))})),fe=Object(n.lazy)((function(){return Promise.all([c.e(6),c.e(4)]).then(c.bind(null,1086))})),pe=Object(n.lazy)((function(){return c.e(8).then(c.bind(null,1076))})),ve=Object(k.c)(),ye=[{path:"/",element:Object(j.jsx)(se,{})},{path:"logout",element:Object(j.jsx)(se,{})},{path:"/",element:Object(j.jsx)(ge,{}),children:[{path:"/starter",exact:!0,element:Object(j.jsx)(fe,{})},{path:"/about",exact:!0,element:Object(j.jsx)(pe,{})},("admin"===ve||"superAdmin"===ve)&&{path:"/users",exact:!0,children:[{path:"",exact:!0,element:Object(j.jsx)(d,{})},{path:"createUser",exact:!0,element:Object(j.jsx)(K,{})},{path:"details",exact:!0,element:Object(j.jsx)($,{})}]},("admin"===ve||"superAdmin"===ve||"tagger"===ve||"scanner"===ve)&&{path:"/tags",exact:!0,children:[{path:"",element:Object(j.jsx)(T,{})},{path:"scanQr",element:Object(j.jsx)(me,{})},{path:"scan/:tagId",exact:!0,element:Object(j.jsx)(ee.a,{})},{path:"register/:tagId",exact:!0,element:Object(j.jsx)(w.a,{})},{path:"register/:tagId",exact:!0,element:Object(j.jsx)(w.a,{})},{path:"registeredInCity/:city",exact:!0,element:Object(j.jsx)(be,{})},{path:"completeDetail",exact:!0,element:Object(j.jsx)(de,{})}]}]}],Ne=function(){var e=Object(r.h)(ye);return Object(j.jsx)("div",{className:"dark",children:e})},Se=function(e){e&&e instanceof Function&&c.e(18).then(c.bind(null,1085)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},Ce=c(59),De=(c(769),function(){return Object(j.jsx)("div",{className:"fallback-spinner",children:Object(j.jsx)("div",{className:"loading",children:Object(j.jsx)(i.G,{color:"primary"})})})}),Te=c(193),we=Object(Te.a)({reducer:{tagDetails:D.a}});s.a.render(Object(j.jsx)(n.Suspense,{fallback:Object(j.jsx)(De,{}),children:Object(j.jsx)(Ce.a,{basename:"/",children:Object(j.jsx)(C.a,{store:we,children:Object(j.jsx)(Ne,{})})})}),document.getElementById("root")),Se()}},[[770,1,2]]]);
//# sourceMappingURL=main.4298fdaa.chunk.js.map