(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5812)}])},5812:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return D}});var r=n(5893),s=n(7294),i=n(5530),a=n(2173),o=n(9180),c=n(2010),l=function(){var t=(0,c.F)(),e=t.theme,n=t.setTheme,l=(0,s.useState)(!1),u=l[0],h=l[1],d=(0,s.useState)(null),f=d[0],x=d[1],m=["theme-space","theme-weed","theme-sunset"];(0,s.useEffect)((function(){h(!0),document&&x(document.getElementById("__next"))}),[]),(0,s.useEffect)((function(){return console.log("dark"===e)}),[e]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:function(){n("dark"===e?"light":"dark")},className:"h-8 aspect-square [&>*]:stroke-gray-900 [&>*]:dark:stroke-gray-200",children:u&&("dark"===e?(0,r.jsx)(i.Z,{}):(0,r.jsx)(a.Z,{}))}),(0,r.jsx)("button",{onClick:function(){m.forEach((function(t){return null===f||void 0===f?void 0:f.classList.remove(t)})),null===f||void 0===f||f.classList.add(m[Math.floor(Math.random()*m.length)])},className:"h-8 aspect-square [&>*]:stroke-gray-900 [&>*]:dark:stroke-gray-200",children:(0,r.jsx)(o.Z,{})})]})},u=function(){return(0,r.jsx)("nav",{className:"absolute right-4 top-4",children:(0,r.jsx)(l,{})})},h=function(t){var e=t.children;return(0,r.jsxs)("div",{className:"relative w-fit",children:[(0,r.jsx)("div",{className:"absolute w-[120%] h-[55%] bg-secondary dark:bg-secondary-dark",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),(0,r.jsx)("h1",{className:"text-primary dark:text-primary relative w-fit",children:e})]})},d=function(t){var e=t.children,n=t.className;return(0,r.jsx)("section",{className:"h-full w-full snap-start px-8 py-12 "+n,children:e})};function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:101,r=(e-t)/(Math.round(n)-1),s=Array(n).fill(0).map((function(e,n){return t+n*r}));return{xs:s,delta:r}},v=function(t,e,n,r,s){return r+(s-r)/(n-e)*(t-e)},g=function(){function t(){x(this,t)}return t.Cubic=function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2},t}(),y=function(){function t(e,n){x(this,t),this.fcn=n,this.bounds=e}var e=t.prototype;return e._getDims=function(){return{width:this.bounds.x2-this.bounds.x1,height:this.bounds.y2-this.bounds.y1}},e._isWithinBounds=function(t){var e=t.x,n=t.y,r=this.bounds,s=r.x1,i=r.x2,a=r.y1,o=r.y2;return!(e<s||e>i||n<a||n>o)},e._getPoints=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:101,e=this,n=p(this.bounds.x1,this.bounds.x2,t).xs;return n.map((function(t){return{x:t,y:e.fcn(t)}})).filter((function(t){return e._isWithinBounds(t)}))},t}(),w=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.Cubic;x(this,t),this.FPS=60,this.fcn=e,this.duration=n,this.easingFunction=r}var e=t.prototype;return e._getXs=function(t,e,n){var r=this,s=p(0,1,n),i=s.xs,a=s.delta;return{xTangents:i.map((function(t){return r.easingFunction(t)})).map((function(n){return v(n,0,1,t,e)})),dt:a*this.duration}},e._getGrad=function(t){var e=.01,n=t-e,r=t+e,s=this.fcn(n),i=this.fcn(t);return((i-s)/e+(this.fcn(r)-i)/e)/2},e.getTangentCoordinates=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=this,s=this.duration/1e3*this.FPS,i=this._getXs(t,e,s).xTangents;return i.map((function(t){var e=r._getGrad(t),s=r.fcn(t),i=n/(2*Math.pow(1+Math.pow(e,2),.5)),a=i*e;return[{x:t+i,y:s+a},{x:t-i,y:s-a}]}))},t}(),j=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{minor:1,major:5};x(this,t),this.plotFunctions=[],this.defaultDrawOptions={lineWidth:1,strokeStyle:"black",lineCap:"round"},this.canvasRef=e,this.bounds=n,this.axisFreq=s,this.pixelsPerUnit=r,this.canvasRef.width=this._getWidth(),this.canvasRef.height=this._getHeight();var i=this.canvasRef.getContext("2d");i&&(this.ctx=i)}var e=t.prototype;return e._applyDrawOptions=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.ctx){var e=t.lineWidth,n=t.strokeStyle,r=t.lineCap;this.ctx.lineWidth=null!==e&&void 0!==e?e:this.defaultDrawOptions.lineWidth,this.ctx.strokeStyle=null!==n&&void 0!==n?n:this.defaultDrawOptions.strokeStyle,this.ctx.lineCap=null!==r&&void 0!==r?r:this.defaultDrawOptions.lineCap}},e._getWidth=function(){return(this.bounds.x2-this.bounds.x1)*this.pixelsPerUnit},e._getHeight=function(){return(this.bounds.y2-this.bounds.y1)*this.pixelsPerUnit},e._mapPoint=function(t){var e=t.x,n=t.y;return{x:v(e,this.bounds.x1,this.bounds.x2,0,this._getWidth()),y:v(n,this.bounds.y1,this.bounds.y2,0,this._getHeight())}},e._mapPoints=function(t){var e=this;return t.map((function(t){return e._mapPoint(t)}))},e._plotLine=function(t,e){var n,r,s,i=this;this._applyDrawOptions(e),null===(n=this.ctx)||void 0===n||n.beginPath();var a=t[0],o=a.x,c=a.y;null===(r=this.ctx)||void 0===r||r.moveTo(o,c),t.slice(1).forEach((function(t){var e,n=t.x,r=t.y;null===(e=i.ctx)||void 0===e||e.lineTo(n,r)})),null===(s=this.ctx)||void 0===s||s.stroke()},e.plotMajorAxis=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;this._applyDrawOptions(t);var n=[{x:0,y:this.bounds.y1},{x:0,y:this.bounds.y2}],r=[{x:this.bounds.x1,y:0},{x:this.bounds.x2,y:0}],s=[n,r].map((function(t){return e._mapPoints(t)}));return function(){return s.forEach((function(n){return e._plotLine(n,t)}))}},e.plotMinorAxis=function(t){for(var e=this,n=[],r=this.axisFreq.minor,s=this.axisFreq.minor,i=r;i<this.bounds.x2;i+=r)n.push(i);for(var a=-r;a>this.bounds.x1;a-=r)n.push(a);n.sort((function(t,e){return t-e}));for(var o=[],c=s;c<this.bounds.y2;c+=s)o.push(c);for(var l=-s;l>this.bounds.y1;l-=s)o.push(l);o.sort((function(t,e){return t-e}));var u=o.map((function(t){return[{x:e.bounds.x1,y:t},{x:e.bounds.x2,y:t}]})),h=n.map((function(t){return[{x:t,y:e.bounds.y1},{x:t,y:e.bounds.y2}]})),d=m(u).concat(m(h)).map((function(t){return e._mapPoints(t)}));return function(){return d.forEach((function(n){return e._plotLine(n,t)}))}},e.plotFunction=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this,r=new y(this.bounds,t),s=r._getPoints(),i=this._mapPoints(s);return function(){return n._plotLine(i,e)}},e.plotFunctionTangents=function(t,e,n,r,s){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=this,o=new w(s,n),c=o.getTangentCoordinates(t,e,r),l=c.map((function(t){return a._mapPoints(t)})),u=0,h=function(){return u++};return function(){0===u&&(h=function(){return u++}),u===l.length-1&&(h=function(){return u--}),h(),a._plotLine(l[u],i)}},e._resetCanvas=function(){var t;null===(t=this.ctx)||void 0===t||t.clearRect(0,0,this.canvasRef.width,this.canvasRef.height)},e.draw=function(){this._resetCanvas(),this.plotFunctions.forEach((function(t){return t()}))},t}(),b=function(t){var e=t.className,n=(0,s.useRef)(null);return(0,s.useEffect)((function(){if(n.current){var t=function(t){return t*(t-1)*(t+1)},e=new j(n.current,{x1:-1.5,x2:1.5,y1:-1.5,y2:1.5},200);e.plotFunctions.push(e.plotMajorAxis({lineWidth:2,strokeStyle:"black"})),e.plotFunctions.push(e.plotMinorAxis({lineWidth:1,strokeStyle:"grey"}));var r=function(t){var e=getComputedStyle(document.documentElement).getPropertyValue(t);return console.log(e.split(" ").filter((function(t){return Boolean(t)}))),e.split(" ").filter((function(t){return Boolean(t)})).map((function(t){return parseInt(t).toString(16)})).reduce((function(t,e){return t+e}),"#")};console.log(r("--primary")),e.plotFunctions.push(e.plotFunction(t,{lineWidth:6,strokeStyle:r("--primary"),lineCap:"round"})),console.log(getComputedStyle(document.documentElement).getPropertyValue("--primary")),e.plotFunctions.push(e.plotFunctionTangents(-1.1,1.1,2500,1.5,t,{lineWidth:4,strokeStyle:r("--primary-light")}));var s=requestAnimationFrame((function t(){e.draw(),requestAnimationFrame(t)}));return function(){return cancelAnimationFrame(s)}}}),[n]),(0,r.jsx)("canvas",{ref:n,className:e})},C=function(t){var e=t.className;return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 271 211",className:"group overflow-visible ".concat(e),children:[(0,r.jsxs)("g",{fill:"url(#paint0_linear_73_255)",children:[(0,r.jsx)("path",{className:"animate-[slightRotation_5s_ease-in-out_infinite] origin-center",d:"M170.237 0.769337C172.106 1.39142 173.835 2.37575 175.324 3.66613C176.813 4.9565 178.034 6.52762 178.915 8.28972C179.797 10.0518 180.323 11.9704 180.463 13.9358C180.603 15.9012 180.355 17.875 179.732 19.7443L119.732 199.744C118.475 203.52 115.769 206.641 112.211 208.422C108.652 210.202 104.532 210.496 100.757 209.239C96.9814 207.982 93.8601 205.277 92.0794 201.718C90.2988 198.16 90.0047 194.04 91.2618 190.264L151.262 10.2643C151.884 8.39471 152.868 6.66596 154.159 5.17685C155.449 3.68775 157.02 2.46747 158.782 1.58572C160.544 0.703967 162.463 0.17803 164.428 0.0379527C166.394 -0.102124 168.367 0.146405 170.237 0.769337"}),(0,r.jsx)("path",{className:"animate-[rightToLeft_5s_ease-in-out_infinite]",d:"M71.1018 49.3993C73.9139 52.2123 75.4936 56.0269 75.4936 60.0043C75.4936 63.9818 73.9139 67.7964 71.1018 70.6093L36.7068 105.004L71.1018 139.399C72.5344 140.783 73.6772 142.438 74.4633 144.268C75.2495 146.098 75.6632 148.067 75.6805 150.058C75.6979 152.05 75.3183 154.025 74.5641 155.869C73.8099 157.712 72.6961 159.387 71.2877 160.795C69.8793 162.204 68.2046 163.317 66.3611 164.072C64.5177 164.826 62.5425 165.205 60.5508 165.188C58.5591 165.171 56.5908 164.757 54.7607 163.971C52.9307 163.185 51.2755 162.042 49.8918 160.609L4.8918 115.609C2.07973 112.796 0.5 108.982 0.5 105.004C0.5 101.027 2.07973 97.2122 4.8918 94.3993L49.8918 49.3993C52.7047 46.5873 56.5193 45.0075 60.4968 45.0075C64.4743 45.0075 68.2889 46.5873 71.1018 49.3993Z"}),(0,r.jsx)("path",{className:"animate-[leftToRight_5s_ease-in-out_infinite]",d:"M199.892 49.3993C202.705 46.5873 206.519 45.0075 210.497 45.0075C214.474 45.0075 218.289 46.5873 221.102 49.3993L266.102 94.3993C268.914 97.2122 270.494 101.027 270.494 105.004C270.494 108.982 268.914 112.796 266.102 115.609L221.102 160.609C219.718 162.042 218.063 163.185 216.233 163.971C214.403 164.757 212.434 165.171 210.443 165.188C208.451 165.205 206.476 164.826 204.632 164.072C202.789 163.317 201.114 162.204 199.706 160.795C198.297 159.387 197.184 157.712 196.429 155.869C195.675 154.025 195.296 152.05 195.313 150.058C195.33 148.067 195.744 146.098 196.53 144.268C197.316 142.438 198.459 140.783 199.892 139.399L234.287 105.004L199.892 70.6093C197.08 67.7964 195.5 63.9818 195.5 60.0043C195.5 56.0269 197.08 52.2123 199.892 49.3993Z"})]}),(0,r.jsx)("defs",{xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_73_255",x1:"242",y1:"64.5",x2:"1.24999",y2:"144.75",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{className:"stop-light"}),(0,r.jsx)("stop",{offset:"1",className:"stop-dark"})]})})]})},N=n(4051),_=n.n(N);function k(t,e,n,r,s,i,a){try{var o=t[i](a),c=o.value}catch(l){return void n(l)}o.done?e(c):Promise.resolve(c).then(r,s)}var S=function(t){var e=t.content,n=t.className,i=(0,s.useState)(""),a=i[0],o=i[1],c=(0,s.useState)(!0),l=c[0],u=c[1],h=(0,s.useState)(!0),d=h[0],f=h[1];return(0,s.useEffect)((function(){var t=function(){var e,n=(e=_().mark((function e(n){var r;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.length){e.next=9;break}return u(!1),r=400*Math.random()+100,e.next=5,new Promise((function(t){return setTimeout(t,r)}));case 5:o((function(t){return t.concat(n[0])})),t(n.slice(1)),e.next=12;break;case 9:return e.next=11,new Promise((function(t){return setTimeout(t,700)}));case 11:u(!0);case 12:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function a(t){k(i,r,s,a,o,"next",t)}function o(t){k(i,r,s,a,o,"throw",t)}a(void 0)}))});return function(t){return n.apply(this,arguments)}}();setTimeout((function(){return t(Array.from(e))}),1600)}),[e]),(0,s.useEffect)((function(){if(l){var t=setInterval((function(){f((function(t){return!t}))}),700);return function(){return clearInterval(t)}}f(!0)}),[l]),(0,r.jsx)("div",{className:"flex",children:(0,r.jsxs)("p",{className:n,children:[a,(0,r.jsx)("span",{style:{opacity:d?"100%":"0"},children:"_"})]})})},M=function(t){var e="w-[200px] md:w-[280px] lg:w-[350px] xl:w-[350px]";return(0,r.jsxs)(d,{className:"w-full h-full px-8 py-12 md:pt-16 flex flex-col md:gap-y-0 items-center ",children:[(0,r.jsx)(h,{children:"I like..."}),(0,r.jsxs)("div",{className:"flex flex-col h-full md:flex-row items-center w-fit justify-around md:gap-x-16 lg:gap-x-32",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-y-4 items-center",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center gap-y-1",children:[(0,r.jsx)(S,{content:"software",className:"font-mono text-2xl md:3xl"}),(0,r.jsx)("p",{children:"Frontend and backend web dev."})]}),(0,r.jsx)(C,{className:e})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-y-4",children:[(0,r.jsx)("h2",{className:"text-center",children:"Math"}),(0,r.jsx)(b,{className:e})]})]})]})},P=function(){return(0,r.jsxs)(d,{className:"flex justify-center relative",children:[(0,r.jsx)("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",className:"absolute h-[600px] -left-[200px] -top-[200px] fill-primary",children:(0,r.jsx)("path",{d:"M26.3,-43.6C38.7,-33,56.4,-33.4,63.6,-26.5C70.8,-19.5,67.5,-5.1,58.7,3.6C49.9,12.3,35.7,15.4,29.1,28.1C22.6,40.7,23.8,62.9,16.9,71.2C10,79.4,-5,73.7,-18.3,67.4C-31.7,61.2,-43.4,54.5,-56.3,45.5C-69.1,36.5,-83.2,25.2,-81.1,14C-79.1,2.8,-60.9,-8.4,-53.3,-24C-45.7,-39.7,-48.5,-59.8,-41.4,-72.7C-34.3,-85.6,-17.1,-91.3,-5.1,-83.4C7,-75.5,14,-54.1,26.3,-43.6Z",transform:"translate(100 100)"})}),(0,r.jsx)("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",className:"absolute h-[450px] -right-[200px] -bottom-[150px] fill-primary",children:(0,r.jsx)("path",{d:"M48.3,-46.1C61.4,-35.1,70.1,-17.6,69.8,-0.4C69.4,16.8,59.9,33.6,46.8,49.4C33.6,65.1,16.8,79.8,-2.4,82.2C-21.5,84.5,-43.1,74.6,-57.4,58.8C-71.8,43.1,-79,21.5,-74.4,4.6C-69.8,-12.3,-53.3,-24.6,-39,-35.7C-24.6,-46.7,-12.3,-56.4,2.6,-59C17.6,-61.7,35.1,-57.2,48.3,-46.1Z",transform:"translate(100 100)"})}),(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center relative",children:[(0,r.jsx)("h1",{className:"text-6xl md:text-8xl lg:text-9xl text-black uppercase w-fit",children:"Reuben"}),(0,r.jsx)("h1",{className:"text-6xl md:text-8xl lg:text-9xl text-black uppercase w-fit",children:"Drummond"}),(0,r.jsx)("p",{className:"font-bold uppercase text-3xl bg-gradient-to-r from-primary to-primary-light text-transparent dark:text-transparent bg-clip-text",children:"Web developer"})]})]})},F=n(2758),T=n(9700),L=n(2175),E=n(4231),A=E.Ry().shape({email:E.Z_().required("Email is required").email("Input must be an email"),phoneNumber:E.Z_().matches(/^(?:\+\d{1,2})?\d+(?=\s+$|$)/,"Input must be a phone number"),message:E.Z_().required("Message must not be empty")});function O(t,e,n,r,s,i,a){try{var o=t[i](a),c=o.value}catch(l){return void n(l)}o.done?e(c):Promise.resolve(c).then(r,s)}var R=function(t){var e=t.email;return(0,r.jsxs)("div",{className:"flex gap-x-3 py-3",children:[(0,r.jsx)("a",{href:"mailto:".concat(e),children:(0,r.jsx)(T.Z,{className:"w-12 transition-opacity duration-200 hover:opacity-80 stroke-gray-800 dark:stroke-gray-200"})}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/reuben-drummond-13a375190/",target:"_blank",rel:"noreferrer",className:"w-12 transition-opacity duration-200 hover:opacity-80 fill-gray-800 dark:fill-gray-200",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 32 32",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M17.303,14.365c0.012-0.015,0.023-0.031,0.031-0.048v0.048H17.303z M32,0v32H0V0H32L32,0z M9.925,12.285H5.153v14.354 h4.772V12.285z M10.237,7.847c-0.03-1.41-1.035-2.482-2.668-2.482c-1.631,0-2.698,1.072-2.698,2.482 c0,1.375,1.035,2.479,2.636,2.479h0.031C9.202,10.326,10.237,9.222,10.237,7.847z M27.129,18.408c0-4.408-2.355-6.459-5.494-6.459 c-2.531,0-3.664,1.391-4.301,2.368v-2.032h-4.77c0.061,1.346,0,14.354,0,14.354h4.77v-8.016c0-0.434,0.031-0.855,0.157-1.164 c0.346-0.854,1.132-1.746,2.448-1.746c1.729,0,2.418,1.314,2.418,3.246v7.68h4.771L27.129,18.408L27.129,18.408z"})})})}),(0,r.jsx)("a",{href:"https://github.com/reubendrummond",target:"_blank",rel:"noreferrer",className:"w-12 transition-opacity duration-200 hover:opacity-80 fill-gray-800 dark:fill-gray-200",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,r.jsx)("path",{d:"M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"})})})]})},W=function(){return(0,r.jsx)(L.J9,{initialValues:{email:"",phoneNumber:"",message:""},validationSchema:A,onSubmit:function(t){console.log(t),alert("This form does currently does nothing!")},children:function(t){return(0,r.jsx)(L.l0,{children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"email",children:"Email"}),(0,r.jsx)(L.gN,{name:"email",type:"email"}),(0,r.jsx)("label",{htmlFor:"phoneNumber",children:"Phone number"}),(0,r.jsx)(L.gN,{name:"phoneNumber",type:"phone"}),(0,r.jsx)("label",{htmlFor:"message",children:"Message"}),(0,r.jsx)(L.gN,{name:"message",as:"textarea"}),(0,r.jsx)("button",{type:"submit",children:"Submit"}),(0,r.jsx)("pre",{children:JSON.stringify(t.errors,null,4)}),(0,r.jsx)("pre",{children:JSON.stringify(t.values,null,4)})]})})}})},Z=function(){var t="reubendrummond@gmail.com",e=function(){var e,n=(e=_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(t);case 2:alert("copied to clipboard!");case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function a(t){O(i,r,s,a,o,"next",t)}function o(t){O(i,r,s,a,o,"throw",t)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(d,{className:"flex flex-col items-center",children:[(0,r.jsx)(h,{children:"Contact"}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{className:"flex gap-x-2 items-center",children:[(0,r.jsx)("p",{className:"font-medium",children:t}),(0,r.jsx)(F.Z,{className:"w-8 hover:cursor-pointer stroke-gray-800 dark:stroke-gray-200",onClick:e})]}),(0,r.jsx)(R,{email:t})]}),(0,r.jsx)("div",{className:"min-w-[300px] w-full max-w-md",children:(0,r.jsx)(W,{})})]})},q=n(5675),B=n.n(q),I=function(){return(0,r.jsxs)(d,{className:"px-8 py-12 md:pt-16 flex flex-col items-center",children:[(0,r.jsx)(h,{children:"Technologies"}),(0,r.jsx)("div",{className:"my-auto",children:(0,r.jsx)("div",{className:"grid grid-cols-3 md:grid-cols-4 gap-4",children:[{name:"TypeScript",src:"ts"},{name:"React",src:"react"},{name:"NextJS",src:"next-js"},{name:"TailwindCSS",src:"tailwind-css"},{name:"JavaScript",src:"js"},{name:"NodeJS",src:"node-js"},{name:"Python",src:"python"},{name:"PostgreSQL",src:"postgre-sql"},{name:"HTML",src:"html"},{name:"Firebase",src:"firebase"},{name:"Git",src:"git"},{name:"GitHub",src:"github"}].map((function(t){var e=t.name,n=t.src;return n&&(0,r.jsxs)("div",{className:"w-[75px] md:w-[100px] transition-transform duration-150 hover:scale-110",children:[(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)(B(),{height:"100px",width:"100px",layout:"responsive",className:"grayscale opacity-[65%] dark:invert",src:"/tech-logos/".concat(n,".svg"),alt:e,loading:"eager"})}),(0,r.jsx)("p",{className:"text-xs font-medium text-center mt-1",children:e})]},n)}))})})]})},D=function(){return(0,r.jsxs)("div",{className:"relative h-full",children:[(0,r.jsxs)("main",{className:"snap-mandatory snap-y h-full w-screen overflow-x-hidden overflow-y-scroll bg-gray-50 dark:bg-neutral-900",children:[(0,r.jsx)(P,{}),(0,r.jsx)(M,{}),(0,r.jsx)(I,{}),(0,r.jsx)(Z,{})]}),(0,r.jsx)(u,{})]})}}},function(t){t.O(0,[975,774,888,179],(function(){return e=8312,t(t.s=e);var e}));var e=t.O();_N_E=e}]);