(this.webpackJsonpcarousel=this.webpackJsonpcarousel||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(5),o=a.n(r),c=a(132),l=a(19),s=a(46),m=a(133),u=a(130),d=a(115),p=a(131),g=Object(s.a)((function(e){var t;return{modalRoot:{"& > *:focus":{outline:"none"}},modalContent:(t={},Object(l.a)(t,e.breakpoints.down("sm"),{width:"100%",margin:"-16px auto 0",position:"relative",top:"50%",transform:"translateY(-50%)"}),Object(l.a)(t,e.breakpoints.up("md"),{marginTop:e.spacing(2),marginLeft:e.spacing(2),marginRight:e.spacing(2)}),t)}}));function h(e){var t=e.children,a=g();return i.a.createElement(m.a,{open:!0,BackdropComponent:u.a,className:a.modalRoot},i.a.createElement(d.a,{appear:!0,in:!0},i.a.createElement(p.a,{elevation:2,className:a.modalContent},t)))}var f=a(38),v=a(49),x=a.n(v),b=a(62);function E(e,t){return(e%t+t)%t}var w=Object(s.a)((function(e){return{slide:{display:"flex"},img:Object(l.a)({width:"100%",height:"auto",margin:"0 auto",maxWidth:"100vw",maxHeight:"calc(100vh - 10rem)",objectFit:"scale-down",lineHeight:0},e.breakpoints.up("md"),{maxWidth:"calc(100vw - ".concat(e.spacing(4),"px)")})}}));function j(e){var t=e.alt,a=e.src,n=e.width,r=e.height,o=w();return i.a.createElement("div",{className:o.slide},i.a.createElement("img",{className:o.img,src:a,alt:t,width:n,height:r}))}var N=a(134),S=a(50),I=a.n(S),O=a(51),T=a.n(O),C=Object(s.a)((function(e){return{arrowsContainer:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"none"},arrow:{pointerEvents:"all",marginLeft:e.spacing(1),marginRight:e.spacing(1)},srOnly:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",border:0}}}));function y(e){var t=e.goToPreviousSlide,a=e.goToNextSlide,n=e.translations,r=C();return i.a.createElement("div",{className:r.arrowsContainer},i.a.createElement(N.a,{className:r.arrow,onClick:t},i.a.createElement("span",{className:r.srOnly},n.previousButton),i.a.createElement(I.a,{"aria-hidden":!0})),i.a.createElement(N.a,{className:r.arrow,onClick:a},i.a.createElement("span",{className:r.srOnly},n.nextButton),i.a.createElement(T.a,{"aria-hidden":!0})))}var k=Object(s.a)({carouselRoot:{display:"flex",flexDirection:"column"},carouselContainer:{position:"relative",lineHeight:0},carouselTitle:{margin:"1rem"},carouselStatus:{textAlign:"end",margin:"1rem"}}),R=Object(f.bindKeyboard)(Object(f.virtualize)(x.a));function B(e){var t=e.slides,a=e.title,r=e.getTranslations,o=k(),c=t.length,l=c>1,s=function(e){var t=Object(n.useState)(0),a=Object(b.a)(t,2),i=a[0],r=a[1];return{goToPreviousSlide:function(){return r(i-1)},goToNextSlide:function(){return r(i+1)},handleChangeIndex:function(e){return r(e)},currentSlideNumber:E(i,e)+1,previousSlideNumber:E(i-1,e)+1,nextSlideNumber:E(i+1,e)+1,slideIndex:i}}(c),m=s.goToPreviousSlide,u=s.goToNextSlide,d=s.handleChangeIndex,p=s.currentSlideNumber,g=s.previousSlideNumber,h=s.nextSlideNumber,f=s.slideIndex,v=r(p,h,g,c);return i.a.createElement("div",{className:o.carouselRoot},a&&i.a.createElement("h2",{className:o.carouselTitle},a),i.a.createElement("div",{className:o.carouselContainer},i.a.createElement(R,{onChangeIndex:d,index:f,slideRenderer:function(e){var a=e.index,n=e.key,r=E(a,t.length),o=t[r];return i.a.createElement(j,Object.assign({key:n},o))},animateHeight:!0}),l&&i.a.createElement(i.a.Fragment,null,i.a.createElement(y,{goToPreviousSlide:m,goToNextSlide:u,translations:v}),i.a.createElement("div",{"aria-live":"polite",className:o.carouselStatus},v.status))))}function H(e){return i.a.createElement(h,null,i.a.createElement(B,e))}var P=a(52),A=a.n(P),F=a(53),G=a.n(F),J=a(54),L=a.n(J),W=a(55),z=a.n(W),D=a(56),K=a.n(D),Y=a(57),q=a.n(Y),M=a(58),Q=a.n(M),U=a(59),V=a.n(U),X=a(60),Z=a.n(X),$=a(61),_=a.n($),ee=[{src:A.a,alt:"Image 1",width:3840,height:2243},{src:G.a,alt:"Image 2",width:3886,height:2426},{src:L.a,alt:"Image 3",width:3953,height:2965},{src:z.a,alt:"Image 4",width:4098,height:2732},{src:K.a,alt:"Image 5",width:4124,height:2600},{src:q.a,alt:"Image 6",width:4242,height:2154},{src:Q.a,alt:"Image 7",width:4949,height:3280},{src:V.a,alt:"Image 8",width:5042,height:3445},{src:Z.a,alt:"Image 9",width:5163,height:3442},{src:_.a,alt:"Image 10",width:5464,height:3070}];function te(e,t,a,n){return{nextButton:"Go to slide ".concat(t),previousButton:"Go to slide ".concat(a),status:"Slide ".concat(e," over ").concat(n)}}var ae=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null),i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Test App"),i.a.createElement(H,{getTranslations:te,slides:ee,title:"Test Carousel"})))};o.a.render(i.a.createElement(ae,null),document.getElementById("root"))},52:function(e,t,a){e.exports=a.p+"static/media/1.43e4c49e.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/2.f7d19951.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/3.dc8a3344.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/4.e2df36ff.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/5.0b400027.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/6.32cfee3f.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/7.35128041.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/8.67a0cb42.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/9.d09e100b.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/10.61757b73.jpg"},65:function(e,t,a){e.exports=a(112)}},[[65,1,2]]]);
//# sourceMappingURL=main.be763d96.chunk.js.map