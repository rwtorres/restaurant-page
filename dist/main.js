!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t,n){const i=document.createElement("img"),a=document.createElement("h2");i.src=t,i.style.width="80%",a.textContent=n,a.style.paddingBottom="10%",e.appendChild(i),e.appendChild(a)}function a(e,t){const n=document.createElement("button");n.className="w3-bar-item w3-button",n.onclick=()=>function(e){const t=document.getElementsByClassName("option");for(let e=0;e<t.length;e++)t[e].style.display="none";document.getElementById(e).style.display="block",window.scrollTo(0,0)}(e),n.textContent=e[0].toUpperCase()+e.slice(1),t.appendChild(n)}n.r(t);const s=document.getElementById("content"),o=document.getElementsByTagName("head")[0],u=document.createElement("link");document.createElement("link");s.style.textAlign="center",document.body.style.color="white",document.body.style.backgroundColor="#151515",u.rel="stylesheet",u.href="../src/w3.css",o.appendChild(u),function(){const e=document.createElement("div");e.className="w3-bar w3-black",e.style.position="sticky",e.style.top="0",a("home",e),a("menu",e),a("about",e),a("contact",e),content.appendChild(e)}(),function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("img"),i=document.createElement("p");e.id="home",e.className="option",e.style.display="block",t.id="headline",t.textContent="Cantina Latina Magnificat",n.id="insides",n.src="../src/images/insides.jpeg",n.alt="insides",n.style.width="90%",i.id="description",i.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida magna nulla, vitae condimentum magna posuere id. Maecenas ornare, mi eu sodales placerat, enim ex fermentum est, nec pharetra mauris risus sit amet orci. Mauris et tortor et ipsum varius tempor. In feugiat orci tellus, cursus euismod lacus dictum vel. Sed at convallis diam. Proin pretium ante vitae velit maximus accumsan. Proin et ante hendrerit, laoreet sem ut, hendrerit tortor.",e.appendChild(t),e.appendChild(n),e.appendChild(i),content.appendChild(e)}(),function(){const e=document.createElement("div"),t=document.createElement("h1");e.id="menu",e.className="option",e.style.display="none",t.id="headline",t.textContent="Menu",e.appendChild(t),i(e,"../src/images/beef-steak.jpeg","Beef Steak"),i(e,"../src/images/aspargus-barbecue.jpeg","Aspargus Barbecue"),i(e,"../src/images/potato-cepelinai.jpeg","Potato Cepelinai"),i(e,"../src/images/vegetarian-salad.jpeg","Vegetarian Salad"),content.appendChild(e)}(),function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("img"),i=document.createElement("p");e.id="about",e.className="option",e.style.display="none",t.id="headline",t.textContent="About Us",n.id="insides",n.src="../src/images/service.jpeg",n.alt="insides",n.style.width="90%",i.id="description",i.textContent="Ut pellentesque est quis nunc tempor ullamcorper. Nullam magna justo, maximus ultrices bibendum non, posuere nec nisl. Maecenas nunc nibh, tempor vitae viverra non, convallis in lacus. Maecenas dapibus lacus ut ipsum vehicula elementum. Curabitur eget sem mauris. Curabitur efficitur quam eu sagittis condimentum. Etiam tincidunt arcu ac sem commodo, ullamcorper mollis justo lacinia. Sed dignissim auctor magna.Quisque ultricies sed mauris vel posuere. Curabitur at sapien a arcu scelerisque facilisis at eu mauris. Suspendisse fringilla, nunc eget vulputate fermentum, nibh justo consequat turpis, quis efficitur libero diam non nulla. Proin ac elementum magna. Praesent et nibh interdum, laoreet velit eget, placerat lacus. Integer sed massa sit amet lorem sodales cursus at sed ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam eleifend, metus et iaculis luctus, lectus risus ultricies justo, vulputate fermentum quam dolor vel orci. Fusce et libero turpis. Sed vel ullamcorper Donec quis dapibus diam. Curabitur eu lacus posuere, venenatis tortor eget, hendrerit arcu. ",e.appendChild(t),e.appendChild(n),e.appendChild(i),content.appendChild(e)}(),function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p"),i=document.createElement("p");e.id="contact",e.className="option",e.style.display="none",t.id="headline",t.textContent="Contact",n.textContent="Whatsapp: +55 11 96546-3213",i.textContent="Instagram: @CantinaLatinaMagnificat",e.appendChild(t),e.appendChild(n),e.appendChild(i),content.appendChild(e)}()}]);