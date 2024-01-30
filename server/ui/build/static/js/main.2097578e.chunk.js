(this.webpackJsonploginforms=this.webpackJsonploginforms||[]).push([[0],{29:function(e,a,t){e.exports=t(64)},34:function(e,a,t){},35:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(25),l=t.n(r),o=(t(34),t(3)),c=(t(35),t(9)),i=t.n(c),m=t(1);var u=Object(m.g)((function(e){var a,t="string"!==typeof(a=e.location.pathname.substring(1,e.location.pathname.length))?"":a.charAt(0).toUpperCase()+a.slice(1);return"/"===e.location.pathname&&(t="Welcome"),n.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},n.a.createElement("div",{className:"row col-12 d-flex justify-content-center text-white"},n.a.createElement("span",{className:"h3"},e.title||t),function(){if("/home"===e.location.pathname)return n.a.createElement("div",{className:"ml-auto"},n.a.createElement("button",{className:"btn btn-danger",onClick:function(){return localStorage.removeItem("login_access_token"),i.a.post("/api/logout",null).then((function(a){200===a.status||e.showError("Logout error")})).catch((function(e){console.log(e)})),void e.history.push("/login")}},"Logout"))}()))})),d=t(12),p=t(8);t(61);var h=Object(m.g)((function(e){var a=Object(s.useState)({email:"",password:"",successMessage:null}),t=Object(o.a)(a,2),r=t[0],l=t[1],c=function(e){var a=e.target,t=a.id,s=a.value;l((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},t,s))}))},m=function(){e.updateTitle("Home"),e.history.push("/home")};return n.a.createElement("div",{className:"card col-12 col-lg-4 login-card mt-2 hv-center"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),n.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:r.email,onChange:c}),n.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:r.password,onChange:c})),n.a.createElement("div",{className:"form-check"}),n.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(a){a.preventDefault();var t={email:r.email,password:r.password};i.a.post("/api/login",t).then((function(a){200===a.status?(l((function(e){return Object(p.a)(Object(p.a)({},e),{},{successMessage:"Login successful. Redirecting to home page.."})})),localStorage.setItem("login_access_token",a.data.token),m(),e.showSuccess("Login successful"),e.showError(null)):e.showError(a.data.Message)})).catch((function(a){e.showError(a.response.data.Message),console.log(a)}))}},"Submit")),n.a.createElement("div",{className:"alert alert-success mt-2",style:{display:r.successMessage?"block":"none"},role:"alert"},r.successMessage),n.a.createElement("div",{className:"registerMessage"},n.a.createElement("span",null,"Dont have an account? "),n.a.createElement("span",{className:"loginText",onClick:function(){return e.history.push("/register"),void e.updateTitle("Register")}},"Register")))}));t(62);var g=Object(m.g)((function(e){var a=Object(s.useState)({email:"",password:"",confirmPassword:"",successMessage:null}),t=Object(o.a)(a,2),r=t[0],l=t[1],c=function(e){var a=e.target,t=a.id,s=a.value;l((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},t,s))}))},m=function(){e.updateTitle("Home"),e.history.push("/home")};return n.a.createElement("div",{className:"card col-12 col-lg-4 login-card mt-2 hv-center"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),n.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:r.email,onChange:c}),n.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:r.password,onChange:c})),n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Confirm Password"),n.a.createElement("input",{type:"password",className:"form-control",id:"confirmPassword",placeholder:"Confirm Password",value:r.confirmPassword,onChange:c})),n.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(a){a.preventDefault(),r.password===r.confirmPassword?function(){if(r.email.length&&r.password.length){e.showError(null);var a={email:r.email,password:r.password};i.a.post("/api/register",a).then((function(a){200===a.status?(l((function(e){return Object(p.a)(Object(p.a)({},e),{},{successMessage:"Registration successful. Redirecting to home page.."})})),localStorage.setItem("login_access_token",a.data.token),m(),e.showError(null)):(a.status,e.showError(a.data.Message))})).catch((function(a){e.showError(a.response.data.Message),console.log(a)}))}else e.showError("Please enter valid username and password")}():e.showError("Passwords do not match")}},"Register")),n.a.createElement("div",{className:"alert alert-success mt-2",style:{display:r.successMessage?"block":"none"},role:"alert"},r.successMessage),n.a.createElement("div",{className:"mt-2"},n.a.createElement("span",null,"Already have an account? "),n.a.createElement("span",{className:"loginText",onClick:function(){return e.updateTitle("Login"),void e.history.push("/login")}},"Login here")))}));var f=Object(m.g)((function(e){var a=Object(s.useState)(""),t=Object(o.a)(a,2),r=t[0],l=t[1];function c(){e.history.push("/login")}return Object(s.useEffect)((function(){i.a.get("/api/home").then((function(e){200!==e.status&&c(),console.log(e.data),l(e.data.message)})).catch((function(a){e.showError(a.response.data.Message),c()}))})),n.a.createElement("div",{className:"mt-2"},"User Logged in : ",r)})),E=t(28),b=["children"];var v=function(e){var a=e.children,t=Object(E.a)(e,b);return n.a.createElement(m.b,Object.assign({},t,{render:function(e){var t=e.location;return localStorage.getItem("login_access_token")?a:n.a.createElement(m.a,{to:{pathname:"/login",state:{from:t}}})}}))},w=t(10);t(63);var j=function(e){var a=Object(s.useState)("none"),t=Object(o.a)(a,2),r=t[0],l=t[1],c=Object(s.useState)("alert-danger"),i=Object(o.a)(c,2),m=i[0],u=i[1],d=Object(s.useState)(null),p=Object(o.a)(d,2),h=p[0],g=p[1],f=function(){l("block")},E=function(){l("none"),e.hideError(null),e.hideSuccess(null)};return Object(s.useEffect)((function(){null!==e.errorMessage?(u("alert-danger"),g(e.errorMessage),f()):null!==e.successMessage?(u("alert-success"),g(e.successMessage),f()):E()})),n.a.createElement("div",{className:"alert "+m+" alert-dismissable mt-4",role:"alert",id:"alertPopUp",style:{display:r}},n.a.createElement("div",{className:"d-flex alertMessage"},n.a.createElement("span",null,h),n.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return E()}},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))};var O=function(){var e=Object(s.useState)(null),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(s.useState)(null),c=Object(o.a)(l,2),i=c[0],d=c[1],p=Object(s.useState)(null),E=Object(o.a)(p,2),b=E[0],O=E[1];return n.a.createElement(w.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(u,{title:t}),n.a.createElement("div",{className:"container d-flex align-items-center flex-column"},n.a.createElement(m.d,null,n.a.createElement(m.b,{path:"/",exact:!0},n.a.createElement(g,{showError:d,showSuccess:O,updateTitle:r})),n.a.createElement(m.b,{path:"/register"},n.a.createElement(g,{showError:d,showSuccess:O,updateTitle:r})),n.a.createElement(m.b,{path:"/login"},n.a.createElement(h,{showError:d,showSuccess:O,updateTitle:r})),n.a.createElement(v,{path:"/home"},n.a.createElement(f,{showError:d,showSuccess:O}))),n.a.createElement(j,{errorMessage:i,successMessage:b,hideError:d,hideSuccess:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.2097578e.chunk.js.map