(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[0],{118:function(e,t,c){"use strict";c.d(t,"b",(function(){return s}));var n=c(128),a=Object(n.b)({name:"tag",initialState:{tagId:"",tagScanStatus:!1,tagListRequiredDetails:{}},reducers:{setTagId:function(e,t){e.tagId=t.payload},setTagScanStatus:function(e,t){e.tagScanStatus=t.payload},setTagDetailsRequiredDetails:function(e,t){e.tagListRequiredDetails=t.payload}}}),s=a.actions;t.a=a.reducer},120:function(e,t,c){"use strict";t.a=c.p+"static/media/user1.f3714f33.jpg"},135:function(e,t,c){"use strict";t.a=c.p+"static/media/user2.ddd14b39.jpg"},136:function(e,t,c){"use strict";t.a=c.p+"static/media/user3.a57a5165.jpg"},137:function(e,t,c){"use strict";t.a=c.p+"static/media/user4.6ac95ef9.jpg"},138:function(e,t,c){"use strict";t.a=c.p+"static/media/user5.847ea5a9.jpg"},153:function(e,t,c){"use strict";var n=c(16),a=c(2);t.a=function(e){var t=e.children,c=(e.title,e.subtitle);return Object(a.jsx)(n.g,{children:Object(a.jsxs)(n.h,{className:"p-4",children:[Object(a.jsx)(n.k,{className:"text-muted mb-3",children:c||""}),Object(a.jsx)("div",{children:t})]})})}},158:function(e,t,c){"use strict";var n=c(4),a=c(3),s=c(9),r=c(0),i=c(78),l=c(111),j=c(292),d=c(202),o=c(206),u=c(204),b=c(164),h=c(203),O=c(44),x=c(68),m=c(21),g=c(48),f=c(36),p=c.n(f),v=c(54),y=c(2);t.a=function(e){var t=Object(m.e)(),c=(Object(x.b)(),Object(m.f)().tagId),f=Object(v.b)(),N=Object(r.useState)({tagId:c,userId:f,name:"",houseNo:"",phoneNo:"",locality:"",city:"",state:"",pincode:"0000000"}),S=Object(s.a)(N,2),C=S[0],D=S[1],I=function(e){var t=e.target,c=t.name,s=t.value;console.log(c,s),D((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(n.a)({},c,s))}))};return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(O.a,{title:"Form Details",children:Object(y.jsx)("form",{onSubmit:function(e){e.preventDefault(),g.a.tagRegister(C).then((function(e){console.log(e),p.a.fire({icon:"Already Registerd"===e.data.message?"error":"success",title:e.data.message}),D({tagId:"",userId:"",name:"",houseNo:"",phoneNo:"",locality:"",city:"",state:"",pincode:""}),t("/starter")})).catch((function(e){console.log(e.response.data),p.a.fire({icon:"error",title:"Error",text:"Enter Correct Details"})}))},children:Object(y.jsxs)(i.a,{container:!0,spacing:2,children:[Object(y.jsx)(i.a,{item:!0,xs:12,children:Object(y.jsx)(l.a,{name:"name",label:"Name",variant:"outlined",fullWidth:!0,value:C.name,onChange:I,required:!0})}),Object(y.jsx)(i.a,{item:!0,xs:12,children:Object(y.jsx)(l.a,{name:"houseNo",label:"House No",variant:"outlined",fullWidth:!0,value:C.houseNo,onChange:I,required:!0})}),Object(y.jsx)(i.a,{item:!0,xs:6,children:Object(y.jsx)(l.a,{name:"phoneNo",label:"Phone No",variant:"outlined",fullWidth:!0,value:C.phoneNo,onChange:I,required:!0})}),Object(y.jsx)(i.a,{item:!0,xs:6,children:Object(y.jsx)(l.a,{name:"locality",label:"Locality",variant:"outlined",fullWidth:!0,value:C.locality,onChange:I,required:!0})}),Object(y.jsx)(i.a,{item:!0,xs:6,children:Object(y.jsxs)(d.a,{fullWidth:!0,required:!0,children:[Object(y.jsx)(o.a,{fullWidth:!0,children:"City"}),Object(y.jsxs)(u.a,{name:"city",fullWidth:!0,value:C.city,onChange:I,children:[Object(y.jsx)(b.a,{value:"Hisar",children:"Hisar"}),Object(y.jsx)(b.a,{value:"Sirsa",children:"Sirsa"}),Object(y.jsx)(b.a,{value:"Delhi",children:"Delhi"})]}),Object(y.jsx)(h.a,{children:"Select your city"})]})}),Object(y.jsx)(i.a,{item:!0,xs:6,children:Object(y.jsx)(l.a,{name:"state",label:"State",variant:"outlined",fullWidth:!0,value:C.state,onChange:I})}),Object(y.jsx)(i.a,{item:!0,xs:12,children:Object(y.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0Submit"})})]})})})})}},174:function(e,t,c){"use strict";var n=c(9),a=c(0),s=c(21),r=(c(44),c(48)),i=c(36),l=c.n(i),j=c(2);t.a=function(){var e=Object(s.f)(),t=Object(s.e)(),c=Object(a.useState)(!0),i=Object(n.a)(c,2),d=(i[0],i[1],Object(a.useState)()),o=Object(n.a)(d,2);o[0],o[1];return Object(a.useEffect)((function(){console.log(e),r.a.scanTag(e.tagId).then((function(e){console.log(e.data),e.data.message&&"Scanned Successfully"===e.data.message?l.a.fire({icon:"Scanned Successfully"===e.data.message?"success":"info",title:e.data.message}).then((function(){return t("/starter")})):l.a.fire({icon:"info",title:e.data.error||e.data.message}).then((function(){return t("/starter")}))})).catch((function(e){return l.a.fire({icon:"error",title:e.response.data.error}).then((function(){return t("/starter")}))}))}),[]),Object(j.jsx)(j.Fragment,{})}},207:function(e,t,c){"use strict";var n=c(16),a=c(120),s=c(135),r=c(136),i=c(137),l=c(138),j=c(2),d=[{avatar:a.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Flexy React",status:"pending",weeks:"35",budget:"95K"},{avatar:s.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Lading pro React",status:"done",weeks:"35",budget:"95K"},{avatar:r.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Elite React",status:"holt",weeks:"35",budget:"95K"},{avatar:i.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Flexy React",status:"pending",weeks:"35",budget:"95K"},{avatar:l.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Ample React",status:"done",weeks:"35",budget:"95K"}];t.a=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(n.g,{children:Object(j.jsxs)(n.h,{children:[Object(j.jsx)(n.m,{tag:"h5",children:"RegisteredUser Listing"}),Object(j.jsx)(n.k,{className:"mb-2 text-muted",tag:"h6",children:"Overview of the projects"}),Object(j.jsxs)(n.H,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Team Lead"}),Object(j.jsx)("th",{children:"Project"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{children:"Weeks"}),Object(j.jsx)("th",{children:"Weeks"}),Object(j.jsx)("th",{children:"Weeks"}),Object(j.jsx)("th",{children:"Budget"})]})}),Object(j.jsx)("tbody",{children:d.map((function(e,t){return Object(j.jsxs)("tr",{className:"border-top",children:[Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:e.name}),Object(j.jsx)("span",{className:"text-muted",children:e.email})]})})}),Object(j.jsx)("td",{children:e.project}),Object(j.jsx)("td",{children:"pending"===e.status?Object(j.jsx)("span",{className:"p-2 bg-danger rounded-circle d-inline-block ms-3"}):"holt"===e.status?Object(j.jsx)("span",{className:"p-2 bg-warning rounded-circle d-inline-block ms-3"}):Object(j.jsx)("span",{className:"p-2 bg-success rounded-circle d-inline-block ms-3"})}),Object(j.jsx)("td",{children:e.weeks}),Object(j.jsx)("td",{children:e.budget})]},t)}))})]})]})})})}},242:function(e,t,c){},275:function(e,t,c){},280:function(e,t,c){},281:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(22),s=c.n(a),r=(c(242),c(21)),i=c(16),l=c(44),j=c(2),d=function(){var e=Object(r.e)();return Object(j.jsxs)(i.F,{children:[Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsx)(l.a,{title:"Create New User",children:Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){return e("/users/createUser")},children:"Create User"})})})})})}),Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsx)(l.a,{title:"User Details",children:Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){return e("/users/details")},children:"List of Users"})})})})})})]})},o=c(3),u=c(9),b=c(78),h=c(111),O=c(401),x=c(399),m=c(407),g=c(397),f=c(396),p=c(58),v=c.n(p),y=c(189),N=c(392),S=c(48),C=c(68),D=c(118),I=(c(211),function(){var e=Object(C.b)(),t=Object(r.e)(),c=Object(n.useState)(v()()),a=Object(u.a)(c,2),s=a[0],d=a[1],p=Object(n.useState)(),S=Object(u.a)(p,2),I=S[0],T=S[1],k=function(e){T(e.target.value)};v()();return Object(j.jsxs)(i.F,{children:[Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsxs)(l.a,{title:"Live Status",children:[Object(j.jsxs)(b.a,{container:!0,spacing:1,children:[Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsxs)(m.a,{sx:{marginBottom:1,minWidth:"100%"},children:[Object(j.jsx)(O.a,{id:"demo-simple-select-autowidth-label",children:"City"}),Object(j.jsxs)(g.a,{required:!0,labelId:"city",id:"city",value:I,onChange:k,autoWidth:!0,label:"City",children:[Object(j.jsx)(x.a,{value:"",children:Object(j.jsx)("em",{children:"None"})}),Object(j.jsx)(x.a,{value:"Hisar",children:"Hisar"}),Object(j.jsx)(x.a,{value:"Sirsa",children:"Sirsa"}),Object(j.jsx)(x.a,{value:"Delhi",children:"Delhi"})]})]})}),Object(j.jsx)(y.a,{dateAdapter:N.a,children:Object(j.jsx)(f.a,{value:s,onChange:function(e){d(e)},renderInput:function(e){return Object(j.jsx)(h.a,Object(o.a)({},e))},disableFuture:!0,shouldDisableDate:function(e){var t=new Date(e);if(t>new Date)return!0;if(0===t.getDay())return!0;var c=new Date;return c.setDate(c.getDate()-60),t<c}})})]}),Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){new Date(s).toLocaleDateString();var c=v()(s).format("D/M/YYYY"),n={city:I,date:c};e(D.b.setTagDetailsRequiredDetails(n)),t("/tags/completeDetail")},children:"Tag List"})})})})]})}),Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsx)(l.a,{title:"All Registered Tags",children:Object(j.jsxs)(i.F,{children:[Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{children:Object(j.jsx)(b.a,{container:!0,spacing:1,children:Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsxs)(m.a,{sx:{marginBottom:1,minWidth:"100%"},children:[Object(j.jsx)(O.a,{id:"demo-simple-select-autowidth-label",children:"City"}),Object(j.jsxs)(g.a,{required:!0,labelId:"city",id:"city",value:I,onChange:k,autoWidth:!0,label:"City",children:[Object(j.jsx)(x.a,{value:"",children:Object(j.jsx)("em",{children:"None"})}),Object(j.jsx)(x.a,{value:"Hisar",children:"Hisar"}),Object(j.jsx)(x.a,{value:"Sirsa",children:"Sirsa"}),Object(j.jsx)(x.a,{value:"Delhi",children:"Delhi"})]})]})})})})}),Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){t("/tags/registeredInCity/"+I)},children:"List of Registered Tags"})})})})]})})})]})}),T=c(158),k=c(98),w=c(54),F={headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",accept:"application/json",token:Object(w.a)()}},A="http://13.234.104.94",W=function(e){return k.a.post(A+"/createUser",e,F)},R=function(){return k.a.get(A+"/users",F)},H=function(e){return k.a.delete(A+"/users/"+e,F)},L=c(202),q=c(206),P=c(204),E=c(164),B=c(292),U=c(36),G=c.n(U),K=["Hisar","Sirsa","Pune","Delhi"],Y=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(u.a)(s,2),i=r[0],d=r[1],o=Object(n.useState)(""),O=Object(u.a)(o,2),x=O[0],m=O[1],g=Object(n.useState)([]),f=Object(u.a)(g,2),p=f[0],v=f[1],y=Object(n.useState)(""),N=Object(u.a)(y,2),S=N[0],C=N[1],D=Object(n.useState)(""),I=Object(u.a)(D,2),T=I[0],k=I[1];return Object(j.jsx)(l.a,{title:"User Details",children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),W({name:c,adhaarNumber:i,firmName:x,selectedCities:p,phoneNumber:S,userType:T}).then((function(e){console.log(e),G.a.fire({icon:"success",title:e.data.message,text:"user Id: "+e.data.userId+"-----Password: "+e.data.password})})).catch((function(e){return G.a.fire("Adhar/Phone not valid")}))},children:Object(j.jsxs)(b.a,{container:!0,spacing:1,children:[Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Name",value:c,onChange:function(e){a(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Aadhaar Number",value:i,onChange:function(e){d(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Firm Name",value:x,onChange:function(e){m(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsxs)(L.a,{fullWidth:!0,required:!0,children:[Object(j.jsx)(q.a,{children:"City"}),Object(j.jsxs)(P.a,{multiple:!0,value:p,onChange:function(e){v(e.target.value)},renderValue:function(e){return e.join(", ")},children:["\xa0 \xa0 \xa0 \xa0 \xa0 \xa0",K.map((function(e){return Object(j.jsxs)(E.a,{value:e,children:["\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",e]},e)}))]})]})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Phone Number",value:S,onChange:function(e){C(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsxs)(L.a,{fullWidth:!0,required:!0,children:[Object(j.jsx)(q.a,{fullWidth:!0,children:"User Type"}),Object(j.jsxs)(P.a,{value:T,onChange:function(e){k(e.target.value)},children:[Object(j.jsx)(E.a,{value:"admin",children:"Admin"}),Object(j.jsx)(E.a,{value:"tagger",children:"Tagger"}),Object(j.jsx)(E.a,{value:"scanner",children:"Scanner"}),Object(j.jsx)(E.a,{value:"visitor",children:"Visitor"})]})]})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(B.a,{type:"submit",variant:"contained",color:"primary",children:"\xa0 \xa0 \xa0 \xa0 \xa0Submit"})})]})})})},z=c(408),J=(c(207),c(195)),M=c.n(J),V=c(120),Q=c(135),_=c(136),X=c(137),Z=c(138),$=(V.a,Q.a,_.a,X.a,Z.a,function(){Object(r.e)();var e=Object(n.useState)(),t=Object(u.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){R().then((function(e){console.log(e.data),a(e.data)})).catch((function(e){return console.log(e)}))}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"12",children:Object(j.jsx)(i.g,{children:Object(j.jsxs)(i.h,{children:[Object(j.jsx)(i.m,{tag:"h5",children:"Registered User Listing"}),Object(j.jsx)(i.k,{className:"mb-2 text-muted",tag:"h6"}),Object(j.jsxs)(i.H,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"User"}),Object(j.jsx)("th",{children:"Id"}),Object(j.jsx)("th",{children:"Firm"}),Object(j.jsx)("th",{children:"Phone No."}),Object(j.jsx)("th",{children:"Adhaar"}),Object(j.jsx)("th",{children:"City"}),Object(j.jsx)("th",{children:"Password"}),Object(j.jsx)("th",{children:"Delete"})]})}),Object(j.jsx)("tbody",{children:null===c||void 0===c?void 0:c.map((function(e,t){return"superAdmin"!==e.userType&&Object(j.jsxs)("tr",{className:"border-top",children:[Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:e.name}),Object(j.jsx)("span",{className:"text-muted",children:e.userType})]})})}),Object(j.jsx)("td",{children:e.userId}),Object(j.jsx)("td",{children:e.firmName}),Object(j.jsx)("td",{children:e.phoneNumber}),Object(j.jsx)("td",{children:e.adhaarNumber}),Object(j.jsx)("td",{children:e.city}),Object(j.jsx)("td",{children:e.password}),Object(j.jsx)("td",{children:Object(j.jsx)(z.a,{onClick:(c=e.userId,function(){console.log("HI"),"sadmin"===c?G.a.fire({icon:"warn",title:"Sorry"}):(console.log(c),H(c).then((function(e){G.a.fire({icon:"success",title:e.data.message}).then((function(){R().then((function(e){console.log(e.data),a(e.data)})).catch((function(e){return console.log(e)}))})),console.log(e)})).catch((function(e){return alert(e)})))}),"aria-label":"delete",children:Object(j.jsx)(M.a,{})})})]},t);var c}))})]})]})})})})})}),ee=c(174),te=c(91),ce=c(121),ne=c(394),ae=c(395),se=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),d=i[0],o=i[1],O=Object(n.useState)({}),x=Object(u.a)(O,2),m=x[0],g=x[1],f=Object(r.e)(),p=Object(n.useCallback)(function(){var e=Object(ce.a)(Object(te.a)().mark((function e(t){var c,n;return Object(te.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://13.234.104.94/login",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}});case 3:if(403!==(c=e.sent).status&&401!==c.status||(console.log("hiii"),G.a.fire({icon:"error",title:"Authentication Error",text:"User not found"})),200!==c.status){e.next=15;break}return e.next=8,c.json();case 8:n=e.sent,console.log(n),sessionStorage.setItem("token",n.token),sessionStorage.setItem("userId",n.userId),sessionStorage.setItem("userType",n.userType),sessionStorage.setItem("userCity",n.city),f("/starter");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(j.jsx)(l.a,{children:Object(j.jsx)(ne.a,{maxWidth:"sm",children:Object(j.jsx)("form",{onSubmit:function(e){(e.preventDefault(),function(){var e=!0,t={};return c||(e=!1,t.email="Email is required"),d||(e=!1,t.password="Password is required"),g(t),e}())&&(p({userId:c,password:d}),console.log("Login successful"))},children:Object(j.jsxs)(b.a,{container:!0,spacing:2,children:[Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(ae.a,{variant:"h4",align:"center",gutterBottom:!0,children:"Login"})}),Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(h.a,{label:"Email",fullWidth:!0,value:c,onChange:function(e){return a(e.target.value)},error:!!m.email,helperText:m.email})}),Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(h.a,{label:"Password",type:"password",fullWidth:!0,value:d,onChange:function(e){return o(e.target.value)},error:!!m.password,helperText:m.password})}),Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(B.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Log In"})})]})})})})},re=c(153),ie=c(159),le=c.n(ie),je=function(e){var t=Object(n.useState)(),c=Object(u.a)(t,2),a=c[0],s=c[1],l=Object(C.c)((function(e){return e.tagDetails.tagListRequiredDetails})),d=new Date,o=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear(),b=Object(r.e)();Object(n.useEffect)((function(){console.log(l),S.a.getTagStatusCompleteDetails(l).then((function(e){console.log(e),404===e.status?alert(e.message):s(e.data)})).catch((function(e){console.log(e.response.data),G.a.fire({icon:"error",title:"Error",text:e.response.data.message+l.date}).then((function(){return b(-1)}))}))}),[l]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(re.a,{children:Object(j.jsx)(i.g,{children:Object(j.jsxs)(i.h,{children:[Object(j.jsx)(i.m,{tag:"h5",children:"Status Report"}),Object(j.jsx)(i.k,{className:"mb-2 text-muted",tag:"h6"}),Object(j.jsxs)(i.H,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"House Detail"}),Object(j.jsx)("th",{children:"Locality"}),Object(j.jsx)("th",{children:"City"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{children:"Time"}),Object(j.jsx)("th",{children:"Scanned By"}),Object(j.jsx)("th",{children:"Action"})]})}),Object(j.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(j.jsxs)("tr",{className:"border-top",children:[Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:e.name}),Object(j.jsx)("span",{className:"text-muted",children:e.houseNo})]})})}),Object(j.jsx)("td",{children:e.locality}),Object(j.jsx)("td",{children:e.city}),Object(j.jsx)("td",{children:!1===e.scanned?Object(j.jsx)("span",{className:"p-2 bg-danger rounded-circle d-inline-block ms-3"}):Object(j.jsx)("span",{className:"p-2 bg-success rounded-circle d-inline-block ms-3"})}),Object(j.jsx)("td",{children:e.time}),Object(j.jsx)("td",{children:e.userId}),Object(j.jsx)("td",{children:Object(j.jsx)(z.a,{"aria-label":"delete",disabled:l.date!==o,onClick:function(){return t=e.tagId,console.log(t),void S.a.scanTag(t).then((function(e){console.log(e.data),G.a.fire({icon:"Already Scanned Today"===e.data.message?"info":"success",title:"success",text:e.data.message}).then((function(){S.a.getTagStatusCompleteDetails(l).then((function(e){console.log(e),404===e.status?alert(e.message):s(e.data)})).catch((function(e){console.log(e.response.data),G.a.fire({icon:"error",title:"Error",text:e.response.data.message}).then((function(){return b(-1)}))}))}))})).catch((function(e){return console.log(e)}));var t},children:Object(j.jsx)(le.a,{})})})]},t)}))})]})]})})})})},de=c(196),oe=c.n(de),ue=function(){var e=Object(r.f)(),t=Object(n.useState)(),c=Object(u.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){var t=e.city;S.a.getAllRegiteredTagsInACity(t).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){return console.log(e)}))}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.g,{children:Object(j.jsxs)(i.h,{children:[Object(j.jsxs)(i.m,{tag:"h5",children:["Registered Tags in ",e.city]}),Object(j.jsxs)(i.H,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"House Details"}),Object(j.jsx)("th",{children:"Phone No."}),Object(j.jsx)("th",{children:"Registered By"}),Object(j.jsx)("th",{children:"Date & Time"}),Object(j.jsx)("th",{children:"Action"})]})}),Object(j.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map((function(t,c){return Object(j.jsxs)("tr",{className:"border-top",children:[Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:t.houseNo}),Object(j.jsx)("span",{className:"text-muted",children:t.name+", "}),Object(j.jsx)("span",{className:"text-muted",children:t.locality})]})})}),Object(j.jsx)("td",{children:t.phoneNo}),Object(j.jsx)("td",{children:t.userId}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:t.registryDateTime.split("T")[0]}),Object(j.jsx)("span",{className:"text-muted",children:t.registryDateTime.split("T")[1]})]})})}),Object(j.jsx)("td",{children:Object(j.jsx)(z.a,{"aria-label":"delete",onClick:function(){return c=t._id,console.log(c),void S.a.deleteTagById(c).then((function(t){console.log(t.data),G.a.fire({icon:"success",title:t.data.message}).then((function(){S.a.getAllRegiteredTagsInACity(e.city).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){return console.log(e)}))}))})).catch((function(e){console.log(e)}));var c},children:Object(j.jsx)(oe.a,{})})})]},c)}))})]})]})})})},be=(c(275),c(197)),he=c.n(be),Oe=c(97),xe=function(){var e=Object(r.e)(),t=Object(n.useState)("environment"),c=Object(u.a)(t,2),a=(c[0],c[1],Object(n.useState)(!0)),s=Object(u.a)(a,2),i=s[0],l=s[1],d=Object(n.useState)(!1),o=Object(u.a)(d,2),b=o[0],h=o[1],O=Object(n.useState)(),x=Object(u.a)(O,2),m=x[0],g=x[1],f=Object(n.useState)(!0),p=Object(u.a)(f,2),v=p[0],y=p[1],N=Object(w.c)(),S=function(){var e=Object(ce.a)(Object(te.a)().mark((function e(t){return Object(te.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!0),console.log("loaded data data",t,typeof t),t&&""!==t&&(console.log("loaded >>>",t),g(t),l(!1),h(!1));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(Oe.a,{show:v,onHide:function(){y(!1),e("/starter")},size:"sm",scrollable:!0,children:[Object(j.jsx)(Oe.a.Header,{closeButton:!0,children:Object(j.jsx)(Oe.a.Title,{children:"Scan Tag"})}),Object(j.jsxs)(Oe.a.Body,{children:[i&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(he.a,{facingMode:"environment",delay:500,onError:function(e){console.error(e)},onScan:S})}),b&&Object(j.jsx)("p",{children:"Loading"}),""!==m&&Object(j.jsx)("p",{children:m})]})]}),b?Object(j.jsx)("p",{children:"Loading..."}):Object(j.jsxs)(j.Fragment,{children:["scanner"===N&&e("/tags/scan/"+m),"tagger"===N&&e("/tags/register/"+m),"admin"===N&&e("/tags/register/"+m),"superAdmin"===N&&e("/tags/register/"+m)]})]})},me=Object(n.lazy)((function(){return c.e(6).then(c.bind(null,433))})),ge=Object(n.lazy)((function(){return Promise.all([c.e(5),c.e(3)]).then(c.bind(null,432))})),fe=Object(n.lazy)((function(){return c.e(7).then(c.bind(null,422))})),pe=Object(w.c)(),ve=[{path:"/",element:Object(j.jsx)(se,{})},{path:"logout",element:Object(j.jsx)(se,{})},{path:"/",element:Object(j.jsx)(me,{}),children:[{path:"/starter",exact:!0,element:Object(j.jsx)(ge,{})},{path:"/about",exact:!0,element:Object(j.jsx)(fe,{})},("admin"===pe||"superAdmin"===pe)&&{path:"/users",exact:!0,children:[{path:"",exact:!0,element:Object(j.jsx)(d,{})},{path:"createUser",exact:!0,element:Object(j.jsx)(Y,{})},{path:"details",exact:!0,element:Object(j.jsx)($,{})}]},("admin"===pe||"superAdmin"===pe||"tagger"===pe||"scanner"===pe)&&{path:"/tags",exact:!0,children:[{path:"",element:Object(j.jsx)(I,{})},{path:"scanQr",element:Object(j.jsx)(xe,{})},{path:"scan/:tagId",exact:!0,element:Object(j.jsx)(ee.a,{})},{path:"register/:tagId",exact:!0,element:Object(j.jsx)(T.a,{})},{path:"register/:tagId",exact:!0,element:Object(j.jsx)(T.a,{})},{path:"registeredInCity/:city",exact:!0,element:Object(j.jsx)(ue,{})},{path:"completeDetail",exact:!0,element:Object(j.jsx)(je,{})}]}]}],ye=function(){var e=Object(r.h)(ve);return Object(j.jsx)("div",{className:"dark",children:e})},Ne=function(e){e&&e instanceof Function&&c.e(15).then(c.bind(null,431)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},Se=c(43),Ce=(c(280),function(){return Object(j.jsx)("div",{className:"fallback-spinner",children:Object(j.jsx)("div",{className:"loading",children:Object(j.jsx)(i.G,{color:"primary"})})})}),De=c(128),Ie=Object(De.a)({reducer:{tagDetails:D.a}});s.a.render(Object(j.jsx)(n.Suspense,{fallback:Object(j.jsx)(Ce,{}),children:Object(j.jsx)(Se.a,{basename:"/",children:Object(j.jsx)(C.a,{store:Ie,children:Object(j.jsx)(ye,{})})})}),document.getElementById("root")),Ne()},44:function(e,t,c){"use strict";var n=c(16),a=c(2);t.a=function(e){var t=e.children,c=e.title,s=e.subtitle;return Object(a.jsxs)(n.g,{children:[Object(a.jsx)(n.m,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:c}),Object(a.jsxs)(n.h,{className:"p-4",children:[Object(a.jsx)(n.k,{className:"text-muted mb-3",children:s||""}),Object(a.jsx)("div",{children:t})]})]})}},48:function(e,t,c){"use strict";var n=c(98),a=c(54),s={headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",accept:"application/json",token:Object(a.a)()}},r="http://13.234.104.94";t.a={tagRegister:function(e){return n.a.post(r+"/tagRegister",e,s)},scanTag:function(e){return n.a.get(r+"/tags/"+e,s)},getTagStatusCompleteDetails:function(e){return n.a.post(r+"/tagDetailsByCity",e,s)},getAllRegiteredTagsInACity:function(e){return n.a.get(r+"/tags/byCity/"+e,s)},getTagStatusForVisitor:function(e){return n.a.post(r+"/tags/count",e,s)},deleteTagById:function(e){return n.a.delete(r+"/tags/remove/"+e,s)}}},54:function(e,t,c){"use strict";function n(){return sessionStorage.getItem("token")}function a(){return sessionStorage.getItem("userType")}function s(){return sessionStorage.getItem("userId")}c.d(t,"a",(function(){return n})),c.d(t,"c",(function(){return a})),c.d(t,"b",(function(){return s}))}},[[281,1,2]]]);
//# sourceMappingURL=main.1b71148c.chunk.js.map