(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1020)}])},1020:function(t,n,i){"use strict";i.r(n),i.d(n,{default:function(){return w}});var e=i(5893),r=function(t){var n=t.children;return(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("div",{className:"absolute -z-10 w-[120%] h-[55%] bg-secondary-color",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),(0,e.jsx)("h1",{className:"primary-color",children:n})]})},s=i(7294);function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function u(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return o(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:101,e=(n-t)/(Math.round(i)-1),r=Array(i).fill(0).map((function(n,i){return t+i*e}));return{xs:r,delta:e}},l=function(t,n,i,e,r){return e+(r-e)/(i-n)*(t-n)},h=function(){function t(){a(this,t)}return t.Cubic=function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2},t}(),f=function(){function t(n,i){a(this,t),this.fcn=i,this.bounds=n}var n=t.prototype;return n._getDims=function(){return{width:this.bounds.x2-this.bounds.x1,height:this.bounds.y2-this.bounds.y1}},n._isWithinBounds=function(t){var n=t.x,i=t.y,e=this.bounds,r=e.x1,s=e.x2,o=e.y1,a=e.y2;return!(n<r||n>s||i<o||i>a)},n._getPoints=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:101,n=this,i=c(this.bounds.x1,this.bounds.x2,t).xs;return i.map((function(t){return{x:t,y:n.fcn(t)}})).filter((function(t){return n._isWithinBounds(t)}))},t}(),d=function(){function t(n,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h.Cubic;a(this,t),this.FPS=60,this.fcn=n,this.duration=i,this.easingFunction=e}var n=t.prototype;return n._getXs=function(t,n,i){var e=this,r=c(0,1,i),s=r.xs,o=r.delta;return{xTangents:s.map((function(t){return e.easingFunction(t)})).map((function(i){return l(i,0,1,t,n)})),dt:o*this.duration}},n._getGrad=function(t){var n=.01,i=t-n,e=t+n,r=this.fcn(i),s=this.fcn(t);return((s-r)/n+(this.fcn(e)-s)/n)/2},n.getTangentCoordinates=function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,e=this,r=this.duration/1e3*this.FPS,s=this._getXs(t,n,r).xTangents;return s.map((function(t){var n=e._getGrad(t),r=e.fcn(t),s=i/(2*Math.pow(1+Math.pow(n,2),.5)),o=s*n;return[{x:t+s,y:r+o},{x:t-s,y:r-o}]}))},t}(),p=function(){function t(n,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{minor:1,major:5};a(this,t),this.plotFunctions=[],this.defaultDrawOptions={lineWidth:1,strokeStyle:"black",lineCap:"round"},this.canvasRef=n,this.bounds=i,this.axisFreq=r,this.pixelsPerUnit=e,this.canvasRef.width=this._getWidth(),this.canvasRef.height=this._getHeight();var s=this.canvasRef.getContext("2d");s&&(this.ctx=s)}var n=t.prototype;return n._applyDrawOptions=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.ctx){var n=t.lineWidth,i=t.strokeStyle,e=t.lineCap;this.ctx.lineWidth=null!==n&&void 0!==n?n:this.defaultDrawOptions.lineWidth,this.ctx.strokeStyle=null!==i&&void 0!==i?i:this.defaultDrawOptions.strokeStyle,this.ctx.lineCap=null!==e&&void 0!==e?e:this.defaultDrawOptions.lineCap}},n._getWidth=function(){return(this.bounds.x2-this.bounds.x1)*this.pixelsPerUnit},n._getHeight=function(){return(this.bounds.y2-this.bounds.y1)*this.pixelsPerUnit},n._mapPoint=function(t){var n=t.x,i=t.y;return{x:l(n,this.bounds.x1,this.bounds.x2,0,this._getWidth()),y:l(i,this.bounds.y1,this.bounds.y2,0,this._getHeight())}},n._mapPoints=function(t){var n=this;return t.map((function(t){return n._mapPoint(t)}))},n._plotLine=function(t,n){var i,e,r,s=this;this._applyDrawOptions(n),null===(i=this.ctx)||void 0===i||i.beginPath();var o=t[0],a=o.x,u=o.y;null===(e=this.ctx)||void 0===e||e.moveTo(a,u),t.slice(1).forEach((function(t){var n,i=t.x,e=t.y;null===(n=s.ctx)||void 0===n||n.lineTo(i,e)})),null===(r=this.ctx)||void 0===r||r.stroke()},n.plotMajorAxis=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this;this._applyDrawOptions(t);var i=[{x:0,y:this.bounds.y1},{x:0,y:this.bounds.y2}],e=[{x:this.bounds.x1,y:0},{x:this.bounds.x2,y:0}],r=[i,e].map((function(t){return n._mapPoints(t)}));return function(){return r.forEach((function(i){return n._plotLine(i,t)}))}},n.plotMinorAxis=function(t){for(var n=this,i=[],e=this.axisFreq.minor,r=this.axisFreq.minor,s=e;s<this.bounds.x2;s+=e)i.push(s);for(var o=-e;o>this.bounds.x1;o-=e)i.push(o);i.sort((function(t,n){return t-n}));for(var a=[],c=r;c<this.bounds.y2;c+=r)a.push(c);for(var l=-r;l>this.bounds.y1;l-=r)a.push(l);a.sort((function(t,n){return t-n}));var h=a.map((function(t){return[{x:n.bounds.x1,y:t},{x:n.bounds.x2,y:t}]})),f=i.map((function(t){return[{x:t,y:n.bounds.y1},{x:t,y:n.bounds.y2}]})),d=u(h).concat(u(f)).map((function(t){return n._mapPoints(t)}));return function(){return d.forEach((function(i){return n._plotLine(i,t)}))}},n.plotFunction=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this,e=new f(this.bounds,t),r=e._getPoints(),s=this._mapPoints(r);return function(){return i._plotLine(s,n)}},n.plotFunctionTangents=function(t,n,i,e,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=this,a=new d(r,i),u=a.getTangentCoordinates(t,n,e),c=u.map((function(t){return o._mapPoints(t)})),l=0,h=function(){return l++};return function(){0===l&&(h=function(){return l++}),l===c.length-1&&(h=function(){return l--}),h(),o._plotLine(c[l],s)}},n._resetCanvas=function(){var t;null===(t=this.ctx)||void 0===t||t.clearRect(0,0,this.canvasRef.width,this.canvasRef.height)},n.draw=function(){this._resetCanvas(),this.plotFunctions.forEach((function(t){return t()}))},t}(),x=function(t){var n=t.className,i=(0,s.useRef)(null);return(0,s.useEffect)((function(){if(i.current){var t=function(t){return t*(t-1)*(t+1)},n=new p(i.current,{x1:-1.5,x2:1.5,y1:-1.5,y2:1.5},200);n.plotFunctions.push(n.plotMajorAxis({lineWidth:2,strokeStyle:"black"})),n.plotFunctions.push(n.plotMinorAxis({lineWidth:1,strokeStyle:"grey"})),n.plotFunctions.push(n.plotFunction(t,{lineWidth:6,strokeStyle:"#AC57F2",lineCap:"round"})),n.plotFunctions.push(n.plotFunctionTangents(-1.1,1.1,2500,1.5,t,{lineWidth:4,strokeStyle:"#818CF8"}));var e=requestAnimationFrame((function t(){n.draw(),requestAnimationFrame(t)}));return function(){return cancelAnimationFrame(e)}}}),[i]),(0,e.jsx)("canvas",{ref:i,className:n})},v=function(t){var n=t.className;return(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 271 211",className:"group overflow-visible ".concat(n),children:[(0,e.jsxs)("g",{fill:"url(#paint0_linear_73_255)",children:[(0,e.jsx)("path",{className:"animate-[slightRotation_5s_ease-in-out_infinite] origin-center",d:"M170.237 0.769337C172.106 1.39142 173.835 2.37575 175.324 3.66613C176.813 4.9565 178.034 6.52762 178.915 8.28972C179.797 10.0518 180.323 11.9704 180.463 13.9358C180.603 15.9012 180.355 17.875 179.732 19.7443L119.732 199.744C118.475 203.52 115.769 206.641 112.211 208.422C108.652 210.202 104.532 210.496 100.757 209.239C96.9814 207.982 93.8601 205.277 92.0794 201.718C90.2988 198.16 90.0047 194.04 91.2618 190.264L151.262 10.2643C151.884 8.39471 152.868 6.66596 154.159 5.17685C155.449 3.68775 157.02 2.46747 158.782 1.58572C160.544 0.703967 162.463 0.17803 164.428 0.0379527C166.394 -0.102124 168.367 0.146405 170.237 0.769337"}),(0,e.jsx)("path",{className:"animate-[rightToLeft_5s_ease-in-out_infinite]",d:"M71.1018 49.3993C73.9139 52.2123 75.4936 56.0269 75.4936 60.0043C75.4936 63.9818 73.9139 67.7964 71.1018 70.6093L36.7068 105.004L71.1018 139.399C72.5344 140.783 73.6772 142.438 74.4633 144.268C75.2495 146.098 75.6632 148.067 75.6805 150.058C75.6979 152.05 75.3183 154.025 74.5641 155.869C73.8099 157.712 72.6961 159.387 71.2877 160.795C69.8793 162.204 68.2046 163.317 66.3611 164.072C64.5177 164.826 62.5425 165.205 60.5508 165.188C58.5591 165.171 56.5908 164.757 54.7607 163.971C52.9307 163.185 51.2755 162.042 49.8918 160.609L4.8918 115.609C2.07973 112.796 0.5 108.982 0.5 105.004C0.5 101.027 2.07973 97.2122 4.8918 94.3993L49.8918 49.3993C52.7047 46.5873 56.5193 45.0075 60.4968 45.0075C64.4743 45.0075 68.2889 46.5873 71.1018 49.3993Z"}),(0,e.jsx)("path",{className:"animate-[leftToRight_5s_ease-in-out_infinite]",d:"M199.892 49.3993C202.705 46.5873 206.519 45.0075 210.497 45.0075C214.474 45.0075 218.289 46.5873 221.102 49.3993L266.102 94.3993C268.914 97.2122 270.494 101.027 270.494 105.004C270.494 108.982 268.914 112.796 266.102 115.609L221.102 160.609C219.718 162.042 218.063 163.185 216.233 163.971C214.403 164.757 212.434 165.171 210.443 165.188C208.451 165.205 206.476 164.826 204.632 164.072C202.789 163.317 201.114 162.204 199.706 160.795C198.297 159.387 197.184 157.712 196.429 155.869C195.675 154.025 195.296 152.05 195.313 150.058C195.33 148.067 195.744 146.098 196.53 144.268C197.316 142.438 198.459 140.783 199.892 139.399L234.287 105.004L199.892 70.6093C197.08 67.7964 195.5 63.9818 195.5 60.0043C195.5 56.0269 197.08 52.2123 199.892 49.3993Z"})]}),(0,e.jsx)("defs",{xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsxs)("linearGradient",{id:"paint0_linear_73_255",x1:"242",y1:"64.5",x2:"1.24999",y2:"144.75",gradientUnits:"userSpaceOnUse",children:[(0,e.jsx)("stop",{stopColor:"#A259FF"}),(0,e.jsx)("stop",{offset:"1",stopColor:"#818CF8"})]})})]})},m=i(4051),y=i.n(m);function g(t,n,i,e,r,s,o){try{var a=t[s](o),u=a.value}catch(c){return void i(c)}a.done?n(u):Promise.resolve(u).then(e,r)}var C=function(t){var n=t.content,i=t.className,r=(0,s.useState)(""),o=r[0],a=r[1],u=(0,s.useState)(!0),c=u[0],l=u[1],h=(0,s.useState)(!0),f=h[0],d=h[1];return(0,s.useEffect)((function(){var t=function(){var n,i=(n=y().mark((function n(i){var e;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!i.length){n.next=9;break}return l(!1),e=400*Math.random()+100,n.next=5,new Promise((function(t){return setTimeout(t,e)}));case 5:a((function(t){return t.concat(i[0])})),t(i.slice(1)),n.next=12;break;case 9:return n.next=11,new Promise((function(t){return setTimeout(t,700)}));case 11:l(!0);case 12:case"end":return n.stop()}}),n)})),function(){var t=this,i=arguments;return new Promise((function(e,r){var s=n.apply(t,i);function o(t){g(s,e,r,o,a,"next",t)}function a(t){g(s,e,r,o,a,"throw",t)}o(void 0)}))});return function(t){return i.apply(this,arguments)}}();setTimeout((function(){return t(Array.from(n))}),1600)}),[n]),(0,s.useEffect)((function(){if(c){var t=setInterval((function(){d((function(t){return!t}))}),700);return function(){return clearInterval(t)}}d(!0)}),[c]),(0,e.jsx)("div",{className:"flex",children:(0,e.jsxs)("p",{className:i,children:[o,(0,e.jsx)("span",{style:{opacity:f?"100%":"0"},children:"_"})]})})},_=function(t){var n="w-[250px] md:w-[280px] lg:w-[350px] xl:w-[350px]";return(0,e.jsxs)("section",{id:t.id,className:"w-full h-screen px-8 py-12 md:pt-16 flex flex-col gap-y-12 md:gap-y-0 items-center ",children:[(0,e.jsx)(r,{children:"I like..."}),(0,e.jsxs)("div",{className:"flex flex-col h-full md:flex-row items-center w-fit justify-around md:gap-x-16 lg:gap-x-32",children:[(0,e.jsxs)("div",{className:"flex flex-col gap-y-4",children:[(0,e.jsxs)("div",{className:"flex flex-col justify-center items-center gap-y-1",children:[(0,e.jsx)(C,{content:"software",className:"font-mono text-2xl md:3xl"}),(0,e.jsx)("p",{children:"Frontend and backend web dev."})]}),(0,e.jsx)(v,{className:n})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-y-4",children:[(0,e.jsx)("h2",{className:"text-center",children:"Math"}),(0,e.jsx)(x,{className:n})]})]})]})},w=function(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(_,{name:"I Like",id:"1"})})}}},function(t){t.O(0,[774,888,179],(function(){return n=8312,t(t.s=n);var n}));var n=t.O();_N_E=n}]);