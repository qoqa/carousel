(this["webpackJsonp@pierre-do/carousel"]=this["webpackJsonp@pierre-do/carousel"]||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),c=a.n(r),o=a(90),s=a(138),l=a(139),p=a(140),u=a(34),d=a(53),m=a(141),h=a(142),g=a(132),f=a(22),b=Object(n.createContext)({close:function(){},open:function(){},indexToDisplay:null,isOpen:!1}),w=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(f.a)(a,2),c=r[0],o=r[1],s={open:o,close:function(){return o(null)},indexToDisplay:c,isOpen:null!==c};return i.a.createElement(b.Provider,{value:s},t)},v=function(){return Object(n.useContext)(b)},x=Object(d.a)((function(e){return{modalRoot:{"& > *:focus":{outline:"none"}},modalContent:Object(u.a)({position:"relative",top:"50%",transform:"translateY(-50%)"},e.breakpoints.up("md"),{marginLeft:e.spacing(2),marginRight:e.spacing(2)})}}));function E(e){var t=e.children,a=e.isInitiallyOpen,n=x(),r=v(),c=r.isOpen,o=r.close,s=a||c;return i.a.createElement(m.a,{open:s,onClose:o,BackdropComponent:h.a,className:n.modalRoot},i.a.createElement(g.a,{elevation:2,className:n.modalContent},t))}var j=a(136),y=a(59),N=a.n(y);function O(e,t){return(e%t+t)%t}function C(e,t){return'\n  <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 '.concat(e," ").concat(t,'"\n      height="').concat(t,'"\n      width="').concat(e,'"\n    >\n      <path d="" />\n    </svg>')}var I=function(e){var t,a=e.height,n=e.width,r=e.className;return i.a.createElement("img",{className:r,width:n,height:a,alt:"",src:(t=C(n,a),"data:image/svg+xml;base64,".concat(btoa(t)))})},S=Object(d.a)({root:{lineHeight:0,display:"inline-block"},picture:{display:"inline-block",transition:"opacity 250ms"},pictureVisible:{opacity:1},pictureHidden:{opacity:0,position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",border:0},loaderAnimation:{position:"absolute"}});function k(e){var t=e.src,a=e.srcWebp,r=e.alt,c=e.width,o=e.height,s=e.className,l=e.imgClassName,p=Object(n.useState)(!1),u=Object(f.a)(p,2),d=u[0],m=u[1],h=S(),g=d?h.pictureVisible:h.pictureHidden,b=!d;return i.a.createElement("div",{className:"".concat(h.root," ").concat(s)},b&&i.a.createElement(I,{className:l,width:c,height:o,alt:r}),i.a.createElement("picture",{className:"".concat(g," ").concat(h.picture),onLoad:function(){m(!0)}},i.a.createElement("source",{type:"image/webp",srcSet:a}),i.a.createElement("img",{className:l,title:r,src:t,width:c,height:o,alt:r})))}var P=Object(d.a)((function(e){return{slide:{display:"flex",cursor:"zoom-out"},imgContainer:{margin:"0 auto",overflow:"hidden"},img:Object(u.a)({width:"100%",height:"auto",maxWidth:"100vw",maxHeight:"calc(100vh - 10rem)",objectFit:"scale-down",lineHeight:0},e.breakpoints.up("md"),{maxWidth:"calc(100vw - ".concat(e.spacing(4),"px)")})}}));function T(e){var t=e.alt,a=e.src,n=e.srcWebp,r=e.width,c=e.height,o=P(),s=v().close;return i.a.createElement("div",{className:o.slide,onClick:s},i.a.createElement(k,{src:a,srcWebp:n,width:r,height:c,alt:t,className:o.imgContainer,imgClassName:o.img}))}var W=a(38),B=a(133),H=a(134),_=a(135),R=a(56),G=a.n(R),D=a(57),A=a.n(D),V=Object(d.a)((function(e){return{arrowsContainer:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"none"},arrow:{pointerEvents:"all",marginLeft:e.spacing(1),marginRight:e.spacing(1)},srOnly:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",border:0}}}));function z(e){var t=e.goToPreviousSlide,a=e.goToNextSlide,n=e.translations,r=V(),c=Object(W.a)();return Object(B.a)(c.breakpoints.down("xs"))?null:i.a.createElement("div",{className:r.arrowsContainer},i.a.createElement(H.a,{in:!0,direction:"right"},i.a.createElement(_.a,{className:r.arrow,onClick:t},i.a.createElement("span",{className:r.srOnly},n.previousButton),i.a.createElement(G.a,{"aria-hidden":!0}))),i.a.createElement(H.a,{in:!0,direction:"left"},i.a.createElement(_.a,{className:r.arrow,onClick:a},i.a.createElement("span",{className:r.srOnly},n.nextButton),i.a.createElement(A.a,{"aria-hidden":!0}))))}var F=a(43),L=a(58),M=a.n(L),J=Object(F.bindKeyboard)(Object(F.virtualize)(M.a)),q="objectFit"in document.documentElement.style;function K(e,t){return function(a){var n=a.index,r=a.key,c=O(n,e.length),o=e[c];return i.a.createElement(t,Object.assign({key:r},o))}}function Y(e){var t=e.viewProps,a=e.ViewComponent,n=e.handleChangeIndex,r=e.currentIndex;return t.length>1?i.a.createElement(J,{onChangeIndex:n,index:r,slideRenderer:K(t,a),animateHeight:q,overscanSlideAfter:1,overscanSlideBefore:1,action:function(e){var t=e.updateHeight;requestAnimationFrame((function(){t()}))}}):i.a.createElement(a,t[0])}var Q=Object(d.a)({carouselRoot:{display:"flex",flexDirection:"column"},carouselContainer:{position:"relative",lineHeight:0},carouselHeader:{display:"flex",justifyContent:"space-between"},carouselTitle:{margin:"1rem"},carouselCloseButton:{margin:"0.5rem"},carouselStatus:{textAlign:"end",margin:"1rem"}});function U(e){var t=e.slides,a=e.title,r=e.getTranslations,c=Q(),o=v(),s=o.indexToDisplay,l=o.close,p=t.length,u=p>1,d=function(e,t){var a=Object(n.useState)(t),i=Object(f.a)(a,2),r=i[0],c=i[1];return{goToPreviousSlide:function(){return c(r-1)},goToNextSlide:function(){return c(r+1)},handleChangeIndex:function(e){return c(e)},currentSlideNumber:O(r,e)+1,previousSlideNumber:O(r-1,e)+1,nextSlideNumber:O(r+1,e)+1,slideIndex:r}}(p,null!==s&&void 0!==s?s:0),m=d.goToPreviousSlide,h=d.goToNextSlide,g=d.handleChangeIndex,b=d.currentSlideNumber,w=d.previousSlideNumber,x=d.nextSlideNumber,E=d.slideIndex,y=r(b,x,w,p);return i.a.createElement("div",{className:c.carouselRoot},i.a.createElement("div",{className:c.carouselHeader},i.a.createElement("h2",{className:c.carouselTitle},a),i.a.createElement(j.a,{className:c.carouselCloseButton,onClick:l},i.a.createElement(N.a,null))),i.a.createElement("div",{className:c.carouselContainer},i.a.createElement(Y,{handleChangeIndex:g,currentIndex:E,ViewComponent:T,viewProps:t}),u&&i.a.createElement(z,{goToPreviousSlide:m,goToNextSlide:h,translations:y}),i.a.createElement("div",{"aria-live":"polite",role:"status","aria-atomic":"true",className:c.carouselStatus},u&&y.status)))}function X(e){return i.a.createElement(E,{isInitiallyOpen:e.isInitiallyOpen},i.a.createElement(U,e))}var Z=a(137),$=a(143),ee=a(60),te=a.n(ee),ae=a(61),ne=a.n(ae),ie=a(62),re=a.n(ie),ce=a(63),oe=a.n(ce),se=a(64),le=a.n(se),pe=a(65),ue=a.n(pe),de=a(66),me=a.n(de),he=a(67),ge=a.n(he),fe=a(68),be=a.n(fe),we=a(69),ve=a.n(we),xe=a(70),Ee=a.n(xe),je=a(71),ye=a.n(je),Ne=a(72),Oe=a.n(Ne),Ce=a(73),Ie=a.n(Ce),Se=a(74),ke=a.n(Se),Pe=a(75),Te=a.n(Pe),We=a(76),Be=a.n(We),He=a(77),_e=a.n(He),Re=a(78),Ge=a.n(Re),De=a(79),Ae=a.n(De),Ve=a(80),ze=a.n(Ve),Fe=a(81),Le=a.n(Fe),Me=a(82),Je=a.n(Me),qe=a(83),Ke=a.n(qe),Ye=a(84),Qe=a.n(Ye),Ue=a(85),Xe=a.n(Ue),Ze=a(86),$e=a.n(Ze),et=a(87),tt=a.n(et),at=a(88),nt=a.n(at),it=a(89),rt=a.n(it),ct=[{src:te.a,srcWebp:Ee.a,srcPreview:ze.a,alt:"Image 1",width:3840,height:2243},{src:ne.a,srcWebp:ye.a,srcPreview:Le.a,alt:"Image 2",width:3866,height:2426},{src:re.a,srcWebp:Oe.a,srcPreview:Je.a,alt:"Image 3",width:3953,height:2965},{src:oe.a,srcWebp:Ie.a,srcPreview:Ke.a,alt:"Image 4",width:4098,height:2732},{src:le.a,srcWebp:ke.a,srcPreview:Qe.a,alt:"Image 5",width:4124,height:2600},{src:ue.a,srcWebp:Te.a,srcPreview:Xe.a,alt:"Image 6",width:4242,height:2154},{src:me.a,srcWebp:Be.a,srcPreview:$e.a,alt:"Image 7",width:4940,height:3280},{src:ge.a,srcWebp:_e.a,srcPreview:tt.a,alt:"Image 8",width:5042,height:3445},{src:be.a,srcWebp:Ge.a,srcPreview:nt.a,alt:"Image 9",width:5163,height:3442},{src:ve.a,srcWebp:Ae.a,srcPreview:rt.a,alt:"Image 10",width:5464,height:3070}];function ot(e,t,a,n){return{nextButton:"Go to slide ".concat(t),previousButton:"Go to slide ".concat(a),status:"Slide ".concat(e," over ").concat(n)}}var st=Object(d.a)({img:{width:"100%",height:"auto",cursor:"zoom-in"}});function lt(e){var t=e.src,a=e.srcPreview,n=e.alt,r=e.index,c=e.width,o=e.height,s=st(),l=v().open;return i.a.createElement("a",{href:t,onClick:function(e){e.preventDefault(),l(r)}},i.a.createElement(k,{src:a,alt:n,width:c,height:o,imgClassName:s.img}))}function pt(e){var t=e.slides,a=e.title,n=Object(W.a)(),r=Object(B.a)(n.breakpoints.down("xs"));return i.a.createElement(w,null,i.a.createElement("h2",null,a),i.a.createElement(Z.a,{cols:r?1:3},t.map((function(e,t){return i.a.createElement($.a,{key:t},i.a.createElement(lt,Object.assign({index:t},e)))}))),i.a.createElement(X,{getTranslations:ot,slides:t,title:a}))}var ut=function(){return function(){if("undefined"===typeof window||"function"!==typeof window.matchMedia)return!1;var e=window.matchMedia("(prefers-color-scheme: dark)");return!(!e||"undefined"===typeof e.matches)&&e.matches}()},dt=Object(o.a)({palette:{type:"light"}}),mt=Object(o.a)({palette:{type:"dark"}}),ht=function(){var e=ut();return i.a.createElement(s.a,{theme:e?mt:dt},i.a.createElement(l.a,null),i.a.createElement(p.a,null,i.a.createElement("h1",null,"Galleries with Carousel"),i.a.createElement("p",null,"Click on one if the image below to open the carousel."),i.a.createElement(pt,{slides:ct,title:"My Gallery"}),i.a.createElement(pt,{slides:[ct[8]],title:"Gallery with one image"}),i.a.createElement("h2",null,"Gallery with no title"),i.a.createElement(pt,{slides:[ct[7]]})))};c.a.render(i.a.createElement(ht,null),document.getElementById("root"))},60:function(e,t,a){e.exports=a.p+"static/media/1.43e4c49e.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/2.f7d19951.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/3.dc8a3344.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/4.e2df36ff.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/5.0b400027.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/6.32cfee3f.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/7.35128041.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/8.67a0cb42.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/9.d09e100b.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/10.61757b73.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/1.67ed8971.webp"},71:function(e,t,a){e.exports=a.p+"static/media/2.b88dec3c.webp"},72:function(e,t,a){e.exports=a.p+"static/media/3.a2d9f431.webp"},73:function(e,t,a){e.exports=a.p+"static/media/4.a9865d27.webp"},74:function(e,t,a){e.exports=a.p+"static/media/5.85a97d37.webp"},75:function(e,t,a){e.exports=a.p+"static/media/6.63f3c704.webp"},76:function(e,t,a){e.exports=a.p+"static/media/7.b55b2074.webp"},77:function(e,t,a){e.exports=a.p+"static/media/8.fa188ed5.webp"},78:function(e,t,a){e.exports=a.p+"static/media/9.175bc0d7.webp"},79:function(e,t,a){e.exports=a.p+"static/media/10.0191b0ab.webp"},80:function(e,t,a){e.exports=a.p+"static/media/1_small.be2f2418.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/2_small.a73f1ef2.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/3_small.4f138faf.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/4_small.c8175740.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/5_small.1856f0ce.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/6_small.a7359d23.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/7_small.ba4c7099.jpg"},87:function(e,t,a){e.exports=a.p+"static/media/8_small.d730c075.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/9_small.4bd2bb57.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/10_small.b2f2c7a8.jpg"},93:function(e,t,a){e.exports=a(115)}},[[93,1,2]]]);
//# sourceMappingURL=main.de3414e1.chunk.js.map