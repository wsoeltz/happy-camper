(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),l=a.n(o),i=(a(96),a(14)),c=a(4),d=a(15),u=a(87),m=a.n(u),s=(a(97),c.a.nav.withConfig({displayName:"Nav__Root",componentId:"sc-1kcwlvo-0"})(["position:absolute;top:0;right:0;background-color:rgba(255,255,255);padding:1rem;border-bottom-left-radius:8px;box-shadow:0px 0px 15px 0px rgba(0,0,0,0.34);"])),p=c.a.h1.withConfig({displayName:"Nav__Title",componentId:"sc-1kcwlvo-1"})(["margin:0.55rem 0 0;font-size:0.9rem;font-weight:400;text-align:center;@media (max-width:700px){font-size:0.85rem;margin:0.5rem 0 0;}"]),g=c.a.div.withConfig({displayName:"Nav__Content",componentId:"sc-1kcwlvo-2"})(["display:flex;flex-wrap:wrap;@media (max-width:700px){flex-direction:column-reverse;}"]),h=c.a.div.withConfig({displayName:"Nav__DatePickerContainer",componentId:"sc-1kcwlvo-3"})(["text-align:center;color:#555;.react-datepicker-wrapper,input{text-align:center;width:100%;box-sizing:border-box;}input{padding:0.25rem;border:none;border-radius:4px;margin:5px 0;box-shadow:0px 0px 2px 0px rgba( 0,0,0,0.3);}@media (max-width:700px){margin-top:0.5rem;}"]),f=c.a.div.withConfig({displayName:"Nav__DateTitle",componentId:"sc-1kcwlvo-4"})(["font-size:0.7rem;text-transform:uppercase;"]),b=c.a.ul.withConfig({displayName:"Nav__NavLinks",componentId:"sc-1kcwlvo-5"})(["display:flex;align-items:center;justify-content:center;list-style:none;margin:0 0 0 3rem;padding:0;text-align:center;@media (max-width:700px){margin:0;}"]),v="\n  display: block;\n  margin: 0 0.6rem;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-decoration: none;\n  color: #216ba5;\n\n  &:hover {\n    border-bottom: solid 1px #216ba5;\n  }\n\n  @media (max-width: 500px) {\n    font-size: 0.75rem;\n  }\n",E=Object(c.a)(d.b).withConfig({displayName:"Nav__NavLink",componentId:"sc-1kcwlvo-6"})(["",""],v),x=c.a.span.withConfig({displayName:"Nav__LogoutLink",componentId:"sc-1kcwlvo-7"})([""," cursor:pointer;"],v);var C=function(e){var t,a=e.handleLogout,o=Object(n.useContext)(ce),l=Object(n.useContext)(de),i=l.selectedDate,c=l.setSelectedDate,d=o&&o.username?r.a.createElement(r.a.Fragment,null,"Welcome to Happy Camper, ",r.a.createElement("strong",null,o.username),"."):"Welcome to Happy Camper. Please login or register.";t=o?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(E,{to:"/reservations"},"Your Reservations")),r.a.createElement("li",null,r.a.createElement(E,{to:"/your-campgrounds"},"Your Campgrounds")),r.a.createElement("li",{onClick:a},r.a.createElement(x,null,"logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(E,{to:"/login"},"login")),r.a.createElement("li",null,r.a.createElement(E,{to:"/register"},"register")));var u=new Date;return r.a.createElement(s,null,r.a.createElement(g,null,r.a.createElement(h,null,r.a.createElement(f,null,"Looking to go camping on:"),r.a.createElement(m.a,{selected:i,onChange:c,minDate:u})),r.a.createElement(b,null,t)),r.a.createElement(p,null,d))},w=a(9),_=c.a.div.withConfig({displayName:"StandardPanel__Root",componentId:"q2u9jx-0"})(["position:absolute;width:400px;max-width:100%;height:800px;max-height:70vh;box-sizing:border-box;padding:1rem;top:0;bottom:0;margin:auto 0;left:0;background-color:#fff;border-top-right-radius:8px;border-bottom-right-radius:8px;overflow:auto;box-shadow:0px 0px 15px 0px rgba(0,0,0,0.34);@media (max-width:700px){margin-bottom:0;}"]),y=Object(c.a)(d.b).withConfig({displayName:"StandardPanel__CloseButton",componentId:"q2u9jx-1"})(["position:absolute;top:0;right:0;padding:0.3rem 0.7rem;font-size:1.35rem;color:#555;text-decoration:none;"]),j=function(e){var t=e.children;return r.a.createElement(_,null,r.a.createElement(y,{to:"/"},"\xd7"),t)},O=c.a.label.withConfig({displayName:"Utils__StandardLabel",componentId:"sc-17dz4ba-0"})(["display:block;margin:0 0 0.2rem;text-transform:uppercase;font-size:0.85rem;font-weight:600;text-decoration:none;color:#555;"]),k=c.a.input.withConfig({displayName:"Utils__StandardInput",componentId:"sc-17dz4ba-1"})(["padding:0.25rem;border:none;border-radius:4px;margin:0 0 1.25rem;width:100%;box-shadow:0px 0px 2px 0px rgba( 0,0,0,0.3);"]),S=c.a.textarea.withConfig({displayName:"Utils__StandardTextarea",componentId:"sc-17dz4ba-2"})(["padding:0.25rem;border:none;border-radius:4px;margin:0 0 1.25rem;width:100%;height:100px;box-shadow:0px 0px 2px 0px rgba( 0,0,0,0.3);"]),D=c.a.input.withConfig({displayName:"Utils__StandardSubmitButton",componentId:"sc-17dz4ba-3"})(["background-color:#216ba5;border:none;padding:0.5rem;text-transform:uppercase;color:#fff;border-radius:8px;font-weight:600;font-size:0.85rem;cursor:pointer;"]),I=function(e){var t=e.onSubmit,a=e.title,o=e.submitButtonText,l=Object(n.useState)(""),c=Object(i.a)(l,2),d=c[0],u=c[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),p=s[0],g=s[1],h=Object(n.useContext)(ce),f=Object(w.f)();return Object(n.useEffect)((function(){h&&f.push("/")}),[h,f]),r.a.createElement(j,null,r.a.createElement("form",{onSubmit:function(e){return t(e,{username:d,password:p})}},r.a.createElement("h4",null,a),r.a.createElement(O,{htmlFor:"username"},"Username"),r.a.createElement(k,{type:"text",name:"username",value:d,onChange:function(e){return u(e.target.value)}}),r.a.createElement(O,{htmlFor:"password"},"Password"),r.a.createElement(k,{type:"password",name:"password",value:p,onChange:function(e){return g(e.target.value)}}),r.a.createElement(D,{type:"submit",value:o})))},N=a(188),z=a(190),F=a(189),L=a(191),B=a(10),T=a.n(B);a(162);T.a.Icon.Default.imagePath="../node_modules/leaflet",delete T.a.Icon.Default.prototype._getIconUrl,T.a.Icon.Default.mergeOptions({iconRetinaUrl:a(163),iconUrl:a(164),shadowUrl:a(165)});var P=c.a.div.withConfig({displayName:"Map__Root",componentId:"n86ufu-0"})(["width:100vw;height:100vh;position:absolute;top:0;left:0;z-index:-1;.leaflet-container{width:100vw;height:100vh;}"]),R=function(e){var t,a=e.data;if(void 0!==a){var n=a.campgrounds.map((function(e){var t=e.id,a=e.name,n=e.lat,o=e.lng;return r.a.createElement(N.a,{position:[n,o],key:"marker-"+t+n+o},r.a.createElement(z.a,null,r.a.createElement(d.b,{to:"/campground/".concat(t)},r.a.createElement("strong",null,a))))}));t=r.a.createElement(r.a.Fragment,null,n)}else t=null;return r.a.createElement(P,null,r.a.createElement(F.a,{center:[42.5,-73],zoom:9},r.a.createElement(L.a,{url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),t))},U=a(36),Y=a(16),A=a.n(Y),M=function(e){var t=e.url,a=Object(n.useState)({loading:!0,error:void 0,data:void 0}),r=Object(i.a)(a,2),o=r[0],l=r[1],c=Object(n.useCallback)((function(){A()("http://localhost:8000"+t).then((function(e){e&&e.data?l({loading:!1,error:void 0,data:e.data}):l({loading:!1,error:"No data",data:void 0})})).catch((function(e){console.error(e),l({loading:!1,error:"Unable to fetch the data",data:void 0})}))}),[t]);return Object(n.useEffect)((function(){c()}),[c]),Object(U.a)(Object(U.a)({},o),{},{refetch:c})},q=function(e){var t=e.id,a=e.refetch,o=Object(n.useState)(""),l=Object(i.a)(o,2),c=l[0],d=l[1];return r.a.createElement("form",{onSubmit:function(e){var n,r,o;e.preventDefault(),c&&(n=c,r=t,o=function(){a(),d("")},A()({method:"post",url:"http://localhost:8000/api/create_campsite",data:{name:n,campground_id:r}}).then((function(e){e&&e.data&&o()})).catch((function(e){console.error(e)})))}},r.a.createElement(O,{htmlFor:"add-new-campsite-input"},"Add another campsite"),r.a.createElement(k,{id:"add-new-campsite-input",type:"text",value:c,onChange:function(e){return d(e.target.value)},required:!0}),r.a.createElement(D,{type:"submit",value:"Add Campsite"}))},J=c.a.img.withConfig({displayName:"CampgroundDetail__Image",componentId:"sc-114iofi-0"})(["width:100%;"]),W=c.a.p.withConfig({displayName:"CampgroundDetail__Description",componentId:"sc-114iofi-1"})(["line-height:1.5;font-size:0.85rem;"]),H=c.a.button.withConfig({displayName:"CampgroundDetail__BookButton",componentId:"sc-114iofi-2"})(["border-width:1px;border-style:solid;border-radius:4px;background-color:transparent;cursor:pointer;text-transform:uppercase;font-size:0.7rem;transition:all 0.2s ease;"]),G=c.a.div.withConfig({displayName:"CampgroundDetail__SiteReservationBase",componentId:"sc-114iofi-3"})(["display:flex;flex-direction:column;margin-bottom:0.75rem;font-size:0.85rem;transition:all 0.2s ease;strong{font-weight:600;text-transform:uppercase;}small{display:flex;justify-content:space-between;}"]),K=Object(c.a)(G).withConfig({displayName:"CampgroundDetail__AvailabileSite",componentId:"sc-114iofi-4"})(["color:blue;button{color:blue;border-color:blue;}"]),Q=Object(c.a)(G).withConfig({displayName:"CampgroundDetail__BookedSite",componentId:"sc-114iofi-5"})(["color:red;button{color:red;border-color:red;}"]),V=Object(c.a)(G).withConfig({displayName:"CampgroundDetail__ReservedSite",componentId:"sc-114iofi-6"})(["color:green;button{color:green;border-color:green;}"]),X=function(e,t){A()({method:"post",url:"http://localhost:8000/api/cancel_reservation",data:{reservation_id:e}}).then((function(e){e&&e.data&&t()})).catch((function(e){console.error(e)}))},Z=function(){var e,t=Object(w.g)().id,a=M({url:"/api/get_campground/"+t}),o=a.loading,l=a.error,i=a.data,c=a.refetch,d=Object(n.useContext)(de).selectedDate,u=Object(n.useContext)(ce);if(o)e=r.a.createElement("div",null,"Loading...");else if(void 0!==l)console.error(l),e=null;else if(void 0!==i){var m=i.campground,s=m.name,p=m.image_url,g=m.description,h=m.phone,f=m.campsites,b=m.owner,v=f.map((function(e){var t,a,n=e.reservations.find((function(e){var t=new Date(e.date+"T00:00:00");return d.getDate()===t.getDate()&&d.getFullYear()===t.getFullYear()&&d.getMonth()===t.getMonth()}));if(n)if(!u||u.id!==n.camper&&u.id!==b)a=r.a.createElement("em",null,"Site is booked for this day"),t=Q;else{var o=u.id===n.camper?"Reserved! Click to cancel":"Reserved by a user. Click to cancel";a=r.a.createElement(H,{onClick:function(){X(n.id,c)}},o),t=V}else{a=r.a.createElement(H,{onClick:function(){u&&u.id?function(e,t,a,n){var r=e.getDate()<10?"0"+e.getDate().toString():e.getDate(),o=e.getMonth()<9?"0"+(e.getMonth()+1).toString():e.getMonth()+1,l="".concat(e.getFullYear(),"-").concat(o,"-").concat(r);A()({method:"post",url:"http://localhost:8000/api/create_booking",data:{date:l,campsite_id:t,camper_id:a}}).then((function(e){e&&e.data&&n()})).catch((function(e){console.error(e)}))}(d,e.id,u.id,c):alert("Please login or register to book a site")}},"Book site"),t=K}var l=u&&u.id===b?r.a.createElement(H,{onClick:function(){return t=e.id,a=c,void A()({method:"post",url:"http://localhost:8000/api/delete_campsite",data:{campsite_id:t}}).then((function(e){e&&e.data&&a()})).catch((function(e){console.error(e)}));var t,a}},"Delete site"):null;return r.a.createElement(t,{key:"campsite-"+e.id},r.a.createElement("strong",null,r.a.createElement("span",{role:"img","aria-label":"campsite"},"\u26fa")," ",e.name),r.a.createElement("small",null,a," ",l))})),E=p?r.a.createElement(J,{src:p,alt:s}):null,x=u&&u.id===b?r.a.createElement(q,{id:t,refetch:c}):null;e=r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"campground"},"\ud83c\udfd5\ufe0f")," ",s),E,r.a.createElement("p",null,r.a.createElement("small",null,r.a.createElement("span",{role:"img","aria-label":"phone"},"\ud83d\udcde")," ",r.a.createElement("a",{href:"tel:".concat(h)},h))),r.a.createElement(W,null,g),r.a.createElement("p",null,r.a.createElement("strong",null,"Campsites:")),v,x)}else e=null;return r.a.createElement(j,null,e)},$=function(e){var t=e.initialData,a=e.postFormData,o=e.submitButtonText,l=Object(n.useContext)(ce),c=Object(n.useState)(t?t.name:""),d=Object(i.a)(c,2),u=d[0],m=d[1],s=Object(n.useState)(t?t.image_url:""),p=Object(i.a)(s,2),g=p[0],h=p[1],f=Object(n.useState)(t?t.description:""),b=Object(i.a)(f,2),v=b[0],E=b[1],x=Object(n.useState)(t?t.phone:""),C=Object(i.a)(x,2),w=C[0],_=C[1],y=Object(n.useState)(t?t.lat:""),j=Object(i.a)(y,2),I=j[0],N=j[1],z=Object(n.useState)(t?t.lng:""),F=Object(i.a)(z,2),L=F[0],B=F[1],T=l&&l.id?l.id:void 0;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),T&&u&&w&&I&&L&&a({name:u,image_url:g,description:v,phone:w,lat:I,lng:L,user_id:T})}},r.a.createElement(O,{htmlFor:"add-campground-name"},"Name"),r.a.createElement(k,{type:"text",id:"add-campground-name",placeholder:"Name",value:u,onChange:function(e){return m(e.target.value)},required:!0}),r.a.createElement(O,{htmlFor:"add-campground-image"},"Image URL"),r.a.createElement(k,{type:"text",id:"add-campground-image",placeholder:"Image URL",value:g,onChange:function(e){return h(e.target.value)}}),r.a.createElement(O,{htmlFor:"add-campground-description"},"Description"),r.a.createElement(S,{id:"add-campground-description",placeholder:"Description",value:v,onChange:function(e){return E(e.target.value)}}),r.a.createElement(O,{htmlFor:"add-campground-phone"},"Phone"),r.a.createElement(k,{type:"phone",id:"add-campground-phone",placeholder:"Phone",value:w,onChange:function(e){return _(e.target.value)},required:!0}),r.a.createElement(O,{htmlFor:"add-campground-latitude"},"Latitude"),r.a.createElement(k,{type:"number",id:"add-campground-latitude",placeholder:"Latitude",value:I,onChange:function(e){return N(e.target.value)},step:"0.000001",min:-90,max:90,required:!0}),r.a.createElement(O,{htmlFor:"add-campground-longitude"},"Longitude"),r.a.createElement(k,{type:"number",id:"add-campground-longitude",placeholder:"Longitude",value:L,onChange:function(e){return B(e.target.value)},step:"0.000001",min:-180,max:180,required:!0}),r.a.createElement(D,{type:"submit",value:o}))},ee=function(){var e=Object(w.f)(),t=Object(n.useContext)(ue).refetch;return r.a.createElement(j,null,r.a.createElement("h3",null,"Add Campground"),r.a.createElement($,{postFormData:function(a){A()({method:"post",url:"http://localhost:8000/api/add_campground",data:a}).then((function(a){a&&a.data&&(e.push("/your-campgrounds"),t())})).catch((function(e){console.error(e)}))},submitButtonText:"Add Campground"}))},te=c.a.button.withConfig({displayName:"YourReservations__CancelButton",componentId:"sc-1ab4f6t-0"})(["margin-top:0.5rem;border:1px solid red;border-radius:4px;background-color:transparent;cursor:pointer;text-transform:uppercase;font-size:0.7rem;color:red;"]),ae=function(){var e,t=Object(n.useContext)(ce),a=t&&t.id?t.id:void 0,o=M({url:"/api/get_users_reservations/"+a}),l=o.loading,i=o.error,c=o.data,u=o.refetch;if(l)e=r.a.createElement("div",null,"Loading...");else if(void 0!==i)console.error(i),e=null;else if(void 0!==c){var m=c.reservations,s=m.length?m.map((function(e){var t=e.id,a=e.title,n=e.campground;return r.a.createElement("p",{key:t},r.a.createElement(d.b,{to:"/campground/"+n},r.a.createElement("small",null,a)),r.a.createElement("br",null),r.a.createElement(te,{onClick:function(){return X(t,u)}},"Cancel"))})):r.a.createElement("p",null,"You have not made any reservations");e=r.a.createElement("div",null,s)}else e=null;return r.a.createElement(j,null,r.a.createElement("h3",null,"Your Reservations"),e)},ne=Object(c.a)(d.b).withConfig({displayName:"YourCampgrounds__EditButton",componentId:"sc-1xkeur0-0"})(["margin-top:0.5rem;border:1px solid #216ba5;text-decoration:none;border-radius:4px;background-color:transparent;cursor:pointer;text-transform:uppercase;font-size:0.7rem;color:#216ba5;padding:1px 6px;"]),re=function(){var e,t=Object(n.useContext)(ce),a=t&&t.id?t.id:void 0,o=M({url:"/api/get_users_campgrounds/"+a}),l=o.loading,i=o.error,c=o.data;if(l)e=r.a.createElement("div",null,"Loading...");else if(void 0!==i)console.error(i),e=null;else if(void 0!==c){var u=c.campgrounds.length?c.campgrounds.map((function(e){var t=e.id,a=e.name;e.lat,e.lng;return r.a.createElement("p",{key:t},r.a.createElement("small",null,r.a.createElement(d.b,{to:"/campground/".concat(t)},a),r.a.createElement("br",null),r.a.createElement(ne,{to:"/edit-campground/".concat(t)},"Edit")))})):r.a.createElement("p",null,"You do not own any Campgrounds");e=r.a.createElement("div",null,u)}else e=null;return r.a.createElement(j,null,r.a.createElement("h3",null,"Your Campgrounds"),e,r.a.createElement(ne,{to:"/add-campground"},"Add Campground"))},oe=function(){var e,t=Object(w.g)().id,a=Object(w.f)(),o=Object(n.useContext)(ue).refetch,l=M({url:"/api/get_campground/"+t}),i=l.loading,c=l.error,d=l.data;return i?e=r.a.createElement("div",null,"Loading..."):void 0!==c?(console.error(c),e=null):e=void 0!==d?r.a.createElement($,{postFormData:function(e){A()({method:"post",url:"http://localhost:8000/api/edit_campground",data:Object(U.a)(Object(U.a)({},e),{},{campground_id:t})}).then((function(e){e&&e.data&&(a.push("/your-campgrounds"),o())})).catch((function(e){console.error(e)}))},initialData:d.campground,submitButtonText:"Edit Campground"}):null,r.a.createElement(j,null,r.a.createElement("h3",null,"Edit Campground"),e)},le=a(90),ie=a.n(le),ce=Object(n.createContext)(null),de=Object(n.createContext)(new Date),ue=Object(n.createContext)({data:void 0,refetch:ie.a}),me=function(){var e=Object(n.useState)(!!localStorage.getItem("token")),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(void 0),c=Object(i.a)(l,2),u=c[0],m=c[1],s=Object(n.useState)(new Date),p=Object(i.a)(s,2),g=p[0],h=p[1],f=M({url:"/api/get_campgrounds"}),b=f.data,v=f.refetch;Object(n.useEffect)((function(){a&&void 0===u&&A()("http://localhost:8000/api/current_user/",{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){e&&e.data&&e.data.username?m(e.data):(o(!1),m(void 0))})).catch((function(e){console.error(e)}))}),[a,u]);var E=function(e,t){e.preventDefault(),A()({method:"post",url:"http://localhost:8000/token-auth/",headers:{"Content-Type":"application/json"},data:t}).then((function(e){e&&e.data&&e.data.user&&(localStorage.setItem("token",e.data.token),m(e.data.user),o(!0))})).catch((function(e){console.error(e),alert("There was a problem logging you in. Please try again.")}))},x=function(e,t){e.preventDefault(),A()({method:"post",url:"http://localhost:8000/api/register/",headers:{"Content-Type":"application/json"},data:t}).then((function(e){e&&e.data&&e.data.username&&e.data.id&&(localStorage.setItem("token",e.data.token),m({username:e.data.username,id:e.data.id}),o(!0))})).catch((function(e){console.error(e),alert("There was a problem registering. Please try again.")}))},_=u&&u.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{exact:!0,path:"/reservations",component:ae}),r.a.createElement(w.a,{exact:!0,path:"/your-campgrounds",component:re}),r.a.createElement(w.a,{exact:!0,path:"/add-campground",component:ee}),r.a.createElement(w.a,{exact:!0,path:"/edit-campground/:id",component:oe})):null;return r.a.createElement(ce.Provider,{value:u},r.a.createElement(ue.Provider,{value:{data:b,refetch:v}},r.a.createElement(de.Provider,{value:{selectedDate:g,setSelectedDate:h}},r.a.createElement(d.a,null,r.a.createElement(C,{handleLogout:function(){localStorage.removeItem("token"),m(void 0),o(!1)}}),r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(I,Object.assign({},e,{onSubmit:E,title:"Log In",submitButtonText:"Log In"}))}}),r.a.createElement(w.a,{exact:!0,path:"/register",render:function(e){return r.a.createElement(I,Object.assign({},e,{onSubmit:x,title:"Register",submitButtonText:"Create Account"}))}}),r.a.createElement(w.a,{exact:!0,path:"/campground/:id",component:Z}),_),r.a.createElement(R,{data:b})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root"))},91:function(e,t,a){e.exports=a(182)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.2b534e22.chunk.js.map