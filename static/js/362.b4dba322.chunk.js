"use strict";(self.webpackChunkfire_short=self.webpackChunkfire_short||[]).push([[362],{7362:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var r=n(4165),i=n(5861),a=n(5671),c=n(3144),s=n(136),o=n(7277),u=n(7313),l=n(1109),f=n(922),d=n(19),m=n(6690),h=n(5608),p=n(7498),x=n(6417),v=function(t){(0,s.Z)(n,t);var e=(0,o.Z)(n);function n(){return(0,a.Z)(this,n),e.apply(this,arguments)}return(0,c.Z)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.lists,r=t.buttons;return(0,x.jsx)("div",{className:"flex justify-center text-center items-center",children:(0,x.jsx)("div",{className:"bg-gray-900 rounded-sm shadow-2xl",children:(0,x.jsx)("div",{className:"w-full md:px-12 lg:px-24",children:(0,x.jsx)("div",{className:"grid grid-cols-1 p-16",children:(0,x.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,x.jsx)("p",{className:"text-2xl lg:text-3xl font-semibold text-white",children:e}),(0,x.jsx)("div",{className:"text-base text-left text-gray-200",children:(0,x.jsx)("ul",{className:"max-w-md space-y-1 text-gray-300 list-inside",children:n.map((function(t,e){return(0,x.jsxs)("li",{className:"flex",children:[(0,x.jsx)("img",{src:t.icon,className:"w-5 h-5 mr-2",alt:""}),t.text]},e)}))})}),(0,x.jsx)("div",{className:"w-full mt-2 flex flex-row items-center gap-3",children:r.map((function(t,e){return(0,x.jsx)("button",{className:"px-4 py-4 text-base text-white rounded-sm flex-grow",onClick:t.onClick,children:t.label},e)}))})]})})})})})}}]),n}(u.Component),Z=function(t){if(!t)return"\u672a\u77e5\u65f6\u95f4";var e=new Date(t),n=e.getFullYear(),r=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0"),a=e.getHours().toString().padStart(2,"0"),c=e.getMinutes().toString().padStart(2,"0"),s=e.getSeconds().toString().padStart(2,"0");return"".concat(n,"-").concat(r,"-").concat(i," ").concat(a,":").concat(c,":").concat(s)},w=n(7134),g=n(6422),k=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n,i,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.slug,i=e.firebase,a="".concat(i,"/shorts/").concat(n,".json"),t.next=4,(0,g.Z)({method:"delete",url:a});case 4:if(200===t.sent.status){t.next=7;break}return t.abrupt("return",Promise.reject("\u77ed\u94fe\u5220\u9664\u5931\u8d25"));case 7:return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=k;var j=n.p+"static/media/check-color.e87fd858ae0563da0364bfbb6068cb81.svg";var y=n.p+"static/media/cross-color.266da64ddcd71e1a2831fecc11e6757e.svg",C=function(t){(0,s.Z)(n,t);var e=(0,o.Z)(n);function n(t){var r;return(0,a.Z)(this,n),(r=e.call(this,t)).state={slug:"",exists:!0,time:"\u6b63\u5728\u83b7\u53d6\u4e2d",url:"\u6b63\u5728\u83b7\u53d6\u4e2d",remark:"\u6b63\u5728\u83b7\u53d6\u4e2d"},r}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var e,n,i,a,c,s,o,u;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=m.Z.app,n=e.router,i=e.firebase,a="hash"===n||"redirect"===n?window.location.hash.replace("#/",""):window.location.pathname.replace("/",""),t.prev=2,t.next=5,(0,p.Z)({slug:a,firebase:i});case 5:c=t.sent,s=c.timestamp,o=c.url,u=0===(u=c.remark).length?"\u521b\u5efa\u8005\u6ca1\u6709\u7559\u4e0b\u5907\u6ce8":"\u521b\u5efa\u8005\u8bf4\uff1a".concat(u),this.setState({url:o,slug:a,exists:!0,remark:u,time:Z(s)}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),this.setState({exists:!1,remark:"\u65e0\u76f8\u5173\u5907\u6ce8",time:"\u65f6\u95f4\u4e0d\u5b58\u5728",url:"\u7f51\u5740\u4e0d\u5b58\u5728"});case 14:case"end":return t.stop()}}),t,this,[[2,11]])})));return function(){return t.apply(this,arguments)}}()},{key:"handleRedirection",value:function(t){window.location.href=t}},{key:"handleRemove",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e,n){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=m.Z.animation.notification,t.prev=1,t.next=4,(0,w._1)({title:"\u786e\u8ba4\u5220\u9664",html:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8be5\u77ed\u94fe\u5417\uff1f\u6b64\u64cd\u4f5c\u65e0\u6cd5\u64a4\u6d88\uff01",confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53d6\u6d88"});case 4:if(!t.sent.isConfirmed){t.next=10;break}return(0,w.xi)({title:"\u6b63\u5728\u5220\u9664",html:"\u6b63\u5728\u5220\u9664\u8be5\u77ed\u94fe\uff0c\u8bf7\u7a0d\u5019",timer:i,loading:!0,callback:function(){return window.location.href="/"}}),t.next=9,b({slug:e,firebase:n});case 9:(0,w.xi)({title:"\u5220\u9664\u6210\u529f",html:"\u8be5\u77ed\u94fe\u5df2\u88ab\u5220\u9664\uff0c\u5373\u5c06\u8fd4\u56de\u9996\u9875",timer:i,loading:!0,callback:function(){return window.location.href="/"}});case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),(0,w.sD)({title:"\u5220\u9664\u5931\u8d25",html:"\u8be5\u77ed\u94fe\u672a\u88ab\u5220\u9664"});case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=m.Z.app.firebase,n=m.Z.site,r=n.name,i=n.copyright,a=this.state,c=a.url,s=a.remark,o=a.time,u=a.slug,p=a.exists;return document.title="\u5373\u5c06\u8df3\u8f6c | ".concat(r),(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(f.Z,{children:r}),(0,x.jsx)(h.Z,{children:(0,x.jsx)(v,{title:p?"\u5373\u5c06\u6267\u884c\u8df3\u8f6c":"\u94fe\u63a5\u4e0d\u5b58\u5728",lists:[{icon:p?j:y,text:s},{icon:p?j:y,text:"\u94fe\u63a5\u521b\u5efa\u4e8e\uff1a".concat(o)},{icon:p?j:y,text:"\u539f\u7f51\u5740\u4f4d\u4e8e\uff1a".concat(c)}],buttons:p?[{label:"\u524d\u5f80\u8be5\u7f51\u5740",onClick:function(){return t.handleRedirection(c)}},{label:"\u5220\u9664\u8be5\u77ed\u94fe",onClick:function(){return t.handleRemove(u,e)}}]:[{label:"\u56de\u5230\u9996\u9875",onClick:function(){return t.handleRedirection("/")}}]})}),(0,x.jsx)(d.Z,{children:i})]})}}]),n}(u.Component)},5608:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(5671),i=n(3144),a=n(136),c=n(7277),s=n(7313),o=n(6417),u=function(t){(0,a.Z)(n,t);var e=(0,c.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var t=this.props.children;return(0,o.jsx)("div",{className:"flex-grow text-2xl md:w-[100vh]",children:t})}}]),n}(s.Component)},19:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(5671),i=n(3144),a=n(136),c=n(7277),s=n(7313),o=n(6417),u=function(t){(0,a.Z)(n,t);var e=(0,c.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var t=this.props.children;return(0,o.jsx)("footer",{className:"text-center text-gray-400 m-4",children:(0,o.jsxs)("span",{children:["\xa9 ".concat((new Date).getFullYear().toString()," ").concat(t," | Powered by "),(0,o.jsx)("a",{className:"underline",href:"https://github.com/bclswl0827/FireShort",rel:"noreferrer",target:"_blank",children:"Fire Short"})]})})}}]),n}(s.Component)},922:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(5671),i=n(3144),a=n(136),c=n(7277),s=n(7313),o=n(6417),u=function(t){(0,a.Z)(n,t);var e=(0,c.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var t=this.props.children;return(0,o.jsxs)("div",{className:"text-4xl flex-grow font-bold w-full text-center p-4",children:[t,(0,o.jsx)("hr",{className:"border mt-4"})]})}}]),n}(s.Component)},7498:function(t,e,n){var r=n(4165),i=n(5861),a=n(6422),c=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n,i,c,s,o,u,l,f,d;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.slug,i=e.firebase,c="".concat(i,"/shorts/").concat(n,".json"),t.next=4,(0,a.Z)({method:"get",url:c});case 4:if(null!==(s=t.sent).data){t.next=7;break}return t.abrupt("return",Promise.reject("\u67e5\u65e0\u6b64\u77ed\u94fe"));case 7:return o=s.data,u=o.remark,l=o.url,f=o.timestamp,d=o.user,t.abrupt("return",{timestamp:f,remark:u,url:l,slug:n,user:d});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.Z=c},7134:function(t,e,n){n.d(e,{Cq:function(){return s},_1:function(){return u},sD:function(){return o},xZ:function(){return f},xi:function(){return l}});var r=n(4165),i=n(5861),a=n(7114),c=n.n(a),s=function(t){var e=t.title,n=t.html;return c().fire({title:e,html:n,icon:"success",confirmButtonText:"OK",allowOutsideClick:!1})},o=function(t){var e=t.title,n=t.html;return c().fire({title:e,html:n,icon:"error",confirmButtonText:"OK",allowOutsideClick:!1})},u=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n,i,a,s,o,u;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.title,i=e.html,a=e.confirmButtonText,s=e.cancelButtonText,o=e.callback,t.next=3,c().fire({title:n,html:i,icon:"warning",showCancelButton:!!s,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",allowOutsideClick:!1,cancelButtonText:s,confirmButtonText:a});case 3:return(u=t.sent).value&&o&&o(),t.abrupt("return",u);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n,i,a,s,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.title,i=e.html,a=e.timer,s=e.loading,o=e.callback,t.next=3,c().fire({title:n,html:i,timer:a,timerProgressBar:!0,allowOutsideClick:!1,showConfirmButton:!1,didOpen:function(){s&&c().showLoading()},willClose:function(){clearInterval(undefined)}}).then((function(t){return t.dismiss===c().DismissReason.timer&&o&&o(),t}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.title,n=t.html,r=t.icon,i=t.timer;return c().mixin({toast:!0,position:"top-end",timer:i,timerProgressBar:!0,showConfirmButton:!1,didOpen:function(t){t.addEventListener("mouseenter",c().stopTimer),t.addEventListener("mouseleave",c().resumeTimer)}}).fire({icon:r,title:e,html:n})}}}]);