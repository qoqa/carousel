(this.webpackJsonpcarousel=this.webpackJsonpcarousel||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=a(132),l=a(37),s=a(46),u=a(133),m=a(130),d=a(115),p=a(131),g=Object(s.a)((function(e){var t;return{modalRoot:{"& > *:focus":{outline:"none"}},modalContent:(t={},Object(l.a)(t,e.breakpoints.down("sm"),{width:"100%",maxHeight:"calc(100% - 96px)",margin:"-16px auto 0",position:"relative",top:"50%",transform:"translateY(-50%)"}),Object(l.a)(t,e.breakpoints.up("md"),{width:"auto",height:"90%",margin:"0 auto",marginTop:e.spacing(2)}),t)}}));function f(e){var t=e.children,a=g();return r.a.createElement(u.a,{open:!0,BackdropComponent:m.a,className:a.modalRoot},r.a.createElement(d.a,{appear:!0,in:!0},r.a.createElement(p.a,{elevation:2,className:a.modalContent},t)))}var h=a(38),v=a(49),x=a.n(v),b=a(62);function E(e,t){return(e%t+t)%t}var j=Object(s.a)({slide:{width:"100%",height:"auto",maxWidth:"100%"},img:{width:"100%",height:"auto"}});function w(e){var t=e.alt,a=e.src,n=j();return r.a.createElement("div",{className:n.slide},r.a.createElement("img",{className:n.img,src:a,alt:t||""}))}var N=a(134),I=a(50),S=a.n(I),C=a(51),O=a.n(C),T=Object(s.a)((function(e){return{arrowsContainer:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"none"},arrow:{pointerEvents:"all",marginLeft:e.spacing(1),marginRight:e.spacing(1)},srOnly:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",border:0}}}));function k(e){var t=e.goToPreviousSlide,a=e.goToNextSlide,n=e.translations,i=T();return r.a.createElement("div",{className:i.arrowsContainer},r.a.createElement(N.a,{className:i.arrow,onClick:t},r.a.createElement("span",{className:i.srOnly},n.previousButton),r.a.createElement(S.a,{"aria-hidden":!0})),r.a.createElement(N.a,{className:i.arrow,onClick:a},r.a.createElement("span",{className:i.srOnly},n.nextButton),r.a.createElement(O.a,{"aria-hidden":!0})))}var y=Object(s.a)({carouselRoot:{display:"flex",flexDirection:"column"},carouselContainer:{position:"relative",maxHeight:"80vh"}}),B=Object(h.bindKeyboard)(Object(h.virtualize)(x.a));function R(e){var t=e.slides,a=e.title,i=e.getTranslations,o=y(),c=t.length,l=c>1,s=function(e){var t=Object(n.useState)(0),a=Object(b.a)(t,2),r=a[0],i=a[1];return{goToPreviousSlide:function(){return i(r-1)},goToNextSlide:function(){return i(r+1)},handleChangeIndex:function(e){return i(e)},currentSlideNumber:E(r,e)+1,previousSlideNumber:E(r-1,e)+1,nextSlideNumber:E(r+1,e)+1,slideIndex:r}}(c),u=s.goToPreviousSlide,m=s.goToNextSlide,d=s.handleChangeIndex,p=s.currentSlideNumber,g=s.previousSlideNumber,f=s.nextSlideNumber,h=s.slideIndex,v=i(p,f,g,c);return r.a.createElement("div",{className:o.carouselRoot},a&&r.a.createElement("h2",null,a),r.a.createElement("div",{className:o.carouselContainer},r.a.createElement(B,{onChangeIndex:d,index:h,slideRenderer:function(e){var a=e.index,n=e.key,i=E(a,t.length),o=t[i];return r.a.createElement(w,Object.assign({key:n},o))}})),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{goToPreviousSlide:u,goToNextSlide:m,translations:v}),r.a.createElement("div",{"aria-live":"polite"},v.status)))}function P(e){return r.a.createElement(f,null,r.a.createElement(R,e))}var W=a(52),F=a.n(W),G=a(53),H=a.n(G),J=a(54),z=a.n(J),A=a(55),D=a.n(A),K=a(56),L=a.n(K),Y=a(57),$=a.n(Y),q=a(58),M=a.n(q),Q=a(59),U=a.n(Q),V=a(60),X=a.n(V),Z=a(61),_=a.n(Z),ee=[{src:F.a,alt:"Image 1"},{src:H.a,alt:"Image 2"},{src:z.a,alt:"Image 3"},{src:D.a,alt:"Image 4"},{src:L.a,alt:"Image 5"},{src:$.a,alt:"Image 6"},{src:M.a,alt:"Image 7"},{src:U.a,alt:"Image 8"},{src:X.a,alt:"Image 9"},{src:_.a,alt:"Image 10"}];function te(e,t,a,n){return{nextButton:"Go to slide ".concat(t),previousButton:"Go to slide ".concat(a),status:"Slide ".concat(e," over ").concat(n)}}var ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(P,{getTranslations:te,slides:ee,title:"Test Carousel"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,t,a){e.exports=a.p+"static/media/1.43e4c49e.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/2.f7d19951.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/3.dc8a3344.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/4.e2df36ff.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/5.0b400027.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/6.32cfee3f.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/7.35128041.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/8.67a0cb42.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/9.d09e100b.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/10.61757b73.jpg"},65:function(e,t,a){e.exports=a(112)}},[[65,1,2]]]);
//# sourceMappingURL=main.c0dd9c7a.chunk.js.map