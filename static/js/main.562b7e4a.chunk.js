(this["webpackJsonp@pierre-do/carousel"]=this["webpackJsonp@pierre-do/carousel"]||[]).push([[0],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),o=a(90),s=a(162),l=a(163),u=a(164),p=a(29),d=a(156),m=a(165),h=a(166),g=a(20),f=Object(n.createContext)({close:function(){},open:function(){},indexToDisplay:null,isOpen:!1}),b=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(g.a)(a,2),c=r[0],o=r[1],s={open:o,close:function(){return o(null)},indexToDisplay:c,isOpen:null!==c};return i.a.createElement(f.Provider,{value:s},t)},w=function(){return Object(n.useContext)(f)},v=Object(d.a)((function(e){return{modalRoot:{"& > *:focus":{outline:"none"}},modalContent:Object(p.a)({position:"relative",height:"100%"},e.breakpoints.up("md"),{marginLeft:e.spacing(2),marginRight:e.spacing(2)})}}));function x(e){var t=e.children,a=e.isInitiallyOpen,n=v(),r=w(),c=r.isOpen,o=r.close,s=a||c;return i.a.createElement(m.a,{"aria-labelledby":"modal-title",open:s,onClose:o,TransitionComponent:h.a,fullWidth:!0,maxWidth:"md",fullScreen:!0,scroll:"body",className:n.modalRoot},i.a.createElement("div",{className:n.modalContent},t))}var E=a(160),j=a(59),y=a.n(j);function O(e,t){return(e%t+t)%t}var N=Object(d.a)((function(){return{img:{background:"black",opacity:.125}}}));function C(e,t){return'\n  <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 '.concat(e," ").concat(t,'"\n      height="').concat(t,'"\n      width="').concat(e,'"\n    >\n      <path d="" />\n    </svg>')}var I=function(e){var t,a=e.height,n=e.width,r=e.className,c=N();return i.a.createElement("img",{className:"".concat(r," ").concat(c.img),width:n,height:a,alt:"",src:(t=C(n,a),"data:image/svg+xml;base64,".concat(btoa(t)))})},S=Object(d.a)({root:{lineHeight:0,display:"inline-block"},picture:{display:"inline-block",transition:"opacity 250ms"},pictureVisible:{opacity:1},pictureHidden:{opacity:0,position:"absolute",clip:"rect(0, 0, 0, 0)"},loaderAnimation:{position:"absolute"}});function k(e){var t=e.src,a=e.srcWebp,r=e.alt,c=e.width,o=e.height,s=e.className,l=e.imgClassName,u=Object(n.useState)(!1),p=Object(g.a)(u,2),d=p[0],m=p[1],h=S(),f=d?h.pictureVisible:h.pictureHidden,b=!d;return i.a.createElement("div",{className:"".concat(h.root," ").concat(s)},b&&i.a.createElement(I,{className:l,width:c,height:o,alt:r}),i.a.createElement("picture",{className:"".concat(f," ").concat(h.picture),onLoad:function(){m(!0)}},i.a.createElement("source",{type:"image/webp",srcSet:a}),i.a.createElement("img",{className:l,title:r,src:t,width:c,height:o,alt:r})))}var P=Object(d.a)((function(e){return{slide:{display:"flex",cursor:"zoom-out"},imgContainer:{margin:"0 auto",overflow:"hidden"},img:Object(p.a)({width:"100%",height:"auto",maxWidth:"100vw",maxHeight:"calc(100vh - 10rem)",objectFit:"scale-down",lineHeight:0},e.breakpoints.up("md"),{maxWidth:"calc(100vw - ".concat(e.spacing(4),"px)")})}}));function W(e){var t=e.alt,a=e.src,n=e.srcWebp,r=e.width,c=e.height,o=P(),s=w().close;return i.a.createElement("div",{className:o.slide,onClick:s},i.a.createElement(k,{src:a,srcWebp:n,width:r,height:c,alt:t,className:o.imgContainer,imgClassName:o.img}))}var T=a(55),_=a(158),B=a(159),H=a(56),R=a.n(H),G=a(57),D=a.n(G),V=Object(d.a)((function(e){return{arrowsContainer:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"none"},arrow:{pointerEvents:"all",marginLeft:e.spacing(1),marginRight:e.spacing(1)},srOnly:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",border:0}}}));function z(e){var t=e.goToPreviousSlide,a=e.goToNextSlide,n=e.translations,r=V(),c=Object(T.a)();return Object(_.a)(c.breakpoints.down("xs"))?null:i.a.createElement("div",{className:r.arrowsContainer},i.a.createElement(h.a,{in:!0},i.a.createElement(B.a,{className:r.arrow,onClick:t},i.a.createElement("span",{className:r.srOnly},n.previousButton),i.a.createElement(R.a,{"aria-hidden":!0}))),i.a.createElement(h.a,{in:!0},i.a.createElement(B.a,{className:r.arrow,onClick:a},i.a.createElement("span",{className:r.srOnly},n.nextButton),i.a.createElement(D.a,{"aria-hidden":!0}))))}var A=a(43),L=a(58),M=a.n(L),J=Object(A.bindKeyboard)(Object(A.virtualize)(M.a));function F(e,t){return function(a){var n=a.index,r=a.key,c=O(n,e.length),o=e[c];return i.a.createElement(t,Object.assign({key:r},o))}}var K=Object(d.a)((function(){return{slide:{alignSelf:"center"}}}));function q(e){var t=e.viewProps,a=e.ViewComponent,n=e.handleChangeIndex,r=e.currentIndex,c=t.length>1,o=K();return c?i.a.createElement(J,{onChangeIndex:n,index:r,slideRenderer:F(t,a),overscanSlideAfter:2,overscanSlideBefore:2,slideClassName:o.slide}):i.a.createElement(a,t[0])}var Q=Object(d.a)({carouselRoot:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},carouselContainer:{position:"relative",lineHeight:0},carouselHeader:{display:"flex",justifyContent:"space-between"},carouselTitle:{margin:"1rem"},carouselCloseButton:{margin:"0.5rem"},carouselStatus:{textAlign:"end",margin:"1rem"}});function U(e){var t=e.slides,a=e.title,r=e.getTranslations,c=Q(),o=w(),s=o.indexToDisplay,l=o.close,u=t.length,p=u>1,d=function(e,t){var a=Object(n.useState)(t),i=Object(g.a)(a,2),r=i[0],c=i[1];return{goToPreviousSlide:function(){return c(r-1)},goToNextSlide:function(){return c(r+1)},handleChangeIndex:function(e){return c(e)},currentSlideNumber:O(r,e)+1,previousSlideNumber:O(r-1,e)+1,nextSlideNumber:O(r+1,e)+1,slideIndex:r}}(u,null!==s&&void 0!==s?s:0),m=d.goToPreviousSlide,h=d.goToNextSlide,f=d.handleChangeIndex,b=d.currentSlideNumber,v=d.previousSlideNumber,x=d.nextSlideNumber,j=d.slideIndex,N=r(b,x,v,u);return i.a.createElement("div",{className:c.carouselRoot},i.a.createElement("div",{className:c.carouselHeader},i.a.createElement("h2",{className:c.carouselTitle},a),i.a.createElement(E.a,{className:c.carouselCloseButton,onClick:l},i.a.createElement(y.a,null))),i.a.createElement("div",{className:c.carouselContainer},i.a.createElement(q,{handleChangeIndex:f,currentIndex:j,ViewComponent:W,viewProps:t}),p&&i.a.createElement(z,{goToPreviousSlide:m,goToNextSlide:h,translations:N})),i.a.createElement("div",{"aria-live":"polite",role:"status","aria-atomic":"true",className:c.carouselStatus},p&&N.status))}function X(e){return i.a.createElement(x,{isInitiallyOpen:e.isInitiallyOpen},i.a.createElement(U,e))}var Y=a(161),Z=a(167),$=a(60),ee=a.n($),te=a(61),ae=a.n(te),ne=a(62),ie=a.n(ne),re=a(63),ce=a.n(re),oe=a(64),se=a.n(oe),le=a(65),ue=a.n(le),pe=a(66),de=a.n(pe),me=a(67),he=a.n(me),ge=a(68),fe=a.n(ge),be=a(69),we=a.n(be),ve=a(70),xe=a.n(ve),Ee=a(71),je=a.n(Ee),ye=a(72),Oe=a.n(ye),Ne=a(73),Ce=a.n(Ne),Ie=a(74),Se=a.n(Ie),ke=a(75),Pe=a.n(ke),We=a(76),Te=a.n(We),_e=a(77),Be=a.n(_e),He=a(78),Re=a.n(He),Ge=a(79),De=a.n(Ge),Ve=a(80),ze=a.n(Ve),Ae=a(81),Le=a.n(Ae),Me=a(82),Je=a.n(Me),Fe=a(83),Ke=a.n(Fe),qe=a(84),Qe=a.n(qe),Ue=a(85),Xe=a.n(Ue),Ye=a(86),Ze=a.n(Ye),$e=a(87),et=a.n($e),tt=a(88),at=a.n(tt),nt=a(89),it=a.n(nt),rt=[{src:ee.a,srcWebp:xe.a,srcPreview:ze.a,alt:"Image 1",width:3840,height:2243},{src:ae.a,srcWebp:je.a,srcPreview:Le.a,alt:"Image 2",width:3866,height:2426},{src:ie.a,srcWebp:Oe.a,srcPreview:Je.a,alt:"Image 3",width:3953,height:2965},{src:ce.a,srcWebp:Ce.a,srcPreview:Ke.a,alt:"Image 4",width:4098,height:2732},{src:se.a,srcWebp:Se.a,srcPreview:Qe.a,alt:"Image 5",width:4124,height:2600},{src:ue.a,srcWebp:Pe.a,srcPreview:Xe.a,alt:"Image 6",width:4242,height:2154},{src:de.a,srcWebp:Te.a,srcPreview:Ze.a,alt:"Image 7",width:4940,height:3280},{src:he.a,srcWebp:Be.a,srcPreview:et.a,alt:"Image 8",width:5042,height:3445},{src:fe.a,srcWebp:Re.a,srcPreview:at.a,alt:"Image 9",width:5163,height:3442},{src:we.a,srcWebp:De.a,srcPreview:it.a,alt:"Image 10",width:5464,height:3070}];function ct(e,t,a,n){return{nextButton:"Go to slide ".concat(t),previousButton:"Go to slide ".concat(a),status:"".concat(e," over ").concat(n)}}var ot=Object(d.a)({img:{width:"100%",height:"auto",cursor:"zoom-in"}});function st(e){var t=e.src,a=e.srcPreview,n=e.alt,r=e.index,c=e.width,o=e.height,s=ot(),l=w().open;return i.a.createElement("a",{href:t,onClick:function(e){e.preventDefault(),l(r)}},i.a.createElement(k,{src:a,alt:n,width:c,height:o,imgClassName:s.img}))}function lt(e){var t=e.slides,a=e.title,n=Object(T.a)(),r=Object(_.a)(n.breakpoints.down("xs"));return i.a.createElement(b,null,i.a.createElement("h2",null,a),i.a.createElement(Y.a,{cols:r?1:3},t.map((function(e,t){return i.a.createElement(Z.a,{key:t},i.a.createElement(st,Object.assign({index:t},e)))}))),i.a.createElement(X,{getTranslations:ct,slides:t,title:a}))}var ut=function(){return function(){if("undefined"===typeof window||"function"!==typeof window.matchMedia)return!1;var e=window.matchMedia("(prefers-color-scheme: dark)");return!(!e||"undefined"===typeof e.matches)&&e.matches}()},pt=Object(o.a)({palette:{type:"light"}}),dt=Object(o.a)({palette:{type:"dark"}}),mt=function(){var e=ut();return i.a.createElement(s.a,{theme:e?dt:pt},i.a.createElement(l.a,null),i.a.createElement(u.a,null,i.a.createElement("h1",null,"Galleries with Carousel"),i.a.createElement("p",null,"Click on one if the image below to open the carousel."),i.a.createElement(lt,{slides:rt,title:"My Gallery"}),i.a.createElement(lt,{slides:[rt[8]],title:"Gallery with one image"}),i.a.createElement("h2",null,"Gallery with no title"),i.a.createElement(lt,{slides:[rt[7]]})))};c.a.render(i.a.createElement(mt,null),document.getElementById("root"))},60:function(e,t,a){e.exports=a.p+"static/media/1.43e4c49e.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/2.f7d19951.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/3.dc8a3344.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/4.e2df36ff.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/5.0b400027.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/6.32cfee3f.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/7.35128041.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/8.67a0cb42.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/9.d09e100b.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/10.61757b73.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/1.67ed8971.webp"},71:function(e,t,a){e.exports=a.p+"static/media/2.b88dec3c.webp"},72:function(e,t,a){e.exports=a.p+"static/media/3.a2d9f431.webp"},73:function(e,t,a){e.exports=a.p+"static/media/4.a9865d27.webp"},74:function(e,t,a){e.exports=a.p+"static/media/5.85a97d37.webp"},75:function(e,t,a){e.exports=a.p+"static/media/6.63f3c704.webp"},76:function(e,t,a){e.exports=a.p+"static/media/7.b55b2074.webp"},77:function(e,t,a){e.exports=a.p+"static/media/8.fa188ed5.webp"},78:function(e,t,a){e.exports=a.p+"static/media/9.175bc0d7.webp"},79:function(e,t,a){e.exports=a.p+"static/media/10.0191b0ab.webp"},80:function(e,t,a){e.exports=a.p+"static/media/1_small.be2f2418.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/2_small.a73f1ef2.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/3_small.4f138faf.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/4_small.c8175740.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/5_small.1856f0ce.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/6_small.a7359d23.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/7_small.ba4c7099.jpg"},87:function(e,t,a){e.exports=a.p+"static/media/8_small.d730c075.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/9_small.4bd2bb57.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/10_small.b2f2c7a8.jpg"},96:function(e,t,a){e.exports=a(139)}},[[96,1,2]]]);
//# sourceMappingURL=main.562b7e4a.chunk.js.map