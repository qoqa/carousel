(this.webpackJsonpcarousel=this.webpackJsonpcarousel||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),c=a.n(r),s=a(49),o=a(151),l=a(152),p=a(153),m=a(157),d=a(23),u=a(154),g=a(156),h=a(150),f=a(18),b=Object(n.createContext)({indexToDisplay:null,isOpen:!1}),x=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(f.a)(a,2),c=r[0],s=r[1],o={open:s,close:function(){return s(null)},indexToDisplay:c,isOpen:null!==c};return i.a.createElement(b.Provider,{value:o},t)},v=function(){return Object(n.useContext)(b)},w=Object(s.a)((function(e){var t;return{modalRoot:{"& > *:focus":{outline:"none"}},modalContent:(t={position:"relative",top:"50%",transform:"translateY(-50%)"},Object(d.a)(t,e.breakpoints.down("sm"),{width:"100%",margin:"-16px auto 0"}),Object(d.a)(t,e.breakpoints.up("md"),{marginLeft:e.spacing(2),marginRight:e.spacing(2)}),t)}}));function j(e){var t=e.children,a=e.isInitiallyOpen,n=w(),r=v(),c=r.isOpen,s=r.close,o=a||c;return i.a.createElement(u.a,{open:o,onClose:s,BackdropComponent:g.a,className:n.modalRoot},i.a.createElement(h.a,{elevation:2,className:n.modalContent},t))}var E=a(40),N=a(52),O=a.n(N);function C(e,t){return(e%t+t)%t}var y=function(e){var t=e.height,a=e.width,n=e.alt,r=e.className;return i.a.createElement("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(a," ").concat(t),"aria-label":n,height:t,width:a},i.a.createElement("path",{d:""}))},S=Object(s.a)({root:{height:"100%",lineHeight:0,display:"inline-block"},picture:{display:"inline-block",transition:"opacity 250ms"},pictureVisible:{opacity:1},pictureHidden:{opacity:0,position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",border:0},loaderContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},loaderAnimation:{position:"absolute"}});function I(e){var t=e.src,a=e.srcWebp,r=e.alt,c=e.width,s=e.height,o=e.className,l=e.imgClassName,p=Object(n.useState)(!1),m=Object(f.a)(p,2),d=m[0],u=m[1],g=S();Object(n.useMemo)((function(){u(!1)}),[t,u]);var h=d?g.pictureVisible:g.pictureHidden,b=!d||!t;return i.a.createElement("div",{className:"".concat(g.root," ").concat(o)},b&&i.a.createElement("div",{className:g.loaderContainer},i.a.createElement(y,{className:l,width:c,height:s,alt:r})),i.a.createElement("picture",{className:"".concat(h," ").concat(g.picture),onLoad:function(){u(!0)}},i.a.createElement("source",{type:"image/webp",srcSet:a}),i.a.createElement("img",{"data-testid":"image-loaded",className:l,title:r,src:t,width:c,height:s,alt:r})))}var T=Object(s.a)((function(e){return{slide:{display:"flex",cursor:"zoom-out"},imgContainer:{margin:"0 auto"},img:Object(d.a)({width:"100%",height:"auto",maxWidth:"100vw",maxHeight:"calc(100vh - 10rem)",objectFit:"scale-down",lineHeight:0},e.breakpoints.up("md"),{maxWidth:"calc(100vw - ".concat(e.spacing(4),"px)")})}}));function P(e){var t=e.alt,a=e.src,n=e.srcWebp,r=e.width,c=e.height,s=T(),o=v().close;return i.a.createElement("div",{className:s.slide,onClick:o},i.a.createElement(I,{src:a,srcWebp:n,width:r,height:c,alt:t,className:s.imgContainer,imgClassName:s.img}))}var k=a(155),W=a(53),_=a.n(W),H=a(54),B=a.n(H),R=Object(s.a)((function(e){return{arrowsContainer:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"none"},arrow:{pointerEvents:"all",marginLeft:e.spacing(1),marginRight:e.spacing(1)},srOnly:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",border:0}}}));function A(e){var t=e.goToPreviousSlide,a=e.goToNextSlide,n=e.translations,r=R();return i.a.createElement("div",{className:r.arrowsContainer},i.a.createElement(k.a,{className:r.arrow,onClick:t},i.a.createElement("span",{className:r.srOnly},n.previousButton),i.a.createElement(_.a,{"aria-hidden":!0})),i.a.createElement(k.a,{className:r.arrow,onClick:a},i.a.createElement("span",{className:r.srOnly},n.nextButton),i.a.createElement(B.a,{"aria-hidden":!0})))}var D=Object(s.a)({carouselRoot:{display:"flex",flexDirection:"column"},carouselContainer:{position:"relative",lineHeight:0},carouselTitle:{margin:"1rem"},carouselStatus:{textAlign:"end",margin:"1rem"}}),z=Object(E.bindKeyboard)(Object(E.virtualize)(O.a));function L(e){var t=e.slides,a=e.title,r=e.getTranslations,c=D(),s=v().indexToDisplay,o=t.length,l=o>1,p=function(e,t){var a=Object(n.useState)(t),i=Object(f.a)(a,2),r=i[0],c=i[1];return{goToPreviousSlide:function(){return c(r-1)},goToNextSlide:function(){return c(r+1)},handleChangeIndex:function(e){return c(e)},currentSlideNumber:C(r,e)+1,previousSlideNumber:C(r-1,e)+1,nextSlideNumber:C(r+1,e)+1,slideIndex:r}}(o,null!==s&&void 0!==s?s:0),m=p.goToPreviousSlide,d=p.goToNextSlide,u=p.handleChangeIndex,g=p.currentSlideNumber,h=p.previousSlideNumber,b=p.nextSlideNumber,x=p.slideIndex,w=r(g,b,h,o);return i.a.createElement("div",{className:c.carouselRoot},a&&i.a.createElement("h2",{className:c.carouselTitle},a),i.a.createElement("div",{className:c.carouselContainer},i.a.createElement(z,{onChangeIndex:u,index:x,slideRenderer:function(e){var a=e.index,n=e.key,r=C(a,t.length),c=t[r];return i.a.createElement(P,Object.assign({key:n},c))},animateHeight:!0,overscanSlideAfter:1,overscanSlideBefore:1,action:function(e){(0,e.updateHeight)()}}),l&&i.a.createElement(i.a.Fragment,null,i.a.createElement(A,{goToPreviousSlide:m,goToNextSlide:d,translations:w}),i.a.createElement("div",{"aria-live":"polite",role:"status","aria-atomic":"true",className:c.carouselStatus},w.status))))}function F(e){return i.a.createElement(j,{isInitiallyOpen:e.isInitiallyOpen},i.a.createElement(L,e))}var G=a(55),J=a.n(G),V=a(56),K=a.n(V),M=a(57),Y=a.n(M),q=a(58),Q=a.n(q),U=a(59),X=a.n(U),Z=a(60),$=a.n(Z),ee=a(61),te=a.n(ee),ae=a(62),ne=a.n(ae),ie=a(63),re=a.n(ie),ce=a(64),se=a.n(ce),oe=a(65),le=a.n(oe),pe=a(66),me=a.n(pe),de=a(67),ue=a.n(de),ge=a(68),he=a.n(ge),fe=a(69),be=a.n(fe),xe=a(70),ve=a.n(xe),we=a(71),je=a.n(we),Ee=a(72),Ne=a.n(Ee),Oe=a(73),Ce=a.n(Oe),ye=a(74),Se=a.n(ye),Ie=a(75),Te=a.n(Ie),Pe=a(76),ke=a.n(Pe),We=a(77),_e=a.n(We),He=a(78),Be=a.n(He),Re=a(79),Ae=a.n(Re),De=a(80),ze=a.n(De),Le=a(81),Fe=a.n(Le),Ge=a(82),Je=a.n(Ge),Ve=a(83),Ke=a.n(Ve),Me=a(84),Ye=a.n(Me),qe=[{src:J.a,srcWebp:le.a,srcPreview:Te.a,alt:"Image 1",width:3840,height:2243},{src:K.a,srcWebp:me.a,srcPreview:ke.a,alt:"Image 2",width:3886,height:2426},{src:Y.a,srcWebp:ue.a,srcPreview:_e.a,alt:"Image 3",width:3953,height:2965},{src:Q.a,srcWebp:he.a,srcPreview:Be.a,alt:"Image 4",width:4098,height:2732},{src:X.a,srcWebp:be.a,srcPreview:Ae.a,alt:"Image 5",width:4124,height:2600},{src:$.a,srcWebp:ve.a,srcPreview:ze.a,alt:"Image 6",width:4242,height:2154},{src:te.a,srcWebp:je.a,srcPreview:Fe.a,alt:"Image 7",width:4949,height:3280},{src:ne.a,srcWebp:Ne.a,srcPreview:Je.a,alt:"Image 8",width:5042,height:3445},{src:re.a,srcWebp:Ce.a,srcPreview:Ke.a,alt:"Image 9",width:5163,height:3442},{src:se.a,srcWebp:Se.a,srcPreview:Ye.a,alt:"Image 10",width:5464,height:3070}];function Qe(e,t,a,n){return{nextButton:"Go to slide ".concat(t),previousButton:"Go to slide ".concat(a),status:"Slide ".concat(e," over ").concat(n)}}var Ue=Object(s.a)({img:{width:"100%",height:"auto",cursor:"zoom-in"}});function Xe(e){var t=e.src,a=e.srcPreview,n=e.alt,r=e.index,c=e.width,s=e.height,o=Ue(),l=v().open;return i.a.createElement("a",{href:t,onClick:function(e){e.preventDefault(),l&&l(r)}},i.a.createElement(I,{src:a,alt:n,width:c,height:s,imgClassName:o.img}))}var Ze=function(){return i.a.createElement(x,null,i.a.createElement(o.a,null),i.a.createElement(l.a,{className:"App"},i.a.createElement("h1",null,"Test App"),i.a.createElement(p.a,{cellHeight:160,cols:3},qe.map((function(e,t){return i.a.createElement(m.a,{key:t},i.a.createElement(Xe,Object.assign({index:t},e)))}))),i.a.createElement(F,{getTranslations:Qe,slides:qe,title:"Test Carousel"})))};c.a.render(i.a.createElement(Ze,null),document.getElementById("root"))},55:function(e,t,a){e.exports=a.p+"static/media/1.43e4c49e.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/2.f7d19951.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/3.dc8a3344.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/4.e2df36ff.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/5.0b400027.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/6.32cfee3f.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/7.35128041.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/8.67a0cb42.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/9.d09e100b.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/10.61757b73.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/1.67ed8971.webp"},66:function(e,t,a){e.exports=a.p+"static/media/2.b88dec3c.webp"},67:function(e,t,a){e.exports=a.p+"static/media/3.a2d9f431.webp"},68:function(e,t,a){e.exports=a.p+"static/media/4.a9865d27.webp"},69:function(e,t,a){e.exports=a.p+"static/media/5.85a97d37.webp"},70:function(e,t,a){e.exports=a.p+"static/media/6.63f3c704.webp"},71:function(e,t,a){e.exports=a.p+"static/media/7.b55b2074.webp"},72:function(e,t,a){e.exports=a.p+"static/media/8.fa188ed5.webp"},73:function(e,t,a){e.exports=a.p+"static/media/9.175bc0d7.webp"},74:function(e,t,a){e.exports=a.p+"static/media/10.0191b0ab.webp"},75:function(e,t,a){e.exports=a.p+"static/media/1_small.be2f2418.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/2_small.a73f1ef2.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/3_small.4f138faf.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/4_small.c8175740.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/5_small.1856f0ce.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/6_small.a7359d23.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/7_small.ba4c7099.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/8_small.d730c075.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/9_small.4bd2bb57.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/10_small.b2f2c7a8.jpg"},87:function(e,t,a){e.exports=a(133)}},[[87,1,2]]]);
//# sourceMappingURL=main.334a614b.chunk.js.map