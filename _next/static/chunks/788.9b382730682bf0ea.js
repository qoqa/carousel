"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[788],{788:function(A,e,a){a.r(e),a.d(e,{default:function(){return EA}});var t,i=a(5893),s=a(7294),g=a(6599),o=a(3457),n=a(5834),r=a(3832);function c(A,e){return(A%e+e)%e}function l(){return t||(t=(0,s.createContext)({}))}function Q(A){var e=A.children,a=A.slides,t=A.translationsFactory,g=(null===a||void 0===a?void 0:a.length)||0,o=(0,s.useState)(!1),n=o[0],r=o[1],Q=(0,s.useState)(0),E=Q[0],C=Q[1],h=c(E,g)+1,B=c(E-1,g)+1,u=t(h,c(E+1,g)+1,B,g),I={openAt:function(A){C(A),r(!0)},close:function(){return r(!1)},isOpen:n,goToPreviousSlide:function(){return C(E-1)},goToNextSlide:function(){return C(E+1)},handleChangeIndex:function(A){return C(A)},slides:a,slidesCount:g,slideIndex:E,translations:u},w=(0,s.useMemo)(l,[]);return(0,i.jsx)(w.Provider,{value:I,children:e})}function E(){return(0,s.useContext)(l())}var C=a(1120),h=a(7253),B=a(5477),u=(0,C.Z)((function(A){return{spinner:{color:A.palette.grey[300]}}}));function I(){var A=u(),e=(0,s.useState)(!1),a=e[0],t=e[1];return(0,s.useEffect)((function(){var A=setTimeout((function(){t(!0)}),1e3);return function(){clearTimeout(A)}}),[]),(0,i.jsx)(h.Z,{in:a,children:(0,i.jsx)(B.Z,{"data-testid":a?"spinner":"",className:A.spinner,size:24})})}var w=(0,C.Z)((function(){return{root:{position:"relative"},spinner:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}}));function d(A,e){return'\n  <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 '.concat(A," ").concat(e,'"\n      height="').concat(e,'"\n      width="').concat(A,'"\n    >\n      <path d="" />\n    </svg>')}function D(A){var e,a=A.height,t=A.width,s=A.className,g=void 0===s?"":s,o=w();return(0,i.jsxs)("div",{className:o.root,children:[(0,i.jsx)("div",{className:o.spinner,children:(0,i.jsx)(I,{})}),(0,i.jsx)("img",{className:g,width:t,height:a,alt:"",src:(e=d(t,a),"data:image/svg+xml;base64,".concat(btoa(e)))})]})}var x=(0,C.Z)({root:{lineHeight:0,display:"inline-block",position:"relative"},picture:{display:"inline-block",transition:"opacity 250ms",lineHeight:1},pictureVisible:{opacity:1},pictureHidden:{opacity:0,position:"absolute",clip:"rect(0, 0, 0, 0)"}});function p(A){var e=A.src,a=A.srcWebp,t=A.alt,g=A.width,o=A.height,n=A.className,r=void 0===n?"":n,c=A.imgClassName,l=(0,s.useState)(!1),Q=l[0],E=l[1],C=x(),h=Q?C.pictureVisible:C.pictureHidden,B=!Q;return(0,i.jsxs)("div",{className:"".concat(C.root," ").concat(r),children:[B&&(0,i.jsx)(D,{className:c,width:g,height:o,alt:t}),(0,i.jsxs)("picture",{className:"".concat(h," ").concat(C.picture),onLoad:function(){E(!0)},children:[(0,i.jsx)("source",{type:"image/webp",srcSet:a}),(0,i.jsx)("img",{className:c,title:t,src:e,width:g,height:o,alt:t})]})]})}var P=a(1316),b=(0,C.Z)((function(){return{modalRoot:{"& > *:focus":{outline:"none"}},modalContent:{position:"relative",height:"100%"}}}));function m(A){var e=A.children,a=A.isInitiallyOpen,t=b(),s=E(),g=s.isOpen,o=s.close,n=a||g;return(0,i.jsx)(P.Z,{"aria-labelledby":"carousel-modal-title",open:n,onClose:o,TransitionComponent:h.Z,fullWidth:!0,maxWidth:"md",fullScreen:!0,scroll:"body",className:t.modalRoot,children:(0,i.jsx)("div",{className:t.modalContent,children:e})})}var j=a(8761),U=a(366);var M=(0,C.Z)((function(A){return{slide:{display:"flex",cursor:"zoom-out"},imgContainer:{margin:"0 auto",overflow:"hidden"},img:(e={width:"100%",height:"auto",maxWidth:"100vw",maxHeight:"calc(100vh - 10rem)",objectFit:"scale-down",lineHeight:0},a=A.breakpoints.up("md"),t={maxWidth:"calc(100vw - ".concat(A.spacing(4),"px)")},a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e)};var e,a,t}));function f(A){var e=A.alt,a=A.src,t=A.srcWebp,s=A.width,g=A.height,o=M(),n=E().close;return(0,i.jsx)("div",{className:o.slide,onClick:n,children:(0,i.jsx)(p,{src:a,srcWebp:t,width:s,height:g,alt:e,className:o.imgContainer,imgClassName:o.img})})}var F=a(9693),R=a(8920),S=a(1437),k=a(9826),T=a(9973),G=(0,C.Z)((function(A){return{arrowsContainer:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"none"},arrow:{pointerEvents:"all",marginLeft:A.spacing(2),marginRight:A.spacing(2),color:"white",backgroundColor:(0,F.Fq)("#000000",.6),"&:hover":{backgroundColor:(0,F.Fq)("#000000",.8)}}}}));function v(A){return function(e){e.stopPropagation(),A(e)}}function K(A){var e=A.goToPreviousSlide,a=A.goToNextSlide,t=G(),s=(0,R.Z)(),g=(0,S.Z)(s.breakpoints.down("xs")),o=E().translations;return g?null:(0,i.jsxs)("div",{className:t.arrowsContainer,children:[(0,i.jsx)(h.Z,{in:!0,children:(0,i.jsx)(j.Z,{className:t.arrow,onClick:v(e),title:o.previousButton,children:(0,i.jsx)(k.Z,{"aria-hidden":!0})})}),(0,i.jsx)(h.Z,{in:!0,children:(0,i.jsx)(j.Z,{className:t.arrow,onClick:v(a),title:o.nextButton,children:(0,i.jsx)(T.Z,{"aria-hidden":!0})})})]})}var y=a(2850),L=a(7314);function Y(A,e,a){return e in A?Object.defineProperty(A,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):A[e]=a,A}function J(A){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(A){return Object.getOwnPropertyDescriptor(a,A).enumerable})))),t.forEach((function(e){Y(A,e,a[e])}))}return A}function V(A,e){return function(a){var t=a.index,s=a.key,g=c(t,A.length),o=A[g];return(0,i.jsx)(e,J({},o),s)}}var Z=(0,C.Z)((function(){return{slide:{alignSelf:"center"}}}));function X(A){var e=A.viewProps,a=A.ViewComponent,t=A.handleChangeIndex,g=A.currentIndex,o=e.length>1,n=Z(),r=(0,s.useMemo)((function(){return(0,y.yP)((0,y.p6)(L.ZP))}),[]);return o?(0,i.jsx)(r,{onChangeIndex:t,index:g,slideRenderer:V(e,a),overscanSlideAfter:3,overscanSlideBefore:3,slideClassName:n.slide}):(0,i.jsx)(a,J({},e[0]))}var N=(0,C.Z)({carouselContainer:{position:"relative",lineHeight:0}});function W(){var A=N().carouselContainer,e=E(),a=e.slidesCount,t=e.slides,s=e.goToPreviousSlide,g=e.goToNextSlide,o=e.handleChangeIndex,n=e.slideIndex,r=a>1;return(0,i.jsxs)("div",{className:A,children:[(0,i.jsx)(X,{handleChangeIndex:o,currentIndex:n,ViewComponent:f,viewProps:t}),r&&(0,i.jsx)(K,{goToPreviousSlide:s,goToNextSlide:g})]})}var O=(0,C.Z)((function(A){return{carouselRoot:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",cursor:"zoom-out",backgroundColor:"black",color:"white"},carouselHeader:{display:"flex",justifyContent:"space-between"},carouselTitle:{margin:A.spacing(2)},carouselCloseButton:{margin:A.spacing(2),color:"white"},carouselStatus:{textAlign:"end",margin:A.spacing(2)}}}));function z(A){var e=A.title,a=O(),t=a.carouselCloseButton,s=a.carouselHeader,g=a.carouselTitle,o=a.carouselRoot,n=a.carouselStatus,r=E(),c=r.close,l=r.slidesCount,Q=r.translations,C=l>1;return(0,i.jsxs)("div",{className:o,onClick:c,children:[(0,i.jsxs)("div",{className:s,children:[(0,i.jsx)("h2",{id:"carousel-modal-title",className:g,children:e}),(0,i.jsx)(j.Z,{className:t,onClick:c,disableRipple:!0,title:Q.close,children:(0,i.jsx)(U.Z,{})})]}),(0,i.jsx)(W,{}),(0,i.jsx)("div",{"aria-live":"polite",role:"status","aria-atomic":"true",className:n,children:C&&Q.status})]})}function H(A,e,a){return e in A?Object.defineProperty(A,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):A[e]=a,A}function _(A){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(A){return Object.getOwnPropertyDescriptor(a,A).enumerable})))),t.forEach((function(e){H(A,e,a[e])}))}return A}function q(A){return(0,i.jsx)(m,{isInitiallyOpen:A.isInitiallyOpen,children:(0,i.jsx)(z,_({},A))})}var $=a(7193),AA=a(5332);function eA(A){return A.src}var aA=[{src:eA({src:"/carousel/_next/static/media/1.6f9e9770.jpg",height:2243,width:3840,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAI0QP//EABkQAAIDAQAAAAAAAAAAAAAAAAIDAAESIf/aAAgBAQABPwBrSHI32f/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AI//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="}),srcWebp:eA({src:"/carousel/_next/static/media/1.efda78eb.webp",height:2243,width:3840,blurDataURL:"data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoIAAUAAkA4JYwC7AEfaUICwAD+9J6ZMYiJC+YB04lRGKGuTAA="}),srcPreview:eA({src:"/carousel/_next/static/media/1_small.d377b194.jpg",height:336,width:576,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIgQP//EABgQAQADAQAAAAAAAAAAAAAAAAEAAgMh/9oACAEBAAE/ANNbAVez/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"}),alt:"Image 1",width:3840,height:2243},{src:eA({src:"/carousel/_next/static/media/2.e5ac8316.jpg",height:2426,width:3866,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAI4of//EABwQAAAGAwAAAAAAAAAAAAAAAAABAgMRFBITQf/aAAgBAQABPwC2jSpus3JnOXR//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="}),srcWebp:eA({src:"/carousel/_next/static/media/2.261211fd.webp",height:2426,width:3866,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAkA4JZQCdADbH0XAAP6HWd9Oxh+rRg8+s7E0N/7nVeE0jmJOSsRPbQJC+QAAAA=="}),srcPreview:eA({src:"/carousel/_next/static/media/2_small.c5e57285.jpg",height:364,width:580,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIwqf//EABwQAAEDBQAAAAAAAAAAAAAAAAECAxEABBIUQf/aAAgBAQABPwAXSCypvWbkmcu1/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="}),alt:"Image 2",width:3866,height:2426},{src:eA({src:"/carousel/_next/static/media/3.6d992425.jpg",height:2965,width:3953,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAJxN/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBAARBSGR/9oACAEBAAE/AORkq0ERRSrtOT3IU2PN5//EABoRAAICAwAAAAAAAAAAAAAAAAEDAAIRMVH/2gAIAQIBAT8AL3kVy2+uz//EABkRAQACAwAAAAAAAAAAAAAAAAECAwARkf/aAAgBAwEBPwBqrF1CPM//2Q=="}),srcWebp:eA({src:"/carousel/_next/static/media/3.c9bb7db1.webp",height:2965,width:3953,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAABQAgCdASoIAAYAAkA4JYgCdGuAwQADThqC2OAAzi0Ny57X6AQnf9Cgjfq3NG5U2ygRWngfJidR/InfWPkQvBxumuYFwLxW02Wg1agA"}),srcPreview:eA({src:"/carousel/_next/static/media/3_small.0f76e916.jpg",height:445,width:593,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAJhN/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBAARBSGR/9oACAEBAAE/AORlrUEUClXacnuQpsebz//EABoRAAICAwAAAAAAAAAAAAAAAAEDABECMVH/2gAIAQIBAT8AL3mrbnrs/8QAGREBAAIDAAAAAAAAAAAAAAAAAQIDABGR/9oACAEDAQE/AGqsXUI8z//Z"}),alt:"Image 3",width:3953,height:2965},{src:eA({src:"/carousel/_next/static/media/4.9553086a.jpg",height:2732,width:4098,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAJMVlf/EABoQAQABBQAAAAAAAAAAAAAAAAMRAAECEhT/2gAIAQEAAT8A5RFU0xib1//EABgRAQADAQAAAAAAAAAAAAAAAAEAAgNy/9oACAECAQE/AMgMqck//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACIf/aAAgBAwEBPwCoBhP/2Q=="}),srcWebp:eA({src:"/carousel/_next/static/media/4.74338f5f.webp",height:2732,width:4098,blurDataURL:"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAkA4JbACdAD0bD7gAP74nHtgx5p98lbR/mSrG87fQrz+6PQ2WYnb1RAA"}),srcPreview:eA({src:"/carousel/_next/static/media/4_small.0c8baf9e.jpg",height:410,width:615,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAJMVlf/EABoQAQABBQAAAAAAAAAAAAAAAAMRAAECEhT/2gAIAQEAAT8A5RFU0xib1//EABgRAQADAQAAAAAAAAAAAAAAAAEAAgNy/9oACAECAQE/AMgMqck//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACIf/aAAgBAwEBPwCoBhP/2Q=="}),alt:"Image 4",width:4098,height:2732},{src:eA({src:"/carousel/_next/static/media/5.47993239.jpg",height:2600,width:4124,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAAIIVD//EABsQAQABBQEAAAAAAAAAAAAAAAIFAAEDBGTR/9oACAEBAAE/ANmSh8oKELcJdK8r/8QAGxEAAQQDAAAAAAAAAAAAAAAAAQACAxMhImH/2gAIAQIBAT8AtkAG7s9X/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIS/9oACAEDAQE/AIU//9k="}),srcWebp:eA({src:"/carousel/_next/static/media/5.829fde31.webp",height:2600,width:4124,blurDataURL:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoIAAUAAkA4JbACdAEOZ/JwAAD+ps/3jVPD50/aboyi84/+SVkxn1Ji7j/OvnAthL37Zg7ueWToYI8KuxIrAAAA"}),srcPreview:eA({src:"/carousel/_next/static/media/5_small.aaa7bff0.jpg",height:390,width:619,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAAIEVD//EABsQAQABBQEAAAAAAAAAAAAAAAIFAAEDBGTR/9oACAEBAAE/ANmSh8oKELcJdK8r/8QAGxEAAQQDAAAAAAAAAAAAAAAAAQACAxMhImH/2gAIAQIBAT8AtkAG7s9X/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIS/9oACAEDAQE/AIU//9k="}),alt:"Image 5",width:4124,height:2600},{src:eA({src:"/carousel/_next/static/media/6.561ec6a1.jpg",height:2154,width:4242,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAnQD/AP/EABsQAAICAwEAAAAAAAAAAAAAAAECAwQAETHB/9oACAEBAAE/AFmR66sa0OyDwEe5/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"}),srcWebp:eA({src:"/carousel/_next/static/media/6.2333ab7e.webp",height:2154,width:4242,blurDataURL:"data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAQAAkA4JZwCdAEO+mBgAP75Xef3QD2dc8mTWWaqQI1KNh84AA=="}),srcPreview:eA({src:"/carousel/_next/static/media/6_small.a8c7037b.jpg",height:323,width:636,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAnAD/AP/EABkQAQEBAAMAAAAAAAAAAAAAAAEDAgARMf/aAAgBAQABPwArncMrCXaPg8//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="}),alt:"Image 6",width:4242,height:2154},{src:eA({src:"/carousel/_next/static/media/7.89ad6f01.jpg",height:3280,width:4940,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAmwM3/8QAHhAAAQQBBQAAAAAAAAAAAAAAAQIDBBEABRIxQmH/2gAIAQEAAT8AXCaGktzNqCT1r2ubz//EABkRAAEFAAAAAAAAAAAAAAAAAAEAAhEScv/aAAgBAgEBPwB4iuQv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERcf/aAAgBAwEBPwCuLD//2Q=="}),srcWebp:eA({src:"/carousel/_next/static/media/7.1bb25b04.webp",height:3280,width:4940,blurDataURL:"data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAkA4JYgCdAELX5EEAAD+9fD2Bqak0QUaXZcFA22+xKfrufldmudV9u5qO3ra+AtjbhvFvAAA"}),srcPreview:eA({src:"/carousel/_next/static/media/7_small.20b7aafd.jpg",height:492,width:741,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAmgQ3/8QAHhAAAQQBBQAAAAAAAAAAAAAAAQIDBBEABRIxQmH/2gAIAQEAAT8AXCaGktzNqCT1r2ubz//EABgRAAIDAAAAAAAAAAAAAAAAAAABAjFx/9oACAECAQE/AJKsR//EABcRAAMBAAAAAAAAAAAAAAAAAAABEXH/2gAIAQMBAT8Ariw//9k="}),alt:"Image 7",width:4940,height:3280},{src:eA({src:"/carousel/_next/static/media/8.a08b2b6c.jpg",height:3445,width:5042,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAIwjf//EABwQAAIBBQEAAAAAAAAAAAAAAAIEEQABAxIhMf/aAAgBAQABPwDG+TUaXYDhTLBn5X//xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRMf/aAAgBAgEBPwDWzbV7P//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AAL/2Q=="}),srcWebp:eA({src:"/carousel/_next/static/media/8.89bfc2f3.webp",height:3445,width:5042,blurDataURL:"data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoIAAUAAkA4JYgCdAEUlEDk4ADLC/sO7p+bDbvPTs01+cvyuAf4T1C04JTE6zVCvR+DJ05dER/nBZ6Vdy8gAA=="}),srcPreview:eA({src:"/carousel/_next/static/media/8_small.07d2a4c0.jpg",height:517,width:756,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAIwjf//EAB0QAAECBwAAAAAAAAAAAAAAAAIEEQABAwUSITH/2gAIAQEAAT8Ap3AlTYTUBondQZ8j/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACETH/2gAIAQIBAT8A1s21ez//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPwAC/9k="}),alt:"Image 8",width:5042,height:3445},{src:eA({src:"/carousel/_next/static/media/9.71a674c6.jpg",height:3442,width:5163,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAiwf/xAAcEAACAgIDAAAAAAAAAAAAAAACAwEEEiIABVH/2gAIAQEAAT8AaaqnUAyKySYeO+Owx5E8/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/ANQL/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAEDAQE/AIN3/9k="}),srcWebp:eA({src:"/carousel/_next/static/media/9.6406b2f3.webp",height:3442,width:5163,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAkA4JZwC7AEO2pHxgAD+9+CPkronEB8qku39pbBiM5l+5LLzW7+jLzbiQA0AAA=="}),srcPreview:eA({src:"/carousel/_next/static/media/9_small.e870c687.jpg",height:516,width:774,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAigf/xAAcEAADAAIDAQAAAAAAAAAAAAABAgMEIgAFElH/2gAIAQEAAT8Aq8sTqEoMaLUcrv52UfAef//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPwDUC//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPwCDd//Z"}),alt:"Image 9",width:5163,height:3442},{src:eA({src:"/carousel/_next/static/media/10.014110e5.jpg",height:3070,width:5464,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAIwqZ//EABoQAAEFAQAAAAAAAAAAAAAAAAIAAQURIkH/2gAIAQEAAT8Ai9OQ8pf/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAMEEf/aAAgBAgEBPwDQpa8n/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQIEACH/2gAIAQMBAT8AxTNZxZH17//Z"}),srcWebp:eA({src:"/carousel/_next/static/media/10.225a4407.webp",height:3070,width:5464,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAQAAkA4JbACdADdBGQwAP7meTRMGPqAqTNP3d+nT5kwj/w1toJH5QqqNq/ge+UIAA=="}),srcPreview:eA({src:"/carousel/_next/static/media/10_small.0327f570.jpg",height:461,width:820,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAIwqX//EABoQAAEFAQAAAAAAAAAAAAAAAAIAAQUSIkH/2gAIAQEAAT8AjNOQ8qv/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAME/9oACAECAQE/ANClrP/EABkRAQEAAwEAAAAAAAAAAAAAAAIBAAMEIf/aAAgBAwEBPwDiJWg2mX3P/9k="}),alt:"Image 10",width:5464,height:3070}];function tA(A,e,a,t){return{nextButton:"Go to slide ".concat(e),previousButton:"Go to slide ".concat(a),status:"".concat(A," over ").concat(t),close:"Close (ESC)"}}function iA(A,e,a){return e in A?Object.defineProperty(A,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):A[e]=a,A}function sA(A){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(A){return Object.getOwnPropertyDescriptor(a,A).enumerable})))),t.forEach((function(e){iA(A,e,a[e])}))}return A}var gA=(0,C.Z)({img:{width:"100%",height:"auto",cursor:"zoom-in"}});function oA(A){var e=A.src,a=A.srcPreview,t=A.alt,s=A.index,g=A.width,o=A.height,n=gA(),r=E().openAt;return(0,i.jsx)("a",{href:e,onClick:function(A){A.preventDefault(),r(s)},children:(0,i.jsx)(p,{src:a,alt:t,width:g,height:o,imgClassName:n.img})})}function nA(A){var e=A.slides,a=A.title,t=(0,R.Z)(),s=(0,S.Z)(t.breakpoints.down("xs"));return(0,i.jsxs)(Q,{slides:e,translationsFactory:tA,children:[(0,i.jsx)("h2",{children:a}),(0,i.jsx)($.Z,{cols:s?1:3,children:e.map((function(A,e){return(0,i.jsx)(AA.Z,{children:(0,i.jsx)(oA,sA({index:e},A))},e)}))}),(0,i.jsx)(q,{title:a})]})}var rA=function(){return function(){if("function"!==typeof window.matchMedia)return!1;var A=window.matchMedia("(prefers-color-scheme: dark)");return!(!A||"undefined"===typeof A.matches)&&A.matches}()},cA=(0,g.A)({palette:{type:"light"}}),lA=(0,g.A)({palette:{type:"dark"}}),QA=function(){var A=rA();return(0,i.jsxs)(o.Z,{theme:A?lA:cA,children:[(0,i.jsx)(n.ZP,{}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("h1",{children:"Galleries with Carousel in a modal"}),(0,i.jsx)("p",{children:"Click on one if the image below to open the carousel."}),(0,i.jsx)(nA,{slides:aA,title:"My Gallery"}),(0,i.jsx)(nA,{slides:[aA[8]],title:"Gallery with one image"}),(0,i.jsx)("h2",{children:"Gallery with no title"}),(0,i.jsx)(nA,{slides:[aA[7]]}),(0,i.jsx)("h1",{children:"Carousel in the page"}),(0,i.jsx)(Q,{slides:aA,translationsFactory:tA,children:(0,i.jsx)(W,{})})]})]})};function EA(){return(0,i.jsx)(s.StrictMode,{children:(0,i.jsx)(QA,{})})}}}]);