(this["webpackJsonp@pierre-do/carousel"]=this["webpackJsonp@pierre-do/carousel"]||[]).push([[0],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),c=a.n(r),o=a(95),s=a(167),l=a(168),p=a(169),m=a(30),u=a(58),d=a(170),g=a(171),h=a(161),f=a(22),b=Object(n.createContext)({close:function(){},open:function(){},indexToDisplay:null,isOpen:!1}),w=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(f.a)(a,2),c=r[0],o=r[1],s={open:o,close:function(){return o(null)},indexToDisplay:c,isOpen:null!==c};return i.a.createElement(b.Provider,{value:s},t)},x=function(){return Object(n.useContext)(b)},v=Object(u.a)((function(e){return{modalRoot:{"& > *:focus":{outline:"none"}},modalContent:Object(m.a)({position:"relative",top:"50%",transform:"translateY(-50%)"},e.breakpoints.up("md"),{marginLeft:e.spacing(2),marginRight:e.spacing(2)})}}));function E(e){var t=e.children,a=e.isInitiallyOpen,n=v(),r=x(),c=r.isOpen,o=r.close,s=a||c;return i.a.createElement(d.a,{open:s,onClose:o,BackdropComponent:g.a,className:n.modalRoot},i.a.createElement(h.a,{elevation:2,className:n.modalContent},t))}var j=a(165),y=a(64),N=a.n(y),O=a(47),C=a(61),S=a.n(C);function k(e,t){return(e%t+t)%t}function I(e,t){return'\n  <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 '.concat(e," ").concat(t,'"\n      height="').concat(t,'"\n      width="').concat(e,'"\n    >\n      <path d="" />\n    </svg>')}var P=function(e){var t,a=e.height,n=e.width,r=e.className;return i.a.createElement("img",{className:r,width:n,height:a,alt:"",src:(t=I(n,a),"data:image/svg+xml;base64,".concat(btoa(t)))})},T=Object(u.a)({root:{lineHeight:0,display:"inline-block"},picture:{display:"inline-block",transition:"opacity 250ms"},pictureVisible:{opacity:1},pictureHidden:{opacity:0,position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",border:0},loaderAnimation:{position:"absolute"}});function W(e){var t=e.src,a=e.srcWebp,r=e.alt,c=e.width,o=e.height,s=e.className,l=e.imgClassName,p=Object(n.useState)(!1),m=Object(f.a)(p,2),u=m[0],d=m[1],g=T(),h=u?g.pictureVisible:g.pictureHidden,b=!u;return i.a.createElement("div",{className:"".concat(g.root," ").concat(s)},b&&i.a.createElement(P,{className:l,width:c,height:o,alt:r}),i.a.createElement("picture",{className:"".concat(h," ").concat(g.picture),onLoad:function(){d(!0)}},i.a.createElement("source",{type:"image/webp",srcSet:a}),i.a.createElement("img",{className:l,title:r,src:t,width:c,height:o,alt:r})))}var B=Object(u.a)((function(e){return{slide:{display:"flex",cursor:"zoom-out"},imgContainer:{margin:"0 auto"},img:Object(m.a)({width:"100%",height:"auto",maxWidth:"100vw",maxHeight:"calc(100vh - 10rem)",objectFit:"scale-down",lineHeight:0},e.breakpoints.up("md"),{maxWidth:"calc(100vw - ".concat(e.spacing(4),"px)")})}}));function H(e){var t=e.alt,a=e.src,n=e.srcWebp,r=e.width,c=e.height,o=B(),s=x().close;return i.a.createElement("div",{className:o.slide,onClick:s},i.a.createElement(W,{src:a,srcWebp:n,width:r,height:c,alt:t,className:o.imgContainer,imgClassName:o.img}))}var _=a(34),R=a(162),G=a(163),D=a(164),A=a(62),z=a.n(A),F=a(63),L=a.n(F),M=Object(u.a)((function(e){return{arrowsContainer:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"none"},arrow:{pointerEvents:"all",marginLeft:e.spacing(1),marginRight:e.spacing(1)},srOnly:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",border:0}}}));function J(e){var t=e.goToPreviousSlide,a=e.goToNextSlide,n=e.translations,r=M(),c=Object(_.a)();return Object(R.a)(c.breakpoints.down("xs"))?null:i.a.createElement("div",{className:r.arrowsContainer},i.a.createElement(G.a,{in:!0,direction:"right"},i.a.createElement(D.a,{className:r.arrow,onClick:t},i.a.createElement("span",{className:r.srOnly},n.previousButton),i.a.createElement(z.a,{"aria-hidden":!0}))),i.a.createElement(G.a,{in:!0,direction:"left"},i.a.createElement(D.a,{className:r.arrow,onClick:a},i.a.createElement("span",{className:r.srOnly},n.nextButton),i.a.createElement(L.a,{"aria-hidden":!0}))))}var V=Object(u.a)({carouselRoot:{display:"flex",flexDirection:"column"},carouselContainer:{position:"relative",lineHeight:0},carouselHeader:{display:"flex",justifyContent:"space-between"},carouselTitle:{margin:"1rem"},carouselCloseButton:{margin:"0.5rem"},carouselStatus:{textAlign:"end",margin:"1rem"}}),q=Object(O.bindKeyboard)(Object(O.virtualize)(S.a)),K="objectFit"in document.documentElement.style;function Y(e){var t=e.slides,a=e.title,r=e.getTranslations,c=V(),o=x(),s=o.indexToDisplay,l=o.close,p=t.length,m=p>1,u=function(e,t){var a=Object(n.useState)(t),i=Object(f.a)(a,2),r=i[0],c=i[1];return{goToPreviousSlide:function(){return c(r-1)},goToNextSlide:function(){return c(r+1)},handleChangeIndex:function(e){return c(e)},currentSlideNumber:k(r,e)+1,previousSlideNumber:k(r-1,e)+1,nextSlideNumber:k(r+1,e)+1,slideIndex:r}}(p,null!==s&&void 0!==s?s:0),d=u.goToPreviousSlide,g=u.goToNextSlide,h=u.handleChangeIndex,b=u.currentSlideNumber,w=u.previousSlideNumber,v=u.nextSlideNumber,E=u.slideIndex,y=r(b,v,w,p);return i.a.createElement("div",{className:c.carouselRoot},i.a.createElement("div",{className:c.carouselHeader},i.a.createElement("h2",{className:c.carouselTitle},a),i.a.createElement(j.a,{className:c.carouselCloseButton,onClick:l},i.a.createElement(N.a,null))),i.a.createElement("div",{className:c.carouselContainer},i.a.createElement(q,{onChangeIndex:h,index:E,slideRenderer:function(e){var a=e.index,n=e.key,r=k(a,t.length),c=t[r];return i.a.createElement(H,Object.assign({key:n},c))},animateHeight:K,overscanSlideAfter:1,overscanSlideBefore:1,action:function(e){var t=e.updateHeight;requestAnimationFrame((function(){t()}))}}),m&&i.a.createElement(J,{goToPreviousSlide:d,goToNextSlide:g,translations:y}),i.a.createElement("div",{"aria-live":"polite",role:"status","aria-atomic":"true",className:c.carouselStatus},m&&y.status)))}function Q(e){return i.a.createElement(E,{isInitiallyOpen:e.isInitiallyOpen},i.a.createElement(Y,e))}var U=a(166),X=a(172),Z=a(65),$=a.n(Z),ee=a(66),te=a.n(ee),ae=a(67),ne=a.n(ae),ie=a(68),re=a.n(ie),ce=a(69),oe=a.n(ce),se=a(70),le=a.n(se),pe=a(71),me=a.n(pe),ue=a(72),de=a.n(ue),ge=a(73),he=a.n(ge),fe=a(74),be=a.n(fe),we=a(75),xe=a.n(we),ve=a(76),Ee=a.n(ve),je=a(77),ye=a.n(je),Ne=a(78),Oe=a.n(Ne),Ce=a(79),Se=a.n(Ce),ke=a(80),Ie=a.n(ke),Pe=a(81),Te=a.n(Pe),We=a(82),Be=a.n(We),He=a(83),_e=a.n(He),Re=a(84),Ge=a.n(Re),De=a(85),Ae=a.n(De),ze=a(86),Fe=a.n(ze),Le=a(87),Me=a.n(Le),Je=a(88),Ve=a.n(Je),qe=a(89),Ke=a.n(qe),Ye=a(90),Qe=a.n(Ye),Ue=a(91),Xe=a.n(Ue),Ze=a(92),$e=a.n(Ze),et=a(93),tt=a.n(et),at=a(94),nt=a.n(at),it=[{src:$.a,srcWebp:xe.a,srcPreview:Ae.a,alt:"Image 1",width:3840,height:2243},{src:te.a,srcWebp:Ee.a,srcPreview:Fe.a,alt:"Image 2",width:3866,height:2426},{src:ne.a,srcWebp:ye.a,srcPreview:Me.a,alt:"Image 3",width:3953,height:2965},{src:re.a,srcWebp:Oe.a,srcPreview:Ve.a,alt:"Image 4",width:4098,height:2732},{src:oe.a,srcWebp:Se.a,srcPreview:Ke.a,alt:"Image 5",width:4124,height:2600},{src:le.a,srcWebp:Ie.a,srcPreview:Qe.a,alt:"Image 6",width:4242,height:2154},{src:me.a,srcWebp:Te.a,srcPreview:Xe.a,alt:"Image 7",width:4940,height:3280},{src:de.a,srcWebp:Be.a,srcPreview:$e.a,alt:"Image 8",width:5042,height:3445},{src:he.a,srcWebp:_e.a,srcPreview:tt.a,alt:"Image 9",width:5163,height:3442},{src:be.a,srcWebp:Ge.a,srcPreview:nt.a,alt:"Image 10",width:5464,height:3070}];function rt(e,t,a,n){return{nextButton:"Go to slide ".concat(t),previousButton:"Go to slide ".concat(a),status:"Slide ".concat(e," over ").concat(n)}}var ct=Object(u.a)({img:{width:"100%",height:"auto",cursor:"zoom-in"}});function ot(e){var t=e.src,a=e.srcPreview,n=e.alt,r=e.index,c=e.width,o=e.height,s=ct(),l=x().open;return i.a.createElement("a",{href:t,onClick:function(e){e.preventDefault(),l(r)}},i.a.createElement(W,{src:a,alt:n,width:c,height:o,imgClassName:s.img}))}function st(e){var t=e.slides,a=e.title,n=Object(_.a)(),r=Object(R.a)(n.breakpoints.down("xs"));return i.a.createElement(w,null,i.a.createElement("h2",null,a),i.a.createElement(U.a,{cols:r?1:3},t.map((function(e,t){return i.a.createElement(X.a,{key:t},i.a.createElement(ot,Object.assign({index:t},e)))}))),i.a.createElement(Q,{getTranslations:rt,slides:t,title:a}))}var lt=function(){return function(){if("undefined"===typeof window||"function"!==typeof window.matchMedia)return!1;var e=window.matchMedia("(prefers-color-scheme: dark)");return!(!e||"undefined"===typeof e.matches)&&e.matches}()},pt=Object(o.a)({palette:{type:"light"}}),mt=Object(o.a)({palette:{type:"dark"}}),ut=function(){var e=lt();return i.a.createElement(s.a,{theme:e?mt:pt},i.a.createElement(l.a,null),i.a.createElement(p.a,null,i.a.createElement("h1",null,"Galleries with Carousel"),i.a.createElement("p",null,"Click on one if the image below to open the carousel."),i.a.createElement(st,{slides:it,title:"My Gallery"}),i.a.createElement(st,{slides:[it[8]],title:"Gallery with one image"}),i.a.createElement("h2",null,"Gallery with no title"),i.a.createElement(st,{slides:[it[7]]})))};c.a.render(i.a.createElement(ut,null),document.getElementById("root"))},65:function(e,t,a){e.exports=a.p+"static/media/1.43e4c49e.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/2.f7d19951.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/3.dc8a3344.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/4.e2df36ff.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/5.0b400027.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/6.32cfee3f.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/7.35128041.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/8.67a0cb42.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/9.d09e100b.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/10.61757b73.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/1.67ed8971.webp"},76:function(e,t,a){e.exports=a.p+"static/media/2.b88dec3c.webp"},77:function(e,t,a){e.exports=a.p+"static/media/3.a2d9f431.webp"},78:function(e,t,a){e.exports=a.p+"static/media/4.a9865d27.webp"},79:function(e,t,a){e.exports=a.p+"static/media/5.85a97d37.webp"},80:function(e,t,a){e.exports=a.p+"static/media/6.63f3c704.webp"},81:function(e,t,a){e.exports=a.p+"static/media/7.b55b2074.webp"},82:function(e,t,a){e.exports=a.p+"static/media/8.fa188ed5.webp"},83:function(e,t,a){e.exports=a.p+"static/media/9.175bc0d7.webp"},84:function(e,t,a){e.exports=a.p+"static/media/10.0191b0ab.webp"},85:function(e,t,a){e.exports=a.p+"static/media/1_small.be2f2418.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/2_small.a73f1ef2.jpg"},87:function(e,t,a){e.exports=a.p+"static/media/3_small.4f138faf.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/4_small.c8175740.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/5_small.1856f0ce.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/6_small.a7359d23.jpg"},91:function(e,t,a){e.exports=a.p+"static/media/7_small.ba4c7099.jpg"},92:function(e,t,a){e.exports=a.p+"static/media/8_small.d730c075.jpg"},93:function(e,t,a){e.exports=a.p+"static/media/9_small.4bd2bb57.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/10_small.b2f2c7a8.jpg"},98:function(e,t,a){e.exports=a(144)}},[[98,1,2]]]);
//# sourceMappingURL=main.2481f623.chunk.js.map