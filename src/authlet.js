// global function
function Authlet() {

    /* Add SpinJS for spinner */

    (function(k,f){"object"==typeof exports?module.exports=f():"function"==typeof define&&define.amd?define(f):k.Spinner=f()})(this,function(){function k(c,a){var b=document.createElement(c||"div"),d;for(d in a)b[d]=a[d];return b}function f(c){for(var a=1,b=arguments.length;a<b;a++)c.appendChild(arguments[a]);return c}function x(c,a,b,d){var e=["opacity",a,~~(100*c),b,d].join("-");b=.01+b/d*100;d=Math.max(1-(1-c)/a*(100-b),c);var h=n.substring(0,n.indexOf("Animation")).toLowerCase();t[e]||(p.insertRule("@"+
    (h&&"-"+h+"-"||"")+"keyframes "+e+"{0%{opacity:"+d+"}"+b+"%{opacity:"+c+"}"+(b+.01)+"%{opacity:1}"+(b+a)%100+"%{opacity:"+c+"}100%{opacity:"+d+"}}",p.cssRules.length),t[e]=1);return e}function q(c,a){var b=c.style,d,e;a=a.charAt(0).toUpperCase()+a.slice(1);for(e=0;e<u.length;e++)if(d=u[e]+a,void 0!==b[d])return d;if(void 0!==b[a])return a}function l(c,a){for(var b in a)c.style[q(c,b)||b]=a[b];return c}function v(c){for(var a=1;a<arguments.length;a++){var b=arguments[a],d;for(d in b)void 0===c[d]&&
    (c[d]=b[d])}return c}function w(c,a){return"string"==typeof c?c:c[a%c.length]}function m(c){this.opts=v(c||{},m.defaults,y)}function z(){function c(a,b){return k("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',b)}p.addRule(".spin-vml","behavior:url(#default#VML)");m.prototype.lines=function(a,b){function d(){return l(c("group",{coordsize:r+" "+r,coordorigin:-h+" "+-h}),{width:r,height:r})}function e(a,e,g){f(k,f(l(d(),{rotation:360/b.lines*a+"deg",left:~~e}),f(l(c("roundrect",{arcsize:b.corners}),
    {width:h,height:b.width,left:b.radius,top:-b.width>>1,filter:g}),c("fill",{color:w(b.color,a),opacity:b.opacity}),c("stroke",{opacity:0}))))}var h=b.length+b.width,r=2*h,g=2*-(b.width+b.length)+"px",k=l(d(),{position:"absolute",top:g,left:g});if(b.shadow)for(g=1;g<=b.lines;g++)e(g,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(g=1;g<=b.lines;g++)e(g);return f(a,k)};m.prototype.opacity=function(a,b,c,e){a=a.firstChild;e=e.shadow&&e.lines||0;a&&b+e<a.childNodes.length&&
    (a=(a=(a=a.childNodes[b+e])&&a.firstChild)&&a.firstChild)&&(a.opacity=c)}}var u=["webkit","Moz","ms","O"],t={},n,p=function(){var c=k("style",{type:"text/css"});f(document.getElementsByTagName("head")[0],c);return c.sheet||c.styleSheet}(),y={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2E9,className:"spinner",top:"50%",left:"50%",position:"absolute"};m.defaults={};v(m.prototype,{spin:function(c){this.stop();var a=this,
    b=a.opts,d=a.el=l(k(0,{className:b.className}),{position:b.position,width:0,zIndex:b.zIndex});l(d,{left:b.left,top:b.top});c&&c.insertBefore(d,c.firstChild||null);d.setAttribute("role","progressbar");a.lines(d,a.opts);if(!n){var e=0,h=(b.lines-1)*(1-b.direction)/2,f,g=b.fps,m=g/b.speed,p=(1-b.opacity)/(m*b.trail/100),q=m/b.lines;(function A(){e++;for(var c=0;c<b.lines;c++)f=Math.max(1-(e+(b.lines-c)*q)%m*p,b.opacity),a.opacity(d,c*b.direction+h,f,b);a.timeout=a.el&&setTimeout(A,~~(1E3/g))})()}return a},
    stop:function(){var c=this.el;c&&(clearTimeout(this.timeout),c.parentNode&&c.parentNode.removeChild(c),this.el=void 0);return this},lines:function(c,a){function b(b,c){return l(k(),{position:"absolute",width:a.length+a.width+"px",height:a.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/a.lines*d+a.rotate)+"deg) translate("+a.radius+"px,0)",borderRadius:(a.corners*a.width>>1)+"px"})}for(var d=0,e=(a.lines-1)*(1-a.direction)/2,h;d<a.lines;d++)h=l(k(),{position:"absolute",
    top:1+~(a.width/2)+"px",transform:a.hwaccel?"translate3d(0,0,0)":"",opacity:a.opacity,animation:n&&x(a.opacity,a.trail,e+d*a.direction,a.lines)+" "+1/a.speed+"s linear infinite"}),a.shadow&&f(h,l(b("#000","0 0 4px #000"),{top:"2px"})),f(c,f(h,b(w(a.color,d),"0 0 1px rgba(0,0,0,.1)")));return c},opacity:function(c,a,b){a<c.childNodes.length&&(c.childNodes[a].style.opacity=b)}});var s=l(k("group"),{behavior:"url(#default#VML)"});!q(s,"transform")&&s.adj?z():n=q(s,"animation");return m});

    /* Add the jsSHA library. */

    var SUPPORTED_ALGS=7;(function(S){function s(a,c){this.highOrder=a;this.lowOrder=c}function E(a,c){var b=[],g,f=[],h=0,l;if("UTF8"===c)for(l=0;l<a.length;l+=1)for(g=a.charCodeAt(l),f=[],2048<g?(f[0]=224|(g&61440)>>>12,f[1]=128|(g&4032)>>>6,f[2]=128|g&63):128<g?(f[0]=192|(g&1984)>>>6,f[1]=128|g&63):f[0]=g,g=0;g<f.length;g+=1)b[h>>>2]|=f[g]<<24-h%4*8,h+=1;else if("UTF16"===c)for(l=0;l<a.length;l+=1)a.charCodeAt(l),b[h>>>2]|=a.charCodeAt(l)<<16-h%4*8,h+=2;return{value:b,binLen:8*h}}function L(a){var c=[],b=a.length,g,f;
    if(0!==b%2)throw"String of HEX type must be in byte increments";for(g=0;g<b;g+=2){f=parseInt(a.substr(g,2),16);if(isNaN(f))throw"String of HEX type contains invalid characters";c[g>>>3]|=f<<24-g%8*4}return{value:c,binLen:4*b}}function M(a){var c=[],b=0,g,f,h,l,r;if(-1===a.search(/^[a-zA-Z0-9=+\/]+$/))throw"Invalid character in base-64 string";g=a.indexOf("=");a=a.replace(/\=/g,"");if(-1!==g&&g<a.length)throw"Invalid '=' found in base-64 string";for(f=0;f<a.length;f+=4){r=a.substr(f,4);for(h=l=0;h<
    r.length;h+=1)g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(r[h]),l|=g<<18-6*h;for(h=0;h<r.length-1;h+=1)c[b>>2]|=(l>>>16-8*h&255)<<24-b%4*8,b+=1}return{value:c,binLen:8*b}}function N(a,c){var b="",g=4*a.length,f,h;for(f=0;f<g;f+=1)h=a[f>>>2]>>>8*(3-f%4),b+="0123456789abcdef".charAt(h>>>4&15)+"0123456789abcdef".charAt(h&15);return c.outputUpper?b.toUpperCase():b}function O(a,c){var b="",g=4*a.length,f,h,l;for(f=0;f<g;f+=3)for(l=(a[f>>>2]>>>8*(3-f%4)&255)<<16|(a[f+1>>>
    2]>>>8*(3-(f+1)%4)&255)<<8|a[f+2>>>2]>>>8*(3-(f+2)%4)&255,h=0;4>h;h+=1)b=8*f+6*h<=32*a.length?b+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(l>>>6*(3-h)&63):b+c.b64Pad;return b}function P(a){var c={outputUpper:!1,b64Pad:"="};try{a.hasOwnProperty("outputUpper")&&(c.outputUpper=a.outputUpper),a.hasOwnProperty("b64Pad")&&(c.b64Pad=a.b64Pad)}catch(b){}if("boolean"!==typeof c.outputUpper)throw"Invalid outputUpper formatting option";if("string"!==typeof c.b64Pad)throw"Invalid b64Pad formatting option";
    return c}function x(a,c){return a<<c|a>>>32-c}function u(a,c){return a>>>c|a<<32-c}function t(a,c){var b=null,b=new s(a.highOrder,a.lowOrder);return b=32>=c?new s(b.highOrder>>>c|b.lowOrder<<32-c&4294967295,b.lowOrder>>>c|b.highOrder<<32-c&4294967295):new s(b.lowOrder>>>c-32|b.highOrder<<64-c&4294967295,b.highOrder>>>c-32|b.lowOrder<<64-c&4294967295)}function Q(a,c){var b=null;return b=32>=c?new s(a.highOrder>>>c,a.lowOrder>>>c|a.highOrder<<32-c&4294967295):new s(0,a.highOrder>>>c-32)}function T(a,
    c,b){return a&c^~a&b}function U(a,c,b){return new s(a.highOrder&c.highOrder^~a.highOrder&b.highOrder,a.lowOrder&c.lowOrder^~a.lowOrder&b.lowOrder)}function R(a,c,b){return a&c^a&b^c&b}function V(a,c,b){return new s(a.highOrder&c.highOrder^a.highOrder&b.highOrder^c.highOrder&b.highOrder,a.lowOrder&c.lowOrder^a.lowOrder&b.lowOrder^c.lowOrder&b.lowOrder)}function W(a){return u(a,2)^u(a,13)^u(a,22)}function X(a){var c=t(a,28),b=t(a,34);a=t(a,39);return new s(c.highOrder^b.highOrder^a.highOrder,c.lowOrder^
    b.lowOrder^a.lowOrder)}function Y(a){return u(a,6)^u(a,11)^u(a,25)}function Z(a){var c=t(a,14),b=t(a,18);a=t(a,41);return new s(c.highOrder^b.highOrder^a.highOrder,c.lowOrder^b.lowOrder^a.lowOrder)}function $(a){return u(a,7)^u(a,18)^a>>>3}function aa(a){var c=t(a,1),b=t(a,8);a=Q(a,7);return new s(c.highOrder^b.highOrder^a.highOrder,c.lowOrder^b.lowOrder^a.lowOrder)}function ba(a){return u(a,17)^u(a,19)^a>>>10}function ca(a){var c=t(a,19),b=t(a,61);a=Q(a,6);return new s(c.highOrder^b.highOrder^a.highOrder,
    c.lowOrder^b.lowOrder^a.lowOrder)}function C(a,c){var b=(a&65535)+(c&65535);return((a>>>16)+(c>>>16)+(b>>>16)&65535)<<16|b&65535}function da(a,c,b,g){var f=(a&65535)+(c&65535)+(b&65535)+(g&65535);return((a>>>16)+(c>>>16)+(b>>>16)+(g>>>16)+(f>>>16)&65535)<<16|f&65535}function F(a,c,b,g,f){var h=(a&65535)+(c&65535)+(b&65535)+(g&65535)+(f&65535);return((a>>>16)+(c>>>16)+(b>>>16)+(g>>>16)+(f>>>16)+(h>>>16)&65535)<<16|h&65535}function ea(a,c){var b,g,f;b=(a.lowOrder&65535)+(c.lowOrder&65535);g=(a.lowOrder>>>
    16)+(c.lowOrder>>>16)+(b>>>16);f=(g&65535)<<16|b&65535;b=(a.highOrder&65535)+(c.highOrder&65535)+(g>>>16);g=(a.highOrder>>>16)+(c.highOrder>>>16)+(b>>>16);return new s((g&65535)<<16|b&65535,f)}function fa(a,c,b,g){var f,h,l;f=(a.lowOrder&65535)+(c.lowOrder&65535)+(b.lowOrder&65535)+(g.lowOrder&65535);h=(a.lowOrder>>>16)+(c.lowOrder>>>16)+(b.lowOrder>>>16)+(g.lowOrder>>>16)+(f>>>16);l=(h&65535)<<16|f&65535;f=(a.highOrder&65535)+(c.highOrder&65535)+(b.highOrder&65535)+(g.highOrder&65535)+(h>>>16);h=
    (a.highOrder>>>16)+(c.highOrder>>>16)+(b.highOrder>>>16)+(g.highOrder>>>16)+(f>>>16);return new s((h&65535)<<16|f&65535,l)}function ga(a,c,b,g,f){var h,l,r;h=(a.lowOrder&65535)+(c.lowOrder&65535)+(b.lowOrder&65535)+(g.lowOrder&65535)+(f.lowOrder&65535);l=(a.lowOrder>>>16)+(c.lowOrder>>>16)+(b.lowOrder>>>16)+(g.lowOrder>>>16)+(f.lowOrder>>>16)+(h>>>16);r=(l&65535)<<16|h&65535;h=(a.highOrder&65535)+(c.highOrder&65535)+(b.highOrder&65535)+(g.highOrder&65535)+(f.highOrder&65535)+(l>>>16);l=(a.highOrder>>>
    16)+(c.highOrder>>>16)+(b.highOrder>>>16)+(g.highOrder>>>16)+(f.highOrder>>>16)+(h>>>16);return new s((l&65535)<<16|h&65535,r)}function z(a,c){var b=[],g,f,h,l,r,A,y,p,s,d=[1732584193,4023233417,2562383102,271733878,3285377520];a[c>>>5]|=128<<24-c%32;a[(c+65>>>9<<4)+15]=c;s=a.length;for(y=0;y<s;y+=16){g=d[0];f=d[1];h=d[2];l=d[3];r=d[4];for(p=0;80>p;p+=1)b[p]=16>p?a[p+y]:x(b[p-3]^b[p-8]^b[p-14]^b[p-16],1),A=20>p?F(x(g,5),f&h^~f&l,r,1518500249,b[p]):40>p?F(x(g,5),f^h^l,r,1859775393,b[p]):60>p?F(x(g,
    5),R(f,h,l),r,2400959708,b[p]):F(x(g,5),f^h^l,r,3395469782,b[p]),r=l,l=h,h=x(f,30),f=g,g=A;d[0]=C(g,d[0]);d[1]=C(f,d[1]);d[2]=C(h,d[2]);d[3]=C(l,d[3]);d[4]=C(r,d[4])}return d}function w(a,c,b){var g,f,h,l,r,A,y,p,u,d,m,n,q,t,G,v,w,x,z,B,H,I,J,K,e,D=[],E,k=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,
    1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];d=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,
    1694076839,3204075428];f=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];if(("SHA-224"===b||"SHA-256"===b)&&2&SUPPORTED_ALGS)m=64,g=(c+65>>>9<<4)+15,t=16,G=1,e=Number,v=C,w=da,x=F,z=$,B=ba,H=W,I=Y,K=R,J=T,d="SHA-224"===b?d:f;else if(("SHA-384"===b||"SHA-512"===b)&&4&SUPPORTED_ALGS)m=80,g=(c+128>>>10<<5)+31,t=32,G=2,e=s,v=ea,w=fa,x=ga,z=aa,B=ca,H=X,I=Z,K=V,J=U,k=[new e(k[0],3609767458),new e(k[1],602891725),new e(k[2],3964484399),new e(k[3],2173295548),new e(k[4],
    4081628472),new e(k[5],3053834265),new e(k[6],2937671579),new e(k[7],3664609560),new e(k[8],2734883394),new e(k[9],1164996542),new e(k[10],1323610764),new e(k[11],3590304994),new e(k[12],4068182383),new e(k[13],991336113),new e(k[14],633803317),new e(k[15],3479774868),new e(k[16],2666613458),new e(k[17],944711139),new e(k[18],2341262773),new e(k[19],2007800933),new e(k[20],1495990901),new e(k[21],1856431235),new e(k[22],3175218132),new e(k[23],2198950837),new e(k[24],3999719339),new e(k[25],766784016),
    new e(k[26],2566594879),new e(k[27],3203337956),new e(k[28],1034457026),new e(k[29],2466948901),new e(k[30],3758326383),new e(k[31],168717936),new e(k[32],1188179964),new e(k[33],1546045734),new e(k[34],1522805485),new e(k[35],2643833823),new e(k[36],2343527390),new e(k[37],1014477480),new e(k[38],1206759142),new e(k[39],344077627),new e(k[40],1290863460),new e(k[41],3158454273),new e(k[42],3505952657),new e(k[43],106217008),new e(k[44],3606008344),new e(k[45],1432725776),new e(k[46],1467031594),
    new e(k[47],851169720),new e(k[48],3100823752),new e(k[49],1363258195),new e(k[50],3750685593),new e(k[51],3785050280),new e(k[52],3318307427),new e(k[53],3812723403),new e(k[54],2003034995),new e(k[55],3602036899),new e(k[56],1575990012),new e(k[57],1125592928),new e(k[58],2716904306),new e(k[59],442776044),new e(k[60],593698344),new e(k[61],3733110249),new e(k[62],2999351573),new e(k[63],3815920427),new e(3391569614,3928383900),new e(3515267271,566280711),new e(3940187606,3454069534),new e(4118630271,
    4000239992),new e(116418474,1914138554),new e(174292421,2731055270),new e(289380356,3203993006),new e(460393269,320620315),new e(685471733,587496836),new e(852142971,1086792851),new e(1017036298,365543100),new e(1126000580,2618297676),new e(1288033470,3409855158),new e(1501505948,4234509866),new e(1607167915,987167468),new e(1816402316,1246189591)],d="SHA-384"===b?[new e(3418070365,d[0]),new e(1654270250,d[1]),new e(2438529370,d[2]),new e(355462360,d[3]),new e(1731405415,d[4]),new e(41048885895,d[5]),
    new e(3675008525,d[6]),new e(1203062813,d[7])]:[new e(f[0],4089235720),new e(f[1],2227873595),new e(f[2],4271175723),new e(f[3],1595750129),new e(f[4],2917565137),new e(f[5],725511199),new e(f[6],4215389547),new e(f[7],327033209)];else throw"Unexpected error in SHA-2 implementation";a[c>>>5]|=128<<24-c%32;a[g]=c;E=a.length;for(n=0;n<E;n+=t){c=d[0];g=d[1];f=d[2];h=d[3];l=d[4];r=d[5];A=d[6];y=d[7];for(q=0;q<m;q+=1)D[q]=16>q?new e(a[q*G+n],a[q*G+n+1]):w(B(D[q-2]),D[q-7],z(D[q-15]),D[q-16]),p=x(y,I(l),
    J(l,r,A),k[q],D[q]),u=v(H(c),K(c,g,f)),y=A,A=r,r=l,l=v(h,p),h=f,f=g,g=c,c=v(p,u);d[0]=v(c,d[0]);d[1]=v(g,d[1]);d[2]=v(f,d[2]);d[3]=v(h,d[3]);d[4]=v(l,d[4]);d[5]=v(r,d[5]);d[6]=v(A,d[6]);d[7]=v(y,d[7])}if("SHA-224"===b&&2&SUPPORTED_ALGS)a=[d[0],d[1],d[2],d[3],d[4],d[5],d[6]];else if("SHA-256"===b&&2&SUPPORTED_ALGS)a=d;else if("SHA-384"===b&&4&SUPPORTED_ALGS)a=[d[0].highOrder,d[0].lowOrder,d[1].highOrder,d[1].lowOrder,d[2].highOrder,d[2].lowOrder,d[3].highOrder,d[3].lowOrder,d[4].highOrder,d[4].lowOrder,
    d[5].highOrder,d[5].lowOrder];else if("SHA-512"===b&&4&SUPPORTED_ALGS)a=[d[0].highOrder,d[0].lowOrder,d[1].highOrder,d[1].lowOrder,d[2].highOrder,d[2].lowOrder,d[3].highOrder,d[3].lowOrder,d[4].highOrder,d[4].lowOrder,d[5].highOrder,d[5].lowOrder,d[6].highOrder,d[6].lowOrder,d[7].highOrder,d[7].lowOrder];else throw"Unexpected error in SHA-2 implementation";return a}var B=function(a,c,b){var g=0,f=[0],h="",l=null,h=b||"UTF8";if("UTF8"!==h&&"UTF16"!==h)throw"encoding must be UTF8 or UTF16";if("HEX"===
    c){if(0!==a.length%2)throw"srcString of HEX type must be in byte increments";l=L(a);g=l.binLen;f=l.value}else if("ASCII"===c||"TEXT"===c)l=E(a,h),g=l.binLen,f=l.value;else if("B64"===c)l=M(a),g=l.binLen,f=l.value;else throw"inputFormat must be HEX, TEXT, ASCII, or B64";this.getHash=function(a,c,b,h){var l=null,d=f.slice(),m=g,n;3===arguments.length?"number"!==typeof b&&(h=b,b=1):2===arguments.length&&(b=1);if(b!==parseInt(b,10)||1>b)throw"numRounds must a integer >= 1";switch(c){case "HEX":l=N;break;
    case "B64":l=O;break;default:throw"format must be HEX or B64";}if("SHA-1"===a&&1&SUPPORTED_ALGS)for(n=0;n<b;n++)d=z(d,m),m=160;else if("SHA-224"===a&&2&SUPPORTED_ALGS)for(n=0;n<b;n++)d=w(d,m,a),m=224;else if("SHA-256"===a&&2&SUPPORTED_ALGS)for(n=0;n<b;n++)d=w(d,m,a),m=256;else if("SHA-384"===a&&4&SUPPORTED_ALGS)for(n=0;n<b;n++)d=w(d,m,a),m=384;else if("SHA-512"===a&&4&SUPPORTED_ALGS)for(n=0;n<b;n++)d=w(d,m,a),m=512;else throw"Chosen SHA variant is not supported";return l(d,P(h))};this.getHMAC=function(a,
    b,c,l,s){var d,m,n,q,t=[],u=[];d=null;switch(l){case "HEX":l=N;break;case "B64":l=O;break;default:throw"outputFormat must be HEX or B64";}if("SHA-1"===c&&1&SUPPORTED_ALGS)m=64,q=160;else if("SHA-224"===c&&2&SUPPORTED_ALGS)m=64,q=224;else if("SHA-256"===c&&2&SUPPORTED_ALGS)m=64,q=256;else if("SHA-384"===c&&4&SUPPORTED_ALGS)m=128,q=384;else if("SHA-512"===c&&4&SUPPORTED_ALGS)m=128,q=512;else throw"Chosen SHA variant is not supported";if("HEX"===b)d=L(a),n=d.binLen,d=d.value;else if("ASCII"===b||"TEXT"===
    b)d=E(a,h),n=d.binLen,d=d.value;else if("B64"===b)d=M(a),n=d.binLen,d=d.value;else throw"inputFormat must be HEX, TEXT, ASCII, or B64";a=8*m;b=m/4-1;if(m<n/8){if("SHA-1"===c&&1&SUPPORTED_ALGS)d=z(d,n);else if(6&SUPPORTED_ALGS)d=w(d,n,c);else throw"Unexpected error in HMAC implementation";d[b]&=4294967040}else m>n/8&&(d[b]&=4294967040);for(m=0;m<=b;m+=1)t[m]=d[m]^909522486,u[m]=d[m]^1549556828;if("SHA-1"===c&&1&SUPPORTED_ALGS)c=z(u.concat(z(t.concat(f),a+g)),a+q);else if(6&SUPPORTED_ALGS)c=w(u.concat(w(t.concat(f),
    a+g,c)),a+q,c);else throw"Unexpected error in HMAC implementation";return l(c,P(s))}};"function"===typeof define&&typeof define.amd?define(function(){return B}):"undefined"!==typeof exports?"undefined"!==typeof module&&module.exports?module.exports=exports=B:exports=B:S.jsSHA=B})(this);

    /* Helper functions. */

    function dec2hex(s) { return (s < 15.5 ? '0' : '') + Math.round(s).toString(16); }
    function hex2dec(s) { return parseInt(s, 16); }

    function base32tohex(base32) {
        var base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        var bits = "";
        var hex = "";

        for (var i = 0; i < base32.length; i++) {
            var val = base32chars.indexOf(base32.charAt(i).toUpperCase());
            bits += leftpad(val.toString(2), 5, '0');
        }

        for (var i = 0; i+4 <= bits.length; i+=4) {
            var chunk = bits.substr(i, 4);
            hex = hex + parseInt(chunk, 2).toString(16) ;
        }
        return hex;

    }

    function leftpad(str, len, pad) {
        if (len + 1 >= str.length) {
            str = Array(len + 1 - str.length).join(pad) + str;
        }
        return str;
    }

    /* Generate one time password based on Google's protocol. */

    function updateOTP(timeCur, secret) {
        var key = base32tohex(secret);
        var epoch = Math.round(timeCur.getTime() / 1000.0);
        var time = leftpad(dec2hex(Math.floor(epoch / 30)), 16, '0');

        var hmacObj = new jsSHA(time, 'HEX');
        var hmac = hmacObj.getHMAC(key, 'HEX', 'SHA-1', "HEX");

        var offset = hex2dec(hmac.substring(hmac.length - 1));
        var part1 = hmac.substr(0, offset * 2);
        var part2 = hmac.substr(offset * 2, 8);
        var part3 = hmac.substr(offset * 2 + 8, hmac.length - offset);

        var otp = (hex2dec(hmac.substr(offset * 2, 8)) & hex2dec('7fffffff')) + '';
        otp = (otp).substr(otp.length - 6, 6);
        
        return otp;
    }

    /* Get the accurate time from the server response. */

    function getGlobTime(json) {
        //this will end up synchronous
        var xhr = new XMLHttpRequest();
        
        // add unique timestamp to URL parameters to bypass cache and acquire the unique global time
        var url = window.location.protocol + '//' + window.location.host + window.location.pathname
        xhr.open('HEAD', url + ((/\?/).test(url) ? '&' : '?') + (new Date()).getTime(), false);
        
        xhr.send(); // request the server or global time
        spinner.stop(); // stop spin and remove DOM element
        return new Date(xhr.getResponseHeader('Date'));
    };

    /* Processes the output code based on user preference. */

    function processOTP(code) {
        if (codeInput === defaultID) { alert(code); } // just alert code if not specified
        else if (typeof codeInput != 'string') { codeInput.value = code; } // auto-detection
        else { document.getElementById(codeInput).value = code; } // manually entered element
    }

    /* Define options for setting up Authlet. */

    // replace with OTP key
    var keyOTP = 'CHANGEME';

    // set DOM element ID into which code is inserted
    var defaultID = 'DEFAULTID' // set this for process
    var codeInput = 'DEFAULTID' // defaults to alert

    /* Configure our dynamic spinner in slow mode. */

    var options = {
        lines: 13, // The number of lines to draw
        length: 20, // The length of each line
        width: 10, // The line thickness
        radius: 30, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '50%', // Top position relative to parent
        left: '50%' // Left position relative to parent
    };

    /* Try to discover active element and then initialize. */

    if (document.activeElement.tagName === 'INPUT') {
        codeInput = document.activeElement;
    }

    var spinner = new Spinner(options).spin(document.body);
    processOTP(updateOTP(getGlobTime(), keyOTP)); //run me

// call this   
}; Authlet();