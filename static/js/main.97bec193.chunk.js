(this["webpackJsonp@pierre-do/carousel"]=this["webpackJsonp@pierre-do/carousel"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return l}));var n=a(28),i=a(0),r=a.n(i),c=a(23),o=Object(i.createContext)({close:function(){},open:function(){},indexToDisplay:0,isOpen:!1,slides:[],slidesCount:0}),s=function(e){var t=e.children,a=e.slides,s=(null===a||void 0===a?void 0:a.length)||0,l=Object(i.useState)(!1),u=Object(n.a)(l,2),d=u[0],m=u[1],p=Object(i.useState)(0),h=Object(n.a)(p,2),f=h[0],g=h[1],b={openAt:function(e){g(e),m(!0)},close:function(){return m(!1)},isOpen:d,goToPreviousSlide:function(){return g(f-1)},goToNextSlide:function(){return g(f+1)},handleChangeIndex:function(e){return g(e)},slides:a,slidesCount:s,currentSlideNumber:Object(c.a)(f,s)+1,previousSlideNumber:Object(c.a)(f-1,s)+1,nextSlideNumber:Object(c.a)(f+1,s)+1,slideIndex:f};return r.a.createElement(o.Provider,{value:b},t)},l=function(){return Object(i.useContext)(o)}},,,,,function(e,t,a){"use strict";var n=a(60);a.d(t,"CarouselWithModal",(function(){return n.a}));var i=a(59);a.o(i,"Carousel")&&a.d(t,"Carousel",(function(){return i.Carousel})),a.o(i,"CarouselContextProvider")&&a.d(t,"CarouselContextProvider",(function(){return i.CarouselContextProvider})),a.o(i,"ImageWithPlaceholder")&&a.d(t,"ImageWithPlaceholder",(function(){return i.ImageWithPlaceholder})),a.o(i,"useCarouselContext")&&a.d(t,"useCarouselContext",(function(){return i.useCarouselContext}));var r=a(34);a.d(t,"Carousel",(function(){return r.a}));var c=a(11);a.d(t,"CarouselContextProvider",(function(){return c.a})),a.d(t,"useCarouselContext",(function(){return c.b}));var o=a(35);a.d(t,"ImageWithPlaceholder",(function(){return o.a}))},,,,,,,function(e,t,a){"use strict";function n(e,t){return(e%t+t)%t}a.d(t,"a",(function(){return n}))},,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return W}));var n=a(0),i=a.n(n),r=a(167),c=a(36),o=a(11),s=a(35),l=Object(r.a)((function(e){return{slide:{display:"flex",cursor:"zoom-out"},imgContainer:{margin:"0 auto",overflow:"hidden"},img:Object(c.a)({width:"100%",height:"auto",maxWidth:"100vw",maxHeight:"calc(100vh - 10rem)",objectFit:"scale-down",lineHeight:0},e.breakpoints.up("md"),{maxWidth:"calc(100vw - ".concat(e.spacing(4),"px)")})}}));function u(e){var t=e.alt,a=e.src,n=e.srcWebp,r=e.width,c=e.height,u=l(),d=Object(o.b)().close;return i.a.createElement("div",{className:u.slide,onClick:d},i.a.createElement(s.a,{src:a,srcWebp:n,width:r,height:c,alt:t,className:u.imgContainer,imgClassName:u.img}))}var d=a(65),m=a(169),p=a(177),h=a(170),f=a(66),g=a.n(f),b=a(67),v=a.n(b),x=Object(r.a)((function(e){return{arrowsContainer:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"none"},arrow:{pointerEvents:"all",marginLeft:e.spacing(1),marginRight:e.spacing(1)},srOnly:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",border:0}}}));function w(e){var t=e.goToPreviousSlide,a=e.goToNextSlide,n=e.translations,r=x(),c=Object(d.a)();return Object(m.a)(c.breakpoints.down("xs"))?null:i.a.createElement("div",{className:r.arrowsContainer},i.a.createElement(p.a,{in:!0},i.a.createElement(h.a,{className:r.arrow,onClick:t},i.a.createElement("span",{className:r.srOnly},n.previousButton),i.a.createElement(g.a,{"aria-hidden":!0}))),i.a.createElement(p.a,{in:!0},i.a.createElement(h.a,{className:r.arrow,onClick:a},i.a.createElement("span",{className:r.srOnly},n.nextButton),i.a.createElement(v.a,{"aria-hidden":!0}))))}var C=a(23),j=a(49),E=a(68),O=a.n(E),N=Object(j.bindKeyboard)(Object(j.virtualize)(O.a));function y(e,t){return function(a){var n=a.index,r=a.key,c=Object(C.a)(n,e.length),o=e[c];return i.a.createElement(t,Object.assign({key:r},o))}}var I=Object(r.a)((function(){return{slide:{alignSelf:"center"}}}));function P(e){var t=e.viewProps,a=e.ViewComponent,n=e.handleChangeIndex,r=e.currentIndex,c=t.length>1,o=I();return c?i.a.createElement(N,{onChangeIndex:n,index:r,slideRenderer:y(t,a),overscanSlideAfter:1,overscanSlideBefore:0,slideClassName:o.slide}):i.a.createElement(a,t[0])}var S=Object(r.a)({carouselContainer:{position:"relative",lineHeight:0}});function W(e){var t=e.getTranslations,a=S().carouselContainer,n=Object(o.b)(),r=n.slidesCount,c=n.slides,s=n.goToPreviousSlide,l=n.goToNextSlide,d=n.handleChangeIndex,m=n.currentSlideNumber,p=n.previousSlideNumber,h=n.nextSlideNumber,f=n.slideIndex,g=t(m,h,p,r),b=r>1;return i.a.createElement("div",{className:a},i.a.createElement(P,{handleChangeIndex:d,currentIndex:f,ViewComponent:u,viewProps:c}),b&&i.a.createElement(w,{goToPreviousSlide:s,goToNextSlide:l,translations:g}))}},function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(28),i=a(0),r=a.n(i),c=a(167),o=Object(c.a)((function(){return{img:{background:"black",opacity:.125}}}));function s(e,t){return'\n  <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 '.concat(e," ").concat(t,'"\n      height="').concat(t,'"\n      width="').concat(e,'"\n    >\n      <path d="" />\n    </svg>')}var l=function(e){var t,a=e.height,n=e.width,i=e.className,c=o();return r.a.createElement("img",{className:"".concat(i," ").concat(c.img),width:n,height:a,alt:"",src:(t=s(n,a),"data:image/svg+xml;base64,".concat(btoa(t)))})},u=Object(c.a)({root:{lineHeight:0,display:"inline-block",position:"relative"},picture:{display:"inline-block",transition:"opacity 250ms",lineHeight:1},pictureVisible:{opacity:1},pictureHidden:{opacity:0,position:"absolute",clip:"rect(0, 0, 0, 0)"}});function d(e){var t=e.src,a=e.srcWebp,c=e.alt,o=e.width,s=e.height,d=e.className,m=e.imgClassName,p=Object(i.useState)(!1),h=Object(n.a)(p,2),f=h[0],g=h[1],b=u(),v=f?b.pictureVisible:b.pictureHidden,x=!f;return r.a.createElement("div",{className:"".concat(b.root," ").concat(d)},x&&r.a.createElement(l,{className:m,width:o,height:s,alt:c}),r.a.createElement("picture",{className:"".concat(v," ").concat(b.picture),onLoad:function(){g(!0)}},r.a.createElement("source",{type:"image/webp",srcSet:a}),r.a.createElement("img",{className:m,title:c,src:t,width:o,height:s,alt:c})))}},,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(0),i=a.n(n),r=a(36),c=a(167),o=a(176),s=a(177),l=a(11),u=Object(c.a)((function(e){return{modalRoot:{"& > *:focus":{outline:"none"}},modalContent:Object(r.a)({position:"relative",height:"100%"},e.breakpoints.up("md"),{marginLeft:e.spacing(2),marginRight:e.spacing(2)})}}));function d(e){var t=e.children,a=e.isInitiallyOpen,n=u(),r=Object(l.b)(),c=r.isOpen,d=r.close,m=a||c;return i.a.createElement(o.a,{"aria-labelledby":"modal-title",open:m,onClose:d,TransitionComponent:s.a,fullWidth:!0,maxWidth:"md",fullScreen:!0,scroll:"body",className:n.modalRoot},i.a.createElement("div",{className:n.modalContent},t))}var m=a(171),p=a(69),h=a.n(p),f=a(34),g=Object(c.a)({carouselRoot:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},carouselHeader:{display:"flex",justifyContent:"space-between"},carouselTitle:{margin:"1rem"},carouselCloseButton:{margin:"0.5rem"},carouselStatus:{textAlign:"end",margin:"1rem"}});function b(e){var t=e.title,a=e.getTranslations,n=g(),r=n.carouselCloseButton,c=n.carouselHeader,o=n.carouselTitle,s=n.carouselRoot,u=n.carouselStatus,d=Object(l.b)(),p=d.close,b=d.slidesCount,v=d.currentSlideNumber,x=d.previousSlideNumber,w=a(v,d.nextSlideNumber,x,b),C=b>1;return i.a.createElement("div",{className:s},i.a.createElement("div",{className:c},i.a.createElement("h2",{className:o},t),i.a.createElement(m.a,{className:r,onClick:p},i.a.createElement(h.a,null))),i.a.createElement(f.a,{getTranslations:a}),i.a.createElement("div",{"aria-live":"polite",role:"status","aria-atomic":"true",className:u},C&&w.status))}function v(e){return i.a.createElement(d,{isInitiallyOpen:e.isInitiallyOpen},i.a.createElement(b,e))}},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/1.43e4c49e.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.f7d19951.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.dc8a3344.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.e2df36ff.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.0b400027.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.32cfee3f.jpg"},function(e,t,a){e.exports=a.p+"static/media/7.35128041.jpg"},function(e,t,a){e.exports=a.p+"static/media/8.67a0cb42.jpg"},function(e,t,a){e.exports=a.p+"static/media/9.d09e100b.jpg"},function(e,t,a){e.exports=a.p+"static/media/10.61757b73.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.67ed8971.webp"},function(e,t,a){e.exports=a.p+"static/media/2.b88dec3c.webp"},function(e,t,a){e.exports=a.p+"static/media/3.a2d9f431.webp"},function(e,t,a){e.exports=a.p+"static/media/4.a9865d27.webp"},function(e,t,a){e.exports=a.p+"static/media/5.85a97d37.webp"},function(e,t,a){e.exports=a.p+"static/media/6.63f3c704.webp"},function(e,t,a){e.exports=a.p+"static/media/7.b55b2074.webp"},function(e,t,a){e.exports=a.p+"static/media/8.fa188ed5.webp"},function(e,t,a){e.exports=a.p+"static/media/9.175bc0d7.webp"},function(e,t,a){e.exports=a.p+"static/media/10.0191b0ab.webp"},function(e,t,a){e.exports=a.p+"static/media/1_small.be2f2418.jpg"},function(e,t,a){e.exports=a.p+"static/media/2_small.a73f1ef2.jpg"},function(e,t,a){e.exports=a.p+"static/media/3_small.4f138faf.jpg"},function(e,t,a){e.exports=a.p+"static/media/4_small.c8175740.jpg"},function(e,t,a){e.exports=a.p+"static/media/5_small.1856f0ce.jpg"},function(e,t,a){e.exports=a.p+"static/media/6_small.a7359d23.jpg"},function(e,t,a){e.exports=a.p+"static/media/7_small.ba4c7099.jpg"},function(e,t,a){e.exports=a.p+"static/media/8_small.d730c075.jpg"},function(e,t,a){e.exports=a.p+"static/media/9_small.4bd2bb57.jpg"},function(e,t,a){e.exports=a.p+"static/media/10_small.b2f2c7a8.jpg"},,,,,,,function(e,t,a){e.exports=a(149)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),o=a(100),s=a(173),l=a(174),u=a(175),d=a(16),m=a(167),p=a(65),h=a(169),f=a(172),g=a(178),b=a(70),v=a.n(b),x=a(71),w=a.n(x),C=a(72),j=a.n(C),E=a(73),O=a.n(E),N=a(74),y=a.n(N),I=a(75),P=a.n(I),S=a(76),W=a.n(S),k=a(77),T=a.n(k),_=a(78),B=a.n(_),H=a(79),R=a.n(H),G=a(80),M=a.n(G),A=a(81),V=a.n(A),z=a(82),D=a.n(z),L=a(83),J=a.n(L),F=a(84),K=a.n(F),q=a(85),Q=a.n(q),U=a(86),X=a.n(U),Y=a(87),Z=a.n(Y),$=a(88),ee=a.n($),te=a(89),ae=a.n(te),ne=a(90),ie=a.n(ne),re=a(91),ce=a.n(re),oe=a(92),se=a.n(oe),le=a(93),ue=a.n(le),de=a(94),me=a.n(de),pe=a(95),he=a.n(pe),fe=a(96),ge=a.n(fe),be=a(97),ve=a.n(be),xe=a(98),we=a.n(xe),Ce=a(99),je=a.n(Ce),Ee=[{src:v.a,srcWebp:M.a,srcPreview:ie.a,alt:"Image 1",width:3840,height:2243},{src:w.a,srcWebp:V.a,srcPreview:ce.a,alt:"Image 2",width:3866,height:2426},{src:j.a,srcWebp:D.a,srcPreview:se.a,alt:"Image 3",width:3953,height:2965},{src:O.a,srcWebp:J.a,srcPreview:ue.a,alt:"Image 4",width:4098,height:2732},{src:y.a,srcWebp:K.a,srcPreview:me.a,alt:"Image 5",width:4124,height:2600},{src:P.a,srcWebp:Q.a,srcPreview:he.a,alt:"Image 6",width:4242,height:2154},{src:W.a,srcWebp:X.a,srcPreview:ge.a,alt:"Image 7",width:4940,height:3280},{src:T.a,srcWebp:Z.a,srcPreview:ve.a,alt:"Image 8",width:5042,height:3445},{src:B.a,srcWebp:ee.a,srcPreview:we.a,alt:"Image 9",width:5163,height:3442},{src:R.a,srcWebp:ae.a,srcPreview:je.a,alt:"Image 10",width:5464,height:3070}];function Oe(e,t,a,n){return{nextButton:"Go to slide ".concat(t),previousButton:"Go to slide ".concat(a),status:"".concat(e," over ").concat(n)}}var Ne=Object(m.a)({img:{width:"100%",height:"auto",cursor:"zoom-in"}});function ye(e){var t=e.src,a=e.srcPreview,n=e.alt,r=e.index,c=e.width,o=e.height,s=Ne(),l=Object(d.useCarouselContext)().openAt;return i.a.createElement("a",{href:t,onClick:function(e){e.preventDefault(),l(r)}},i.a.createElement(d.ImageWithPlaceholder,{src:a,alt:n,width:c,height:o,imgClassName:s.img}))}function Ie(e){var t=e.slides,a=e.title,n=Object(p.a)(),r=Object(h.a)(n.breakpoints.down("xs"));return i.a.createElement(d.CarouselContextProvider,{slides:t},i.a.createElement("h2",null,a),i.a.createElement(f.a,{cols:r?1:3},t.map((function(e,t){return i.a.createElement(g.a,{key:t},i.a.createElement(ye,Object.assign({index:t},e)))}))),i.a.createElement(d.CarouselWithModal,{getTranslations:Oe,title:a}))}var Pe=function(){return function(){if("undefined"===typeof window||"function"!==typeof window.matchMedia)return!1;var e=window.matchMedia("(prefers-color-scheme: dark)");return!(!e||"undefined"===typeof e.matches)&&e.matches}()},Se=Object(o.a)({palette:{type:"light"}}),We=Object(o.a)({palette:{type:"dark"}}),ke=function(){var e=Pe();return(i.a.createElement(s.a,{theme:e?We:Se},i.a.createElement(l.a,null),i.a.createElement(u.a,null,i.a.createElement("h1",null,"Galleries with Carousel in a modal"),i.a.createElement("p",null,"Click on one if the image below to open the carousel."),i.a.createElement(Ie,{slides:Ee,title:"My Gallery"}),i.a.createElement(Ie,{slides:[Ee[8]],title:"Gallery with one image"}),i.a.createElement("h2",null,"Gallery with no title"),i.a.createElement(Ie,{slides:[Ee[7]]}),i.a.createElement("h1",null,"Carousel in the page"),i.a.createElement(d.CarouselContextProvider,{slides:Ee},i.a.createElement(d.Carousel,{getTranslations:Oe})))))};c.a.render(i.a.createElement(ke,null),document.getElementById("root"))}],[[106,1,2]]]);
//# sourceMappingURL=main.97bec193.chunk.js.map