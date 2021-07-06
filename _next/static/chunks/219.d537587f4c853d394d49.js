(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{4219:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return De}});var n,r=i(5893),s=i(7294),c=i(9277),o=i(3457),a=i(5834),l=i(3832),u=i(6265);function d(e,t){return(e%t+t)%t}function p(){return n||(n=(0,s.createContext)({}))}function h(e){var t=e.children,i=e.slides,n=e.translationsFactory,c=(null===i||void 0===i?void 0:i.length)||0,o=(0,s.useState)(!1),a=o[0],l=o[1],u=(0,s.useState)(0),h=u[0],f=u[1],x=d(h,c)+1,m=d(h-1,c)+1,g=n(x,d(h+1,c)+1,m,c),j={openAt:function(e){f(e),l(!0)},close:function(){return l(!1)},isOpen:a,goToPreviousSlide:function(){return f(h-1)},goToNextSlide:function(){return f(h+1)},handleChangeIndex:function(e){return f(e)},slides:i,slidesCount:c,slideIndex:h,translations:g},b=(0,s.useMemo)(p,[]);return(0,r.jsx)(b.Provider,{value:j,children:t})}function f(){return(0,s.useContext)(p())}var x=i(1120),m=i(6256),g=i(5477),j=(0,x.Z)((function(e){return{spinner:{color:e.palette.grey[300]}}}));function b(){var e=j(),t=(0,s.useState)(!1),i=t[0],n=t[1];return(0,s.useEffect)((function(){var e=setTimeout((function(){n(!0)}),1e3);return function(){clearTimeout(e)}}),[]),(0,r.jsx)(m.Z,{in:i,children:(0,r.jsx)(g.Z,{"data-testid":i?"spinner":"",className:e.spinner,size:24})})}var w=(0,x.Z)((function(){return{root:{position:"relative"},spinner:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}}));function v(e,t){return'\n  <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 '.concat(e," ").concat(t,'"\n      height="').concat(t,'"\n      width="').concat(e,'"\n    >\n      <path d="" />\n    </svg>')}function y(e){var t,i=e.height,n=e.width,s=e.className,c=void 0===s?"":s,o=w();return(0,r.jsxs)("div",{className:o.root,children:[(0,r.jsx)("div",{className:o.spinner,children:(0,r.jsx)(b,{})}),(0,r.jsx)("img",{className:c,width:n,height:i,alt:"",src:(t=v(n,i),"data:image/svg+xml;base64,".concat(btoa(t)))})]})}var O=(0,x.Z)({root:{lineHeight:0,display:"inline-block",position:"relative"},picture:{display:"inline-block",transition:"opacity 250ms",lineHeight:1},pictureVisible:{opacity:1},pictureHidden:{opacity:0,position:"absolute",clip:"rect(0, 0, 0, 0)"}});function C(e){var t=e.src,i=e.srcWebp,n=e.alt,c=e.width,o=e.height,a=e.className,l=void 0===a?"":a,u=e.imgClassName,d=(0,s.useState)(!1),p=d[0],h=d[1],f=O(),x=p?f.pictureVisible:f.pictureHidden,m=!p;return(0,r.jsxs)("div",{className:"".concat(f.root," ").concat(l),children:[m&&(0,r.jsx)(y,{className:u,width:c,height:o,alt:n}),(0,r.jsxs)("picture",{className:"".concat(x," ").concat(f.picture),onLoad:function(){h(!0)},children:[(0,r.jsx)("source",{type:"image/webp",srcSet:i}),(0,r.jsx)("img",{className:u,title:n,src:t,width:c,height:o,alt:n})]})]})}var P=i(5719),_=(0,x.Z)((function(){return{modalRoot:{"& > *:focus":{outline:"none"}},modalContent:{position:"relative",height:"100%"}}}));function Z(e){var t=e.children,i=e.isInitiallyOpen,n=_(),s=f(),c=s.isOpen,o=s.close,a=i||c;return(0,r.jsx)(P.Z,{"aria-labelledby":"carousel-modal-title",open:a,onClose:o,TransitionComponent:m.Z,fullWidth:!0,maxWidth:"md",fullScreen:!0,scroll:"body",className:n.modalRoot,children:(0,r.jsx)("div",{className:n.modalContent,children:t})})}var N=i(4578),S=i(366),k=(0,x.Z)((function(e){return{slide:{display:"flex",cursor:"zoom-out"},imgContainer:{margin:"0 auto",overflow:"hidden"},img:(0,u.Z)({width:"100%",height:"auto",maxWidth:"100vw",maxHeight:"calc(100vh - 10rem)",objectFit:"scale-down",lineHeight:0},e.breakpoints.up("md"),{maxWidth:"calc(100vw - ".concat(e.spacing(4),"px)")})}}));function I(e){var t=e.alt,i=e.src,n=e.srcWebp,s=e.width,c=e.height,o=k(),a=f().close;return(0,r.jsx)("div",{className:o.slide,onClick:a,children:(0,r.jsx)(C,{src:i,srcWebp:n,width:s,height:c,alt:t,className:o.imgContainer,imgClassName:o.img})})}var W=i(9693),D=i(8920),T=i(1437),E=i(9826),H=i(9973),B=(0,x.Z)((function(e){return{arrowsContainer:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"none"},arrow:{pointerEvents:"all",marginLeft:e.spacing(2),marginRight:e.spacing(2),color:"white",backgroundColor:(0,W.U1)("#000000",.6),"&:hover":{backgroundColor:(0,W.U1)("#000000",.8)}}}}));function R(e){return function(t){t.stopPropagation(),e(t)}}function G(e){var t=e.goToPreviousSlide,i=e.goToNextSlide,n=B(),s=(0,D.Z)(),c=(0,T.Z)(s.breakpoints.down("xs")),o=f().translations;return c?null:(0,r.jsxs)("div",{className:n.arrowsContainer,children:[(0,r.jsx)(m.Z,{in:!0,children:(0,r.jsx)(N.Z,{className:n.arrow,onClick:R(t),title:o.previousButton,children:(0,r.jsx)(E.Z,{"aria-hidden":!0})})}),(0,r.jsx)(m.Z,{in:!0,children:(0,r.jsx)(N.Z,{className:n.arrow,onClick:R(i),title:o.nextButton,children:(0,r.jsx)(H.Z,{"aria-hidden":!0})})})]})}var M=i(2850),z=i(7314);function A(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function F(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?A(Object(i),!0).forEach((function(t){(0,u.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):A(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function V(e,t){return function(i){var n=i.index,s=i.key,c=d(n,e.length),o=e[c];return(0,r.jsx)(t,F({},o),s)}}var L=(0,x.Z)((function(){return{slide:{alignSelf:"center"}}}));function U(e){var t=e.viewProps,i=e.ViewComponent,n=e.handleChangeIndex,c=e.currentIndex,o=t.length>1,a=L(),l=(0,s.useMemo)((function(){return(0,M.yP)((0,M.p6)(z.ZP))}),[]);return o?(0,r.jsx)(l,{onChangeIndex:n,index:c,slideRenderer:V(t,i),overscanSlideAfter:3,overscanSlideBefore:3,slideClassName:a.slide}):(0,r.jsx)(i,F({},t[0]))}var q=(0,x.Z)({carouselContainer:{position:"relative",lineHeight:0}});function J(){var e=q().carouselContainer,t=f(),i=t.slidesCount,n=t.slides,s=t.goToPreviousSlide,c=t.goToNextSlide,o=t.handleChangeIndex,a=t.slideIndex,l=i>1;return(0,r.jsxs)("div",{className:e,children:[(0,r.jsx)(U,{handleChangeIndex:o,currentIndex:a,ViewComponent:I,viewProps:n}),l&&(0,r.jsx)(G,{goToPreviousSlide:s,goToNextSlide:c})]})}var K=(0,x.Z)((function(e){return{carouselRoot:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",cursor:"zoom-out",backgroundColor:"black",color:"white"},carouselHeader:{display:"flex",justifyContent:"space-between"},carouselTitle:{margin:e.spacing(2)},carouselCloseButton:{margin:e.spacing(2),color:"white"},carouselStatus:{textAlign:"end",margin:e.spacing(2)}}}));function Q(e){var t=e.title,i=K(),n=i.carouselCloseButton,s=i.carouselHeader,c=i.carouselTitle,o=i.carouselRoot,a=i.carouselStatus,l=f(),u=l.close,d=l.slidesCount,p=l.translations,h=d>1;return(0,r.jsxs)("div",{className:o,onClick:u,children:[(0,r.jsxs)("div",{className:s,children:[(0,r.jsx)("h2",{id:"carousel-modal-title",className:c,children:t}),(0,r.jsx)(N.Z,{className:n,onClick:u,disableRipple:!0,title:p.close,children:(0,r.jsx)(S.Z,{})})]}),(0,r.jsx)(J,{}),(0,r.jsx)("div",{"aria-live":"polite",role:"status","aria-atomic":"true",className:a,children:h&&p.status})]})}function X(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function Y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?X(Object(i),!0).forEach((function(t){(0,u.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):X(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function $(e){return(0,r.jsx)(Z,{isInitiallyOpen:e.isInitiallyOpen,children:(0,r.jsx)(Q,Y({},e))})}var ee=i(7193),te=i(5332),ie=i(3740),ne=i(2681),re=i(3623),se=i(3874),ce=i(7374),oe=i(1091),ae=i(2425),le=i(7234),ue=i(7218),de=i(1140),pe=i(9212),he=i(8871),fe=i(5986),xe=i(3458),me=i(5364),ge=i(2676),je=i(8815),be=i(2838),we=i(2412),ve=i(5560),ye=[{src:ie,srcWebp:pe,srcPreview:i(769),alt:"Image 1",width:3840,height:2243},{src:ne,srcWebp:he,srcPreview:i(2783),alt:"Image 2",width:3866,height:2426},{src:re,srcWebp:fe,srcPreview:i(9800),alt:"Image 3",width:3953,height:2965},{src:se,srcWebp:xe,srcPreview:i(9678),alt:"Image 4",width:4098,height:2732},{src:ce,srcWebp:me,srcPreview:i(6246),alt:"Image 5",width:4124,height:2600},{src:oe,srcWebp:ge,srcPreview:i(1818),alt:"Image 6",width:4242,height:2154},{src:ae,srcWebp:je,srcPreview:i(9805),alt:"Image 7",width:4940,height:3280},{src:le,srcWebp:be,srcPreview:i(8418),alt:"Image 8",width:5042,height:3445},{src:ue,srcWebp:we,srcPreview:i(7028),alt:"Image 9",width:5163,height:3442},{src:de,srcWebp:ve,srcPreview:i(4501),alt:"Image 10",width:5464,height:3070}];function Oe(e,t,i,n){return{nextButton:"Go to slide ".concat(t),previousButton:"Go to slide ".concat(i),status:"".concat(e," over ").concat(n),close:"Close (ESC)"}}function Ce(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function Pe(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(i),!0).forEach((function(t){(0,u.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Ce(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var _e=(0,x.Z)({img:{width:"100%",height:"auto",cursor:"zoom-in"}});function Ze(e){var t=e.src,i=e.srcPreview,n=e.alt,s=e.index,c=e.width,o=e.height,a=_e(),l=f().openAt;return(0,r.jsx)("a",{href:t,onClick:function(e){e.preventDefault(),l(s)},children:(0,r.jsx)(C,{src:i,alt:n,width:c,height:o,imgClassName:a.img})})}function Ne(e){var t=e.slides,i=e.title,n=(0,D.Z)(),s=(0,T.Z)(n.breakpoints.down("xs"));return(0,r.jsxs)(h,{slides:t,translationsFactory:Oe,children:[(0,r.jsx)("h2",{children:i}),(0,r.jsx)(ee.Z,{cols:s?1:3,children:t.map((function(e,t){return(0,r.jsx)(te.Z,{children:(0,r.jsx)(Ze,Pe({index:t},e))},t)}))}),(0,r.jsx)($,{title:i})]})}var Se=function(){return function(){if("function"!==typeof window.matchMedia)return!1;var e=window.matchMedia("(prefers-color-scheme: dark)");return!(!e||"undefined"===typeof e.matches)&&e.matches}()},ke=(0,c.Z)({palette:{type:"light"}}),Ie=(0,c.Z)({palette:{type:"dark"}}),We=function(){var e=Se();return(0,r.jsxs)(o.Z,{theme:e?Ie:ke,children:[(0,r.jsx)(a.ZP,{}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("h1",{children:"Galleries with Carousel in a modal"}),(0,r.jsx)("p",{children:"Click on one if the image below to open the carousel."}),(0,r.jsx)(Ne,{slides:ye,title:"My Gallery"}),(0,r.jsx)(Ne,{slides:[ye[8]],title:"Gallery with one image"}),(0,r.jsx)("h2",{children:"Gallery with no title"}),(0,r.jsx)(Ne,{slides:[ye[7]]}),(0,r.jsx)("h1",{children:"Carousel in the page"}),(0,r.jsx)(h,{slides:ye,translationsFactory:Oe,children:(0,r.jsx)(J,{})})]})]})};function De(){return(0,r.jsx)(s.StrictMode,{children:(0,r.jsx)(We,{})})}},3740:function(e){"use strict";e.exports="/_next/static/media/1.6f9e9770..jpg"},9212:function(e){"use strict";e.exports="/_next/static/media/1.efda78eb..webp"},1140:function(e){"use strict";e.exports="/_next/static/media/10.014110e5..jpg"},5560:function(e){"use strict";e.exports="/_next/static/media/10.225a4407..webp"},4501:function(e){"use strict";e.exports="/_next/static/media/10_small.0327f570..jpg"},769:function(e){"use strict";e.exports="/_next/static/media/1_small.d377b194..jpg"},2681:function(e){"use strict";e.exports="/_next/static/media/2.e5ac8316..jpg"},8871:function(e){"use strict";e.exports="/_next/static/media/2.261211fd..webp"},2783:function(e){"use strict";e.exports="/_next/static/media/2_small.c5e57285..jpg"},3623:function(e){"use strict";e.exports="/_next/static/media/3.6d992425..jpg"},5986:function(e){"use strict";e.exports="/_next/static/media/3.c9bb7db1..webp"},9800:function(e){"use strict";e.exports="/_next/static/media/3_small.0f76e916..jpg"},3874:function(e){"use strict";e.exports="/_next/static/media/4.9553086a..jpg"},3458:function(e){"use strict";e.exports="/_next/static/media/4.74338f5f..webp"},9678:function(e){"use strict";e.exports="/_next/static/media/4_small.0c8baf9e..jpg"},7374:function(e){"use strict";e.exports="/_next/static/media/5.47993239..jpg"},5364:function(e){"use strict";e.exports="/_next/static/media/5.829fde31..webp"},6246:function(e){"use strict";e.exports="/_next/static/media/5_small.aaa7bff0..jpg"},1091:function(e){"use strict";e.exports="/_next/static/media/6.561ec6a1..jpg"},2676:function(e){"use strict";e.exports="/_next/static/media/6.2333ab7e..webp"},1818:function(e){"use strict";e.exports="/_next/static/media/6_small.a8c7037b..jpg"},2425:function(e){"use strict";e.exports="/_next/static/media/7.89ad6f01..jpg"},8815:function(e){"use strict";e.exports="/_next/static/media/7.1bb25b04..webp"},9805:function(e){"use strict";e.exports="/_next/static/media/7_small.20b7aafd..jpg"},7234:function(e){"use strict";e.exports="/_next/static/media/8.a08b2b6c..jpg"},2838:function(e){"use strict";e.exports="/_next/static/media/8.89bfc2f3..webp"},8418:function(e){"use strict";e.exports="/_next/static/media/8_small.07d2a4c0..jpg"},7218:function(e){"use strict";e.exports="/_next/static/media/9.71a674c6..jpg"},2412:function(e){"use strict";e.exports="/_next/static/media/9.6406b2f3..webp"},7028:function(e){"use strict";e.exports="/_next/static/media/9_small.e870c687..jpg"}}]);