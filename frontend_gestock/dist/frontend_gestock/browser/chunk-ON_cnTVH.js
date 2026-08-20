import{n as s,t as r}from"./chunk-DFgPOoGa.js";var Cp=0;var Ju=1;var Rp=2;var ao=1;var Pp=2;var ta=3;var tr=0;var Pn=1;var Bi=2;var zi=0;var ns=1;var $u=2;var Ku=3;var Qu=4;var Ip=5;var Er=100;var Dp=101;var Lp=102;var Np=103;var Up=104;var Fp=200;var Op=201;var Bp=202;var zp=203;var Sl=204;var bl=205;var kp=206;var Vp=207;var Gp=208;var Hp=209;var Wp=210;var Xp=211;var qp=212;var Yp=213;var Zp=214;var Tl=0;var wl=1;var El=2;var is=3;var Al=4;var Cl=5;var Rl=6;var Pl=7;var ju=0;var Jp=1;var $p=2;var wi=0;var ef=1;var tf=2;var nf=3;var rf=4;var sf=5;var af=6;var of=7;var yu=300;var Ir=301;var as=302;var uc=303;var fc=304;var oo=306;var Il=1e3;var Ni=1001;var Dl=1002;var on=1003;var Kp=1004;var lo=1005;var hn=1006;var dc=1007;var Dr=1008;var kn=1009;var lf=1010;var cf=1011;var na=1012;var pc=1013;var Ei=1014;var Ai=1015;var ki=1016;var mc=1017;var gc=1018;var ia=1020;var hf=35902;var uf=35899;var ff=1021;var df=1022;var di=1023;var Ui=1026;var Lr=1027;var pf=1028;var _c=1029;var Nr=1030;var xc=1031;var vc=1033;var co=33776;var ho=33777;var uo=33778;var fo=33779;var yc=35840;var Mc=35841;var Sc=35842;var bc=35843;var Tc=36196;var wc=37492;var Ec=37496;var Ac=37488;var Cc=37489;var po=37490;var Rc=37491;var Pc=37808;var Ic=37809;var Dc=37810;var Lc=37811;var Nc=37812;var Uc=37813;var Fc=37814;var Oc=37815;var Bc=37816;var zc=37817;var kc=37818;var Vc=37819;var Gc=37820;var Hc=37821;var Wc=36492;var Xc=36494;var qc=36495;var Yc=36283;var Zc=36284;var mo=36285;var Jc=36286;var Oa=2300;var Ll=2301;var Ml=2302;var Mu=2303;var Su=2400;var bu=2401;var Tu=2402;var Qp=3200;var $c=0;var jp=1;var rr=``;var Jn=`srgb`;var Ba=`srgb-linear`;var za=`linear`;var gt=`srgb`;var Qr=7680;var wu=519;var em=512;var tm=513;var nm=514;var Kc=515;var im=516;var rm=517;var Qc=518;var sm=519;var Eu=35044;var mf=`300 es`;var bi=2e3;var Ws=2001;function V_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function G_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ka(r){return document.createElementNS(`http://www.w3.org/1999/xhtml`,r)}function am(){let r=ka(`canvas`);return r.style.display=`block`,r}var ep={};var Xs=null;function gf(...r){let e=`THREE.`+r.shift();Xs?Xs(`log`,e,...r):console.log(e,...r)}function om(r){let e=r[0];if(typeof e==`string`&&e.startsWith(`TSL:`)){let t=r[1];t&&t.isStackTrace?r[0]+=` `+t.getLocation():r[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return r}function Ze(...r){r=om(r);let e=`THREE.`+r.shift();if(Xs)Xs(`warn`,e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ke(...r){r=om(r);let e=`THREE.`+r.shift();if(Xs)Xs(`error`,e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ts(...r){let e=r.join(` `);e in ep||(ep[e]=!0,Ze(...r))}function lm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var cm={[Tl]:wl,[El]:Rl,[Al]:Pl,[is]:Cl,[wl]:Tl,[Rl]:El,[Pl]:Al,[Cl]:is};var Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}};var gn=[`00`,`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`0a`,`0b`,`0c`,`0d`,`0e`,`0f`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`1a`,`1b`,`1c`,`1d`,`1e`,`1f`,`20`,`21`,`22`,`23`,`24`,`25`,`26`,`27`,`28`,`29`,`2a`,`2b`,`2c`,`2d`,`2e`,`2f`,`30`,`31`,`32`,`33`,`34`,`35`,`36`,`37`,`38`,`39`,`3a`,`3b`,`3c`,`3d`,`3e`,`3f`,`40`,`41`,`42`,`43`,`44`,`45`,`46`,`47`,`48`,`49`,`4a`,`4b`,`4c`,`4d`,`4e`,`4f`,`50`,`51`,`52`,`53`,`54`,`55`,`56`,`57`,`58`,`59`,`5a`,`5b`,`5c`,`5d`,`5e`,`5f`,`60`,`61`,`62`,`63`,`64`,`65`,`66`,`67`,`68`,`69`,`6a`,`6b`,`6c`,`6d`,`6e`,`6f`,`70`,`71`,`72`,`73`,`74`,`75`,`76`,`77`,`78`,`79`,`7a`,`7b`,`7c`,`7d`,`7e`,`7f`,`80`,`81`,`82`,`83`,`84`,`85`,`86`,`87`,`88`,`89`,`8a`,`8b`,`8c`,`8d`,`8e`,`8f`,`90`,`91`,`92`,`93`,`94`,`95`,`96`,`97`,`98`,`99`,`9a`,`9b`,`9c`,`9d`,`9e`,`9f`,`a0`,`a1`,`a2`,`a3`,`a4`,`a5`,`a6`,`a7`,`a8`,`a9`,`aa`,`ab`,`ac`,`ad`,`ae`,`af`,`b0`,`b1`,`b2`,`b3`,`b4`,`b5`,`b6`,`b7`,`b8`,`b9`,`ba`,`bb`,`bc`,`bd`,`be`,`bf`,`c0`,`c1`,`c2`,`c3`,`c4`,`c5`,`c6`,`c7`,`c8`,`c9`,`ca`,`cb`,`cc`,`cd`,`ce`,`cf`,`d0`,`d1`,`d2`,`d3`,`d4`,`d5`,`d6`,`d7`,`d8`,`d9`,`da`,`db`,`dc`,`dd`,`de`,`df`,`e0`,`e1`,`e2`,`e3`,`e4`,`e5`,`e6`,`e7`,`e8`,`e9`,`ea`,`eb`,`ec`,`ed`,`ee`,`ef`,`f0`,`f1`,`f2`,`f3`,`f4`,`f5`,`f6`,`f7`,`f8`,`f9`,`fa`,`fb`,`fc`,`fd`,`fe`,`ff`];var Yh=Math.PI/180;var Nl=180/Math.PI;function ra(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+`-`+gn[e&255]+gn[e>>8&255]+`-`+gn[e>>16&15|64]+gn[e>>24&255]+`-`+gn[t&63|128]+gn[t>>8&255]+`-`+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function H_(r,e){return(r%e+e)%e}function Zh(r,e,t){return(1-t)*r+t*e}function Ra(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error(`THREE.MathUtils: Invalid component type.`)}}function zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error(`THREE.MathUtils: Invalid component type.`)}}var Se=class r{static{r.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var Oi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],p=s[a+2],_=s[a+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){let M=Math.acos(m),S=Math.sin(M);g=Math.sin(g*M)/S,o=Math.sin(o*M)/S,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+_*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+_*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-o*f,e[t+2]=c*p+h*f+o*u-l*d,e[t+3]=h*p-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),p=l(s/2);switch(a){case`XYZ`:this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case`YXZ`:this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case`ZXY`:this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case`ZYX`:this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case`YZX`:this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case`XZY`:this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Ze(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var O=class r{static{r.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jh.copy(this).projectOnVector(e),this.sub(Jh)}reflect(e){return this.sub(Jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};var Jh=new O;var tp=new Oi;var et=class r{static{r.prototype.isMatrix3=!0}constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],M=i[1],S=i[4],v=i[7],T=i[2],w=i[5],E=i[8];return s[0]=a*_+o*M+l*T,s[3]=a*m+o*S+l*w,s[6]=a*g+o*v+l*E,s[1]=c*_+h*M+d*T,s[4]=c*m+h*S+d*w,s[7]=c*g+h*v+d*E,s[2]=u*_+f*M+p*T,s[5]=u*m+f*S+p*w,s[8]=u*g+f*v+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,p=t*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ts(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply($h.makeScale(e,t)),this}rotate(e){return ts(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply($h.makeRotation(-e)),this}translate(e,t){return ts(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply($h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};var $h=new et;var np=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322);var ip=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W_(){let r={enabled:!0,workingColorSpace:Ba,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===gt&&(i.r=er(i.r),i.g=er(i.g),i.b=er(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===rr?za:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ts(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ts(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ba]:{primaries:e,whitePoint:n,transfer:za,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),r}var ut=W_();function er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Is;var Ul=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=ka(`canvas`)),Is.width=e.width,Is.height=e.height;let i=Is.getContext(`2d`);e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ka(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=er(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}};var X_=0;var qs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Kh(i[a].image)):s.push(Kh(i[a]))}else s=Kh(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Kh(r){return typeof HTMLImageElement<`u`&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&r instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&r instanceof ImageBitmap?Ul.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ze(`Texture: Unable to serialize Texture.`),{})}var q_=0;var Qh=new O;var sr=(()=>{class r extends Fi{constructor(t=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=Ni,s=Ni,a=hn,o=Dr,l=di,c=kn,h=r.DEFAULT_ANISOTROPY,d=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=ra(),this.name=``,this.source=new qs(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qh).x}get height(){return this.source.getSize(Qh).y}get depth(){return this.source.getSize(Qh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ze(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t==`string`;if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Il:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Il:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return r.DEFAULT_IMAGE=null,r.DEFAULT_MAPPING=yu,r.DEFAULT_ANISOTROPY=1,r})();var It=class r{static{r.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(f+1)/2,T=(g+1)/2,w=(h+u)/4,E=(d+_)/4,x=(p+m)/4;return S>v&&S>T?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=E/n):v>T?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=x/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=E/s,i=x/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var Fl=class extends Fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s=new sr({width:e,height:t,depth:n.depth}),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new qs(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}};var Kn=class extends Fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};var Va=class extends sr{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ol=class extends sr{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pt=class r{static{r.prototype.isMatrix4=!0}constructor(e,t,n,i,s,a,o,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,u,f,p,_,m)}set(e,t,n,i,s,a,o,l,c,h,d,u,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order===`XYZ`){let u=a*h,f=a*d,p=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order===`YXZ`){let u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+u*o,t[10]=a*l}else if(e.order===`ZXY`){let u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order===`ZYX`){let u=a*h,f=a*d,p=o*h,_=o*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order===`YZX`){let u=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-_*d}else if(e.order===`XZY`){let u=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y_,e,Z_)}lookAt(e,t,n){let i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),vr.crossVectors(n,Yn),vr.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),vr.crossVectors(n,Yn)),vr.normalize(),Ko.crossVectors(Yn,vr),i[0]=vr.x,i[4]=Ko.x,i[8]=Yn.x,i[1]=vr.y,i[5]=Ko.y,i[9]=Yn.y,i[2]=vr.z,i[6]=Ko.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],M=n[3],S=n[7],v=n[11],T=n[15],w=i[0],E=i[4],x=i[8],b=i[12],C=i[1],P=i[5],I=i[9],H=i[13],V=i[2],F=i[6],G=i[10],B=i[14],Z=i[3],te=i[7],D=i[11],oe=i[15];return s[0]=a*w+o*C+l*V+c*Z,s[4]=a*E+o*P+l*F+c*te,s[8]=a*x+o*I+l*G+c*D,s[12]=a*b+o*H+l*B+c*oe,s[1]=h*w+d*C+u*V+f*Z,s[5]=h*E+d*P+u*F+f*te,s[9]=h*x+d*I+u*G+f*D,s[13]=h*b+d*H+u*B+f*oe,s[2]=p*w+_*C+m*V+g*Z,s[6]=p*E+_*P+m*F+g*te,s[10]=p*x+_*I+m*G+g*D,s[14]=p*b+_*H+m*B+g*oe,s[3]=M*w+S*C+v*V+T*Z,s[7]=M*E+S*P+v*F+T*te,s[11]=M*x+S*I+v*G+T*D,s[15]=M*b+S*H+v*B+T*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],M=l*f-c*u,S=o*f-c*d,v=o*u-l*d,T=a*f-c*h,w=a*u-l*h,E=a*d-o*h;return t*(_*M-m*S+g*v)-n*(p*M-m*T+g*w)+i*(p*S-_*T+g*E)-s*(p*v-_*w+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],M=t*o-n*a,S=t*l-i*a,v=t*c-s*a,T=n*l-i*o,w=n*c-s*o,E=i*c-s*l,x=h*_-d*p,b=h*m-u*p,C=h*g-f*p,P=d*m-u*_,I=d*g-f*_,H=u*g-f*m,V=M*H-S*I+v*P+T*C-w*b+E*x;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/V;return e[0]=(o*H-l*I+c*P)*F,e[1]=(i*I-n*H-s*P)*F,e[2]=(_*E-m*w+g*T)*F,e[3]=(u*w-d*E-f*T)*F,e[4]=(l*C-a*H-c*b)*F,e[5]=(t*H-i*C+s*b)*F,e[6]=(m*v-p*E-g*S)*F,e[7]=(h*E-u*v+f*S)*F,e[8]=(a*I-o*C+c*x)*F,e[9]=(n*C-t*I-s*x)*F,e[10]=(p*w-_*v+g*M)*F,e[11]=(d*v-h*w-f*M)*F,e[12]=(o*b-a*P-l*x)*F,e[13]=(t*P-n*b+i*x)*F,e[14]=(_*S-p*T-m*M)*F,e[15]=(h*T-d*S+u*M)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,p=s*d,_=a*h,m=a*d,g=o*d,M=l*c,S=l*h,v=l*d,T=n.x,w=n.y,E=n.z;return i[0]=(1-(_+g))*T,i[1]=(f+v)*T,i[2]=(p-S)*T,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(u+g))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(p+S)*E,i[9]=(m-M)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ds.set(i[0],i[1],i[2]).length(),o=Ds.set(i[4],i[5],i[6]).length(),l=Ds.set(i[8],i[9],i[10]).length();s<0&&(a=-a),yi.copy(this);let c=1/a,h=1/o,d=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,t.setFromRotationMatrix(yi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=bi,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===bi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ws)p=-a/(a-s),_=-a*s/(a-s);else throw new Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=bi,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===bi)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ws)p=-1/(a-s),_=-s/(a-s);else throw new Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};var Ds=new O;var yi=new Pt;var Y_=new O(0,0,0);var Z_=new O(1,1,1);var vr=new O;var Ko=new O;var Yn=new O;var rp=new Pt;var sp=new Oi;var Ys=(()=>{class r{constructor(t=0,n=0,i=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],o=s[4],l=s[8],c=s[1],h=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(n){case`XYZ`:this._y=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,h),this._z=0);break;case`YXZ`:this._x=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,a),this._z=0);break;case`ZXY`:this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case`ZYX`:this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case`YZX`:this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(l,p));break;case`XZY`:this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ze(`Euler: .setFromRotationMatrix() encountered an unknown order: `+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return rp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rp,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return sp.setFromEuler(this),this.setFromQuaternion(sp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return r.DEFAULT_ORDER=`XYZ`,r})();var Ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var J_=0;var ap=new O;var Ls=new Oi;var Ji=new Pt;var Qo=new O;var Pa=new O;var $_=new O;var K_=new Oi;var op=new O(1,0,0);var lp=new O(0,1,0);var cp=new O(0,0,1);var hp={type:`added`};var Q_={type:`removed`};var Ns={type:`childadded`,child:null};var jh={type:`childremoved`,child:null};var Ti=(()=>{class r$1 extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ra(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=r$1.DEFAULT_UP.clone();let t=new O,n=new Ys,i=new Oi,s=new O(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new et}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=r$1.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r$1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ls.setFromAxisAngle(t,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,n){return Ls.setFromAxisAngle(t,n),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(op,t)}rotateY(t){return this.rotateOnAxis(lp,t)}rotateZ(t){return this.rotateOnAxis(cp,t)}translateOnAxis(t,n){return ap.copy(t).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(op,t)}translateY(t){return this.translateOnAxis(lp,t)}translateZ(t){return this.translateOnAxis(cp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Qo.copy(t):Qo.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Pa,Qo,this.up):Ji.lookAt(Qo,Pa,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(Ji),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ke(`Object3D.add: object can't be added as a child of itself.`,t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hp),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):Ke(`Object3D.add: object not an instance of THREE.Object3D.`,t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Q_),jh.child=t,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hp),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty(`id`,t)}getObjectByName(t){return this.getObjectByProperty(`name`,t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,t,$_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,K_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let o=0,l=a.length;o<l;o++)a[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t==`string`,i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let s$1={};s$1.uuid=this.uuid,s$1.type=this.type,this.name!==``&&(s$1.name=this.name),this.castShadow===!0&&(s$1.castShadow=!0),this.receiveShadow===!0&&(s$1.receiveShadow=!0),this.visible===!1&&(s$1.visible=!1),this.frustumCulled===!1&&(s$1.frustumCulled=!1),this.renderOrder!==0&&(s$1.renderOrder=this.renderOrder),this.static!==!1&&(s$1.static=this.static),Object.keys(this.userData).length>0&&(s$1.userData=this.userData),s$1.layers=this.layers.mask,s$1.matrix=this.matrix.toArray(),s$1.up=this.up.toArray(),this.pivot!==null&&(s$1.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s$1.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s$1.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s$1.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s$1.type=`InstancedMesh`,s$1.count=this.count,s$1.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s$1.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s$1.type=`BatchedMesh`,s$1.perObjectFrustumCulled=this.perObjectFrustumCulled,s$1.sortObjects=this.sortObjects,s$1.drawRanges=this._drawRanges,s$1.reservedRanges=this._reservedRanges,s$1.geometryInfo=this._geometryInfo.map(l=>s(r({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s$1.instanceInfo=this._instanceInfo.map(l=>r({},l)),s$1.availableInstanceIds=this._availableInstanceIds.slice(),s$1.availableGeometryIds=this._availableGeometryIds.slice(),s$1.nextIndexStart=this._nextIndexStart,s$1.nextVertexStart=this._nextVertexStart,s$1.geometryCount=this._geometryCount,s$1.maxInstanceCount=this._maxInstanceCount,s$1.maxVertexCount=this._maxVertexCount,s$1.maxIndexCount=this._maxIndexCount,s$1.geometryInitialized=this._geometryInitialized,s$1.matricesTexture=this._matricesTexture.toJSON(t),s$1.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s$1.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s$1.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s$1.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s$1.background=this.background.toJSON():this.background.isTexture&&(s$1.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s$1.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s$1.geometry=a(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){let u=c[h];a(t.shapes,u)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s$1.bindMode=this.bindMode,s$1.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s$1.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(t.materials,this.material[c]));s$1.material=l}else s$1.material=a(t.materials,this.material);if(this.children.length>0){s$1.children=[];for(let l=0;l<this.children.length;l++)s$1.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s$1.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s$1.animations.push(a(t.animations,c))}}if(n){let l=o(t.geometries),c=o(t.materials),h=o(t.textures),d=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s$1,i;function o(l){let c=[];for(let h in l){let d=l[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}}return r$1.DEFAULT_UP=new O(0,1,0),r$1.DEFAULT_MATRIX_AUTO_UPDATE=!0,r$1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,r$1})();var jr=class extends Ti{constructor(){super(),this.isGroup=!0,this.type=`Group`}};var j_={type:`move`};var Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints[`index-finger-tip`],d=c.joints[`thumb-tip`],u=h.position.distanceTo(d.position);c.inputState.pinching&&u>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};var yr={h:0,s:0,l:0};var jo={h:0,s:0,l:0};function eu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var nt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i==`number`?this.setHex(i):typeof i==`string`&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=H_(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=eu(a,s,e+1/3),this.g=eu(a,s,e),this.b=eu(a,s,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=Jn){function n(s){s!==void 0&&parseFloat(s)<1&&Ze(`Color: Alpha component of `+e+` will be ignored.`)}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case`rgb`:case`rgba`:if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case`hsl`:case`hsla`:if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze(`Color: Unknown color model `+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ze(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){let n=hm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze(`Color: Unknown color `+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return ut.workingToColorSpace(_n.copy(this),e),Math.round(lt(_n.r*255,0,255))*65536+Math.round(lt(_n.g*255,0,255))*256+Math.round(lt(_n.b*255,0,255))}getHexString(e=Jn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(_n.copy(this),t);let n=_n.r,i=_n.g,s=_n.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Jn){ut.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,i=_n.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(jo);let n=Zh(yr.h,jo.h,t),i=Zh(yr.s,jo.s,t),s=Zh(yr.l,jo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};var _n=new nt;nt.NAMES=hm;var Au=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new nt(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}};var Cu=class extends Ti{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ys,this.environmentIntensity=1,this.environmentRotation=new Ys,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Mi=new O;var $i=new O;var tu=new O;var Ki=new O;var Us=new O;var Fs=new O;var up=new O;var nu=new O;var iu=new O;var ru=new O;var su=new It;var au=new It;var ou=new It;var wr=class r{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mi.subVectors(e,t),i.cross(Mi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mi.subVectors(i,t),$i.subVectors(n,t),tu.subVectors(e,t);let a=Mi.dot(Mi),o=Mi.dot($i),l=Mi.dot(tu),c=$i.dot($i),h=$i.dot(tu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ki)===null?(l.x=0,l.y=0,`z`in l&&(l.z=0),`w`in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(a,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return su.setScalar(0),au.setScalar(0),ou.setScalar(0),su.fromBufferAttribute(e,t),au.fromBufferAttribute(e,n),ou.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(su,s.x),a.addScaledVector(au,s.y),a.addScaledVector(ou,s.z),a}static isFrontFacing(e,t,n,i){return Mi.subVectors(n,t),$i.subVectors(e,t),Mi.cross($i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Mi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Us.subVectors(i,n),Fs.subVectors(s,n),nu.subVectors(e,n);let l=Us.dot(nu),c=Fs.dot(nu);if(l<=0&&c<=0)return t.copy(n);iu.subVectors(e,i);let h=Us.dot(iu),d=Fs.dot(iu);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Us,a);ru.subVectors(e,s);let f=Us.dot(ru),p=Fs.dot(ru);if(p>=0&&f<=p)return t.copy(s);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Fs,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return up.subVectors(s,i),o=(d-h)/(d-h+(f-p)),t.copy(i).addScaledVector(up,o);let g=1/(m+_+u);return a=_*g,o=u*g,t.copy(n).addScaledVector(Us,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Ar=class{constructor(e=new O(Infinity,Infinity,Infinity),t=new O(-Infinity,-Infinity,-Infinity)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute(`position`);if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),el.copy(n.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),tl.subVectors(this.max,Ia),Os.subVectors(e.a,Ia),Bs.subVectors(e.b,Ia),zs.subVectors(e.c,Ia),Mr.subVectors(Bs,Os),Sr.subVectors(zs,Bs),Zr.subVectors(Os,zs);let t=[0,-Mr.z,Mr.y,0,-Sr.z,Sr.y,0,-Zr.z,Zr.y,Mr.z,0,-Mr.x,Sr.z,0,-Sr.x,Zr.z,0,-Zr.x,-Mr.y,Mr.x,0,-Sr.y,Sr.x,0,-Zr.y,Zr.x,0];return!lu(t,Os,Bs,zs,tl)||(t=[1,0,0,0,1,0,0,0,1],!lu(t,Os,Bs,zs,tl))?!1:(nl.crossVectors(Mr,Sr),t=[nl.x,nl.y,nl.z],lu(t,Os,Bs,zs,tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};var Qi=[new O,new O,new O,new O,new O,new O,new O,new O];var Si=new O;var el=new Ar;var Os=new O;var Bs=new O;var zs=new O;var Mr=new O;var Sr=new O;var Zr=new O;var Ia=new O;var tl=new O;var nl=new O;var Jr=new O;function lu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Jr.fromArray(r,s);let o=i.x*Math.abs(Jr.x)+i.y*Math.abs(Jr.y)+i.z*Math.abs(Jr.z),l=e.dot(Jr),c=t.dot(Jr),h=n.dot(Jr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Jt=new O;var il=new Se;var e0=0;var $n=class extends Fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name=``,this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eu,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)il.fromBufferAttribute(this,t),il.applyMatrix3(e),this.setXY(t,il.x,il.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ra(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ra(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ra(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ra(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ra(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),i=zn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),i=zn(i,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==Eu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}};var Ha=class extends $n{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wa=class extends $n{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var At=class extends $n{constructor(e,t,n){super(new Float32Array(e),t,n)}};var t0=new Ar;var Da=new O;var cu=new O;var rs=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):t0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);let t=Da.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Da,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(cu)),this.expandByPoint(Da.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};var n0=0;var ui=new Pt;var hu=new Ti;var ks=new O;var Zn=new Ar;var La=new Ar;var an=new O;var xn=class r extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ra(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V_(e)?Wa:Ha)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute(`position`,new At(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ze(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new O(-Infinity,-Infinity,-Infinity),new O(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new O,Infinity);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];La.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Zn.min,La.min),Zn.expandByPoint(an),an.addVectors(Zn.max,La.max),Zn.expandByPoint(an)):(Zn.expandByPoint(La.min),Zn.expandByPoint(La.max))}Zn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(e,c),an.add(ks)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ke(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new $n(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new O,l[x]=new O;let c=new O,h=new O,d=new O,u=new Se,f=new Se,p=new Se,_=new O,m=new O;function g(x,b,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,C),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),o[x].add(_),o[b].add(_),o[C].add(_),l[x].add(m),l[b].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){let C=M[x],P=C.start,I=C.count;for(let H=P,V=P+I;H<V;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let S=new O,v=new O,T=new O,w=new O;function E(x){T.fromBufferAttribute(i,x),w.copy(T);let b=o[x];S.copy(b),S.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(w,b);let P=v.dot(l[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,P)}for(let x=0,b=M.length;x<b;++x){let C=M[x],P=C.start,I=C.count;for(let H=P,V=P+I;H<V;H+=3)E(e.getX(H+0)),E(e.getX(H+1)),E(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new $n(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new $n(u,h,d)}if(this.index===null)return Ze(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}};var i0=0;var nr=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=ra(),this.name=``,this.type=`Material`,this.blending=ns,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=bl,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==Infinity&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==tr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==Er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}};var ji=new O;var uu=new O;var rl=new O;var br=new O;var fu=new O;var sl=new O;var du=new O;var Xa=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uu.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),br.copy(this.origin).sub(uu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(rl),o=br.dot(this.direction),l=-br.dot(rl),c=br.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=s*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(uu).addScaledVector(rl,u),f}intersectSphere(e,t){ji.subVectors(e.center,this.origin);let n=ji.dot(this.direction),i=ji.dot(ji)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,i,s){fu.subVectors(t,e),sl.subVectors(n,e),du.crossVectors(fu,sl);let a=this.direction.dot(du),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;br.subVectors(this.origin,e);let l=o*this.direction.dot(sl.crossVectors(br,sl));if(l<0)return null;let c=o*this.direction.dot(fu.cross(br));if(c<0||l+c>a)return null;let h=-o*br.dot(du);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var qa=class extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ys,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var fp=new Pt;var $r=new Xa;var al=new rs;var dp=new O;var ol=new O;var ll=new O;var cl=new O;var pu=new O;var hl=new O;var pp=new O;var ul=new O;var fi=class extends Ti{constructor(e=new xn,t=new qa){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(pu.fromBufferAttribute(d,e),a?hl.addScaledVector(pu,h):hl.addScaledVector(pu.sub(t),h))}t.add(hl)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(al.containsPoint($r.origin)===!1&&($r.intersectSphere(al,dp)===null||$r.origin.distanceToSquared(dp)>(e.far-e.near)**2))&&(fp.copy(s).invert(),$r.copy(e.ray).applyMatrix4(fp),!(n.boundingBox!==null&&$r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=S;v<T;v+=3){let w=o.getX(v),E=o.getX(v+1),x=o.getX(v+2);i=fl(this,g,e,n,c,h,d,w,E,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let M=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);i=fl(this,a,e,n,c,h,d,M,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=S;v<T;v+=3){let w=v,E=v+1,x=v+2;i=fl(this,g,e,n,c,h,d,w,E,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let M=m,S=m+1,v=m+2;i=fl(this,a,e,n,c,h,d,M,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function r0(r,e,t,n,i,s,a,o){let l;if(e.side===Pn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===tr,o),l===null)return null;ul.copy(o),ul.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(ul);return c<t.near||c>t.far?null:{distance:c,point:ul.clone(),object:r}}function fl(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ol),r.getVertexPosition(l,ll),r.getVertexPosition(c,cl);let h=r0(r,e,t,n,ol,ll,cl,pp);if(h){let d=new O;wr.getBarycoord(pp,ol,ll,cl,d),i&&(h.uv=wr.getInterpolatedAttribute(i,o,l,c,d,new Se)),s&&(h.uv1=wr.getInterpolatedAttribute(s,o,l,c,d,new Se)),a&&(h.normal=wr.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};wr.getNormal(ol,ll,cl,u.normal),h.face=u,h.barycoord=d}return h}var Bl=class extends sr{constructor(e=null,t=1,n=1,i,s,a,o,l,c=on,h=on,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mu=new O;var s0=new O;var a0=new et;var Li=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=mu.subVectors(n,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(mu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||a0.getNormalMatrix(e),i=this.coplanarPoint(mu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};var Kr=new rs;var o0=new Se(.5,.5);var dl=new O;var Js=class{constructor(e=new Li,t=new Li,n=new Li,i=new Li,s=new Li,a=new Li){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],M=s[12],S=s[13],v=s[14],T=s[15];if(i[0].setComponents(c-a,f-h,g-p,T-M).normalize(),i[1].setComponents(c+a,f+h,g+p,T+M).normalize(),i[2].setComponents(c+o,f+d,g+_,T+S).normalize(),i[3].setComponents(c-o,f-d,g-_,T-S).normalize(),n)i[4].setComponents(l,u,m,v).normalize(),i[5].setComponents(c-l,f-u,g-m,T-v).normalize();else if(i[4].setComponents(c-l,f-u,g-m,T-v).normalize(),t===bi)i[5].setComponents(c+l,f+u,g+m,T+v).normalize();else if(t===Ws)i[5].setComponents(l,u,m,v).normalize();else throw new Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);return Kr.radius=.7071067811865476+o0.distanceTo(e.center),Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(dl.x=i.normal.x>0?e.max.x:e.min.x,dl.y=i.normal.y>0?e.max.y:e.min.y,dl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zl=class extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var mp=new Pt;var Ru=new Xa;var pl=new rs;var ml=new O;var Pu=class extends Ti{constructor(e=new xn,t=new zl){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(i),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;mp.copy(i).invert(),Ru.copy(e.ray).applyMatrix4(mp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,_=f;p<_;p++){let m=c.getX(p);ml.fromBufferAttribute(d,m),gp(ml,m,l,i,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,_=f;p<_;p++)ml.fromBufferAttribute(d,p),gp(ml,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function gp(r,e,t,n,i,s,a){let o=Ru.distanceSqToPoint(r);if(o<t){let l=new O;Ru.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ya=class extends sr{constructor(e=[],t=Ir,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ir=class extends sr{constructor(e,t,n=Ei,i,s,a,o=on,l=on,c,h=Ui,d=1){if(h!==Ui&&h!==Lr)throw new Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var kl=class extends ir{constructor(e,t=Ei,n=Ir,i,s,a=on,o=on,l,c=Ui){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};var Za=class extends sr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var $s=class r extends xn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,s,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,s,1),p(`x`,`z`,`y`,1,1,e,n,t,i,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,i,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,i,s,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute(`position`,new At(c,3)),this.setAttribute(`normal`,new At(h,3)),this.setAttribute(`uv`,new At(d,2));function p(_,m,g,M,S,v,T,w,E,x,b){let C=v/E,P=T/x,I=v/2,H=T/2,V=w/2,F=E+1,G=x+1,B=0,Z=0,te=new O;for(let D=0;D<G;D++){let oe=D*P-H;for(let _e=0;_e<F;_e++)te[_]=(_e*C-I)*M,te[m]=oe*S,te[g]=V,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[g]=w>0?1:-1,h.push(te.x,te.y,te.z),d.push(_e/E),d.push(1-D/x),B+=1}for(let D=0;D<x;D++)for(let oe=0;oe<E;oe++){let _e=u+oe+F*D,Je=u+oe+F*(D+1),$e=u+(oe+1)+F*(D+1),Ye=u+(oe+1)+F*D;l.push(_e,Je,Ye),l.push(Je,$e,Ye),Z+=6}o.addGroup(f,Z,b),f+=Z,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Iu=class r extends xn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new O,h=new Se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute(`position`,new At(a,3)),this.setAttribute(`normal`,new At(o,3)),this.setAttribute(`uv`,new At(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var Vl=class r extends xn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],f=[],p=0,_=[],m=n/2,g=0;M(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute(`position`,new At(d,3)),this.setAttribute(`normal`,new At(u,3)),this.setAttribute(`uv`,new At(f,2));function M(){let v=new O,T=new O,w=0,E=(t-e)/n;for(let x=0;x<=s;x++){let b=[],C=x/s,P=C*(t-e)+e;for(let I=0;I<=i;I++){let H=I/i,V=H*l+o,F=Math.sin(V),G=Math.cos(V);T.x=P*F,T.y=-C*n+m,T.z=P*G,d.push(T.x,T.y,T.z),v.set(F,E,G).normalize(),u.push(v.x,v.y,v.z),f.push(H,1-C),b.push(p++)}_.push(b)}for(let x=0;x<i;x++)for(let b=0;b<s;b++){let C=_[b][x],P=_[b+1][x],I=_[b+1][x+1],H=_[b][x+1];(e>0||b!==0)&&(h.push(C,P,H),w+=3),(t>0||b!==s-1)&&(h.push(P,I,H),w+=3)}c.addGroup(g,w,0),g+=w}function S(v){let T=p,w=new Se,E=new O,x=0,b=v===!0?e:t,C=v===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),p++;let P=p;for(let I=0;I<=i;I++){let V=I/i*l+o,F=Math.cos(V),G=Math.sin(V);E.x=b*G,E.y=m*C,E.z=b*F,d.push(E.x,E.y,E.z),u.push(0,C,0),w.x=F*.5+.5,w.y=G*.5*C+.5,f.push(w.x,w.y),p++}for(let I=0;I<i;I++){let H=T+I,V=P+I;v===!0?h.push(V,V+1,H):h.push(V+1,V,H),x+=3}c.addGroup(g,x,v===!0?1:2),g+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Du=class r extends Vl{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Gl=class r extends xn{constructor(e=[],t=[],n=1,i=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),c(n),h(),this.setAttribute(`position`,new At(s,3)),this.setAttribute(`normal`,new At(s.slice(),3)),this.setAttribute(`uv`,new At(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let S=new O,v=new O,T=new O;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],v),f(t[w+2],T),l(S,v,T,M)}function l(M,S,v,T){let w=T+1,E=[];for(let x=0;x<=w;x++){E[x]=[];let b=M.clone().lerp(v,x/w),C=S.clone().lerp(v,x/w),P=w-x;for(let I=0;I<=P;I++)I===0&&x===w?E[x][I]=b:E[x][I]=b.clone().lerp(C,I/P)}for(let x=0;x<w;x++)for(let b=0;b<2*(w-x)-1;b++){let C=Math.floor(b/2);b%2===0?(u(E[x][C+1]),u(E[x+1][C]),u(E[x][C])):(u(E[x][C+1]),u(E[x+1][C+1]),u(E[x+1][C]))}}function c(M){let S=new O;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(M),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function h(){let M=new O;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];let v=m(M)/2/Math.PI+.5,T=g(M)/Math.PI+.5;a.push(v,1-T)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){let S=a[M+0],v=a[M+2],T=a[M+4];Math.max(S,v,T)>.9&&Math.min(S,v,T)<.1&&(S<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function f(M,S){let v=M*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function p(){let M=new O,S=new O,v=new O,T=new O,w=new Se,E=new Se,x=new Se;for(let b=0,C=0;b<s.length;b+=9,C+=6){M.set(s[b+0],s[b+1],s[b+2]),S.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),w.set(a[C+0],a[C+1]),E.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),T.copy(M).add(S).add(v).divideScalar(3);let P=m(T);_(w,C+0,M,P),_(E,C+2,S,P),_(x,C+4,v,P)}}function _(M,S,v,T){T<0&&M.x===1&&(a[S]=M.x-1),v.x===0&&v.z===0&&(a[S]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var Qn=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Se:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,i=[],s=[],a=[],o=new O,l=new Pt;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(lt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(lt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};var Ks=class extends Qn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Se){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};var Hl=class extends Ks{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function _f(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var _p=new O;var xp=new O;var gu=new _f;var _u=new _f;var xu=new _f;var Wl=class extends Qn{constructor(e=[],t=!1,n=`centripetal`,i=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new O){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(xp.subVectors(i[0],i[1]).add(i[0]),c=xp);let d=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(_p.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=_p),this.curveType===`centripetal`||this.curveType===`chordal`){let f=this.curveType===`chordal`?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),gu.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,m),_u.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,m),xu.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,m)}else this.curveType===`catmullrom`&&(gu.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),_u.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),xu.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(gu.calc(l),_u.calc(l),xu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new O().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vp(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function l0(r,e){let t=1-r;return t*t*e}function c0(r,e){return 2*(1-r)*r*e}function h0(r,e){return r*r*e}function Ua(r,e,t,n){return l0(r,e)+c0(r,t)+h0(r,n)}function u0(r,e){let t=1-r;return t*t*t*e}function f0(r,e){let t=1-r;return 3*t*t*r*e}function d0(r,e){return 3*(1-r)*r*r*e}function p0(r,e){return r*r*r*e}function Fa(r,e,t,n,i){return u0(r,e)+f0(r,t)+d0(r,n)+p0(r,i)}var Ja=class extends Qn{constructor(e=new Se,t=new Se,n=new Se,i=new Se){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Se){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fa(e,i.x,s.x,a.x,o.x),Fa(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var Xl=class extends Qn{constructor(e=new O,t=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new O){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fa(e,i.x,s.x,a.x,o.x),Fa(e,i.y,s.y,a.y,o.y),Fa(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var $a=class extends Qn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var ql=class extends Qn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Ka=class extends Qn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ua(e,i.x,s.x,a.x),Ua(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Yl=class extends Qn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ua(e,i.x,s.x,a.x),Ua(e,i.y,s.y,a.y),Ua(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Qa=class extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new Se){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(vp(o,l.x,c.x,h.x,d.x),vp(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Se().fromArray(i))}return this}};var Lu=Object.freeze({__proto__:null,ArcCurve:Hl,CatmullRomCurve3:Wl,CubicBezierCurve:Ja,CubicBezierCurve3:Xl,EllipseCurve:Ks,LineCurve:$a,LineCurve3:ql,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:Yl,SplineCurve:Qa});var Zl=class extends Qn{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Lu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Lu[i.type]().fromJSON(i))}return this}};var ja=class extends Zl{constructor(e){super(),this.type=`Path`,this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $a(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Ka(this.currentPoint.clone(),new Se(e,t),new Se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Ja(this.currentPoint.clone(),new Se(e,t),new Se(n,i),new Se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let n=new Qa([this.currentPoint.clone()].concat(e));return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Ks(e,t,n,i,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Jl=class extends ja{constructor(e){super(e),this.uuid=ra(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ja().fromJSON(i))}return this}};function m0(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=um(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=y0(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,d=l;for(let u=t;u<i;u+=t){let f=r[u],p=r[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return eo(s,a,t,o,l,c,0),a}function um(r,e,t,n,i){let s;if(i===I0(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=yp(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=yp(a/n|0,r[a],r[a+1],s);return s&&Qs(s,s.next)&&(no(s),s=s.next),s}function ss(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Qs(t,t.next)||Lt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function eo(r,e,t,n,i,s,a){if(!r)return;!a&&s&&w0(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?_0(r,n,i,s):g0(r)){e.push(l.i,r.i,c.i),no(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=x0(ss(r),e),eo(r,e,t,n,i,s,2)):a===2&&v0(r,e,t,n,i,s):eo(ss(r),e,t,n,i,s,1);break}}}function g0(r){let e=r.prev,t=r,n=r.next;if(Lt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),d=Math.min(o,l,c),u=Math.max(i,s,a),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Na(i,o,s,l,a,c,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function _0(r,e,t,n){let i=r.prev,s=r,a=r.next;if(Lt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,d=s.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),_=Math.max(o,l,c),m=Math.max(h,d,u),g=Nu(f,p,e,t,n),M=Nu(_,m,e,t,n),S=r.prevZ,v=r.nextZ;for(;S&&S.z>=g&&v&&v.z<=M;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==i&&S!==a&&Na(o,h,l,d,c,u,S.x,S.y)&&Lt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&Na(o,h,l,d,c,u,v.x,v.y)&&Lt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==i&&S!==a&&Na(o,h,l,d,c,u,S.x,S.y)&&Lt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&Na(o,h,l,d,c,u,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function x0(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Qs(n,i)&&dm(n,t,t.next,i)&&to(n,i)&&to(i,n)&&(e.push(n.i,t.i,i.i),no(t),no(t.next),t=r=i),t=t.next}while(t!==r);return ss(t)}function v0(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&C0(a,o)){let l=pm(a,o);a=ss(a,a.next),l=ss(l,l.next),eo(a,e,t,n,i,s,0),eo(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function y0(r,e,t,n){let i=[];for(let s=0,a=e.length;s<a;s++){let c=um(r,e[s]*n,s<a-1?e[s+1]*n:r.length,n,!1);c===c.next&&(c.steiner=!0),i.push(A0(c))}i.sort(M0);for(let s=0;s<i.length;s++)t=S0(i[s],t);return t}function M0(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0))t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x);return t}function S0(r,e){let t=b0(r,e);if(!t)return e;let n=pm(t,r);return ss(n,n.next),ss(t,t.next)}function b0(r,e){let t=e,n=r.x,i=r.y,s=-Infinity,a;if(Qs(r,t))return t;do{if(Qs(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=Infinity;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&fm(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let d=Math.abs(i-t.y)/(n-t.x);to(t,r)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&T0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function T0(r,e){return Lt(r.prev,r,e.prev)<0&&Lt(e.next,r,r.next)<0}function w0(r,e,t,n){let i=r;do i.z===0&&(i.z=Nu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,E0(i)}function E0(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function Nu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function A0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function fm(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Na(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&fm(r,e,t,n,i,s,a,o)}function C0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!R0(r,e)&&(to(r,e)&&to(e,r)&&P0(r,e)&&(Lt(r.prev,r,e.prev)||Lt(r,e.prev,e))||Qs(r,e)&&Lt(r.prev,r,r.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Qs(r,e){return r.x===e.x&&r.y===e.y}function dm(r,e,t,n){let i=_l(Lt(r,e,t)),s=_l(Lt(r,e,n)),a=_l(Lt(t,n,r)),o=_l(Lt(t,n,e));return!!(i!==s&&a!==o||i===0&&gl(r,t,e)||s===0&&gl(r,n,e)||a===0&&gl(t,r,n)||o===0&&gl(t,e,n))}function gl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function _l(r){return r>0?1:r<0?-1:0}function R0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&dm(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function to(r,e){return Lt(r.prev,r,r.next)<0?Lt(r,e,r.next)>=0&&Lt(r,r.prev,e)>=0:Lt(r,e,r.prev)<0||Lt(r,r.next,e)<0}function P0(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function pm(r,e){let t=Uu(r.i,r.x,r.y),n=Uu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function yp(r,e,t,n){let i=Uu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function no(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Uu(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function I0(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}var Fu=class{static triangulate(e,t,n=2){return m0(e,t,n)}};var es=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Mp(e),Sp(n,e);let a=e.length;t.forEach(Mp);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Sp(n,t[l]);let o=Fu.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Mp(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Sp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Ou=class r extends xn{constructor(e=new Jl([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute(`position`,new At(i,3)),this.setAttribute(`uv`,new At(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:D0,S,v=!1,T,w,E,x;if(g){S=g.getSpacedPoints(h),v=!0,u=!1;let Q=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,Q),w=new O,E=new O,x=new O}u||(m=0,f=0,p=0,_=0);let b=o.extractPoints(c),C=b.shape,P=b.holes;if(!es.isClockWise(C)){C=C.reverse();for(let Q=0,ne=P.length;Q<ne;Q++){let ie=P[Q];es.isClockWise(ie)&&(P[Q]=ie.reverse())}}function H(Q){let ie=10000000000000001e-36,N=Q[0];for(let me=1;me<=Q.length;me++){let Fe=me%Q.length,De=Q[Fe],Re=De.x-N.x,He=De.y-N.y,L=Re*Re+He*He,ht=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(N.x),Math.abs(N.y));if(L<=ie*ht*ht){Q.splice(Fe,1),me--;continue}N=De}}H(C),P.forEach(H);let V=P.length,F=C;for(let Q=0;Q<V;Q++){let ne=P[Q];C=C.concat(ne)}function G(Q,ne,ie){return ne||Ke(`ExtrudeGeometry: vec does not exist`),Q.clone().addScaledVector(ne,ie)}let B=C.length;function Z(Q,ne,ie){let N,me,Fe,De=Q.x-ne.x,Re=Q.y-ne.y,He=ie.x-Q.x,L=ie.y-Q.y,ht=De*De+Re*Re,Ve=De*L-Re*He;if(Math.abs(Ve)>Number.EPSILON){let R=Math.sqrt(ht),y=Math.sqrt(He*He+L*L),z=ne.x-Re/R,W=ne.y+De/R,J=ie.x-L/y,fe=ie.y+He/y,le=((J-z)*L-(fe-W)*He)/(De*L-Re*He);N=z+De*le-Q.x,me=W+Re*le-Q.y;let $=N*N+me*me;if($<=2)return new Se(N,me);Fe=Math.sqrt($/2)}else{let R=!1;De>Number.EPSILON?He>Number.EPSILON&&(R=!0):De<-Number.EPSILON?He<-Number.EPSILON&&(R=!0):Math.sign(Re)===Math.sign(L)&&(R=!0),R?(N=-Re,me=De,Fe=Math.sqrt(ht)):(N=De,me=Re,Fe=Math.sqrt(ht/2))}return new Se(N/Fe,me/Fe)}let te=[];for(let Q=0,ne=F.length,ie=ne-1,N=Q+1;Q<ne;Q++,ie++,N++)ie===ne&&(ie=0),N===ne&&(N=0),te[Q]=Z(F[Q],F[ie],F[N]);let D=[],oe,_e=te.concat();for(let Q=0,ne=V;Q<ne;Q++){let ie=P[Q];oe=[];for(let N=0,me=ie.length,Fe=me-1,De=N+1;N<me;N++,Fe++,De++)Fe===me&&(Fe=0),De===me&&(De=0),oe[N]=Z(ie[N],ie[Fe],ie[De]);D.push(oe),_e=_e.concat(oe)}let Je;if(m===0)Je=es.triangulateShape(F,P);else{let Q=[],ne=[];for(let ie=0;ie<m;ie++){let N=ie/m,me=f*Math.cos(N*Math.PI/2),Fe=p*Math.sin(N*Math.PI/2)+_;for(let De=0,Re=F.length;De<Re;De++){let He=G(F[De],te[De],Fe);Ce(He.x,He.y,-me),N===0&&Q.push(He)}for(let De=0,Re=V;De<Re;De++){let He=P[De];oe=D[De];let L=[];for(let ht=0,Ve=He.length;ht<Ve;ht++){let R=G(He[ht],oe[ht],Fe);Ce(R.x,R.y,-me),N===0&&L.push(R)}N===0&&ne.push(L)}}Je=es.triangulateShape(Q,ne)}let $e=Je.length,Ye=p+_;for(let Q=0;Q<B;Q++){let ne=u?G(C[Q],_e[Q],Ye):C[Q];v?(E.copy(T.normals[0]).multiplyScalar(ne.x),w.copy(T.binormals[0]).multiplyScalar(ne.y),x.copy(S[0]).add(E).add(w),Ce(x.x,x.y,x.z)):Ce(ne.x,ne.y,0)}for(let Q=1;Q<=h;Q++)for(let ne=0;ne<B;ne++){let ie=u?G(C[ne],_e[ne],Ye):C[ne];v?(E.copy(T.normals[Q]).multiplyScalar(ie.x),w.copy(T.binormals[Q]).multiplyScalar(ie.y),x.copy(S[Q]).add(E).add(w),Ce(x.x,x.y,x.z)):Ce(ie.x,ie.y,d/h*Q)}for(let Q=m-1;Q>=0;Q--){let ne=Q/m,ie=f*Math.cos(ne*Math.PI/2),N=p*Math.sin(ne*Math.PI/2)+_;for(let me=0,Fe=F.length;me<Fe;me++){let De=G(F[me],te[me],N);Ce(De.x,De.y,d+ie)}for(let me=0,Fe=P.length;me<Fe;me++){let De=P[me];oe=D[me];for(let Re=0,He=De.length;Re<He;Re++){let L=G(De[Re],oe[Re],N);v?Ce(L.x,L.y+S[h-1].y,S[h-1].x+ie):Ce(L.x,L.y,d+ie)}}}K(),ce();function K(){let Q=i.length/3;if(u){let ne=0,ie=B*ne;for(let N=0;N<$e;N++){let me=Je[N];ke(me[2]+ie,me[1]+ie,me[0]+ie)}ne=h+m*2,ie=B*ne;for(let N=0;N<$e;N++){let me=Je[N];ke(me[0]+ie,me[1]+ie,me[2]+ie)}}else{for(let ne=0;ne<$e;ne++){let ie=Je[ne];ke(ie[2],ie[1],ie[0])}for(let ne=0;ne<$e;ne++){let ie=Je[ne];ke(ie[0]+B*h,ie[1]+B*h,ie[2]+B*h)}}n.addGroup(Q,i.length/3-Q,0)}function ce(){let Q=i.length/3,ne=0;ae(F,ne),ne+=F.length;for(let ie=0,N=P.length;ie<N;ie++){let me=P[ie];ae(me,ne),ne+=me.length}n.addGroup(Q,i.length/3-Q,1)}function ae(Q,ne){let ie=Q.length;for(;--ie>=0;){let N=ie,me=ie-1;me<0&&(me=Q.length-1);for(let Fe=0,De=h+m*2;Fe<De;Fe++){let Re=B*Fe,He=B*(Fe+1);Pe(ne+N+Re,ne+me+Re,ne+me+He,ne+N+He)}}}function Ce(Q,ne,ie){l.push(Q),l.push(ne),l.push(ie)}function ke(Q,ne,ie){Qe(Q),Qe(ne),Qe(ie);let N=i.length/3,me=M.generateTopUV(n,i,N-3,N-2,N-1);be(me[0]),be(me[1]),be(me[2])}function Pe(Q,ne,ie,N){Qe(Q),Qe(ne),Qe(N),Qe(ne),Qe(ie),Qe(N);let me=i.length/3,Fe=M.generateSideWallUV(n,i,me-6,me-3,me-2,me-1);be(Fe[0]),be(Fe[1]),be(Fe[3]),be(Fe[1]),be(Fe[2]),be(Fe[3])}function Qe(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function be(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return L0(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Lu[i.type]().fromJSON(i)),new r(n,e.options)}};var D0={generateTopUV:function(r,e,t,n,i){let s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Se(s,a),new Se(o,l),new Se(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],p=e[i*3+2],_=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Se(a,1-l),new Se(c,1-d),new Se(u,1-p),new Se(_,1-g)]:[new Se(o,1-l),new Se(h,1-d),new Se(f,1-p),new Se(m,1-g)]}};function L0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Bu=class r extends Gl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(i,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var io=class r extends xn{constructor(e=1,t=1,n=1,i=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let M=g*u-a;for(let S=0;S<c;S++){let v=S*d-s;p.push(v,-M,0),_.push(0,0,1),m.push(S/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){let S=M+c*g,v=M+c*(g+1),T=M+1+c*(g+1),w=M+1+c*g;f.push(S,v,w),f.push(v,T,w)}this.setIndex(f),this.setAttribute(`position`,new At(p,3)),this.setAttribute(`normal`,new At(_,3)),this.setAttribute(`uv`,new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var zu=class r extends xn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new O,u=new O,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let M=[],S=g/n,v=a+S*o,T=e*Math.cos(v),w=Math.sqrt(e*e-T*T),E=0;g===0&&a===0?E=.5/t:g===n&&l===Math.PI&&(E=-.5/t);for(let x=0;x<=t;x++){let b=x/t,C=i+b*s;d.x=-w*Math.cos(C),d.y=T,d.z=w*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(b+E,1-S),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){let S=h[g][M+1],v=h[g][M],T=h[g+1][M],w=h[g+1][M+1];(g!==0||a>0)&&f.push(S,v,w),(g!==n-1||l<Math.PI)&&f.push(v,T,w)}this.setIndex(f),this.setAttribute(`position`,new At(p,3)),this.setAttribute(`normal`,new At(_,3)),this.setAttribute(`uv`,new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function os(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(bp(i))i.isRenderTargetTexture?(Ze(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(bp(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function vn(r){let e={};for(let t=0;t<r.length;t++){let n=os(r[t]);for(let i in n)e[i]=n[i]}return e}function bp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function N0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function xf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var mm={clone:os,merge:vn};var U0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;var F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;var jn=class extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=N0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:`t`,value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:`c`,value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:`v2`,value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:`v3`,value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:`v4`,value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:`m3`,value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:`m4`,value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case`t`:this.uniforms[n].value=t[i.value]||null;break;case`c`:this.uniforms[n].value=new nt().setHex(i.value);break;case`v2`:this.uniforms[n].value=new Se().fromArray(i.value);break;case`v3`:this.uniforms[n].value=new O().fromArray(i.value);break;case`v4`:this.uniforms[n].value=new It().fromArray(i.value);break;case`m3`:this.uniforms[n].value=new et().fromArray(i.value);break;case`m4`:this.uniforms[n].value=new Pt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};var $l=class extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}};var Kl=class extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ys,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ku=class extends Kl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=Infinity,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ql=class extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var jl=class extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT==`number`?new e(r):Array.prototype.slice.call(r)}var Cr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}};var ec=class extends Cr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Su,endingEnd:Su}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case bu:s=e,o=2*t-n;break;case Tu:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bu:a=e,l=2*n-t;break;case Tu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,S=(-1-f)*m+(1.5+f)*_+.5*p,v=f*m-f*_;for(let T=0;T!==o;++T)s[T]=g*a[h+T]+M*a[c+T]+S*a[l+T]+v*a[d+T];return s}};var tc=class extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}};var nc=class extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};var ic=class extends Cr{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(i-t),_=1-p;for(let m=0;m!==o;++m)s[m]=a[c+m]*_+a[l+m]*p;return s}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let _=a[c+p],m=a[l+p],g=f*u+p*2,M=d[g],S=d[g+1],v=e*u+p*2,T=h[v],w=h[v+1],E=(n-t)/(i-t),x,b,C,P,I;for(let H=0;H<8;H++){x=E*E,b=x*E,C=1-E,P=C*C,I=P*C;let F=I*t+3*P*E*M+3*C*x*T+b*i-n;if(Math.abs(F)<1e-10)break;let G=3*P*(M-t)+6*C*E*(T-M)+3*x*(i-T);if(Math.abs(G)<1e-10)break;E=E-F/G,E=Math.max(0,Math.min(1,E))}s[p]=I*_+3*P*E*S+3*C*x*w+b*m}return s}};var ei=class{constructor(e,t,n,i){if(e===void 0)throw new Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw new Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=xl(t,this.TimeBufferType),this.values=xl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xl(e.times,Array),values:xl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ic(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Oa:t=this.InterpolantFactoryMethodDiscrete;break;case Ll:t=this.InterpolantFactoryMethodLinear;break;case Ml:t=this.InterpolantFactoryMethodSmooth;break;case Mu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze(`KeyframeTrack:`,n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return Ll;case this.InterpolantFactoryMethodSmooth:return Ml;case this.InterpolantFactoryMethodBezier:return Mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ke(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l==`number`&&isNaN(l)){Ke(`KeyframeTrack: Time is not a valid number.`,this,o,l),e=!1;break}if(a!==null&&a>l){Ke(`KeyframeTrack: Out of order keys.`,this,o,l,a),e=!1;break}a=l}if(i!==void 0&&G_(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ke(`KeyframeTrack: Value is not a valid number.`,this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ml,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=t[d+p];if(_!==t[u+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ei.prototype.ValueTypeName=``;ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Ll;var Rr=class extends ei{constructor(e,t,n){super(e,t,n)}};Rr.prototype.ValueTypeName=`bool`;Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=Oa;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};rc.prototype.ValueTypeName=`color`;var sc=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};sc.prototype.ValueTypeName=`number`;var ac=class extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Oi.slerpFlat(s,0,a,c-o,a,c,l);return s}};var ro=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}};ro.prototype.ValueTypeName=`quaternion`;ro.prototype.InterpolantFactoryMethodSmooth=void 0;var Pr=class extends ei{constructor(e,t,n){super(e,t,n)}};Pr.prototype.ValueTypeName=`string`;Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=Oa;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends ei{constructor(e,t,n,i){super(e,t,n,i)}};oc.prototype.ValueTypeName=`vector`;var js=class extends Ti{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new nt(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var vu=new Pt;var Tp=new O;var wp=new O;var lc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tp),wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wp),t.updateMatrixWorld(),vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ws||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var vl=new O;var yl=new Oi;var Di=new O;var so=class extends Ti{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vl,yl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,yl,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vl,yl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,yl,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};var Tr=new O;var Ep=new Se;var Ap=new Se;var Rn=class extends so{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,Ep,Ap),t.subVectors(Ap,Ep)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yh*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vu=class extends lc{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}};var Gu=class extends js{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=i,this.shadow=new Vu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var ea=class extends so{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Hu=class extends lc{constructor(){super(new ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};var Wu=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Ti.DEFAULT_UP),this.updateMatrix(),this.target=new Ti,this.shadow=new Hu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Xu=class extends js{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}};var Vs=-90;var Gs=1;var cc=class extends Ti{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Rn(Vs,Gs,e,t);i.layers=this.layers,this.add(i);let s=new Rn(Vs,Gs,e,t);s.layers=this.layers,this.add(s);let a=new Rn(Vs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new Rn(Vs,Gs,e,t);o.layers=this.layers,this.add(o);let l=new Rn(Vs,Gs,e,t);l.layers=this.layers,this.add(l);let c=new Rn(Vs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}};var hc=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var vf=`\\[\\]\\.:\\/`;var O0=new RegExp(`[`+vf+`]`,`g`);var yf=`[^`+vf+`]`;var B0=`[^`+vf.replace(`\\.`,``)+`]`;var z0=/((?:WC+[\/:])*)/.source.replace(`WC`,yf);var k0=/(WCOD+)?/.source.replace(`WCOD`,B0);var V0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace(`WC`,yf);var G0=/\.(WC+)(?:\[(.+)\])?/.source.replace(`WC`,yf);var H0=new RegExp(`^`+z0+k0+V0+G0+`$`);var W0=[`material`,`materials`,`bones`,`map`];var qu=class{constructor(e,t,n){let i=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};var zt=(()=>{class r{constructor(t,n,i){this.path=n,this.parsedPath=i||r.parseTrackName(n),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,n,i):new r(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,`_`).replace(O0,``)}static parseTrackName(t){let n=H0.exec(t);if(n===null)throw new Error(`THREE.PropertyBinding: Cannot parse trackName: `+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(`.`);if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);W0.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+t);return i}static findNode(t,n){if(n===void 0||n===``||n===`.`||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=r.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ze(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(i){let h=n.objectIndex;switch(i){case`materials`:if(!t.material){Ke(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Ke(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Ke(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Ke(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Ke(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[i]===void 0){Ke(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Ke(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=n.nodeName;Ke(`PropertyBinding: Trying to update property for track: `+h+`.`+s+` but it wasn't found.`,t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s===`morphTargetInfluences`){if(!t.geometry){Ke(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Ke(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return r.Composite=qu,r})();zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ze(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class r{static{r.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}});function Mf(r,e,t,n){let i=X0(n);switch(t){case ff:return r*e;case pf:return r*e/i.components*i.byteLength;case _c:return r*e/i.components*i.byteLength;case Nr:return r*e*2/i.components*i.byteLength;case xc:return r*e*2/i.components*i.byteLength;case df:return r*e*3/i.components*i.byteLength;case di:return r*e*4/i.components*i.byteLength;case vc:return r*e*4/i.components*i.byteLength;case co:case ho:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mc:case bc:return Math.max(r,16)*Math.max(e,8)/4;case yc:case Sc:return Math.max(r,8)*Math.max(e,8)/2;case Tc:case wc:case Ac:case Cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ec:case po:case Rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case kc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wc:case Xc:case qc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Yc:case Zc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case mo:case Jc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X0(r){switch(r){case kn:case lf:return{byteLength:1,components:1};case na:case cf:case ki:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case Ei:case pc:case Ai:return{byteLength:4,components:1};case hf:case uf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}}));typeof window<`u`&&(window.__THREE__?Ze(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function zm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Y0(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<`u`&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var it={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`};var Ee={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}};var Gi={basic:{uniforms:vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:vn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:vn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:vn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:vn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:vn([Ee.points,Ee.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:vn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:vn([Ee.common,Ee.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:vn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:vn([Ee.sprite,Ee.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:vn([Ee.common,Ee.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:vn([Ee.lights,Ee.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Gi.physical={uniforms:vn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var jc={r:0,b:0,g:0};var Cy=new Pt;var km=new et;km.set(-1,0,0,0,1,0,0,0,1);function Ry(r,e,t,n,i,s){let a=new nt(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let v=M.backgroundBlurriness>0;S=e.get(S,v)}return S}function p(M){let S=!1,v=f(M);v===null?m(a,o):v&&v.isColor&&(m(v,1),S=!0);let T=r.xr.getEnvironmentBlendMode();T===`additive`?t.buffers.color.setClear(0,0,0,1,s):T===`alpha-blend`&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,S){let v=f(S);v&&(v.isCubeTexture||v.mapping===oo)?(c===void 0&&(c=new fi(new $s(1,1,1),new jn({name:`BackgroundCubeMaterial`,uniforms:os(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),c.geometry.deleteAttribute(`uv`),c.onBeforeRender=function(T,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(km),c.material.toneMapped=ut.getTransfer(v.colorSpace)!==gt,(h!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new fi(new io(2,2),new jn({name:`BackgroundMaterial`,uniforms:os(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ut.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,S){M.getRGB(jc,xf(r)),t.buffers.color.setClear(jc.r,jc.g,jc.b,S,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:p,addToRenderList:_,dispose:g}}function Py(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,a=!1;function o(P,I,H,V,F){let G=!1,B=d(P,V,H,I);s!==B&&(s=B,c(s.object)),G=f(P,V,H,F),G&&p(P,V,H,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(P,I,H,V),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function h(P){return r.deleteVertexArray(P)}function d(P,I,H,V){let F=V.wireframe===!0,G=n[I.id];G===void 0&&(G={},n[I.id]=G);let B=P.isInstancedMesh===!0?P.id:0,Z=G[B];Z===void 0&&(Z={},G[B]=Z);let te=Z[H.id];te===void 0&&(te={},Z[H.id]=te);let D=te[F];return D===void 0&&(D=u(l()),te[F]=D),D}function u(P){let I=[],H=[],V=[];for(let F=0;F<t;F++)I[F]=0,H[F]=0,V[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:V,object:P,attributes:{},index:null}}function f(P,I,H,V){let F=s.attributes,G=I.attributes,B=0,Z=H.getAttributes();for(let te in Z)if(Z[te].location>=0){let oe=F[te],_e=G[te];if(_e===void 0&&(te===`instanceMatrix`&&P.instanceMatrix&&(_e=P.instanceMatrix),te===`instanceColor`&&P.instanceColor&&(_e=P.instanceColor)),oe===void 0||oe.attribute!==_e||_e&&oe.data!==_e.data)return!0;B++}return s.attributesNum!==B||s.index!==V}function p(P,I,H,V){let F={},G=I.attributes,B=0,Z=H.getAttributes();for(let te in Z)if(Z[te].location>=0){let oe=G[te];oe===void 0&&(te===`instanceMatrix`&&P.instanceMatrix&&(oe=P.instanceMatrix),te===`instanceColor`&&P.instanceColor&&(oe=P.instanceColor));let _e={};_e.attribute=oe,oe&&oe.data&&(_e.data=oe.data),F[te]=_e,B++}s.attributes=F,s.attributesNum=B,s.index=V}function _(){let P=s.newAttributes;for(let I=0,H=P.length;I<H;I++)P[I]=0}function m(P){g(P,0)}function g(P,I){let H=s.newAttributes,V=s.enabledAttributes,F=s.attributeDivisors;H[P]=1,V[P]===0&&(r.enableVertexAttribArray(P),V[P]=1),F[P]!==I&&(r.vertexAttribDivisor(P,I),F[P]=I)}function M(){let P=s.newAttributes,I=s.enabledAttributes;for(let H=0,V=I.length;H<V;H++)I[H]!==P[H]&&(r.disableVertexAttribArray(H),I[H]=0)}function S(P,I,H,V,F,G,B){B===!0?r.vertexAttribIPointer(P,I,H,F,G):r.vertexAttribPointer(P,I,H,V,F,G)}function v(P,I,H,V){_();let F=V.attributes,G=H.getAttributes(),B=I.defaultAttributeValues;for(let Z in G){let te=G[Z];if(te.location>=0){let D=F[Z];if(D===void 0&&(Z===`instanceMatrix`&&P.instanceMatrix&&(D=P.instanceMatrix),Z===`instanceColor`&&P.instanceColor&&(D=P.instanceColor)),D!==void 0){let oe=D.normalized,_e=D.itemSize,Je=e.get(D);if(Je===void 0)continue;let $e=Je.buffer,Ye=Je.type,K=Je.bytesPerElement,ce=Ye===r.INT||Ye===r.UNSIGNED_INT||D.gpuType===pc;if(D.isInterleavedBufferAttribute){let ae=D.data,Ce=ae.stride,ke=D.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<te.locationSize;Pe++)g(te.location+Pe,ae.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<te.locationSize;Pe++)m(te.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let Pe=0;Pe<te.locationSize;Pe++)S(te.location+Pe,_e/te.locationSize,Ye,oe,Ce*K,(ke+_e/te.locationSize*Pe)*K,ce)}else{if(D.isInstancedBufferAttribute){for(let ae=0;ae<te.locationSize;ae++)g(te.location+ae,D.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ae=0;ae<te.locationSize;ae++)m(te.location+ae);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let ae=0;ae<te.locationSize;ae++)S(te.location+ae,_e/te.locationSize,Ye,oe,_e*K,_e/te.locationSize*ae*K,ce)}}else if(B!==void 0){let oe=B[Z];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(te.location,oe);break;case 3:r.vertexAttrib3fv(te.location,oe);break;case 4:r.vertexAttrib4fv(te.location,oe);break;default:r.vertexAttrib1fv(te.location,oe)}}}}M()}function T(){b();for(let P in n){let I=n[P];for(let H in I){let V=I[H];for(let F in V){let G=V[F];for(let B in G)h(G[B].object),delete G[B];delete V[F]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let H in I){let V=I[H];for(let F in V){let G=V[F];for(let B in G)h(G[B].object),delete G[B];delete V[F]}}delete n[P.id]}function E(P){for(let I in n){let H=n[I];for(let V in H){let F=H[V];if(F[P.id]===void 0)continue;let G=F[P.id];for(let B in G)h(G[B].object),delete G[B];delete F[P.id]}}}function x(P){for(let I in n){let H=n[I],V=P.isInstancedMesh===!0?P.id:0,F=H[V];if(F!==void 0){for(let G in F){let B=F[G];for(let Z in B)h(B[Z].object),delete B[Z];delete F[G]}delete H[V],Object.keys(H).length===0&&delete n[I]}}}function b(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Iy(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Dy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has(`EXT_texture_filter_anisotropic`)===!0){let E=e.get(`EXT_texture_filter_anisotropic`);i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==di&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===ki&&(e.has(`EXT_color_buffer_half_float`)||e.has(`EXT_color_buffer_float`));return!(E!==kn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ai&&!x)}function l(E){if(E===`highp`){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return`highp`;E=`mediump`}return E===`mediump`&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let c=t.precision!==void 0?t.precision:`highp`,h=l(c);h!==c&&(Ze(`WebGLRenderer:`,c,`not supported, using`,h,`instead.`),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has(`EXT_clip_control`);t.reversedDepthBuffer===!0&&u===!1&&Ze(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,maxSamples:T,samples:w}}function Ly(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Li,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{let M=s?0:n,S=M*4,v=g.clippingState||null;l.value=v,v=h(p,u,S,f);for(let T=0;T!==S;++T)v[T]=t[T];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=f;S!==_;++S,v+=4)a.copy(d[S]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Ur=4;var gm=[.125,.215,.35,.446,.526,.582];var ls=20;var Ny=256;var go=new ea;var _m=new nt;var Sf=null;var bf=0;var Tf=0;var wf=!1;var Uy=new O;var th=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=Uy}=s;Sf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sf,bf,Tf),this._renderer.xr.enabled=wf,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ki,format:di,colorSpace:Ba,depthBuffer:!1},i=xm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xm(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fy(s)),this._blurMaterial=By(s,e,t),this._ggxMaterial=Oy(s,e,t)}return i}_compileMaterial(e){let t=new fi(new xn,e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,i,s){let l=new Rn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(_m),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new $s,new qa({name:`PMREM.Background`,side:Pn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,g=!0):(m.color.copy(_m),g=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));let T=this._cubeSize;sa(i,v*T,S>2?T:0,T,T),d.setRenderTarget(i),g&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ir||e.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,go)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h)*(0+c*1.25),{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-Ur?n-p+Ur:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,sa(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(o,go),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,sa(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(o,go)}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,`latitudinal`,s),this._halfBlur(a,e,n,n,i,`longitudinal`,s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&Ke(`blur direction must be either latitudinal or longitudinal!`);let h=3,d=this._lodMeshes[i];d.material=c;let u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ls-1),_=s/p,m=isFinite(s)?1+Math.floor(h*_):ls;m>ls&&Ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);let g=[],M=0;for(let E=0;E<ls;++E){let x=E/_,b=Math.exp(-x*x/2);g.push(b),E===0?M+=b:E<m&&(M+=2*b)}for(let E=0;E<g.length;E++)g[E]=g[E]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:S}=this;u.dTheta.value=p,u.mipInt.value=S-n;let v=this._sizeLods[i];sa(t,3*v*(i>S-Ur?i-S+Ur:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(d,go)}};function Fy(r){let e=[],t=[],n=[],i=r,s=r-Ur+1+gm.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ur?l=gm[a-r+Ur-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,_=3,m=2,g=1,M=new Float32Array(_*p*f),S=new Float32Array(m*p*f),v=new Float32Array(g*p*f);for(let w=0;w<f;w++){let E=w%3*2/3-1,x=w>2?0:-1,b=[E,x,0,E+2/3,x,0,E+2/3,x+1,0,E,x,0,E+2/3,x+1,0,E,x+1,0];M.set(b,_*p*w),S.set(u,m*p*w);let C=[w,w,w,w,w,w];v.set(C,g*p*w)}let T=new xn;T.setAttribute(`position`,new $n(M,_)),T.setAttribute(`uv`,new $n(S,m)),T.setAttribute(`faceIndex`,new $n(v,g)),n.push(new fi(T,null)),i>Ur&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function xm(r,e,t){let n=new Kn(r,e,t);return n.texture.mapping=oo,n.texture.name=`PMREM.cubeUv`,n.scissorTest=!0,n}function sa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Oy(r,e,t){return new jn({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ny,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ih(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function By(r,e,t){let n=new Float32Array(ls),i=new O(0,1,0);return new jn({name:`SphericalGaussianBlur`,defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function vm(){return new jn({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ym(){return new jn({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var nh=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ya(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $s(5,5,5),s=new jn({name:`CubemapFromEquirect`,uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:zi});s.uniforms.tEquirect.value=t;let a=new fi(i,s),o=t.minFilter;return t.minFilter===Dr&&(t.minFilter=hn),new cc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}};function zy(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===uc||f===fc)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new nh(p.height);return _.fromEquirectangularTexture(r,u),e.set(u,_),u.addEventListener(`dispose`,c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===uc||f===fc,_=f===Ir||f===as;if(p||_){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new th(r)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new th(r)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener(`dispose`,h),m.texture):null}}}return u}function o(u,f){return f===uc?u.mapping=Ir:f===fc&&(u.mapping=as),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener(`dispose`,c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener(`dispose`,h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function ky(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t(`EXT_color_buffer_float`),t(`WEBGL_clip_cull_distance`),t(`OES_texture_float_linear`),t(`EXT_color_buffer_half_float`),t(`WEBGL_multisampled_render_to_texture`),t(`WEBGL_render_shared_exponent`)},get:function(n){let i=t(n);return i===null&&ts(`WebGLRenderer: `+n+` extension not supported.`),i}}}function Vy(r,e,t,n){let i={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener(`dispose`,a),delete i[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener(`dispose`,a),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let S=0,v=M.length;S<v;S+=3){let T=M[S+0],w=M[S+1],E=M[S+2];u.push(T,w,w,E,E,T)}}else{let M=p.array;_=p.version;for(let S=0,v=M.length/3-1;S<v;S+=3){let T=S+0,w=S+1,E=S+2;u.push(T,w,w,E,E,T)}}let m=new(p.count>=65535?Wa:Ha)(u,1);m.version=_;let g=s.get(d);g&&e.remove(g),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Gy(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Hy(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ke(`WebGLInfo: Unknown draw mode:`,a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wy(r,e,t){let n=new WeakMap,i=new It;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let b=function(){E.dispose(),n.delete(o),o.removeEventListener(`dispose`,b)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let v=o.attributes.position.count*S,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*T*4*d),E=new Va(w,v,T,d);E.type=Ai,E.needsUpdate=!0;let x=S*4;for(let C=0;C<d;C++){let P=m[C],I=g[C],H=M[C],V=v*T*4*C;for(let F=0;F<P.count;F++){let G=F*x;f===!0&&(i.fromBufferAttribute(P,F),w[V+G+0]=i.x,w[V+G+1]=i.y,w[V+G+2]=i.z,w[V+G+3]=0),p===!0&&(i.fromBufferAttribute(I,F),w[V+G+4]=i.x,w[V+G+5]=i.y,w[V+G+6]=i.z,w[V+G+7]=0),_===!0&&(i.fromBufferAttribute(H,F),w[V+G+8]=i.x,w[V+G+9]=i.y,w[V+G+10]=i.z,w[V+G+11]=H.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new Se(v,T)},n.set(o,u),o.addEventListener(`dispose`,b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,`morphTexture`,a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,`morphTargetBaseInfluence`,p),l.getUniforms().setValue(r,`morphTargetInfluences`,c)}l.getUniforms().setValue(r,`morphTargetsTexture`,u.texture,t),l.getUniforms().setValue(r,`morphTargetsTextureSize`,u.size)}return{update:s}}function Xy(r,e,t,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener(`dispose`,l)===!1&&c.addEventListener(`dispose`,l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener(`dispose`,l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var qy={[ef]:`LINEAR_TONE_MAPPING`,[tf]:`REINHARD_TONE_MAPPING`,[nf]:`CINEON_TONE_MAPPING`,[4]:`ACES_FILMIC_TONE_MAPPING`,[af]:`AGX_TONE_MAPPING`,[of]:`NEUTRAL_TONE_MAPPING`,[sf]:`CUSTOM_TONE_MAPPING`};function Yy(r,e,t,n,i,s){let a=new Kn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new ir(e,t):void 0}),o=new Kn(e,t,{type:ki,depthBuffer:!1,stencilBuffer:!1}),l=new xn;l.setAttribute(`position`,new At([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new At([0,2,0,0,2,0],2));let c=new $l({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new fi(l,c),d=new ea(-1,1,1,-1,0,1),u=null,f=null,p=!1,_,m=null,g=[],M=!1;this.setSize=function(S,v){a.setSize(S,v),o.setSize(S,v);for(let T=0;T<g.length;T++){let w=g[T];w.setSize&&w.setSize(S,v)}},this.setEffects=function(S){g=S,M=g.length>0&&g[0].isRenderPass===!0;let v=a.width,T=a.height;for(let w=0;w<g.length;w++){let E=g[w];E.setSize&&E.setSize(v,T)}},this.begin=function(S,v){if(p||S.toneMapping===wi&&g.length===0)return!1;if(m=v,v!==null){let T=v.width,w=v.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return M===!1&&S.setRenderTarget(a),_=S.toneMapping,S.toneMapping=wi,!0},this.hasRenderPass=function(){return M},this.end=function(S,v){S.toneMapping=_,p=!0;let T=a,w=o;for(let E=0;E<g.length;E++){let x=g[E];if(x.enabled!==!1&&(x.render(S,w,T,v),x.needsSwap!==!1)){let b=T;T=w,w=b}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,c.defines={},ut.getTransfer(u)===gt&&(c.defines.SRGB_TRANSFER=``);let E=qy[f];E&&(c.defines[E]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(m),S.render(h,d),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Vm=new sr;var Cf=new ir(1,1);var Gm=new Va;var Hm=new Ol;var Wm=new Ya;var Mm=[];var Sm=[];var bm=new Float32Array(16);var Tm=new Float32Array(9);var wm=new Float32Array(4);function oa(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Mm[i];if(s===void 0&&(s=new Float32Array(i),Mm[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function rh(r,e){let t=Sm[e];t===void 0&&(t=new Int32Array(e),Sm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Zy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Jy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function $y(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function Ky(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function Qy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;wm.set(n),r.uniformMatrix2fv(this.addr,!1,wm),en(t,n)}}function jy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;Tm.set(n),r.uniformMatrix3fv(this.addr,!1,Tm),en(t,n)}}function eM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;bm.set(n),r.uniformMatrix4fv(this.addr,!1,bm),en(t,n)}}function tM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function nM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function iM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function rM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function sM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function aM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function oM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function lM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function cM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Cf.compareFunction=t.isReversedDepthBuffer()?Qc:Kc,s=Cf):s=Vm,t.setTexture2D(e||s,i)}function hM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hm,i)}function uM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wm,i)}function fM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gm,i)}function dM(r){switch(r){case 5126:return Zy;case 35664:return Jy;case 35665:return $y;case 35666:return Ky;case 35674:return Qy;case 35675:return jy;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return sM;case 36294:return aM;case 36295:return oM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return fM}}function pM(r,e){r.uniform1fv(this.addr,e)}function mM(r,e){let t=oa(e,this.size,2);r.uniform2fv(this.addr,t)}function gM(r,e){let t=oa(e,this.size,3);r.uniform3fv(this.addr,t)}function _M(r,e){let t=oa(e,this.size,4);r.uniform4fv(this.addr,t)}function xM(r,e){let t=oa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function vM(r,e){let t=oa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yM(r,e){let t=oa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function MM(r,e){r.uniform1iv(this.addr,e)}function SM(r,e){r.uniform2iv(this.addr,e)}function bM(r,e){r.uniform3iv(this.addr,e)}function TM(r,e){r.uniform4iv(this.addr,e)}function wM(r,e){r.uniform1uiv(this.addr,e)}function EM(r,e){r.uniform2uiv(this.addr,e)}function AM(r,e){r.uniform3uiv(this.addr,e)}function CM(r,e){r.uniform4uiv(this.addr,e)}function RM(r,e,t){let n=this.cache,i=e.length,s=rh(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Cf:a=Vm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function PM(r,e,t){let n=this.cache,i=e.length,s=rh(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Hm,s[a])}function IM(r,e,t){let n=this.cache,i=e.length,s=rh(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Wm,s[a])}function DM(r,e,t){let n=this.cache,i=e.length,s=rh(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Gm,s[a])}function LM(r){switch(r){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return _M;case 35674:return xM;case 35675:return vM;case 35676:return yM;case 5124:case 35670:return MM;case 35667:case 35671:return SM;case 35668:case 35672:return bM;case 35669:case 35673:return TM;case 5125:return wM;case 36294:return EM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return DM}}var Rf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dM(t.type)}};var Pf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LM(t.type)}};var If=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}};var Ef=/(\w+)(\])?(\[|\.)?/g;function Em(r,e){r.seq.push(e),r.map[e.id]=e}function NM(r,e,t){let n=r.name,i=n.length;for(Ef.lastIndex=0;;){let s=Ef.exec(n),a=Ef.lastIndex,o=s[1],l=s[2]===`]`,c=s[3];if(l&&(o=o|0),c===void 0||c===`[`&&a+2===i){Em(t,c===void 0?new Rf(o,r,e):new Pf(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new If(o),Em(t,d)),t=d}}}var aa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a);NM(o,e.getUniformLocation(t,o.name),this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Am(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var UM=37297;var FM=0;function OM(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?`>`:` `} ${o}: ${t[a]}`)}return n.join(`
`)}var Cm=new et;function BM(r){ut._getMatrix(Cm,ut.workingColorSpace,r);let e=`mat3( ${Cm.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(r)){case za:return[e,`LinearTransferOETF`];case gt:return[e,`sRGBTransferOETF`];default:return Ze(`WebGLProgram: Unsupported color space: `,r),[e,`LinearTransferOETF`]}}function Rm(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||``).trim();if(n&&s===``)return``;let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+OM(r.getShaderSource(e),o)}else return s}function zM(r,e){let t=BM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,`}`].join(`
`)}var kM={[ef]:`Linear`,[tf]:`Reinhard`,[nf]:`Cineon`,[4]:`ACESFilmic`,[af]:`AgX`,[of]:`Neutral`,[sf]:`Custom`};function VM(r,e){let t=kM[e];return t===void 0?(Ze(`WebGLProgram: Unsupported toneMapping:`,e),`vec3 `+r+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+r+`( vec3 color ) { return `+t+`ToneMapping( color ); }`}var eh=new O;function GM(){ut.getLuminanceCoefficients(eh);return[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${eh.x.toFixed(4)}, ${eh.y.toFixed(4)}, ${eh.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function HM(r){return[r.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,r.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(xo).join(`
`)}function WM(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push(`#define `+t+` `+n)}return e.join(`
`)}function XM(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function xo(r){return r!==``}function Pm(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(r){return r.replace(qM,ZM)}var YM=new Map;function ZM(r,e){let t=it[e];if(t===void 0){let n=YM.get(e);if(n!==void 0)t=it[n],Ze(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,e,n);else throw new Error(`THREE.WebGLProgram: Can not resolve #include <`+e+`>`)}return Df(t)}var JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(r){return r.replace(JM,$M)}function $M(r,e,t,n){let i=``;for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,`[ `+s+` ]`).replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Lm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision===`highp`?e+=`
#define HIGH_PRECISION`:r.precision===`mediump`?e+=`
#define MEDIUM_PRECISION`:r.precision===`lowp`&&(e+=`
#define LOW_PRECISION`),e}var KM={[ao]:`SHADOWMAP_TYPE_PCF`,[ta]:`SHADOWMAP_TYPE_VSM`};function QM(r){return KM[r.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var jM={[Ir]:`ENVMAP_TYPE_CUBE`,[as]:`ENVMAP_TYPE_CUBE`,[oo]:`ENVMAP_TYPE_CUBE_UV`};function eS(r){return r.envMap===!1?`ENVMAP_TYPE_CUBE`:jM[r.envMapMode]||`ENVMAP_TYPE_CUBE`}var tS={[as]:`ENVMAP_MODE_REFRACTION`};function nS(r){return r.envMap===!1?`ENVMAP_MODE_REFLECTION`:tS[r.envMapMode]||`ENVMAP_MODE_REFLECTION`}var iS={[ju]:`ENVMAP_BLENDING_MULTIPLY`,[Jp]:`ENVMAP_BLENDING_MIX`,[$p]:`ENVMAP_BLENDING_ADD`};function rS(r){return r.envMap===!1?`ENVMAP_BLENDING_NONE`:iS[r.combine]||`ENVMAP_BLENDING_NONE`}function sS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aS(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=QM(t),c=eS(t),h=nS(t),d=rS(t),u=sS(t),f=HM(t),p=WM(s),_=i.createProgram(),m,g,M=t.glslVersion?`#version `+t.glslVersion+`
`:``;t.isRawShaderMaterial?(m=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,p].filter(xo).join(`
`),m.length>0&&(m+=`
`),g=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,p].filter(xo).join(`
`),g.length>0&&(g+=`
`)):(m=[Lm(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,p,t.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,t.batching?`#define USE_BATCHING`:``,t.batchingColor?`#define USE_BATCHING_COLOR`:``,t.instancing?`#define USE_INSTANCING`:``,t.instancingColor?`#define USE_INSTANCING_COLOR`:``,t.instancingMorph?`#define USE_INSTANCING_MORPH`:``,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.map?`#define USE_MAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+h:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.displacementMap?`#define USE_DISPLACEMENTMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.mapUv?`#define MAP_UV `+t.mapUv:``,t.alphaMapUv?`#define ALPHAMAP_UV `+t.alphaMapUv:``,t.lightMapUv?`#define LIGHTMAP_UV `+t.lightMapUv:``,t.aoMapUv?`#define AOMAP_UV `+t.aoMapUv:``,t.emissiveMapUv?`#define EMISSIVEMAP_UV `+t.emissiveMapUv:``,t.bumpMapUv?`#define BUMPMAP_UV `+t.bumpMapUv:``,t.normalMapUv?`#define NORMALMAP_UV `+t.normalMapUv:``,t.displacementMapUv?`#define DISPLACEMENTMAP_UV `+t.displacementMapUv:``,t.metalnessMapUv?`#define METALNESSMAP_UV `+t.metalnessMapUv:``,t.roughnessMapUv?`#define ROUGHNESSMAP_UV `+t.roughnessMapUv:``,t.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+t.anisotropyMapUv:``,t.clearcoatMapUv?`#define CLEARCOATMAP_UV `+t.clearcoatMapUv:``,t.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+t.clearcoatNormalMapUv:``,t.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+t.clearcoatRoughnessMapUv:``,t.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+t.iridescenceMapUv:``,t.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+t.iridescenceThicknessMapUv:``,t.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+t.sheenColorMapUv:``,t.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+t.sheenRoughnessMapUv:``,t.specularMapUv?`#define SPECULARMAP_UV `+t.specularMapUv:``,t.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+t.specularColorMapUv:``,t.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+t.specularIntensityMapUv:``,t.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+t.transmissionMapUv:``,t.thicknessMapUv?`#define THICKNESSMAP_UV `+t.thicknessMapUv:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexNormals?`#define HAS_NORMAL`:``,t.vertexColors?`#define USE_COLOR`:``,t.vertexAlphas?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.flatShading?`#define FLAT_SHADED`:``,t.skinning?`#define USE_SKINNING`:``,t.morphTargets?`#define USE_MORPHTARGETS`:``,t.morphNormals&&t.flatShading===!1?`#define USE_MORPHNORMALS`:``,t.morphColors?`#define USE_MORPHCOLORS`:``,t.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+t.morphTextureStride:``,t.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+t.morphTargetsCount:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+l:``,t.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(xo).join(`
`),g=[Lm(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,p,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,t.map?`#define USE_MAP`:``,t.matcap?`#define USE_MATCAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+c:``,t.envMap?`#define `+h:``,t.envMap?`#define `+d:``,u?`#define CUBEUV_TEXEL_WIDTH `+u.texelWidth:``,u?`#define CUBEUV_TEXEL_HEIGHT `+u.texelHeight:``,u?`#define CUBEUV_MAX_MIP `+u.maxMip+`.0`:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoat?`#define USE_CLEARCOAT`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.dispersion?`#define USE_DISPERSION`:``,t.iridescence?`#define USE_IRIDESCENCE`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaTest?`#define USE_ALPHATEST`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.sheen?`#define USE_SHEEN`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexColors||t.instancingColor?`#define USE_COLOR`:``,t.vertexAlphas||t.batchingColor?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.gradientMap?`#define USE_GRADIENTMAP`:``,t.flatShading?`#define FLAT_SHADED`:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+l:``,t.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,t.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,t.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,t.toneMapping!==wi?`#define TONE_MAPPING`:``,t.toneMapping!==wi?it.tonemapping_pars_fragment:``,t.toneMapping!==wi?VM(`toneMapping`,t.toneMapping):``,t.dithering?`#define DITHERING`:``,t.opaque?`#define OPAQUE`:``,it.colorspace_pars_fragment,zM(`linearToOutputTexel`,t.outputColorSpace),GM(),t.useDepthPacking?`#define DEPTH_PACKING `+t.depthPacking:``,`
`].filter(xo).join(`
`)),a=Df(a),a=Pm(a,t),a=Im(a,t),o=Df(o),o=Pm(o,t),o=Im(o,t),a=Dm(a),o=Dm(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+m,g=[`#define varying in`,t.glslVersion===mf?``:`layout(location = 0) out highp vec4 pc_fragColor;`,t.glslVersion===mf?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let S=M+m+a,v=M+g+o,T=Am(i,i.VERTEX_SHADER,S),w=Am(i,i.FRAGMENT_SHADER,v);i.attachShader(_,T),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,`position`),i.linkProgram(_);function E(P){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||``,H=i.getShaderInfoLog(T)||``,V=i.getShaderInfoLog(w)||``,F=I.trim(),G=H.trim(),B=V.trim(),Z=!0,te=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError==`function`)r.debug.onShaderError(i,_,T,w);else{let D=Rm(i,T,`vertex`),oe=Rm(i,w,`fragment`);Ke(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+D+`
`+oe)}else F!==``?Ze(`WebGLProgram: Program Info Log:`,F):(G===``||B===``)&&(te=!1);te&&(P.diagnostics={runnable:Z,programLog:F,vertexShader:{log:G,prefix:m},fragmentShader:{log:B,prefix:g}})}i.deleteShader(T),i.deleteShader(w),x=new aa(i,_),b=XM(i,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,UM)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}var oS=0;var Lf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nf(e),t.set(e,n)),n}};var Nf=class{constructor(e){this.id=oS++,this.code=e,this.usedTimes=0}};function lS(r){return r===Nr||r===po||r===mo}function cS(r,e,t,n,i,s){let a=new Ga,o=new Lf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(x){return l.add(x),x===0?`uv`:`uv${x}`}function _(x,b,C,P,I,H){let V=P.fog,F=I.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||G,B),te=Z&&Z.mapping===oo?Z.image.height:null,D=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ze(`WebGLProgram.getParameters:`,x.precision,`not supported, using`,u,`instead.`));let oe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_e=oe!==void 0?oe.length:0,Je=0;F.morphAttributes.position!==void 0&&(Je=1),F.morphAttributes.normal!==void 0&&(Je=2),F.morphAttributes.color!==void 0&&(Je=3);let $e,Ye,K,ce;if(D){let se=Gi[D];$e=se.vertexShader,Ye=se.fragmentShader}else{$e=x.vertexShader,Ye=x.fragmentShader;let se=o.getVertexShaderStage(x),Xe=o.getFragmentShaderStage(x);o.update(x,se,Xe),K=se.id,ce=Xe.id}let ae=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),ke=I.isInstancedMesh===!0,Pe=I.isBatchedMesh===!0,Qe=!!x.map,be=!!x.matcap,Q=!!Z,ne=!!x.aoMap,ie=!!x.lightMap,N=!!x.bumpMap&&x.wireframe===!1,me=!!x.normalMap,Fe=!!x.displacementMap,De=!!x.emissiveMap,Re=!!x.metalnessMap,He=!!x.roughnessMap,L=x.anisotropy>0,ht=x.clearcoat>0,Ve=x.dispersion>0,R=x.iridescence>0,y=x.sheen>0,z=x.transmission>0,W=L&&!!x.anisotropyMap,J=ht&&!!x.clearcoatMap,fe=ht&&!!x.clearcoatNormalMap,le=ht&&!!x.clearcoatRoughnessMap,$=R&&!!x.iridescenceMap,j=R&&!!x.iridescenceThicknessMap,xe=y&&!!x.sheenColorMap,Ne=y&&!!x.sheenRoughnessMap,ve=!!x.specularMap,ge=!!x.specularColorMap,de=!!x.specularIntensityMap,Be=z&&!!x.transmissionMap,We=z&&!!x.thicknessMap,U=!!x.gradientMap,pe=!!x.alphaMap,ee=x.alphaTest>0,ye=!!x.alphaHash,Me=!!x.extensions,re=wi;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(re=r.toneMapping);let he={shaderID:D,shaderType:x.type,shaderName:x.name,vertexShader:$e,fragmentShader:Ye,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Pe,batchingColor:Pe&&I._colorsTexture!==null,instancing:ke,instancingColor:ke&&I.instanceColor!==null,instancingMorph:ke&&I.morphTexture!==null,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Qe,matcap:be,envMap:Q,envMapMode:Q&&Z.mapping,envMapCubeUVHeight:te,aoMap:ne,lightMap:ie,bumpMap:N,normalMap:me,displacementMap:Fe,emissiveMap:De,normalMapObjectSpace:me&&x.normalMapType===jp,normalMapTangentSpace:me&&x.normalMapType===$c,packedNormalMap:me&&x.normalMapType===$c&&lS(x.normalMap.format),metalnessMap:Re,roughnessMap:He,anisotropy:L,anisotropyMap:W,clearcoat:ht,clearcoatMap:J,clearcoatNormalMap:fe,clearcoatRoughnessMap:le,dispersion:Ve,iridescence:R,iridescenceMap:$,iridescenceThicknessMap:j,sheen:y,sheenColorMap:xe,sheenRoughnessMap:Ne,specularMap:ve,specularColorMap:ge,specularIntensityMap:de,transmission:z,transmissionMap:Be,thicknessMap:We,gradientMap:U,opaque:x.transparent===!1&&x.blending===ns&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:ee,alphaHash:ye,combine:x.combine,mapUv:Qe&&p(x.map.channel),aoMapUv:ne&&p(x.aoMap.channel),lightMapUv:ie&&p(x.lightMap.channel),bumpMapUv:N&&p(x.bumpMap.channel),normalMapUv:me&&p(x.normalMap.channel),displacementMapUv:Fe&&p(x.displacementMap.channel),emissiveMapUv:De&&p(x.emissiveMap.channel),metalnessMapUv:Re&&p(x.metalnessMap.channel),roughnessMapUv:He&&p(x.roughnessMap.channel),anisotropyMapUv:W&&p(x.anisotropyMap.channel),clearcoatMapUv:J&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:j&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&p(x.sheenRoughnessMap.channel),specularMapUv:ve&&p(x.specularMap.channel),specularColorMapUv:ge&&p(x.specularColorMap.channel),specularIntensityMapUv:de&&p(x.specularIntensityMap.channel),transmissionMapUv:Be&&p(x.transmissionMap.channel),thicknessMapUv:We&&p(x.thicknessMap.channel),alphaMapUv:pe&&p(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(me||L),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Qe||pe),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ce,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Je,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:Qe&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:De&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&t.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||Pe)&&t.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:t.has(`KHR_parallel_shader_compile`),customProgramCacheKey:x.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function m(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(g(b,x),M(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){let b=f[x.type],C;if(b){let P=Gi[b];C=mm.clone(P.uniforms)}else C=x.uniforms;return C}function v(x,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new aS(r,b,x,i),c.push(C),h.set(b,C)),C}function T(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:v,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:E}}function hS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function uS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Nm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Um(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,_,m,g){let M=r[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},r[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=g),e++,M}function l(u,f,p,_,m,g){let M=o(u,f,p,_,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function c(u,f,p,_,m,g){let M=o(u,f,p,_,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):t.unshift(M)}function h(u,f,p){t.length>1&&t.sort(u||uS),n.length>1&&n.sort(f||Nm),i.length>1&&i.sort(f||Nm),p&&(t.reverse(),n.reverse(),i.reverse())}function d(){for(let u=e,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function fS(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Um,r.set(n,[a])):i>=s.length?(a=new Um,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function dS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case`DirectionalLight`:t={direction:new O,color:new nt};break;case`SpotLight`:t={position:new O,direction:new O,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:t={position:new O,color:new nt,distance:0,decay:0};break;case`HemisphereLight`:t={direction:new O,skyColor:new nt,groundColor:new nt};break;case`RectAreaLight`:t={color:new nt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function pS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case`DirectionalLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case`SpotLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case`PointLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var mS=0;function gS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _S(r){let e=new dS,t=pS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,s=new Pt,a=new Pt;function o(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,M=0,S=0,v=0,T=0,w=0,E=0;c.sort(gS);for(let b=0,C=c.length;b<C;b++){let P=c[b],I=P.color,H=P.intensity,V=P.distance,F=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Nr?F=P.shadow.map.texture:F=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*H,d+=I.g*H,u+=I.b*H;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],H);E++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,Z=t.get(P);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=G,f++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(I).multiplyScalar(H),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;let B=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,B.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=B.matrix,P.castShadow){let Z=t.get(P);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=F,v++}_++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(I).multiplyScalar(H),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let B=P.shadow,Z=t.get(P);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,n.pointShadow[p]=Z,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=P.shadow.matrix,S++}n.point[p]=G,p++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(H),G.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[g]=G,g++}}m>0&&(r.has(`OES_texture_float_linear`)===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==g||x.numDirectionalShadows!==M||x.numPointShadows!==S||x.numSpotShadows!==v||x.numSpotMaps!==T||x.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,x.directionalLength=f,x.pointLength=p,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=g,x.numDirectionalShadows=M,x.numPointShadows=S,x.numSpotShadows=v,x.numSpotMaps=T,x.numLightProbes=E,n.version=mS++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,m=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let S=c[g];if(S.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Fm(r){let e=new _S(r),t=[],n=[],i=[];function s(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function xS(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new Fm(r),e.set(i,[o])):s>=a.length?(o=new Fm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var vS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;var yS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`;var MS=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)];var SS=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)];var Om=new Pt;var _o=new O;var Af=new O;function bS(r,e,t){let n=new Js,i=new Se,s=new Se,a=new It,o=new Ql,l=new jl,c={},h=t.maxTextureSize,d={[tr]:Pn,[Pn]:tr,[2]:2},u=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:vS,fragmentShader:yS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new xn;p.setAttribute(`position`,new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new fi(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let g=this.type;this.render=function(w,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===2&&(Ze(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=ao);let b=r.getRenderTarget(),C=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),I=r.state;I.setBlending(zi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let H=g!==this.type;H&&E.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(F=>F.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,F=w.length;V<F;V++){let G=w[V],B=G.shadow;if(B===void 0){Ze(`WebGLShadowMap:`,G,`has no shadow.`);continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let Z=B.getFrameExtents();i.multiply(Z),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,B.mapSize.y=s.y));let te=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=te,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ta){if(G.isPointLight){Ze(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}B.map=new Kn(i.x,i.y,{format:Nr,type:ki,minFilter:hn,magFilter:hn,generateMipmaps:!1}),B.map.texture.name=G.name+`.shadowMap`,B.map.depthTexture=new ir(i.x,i.y,Ai),B.map.depthTexture.name=G.name+`.shadowMapDepth`,B.map.depthTexture.format=Ui,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=on,B.map.depthTexture.magFilter=on}else G.isPointLight?(B.map=new nh(i.x),B.map.depthTexture=new kl(i.x,Ei)):(B.map=new Kn(i.x,i.y),B.map.depthTexture=new ir(i.x,i.y,Ei)),B.map.depthTexture.name=G.name+`.shadowMap`,B.map.depthTexture.format=Ui,this.type===ao?(B.map.depthTexture.compareFunction=te?Qc:Kc,B.map.depthTexture.minFilter=hn,B.map.depthTexture.magFilter=hn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=on,B.map.depthTexture.magFilter=on);B.camera.updateProjectionMatrix()}let D=B.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<D;oe++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,oe),r.clear();else{oe===0&&(r.setRenderTarget(B.map),r.clear());let _e=B.getViewport(oe);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),I.viewport(a)}if(G.isPointLight){let _e=B.camera,Je=B.matrix,$e=G.distance||_e.far;$e!==_e.far&&(_e.far=$e,_e.updateProjectionMatrix()),_o.setFromMatrixPosition(G.matrixWorld),_e.position.copy(_o),Af.copy(_e.position),Af.add(MS[oe]),_e.up.copy(SS[oe]),_e.lookAt(Af),_e.updateMatrixWorld(),Je.makeTranslation(-_o.x,-_o.y,-_o.z),Om.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Om,_e.coordinateSystem,_e.reversedDepth)}else B.updateMatrices(G);n=B.getFrustum(),v(E,x,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===ta&&M(B,x),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(b,C,P)};function M(w,E){let x=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Kn(i.x,i.y,{format:Nr,type:ki})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,x,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,x,f,_,null)}function S(w,E,x,b){let C=null,P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)C=P;else if(C=x.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=C.uuid,H=E.uuid,V=c[I];V===void 0&&(V={},c[I]=V);let F=V[H];F===void 0&&(F=C.clone(),V[H]=F,E.addEventListener(`dispose`,T)),C=F}if(C.visible=E.visible,C.wireframe=E.wireframe,b===ta?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=r.properties.get(C);I.light=x}return C}function v(w,E,x,b,C){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===ta)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let H=e.update(w),V=w.material;if(Array.isArray(V)){let F=H.groups;for(let G=0,B=F.length;G<B;G++){let Z=F[G],te=V[Z.materialIndex];if(te&&te.visible){let D=S(w,te,b,C);w.onBeforeShadow(r,w,E,x,H,D,Z),r.renderBufferDirect(x,null,H,D,w,Z),w.onAfterShadow(r,w,E,x,H,D,Z)}}}else if(V.visible){let F=S(w,V,b,C);w.onBeforeShadow(r,w,E,x,H,F,null),r.renderBufferDirect(x,null,H,F,w,null),w.onAfterShadow(r,w,E,x,H,F,null)}}let I=w.children;for(let H=0,V=I.length;H<V;H++)v(I[H],E,x,b,C)}function T(w){w.target.removeEventListener(`dispose`,T);for(let x in c){let b=c[x],C=w.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function TS(r,e){function t(){let U=!1,pe=new It,ee=null,ye=new It(0,0,0,0);return{setMask:function(Me){ee!==Me&&!U&&(r.colorMask(Me,Me,Me,Me),ee=Me)},setLocked:function(Me){U=Me},setClear:function(Me,re,he,se,Xe){Xe===!0&&(Me*=se,re*=se,he*=se),pe.set(Me,re,he,se),ye.equals(pe)===!1&&(r.clearColor(Me,re,he,se),ye.copy(pe))},reset:function(){U=!1,ee=null,ye.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,ee=null,ye=null,Me=null;return{setReversed:function(re){if(pe!==re){let he=e.get(`EXT_clip_control`);re?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),pe=re;let se=Me;Me=null,this.setClear(se)}},getReversed:function(){return pe},setTest:function(re){re?ae(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(re){ee!==re&&!U&&(r.depthMask(re),ee=re)},setFunc:function(re){if(pe&&(re=cm[re]),ye!==re){switch(re){case Tl:r.depthFunc(r.NEVER);break;case wl:r.depthFunc(r.ALWAYS);break;case El:r.depthFunc(r.LESS);break;case is:r.depthFunc(r.LEQUAL);break;case Al:r.depthFunc(r.EQUAL);break;case Cl:r.depthFunc(r.GEQUAL);break;case Rl:r.depthFunc(r.GREATER);break;case Pl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ye=re}},setLocked:function(re){U=re},setClear:function(re){Me!==re&&(Me=re,pe&&(re=1-re),r.clearDepth(re))},reset:function(){U=!1,ee=null,ye=null,Me=null,pe=!1}}}function i(){let U=!1,pe=null,ee=null,ye=null,Me=null,re=null,he=null,se=null,Xe=null;return{setTest:function(ue){U||(ue?ae(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(ue){pe!==ue&&!U&&(r.stencilMask(ue),pe=ue)},setFunc:function(ue,qe,Ue){(ee!==ue||ye!==qe||Me!==Ue)&&(r.stencilFunc(ue,qe,Ue),ee=ue,ye=qe,Me=Ue)},setOp:function(ue,qe,Ue){(re!==ue||he!==qe||se!==Ue)&&(r.stencilOp(ue,qe,Ue),re=ue,he=qe,se=Ue)},setLocked:function(ue){U=ue},setClear:function(ue){Xe!==ue&&(r.clearStencil(ue),Xe=ue)},reset:function(){U=!1,pe=null,ee=null,ye=null,Me=null,re=null,he=null,se=null,Xe=null}}}let s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,S=null,v=null,T=null,w=null,E=null,x=new nt(0,0,0),b=0,C=!1,P=null,I=null,H=null,V=null,F=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,te=r.getParameter(r.VERSION);te.indexOf(`WebGL`)!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(te)[1]),B=Z>=1):te.indexOf(`OpenGL ES`)!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),B=Z>=2);let D=null,oe={},_e=r.getParameter(r.SCISSOR_BOX),Je=r.getParameter(r.VIEWPORT),$e=new It().fromArray(_e),Ye=new It().fromArray(Je);function K(U,pe,ee,ye){let Me=new Uint8Array(4),re=r.createTexture();r.bindTexture(U,re),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let he=0;he<ee;he++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(pe,0,r.RGBA,1,1,ye,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(pe+he,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return re}let ce={};ce[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(r.DEPTH_TEST),a.setFunc(is),N(!1),me(Ju),ae(r.CULL_FACE),ne(zi);function ae(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Ce(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function ke(U,pe){return u[U]!==pe?(r.bindFramebuffer(U,pe),u[U]=pe,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=pe),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=pe),!0):!1}function Pe(U,pe){let ee=p,ye=!1;if(U){ee=f.get(pe),ee===void 0&&(ee=[],f.set(pe,ee));let Me=U.textures;if(ee.length!==Me.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let re=0,he=Me.length;re<he;re++)ee[re]=r.COLOR_ATTACHMENT0+re;ee.length=Me.length,ye=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,ye=!0);ye&&r.drawBuffers(ee)}function Qe(U){return _!==U?(r.useProgram(U),_=U,!0):!1}let be={[Er]:r.FUNC_ADD,[Dp]:r.FUNC_SUBTRACT,[Lp]:r.FUNC_REVERSE_SUBTRACT};be[Np]=r.MIN,be[Up]=r.MAX;let Q={[Fp]:r.ZERO,[Op]:r.ONE,[Bp]:r.SRC_COLOR,[Sl]:r.SRC_ALPHA,[Wp]:r.SRC_ALPHA_SATURATE,[Gp]:r.DST_COLOR,[kp]:r.DST_ALPHA,[zp]:r.ONE_MINUS_SRC_COLOR,[bl]:r.ONE_MINUS_SRC_ALPHA,[Hp]:r.ONE_MINUS_DST_COLOR,[Vp]:r.ONE_MINUS_DST_ALPHA,[Xp]:r.CONSTANT_COLOR,[qp]:r.ONE_MINUS_CONSTANT_COLOR,[Yp]:r.CONSTANT_ALPHA,[Zp]:r.ONE_MINUS_CONSTANT_ALPHA};function ne(U,pe,ee,ye,Me,re,he,se,Xe,ue){if(U===zi){m===!0&&(Ce(r.BLEND),m=!1);return}if(m===!1&&(ae(r.BLEND),m=!0),U!==Ip){if(U!==g||ue!==C){if((M!==Er||T!==Er)&&(r.blendEquation(r.FUNC_ADD),M=Er,T=Er),ue)switch(U){case ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $u:r.blendFunc(r.ONE,r.ONE);break;case Ku:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ke(`WebGLState: Invalid blending: `,U);break}else switch(U){case ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $u:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ku:Ke(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case Qu:Ke(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Ke(`WebGLState: Invalid blending: `,U);break}S=null,v=null,w=null,E=null,x.set(0,0,0),b=0,g=U,C=ue}return}Me=Me||pe,re=re||ee,he=he||ye,(pe!==M||Me!==T)&&(r.blendEquationSeparate(be[pe],be[Me]),M=pe,T=Me),(ee!==S||ye!==v||re!==w||he!==E)&&(r.blendFuncSeparate(Q[ee],Q[ye],Q[re],Q[he]),S=ee,v=ye,w=re,E=he),(se.equals(x)===!1||Xe!==b)&&(r.blendColor(se.r,se.g,se.b,Xe),x.copy(se),b=Xe),g=U,C=!1}function ie(U,pe){U.side===2?Ce(r.CULL_FACE):ae(r.CULL_FACE);let ee=U.side===Pn;pe&&(ee=!ee),N(ee),U.blending===ns&&U.transparent===!1?ne(zi):ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);let ye=U.stencilWrite;o.setTest(ye),ye&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),De(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function N(U){P!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),P=U)}function me(U){U!==Cp?(ae(r.CULL_FACE),U!==I&&(U===Ju?r.cullFace(r.BACK):U===Rp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),I=U}function Fe(U){U!==H&&(B&&r.lineWidth(U),H=U)}function De(U,pe,ee){U?(ae(r.POLYGON_OFFSET_FILL),(V!==pe||F!==ee)&&(V=pe,F=ee,a.getReversed()&&(pe=-pe),r.polygonOffset(pe,ee))):Ce(r.POLYGON_OFFSET_FILL)}function Re(U){U?ae(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function He(U){U===void 0&&(U=r.TEXTURE0+G-1),D!==U&&(r.activeTexture(U),D=U)}function L(U,pe,ee){ee===void 0&&(D===null?ee=r.TEXTURE0+G-1:ee=D);let ye=oe[ee];ye===void 0&&(ye={type:void 0,texture:void 0},oe[ee]=ye),(ye.type!==U||ye.texture!==pe)&&(D!==ee&&(r.activeTexture(ee),D=ee),r.bindTexture(U,pe||ce[U]),ye.type=U,ye.texture=pe)}function ht(){let U=oe[D];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ve(){try{r.compressedTexImage2D(...arguments)}catch(U){Ke(`WebGLState:`,U)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(U){Ke(`WebGLState:`,U)}}function y(){try{r.texSubImage2D(...arguments)}catch(U){Ke(`WebGLState:`,U)}}function z(){try{r.texSubImage3D(...arguments)}catch(U){Ke(`WebGLState:`,U)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(U){Ke(`WebGLState:`,U)}}function J(){try{r.compressedTexSubImage3D(...arguments)}catch(U){Ke(`WebGLState:`,U)}}function fe(){try{r.texStorage2D(...arguments)}catch(U){Ke(`WebGLState:`,U)}}function le(){try{r.texStorage3D(...arguments)}catch(U){Ke(`WebGLState:`,U)}}function $(){try{r.texImage2D(...arguments)}catch(U){Ke(`WebGLState:`,U)}}function j(){try{r.texImage3D(...arguments)}catch(U){Ke(`WebGLState:`,U)}}function xe(U){return d[U]!==void 0?d[U]:r.getParameter(U)}function Ne(U,pe){d[U]!==pe&&(r.pixelStorei(U,pe),d[U]=pe)}function ve(U){$e.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),$e.copy(U))}function ge(U){Ye.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Ye.copy(U))}function de(U,pe){let ee=c.get(pe);ee===void 0&&(ee=new WeakMap,c.set(pe,ee));let ye=ee.get(U);ye===void 0&&(ye=r.getUniformBlockIndex(pe,U.name),ee.set(U,ye))}function Be(U,pe){let ye=c.get(pe).get(U);l.get(pe)!==ye&&(r.uniformBlockBinding(pe,ye,U.__bindingPointIndex),l.set(pe,ye))}function We(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},D=null,oe={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,S=null,v=null,T=null,w=null,E=null,x=new nt(0,0,0),b=0,C=!1,P=null,I=null,H=null,V=null,F=null,$e.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Ce,bindFramebuffer:ke,drawBuffers:Pe,useProgram:Qe,setBlending:ne,setMaterial:ie,setFlipSided:N,setCullFace:me,setLineWidth:Fe,setPolygonOffset:De,setScissorTest:Re,activeTexture:He,bindTexture:L,unbindTexture:ht,compressedTexImage2D:Ve,compressedTexImage3D:R,texImage2D:$,texImage3D:j,pixelStorei:Ne,getParameter:xe,updateUBOMapping:de,uniformBlockBinding:Be,texStorage2D:fe,texStorage3D:le,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:ve,viewport:ge,reset:We}}function wS(r,e,t,n,i,s,a){let o=e.has(`WEBGL_multisampled_render_to_texture`)?e.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(R,y){return p?new OffscreenCanvas(R,y):ka(`canvas`)}function m(R,y,z){let W=1,J=Ve(R);if((J.width>z||J.height>z)&&(W=z/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<`u`&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&R instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&R instanceof ImageBitmap||typeof VideoFrame<`u`&&R instanceof VideoFrame){let fe=Math.floor(W*J.width),le=Math.floor(W*J.height);u===void 0&&(u=_(fe,le));let $=y?_(fe,le):u;return $.width=fe,$.height=le,$.getContext(`2d`).drawImage(R,0,0,fe,le),Ze(`WebGLRenderer: Texture has been resized from (`+J.width+`x`+J.height+`) to (`+fe+`x`+le+`).`),$}else return`data`in R&&Ze(`WebGLRenderer: Image in DataTexture is too big (`+J.width+`x`+J.height+`).`),R;return R}function g(R){return R.generateMipmaps}function M(R){r.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(R,y,z,W,J,fe=!1){if(R!==null){if(r[R]!==void 0)return r[R];Ze(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+R+`'`)}let le;W&&(le=e.get(`EXT_texture_norm16`),le||Ze(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let $=y;if(y===r.RED&&(z===r.FLOAT&&($=r.R32F),z===r.HALF_FLOAT&&($=r.R16F),z===r.UNSIGNED_BYTE&&($=r.R8),z===r.UNSIGNED_SHORT&&le&&($=le.R16_EXT),z===r.SHORT&&le&&($=le.R16_SNORM_EXT)),y===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.R8UI),z===r.UNSIGNED_SHORT&&($=r.R16UI),z===r.UNSIGNED_INT&&($=r.R32UI),z===r.BYTE&&($=r.R8I),z===r.SHORT&&($=r.R16I),z===r.INT&&($=r.R32I)),y===r.RG&&(z===r.FLOAT&&($=r.RG32F),z===r.HALF_FLOAT&&($=r.RG16F),z===r.UNSIGNED_BYTE&&($=r.RG8),z===r.UNSIGNED_SHORT&&le&&($=le.RG16_EXT),z===r.SHORT&&le&&($=le.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RG8UI),z===r.UNSIGNED_SHORT&&($=r.RG16UI),z===r.UNSIGNED_INT&&($=r.RG32UI),z===r.BYTE&&($=r.RG8I),z===r.SHORT&&($=r.RG16I),z===r.INT&&($=r.RG32I)),y===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RGB8UI),z===r.UNSIGNED_SHORT&&($=r.RGB16UI),z===r.UNSIGNED_INT&&($=r.RGB32UI),z===r.BYTE&&($=r.RGB8I),z===r.SHORT&&($=r.RGB16I),z===r.INT&&($=r.RGB32I)),y===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RGBA8UI),z===r.UNSIGNED_SHORT&&($=r.RGBA16UI),z===r.UNSIGNED_INT&&($=r.RGBA32UI),z===r.BYTE&&($=r.RGBA8I),z===r.SHORT&&($=r.RGBA16I),z===r.INT&&($=r.RGBA32I)),y===r.RGB&&(z===r.UNSIGNED_SHORT&&le&&($=le.RGB16_EXT),z===r.SHORT&&le&&($=le.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),y===r.RGBA){let j=fe?za:ut.getTransfer(J);z===r.FLOAT&&($=r.RGBA32F),z===r.HALF_FLOAT&&($=r.RGBA16F),z===r.UNSIGNED_BYTE&&($=j===gt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&le&&($=le.RGBA16_EXT),z===r.SHORT&&le&&($=le.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get(`EXT_color_buffer_float`),$}function T(R,y){let z;return R?y===null||y===Ei||y===ia?z=r.DEPTH24_STENCIL8:y===Ai?z=r.DEPTH32F_STENCIL8:y===na&&(z=r.DEPTH24_STENCIL8,Ze(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):y===null||y===Ei||y===ia?z=r.DEPTH_COMPONENT24:y===Ai?z=r.DEPTH_COMPONENT32F:y===na&&(z=r.DEPTH_COMPONENT16),z}function w(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==hn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function E(R){let y=R.target;y.removeEventListener(`dispose`,E),b(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(R){let y=R.target;y.removeEventListener(`dispose`,x),P(y)}function b(R){let y=n.get(R);if(y.__webglInit===void 0)return;let z=R.source,W=f.get(z);if(W){let J=W[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(R),Object.keys(W).length===0&&f.delete(z)}n.remove(R)}function C(R){let y=n.get(R);r.deleteTexture(y.__webglTexture);let z=R.source,W=f.get(z);delete W[y.__cacheKey],a.memory.textures--}function P(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let J=0;J<y.__webglFramebuffer[W].length;J++)r.deleteFramebuffer(y.__webglFramebuffer[W][J]);else r.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)r.deleteFramebuffer(y.__webglFramebuffer[W]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=R.textures;for(let W=0,J=z.length;W<J;W++){let fe=n.get(z[W]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(z[W])}n.remove(R)}let I=0;function H(){I=0}function V(){return I}function F(R){I=R}function G(){let R=I;return R>=i.maxTextures&&Ze(`WebGLTextures: Trying to use `+R+` texture units while this GPU supports only `+i.maxTextures),I+=1,R}function B(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Z(R,y){let z=n.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let W=R.image;if(W===null)Ze(`WebGLRenderer: Texture marked for update but no image data found.`);else if(W.complete===!1)Ze(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(z,R,y);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+y)}function te(R,y){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Ce(z,R,y);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+y)}function D(R,y){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Ce(z,R,y);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+y)}function oe(R,y){let z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){ke(z,R,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+y)}let _e={[Il]:r.REPEAT,[Ni]:r.CLAMP_TO_EDGE,[Dl]:r.MIRRORED_REPEAT},Je={[on]:r.NEAREST,[Kp]:r.NEAREST_MIPMAP_NEAREST,[lo]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[dc]:r.LINEAR_MIPMAP_NEAREST,[Dr]:r.LINEAR_MIPMAP_LINEAR},$e={[em]:r.NEVER,[sm]:r.ALWAYS,[tm]:r.LESS,[Kc]:r.LEQUAL,[nm]:r.EQUAL,[Qc]:r.GEQUAL,[im]:r.GREATER,[rm]:r.NOTEQUAL};function Ye(R,y){if(y.type===Ai&&e.has(`OES_texture_float_linear`)===!1&&(y.magFilter===hn||y.magFilter===dc||y.magFilter===lo||y.magFilter===Dr||y.minFilter===hn||y.minFilter===dc||y.minFilter===lo||y.minFilter===Dr)&&Ze(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),r.texParameteri(R,r.TEXTURE_WRAP_S,_e[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,_e[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,_e[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Je[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Je[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,$e[y.compareFunction])),e.has(`EXT_texture_filter_anisotropic`)===!0){if(y.magFilter===on||y.minFilter!==lo&&y.minFilter!==Dr||y.type===Ai&&e.has(`OES_texture_float_linear`)===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get(`EXT_texture_filter_anisotropic`);r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function K(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener(`dispose`,E));let W=y.source,J=f.get(W);J===void 0&&(J={},f.set(W,J));let fe=B(y);if(fe!==R.__cacheKey){J[fe]===void 0&&(J[fe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[fe].usedTimes++;let le=J[R.__cacheKey];le!==void 0&&(J[R.__cacheKey].usedTimes--,le.usedTimes===0&&C(y)),R.__cacheKey=fe,R.__webglTexture=J[fe].texture}return z}function ce(R,y,z){return Math.floor(Math.floor(R/z)/y)}function ae(R,y,z,W){let fe=R.updateRanges;if(fe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,z,W,y.data);else{fe.sort((Ne,ve)=>Ne.start-ve.start);let le=0;for(let Ne=1;Ne<fe.length;Ne++){let ve=fe[le],ge=fe[Ne],de=ve.start+ve.count,Be=ce(ge.start,y.width,4),We=ce(ve.start,y.width,4);ge.start<=de+1&&Be===We&&ce(ge.start+ge.count-1,y.width,4)===Be?ve.count=Math.max(ve.count,ge.start+ge.count-ve.start):(++le,fe[le]=ge)}fe.length=le+1;let $=t.getParameter(r.UNPACK_ROW_LENGTH),j=t.getParameter(r.UNPACK_SKIP_PIXELS),xe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Ne=0,ve=fe.length;Ne<ve;Ne++){let ge=fe[Ne],de=Math.floor(ge.start/4),Be=Math.ceil(ge.count/4),We=de%y.width,U=Math.floor(de/y.width),pe=Be;t.pixelStorei(r.UNPACK_SKIP_PIXELS,We),t.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,We,U,pe,1,z,W,y.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,$),t.pixelStorei(r.UNPACK_SKIP_PIXELS,j),t.pixelStorei(r.UNPACK_SKIP_ROWS,xe)}}function Ce(R,y,z){let W=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=r.TEXTURE_3D);let J=K(R,y),fe=y.source;t.bindTexture(W,R.__webglTexture,r.TEXTURE0+z);let le=n.get(fe);if(fe.version!==le.__version||J===!0){if(t.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<`u`&&y.image instanceof ImageBitmap)===!1){let ee=ut.getPrimaries(ut.workingColorSpace),ye=y.colorSpace===rr?null:ut.getPrimaries(y.colorSpace),Me=y.colorSpace===rr||ee===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let j=m(y.image,!1,i.maxTextureSize);j=ht(y,j);let xe=s.convert(y.format,y.colorSpace),Ne=s.convert(y.type),ve=v(y.internalFormat,xe,Ne,y.normalized,y.colorSpace,y.isVideoTexture);Ye(W,y);let ge,de=y.mipmaps,Be=y.isVideoTexture!==!0,We=le.__version===void 0||J===!0,U=fe.dataReady,pe=w(y,j);if(y.isDepthTexture)ve=T(y.format===Lr,y.type),We&&(Be?t.texStorage2D(r.TEXTURE_2D,1,ve,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,ve,j.width,j.height,0,xe,Ne,null));else if(y.isDataTexture)if(de.length>0){Be&&We&&t.texStorage2D(r.TEXTURE_2D,pe,ve,de[0].width,de[0].height);for(let ee=0,ye=de.length;ee<ye;ee++)ge=de[ee],Be?U&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ge.width,ge.height,xe,Ne,ge.data):t.texImage2D(r.TEXTURE_2D,ee,ve,ge.width,ge.height,0,xe,Ne,ge.data);y.generateMipmaps=!1}else Be?(We&&t.texStorage2D(r.TEXTURE_2D,pe,ve,j.width,j.height),U&&ae(y,j,xe,Ne)):t.texImage2D(r.TEXTURE_2D,0,ve,j.width,j.height,0,xe,Ne,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&We&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,ve,de[0].width,de[0].height,j.depth);for(let ee=0,ye=de.length;ee<ye;ee++)if(ge=de[ee],y.format!==di)if(xe!==null)if(Be){if(U)if(y.layerUpdates.size>0){let Me=Mf(ge.width,ge.height,y.format,y.type);for(let re of y.layerUpdates){let he=ge.data.subarray(re*Me/ge.data.BYTES_PER_ELEMENT,(re+1)*Me/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,re,ge.width,ge.height,1,xe,he)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,j.depth,xe,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,ve,ge.width,ge.height,j.depth,0,ge.data,0,0);else Ze(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else Be?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,j.depth,xe,Ne,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,ve,ge.width,ge.height,j.depth,0,xe,Ne,ge.data)}else{Be&&We&&t.texStorage2D(r.TEXTURE_2D,pe,ve,de[0].width,de[0].height);for(let ee=0,ye=de.length;ee<ye;ee++)ge=de[ee],y.format!==di?xe!==null?Be?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,ge.width,ge.height,xe,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,ve,ge.width,ge.height,0,ge.data):Ze(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):Be?U&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ge.width,ge.height,xe,Ne,ge.data):t.texImage2D(r.TEXTURE_2D,ee,ve,ge.width,ge.height,0,xe,Ne,ge.data)}else if(y.isDataArrayTexture)if(Be){if(We&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,ve,j.width,j.height,j.depth),U)if(y.layerUpdates.size>0){let ee=Mf(j.width,j.height,y.format,y.type);for(let ye of y.layerUpdates){let Me=j.data.subarray(ye*ee/j.data.BYTES_PER_ELEMENT,(ye+1)*ee/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,j.width,j.height,1,xe,Ne,Me)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,xe,Ne,j.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ve,j.width,j.height,j.depth,0,xe,Ne,j.data);else if(y.isData3DTexture)Be?(We&&t.texStorage3D(r.TEXTURE_3D,pe,ve,j.width,j.height,j.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,xe,Ne,j.data)):t.texImage3D(r.TEXTURE_3D,0,ve,j.width,j.height,j.depth,0,xe,Ne,j.data);else if(y.isFramebufferTexture){if(We)if(Be)t.texStorage2D(r.TEXTURE_2D,pe,ve,j.width,j.height);else{let ee=j.width,ye=j.height;for(let Me=0;Me<pe;Me++)t.texImage2D(r.TEXTURE_2D,Me,ve,ee,ye,0,xe,Ne,null),ee>>=1,ye>>=1}}else if(y.isHTMLTexture){if(`texElementImage2D`in r){let ee=r.canvas;if(ee.hasAttribute(`layoutsubtree`)||ee.setAttribute(`layoutsubtree`,`true`),j.parentNode!==ee){ee.appendChild(j),d.add(y),ee.onpaint=ye=>{let Me=ye.changedElements;for(let re of d)Me.includes(re.image)&&(re.needsUpdate=!0)},ee.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,j);else{let Me=r.RGBA,re=r.RGBA,he=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Me,re,he,j)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(de.length>0){if(Be&&We){let ee=Ve(de[0]);t.texStorage2D(r.TEXTURE_2D,pe,ve,ee.width,ee.height)}for(let ee=0,ye=de.length;ee<ye;ee++)ge=de[ee],Be?U&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,xe,Ne,ge):t.texImage2D(r.TEXTURE_2D,ee,ve,xe,Ne,ge);y.generateMipmaps=!1}else if(Be){if(We){let ee=Ve(j);t.texStorage2D(r.TEXTURE_2D,pe,ve,ee.width,ee.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,Ne,j)}else t.texImage2D(r.TEXTURE_2D,0,ve,xe,Ne,j);g(y)&&M(W),le.__version=fe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ke(R,y,z){if(y.image.length!==6)return;let W=K(R,y),J=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);let fe=n.get(J);if(J.version!==fe.__version||W===!0){t.activeTexture(r.TEXTURE0+z);let le=ut.getPrimaries(ut.workingColorSpace),$=y.colorSpace===rr?null:ut.getPrimaries(y.colorSpace),j=y.colorSpace===rr||le===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let xe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!xe&&!Ne?ve[re]=m(y.image[re],!0,i.maxCubemapSize):ve[re]=Ne?y.image[re].image:y.image[re],ve[re]=ht(y,ve[re]);let ge=ve[0],de=s.convert(y.format,y.colorSpace),Be=s.convert(y.type),We=v(y.internalFormat,de,Be,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,pe=fe.__version===void 0||W===!0,ee=J.dataReady,ye=w(y,ge);Ye(r.TEXTURE_CUBE_MAP,y);let Me;if(xe){U&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,We,ge.width,ge.height);for(let re=0;re<6;re++){Me=ve[re].mipmaps;for(let he=0;he<Me.length;he++){let se=Me[he];y.format!==di?de!==null?U?ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he,0,0,se.width,se.height,de,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he,We,se.width,se.height,0,se.data):Ze(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):U?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he,0,0,se.width,se.height,de,Be,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he,We,se.width,se.height,0,de,Be,se.data)}}}else{if(Me=y.mipmaps,U&&pe){Me.length>0&&ye++;let re=Ve(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,We,re.width,re.height)}for(let re=0;re<6;re++)if(Ne){U?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,de,Be,ve[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,ve[re].width,ve[re].height,0,de,Be,ve[re].data);for(let he=0;he<Me.length;he++){let Xe=Me[he].image[re].image;U?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he+1,0,0,Xe.width,Xe.height,de,Be,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he+1,We,Xe.width,Xe.height,0,de,Be,Xe.data)}}else{U?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,de,Be,ve[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,de,Be,ve[re]);for(let he=0;he<Me.length;he++){let se=Me[he];U?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he+1,0,0,de,Be,se.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he+1,We,de,Be,se.image[re])}}}g(y)&&M(r.TEXTURE_CUBE_MAP),fe.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Pe(R,y,z,W,J,fe){let le=s.convert(z.format,z.colorSpace),$=s.convert(z.type),j=v(z.internalFormat,le,$,z.normalized,z.colorSpace),xe=n.get(y),Ne=n.get(z);if(Ne.__renderTarget=y,!xe.__hasExternalTextures){let ve=Math.max(1,y.width>>fe),ge=Math.max(1,y.height>>fe);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,fe,j,ve,ge,y.depth,0,le,$,null):t.texImage2D(J,fe,j,ve,ge,0,le,$,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),He(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,J,Ne.__webglTexture,0,Re(y)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,J,Ne.__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(R,y,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){let W=y.depthTexture,J=W&&W.isDepthTexture?W.type:null,fe=T(y.stencilBuffer,J),le=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;He(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re(y),fe,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re(y),fe,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,fe,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,R)}else{let W=y.textures;for(let J=0;J<W.length;J++){let fe=W[J],le=s.convert(fe.format,fe.colorSpace),$=s.convert(fe.type),j=v(fe.internalFormat,le,$,fe.normalized,fe.colorSpace);He(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re(y),j,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re(y),j,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,j,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(R,y,z){let W=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let J=n.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener(`dispose`,E)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Ye(r.TEXTURE_CUBE_MAP,y.depthTexture);let xe=s.convert(y.depthTexture.format),Ne=s.convert(y.depthTexture.type),ve;y.depthTexture.format===Ui?ve=r.DEPTH_COMPONENT24:y.depthTexture.format===Lr&&(ve=r.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,y.width,y.height,0,xe,Ne,null)}}else Z(y.depthTexture,0);let fe=J.__webglTexture,le=Re(y),$=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,j=y.depthTexture.format===Lr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ui)He(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,fe,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,fe,0);else if(y.depthTexture.format===Lr)He(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,fe,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,j,$,fe,0);else throw new Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Q(R){let y=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener(`dispose`,J)};W.addEventListener(`dispose`,J),y.__depthDisposeCallback=J}y.__boundDepthTexture=W}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)be(y.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?be(y.__webglFramebuffer[0],R,0):be(y.__webglFramebuffer,R,0)}else if(z){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=r.createRenderbuffer(),Qe(y.__webglDepthbuffer[W],R,!1);else{let J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=y.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,fe)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Qe(y.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,fe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(R,y,z){let W=n.get(R);y!==void 0&&Pe(W.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Q(R)}function ie(R){let y=R.texture,z=n.get(R),W=n.get(y);R.addEventListener(`dispose`,x);let J=R.textures,fe=R.isWebGLCubeRenderTarget===!0,le=J.length>1;if(le||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=y.version,a.memory.textures++),fe){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let j=0;j<y.mipmaps.length;j++)z.__webglFramebuffer[$][j]=r.createFramebuffer()}else z.__webglFramebuffer[$]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)z.__webglFramebuffer[$]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(le)for(let $=0,j=J.length;$<j;$++){let xe=n.get(J[$]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&He(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let j=J[$];z.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[$]);let xe=s.convert(j.format,j.colorSpace),Ne=s.convert(j.type),ve=v(j.internalFormat,xe,Ne,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),ge=Re(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,ve,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,z.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Qe(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),Ye(r.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)Pe(z.__webglFramebuffer[$][j],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else Pe(z.__webglFramebuffer[$],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);g(y)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let $=0,j=J.length;$<j;$++){let xe=J[$],Ne=n.get(xe),ve=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ne.__webglTexture),Ye(ve,xe),Pe(z.__webglFramebuffer,R,xe,r.COLOR_ATTACHMENT0+$,ve,0),g(xe)&&M(ve)}t.unbindTexture()}else{let $=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,W.__webglTexture),Ye($,y),y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)Pe(z.__webglFramebuffer[j],R,y,r.COLOR_ATTACHMENT0,$,j);else Pe(z.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,$,0);g(y)&&M($),t.unbindTexture()}R.depthBuffer&&Q(R)}function N(R){let y=R.textures;for(let z=0,W=y.length;z<W;z++){let J=y[z];if(g(J)){let fe=S(R),le=n.get(J).__webglTexture;t.bindTexture(fe,le),M(fe),t.unbindTexture()}}}let me=[],Fe=[];function De(R){if(R.samples>0){if(He(R)===!1){let y=R.textures,z=R.width,W=R.height,J=r.COLOR_BUFFER_BIT,fe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=n.get(R),$=y.length>1;if($)for(let xe=0;xe<y.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let j=R.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let xe=0;xe<y.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,le.__webglColorRenderbuffer[xe]);let Ne=n.get(y[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ne,0)}r.blitFramebuffer(0,0,z,W,0,0,z,W,J,r.NEAREST),l===!0&&(me.length=0,Fe.length=0,me.push(r.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(me.push(fe),Fe.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let xe=0;xe<y.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,le.__webglColorRenderbuffer[xe]);let Ne=n.get(y[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,Ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Re(R){return Math.min(i.maxSamples,R.samples)}function He(R){let y=n.get(R);return R.samples>0&&e.has(`WEBGL_multisampled_render_to_texture`)===!0&&y.__useRenderToTexture!==!1}function L(R){let y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function ht(R,y){let z=R.colorSpace,W=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Ba&&z!==rr&&(ut.getTransfer(z)===gt?(W!==di||J!==kn)&&Ze(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Ke(`WebGLTextures: Unsupported texture color space:`,z)),y}function Ve(R){return typeof HTMLImageElement<`u`&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<`u`&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=V,this.setTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=te,this.setTexture3D=D,this.setTextureCube=oe,this.rebindTextures=ne,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ES(r,e){function t(n,i=rr){let s,a=ut.getTransfer(i);if(n===kn)return r.UNSIGNED_BYTE;if(n===mc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===hf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===uf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===lf)return r.BYTE;if(n===cf)return r.SHORT;if(n===na)return r.UNSIGNED_SHORT;if(n===pc)return r.INT;if(n===Ei)return r.UNSIGNED_INT;if(n===Ai)return r.FLOAT;if(n===ki)return r.HALF_FLOAT;if(n===ff)return r.ALPHA;if(n===df)return r.RGB;if(n===di)return r.RGBA;if(n===Ui)return r.DEPTH_COMPONENT;if(n===Lr)return r.DEPTH_STENCIL;if(n===pf)return r.RED;if(n===_c)return r.RED_INTEGER;if(n===Nr)return r.RG;if(n===xc)return r.RG_INTEGER;if(n===vc)return r.RGBA_INTEGER;if(n===co||n===ho||n===uo||n===fo)if(a===gt)if(s=e.get(`WEBGL_compressed_texture_s3tc_srgb`),s!==null){if(n===co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get(`WEBGL_compressed_texture_s3tc`),s!==null){if(n===co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===Mc||n===Sc||n===bc)if(s=e.get(`WEBGL_compressed_texture_pvrtc`),s!==null){if(n===yc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tc||n===wc||n===Ec||n===Ac||n===Cc||n===po||n===Rc)if(s=e.get(`WEBGL_compressed_texture_etc`),s!==null){if(n===Tc||n===wc)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ec)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ac)return s.COMPRESSED_R11_EAC;if(n===Cc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===po)return s.COMPRESSED_RG11_EAC;if(n===Rc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pc||n===Ic||n===Dc||n===Lc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc)if(s=e.get(`WEBGL_compressed_texture_astc`),s!==null){if(n===Pc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ic)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wc||n===Xc||n===qc)if(s=e.get(`EXT_texture_compression_bptc`),s!==null){if(n===Wc)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===Zc||n===mo||n===Jc)if(s=e.get(`EXT_texture_compression_rgtc`),s!==null){if(n===Yc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var AS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`;var CS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;var Uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jn({vertexShader:AS,fragmentShader:CS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new io(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var Ff=class extends Fi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o=`local-floor`,l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<`u`,m=new Uf,g={},M=t.getContextAttributes(),S=null,v=null,T=[],w=[],E=new Se,x=null,b=new Rn;b.viewport=new It;let C=new Rn;C.viewport=new It;let P=[b,C],I=new hc,H=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=T[K];return ce===void 0&&(ce=new Zs,T[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=T[K];return ce===void 0&&(ce=new Zs,T[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=T[K];return ce===void 0&&(ce=new Zs,T[K]=ce),ce.getHandSpace()};function F(K){let ce=w.indexOf(K.inputSource);if(ce===-1)return;let ae=T[ce];ae!==void 0&&(ae.update(K.inputSource,K.frame,c||a),ae.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){i.removeEventListener(`select`,F),i.removeEventListener(`selectstart`,F),i.removeEventListener(`selectend`,F),i.removeEventListener(`squeeze`,F),i.removeEventListener(`squeezestart`,F),i.removeEventListener(`squeezeend`,F),i.removeEventListener(`end`,G),i.removeEventListener(`inputsourceschange`,B);for(let K=0;K<T.length;K++){let ce=w[K];ce!==null&&(w[K]=null,T[K].disconnect(ce))}H=null,V=null,m.reset();for(let K in g)delete g[K];e.setRenderTarget(S),f=null,u=null,d=null,i=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ze(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ze(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=e.getRenderTarget(),i.addEventListener(`select`,F),i.addEventListener(`selectstart`,F),i.addEventListener(`selectend`,F),i.addEventListener(`squeeze`,F),i.addEventListener(`squeezestart`,F),i.addEventListener(`squeezeend`,F),i.addEventListener(`end`,G),i.addEventListener(`inputsourceschange`,B),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),_&&`createProjectionLayer`in XRWebGLBinding.prototype){let ae=null,Ce=null,ke=null;M.depth&&(ke=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=M.stencil?Lr:Ui,Ce=M.stencil?ia:Ei);let Pe={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Pe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Kn(u.textureWidth,u.textureHeight,{format:di,type:kn,depthTexture:new ir(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kn(f.framebufferWidth,f.framebufferHeight,{format:di,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(K){for(let ce=0;ce<K.removed.length;ce++){let ae=K.removed[ce],Ce=w.indexOf(ae);Ce>=0&&(w[Ce]=null,T[Ce].disconnect(ae))}for(let ce=0;ce<K.added.length;ce++){let ae=K.added[ce],Ce=w.indexOf(ae);if(Ce===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=w.length){w.push(ae),Ce=Pe;break}else if(w[Pe]===null){w[Pe]=ae,Ce=Pe;break}if(Ce===-1)break}let ke=T[Ce];ke&&ke.connect(ae)}}let Z=new O,te=new O;function D(K,ce,ae){Z.setFromMatrixPosition(ce.matrixWorld),te.setFromMatrixPosition(ae.matrixWorld);let Ce=Z.distanceTo(te),ke=ce.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,Qe=ke[14]/(ke[10]-1),be=ke[14]/(ke[10]+1),Q=(ke[9]+1)/ke[5],ne=(ke[9]-1)/ke[5],ie=(ke[8]-1)/ke[0],N=(Pe[8]+1)/Pe[0],me=Qe*ie,Fe=Qe*N,De=Ce/(-ie+N),Re=De*-ie;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Re),K.translateZ(De),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ke[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let He=Qe+De,L=be+De,ht=me-Re,Ve=Fe+(Ce-Re),R=Q*be/L*He,y=ne*be/L*He;K.projectionMatrix.makePerspective(ht,Ve,R,y,He,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ce=K.near,ae=K.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),I.near=C.near=b.near=ce,I.far=C.far=b.far=ae,(H!==I.near||V!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),H=I.near,V=I.far),I.layers.mask=K.layers.mask|6,b.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;let Ce=K.parent,ke=I.cameras;oe(I,Ce);for(let Pe=0;Pe<ke.length;Pe++)oe(ke[Pe],Ce);ke.length===2?D(I,b,C):I.projectionMatrix.copy(b.projectionMatrix),_e(K,I,Ce)};function _e(K,ce,ae){ae===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Nl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(K){return g[K]};let Je=null;function $e(K,ce){if(h=ce.getViewerPose(c||a),p=ce,h!==null){let ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ce=!1;ae.length!==I.cameras.length&&(I.cameras.length=0,Ce=!0);for(let be=0;be<ae.length;be++){let Q=ae[be],ne=null;if(f!==null)ne=f.getViewport(Q);else{let N=d.getViewSubImage(u,Q);ne=N.viewport,be===0&&(e.setRenderTargetTextures(v,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(v))}let ie=P[be];ie===void 0&&(ie=new Rn,ie.layers.enable(be),ie.viewport=new It,P[be]=ie),ie.matrix.fromArray(Q.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Q.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ne.x,ne.y,ne.width,ne.height),be===0&&(I.matrix.copy(ie.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ce===!0&&I.cameras.push(ie)}let ke=i.enabledFeatures;if(ke&&ke.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&_){d=n.getBinding();let be=d.getDepthInformation(ae[0]);be&&be.isValid&&be.texture&&m.init(be,i.renderState)}if(ke&&ke.includes(`camera-access`)&&_){e.state.unbindTexture(),d=n.getBinding();for(let be=0;be<ae.length;be++){let Q=ae[be].camera;if(Q){let ne=g[Q];ne||(ne=new Za,g[Q]=ne);let ie=d.getCameraImage(Q);ne.sourceTexture=ie}}}}for(let ae=0;ae<T.length;ae++){let Ce=w[ae],ke=T[ae];Ce!==null&&ke!==void 0&&ke.update(Ce,ce,c||a)}Je&&Je(K,ce),ce.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:ce}),p=null}let Ye=new zm;Ye.setAnimationLoop($e),this.setAnimationLoop=function(K){Je=K},this.dispose=function(){}}};var RS=new Pt;var Xm=new et;Xm.set(-1,0,0,0,1,0,0,0,1);function PS(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,xf(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,S,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=e.get(g),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(RS.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function IS(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let w=T.program;n.uniformBlockBinding(v,w)}function c(v,T){let w=i[v.id];w===void 0&&(m(v),w=h(v),i[v.id]=w,v.addEventListener(`dispose`,M));let E=T.program;n.updateUBOMapping(v,E);let x=e.render.frame;s[v.id]!==x&&(u(v),s[v.id]=x)}function h(v){let T=d();v.__bindingPointIndex=T;let w=r.createBuffer(),E=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,E,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,w),w}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ke(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function u(v){let T=i[v.id],w=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let x=0,b=w.length;x<b;x++){let C=w[x];if(Array.isArray(C))for(let P=0,I=C.length;P<I;P++)f(C[P],x,P,E);else f(C,x,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,T,w,E){if(_(v,T,w,E)===!0){let x=v.__offset,b=v.value;if(Array.isArray(b)){let C=0;for(let P=0;P<b.length;P++){let I=b[P],H=g(I);p(I,v.__data,C),typeof I!=`number`&&typeof I!=`boolean`&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function p(v,T,w){typeof v==`number`||typeof v==`boolean`?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,w)}function _(v,T,w,E){let x=v.value,b=T+`_`+w;if(E[b]===void 0)return typeof x==`number`||typeof x==`boolean`?E[b]=x:ArrayBuffer.isView(x)?E[b]=x.slice():E[b]=x.clone(),!0;{let C=E[b];if(typeof x==`number`||typeof x==`boolean`){if(C!==x)return E[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(v){let T=v.uniforms,w=0,E=16;for(let b=0,C=T.length;b<C;b++){let P=Array.isArray(T[b])?T[b]:[T[b]];for(let I=0,H=P.length;I<H;I++){let V=P[I],F=Array.isArray(V.value)?V.value:[V.value];for(let G=0,B=F.length;G<B;G++){let Z=F[G],te=g(Z),D=w%E,oe=D%te.boundary,_e=D+oe;w+=oe,_e!==0&&E-_e<te.storage&&(w+=E-_e),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=te.storage}}}let x=w%E;return x>0&&(w+=E-x),v.__size=w,v.__cache={},this}function g(v){let T={boundary:0,storage:0};return typeof v==`number`||typeof v==`boolean`?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ze(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ze(`WebGLRenderer: Unsupported uniform value type.`,v),T}function M(v){let T=v.target;T.removeEventListener(`dispose`,M);let w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function S(){for(let v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:S}}var DS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var Vi=null;function LS(){return Vi===null&&(Vi=new Bl(DS,16,16,Nr,ki),Vi.name=`DFG_LUT`,Vi.minFilter=hn,Vi.magFilter=hn,Vi.wrapS=Ni,Vi.wrapT=Ni,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}var Bm=class{constructor(e={}){let{canvas:t=am(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=kn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw new Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let _=f,m=new Set([vc,xc,_c]),g=new Set([kn,Ei,na,ia,mc,gc]),M=new Uint32Array(4),S=new Int32Array(4),v=new O,T=null,w=null,E=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,I=null,H=null,V=null,F=null;this._outputColorSpace=Jn;let G=0,B=0,Z=null,te=-1,D=null,oe=new It,_e=new It,Je=null,$e=new nt(0),Ye=0,K=t.width,ce=t.height,ae=1,Ce=null,ke=null,Pe=new It(0,0,K,ce),Qe=new It(0,0,K,ce),be=!1,Q=new Js,ne=!1,ie=!1,N=new Pt,me=new O,Fe=new It,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function He(){return Z===null?ae:1}let L=n;function ht(A,k){return t.getContext(A,k)}try{let A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,Xe,!1),t.addEventListener(`webglcontextrestored`,ue,!1),t.addEventListener(`webglcontextcreationerror`,qe,!1),L===null){let k=`webgl2`;if(L=ht(k,A),L===null)throw ht(k)?new Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):new Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(A){throw Ke(`WebGLRenderer: `+A.message),A}let Ve,R,y,z,W,J,fe,le,$,j,xe,Ne,ve,ge,de,Be,We,U,pe,ee,ye,Me,re;function he(){Ve=new ky(L),Ve.init(),ye=new ES(L,Ve),R=new Dy(L,Ve,e,ye),y=new TS(L,Ve),R.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),H=L.createFramebuffer(),V=L.createFramebuffer(),F=L.createFramebuffer(),z=new Hy(L),W=new hS,J=new wS(L,Ve,y,W,R,ye,z),fe=new zy(C),le=new Y0(L),Me=new Py(L,le),$=new Vy(L,le,z,Me),j=new Xy(L,$,le,Me,z),U=new Wy(L,R,J),de=new Ly(W),xe=new cS(C,fe,Ve,R,Me,de),Ne=new PS(C,W),ve=new fS,ge=new xS(Ve),We=new Ry(C,fe,y,j,p,l),Be=new bS(C,j,R),re=new IS(L,z,R,y),pe=new Iy(L,Ve,z),ee=new Gy(L,Ve,z),z.programs=xe.programs,C.capabilities=R,C.extensions=Ve,C.properties=W,C.renderLists=ve,C.shadowMap=Be,C.state=y,C.info=z}he(),_!==kn&&(b=new Yy(_,t.width,t.height,o,i,s));let se=new Ff(C,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=Ve.get(`WEBGL_lose_context`);A&&A.loseContext()},this.forceContextRestore=function(){let A=Ve.get(`WEBGL_lose_context`);A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(K,ce,!1))},this.getSize=function(A){return A.set(K,ce)},this.setSize=function(A,k,Y=!0){if(se.isPresenting){Ze(`WebGLRenderer: Can't change size while VR device is presenting.`);return}K=A,ce=k,t.width=Math.floor(A*ae),t.height=Math.floor(k*ae),Y===!0&&(t.style.width=A+`px`,t.style.height=k+`px`),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(K*ae,ce*ae).floor()},this.setDrawingBufferSize=function(A,k,Y){K=A,ce=k,ae=Y,t.width=Math.floor(A*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(_===kn){Ke(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){Ze(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(oe)},this.getViewport=function(A){return A.copy(Pe)},this.setViewport=function(A,k,Y,X){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,k,Y,X),y.viewport(oe.copy(Pe).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(Qe)},this.setScissor=function(A,k,Y,X){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,k,Y,X),y.scissor(_e.copy(Qe).multiplyScalar(ae).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(A){y.setScissorTest(be=A)},this.setOpaqueSort=function(A){Ce=A},this.setTransparentSort=function(A){ke=A},this.getClearColor=function(A){return A.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,Y=!0){let X=0;if(A){let q=!1;if(Z!==null){let Te=Z.texture.format;q=m.has(Te)}if(q){let Te=Z.texture.type,we=g.has(Te),Ae=We.getClearColor(),Oe=We.getClearAlpha(),ze=Ae.r,tt=Ae.g,rt=Ae.b;we?(M[0]=ze,M[1]=tt,M[2]=rt,M[3]=Oe,L.clearBufferuiv(L.COLOR,0,M)):(S[0]=ze,S[1]=tt,S[2]=rt,S[3]=Oe,L.clearBufferiv(L.COLOR,0,S))}else X|=L.COLOR_BUFFER_BIT}k&&(X|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Xe,!1),t.removeEventListener(`webglcontextrestored`,ue,!1),t.removeEventListener(`webglcontextcreationerror`,qe,!1),We.dispose(),ve.dispose(),ge.dispose(),W.dispose(),fe.dispose(),j.dispose(),Me.dispose(),re.dispose(),xe.dispose(),se.dispose(),se.removeEventListener(`sessionstart`,Rt),se.removeEventListener(`sessionend`,yt),dt.stop()};function Xe(A){A.preventDefault(),gf(`WebGLRenderer: Context Lost.`),P=!0}function ue(){gf(`WebGLRenderer: Context Restored.`),P=!1;let A=z.autoReset,k=Be.enabled,Y=Be.autoUpdate,X=Be.needsUpdate,q=Be.type;he(),z.autoReset=A,Be.enabled=k,Be.autoUpdate=Y,Be.needsUpdate=X,Be.type=q}function qe(A){Ke(`WebGLRenderer: A WebGL context could not be created. Reason: `,A.statusMessage)}function Ue(A){let k=A.target;k.removeEventListener(`dispose`,Ue),je(k)}function je(A){Yt(A),W.remove(A)}function Yt(A){let k=W.get(A).programs;k!==void 0&&(k.forEach(function(Y){xe.releaseProgram(Y)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Y,X,q,Te){k===null&&(k=De);let we=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ae=sn(A,k,Y,X,q);y.setMaterial(X,we);let Oe=Y.index,ze=1;if(X.wireframe===!0){if(Oe=$.getWireframeAttribute(Y),Oe===void 0)return;ze=2}let tt=Y.drawRange,rt=Y.attributes.position,Ge=tt.start*ze,vt=(tt.start+tt.count)*ze;Te!==null&&(Ge=Math.max(Ge,Te.start*ze),vt=Math.min(vt,(Te.start+Te.count)*ze)),Oe!==null?(Ge=Math.max(Ge,0),vt=Math.min(vt,Oe.count)):rt!=null&&(Ge=Math.max(Ge,0),vt=Math.min(vt,rt.count));let Wt=vt-Ge;if(Wt<0||Wt===Infinity)return;Me.setup(q,X,Ae,Y,Oe);let Bt,Mt=pe;if(Oe!==null&&(Bt=le.get(Oe),Mt=ee,Mt.setIndex(Bt)),q.isMesh)X.wireframe===!0?(y.setLineWidth(X.wireframeLinewidth*He()),Mt.setMode(L.LINES)):Mt.setMode(L.TRIANGLES);else if(q.isLine){let mn=X.linewidth;mn===void 0&&(mn=1),y.setLineWidth(mn*He()),q.isLineSegments?Mt.setMode(L.LINES):q.isLineLoop?Mt.setMode(L.LINE_LOOP):Mt.setMode(L.LINE_STRIP)}else q.isPoints?Mt.setMode(L.POINTS):q.isSprite&&Mt.setMode(L.TRIANGLES);if(q.isBatchedMesh)if(Ve.get(`WEBGL_multi_draw`))Mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let mn=q._multiDrawStarts,Ie=q._multiDrawCounts,qn=q._multiDrawCount,mt=Oe?le.get(Oe).bytesPerElement:1,hi=W.get(X).currentProgram.getUniforms();for(let Ii=0;Ii<qn;Ii++)hi.setValue(L,`_gl_DrawID`,Ii),Mt.render(mn[Ii]/mt,Ie[Ii])}else if(q.isInstancedMesh)Mt.renderInstances(Ge,Wt,q.count);else if(Y.isInstancedBufferGeometry){let mn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:Infinity,Ie=Math.min(Y.instanceCount,mn);Mt.renderInstances(Ge,Wt,Ie)}else Mt.render(Ge,Wt)};function ot(A,k,Y){A.transparent===!0&&A.side===2&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,Ot(A,k,Y),A.side=tr,A.needsUpdate=!0,Ot(A,k,Y),A.side=2):Ot(A,k,Y)}this.compile=function(A,k,Y=null){Y===null&&(Y=A),w=ge.get(Y),w.init(k),x.push(w),Y.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),A!==Y&&A.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights();let X=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Te=q.material;if(Te)if(Array.isArray(Te))for(let we=0;we<Te.length;we++){let Ae=Te[we];ot(Ae,Y,q),X.add(Ae)}else ot(Te,Y,q),X.add(Te)}),w=x.pop(),X},this.compileAsync=function(A,k,Y=null){let X=this.compile(A,k,Y);return new Promise(q=>{function Te(){if(X.forEach(function(we){W.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){q(A);return}setTimeout(Te,10)}Ve.get(`KHR_parallel_shader_compile`)!==null?Te():setTimeout(Te,10)})};let Ct=null;function rn(A){Ct&&Ct(A)}function Rt(){dt.stop()}function yt(){dt.start()}let dt=new zm;dt.setAnimationLoop(rn),typeof self<`u`&&dt.setContext(self),this.setAnimationLoop=function(A){Ct=A,se.setAnimationLoop(A),A===null?dt.stop():dt.start()},se.addEventListener(`sessionstart`,Rt),se.addEventListener(`sessionend`,yt),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Ke(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(P===!0)return;I!==null&&I.renderStart(A,k);let Y=se.enabled===!0&&se.isPresenting===!0,X=b!==null&&(Z===null||Y)&&b.begin(C,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,k,Z),w=ge.get(A,x.length),w.init(k),w.state.textureUnits=J.getTextureUnits(),x.push(w),N.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(N,bi,k.reversedDepth),ie=this.localClippingEnabled,ne=de.init(this.clippingPlanes,ie),T=ve.get(A,E.length),T.init(),E.push(T),se.enabled===!0&&se.isPresenting===!0){let we=C.xr.getDepthSensingMesh();we!==null&&An(we,k,-Infinity,C.sortObjects)}An(A,k,0,C.sortObjects),T.finish(),C.sortObjects===!0&&T.sort(Ce,ke,k.reversedDepth),Re=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Re&&We.addToRenderList(T,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&de.beginShadows();let q=w.state.shadowsArray;if(Be.render(q,A,k),ne===!0&&de.endShadows(),(X&&b.hasRenderPass())===!1){let we=T.opaque,Ae=T.transmissive;if(w.setupLights(),k.isArrayCamera){let Oe=k.cameras;if(Ae.length>0)for(let ze=0,tt=Oe.length;ze<tt;ze++){let rt=Oe[ze];pn(we,Ae,A,rt)}Re&&We.render(A);for(let ze=0,tt=Oe.length;ze<tt;ze++){let rt=Oe[ze];wt(T,A,rt,rt.viewport)}}else Ae.length>0&&pn(we,Ae,A,k),Re&&We.render(A),wt(T,A,k)}Z!==null&&B===0&&(J.updateMultisampleRenderTarget(Z),J.updateRenderTargetMipmap(Z)),X&&b.end(C),A.isScene===!0&&A.onAfterRender(C,A,k),Me.resetDefaultState(),te=-1,D=null,x.pop(),x.length>0?(w=x[x.length-1],J.setTextureUnits(w.state.textureUnits),ne===!0&&de.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?T=E[E.length-1]:T=null,I!==null&&I.renderEnd()};function An(A,k,Y,X){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){X&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);let we=j.update(A),Ae=A.material;Ae.visible&&T.push(A,we,Ae,Y,Fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){let we=j.update(A),Ae=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Fe.copy(we.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Ae)){let Oe=we.groups;for(let ze=0,tt=Oe.length;ze<tt;ze++){let rt=Oe[ze],Ge=Ae[rt.materialIndex];Ge&&Ge.visible&&T.push(A,we,Ge,Y,Fe.z,rt)}}else Ae.visible&&T.push(A,we,Ae,Y,Fe.z,null)}}let Te=A.children;for(let we=0,Ae=Te.length;we<Ae;we++)An(Te[we],k,Y,X)}function wt(A,k,Y,X){let{opaque:q,transmissive:Te,transparent:we}=A;w.setupLightsView(Y),ne===!0&&de.setGlobalState(C.clippingPlanes,Y),X&&y.viewport(oe.copy(X)),q.length>0&&Cn(q,k,Y),Te.length>0&&Cn(Te,k,Y),we.length>0&&Cn(we,k,Y),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function pn(A,k,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){let Ge=Ve.has(`EXT_color_buffer_half_float`)||Ve.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[X.id]=new Kn(1,1,{generateMipmaps:!0,type:Ge?ki:kn,minFilter:Dr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Te=w.state.transmissionRenderTarget[X.id],we=X.viewport||oe;Te.setSize(we.z*C.transmissionResolutionScale,we.w*C.transmissionResolutionScale);let Ae=C.getRenderTarget(),Oe=C.getActiveCubeFace(),ze=C.getActiveMipmapLevel();C.setRenderTarget(Te),C.getClearColor($e),Ye=C.getClearAlpha(),Ye<1&&C.setClearColor(16777215,.5),C.clear(),Re&&We.render(Y);let tt=C.toneMapping;C.toneMapping=wi;let rt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),ne===!0&&de.setGlobalState(C.clippingPlanes,X),Cn(A,Y,X),J.updateMultisampleRenderTarget(Te),J.updateRenderTargetMipmap(Te),Ve.has(`WEBGL_multisampled_render_to_texture`)===!1){let Ge=!1;for(let vt=0,Wt=k.length;vt<Wt;vt++){let{object:Mt,geometry:mn,material:Ie,group:qn}=k[vt];if(Ie.side===2&&Mt.layers.test(X.layers)){let mt=Ie.side;Ie.side=Pn,Ie.needsUpdate=!0,Zt(Mt,Y,X,mn,Ie,qn),Ie.side=mt,Ie.needsUpdate=!0,Ge=!0}}Ge===!0&&(J.updateMultisampleRenderTarget(Te),J.updateRenderTargetMipmap(Te))}C.setRenderTarget(Ae,Oe,ze),C.setClearColor($e,Ye),rt!==void 0&&(X.viewport=rt),C.toneMapping=tt}function Cn(A,k,Y){let X=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Te=A.length;q<Te;q++){let we=A[q],{object:Ae,geometry:Oe,group:ze}=we,tt=we.material;tt.allowOverride===!0&&X!==null&&(tt=X),Ae.layers.test(Y.layers)&&Zt(Ae,k,Y,Oe,tt,ze)}}function Zt(A,k,Y,X,q,Te){A.onBeforeRender(C,k,Y,X,q,Te),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,k,Y,X,A,Te),q.transparent===!0&&q.side===2&&q.forceSinglePass===!1?(q.side=Pn,q.needsUpdate=!0,C.renderBufferDirect(Y,k,X,q,A,Te),q.side=tr,q.needsUpdate=!0,C.renderBufferDirect(Y,k,X,q,A,Te),q.side=2):C.renderBufferDirect(Y,k,X,q,A,Te),A.onAfterRender(C,k,Y,X,q,Te)}function Ot(A,k,Y){k.isScene!==!0&&(k=De);let X=W.get(A),q=w.state.lights,Te=w.state.shadowsArray,we=q.state.version,Ae=xe.getParameters(A,q.state,Te,k,Y,w.state.lightProbeGridArray),Oe=xe.getProgramCacheKey(Ae),ze=X.programs;X.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,X.fog=k.fog;let tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;X.envMap=fe.get(A.envMap||X.environment,tt),X.envMapRotation=X.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener(`dispose`,Ue),ze=new Map,X.programs=ze);let rt=ze.get(Oe);if(rt!==void 0){if(X.currentProgram===rt&&X.lightsStateVersion===we)return Pi(A,Ae),rt}else Ae.uniforms=xe.getUniforms(A),I!==null&&A.isNodeMaterial&&I.build(A,Y,Ae),A.onBeforeCompile(Ae,C),rt=xe.acquireProgram(Ae,Oe),ze.set(Oe,rt),X.uniforms=Ae.uniforms;let Ge=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=de.uniform),Pi(A,Ae),X.needsLights=ci(A),X.lightsStateVersion=we,X.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=rt,X.uniformsList=null,rt}function Qt(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=aa.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Pi(A,k){let Y=W.get(A);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Cs(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let Y=0,X=A.length;Y<X;Y++){let q=A[Y];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function sn(A,k,Y,X,q){k.isScene!==!0&&(k=De),J.resetTextureUnits();let Te=k.fog,we=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?k.environment:null,Ae=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ut.workingColorSpace,Oe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,ze=fe.get(X.envMap||we,Oe),tt=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,rt=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ge=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,Wt=!!Y.morphAttributes.color,Bt=wi;X.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Bt=C.toneMapping);let Mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mn=Mt!==void 0?Mt.length:0,Ie=W.get(X),qn=w.state.lights;if(ne===!0&&(ie===!0||A!==D)){let Et=A===D&&X.id===te;de.setState(X,A,Et)}let mt=!1;X.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==qn.state.version||Ie.outputColorSpace!==Ae||q.isBatchedMesh&&Ie.batching===!1||!q.isBatchedMesh&&Ie.batching===!0||q.isBatchedMesh&&Ie.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ie.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ie.instancing===!1||!q.isInstancedMesh&&Ie.instancing===!0||q.isSkinnedMesh&&Ie.skinning===!1||!q.isSkinnedMesh&&Ie.skinning===!0||q.isInstancedMesh&&Ie.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ie.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ie.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ie.instancingMorph===!1&&q.morphTexture!==null||Ie.envMap!==ze||X.fog===!0&&Ie.fog!==Te||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==de.numPlanes||Ie.numIntersection!==de.numIntersection)||Ie.vertexAlphas!==tt||Ie.vertexTangents!==rt||Ie.morphTargets!==Ge||Ie.morphNormals!==vt||Ie.morphColors!==Wt||Ie.toneMapping!==Bt||Ie.morphTargetsCount!==mn||!!Ie.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ie.__version=X.version);let hi=Ie.currentProgram;mt===!0&&(hi=Ot(X,k,q),I&&X.isNodeMaterial&&I.onUpdateProgram(X,hi,Ie));let Ii=!1,gr=!1,Rs=!1,St=hi.getUniforms(),Xt=Ie.uniforms;if(y.useProgram(hi.program)&&(Ii=!0,gr=!0,Rs=!0),X.id!==te&&(te=X.id,gr=!0),Ie.needsLights){let Et=Cs(w.state.lightProbeGridArray,q);Ie.lightProbeGrid!==Et&&(Ie.lightProbeGrid=Et,gr=!0)}if(Ii||D!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),St.setValue(L,`projectionMatrix`,A.projectionMatrix),St.setValue(L,`viewMatrix`,A.matrixWorldInverse);let xr=St.map.cameraPosition;xr!==void 0&&xr.setValue(L,me.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&St.setValue(L,`logDepthBufFC`,2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&St.setValue(L,`isOrthographic`,A.isOrthographicCamera===!0),D!==A&&(D=A,gr=!0,Rs=!0)}if(Ie.needsLights&&(qn.state.directionalShadowMap.length>0&&St.setValue(L,`directionalShadowMap`,qn.state.directionalShadowMap,J),qn.state.spotShadowMap.length>0&&St.setValue(L,`spotShadowMap`,qn.state.spotShadowMap,J),qn.state.pointShadowMap.length>0&&St.setValue(L,`pointShadowMap`,qn.state.pointShadowMap,J)),q.isSkinnedMesh){St.setOptional(L,q,`bindMatrix`),St.setOptional(L,q,`bindMatrixInverse`);let Et=q.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),St.setValue(L,`boneTexture`,Et.boneTexture,J))}q.isBatchedMesh&&(St.setOptional(L,q,`batchingTexture`),St.setValue(L,`batchingTexture`,q._matricesTexture,J),St.setOptional(L,q,`batchingIdTexture`),St.setValue(L,`batchingIdTexture`,q._indirectTexture,J),St.setOptional(L,q,`batchingColorTexture`),q._colorsTexture!==null&&St.setValue(L,`batchingColorTexture`,q._colorsTexture,J));let _r=Y.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&U.update(q,Y,hi),(gr||Ie.receiveShadow!==q.receiveShadow)&&(Ie.receiveShadow=q.receiveShadow,St.setValue(L,`receiveShadow`,q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&k.environment!==null&&(Xt.envMapIntensity.value=k.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=LS()),gr){if(St.setValue(L,`toneMappingExposure`,C.toneMappingExposure),Ie.needsLights&&Ht(Xt,Rs),Te&&X.fog===!0&&Ne.refreshFogUniforms(Xt,Te),Ne.refreshMaterialUniforms(Xt,X,ae,ce,w.state.transmissionRenderTarget[A.id]),Ie.needsLights&&Ie.lightProbeGrid){let Et=Ie.lightProbeGrid;Xt.probesSH.value=Et.texture,Xt.probesMin.value.copy(Et.boundingBox.min),Xt.probesMax.value.copy(Et.boundingBox.max),Xt.probesResolution.value.copy(Et.resolution)}aa.upload(L,Qt(Ie),Xt,J)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(aa.upload(L,Qt(Ie),Xt,J),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&St.setValue(L,`center`,q.center),St.setValue(L,`modelViewMatrix`,q.modelViewMatrix),St.setValue(L,`normalMatrix`,q.normalMatrix),St.setValue(L,`modelMatrix`,q.matrixWorld),X.uniformsGroups!==void 0){let Et=X.uniformsGroups;for(let xr=0,Ps=Et.length;xr<Ps;xr++){let Qd=Et[xr];re.update(Qd,hi),re.bind(Qd,hi)}}return hi}function Ht(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function ci(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,k,Y){let X=W.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=k,W.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let Y=W.get(A);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,Y=0){Z=A,G=k,B=Y;let X=null,q=!1,Te=!1;if(A){let Ae=W.get(A);if(Ae.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,Ae.__webglFramebuffer),oe.copy(A.viewport),_e.copy(A.scissor),Je=A.scissorTest,y.viewport(oe),y.scissor(_e),y.setScissorTest(Je),te=-1;return}else if(Ae.__webglFramebuffer===void 0)J.setupRenderTarget(A);else if(Ae.__hasExternalTextures)J.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let tt=A.depthTexture;if(Ae.__boundDepthTexture!==tt){if(tt!==null&&W.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);J.setupDepthRenderbuffer(A)}}let Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Te=!0);let ze=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?X=ze[k][Y]:X=ze[k],q=!0):A.samples>0&&J.useMultisampledRTT(A)===!1?X=W.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[Y]:X=ze,oe.copy(A.viewport),_e.copy(A.scissor),Je=A.scissorTest}else oe.copy(Pe).multiplyScalar(ae).floor(),_e.copy(Qe).multiplyScalar(ae).floor(),Je=be;if(Y!==0&&(X=H),y.bindFramebuffer(L.FRAMEBUFFER,X)&&y.drawBuffers(A,X),y.viewport(oe),y.scissor(_e),y.setScissorTest(Je),q){let Ae=W.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,Y)}else if(Te){let Ae=k;for(let Oe=0;Oe<A.textures.length;Oe++){let ze=W.get(A.textures[Oe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,Y,Ae)}}else if(A!==null&&Y!==0){let Ae=W.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ae.__webglTexture,Y)}te=-1},this.readRenderTargetPixels=function(A,k,Y,X,q,Te,we,Ae=0){if(!(A&&A.isWebGLRenderTarget)){Ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let Oe=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Oe=Oe[we]),Oe){y.bindFramebuffer(L.FRAMEBUFFER,Oe);try{let ze=A.textures[Ae],tt=ze.format,rt=ze.type;if(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ae),!R.textureFormatReadable(tt)){Ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!R.textureTypeReadable(rt)){Ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}k>=0&&k<=A.width-X&&Y>=0&&Y<=A.height-q&&L.readPixels(k,Y,X,q,ye.convert(tt),ye.convert(rt),Te)}finally{let ze=Z!==null?W.get(Z).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,k,Y,X,q,Te,we,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let Oe=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Oe=Oe[we]),Oe)if(k>=0&&k<=A.width-X&&Y>=0&&Y<=A.height-q){y.bindFramebuffer(L.FRAMEBUFFER,Oe);let ze=A.textures[Ae],tt=ze.format,rt=ze.type;if(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ae),!R.textureFormatReadable(tt))throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!R.textureTypeReadable(rt))throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let Ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.bufferData(L.PIXEL_PACK_BUFFER,Te.byteLength,L.STREAM_READ),L.readPixels(k,Y,X,q,ye.convert(tt),ye.convert(rt),0);let vt=Z!==null?W.get(Z).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,vt);let Wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await lm(L,Wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Te),L.deleteBuffer(Ge),L.deleteSync(Wt),Te}else throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(A,k=null,Y=0){let X=Math.pow(2,-Y),q=Math.floor(A.image.width*X),Te=Math.floor(A.image.height*X),we=k!==null?k.x:0,Ae=k!==null?k.y:0;J.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,we,Ae,q,Te),y.unbindTexture()},this.copyTextureToTexture=function(A,k,Y=null,X=null,q=0,Te=0){let we,Ae,Oe,ze,tt,rt,Ge,vt,Wt,Bt=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(Y!==null)we=Y.max.x-Y.min.x,Ae=Y.max.y-Y.min.y,Oe=Y.isBox3?Y.max.z-Y.min.z:1,ze=Y.min.x,tt=Y.min.y,rt=Y.isBox3?Y.min.z:0;else{let Xt=Math.pow(2,-q);we=Math.floor(Bt.width*Xt),Ae=Math.floor(Bt.height*Xt),A.isDataArrayTexture?Oe=Bt.depth:A.isData3DTexture?Oe=Math.floor(Bt.depth*Xt):Oe=1,ze=0,tt=0,rt=0}X!==null?(Ge=X.x,vt=X.y,Wt=X.z):(Ge=0,vt=0,Wt=0);let Mt=ye.convert(k.format),mn=ye.convert(k.type),Ie;k.isData3DTexture?(J.setTexture3D(k,0),Ie=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(J.setTexture2DArray(k,0),Ie=L.TEXTURE_2D_ARRAY):(J.setTexture2D(k,0),Ie=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);let qn=y.getParameter(L.UNPACK_ROW_LENGTH),mt=y.getParameter(L.UNPACK_IMAGE_HEIGHT),hi=y.getParameter(L.UNPACK_SKIP_PIXELS),Ii=y.getParameter(L.UNPACK_SKIP_ROWS),gr=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,Bt.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),y.pixelStorei(L.UNPACK_SKIP_ROWS,tt),y.pixelStorei(L.UNPACK_SKIP_IMAGES,rt);let Rs=A.isDataArrayTexture||A.isData3DTexture,St=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let Xt=W.get(A),_r=W.get(k),Et=W.get(Xt.__renderTarget),xr=W.get(_r.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,Et.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let Ps=0;Ps<Oe;Ps++)Rs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(A).__webglTexture,q,rt+Ps),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(k).__webglTexture,Te,Wt+Ps)),L.blitFramebuffer(ze,tt,we,Ae,Ge,vt,we,Ae,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||W.has(A)){let Xt=W.get(A),_r=W.get(k);y.bindFramebuffer(L.READ_FRAMEBUFFER,V),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,F);for(let Et=0;Et<Oe;Et++)Rs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xt.__webglTexture,q,rt+Et):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xt.__webglTexture,q),St?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_r.__webglTexture,Te,Wt+Et):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_r.__webglTexture,Te),q!==0?L.blitFramebuffer(ze,tt,we,Ae,Ge,vt,we,Ae,L.COLOR_BUFFER_BIT,L.NEAREST):St?L.copyTexSubImage3D(Ie,Te,Ge,vt,Wt+Et,ze,tt,we,Ae):L.copyTexSubImage2D(Ie,Te,Ge,vt,ze,tt,we,Ae);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else St?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Ie,Te,Ge,vt,Wt,we,Ae,Oe,Mt,mn,Bt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ie,Te,Ge,vt,Wt,we,Ae,Oe,Mt,Bt.data):L.texSubImage3D(Ie,Te,Ge,vt,Wt,we,Ae,Oe,Mt,mn,Bt):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Te,Ge,vt,we,Ae,Mt,mn,Bt.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Te,Ge,vt,Bt.width,Bt.height,Mt,Bt.data):L.texSubImage2D(L.TEXTURE_2D,Te,Ge,vt,we,Ae,Mt,mn,Bt);y.pixelStorei(L.UNPACK_ROW_LENGTH,qn),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),y.pixelStorei(L.UNPACK_SKIP_PIXELS,hi),y.pixelStorei(L.UNPACK_SKIP_ROWS,Ii),y.pixelStorei(L.UNPACK_SKIP_IMAGES,gr),Te===0&&k.generateMipmaps&&L.generateMipmap(Ie),y.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&J.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?J.setTextureCube(A,0):A.isData3DTexture?J.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?J.setTexture2DArray(A,0):J.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){G=0,B=0,Z=null,y.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};function ar(r){if(r===void 0)throw new ReferenceError(`this hasn't been initialised - super() hasn't been called`);return r}function eg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Wn={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}};var To={duration:.5,overwrite:!1,delay:0};var ed;var un;var Dt;var mi=1e8;var Tt=1/mi;var Wf=Math.PI*2;var NS=Wf/4;var US=0;var tg=Math.sqrt;var FS=Math.cos;var OS=Math.sin;var tn=function(e){return typeof e==`string`};var kt=function(e){return typeof e==`function`};var lr=function(e){return typeof e==`number`};var ph=function(e){return typeof e>`u`};var Xi=function(e){return typeof e==`object`};var Hn=function(e){return e!==!1};var td=function(){return typeof window<`u`};var sh=function(e){return kt(e)||tn(e)};var ng=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){};var Mn=Array.isArray;var BS=/random\([^)]+\)/g;var zS=/,\s*/g;var qm=/(?:-?\.?\d|\.)+/gi;var nd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;var fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g;var Of=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;var id=/[+-]=-?[.\d]+/;var kS=/[^,'"\[\]\s]+/gi;var VS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;var Ut;var Hi;var Xf;var rd;var ni={};var ch={};var ig;var rg=function(e){return(ch=ca(e,ni))&&Sn};var mh=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)};var wo=function(e,t){return!t&&console.warn(e)};var sg=function(e,t){return e&&(ni[e]=t)&&ch&&(ch[e]=t)||ni};var Eo=function(){return 0};var GS={suppressEvents:!0,isStart:!0,kill:!1};var ah={suppressEvents:!0,kill:!1};var HS={suppressEvents:!0};var sd={};var Or=[];var qf={};var ag;var Vn={};var Bf={};var Ym=30;var oh=[];var ad=``;var od=function(e){var t=e[0],n,i;if(Xi(t)||kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=oh.length;i--&&!oh[i].targetTest(t););n=oh[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ud(e[i],n)))||e.splice(i,1);return e};var Br=function(e){return e._gsap||od(gi(e))[0]._gsap};var ld=function(e,t,n){return(n=e[t])&&kt(n)?e[t]():ph(n)&&e.getAttribute&&e.getAttribute(t)||n};var In=function(e,t){return(e=e.split(`,`)).forEach(t)||e};var Vt=function(e){return Math.round(e*1e5)/1e5||0};var Nt=function(e){return Math.round(e*1e7)/1e7||0};var ds=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+i:n===`-`?e-i:n===`*`?e*i:e/i};var WS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n};var hh=function(){var e=Or.length,t=Or.slice(0),n,i;for(qf={},Or.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)};var cd=function(e){return!!(e._initted||e._startAt||e.add)};var og=function(e,t,n,i){Or.length&&!un&&hh(),e.render(t,n,i||!!(un&&t<0&&cd(e))),Or.length&&!un&&hh()};var lg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(kS).length<2?t:tn(e)?e.trim():e};var cg=function(e){return e};var ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e};var XS=function(e){return function(t,n){for(var i in n)i in t||i===`duration`&&e||i===`ease`||(t[i]=n[i])}};var ca=function(e,t){for(var n in t)e[n]=t[n];return e};var Zm=function r(e,t){for(var n in t)n!==`__proto__`&&n!==`constructor`&&n!==`prototype`&&(e[n]=Xi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e};var uh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n};var Mo=function(e){var t=e.parent||Ut,n=e.keyframes?XS(Mn(e.keyframes)):ii;if(Hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e};var qS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0};var hg=function(e,t,n,i,s){n===void 0&&(n=`_first`),i===void 0&&(i=`_last`);var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t};var gh=function(e,t,n,i){n===void 0&&(n=`_first`),i===void 0&&(i=`_last`);var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null};var zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0};var cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e};var YS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e};var Yf=function(e,t,n,i){return e._startAt&&(un?e._startAt.revert(ah):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))};var ZS=function r(e){return!e||e._ts&&r(e.parent)};var Jm=function(e){return e._repeat?ha(e._tTime,e=e.duration()+e._rDelay)*e:0};var ha=function(e,t){var n=Math.floor(e=Nt(e/t));return e&&n===e?n-1:n};var fh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)};var _h=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))};var xh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Nt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_h(e),n._dirty||cs(n,e)),e};var ug=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=fh(e.rawTime(),t),(!t._dur||Ro(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}};var Wi=function(e,t,n,i){return t.parent&&zr(t),t._start=Nt((lr(n)?n:n||e!==Ut?pi(e,n,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),hg(e,t,`_first`,`_last`,e._sort?`_start`:0),Zf(t)||(e._recent=t),i||ug(e,t),e._ts<0&&xh(e,e._tTime),e};var fg=function(e,t){return(ni.ScrollTrigger||mh(`scrollTrigger`,t))&&ni.ScrollTrigger.create(t,e)};var dg=function(e,t,n,i,s){if(pd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ag!==Gn.frame)return Or.push(e),e._lazy=[s,i],1};var JS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))};var Zf=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`};var $S=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&JS(e)&&!(!e._initted&&Zf(e))||(e._ts<0||e._dp._ts<0)&&!Zf(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=Ro(0,e._tDur,t),h=ha(l,o),e._yoyo&&h&1&&(a=1-a),h!==ha(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||un||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&dg(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Yf(e,t,n,!0),e._onUpdate&&!n&&ti(e,`onUpdate`),l&&e._repeat&&!n&&e.parent&&ti(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&zr(e,1),!n&&!un&&(ti(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)};var KS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data===`isPause`&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data===`isPause`&&i._start<t)return i;i=i._prev}};var ua=function(e,t,n,i){var s=e._repeat,a=Nt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Nt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&xh(e,e._tTime=e._tDur*o),e.parent&&_h(e),n||cs(e.parent,e),e};var $m=function(e){return e instanceof yn?cs(e):ua(e,e._dur)};var QS={_start:0,endTime:Eo,totalDuration:Eo};var pi=function r(e,t,n){var i=e.labels,s=e._recent||QS,a=e.duration()>=mi?s.endTime(!1):e._dur,o,l,c;return tn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)===`%`,o=t.indexOf(`=`),l===`<`||l===`>`?(o>=0&&(t=t.replace(/=/,``)),(l===`<`?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Mn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t};var So=function(e,t,n){var i=lr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!(`immediateRender`in o);)o=l.vars.defaults||{},l=Hn(l.vars.inherit)&&l.parent;a.immediateRender=Hn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new qt(t[0],a,t[s+1])};var kr=function(e,t){return e||e===0?t(e):t};var Ro=function(e,t,n){return n<e?e:n>t?t:n};var fn=function(e,t){return!tn(e)||!(t=VS.exec(e))?``:t[1]};var jS=function(e,t,n){return kr(n,function(i){return Ro(e,t,i)})};var Jf=[].slice;var pg=function(e,t){return e&&Xi(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Xi(e[0]))&&!e.nodeType&&e!==Hi};var eb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return tn(i)&&!t||pg(i,1)?(s=n).push.apply(s,gi(i)):n.push(i)})||n};var gi=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):tn(e)&&!n&&(Xf||!fa())?Jf.call((t||rd).querySelectorAll(e),0):Mn(e)?eb(e,n):pg(e)?Jf.call(e,0):e?[e]:[]};var $f=function(e){return e=gi(e)[0]||wo(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return gi(t,n.querySelectorAll?n:n===e?wo(`Invalid scope`)||rd.createElement(`div`):e)}};var mg=function(e){return e.sort(function(){return .5-Math.random()})};var gg=function(e){if(kt(e))return e;var t=Xi(e)?e:{each:e},n=hs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return tn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,p){var _=(p||t).length,m=a[_],g,M,S,v,T,w,E,x,b;if(!m){if(b=t.grid===`auto`?0:(t.grid||[1,mi])[1],!b){for(E=-mi;E<(E=p[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(m=a[_]=[],g=l?Math.min(b,_)*h-.5:i%b,M=b===mi?0:l?_*d/b-.5:i/b|0,E=0,x=mi,w=0;w<_;w++)S=w%b-g,v=M-(w/b|0),m[w]=T=c?Math.abs(c===`y`?v:S):tg(S*S+v*v),T>E&&(E=T),T<x&&(x=T);i===`random`&&mg(m),m.max=E-x,m.min=x,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c===`y`?_/b:b:Math.max(b,_/b))||0)*(i===`edges`?-1:1),m.b=_<0?s-_:s,m.u=fn(t.amount||t.each)||0,n=n&&_<0?db(n):n}return _=(m[u]-m.min)/m.max||0,Nt(m.b+(n?n(_):_)*m.v)+m.u}};var Kf=function(e){var t=Math.pow(10,((e+``).split(`.`)[1]||``).length);return function(n){var i=Nt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(lr(n)?0:fn(n))}};var _g=function(e,t){var n=Mn(e),i,s;return!n&&Xi(e)&&(i=n=e.radius||mi,e.values?(e=gi(e.values),(s=!lr(e[0]))&&(i*=i)):e=Kf(e.increment)),kr(t,n?kt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=mi,h=0,d=e.length,u,f;d--;)s?(u=e[d].x-o,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?e[h]:a,s||h===a||lr(a)?h:h+fn(a)}:Kf(e))};var xg=function(e,t,n,i){return kr(Mn(e)?!t:n===!0?!!(n=0):!i,function(){return Mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})};var tb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}};var nb=function(e,t){return function(n){return e(parseFloat(n))+(t||fn(n))}};var ib=function(e,t,n){return yg(e,t,0,1,n)};var vg=function(e,t,n){return kr(n,function(i){return e[~~t(i)]})};var rb=function r(e,t,n){var i=t-e;return Mn(e)?vg(e,r(0,e.length),t):kr(n,function(s){return(i+(s-e)%i)%i+e})};var sb=function r(e,t,n){var i=t-e,s=i*2;return Mn(e)?vg(e,r(0,e.length-1),t):kr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})};var da=function(e){return e.replace(BS,function(t){var n=t.indexOf(`[`)+1,i=t.substring(n||7,n?t.indexOf(`]`):t.length-1).split(zS);return xg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})};var yg=function(e,t,n,i,s){var a=t-e,o=i-n;return kr(s,function(l){return n+((l-e)/a*o||0)})};var ab=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=tn(e),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Mn(e)&&!Mn(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(p){p*=d;var _=Math.min(u,~~p);return h[_](p-_)},n=t}else i||(e=ca(Mn(e)?[]:{},e));if(!h){for(l in t)fd.call(o,e,l,`get`,t[l]);s=function(p){return _d(p,o)||(a?e.p:e)}}}return kr(n,s)};var Km=function(e,t,n){var i=e.labels,s=mi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l};var ti=function(e,t,n){var i=e.vars,s=i[t],a=Dt,o=e._ctx,l,c,h;if(s)return l=i[t+`Params`],c=i.callbackScope||e,n&&Or.length&&hh(),o&&(Dt=o),h=l?s.apply(c,l):s.call(c),Dt=a,h};var vo=function(e){return zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!un),e.progress()<1&&ti(e,`onInterrupt`),e};var la;var Mg=[];var Sg=function(e){if(e)if(e=!e.name&&e.default||e,td()||e.headless){var t=e.name,n=kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Eo,render:_d,add:fd,kill:bb,modifier:Sb,rawVars:0},a={targetTest:0,get:0,getSetter:vh,aliases:{},register:0};if(fa(),e!==i){if(Vn[t])return;ii(i,ii(uh(e,s),a)),ca(i.prototype,ca(s,uh(e,a))),Vn[i.prop=t]=i,e.targetTest&&(oh.push(i),sd[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}sg(t,i),e.register&&e.register(Sn,i,Dn)}else Mg.push(e)};var bt=255;var yo={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]};var zf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0};var bg=function(e,t,n){var i=e?lr(e)?[e>>16,e>>8&bt,e&bt]:0:yo.black,s,a,o,l,c,h,d,u,f,p;if(!i){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),yo[e])i=yo[e];else if(e.charAt(0)===`#`){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)===`hsl`){if(i=p=e.match(qm),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=zf(l+1/3,s,a),i[1]=zf(l,s,a),i[2]=zf(l-1/3,s,a);else if(~e.indexOf(`=`))return i=e.match(nd),n&&i.length<4&&(i[3]=1),i}else i=e.match(qm)||yo.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/bt,a=i[1]/bt,o=i[2]/bt,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i};var Tg=function(e){var t=[],n=[],i=-1;return e.split(or).forEach(function(s){var a=s.match(fs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t};var Qm=function(e,t,n){var i=``,s=(e+i).match(or),a=t?`hsla(`:`rgba(`,o=0,l,c,h,d;if(!s)return e;if(s=s.map(function(u){return(u=bg(u,t,1))&&a+(t?u[0]+`,`+u[1]+`%,`+u[2]+`%,`+u[3]:u.join(`,`))+`)`}),n&&(h=Tg(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(or,`1`).split(fs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+`0,0,0,0)`:(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(or),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]};var or=(function(){var r=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,e;for(e in yo)r+=`|`+e+`\\b`;return new RegExp(r+`)`,`gi`)})();var ob=/hsl[a]?\(/;var hd=function(e){var t=e.join(` `),n;if(or.lastIndex=0,or.test(t))return n=ob.test(t),e[1]=Qm(e[1],n),e[0]=Qm(e[0],n,Tg(e[1])),!0};var Ao;var Gn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,u,f,p=function _(m){var g=r()-i,M=m===!0,S,v,T,w;if((g>e||g<0)&&(n+=g-t),i+=g,T=i-n,S=T-a,(S>0||M)&&(w=++d.frame,u=T-d.time*1e3,d.time=T=T/1e3,a+=S+(S>=s?4:s-S),v=1),M||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](T,u,w,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){ig&&(!Xf&&td()&&(Hi=Xf=window,rd=Hi.document||{},ni.gsap=Sn,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(Sn.version),rg(ch||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),Mg.forEach(Sg)),h=typeof requestAnimationFrame<`u`&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Ao=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ao=0,c=Eo},lagSmoothing:function(m,g){e=m||Infinity,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,g,M){var S=g?function(v,T,w,E){m(v,T,w,E),d.remove(S)}:m;return d.remove(m),o[M?`unshift`:`push`](S),fa(),S},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},d})();var fa=function(){return!Ao&&Gn.wake()};var pt={};var lb=/^[\d.\-M][\d.\-,\s]/;var cb=/["']/g;var hb=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(`,`):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(cb,``).trim():+c,i=l.substr(o+1).trim();return t};var ub=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),i=e.indexOf(`(`,t);return e.substring(t,~i&&i<n?e.indexOf(`)`,n+1):n)};var fb=function(e){var t=(e+``).split(`(`),n=pt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[hb(t[1])]:ub(e).split(`,`).map(lg)):pt._CE&&lb.test(e)?pt._CE(``,e):n};var db=function(e){return function(t){return 1-e(1-t)}};var hs=function(e,t){return e&&(kt(e)?e:pt[e]||fb(e))||t};var ps=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return In(e,function(o){pt[o]=ni[o]=s,pt[a=o.toLowerCase()]=n;for(var l in s)pt[a+(l===`easeIn`?`.in`:l===`easeOut`?`.out`:`.inOut`)]=pt[o+`.`+l]=s[l]}),s};var wg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}};var kf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Wf*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*OS((h-a)*s)+1},l=e===`out`?o:e===`in`?function(c){return 1-o(1-c)}:wg(o);return s=Wf/s,l.config=function(c,h){return r(e,c,h)},l};var Vf=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e===`out`?n:e===`in`?function(s){return 1-n(1-s)}:wg(n);return i.config=function(s){return r(e,s)},i};In(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(r,e){var t=e<5?e+1:e;ps(r+`,Power`+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;ps(`Elastic`,kf(`in`),kf(`out`),kf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ps(`Bounce`,function(a){return 1-s(1-a)},s)})(7.5625,2.75);ps(`Expo`,function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ps(`Circ`,function(r){return-(tg(1-r*r)-1)});ps(`Sine`,function(r){return r===1?1:-FS(r*NS)+1});ps(`Back`,Vf(`in`),Vf(`out`),Vf());pt.SteppedEase=pt.steps=ni.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Tt;return function(o){return((i*Ro(0,a,o)|0)+s)*n}}};To.ease=pt[`quad.out`];In(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(r){return ad+=r+`,`+r+`Params,`});var ud=function(e,t){this.id=US++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ld,this.set=t?t.getSetter:vh};var Co=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===Infinity?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ua(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Ao||Gn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ua(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(fa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xh(this,n),!s._dp||s.parent||ug(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),og(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ha(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?fh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(Ro(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),_h(this),YS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Nt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Wi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fh(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=HS);var i=un;return un=n,cd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!==`nested`&&n.kill!==!1&&this.kill(),un=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===Infinity?-2:n,$m(this)):this._repeat===-2?Infinity:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,$m(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pi(this,n),Hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Hn(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+`Params`]=s),n===`onUpdate`&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=kt(n)?n:cg,l=function(){var h=i.then;i.then=null,s&&s(),kt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){vo(this)},r})();ii(Co.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var yn=(function(r){eg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Hn(n.sortChildren),Ut&&Wi(n.parent||Ut,ar(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fg(ar(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return So(0,arguments,this),this},t.from=function(i,s,a){return So(1,arguments,this),this},t.fromTo=function(i,s,a,o){return So(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Mo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(i,s,pi(this,a),1),this},t.call=function(i,s,a){return Wi(this,qt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new qt(i,a,pi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Mo(a).immediateRender=Hn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,Mo(o).immediateRender=Hn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Nt(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,p,_,m,g,M,S,v,T,w,E;if(this!==Ut&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,v=this._start,S=this._ts,g=!S,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(u=Nt(h%m),h===l?(_=this._repeat,u=c):(T=Nt(h/m),_=~~T,_&&_===T&&(u=c,_--),u>c&&(u=c)),T=ha(this._tTime,m),!o&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),w&&_&1&&(u=c-u,E=1),_!==T&&!this._lock){var x=w&&T&1,b=x===(w&&_&1);if(_<T&&(x=!x),o=x?0:h%c?c:h,this._lock=1,this.render(o||(E?0:Nt(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ti(this,`onRepeat`),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,T=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=KS(this,Nt(o),Nt(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!T&&(ti(this,`onStart`),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!g){M=0,p&&(h+=this._zTime=-Tt);break}}f=p}else{f=this._last;for(var C=i<0?i:u;f;){if(p=f._prev,(f._act||C<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||un&&cd(f)),u!==this._time||!this._ts&&!g){M=0,p&&(h+=this._zTime=C?-Tt:Tt);break}}f=p}}if(M&&!s&&(this.pause(),M.render(u>=o?0:-Tt)._zTime=u>=o?1:-1,this._ts))return this._start=v,_h(this),this.render(i,s,a);this._onUpdate&&!s&&ti(this,`onUpdate`,!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&zr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(ti(this,h===l&&i>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(lr(s)||(s=pi(this,s,i)),!(i instanceof Co)){if(Mn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(tn(i))return this.addLabel(i,s);if(kt(i))i=qt.delayedCall(0,i);else return this}return this!==i?Wi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-mi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof qt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return tn(i)?this.removeLabel(i):kt(i)?this.killTweensOf(i):(i.parent===this&&gh(this,i),i===this._recent&&(this._recent=this._last),cs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(Gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=pi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=qt.delayedCall(0,s||Eo,a);return o.data=`isPause`,this._hasPause=1,Wi(this,o,pi(this,i))},t.removePause=function(i){var s=this._first;for(i=pi(this,i);s;)s._start===i&&s.data===`isPause`&&zr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Fr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=gi(i),l=this._first,c=lr(s),h;l;)l instanceof qt?WS(l._targets,o)&&(c?(!Fr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=pi(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=qt.to(a,ii({ease:s.ease||`none`,lazy:!1,immediateRender:!1,time:o,overwrite:`auto`,duration:s.duration||Math.abs((o-(c&&`time`in c?c.time:a._time))/a.timeScale())||Tt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&`time`in c?c.time:a._time))/a.timeScale());p._dur!==m&&ua(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},s));return u?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ii({startAt:{time:pi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Km(this,pi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Km(this,pi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Nt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return cs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),cs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=mi,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Wi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Nt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-Infinity),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ua(a,a===Ut&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ut._ts&&(og(Ut,fh(i,Ut)),ag=Gn.frame),Gn.frame>=Ym){Ym+=Wn.autoSleep||120;var s=Ut._first;if((!s||!s._ts)&&Wn.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},e})(Co);ii(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var pb=function(e,t,n,i,s,a,o){var l=new Dn(this._pt,e,t,0,1,gd,null,s),c=0,h=0,d,u,f,p,_,m,g,M;for(l.b=n,l.e=i,n+=``,i+=``,(g=~i.indexOf(`random(`))&&(i=da(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),u=n.match(Of)||[];d=Of.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)===`rgba(`&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:`,`,s:m,c:p.charAt(1)===`=`?ds(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Of.lastIndex);return l.c=c<i.length?i.substring(c,i.length):``,l.fp=o,(id.test(i)||g)&&(l.e=0),this._pt=l,l};var fd=function(e,t,n,i,s,a,o,l,c,h){kt(i)&&(i=i(s||0,e,a));var d=e[t],u=n!==`get`?n:kt(d)?c?e[t.indexOf(`set`)||!kt(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():d,f=kt(d)?c?vb:Cg:md,p;if(tn(i)&&(~i.indexOf(`random(`)&&(i=da(i)),i.charAt(1)===`=`&&(p=ds(u,i)+(fn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||Qf)return!isNaN(u*i)&&i!==``?(p=new Dn(this._pt,e,t,+u||0,i-(u||0),typeof d==`boolean`?Mb:Rg,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!d&&!(t in e)&&mh(t,i),pb.call(this,e,t,u,i,f,l||Wn.stringFilter,c))};var mb=function(e,t,n,i,s){if(kt(e)&&(e=bo(e,s,t,n,i)),!Xi(e)||e.style&&e.nodeType||Mn(e)||ng(e))return tn(e)?bo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=bo(e[o],s,t,n,i);return a};var dd=function(e,t,n,i,s,a){var o,l,c,h;if(Vn[e]&&(o=new Vn[e]).init(s,o.rawVars?t[e]:mb(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Dn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==la))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o};var Fr;var Qf;var pd=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,M=g&&g.data===`nested`?g.vars.targets:m,S=e._overwrite===`auto`&&!ed,v=e.timeline,T=i.easeReverse||d,w,E,x,b,C,P,I,H,V,F,G,B,Z;if(v&&(!u||!s)&&(s=`none`),e._ease=hs(s,To.ease),e._rEase=T&&(hs(T)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||u&&!i.stagger){if(H=m[0]?Br(m[0]).harness:0,B=H&&i[H.prop],w=uh(i,sd),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&p?ah:GS),_._lazy=0),a){if(zr(e._startAt=qt.set(m,ii({data:`isStart`,overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Hn(l),startAt:null,delay:0,onUpdate:c&&function(){return ti(e,`onUpdate`)},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un||!o&&!f)&&e._startAt.revert(ah),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(o=!1),x=ii({overwrite:!1,data:`isFromStart`,lazy:o&&!_&&Hn(l),immediateRender:o,stagger:0,parent:g},w),B&&(x[H.prop]=B),zr(e._startAt=qt.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un?e._startAt.revert(ah):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Hn(l)||l&&!p,E=0;E<m.length;E++){if(C=m[E],I=C._gsap||od(m)[E]._gsap,e._ptLookup[E]=F={},qf[I.id]&&Or.length&&hh(),G=M===m?E:M.indexOf(C),H&&(V=new H).init(C,B||w,e,G,M)!==!1&&(e._pt=b=new Dn(e._pt,C,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(te){F[te]=b}),V.priority&&(P=1)),!H||B)for(x in w)Vn[x]&&(V=dd(x,w,e,G,C,M))?V.priority&&(P=1):F[x]=b=fd.call(e,C,x,`get`,w[x],G,M,0,i.stringFilter);e._op&&e._op[E]&&e.kill(C,e._op[E]),S&&e._pt&&(Fr=e,Ut.killTweensOf(C,F,e.globalTime(t)),Z=!e.parent,Fr=0),e._pt&&l&&(qf[I.id]=1)}P&&xd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,u&&t<=0&&v.render(mi,!0,!0)};var gb=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Qf=1,e.vars[t]=`+=0`,pd(e,o),Qf=0,l?wo(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Vt(n)+fn(d.e)),d.b&&(d.b=h.s+fn(d.b))};var _b=function(e,t){var n=e[0]?Br(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ca({},t);for(a in i)if(a in s)for(l=i[a].split(`,`),o=l.length;o--;)s[l[o]]=s[a];return s};var xb=function(e,t,n,i){var s=t.ease||i||`power1.inOut`,a,o;if(Mn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:s})};var bo=function(e,t,n,i,s){return kt(e)?e.call(t,n,i,s):tn(e)&&~e.indexOf(`random(`)?da(e):e};var Eg=ad+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`;var Ag={};In(Eg+`,id,stagger,delay,duration,paused,scrollTrigger`,function(r){return Ag[r]=1});var qt=(function(r){eg(e,r);function e(n,i,s,a){var o;typeof i==`number`&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Mo(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=i.parent||Ut,M=(Mn(n)||ng(n)?lr(n[0]):`length`in i)?[n]:gi(n),S,v,T,w,E,x,b,C;if(o._targets=M.length?od(M):wo(`GSAP target `+n+` not found. https://gsap.com`,!Wn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,p||u||sh(c)||sh(h)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(S=o.timeline=new yn({data:`nested`,defaults:_||{},targets:g&&g.data===`nested`?g.vars.targets:M}),S.kill(),S.parent=S._dp=ar(o),S._start=0,u||sh(c)||sh(h)){if(w=M.length,b=u&&gg(u),Xi(u))for(E in u)~Eg.indexOf(E)&&(C||(C={}),C[E]=u[E]);for(v=0;v<w;v++)T=uh(i,Ag),T.stagger=0,P&&(T.easeReverse=P),C&&ca(T,C),x=M[v],T.duration=+bo(c,ar(o),v,x,M),T.delay=(+bo(h,ar(o),v,x,M)||0)-o._delay,!u&&w===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),S.to(x,T,b?b(v,x,M):0),S._ease=pt.none;S.duration()?c=h=0:o.timeline=0}else if(p){Mo(ii(S.vars.defaults,{ease:`none`})),S._ease=hs(p.ease||i.ease||`none`);var I=0,H,V,F;if(Mn(p))p.forEach(function(G){return S.to(M,G,`>`)}),S.duration();else{T={};for(E in p)E===`ease`||E===`easeEach`||xb(E,p[E],T,p.easeEach);for(E in T)for(H=T[E].sort(function(G,B){return G.t-B.t}),I=0,v=0;v<H.length;v++)V=H[v],F={ease:V.e,duration:(V.t-(v?H[v-1].t:0))/100*c},F[E]=V.v,S.to(M,F,I),I+=F.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!ed&&(Fr=ar(o),Ut.killTweensOf(M),Fr=0),Wi(g,ar(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!p&&o._start===Nt(g._time)&&Hn(d)&&ZS(ar(o))&&g.data!==`nested`)&&(o._tTime=-Tt,o.render(Math.max(0,-h)||0)),m&&fg(ar(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Tt&&!h?l:i<Tt?0:i,u,f,p,_,m,g,M,S;if(!c)$S(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(u=Nt(d%_),d===l?(p=this._repeat,u=c):(m=Nt(d/_),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=ha(this._tTime,_),u===o&&!a&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(Nt(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(dg(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=u<o;if(v!==this._inv){var T=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(v?-1:1)/T:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(u/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(ti(this,`onStart`),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Yf(this,i,s,a),ti(this,`onUpdate`)),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&ti(this,`onRepeat`),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Yf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&zr(this,1),!s&&!(h&&!o)&&(d||o||g)&&(ti(this,d===l?`onComplete`:`onReverseComplete`,!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Ao||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||pd(this,c),h=this._ease(c/this._dur),gb(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(xh(this,0),this.parent||hg(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s=`all`),!i&&(!s||s===`all`))return this._lazy=this._pt=0,this.parent?vo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!un),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Fr&&Fr.vars.overwrite!==!0)._first||vo(this),this.parent&&a!==this.timeline.totalDuration()&&ua(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?gi(i):o,c=this._ptLookup,h=this._pt,d,u,f,p,_,m,g;if((!s||s===`all`)&&qS(o,l))return s===`all`&&(this._pt=0),vo(this);for(d=this._op=this._op||[],s!==`all`&&(tn(s)&&(_={},In(s,function(M){return _[M]=1}),s=_),s=_b(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){u=c[g],s===`all`?(d[g]=s,p=u,f={}):(f=d[g]=d[g]||{},p=s);for(_ in p)m=u&&u[_],m&&((!(`kill`in m.d)||m.d.kill(_)===!0)&&gh(this,m,`_pt`),delete u[_]),f!==`all`&&(f[_]=1)}return this._initted&&!this._pt&&h&&vo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return So(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return So(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ut.killTweensOf(i,s,a)},e})(Co);ii(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In(`staggerTo,staggerFrom,staggerFromTo`,function(r){qt[r]=function(){var e=new yn,t=Jf.call(arguments,0);return t.splice(r===`staggerFromTo`?5:4,0,0),e[r].apply(e,t)}});var md=function(e,t,n){return e[t]=n};var Cg=function(e,t,n){return e[t](n)};var vb=function(e,t,n,i){return e[t](i.fp,n)};var yb=function(e,t,n){return e.setAttribute(t,n)};var vh=function(e,t){return kt(e[t])?Cg:ph(e[t])&&e.setAttribute?yb:md};var Rg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)};var Mb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)};var gd=function(e,t){var n=t._pt,i=``;if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)};var _d=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next};var Sb=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a};var bb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?gh(this,t,`_pt`):t.dep||(n=1),t=i;return!n};var Tb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)};var xd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s};var Dn=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Rg,this.d=l||this,this.set=c||md,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Tb,this.m=n,this.mt=s,this.tween=i},r})();In(ad+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(r){return sd[r]=1});ni.TweenMax=ni.TweenLite=qt;ni.TimelineLite=ni.TimelineMax=yn;Ut=new yn({sortChildren:!1,defaults:To,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0});Wn.stringFilter=hd;var us=[];var lh={};var wb=[];var jm=0;var Eb=0;var Gf=function(e){return(lh[e]||wb).map(function(t){return t()})};var jf=function(){var e=Date.now(),t=[];e-jm>2&&(Gf(`matchMediaInit`),us.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Hi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Gf(`matchMediaRevert`),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),jm=e,Gf(`matchMedia`))};var Pg=(function(){function r(t,n){this.selector=n&&$f(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Eb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){kt(n)&&(s=i,i=n,n=kt);var a=this,o=function(){var c=Dt,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=$f(s)),Dt=a,d=i.apply(a,arguments),kt(d)&&a._r.push(d),Dt=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===kt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qt&&!(i.parent&&i.parent.data===`nested`)&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data===`isFlip`&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-Infinity,t:h}}).sort(function(h,d){return d.g-h.g||-Infinity}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof yn?c.data!==`nested`&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=us.length;a--;)us[a].id===this.id&&us.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})();var Ab=(function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Xi(n)||(n={matches:n});var a=new Pg(0,s||this.scope),o=a.conditions={},l,c,h;Dt&&!a.selector&&(a.selector=Dt.selector),this.contexts.push(a),i=a.add(`onMatch`,i),a.queries=n;for(c in n)c===`all`?h=1:(l=Hi.matchMedia(n[c]),l&&(us.indexOf(a)<0&&us.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(jf):l.addEventListener(`change`,jf)));return h&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})();var dh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Sg(i)})},timeline:function(e){return new yn(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){tn(e)&&(e=gi(e)[0]);var s=Br(e||{}).get,a=n?cg:lg;return n===`native`&&(n=``),e&&(t?a((Vn[t]&&Vn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Vn[o]&&Vn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=gi(e),e.length>1){var i=e.map(function(h){return Sn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}e=e[0]||{};var a=Vn[t],o=Br(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;la._pt=0,d.init(e,n?h+n:h,la,0,[e]),d.render(1,d),la._pt&&_d(1,la)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=Sn.to(e,ii((i={},i[t]=`+=0.1`,i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hs(e.ease,To.ease)),Zm(To,e||{})},config:function(e){return Zm(Wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||``).split(`,`).forEach(function(o){return o&&!Vn[o]&&!ni[o]&&wo(t+` effect requires `+o+` plugin.`)}),Bf[t]=function(o,l,c){return n(gi(o),ii(l||{},s),c)},a&&(yn.prototype[t]=function(o,l,c){return this.add(Bf[t](o,Xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=hs(t)},parseEase:function(e,t){return arguments.length?hs(e,t):pt},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new yn(e),i,s;for(n.smoothChildTiming=Hn(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof qt&&i.vars.onComplete===i._targets[0]))&&Wi(n,i,i._start-i._delay),i=s;return Wi(Ut,n,0),n},context:function(e,t){return e?new Pg(e,t):Dt},matchMedia:function(e){return new Ab(e)},matchMediaRefresh:function(){return us.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||jf()},addEventListener:function(e,t){var n=lh[e]||(lh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=lh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:rb,wrapYoyo:sb,distribute:gg,random:xg,snap:_g,normalize:ib,getUnit:fn,clamp:jS,splitColor:bg,toArray:gi,selector:$f,mapRange:yg,pipe:tb,unitize:nb,interpolate:ab,shuffle:mg},install:rg,effects:Bf,ticker:Gn,updateRoot:yn.updateRoot,plugins:Vn,globalTimeline:Ut,core:{PropTween:Dn,globals:sg,Tween:qt,Timeline:yn,Animation:Co,getCache:Br,_removeLinkedListItem:gh,reverting:function(){return un},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return ed=e}}};In(`to,from,fromTo,delayedCall,set,killTweensOf`,function(r){return dh[r]=qt[r]});Gn.add(yn.updateRoot);la=dh.to({},{duration:0});var Cb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n};var Rb=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Cb(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))};var Hf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(tn(s)&&(l={},In(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Rb(o,s)}}}};var Sn=dh.registerPlugin({name:`attr`,init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(l||0)+``,t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Hf(`roundProps`,Kf),Hf(`modifiers`),Hf(`snap`,_g))||dh;qt.version=yn.version=Sn.version=`3.15.0`;ig=1;td()&&fa();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;var Ig;var Vr;var ma;var Td;var xs;var Dg;var wd;var Jb=function(){return typeof window<`u`};var hr={};var _s=180/Math.PI;var ga=Math.PI/180;var pa=Math.atan2;var Lg=1e8;var Ed=/([A-Z])/g;var $b=/(left|right|width|margin|padding|x)/i;var Kb=/[\s,\(]\S/;var qi={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`};var yd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)};var Qb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)};var jb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)};var eT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)};var tT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)};var Vg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)};var Gg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)};var nT=function(e,t,n){return e.style[t]=n};var iT=function(e,t,n){return e.style.setProperty(t,n)};var rT=function(e,t,n){return e._gsap[t]=n};var sT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n};var aT=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)};var oT=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)};var Ft=`transform`;var Xn=Ft+`Origin`;var lT=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in hr&&s){if(this.tfm=this.tfm||{},e!==`transform`)e=qi[e]||e,~e.indexOf(`,`)?e.split(`,`).forEach(function(o){return n.tfm[o]=cr(i,o)}):this.tfm[e]=a.x?a[e]:cr(i,e),e===Xn&&(this.tfm.zOrigin=a.zOrigin);else return qi.transform.split(`,`).forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ft)>=0)return;a.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Xn,t,``)),e=Ft}(s||t)&&this.props.push(e,t,s[e])};var Hg=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))};var cT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)===`--`?e[s]:e[s].replace(Ed,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),s=wd(),(!s||!s.isStart)&&!n[Ft]&&(Hg(n),i.zOrigin&&n[Xn]&&(n[Xn]+=` `+i.zOrigin+`px`,i.zOrigin=0,i.renderTransform()),i.uncache=1)}};var Wg=function(e,t){var n={target:e,props:[],revert:cT,save:lT};return e._gsap||Sn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(i){return n.save(i)}),n};var Xg;var Md=function(e,t){var n=Vr.createElementNS?Vr.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Vr.createElement(e);return n&&n.style?n:Vr.createElement(e)};var ri=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ed,`-$1`).toLowerCase())||i.getPropertyValue(t)||!n&&r(e,_a(t)||t,1)||``};var Ng=`O,Moz,ms,Ms,Webkit`.split(`,`);var _a=function(e,t,n){var s=(t||xs).style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ng[a]+e in s););return a<0?null:(a===3?`ms`:a>=0?Ng[a]:``)+e};var Sd=function(){Jb()&&window.document&&(Ig=window,Vr=Ig.document,ma=Vr.documentElement,xs=Md(`div`)||{style:{}},Md(`div`),Ft=_a(Ft),Xn=Ft+`Origin`,xs.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Xg=!!_a(`perspective`),wd=Sn.core.reverting,Td=1)};var Ug=function(e){var t=e.ownerSVGElement,n=Md(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),i=e.cloneNode(!0),s;i.style.display=`block`,n.appendChild(i),ma.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ma.removeChild(n),s};var Fg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])};var qg=function(e){var t,n;try{t=e.getBBox()}catch{t=Ug(e),n=1}return t&&(t.width||t.height)||n||(t=Ug(e)),t&&!t.width&&!t.x&&!t.y?{x:+Fg(e,[`x`,`cx`,`x1`])||0,y:+Fg(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t};var Yg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&qg(e))};var Hr=function(e,t){if(t){var n=e.style,i;t in hr&&t!==Xn&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(i===`--`?t:t.replace(Ed,`-$1`).toLowerCase())):n.removeAttribute(t)}};var Gr=function(e,t,n,i,s,a){var o=new Dn(e._pt,t,n,0,1,a?Gg:Vg);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o};var Og={deg:1,rad:1,turn:1};var hT={grid:1,flex:1};var Wr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+``).trim().substr((s+``).length)||`px`,o=xs.style,l=$b.test(t),c=e.tagName.toLowerCase()===`svg`,h=(c?`client`:`offset`)+(l?`Width`:`Height`),d=100,u=i===`px`,f=i===`%`,p,_,m,g;if(i===a||!s||Og[i]||Og[a])return s;if(a!==`px`&&!u&&(s=r(e,t,n,`px`)),g=e.getCTM&&Yg(e),(f||a===`%`)&&(hr[t]||~t.indexOf(`adius`)))return p=g?e.getBBox()[l?`width`:`height`]:e[h],Vt(f?s/p*d:s/100*p);if(o[l?`width`:`height`]=d+(u?a:i),_=i!==`rem`&&~t.indexOf(`adius`)||i===`em`&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Vr||!_.appendChild)&&(_=Vr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Gn.time&&!m.uncache)return Vt(s/m.width*d);if(f&&(t===`height`||t===`width`)){var M=e.style[t];e.style[t]=d+i,p=e[h],M?e.style[t]=M:Hr(e,t)}else(f||a===`%`)&&!hT[ri(_,`display`)]&&(o.position=ri(e,`position`)),_===e&&(o.position=`static`),_.appendChild(xs),p=xs[h],_.removeChild(xs),o.position=`absolute`;return l&&f&&(m=Br(_),m.time=Gn.time,m.width=_[h]),Vt(u?p*s/d:p&&s?d/p*s:0)};var cr=function(e,t,n,i){var s;return Td||Sd(),t in qi&&t!==`transform`&&(t=qi[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),hr[t]&&t!==`transform`?(s=Do(e,i),s=t!==`transformOrigin`?s[t]:s.svg?s.origin:Mh(ri(e,Xn))+` `+s.zOrigin+`px`):(s=e.style[t],(!s||s===`auto`||i||~(s+``).indexOf(`calc(`))&&(s=yh[t]&&yh[t](e,t,n)||ri(e,t)||ld(e,t)||(t===`opacity`?1:0))),n&&!~(s+``).trim().indexOf(` `)?Wr(e,t,s,n)+n:s};var uT=function(e,t,n,i){if(!n||n===`none`){var s=_a(t,e,1),a=s&&ri(e,s,1);a&&a!==n?(t=s,n=a):t===`borderColor`&&(n=ri(e,`borderTopColor`))}var o=new Dn(this._pt,e.style,t,0,1,gd),l=0,c=0,h,d,u,f,p,_,m,g,M,S,v,T;if(o.b=n,o.e=i,n+=``,i+=``,i.substring(0,6)===`var(--`&&(i=ri(e,i.substring(4,i.indexOf(`)`)))),i===`auto`&&(_=e.style[t],e.style[t]=i,i=ri(e,t)||i,_?e.style[t]=_:Hr(e,t)),h=[n,i],hd(h),n=h[0],i=h[1],u=n.match(fs)||[],T=i.match(fs)||[],T.length){for(;d=fs.exec(i);)m=d[0],M=i.substring(l,d.index),p?p=(p+1)%5:(M.substr(-5)===`rgba(`||M.substr(-5)===`hsla(`)&&(p=1),m!==(_=u[c++]||``)&&(f=parseFloat(_)||0,v=_.substr((f+``).length),m.charAt(1)===`=`&&(m=ds(f,m)+v),g=parseFloat(m),S=m.substr((g+``).length),l=fs.lastIndex-S.length,S||(S=S||Wn.units[t]||v,l===i.length&&(i+=S,o.e+=S)),v!==S&&(f=Wr(e,t,_,S)||0),o._pt={_next:o._pt,p:M||c===1?M:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=l<i.length?i.substring(l,i.length):``}else o.r=t===`display`&&i===`none`?Gg:Vg;return id.test(i)&&(o.e=0),this._pt=o,o};var Bg={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`};var fT=function(e){var t=e.split(` `),n=t[0],i=t[1]||`50%`;return(n===`top`||n===`bottom`||i===`left`||i===`right`)&&(e=n,n=i,i=e),t[0]=Bg[n]||n,t[1]=Bg[i]||i,t.join(` `)};var dT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s===`all`||s===!0)i.cssText=``,l=1;else for(s=s.split(`,`),c=s.length;--c>-1;)o=s[c],hr[o]&&(l=1,o=o===`transformOrigin`?Xn:Ft),Hr(n,o);l&&(Hr(n,Ft),a&&(a.svg&&n.removeAttribute(`transform`),i.scale=i.rotate=i.translate=`none`,Do(n,1),a.uncache=1,Hg(i)))}};var yh={clearProps:function(e,t,n,i,s){if(s.data!==`isFromStart`){var a=e._pt=new Dn(e._pt,t,n,0,0,dT);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}};var Io=[1,0,0,1,0,0];var Zg={};var Jg=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e};var zg=function(e){var t=ri(e,Ft);return Jg(t)?Io:t.substr(7).match(nd).map(Vt)};var Ad=function(e,t){var n=e._gsap||Br(e),i=e.style,s=zg(e),a,o,l,c;return n.svg&&e.getAttribute(`transform`)?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(`,`)===`1,0,0,1,0,0`?Io:s):(s===Io&&!e.offsetParent&&e!==ma&&!n.svg&&(l=i.display,i.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ma.appendChild(e)),s=zg(e),l?i.display=l:Hr(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ma.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)};var bd=function(e,t,n,i,s,a){var o=e._gsap,l=s||Ad(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],M=l[5],S=t.split(` `),v=parseFloat(S[0])||0,T=parseFloat(S[1])||0,w,E,x,b;n?l!==Io&&(E=f*m-p*_)&&(x=v*(m/E)+T*(-_/E)+(_*M-m*g)/E,b=v*(-p/E)+T*(f/E)-(f*M-p*g)/E,v=x,T=b):(w=qg(e),v=w.x+(~S[0].indexOf(`%`)?v/100*w.width:v),T=w.y+(~(S[1]||S[0]).indexOf(`%`)?T/100*w.height:T)),i||i!==!1&&o.smooth?(g=v-c,M=T-h,o.xOffset=d+(g*f+M*_)-g,o.yOffset=u+(g*p+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Xn]=`0px 0px`,a&&(Gr(a,o,`xOrigin`,c,v),Gr(a,o,`yOrigin`,h,T),Gr(a,o,`xOffset`,d,o.xOffset),Gr(a,o,`yOffset`,u,o.yOffset)),e.setAttribute(`data-svg-origin`,v+` `+T)};var Do=function(e,t){var n=e._gsap||new ud(e);if(`x`in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a=`px`,o=`deg`,l=getComputedStyle(e),c=ri(e,Xn)||`0`,h,d,u,f,p,_,m,g,M,S,v,T,w,E,x,b,C,P,I,H,V,F,G,B,Z,te,D,oe,_e,Je,$e,Ye;return h=d=u=_=m=g=M=S=v=0,f=p=1,n.svg=!!(e.getCTM&&Yg(e)),l.translate&&((l.translate!==`none`||l.scale!==`none`||l.rotate!==`none`)&&(i[Ft]=(l.translate!==`none`?`translate3d(`+(l.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `:``)+(l.rotate!==`none`?`rotate(`+l.rotate+`) `:``)+(l.scale!==`none`?`scale(`+l.scale.split(` `).join(`,`)+`) `:``)+(l[Ft]!==`none`?l[Ft]:``)),i.scale=i.rotate=i.translate=`none`),E=Ad(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+`px `+(n.yOrigin-Z.y)+`px`,B=``):B=!t&&e.getAttribute(`data-svg-origin`),bd(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,E)),T=n.xOrigin||0,w=n.yOrigin||0,E!==Io&&(P=E[0],I=E[1],H=E[2],V=E[3],h=F=E[4],d=G=E[5],E.length===6?(f=Math.sqrt(P*P+I*I),p=Math.sqrt(V*V+H*H),_=P||I?pa(I,P)*_s:0,M=H||V?pa(H,V)*_s+_:0,M&&(p*=Math.abs(Math.cos(M*ga))),n.svg&&(h-=T-(T*P+w*H),d-=w-(T*I+w*V))):(Ye=E[6],Je=E[7],D=E[8],oe=E[9],_e=E[10],$e=E[11],h=E[12],d=E[13],u=E[14],x=pa(Ye,_e),m=x*_s,x&&(b=Math.cos(-x),C=Math.sin(-x),B=F*b+D*C,Z=G*b+oe*C,te=Ye*b+_e*C,D=F*-C+D*b,oe=G*-C+oe*b,_e=Ye*-C+_e*b,$e=Je*-C+$e*b,F=B,G=Z,Ye=te),x=pa(-H,_e),g=x*_s,x&&(b=Math.cos(-x),C=Math.sin(-x),B=P*b-D*C,Z=I*b-oe*C,te=H*b-_e*C,$e=V*C+$e*b,P=B,I=Z,H=te),x=pa(I,P),_=x*_s,x&&(b=Math.cos(x),C=Math.sin(x),B=P*b+I*C,Z=F*b+G*C,I=I*b-P*C,G=G*b-F*C,P=B,F=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=Vt(Math.sqrt(P*P+I*I+H*H)),p=Vt(Math.sqrt(G*G+Ye*Ye)),x=pa(F,G),M=Math.abs(x)>2e-4?x*_s:0,v=$e?1/($e<0?-$e:$e):0),n.svg&&(B=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!Jg(ri(e,Ft)),B&&e.setAttribute(`transform`,B))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Vt(f),n.scaleY=Vt(p),n.rotation=Vt(_)+o,n.rotationX=Vt(m)+o,n.rotationY=Vt(g)+o,n.skewX=M+o,n.skewY=S+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(i[Xn]=Mh(c)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?mT:Xg?$g:pT,n.uncache=0,n};var Mh=function(e){return(e=e.split(` `))[0]+` `+e[1]};var vd=function(e,t,n){var i=fn(t);return Vt(parseFloat(t)+parseFloat(Wr(e,`x`,n+`px`,i)))+i};var pT=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,$g(e,t)};var ms=`0deg`;var Po=`0px`;var gs=`) `;var $g=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,M=n.target,S=n.zOrigin,v=``,T=g===`auto`&&e&&e!==1||g===!0;if(S&&(d!==ms||h!==ms)){var w=parseFloat(h)*ga,E=Math.sin(w),x=Math.cos(w),b;w=parseFloat(d)*ga,b=Math.cos(w),a=vd(M,a,E*b*-S),o=vd(M,o,-Math.sin(w)*-S),l=vd(M,l,x*b*-S+S)}m!==Po&&(v+=`perspective(`+m+gs),(i||s)&&(v+=`translate(`+i+`%, `+s+`%) `),(T||a!==Po||o!==Po||l!==Po)&&(v+=l!==Po||T?`translate3d(`+a+`, `+o+`, `+l+`) `:`translate(`+a+`, `+o+gs),c!==ms&&(v+=`rotate(`+c+gs),h!==ms&&(v+=`rotateY(`+h+gs),d!==ms&&(v+=`rotateX(`+d+gs),(u!==ms||f!==ms)&&(v+=`skew(`+u+`, `+f+gs),(p!==1||_!==1)&&(v+=`scale(`+p+`, `+_+gs),M.style[Ft]=v||`translate(0, 0)`};var mT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,M=n.forceCSS,S=parseFloat(a),v=parseFloat(o),T,w,E,x,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ga,c*=ga,T=Math.cos(l)*d,w=Math.sin(l)*d,E=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=ga,b=Math.tan(c-h),b=Math.sqrt(1+b*b),E*=b,x*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),T*=b,w*=b)),T=Vt(T),w=Vt(w),E=Vt(E),x=Vt(x)):(T=d,x=u,w=E=0),(S&&!~(a+``).indexOf(`px`)||v&&!~(o+``).indexOf(`px`))&&(S=Wr(f,`x`,a,`px`),v=Wr(f,`y`,o,`px`)),(p||_||m||g)&&(S=Vt(S+p-(p*T+_*E)+m),v=Vt(v+_-(p*w+_*x)+g)),(i||s)&&(b=f.getBBox(),S=Vt(S+i/100*b.width),v=Vt(v+s/100*b.height)),b=`matrix(`+T+`,`+w+`,`+E+`,`+x+`,`+S+`,`+v+`)`,f.setAttribute(`transform`,b),M&&(f.style[Ft]=b)};var gT=function(e,t,n,i,s){var a=360,o=tn(s),c=parseFloat(s)*(o&&~s.indexOf(`rad`)?_s:1)-i,h=i+c+`deg`,d,u;return o&&(d=s.split(`_`)[1],d===`short`&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d===`cw`&&c<0?c=(c+a*Lg)%a-~~(c/a)*a:d===`ccw`&&c>0&&(c=(c-a*Lg)%a-~~(c/a)*a)),e._pt=u=new Dn(e._pt,t,n,i,c,Qb),u.e=h,u.u=`deg`,e._props.push(n),u};var kg=function(e,t){for(var n in t)e[n]=t[n];return e};var _T=function(e,t,n){var i=kg({},n._gsap),s=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,l,c,h,d,u,f,p;i.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Ft]=t,o=Do(n,1),Hr(n,Ft),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Ft],a[Ft]=t,o=Do(n,1),a[Ft]=c);for(l in hr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=fn(c),p=fn(h),d=f!==p?Wr(n,l,c,p):parseFloat(c),u=parseFloat(h),e._pt=new Dn(e._pt,o,l,d,u-d,yd),e._pt.u=p||0,e._props.push(l));kg(o,i)};In(`padding,margin,Width,Radius`,function(r,e){var t=`Top`,n=`Right`,i=`Bottom`,s=`Left`,a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:`border`+o+r});yh[e>1?`border`+r:r]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(p){return cr(o,p,c)}),f=u.join(` `),f.split(u[0]).length===5?u[0]:f;u=(h+``).split(` `),f={},a.forEach(function(p,_){return f[p]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,f,d)}});var Cd={name:`css`,register:Sd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,u,f,p,_,m,g,M,S,v,T,w,E,x,b;Td||Sd(),this.styles=this.styles||Wg(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!==`autoRound`&&(h=t[_],!(Vn[_]&&dd(_,t,n,i,e,s)))){if(f=typeof h,p=yh[_],f===`function`&&(h=h.call(n,i,e,s),f=typeof h),f===`string`&&~h.indexOf(`random(`)&&(h=da(h)),p)p(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(_)+``).trim(),h+=``,or.lastIndex=0,or.test(c)||(m=fn(c),g=fn(h),g?m!==g&&(c=Wr(e,_,c,g)+g):m&&(h+=m)),this.add(o,`setProperty`,c,h,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!==`undefined`){if(l&&_ in l?(c=typeof l[_]==`function`?l[_].call(n,i,e,s):l[_],tn(c)&&~c.indexOf(`random(`)&&(c=da(c)),fn(c+``)||c===`auto`||(c+=Wn.units[_]||fn(cr(e,_))||``),(c+``).charAt(1)===`=`&&(c=cr(e,_))):c=cr(e,_),u=parseFloat(c),M=f===`string`&&h.charAt(1)===`=`&&h.substr(0,2),M&&(h=h.substr(2)),d=parseFloat(h),_ in qi&&(_===`autoAlpha`&&(u===1&&cr(e,`visibility`)===`hidden`&&d&&(u=0),x.push(`visibility`,0,o.visibility),Gr(this,o,`visibility`,u?`inherit`:`hidden`,d?`inherit`:`hidden`,!d)),_!==`scale`&&_!==`transform`&&(_=qi[_],~_.indexOf(`,`)&&(_=_.split(`,`)[0]))),S=_ in hr,S){if(this.styles.save(_),b=h,f===`string`&&h.substring(0,6)===`var(--`){if(h=ri(e,h.substring(4,h.indexOf(`)`))),h.substring(0,5)===`calc(`){var C=e.style.perspective;e.style.perspective=h,h=ri(e,`perspective`),C?e.style.perspective=C:Hr(e,`perspective`)}d=parseFloat(h)}if(v||(T=e._gsap,T.renderTransform&&!t.parseTransform||Do(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,v=this._pt=new Dn(this._pt,o,Ft,0,1,T.renderTransform,T,0,-1),v.dep=1),_===`scale`)this._pt=new Dn(this._pt,T,`scaleY`,T.scaleY,(M?ds(T.scaleY,M+d):d)-T.scaleY||0,yd),this._pt.u=0,a.push(`scaleY`,_),_+=`X`;else if(_===`transformOrigin`){x.push(Xn,0,o[Xn]),h=fT(h),T.svg?bd(e,h,0,w,0,this):(g=parseFloat(h.split(` `)[2])||0,g!==T.zOrigin&&Gr(this,T,`zOrigin`,T.zOrigin,g),Gr(this,o,_,Mh(c),Mh(h)));continue}else if(_===`svgOrigin`){bd(e,h,1,w,0,this);continue}else if(_ in Zg){gT(this,T,_,u,M?ds(u,M+h):h);continue}else if(_===`smoothOrigin`){Gr(this,T,`smooth`,T.smooth,h);continue}else if(_===`force3D`){T[_]=h;continue}else if(_===`transform`){_T(this,h,e);continue}}else _ in o||(_=_a(_)||_);if(S||(d||d===0)&&(u||u===0)&&!Kb.test(h)&&_ in o)m=(c+``).substr((u+``).length),d||(d=0),g=fn(h)||(_ in Wn.units?Wn.units[_]:m),m!==g&&(u=Wr(e,_,c,g)),this._pt=new Dn(this._pt,S?T:o,_,u,(M?ds(u,M+d):d)-u,!S&&(g===`px`||_===`zIndex`)&&t.autoRound!==!1?tT:yd),this._pt.u=g||0,S&&b!==h?(this._pt.b=c,this._pt.e=b,this._pt.r=eT):m!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=jb);else if(_ in o)uT.call(this,e,_,c,M?M+h:h);else if(_ in e)this.add(e,_,c||e[_],M?M+h:h,i,s);else if(_!==`parseTransform`){mh(_,h);continue}S||(_ in o?x.push(_,0,o[_]):typeof e[_]==`function`?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}E&&xd(this)},render:function(e,t){if(t.tween._time||!wd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:cr,aliases:qi,getSetter:function(e,t,n){var i=qi[t];return i&&i.indexOf(`,`)<0&&(t=i),t in hr&&t!==Xn&&(e._gsap.x||cr(e,`x`))?n&&Dg===n?t===`scale`?sT:rT:(Dg=n||{})&&(t===`scale`?aT:oT):e.style&&!ph(e.style[t])?nT:~t.indexOf(`-`)?iT:vh(e,t)},core:{_removeProperty:Hr,_getMatrix:Ad}};Sn.utils.checkPrefix=_a;Sn.core.getStyleSaver=Wg;(function(r,e,t,n){var i=In(r+`,`+e+`,`+t,function(s){hr[s]=1});In(e,function(s){Wn.units[s]=`deg`,Zg[s]=1}),qi[i[13]]=r+`,`+e,In(n,function(s){var a=s.split(`:`);qi[a[1]]=i[a[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`);In(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(r){Wn.units[r]=`px`});Sn.registerPlugin(Cd);var xT=Sn.registerPlugin(Cd)||Sn;xT.core.Tween;function Kg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,`value`in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function vT(r,e,t){return e&&Kg(r.prototype,e),t&&Kg(r,t),r}var dn;var Th;var si;var Xr;var qr;var va;var jg;var vs;var ya;var e_;var ur;var Ci;var t_;var n_=function(){return dn||typeof window<`u`&&(dn=window.gsap)&&dn.registerPlugin&&dn};var i_=1;var xa=[];var st=[];var Ri=[];var No=Date.now;var Rd=function(e,t){return t};var MT=function(){var e=ya.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,Ri),st=n,Ri=i,Rd=function(a,o){return t[a](o)}};var dr=function(e,t){return~Ri.indexOf(e)&&Ri[Ri.indexOf(e)+1][t]};var Uo=function(e){return!!~e_.indexOf(e)};var Nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})};var Ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)};var Sh=`scrollLeft`;var bh=`scrollTop`;var Pd=function(){return ur&&ur.isPressed||st.cache++};var wh=function(e,t){var n=function i(s){if(s||s===0){i_&&(si.history.scrollRestoration=`manual`);var a=ur&&ur.isPressed;s=i.v=Math.round(s)||(ur&&ur.iOS?1:0),e(s),i.cacheID=st.cache,a&&Rd(`ss`,s)}else(t||st.cache!==i.cacheID||Rd(`ref`))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n};var bn={s:Sh,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:wh(function(r){return arguments.length?si.scrollTo(r,$t.sc()):si.pageXOffset||Xr[Sh]||qr[Sh]||va[Sh]||0})};var $t={s:bh,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:bn,sc:wh(function(r){return arguments.length?si.scrollTo(bn.sc(),r):si.pageYOffset||Xr[bh]||qr[bh]||va[bh]||0})};var Un=function(e,t){return(t&&t._ctx&&t._ctx.selector||dn.utils.toArray)(e)[0]||(typeof e==`string`&&dn.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)};var ST=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1};var fr=function(e,t){var n=t.s,i=t.sc;Uo(e)&&(e=Xr.scrollingElement||qr);var s=st.indexOf(e),a=i===$t.sc?1:2;!~s&&(s=st.push(e)-1),st[s+a]||Nn(e,`scroll`,Pd);var o=st[s+a],l=o||(st[s+a]=wh(dr(e,n),!0)||(Uo(e)?i:wh(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=dn.getProperty(e,`scrollBehavior`)===`smooth`),l};var Eh=function(e,t,n){var i=e,s=e,a=No(),o=a,l=t||50,c=Math.max(500,l*3),h=function(p,_){var m=No();_||m-a>l?(s=i,i=p,o=a,a=m):n?i+=p:i=s+(p-s)/(m-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},u=function(p){var _=o,m=s,g=No();return(p||p===0)&&p!==i&&h(p),a===o||g-o>c?0:(i+(n?m:-m))/((n?g:a)-_)*1e3};return{update:h,reset:d,getVelocity:u}};var Lo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e};var Qg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n};var r_=function(){ya=dn.core.globals().ScrollTrigger,ya&&ya.core&&MT()};var s_=function(e){return dn=e||n_(),!Th&&dn&&typeof document<`u`&&document.body&&(si=window,Xr=document,qr=Xr.documentElement,va=Xr.body,e_=[si,Xr,qr,va],dn.utils.clamp,t_=dn.core.context||function(){},vs=`onpointerenter`in va?`pointer`:`mouse`,jg=Gt.isTouch=si.matchMedia&&si.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ci=Gt.eventTypes=(`ontouchstart`in qr?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in qr?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return i_=0},500),Th=1),ya||r_(),Th};bn.op=$t;st.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Th||s_(dn)||console.warn(`Please gsap.registerPlugin(Observer)`),ya||r_();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,M=n.onDrag,S=n.onPress,v=n.onRelease,T=n.onRight,w=n.onLeft,E=n.onUp,x=n.onDown,b=n.onChangeX,C=n.onChangeY,P=n.onChange,I=n.onToggleX,H=n.onToggleY,V=n.onHover,F=n.onHoverEnd,G=n.onMove,B=n.ignoreCheck,Z=n.isNormalizer,te=n.onGestureStart,D=n.onGestureEnd,oe=n.onWheel,_e=n.onEnable,Je=n.onDisable,$e=n.onClick,Ye=n.scrollSpeed,K=n.capture,ce=n.allowClicks,ae=n.lockAxis,Ce=n.onLockAxis;this.target=o=Un(o)||qr,this.vars=n,f&&(f=dn.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,Ye=Ye||1,a=a||`wheel,touch,pointer`,c=c!==!1,l||(l=parseFloat(si.getComputedStyle(va).lineHeight)||22);var ke,Pe,Qe,be,Q,ne,ie,N=this,me=0,Fe=0,De=n.passive||!h&&n.passive!==!1,Re=fr(o,bn),He=fr(o,$t),L=Re(),ht=He(),Ve=~a.indexOf(`touch`)&&!~a.indexOf(`pointer`)&&Ci[0]===`pointerdown`,R=Uo(o),y=o.ownerDocument||Xr,z=[0,0,0],W=[0,0,0],J=0,fe=function(){return J=No()},le=function(se,Xe){return(N.event=se)&&f&&ST(se.target,f)||Xe&&Ve&&se.pointerType!==`touch`||B&&B(se,Xe)},$=function(){N._vx.reset(),N._vy.reset(),Pe.pause(),d&&d(N)},j=function(){var se=N.deltaX=Qg(z),Xe=N.deltaY=Qg(W),ue=Math.abs(se)>=i,qe=Math.abs(Xe)>=i;P&&(ue||qe)&&P(N,se,Xe,z,W),ue&&(T&&N.deltaX>0&&T(N),w&&N.deltaX<0&&w(N),b&&b(N),I&&N.deltaX<0!=me<0&&I(N),me=N.deltaX,z[0]=z[1]=z[2]=0),qe&&(x&&N.deltaY>0&&x(N),E&&N.deltaY<0&&E(N),C&&C(N),H&&N.deltaY<0!=Fe<0&&H(N),Fe=N.deltaY,W[0]=W[1]=W[2]=0),(be||Qe)&&(G&&G(N),Qe&&(m&&Qe===1&&m(N),M&&M(N),Qe=0),be=!1),ne&&!(ne=!1)&&Ce&&Ce(N),Q&&(oe(N),Q=!1),ke=0},xe=function(se,Xe,ue){z[ue]+=se,W[ue]+=Xe,N._vx.update(se),N._vy.update(Xe),c?ke||(ke=requestAnimationFrame(j)):j()},Ne=function(se,Xe){ae&&!ie&&(N.axis=ie=Math.abs(se)>Math.abs(Xe)?`x`:`y`,ne=!0),ie!==`y`&&(z[2]+=se,N._vx.update(se,!0)),ie!==`x`&&(W[2]+=Xe,N._vy.update(Xe,!0)),c?ke||(ke=requestAnimationFrame(j)):j()},ve=function(se){if(!le(se,1)){se=Lo(se,h);var Xe=se.clientX,ue=se.clientY,qe=Xe-N.x,Ue=ue-N.y,je=N.isDragging;N.x=Xe,N.y=ue,(je||(qe||Ue)&&(Math.abs(N.startX-Xe)>=s||Math.abs(N.startY-ue)>=s))&&(Qe||(Qe=je?2:1),je||(N.isDragging=!0),Ne(qe,Ue))}},ge=N.onPress=function(he){le(he,1)||he&&he.button||(N.axis=ie=null,Pe.pause(),N.isPressed=!0,he=Lo(he),me=Fe=0,N.startX=N.x=he.clientX,N.startY=N.y=he.clientY,N._vx.reset(),N._vy.reset(),Nn(Z?o:y,Ci[1],ve,De,!0),N.deltaX=N.deltaY=0,S&&S(N))},de=N.onRelease=function(he){if(!le(he,1)){Ln(Z?o:y,Ci[1],ve,!0);var se=!isNaN(N.y-N.startY),Xe=N.isDragging,ue=Xe&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),qe=Lo(he);!ue&&se&&(N._vx.reset(),N._vy.reset(),h&&ce&&dn.delayedCall(.08,function(){if(No()-J>300&&!he.defaultPrevented){if(he.target.click)he.target.click();else if(y.createEvent){var Ue=y.createEvent(`MouseEvents`);Ue.initMouseEvent(`click`,!0,!0,si,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),he.target.dispatchEvent(Ue)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,d&&Xe&&!Z&&Pe.restart(!0),Qe&&j(),g&&Xe&&g(N),v&&v(N,ue)}},Be=function(se){return se.touches&&se.touches.length>1&&(N.isGesturing=!0)&&te(se,N.isDragging)},We=function(){return(N.isGesturing=!1)||D(N)},U=function(se){if(!le(se)){var Xe=Re(),ue=He();xe((Xe-L)*Ye,(ue-ht)*Ye,1),L=Xe,ht=ue,d&&Pe.restart(!0)}},pe=function(se){if(!le(se)){se=Lo(se,h),oe&&(Q=!0);var Xe=(se.deltaMode===1?l:se.deltaMode===2?si.innerHeight:1)*p;xe(se.deltaX*Xe,se.deltaY*Xe,0),d&&!Z&&Pe.restart(!0)}},ee=function(se){if(!le(se)){var Xe=se.clientX,ue=se.clientY,qe=Xe-N.x,Ue=ue-N.y;N.x=Xe,N.y=ue,be=!0,d&&Pe.restart(!0),(qe||Ue)&&Ne(qe,Ue)}},ye=function(se){N.event=se,V(N)},Me=function(se){N.event=se,F(N)},re=function(se){return le(se)||Lo(se,h)&&$e(N)};Pe=N._dc=dn.delayedCall(u||.25,$).pause(),N.deltaX=N.deltaY=0,N._vx=Eh(0,50,!0),N._vy=Eh(0,50,!0),N.scrollX=Re,N.scrollY=He,N.isDragging=N.isGesturing=N.isPressed=!1,t_(this),N.enable=function(he){return N.isEnabled||(Nn(R?y:o,`scroll`,Pd),a.indexOf(`scroll`)>=0&&Nn(R?y:o,`scroll`,U,De,K),a.indexOf(`wheel`)>=0&&Nn(o,`wheel`,pe,De,K),(a.indexOf(`touch`)>=0&&jg||a.indexOf(`pointer`)>=0)&&(Nn(o,Ci[0],ge,De,K),Nn(y,Ci[2],de),Nn(y,Ci[3],de),ce&&Nn(o,`click`,fe,!0,!0),$e&&Nn(o,`click`,re),te&&Nn(y,`gesturestart`,Be),D&&Nn(y,`gestureend`,We),V&&Nn(o,vs+`enter`,ye),F&&Nn(o,vs+`leave`,Me),G&&Nn(o,vs+`move`,ee)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=be=Qe=!1,N._vx.reset(),N._vy.reset(),L=Re(),ht=He(),he&&he.type&&ge(he),_e&&_e(N)),N},N.disable=function(){N.isEnabled&&(xa.filter(function(he){return he!==N&&Uo(he.target)}).length||Ln(R?y:o,`scroll`,Pd),N.isPressed&&(N._vx.reset(),N._vy.reset(),Ln(Z?o:y,Ci[1],ve,!0)),Ln(R?y:o,`scroll`,U,K),Ln(o,`wheel`,pe,K),Ln(o,Ci[0],ge,K),Ln(y,Ci[2],de),Ln(y,Ci[3],de),Ln(o,`click`,fe,!0),Ln(o,`click`,re),Ln(y,`gesturestart`,Be),Ln(y,`gestureend`,We),Ln(o,vs+`enter`,ye),Ln(o,vs+`leave`,Me),Ln(o,vs+`move`,ee),N.isEnabled=N.isPressed=N.isDragging=!1,Je&&Je(N))},N.kill=N.revert=function(){N.disable();var he=xa.indexOf(N);he>=0&&xa.splice(he,1),ur===N&&(ur=0)},xa.push(N),Z&&Uo(o)&&(ur=N),N.enable(_)},vT(r,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),r})();Gt.version=`3.15.0`;Gt.create=function(r){return new Gt(r)};Gt.register=s_;Gt.getAll=function(){return xa.slice()};Gt.getById=function(r){return xa.filter(function(e){return e.vars.id===r})[0]};n_()&&dn.registerPlugin(Gt);var Le;var Ta;var ct;var xt;var li;var _t;var Wd;var Gh;var Jo;var Go;var Oo;var Ah;var Tn;var Xh;var Od;var On;var a_;var o_;var wa;var b_;var Id;var T_;var Fn;var Bd;var w_;var E_;var Yr;var zd;var Xd;var Ea;var qd;var Ho;var kd;var Dd;var Ch=1;var wn=Date.now;var Ld=wn();var vi=0;var Bo=0;var l_=function(e,t,n){var i=oi(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=i,i?e.substr(6,e.length-7):e};var c_=function(e,t){return t&&(!oi(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e};var bT=function r(){return Bo&&requestAnimationFrame(r)};var h_=function(){return Xh=1};var u_=function(){return Xh=0};var Yi=function(e){return e};var zo=function(e){return Math.round(e*1e5)/1e5||0};var A_=function(){return typeof window<`u`};var C_=function(){return Le||A_()&&(Le=window.gsap)&&Le.registerPlugin&&Le};var ws=function(e){return!!~Wd.indexOf(e)};var R_=function(e){return(e===`Height`?qd:ct[`inner`+e])||li[`client`+e]||_t[`client`+e]};var P_=function(e){return dr(e,`getBoundingClientRect`)||(ws(e)?function(){return Vh.width=ct.innerWidth,Vh.height=qd,Vh}:function(){return pr(e)})};var TT=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=dr(e,`getBoundingClientRect`))?function(){return a()[i]}:function(){return(t?R_(s):e[`client`+s])||0}};var wT=function(e,t){return!t||~Ri.indexOf(e)?P_(e):function(){return Vh}};var Zi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n=`scroll`+i)&&(a=dr(e,n))?a()-P_(e)()[s]:ws(e)?(li[n]||_t[n])-R_(i):e[n]-e[`offset`+i])};var Rh=function(e,t){for(var n=0;n<wa.length;n+=3)(!t||~t.indexOf(wa[n+1]))&&e(wa[n],wa[n+1],wa[n+2])};var oi=function(e){return typeof e==`string`};var En=function(e){return typeof e==`function`};var ko=function(e){return typeof e==`number`};var ys=function(e){return typeof e==`object`};var Fo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()};var Ma=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}};var Sa=Math.abs;var I_=`left`;var D_=`top`;var Yd=`right`;var Zd=`bottom`;var Ss=`width`;var bs=`height`;var Wo=`Right`;var Xo=`Left`;var qo=`Top`;var Yo=`Bottom`;var Kt=`padding`;var _i=`margin`;var Ca=`Width`;var Jd=`Height`;var nn=`px`;var xi=function(e){return ct.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)};var ET=function(e){var t=xi(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`};var f_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e};var pr=function(e,t){var n=t&&xi(e)[Od]!==`matrix(1, 0, 0, 1, 0, 0)`&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i};var Hh=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0};var L_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t};var AT=function(e){return function(t){return Le.utils.snap(L_(e),t)}};var $d=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}};var CT=function(e){return function(t,n){return $d(L_(e))(t,n.direction)}};var Ph=function(e,t,n,i){return n.split(`,`).forEach(function(s){return e(t,s,i)})};var cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})};var ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)};var Ih=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))};var d_={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`};var Dh={toggleActions:`play`,anticipatePin:0};var Wh={top:0,left:0,center:.5,bottom:1,right:1};var Oh=function(e,t){if(oi(e)){var n=e.indexOf(`=`),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Wh?Wh[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e};var Lh=function(e,t,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,p=xt.createElement(`div`),_=ws(n)||dr(n,`pinType`)===`fixed`,m=e.indexOf(`scroller`)!==-1,g=_?_t:n.tagName===`IFRAME`?n.contentDocument.body:n,M=e.indexOf(`start`)!==-1,S=M?c:h,v=`border-color:`+S+`;font-size:`+d+`;color:`+S+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return v+=`position:`+((m||l)&&_?`fixed;`:`absolute;`),(m||l||!_)&&(v+=(i===$t?Yd:Zd)+`:`+(a+parseFloat(u))+`px;`),o&&(v+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=M,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=v,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+i.op.d2],Bh(p,0,i,M),p};var Bh=function(e,t,n,i){var s={display:`block`},a=n[i?`os2`:`p2`],o=n[i?`p2`:`os2`];e._isFlipped=i,s[n.a+`Percent`]=i?-100:0,s[n.a]=i?`1px`:0,s[`border`+a+Ca]=1,s[`border`+o+Ca]=0,s[n.p]=t+`px`,Le.set(e,s)};var at=[];var Vd={};var $o;var p_=function(){return wn()-vi>34&&($o||($o=requestAnimationFrame(mr)))};var ba=function(){(!Fn||!Fn.isPressed||Fn.startX>_t.clientWidth)&&(st.cache++,Fn?$o||($o=requestAnimationFrame(mr)):mr(),vi||As(`scrollStart`),vi=wn())};var Nd=function(){E_=ct.innerWidth,w_=ct.innerHeight};var Vo=function(e){st.cache++,(e===!0||!Tn&&!T_&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!Bd||E_!==ct.innerWidth||Math.abs(ct.innerHeight-w_)>ct.innerHeight*.25))&&Gh.restart(!0)};var Es={};var RT=[];var N_=function r(){return ln(ft,`scrollEnd`,r)||Ms(!0)};var As=function(e){return Es[e]&&Es[e].map(function(t){return t()})||RT};var ai=[];var U_=function(e){for(var t=0;t<ai.length;t+=5)(!e||ai[t+4]&&ai[t+4].query===e)&&(ai[t].style.cssText=ai[t+1],ai[t].getBBox&&ai[t].setAttribute(`transform`,ai[t+2]||``),ai[t+3].uncache=1)};var F_=function(){return st.forEach(function(e){return En(e)&&++e.cacheID&&(e.rec=e())})};var Kd=function(e,t){var n;for(On=0;On<at.length;On++)n=at[On],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ho=!0,t&&U_(t),t||As(`revert`)};var O_=function(e,t){st.cache++,(t||!Bn)&&st.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),oi(e)&&(ct.history.scrollRestoration=Xd=e)};var Bn;var Ts=0;var m_;var PT=function(){if(m_!==Ts){var e=m_=Ts;requestAnimationFrame(function(){return e===Ts&&Ms(!0)})}};var B_=function(){_t.appendChild(Ea),qd=!Fn&&Ea.offsetHeight||ct.innerHeight,_t.removeChild(Ea)};var g_=function(e){return Jo(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})};var Ms=function(e,t){if(li=xt.documentElement,_t=xt.body,Wd=[ct,xt,li,_t],vi&&!e&&!Ho){cn(ft,`scrollEnd`,N_);return}B_(),Bn=ft.isRefreshing=!0,Ho||F_();var n=As(`refreshInit`);b_&&ft.sort(),t||Kd(),st.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior=`auto`),i(0))}),at.slice(0).forEach(function(i){return i.refresh()}),Ho=!1,at.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?`offsetWidth`:`offsetHeight`,a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),kd=1,g_(!0),at.forEach(function(i){var s=Zi(i.scroller,i._dir),a=i.vars.end===`max`||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),g_(!1),kd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior=`smooth`}),i.rec&&i(i.rec))}),O_(Xd,1),Gh.pause(),Ts++,Bn=2,mr(2),at.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Bn=ft.isRefreshing=!1,As(`refresh`)};var Gd=0;var zh=1;var Zo;var mr=function(e){if(e===2||!Bn&&!Ho){ft.isUpdating=!0,Zo&&Zo.update(0);var t=at.length,n=wn(),i=n-Ld>=50,s=t&&at[0].scroll();if(zh=Gd>s?-1:1,Bn||(Gd=s),i&&(vi&&!Xh&&n-vi>200&&(vi=0,As(`scrollEnd`)),Oo=Ld,Ld=n),zh<0){for(On=t;On-->0;)at[On]&&at[On].update(0,i);zh=1}else for(On=0;On<t;On++)at[On]&&at[On].update(0,i);ft.isUpdating=!1}$o=0};var Hd=[I_,D_,Zd,Yd,_i+Yo,_i+Wo,_i+qo,_i+Xo,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`];var kh=Hd.concat([Ss,bs,`boxSizing`,`max`+Ca,`max`+Jd,`position`,_i,Kt,Kt+qo,Kt+Wo,Kt+Yo,Kt+Xo]);var IT=function(e,t,n){Aa(n);var i=e._gsap;if(i.spacerIsNative)Aa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1};var Ud=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Hd.length,a=t.style,o=e.style,l;s--;)l=Hd[s],a[l]=n[l];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[Zd]=o[Yd]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[Ss]=Hh(e,bn)+nn,a[bs]=Hh(e,$t)+nn,a[Kt]=o[_i]=o[D_]=o[I_]=`0`,Aa(i),o[Ss]=o[`max`+Ca]=n[Ss],o[bs]=o[`max`+Jd]=n[bs],o[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}};var DT=/([A-Z])/g;var Aa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(DT,`-$1`).toLowerCase())}};var Nh=function(e){for(var t=kh.length,n=e.style,i=[],s=0;s<t;s++)i.push(kh[s],n[kh[s]]);return i.t=e,i};var LT=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i};var Vh={left:0,top:0};var __=function(e,t,n,i,s,a,o,l,c,h,d,u,f,p){En(e)&&(e=e(l)),oi(e)&&e.substr(0,3)===`max`&&(e=u+(e.charAt(4)===`=`?Oh(`0`+e.substr(3),n):0));var _=f?f.time():0,m,g,M;if(f&&f.seek(0),isNaN(e)||(e=+e),ko(e))f&&(e=Le.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,e)),o&&Bh(o,n,i,!0);else{En(t)&&(t=t(l));var S=(e||`0`).split(` `),v,T,w,E;M=Un(t,l)||_t,v=pr(M)||{},(!v||!v.left&&!v.top)&&xi(M).display===`none`&&(E=M.style.display,M.style.display=`block`,v=pr(M),E?M.style.display=E:M.style.removeProperty(`display`)),T=Oh(S[0],v[i.d]),w=Oh(S[1]||`0`,n),e=v[i.p]-c[i.p]-h+T+s-w,o&&Bh(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var x=e+n,b=a._isStart;m=`scroll`+i.d2,Bh(a,x,i,b&&x>20||!b&&(d?Math.max(_t[m],li[m]):a.parentNode[m])<=x+1),d&&(c=pr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+nn))}return f&&M&&(m=pr(M),f.seek(u),g=pr(M),f._caScrollDist=m[i.p]-g[i.p],e=e/f._caScrollDist*u),f&&f.seek(_),f?e:Math.round(e)};var NT=/(webkit|moz|length|cssText|inset)/i;var x_=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===_t){e._stOrig=s.cssText,o=xi(e);for(a in o)!+a&&!NT.test(a)&&o[a]&&typeof s[a]==`string`&&a!==`0`&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}};var z_=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}};var Uh=function(e,t,n){var i={};i[t.p]=`+=`+n,Le.set(e,i)};var v_=function(e,t){var n=fr(e,t),i=`_scroll`+t.p2,s=function a(o,l,c,h,d){var u=a.tween,f=l.onComplete,p={};c=c||n();var _=z_(n,c,function(){u.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,u&&u.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){st.cache++,a.tween&&mr()},l.onComplete=function(){a.tween=0,f&&f.call(u)},u=a.tween=Le.to(e,l),u};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,`wheel`,n.wheelHandler),ft.isTouch&&cn(e,`touchmove`,n.wheelHandler),s};var ft=(function(){function r(t,n){Ta||r.register(Le)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),zd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Bo){this.update=this.refresh=this.kill=Yi;return}n=f_(oi(n)||ko(n)||n.nodeType?{trigger:n}:n,Dh);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,M=s.onSnapComplete,S=s.once,v=s.snap,T=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,x=s.fastScrollEnd,b=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?bn:$t,P=!d&&d!==0,I=Un(n.scroller||ct),H=Le.core.getCache(I),V=ws(I),F=(`pinType`in n?n.pinType:dr(I,`pinType`)||V&&`fixed`)===`fixed`,G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=P&&n.toggleActions.split(` `),Z=`markers`in n?n.markers:Dh.markers,te=V?0:parseFloat(xi(I)[`border`+C.p2+Ca])||0,D=this,oe=n.onRefreshInit&&function(){return n.onRefreshInit(D)},_e=TT(I,V,C),Je=wT(I,V),$e=0,Ye=0,K=0,ce=fr(I,C),ae,Ce,ke,Pe,Qe,be,Q,ne,ie,N,me,Fe,De,Re,He,L,ht,Ve,R,y,z,W,J,fe,le,$,j,xe,Ne,ve,ge,de,Be,We,U,pe,ee,ye,Me;if(D._startClamp=D._endClamp=!1,D._dir=C,m*=45,D.scroller=I,D.scroll=E?E.time.bind(E):ce,Pe=ce(),D.vars=n,i=i||n.animation,`refreshPriority`in n&&(b_=1,n.refreshPriority===-9999&&(Zo=D)),H.tweenScroll=H.tweenScroll||{top:v_(I,$t),left:v_(I,bn)},D.tweenTo=ae=H.tweenScroll[C.p],D.scrubDuration=function(ue){Be=ko(ue)&&ue,Be?de?de.duration(ue):de=Le.to(i,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Be,paused:!0,onComplete:function(){return g&&g(D)}}):(de&&de.progress(1).kill(),de=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(d),ve=0,l||(l=i.vars.id)),v&&((!ys(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in _t.style&&Le.set(V?[_t,li]:I,{scrollBehavior:`auto`}),st.forEach(function(ue){return En(ue)&&ue.target===(V?xt.scrollingElement||li:I)&&(ue.smooth=!1)}),ke=En(v.snapTo)?v.snapTo:v.snapTo===`labels`?AT(i):v.snapTo===`labelsDirectional`?CT(i):v.directional!==!1?function(ue,qe){return $d(v.snapTo)(ue,wn()-Ye<500?0:qe.direction)}:Le.utils.snap(v.snapTo),We=v.duration||{min:.1,max:2},We=ys(We)?Go(We.min,We.max):Go(We,We),U=Le.delayedCall(v.delay||Be/2||.1,function(){var ue=ce(),qe=wn()-Ye<500,Ue=ae.tween;if((qe||Math.abs(D.getVelocity())<10)&&!Ue&&!Xh&&$e!==ue){var je=(ue-be)/Re,Yt=i&&!P?i.totalProgress():je,ot=qe?0:(Yt-ge)/(wn()-Oo)*1e3||0,Ct=Le.utils.clamp(-je,1-je,Sa(ot/2)*ot/.185),rn=je+(v.inertia===!1?0:Ct),Rt,yt,dt=v,An=dt.onStart,wt=dt.onInterrupt,pn=dt.onComplete;if(Rt=ke(rn,D),ko(Rt)||(Rt=rn),yt=Math.max(0,Math.round(be+Rt*Re)),ue<=Q&&ue>=be&&yt!==ue){if(Ue&&!Ue._initted&&Ue.data<=Sa(yt-ue))return;v.inertia===!1&&(Ct=Rt-je),ae(yt,{duration:We(Sa(Math.max(Sa(rn-Yt),Sa(Rt-Yt))*.185/ot/.05||0)),ease:v.ease||`power3`,data:Sa(yt-ue),onInterrupt:function(){return U.restart(!0)&&wt&&Ma(D,wt)},onComplete:function(){D.update(),$e=ce(),i&&!P&&(de?de.resetTo(`totalProgress`,Rt,i._tTime/i._tDur):i.progress(Rt)),ve=ge=i&&!P?i.totalProgress():D.progress,M&&M(D),pn&&Ma(D,pn)}},ue,Ct*Re,yt-ue-Ct*Re),An&&Ma(D,An,ae.tween)}}else D.isActive&&$e!==ue&&U.restart(!0)}).pause()),l&&(Vd[l]=D),u=D.trigger=Un(u||f!==!0&&f),Me=u&&u._gsap&&u._gsap.stRevert,Me&&(Me=Me(D)),f=f===!0?u:Un(f),oi(o)&&(o={targets:u,className:o}),f&&(p===!1||p===_i||(p=!p&&f.parentNode&&f.parentNode.style&&xi(f.parentNode).display===`flex`?!1:Kt),D.pin=f,Ce=Le.core.getCache(f),Ce.spacer?He=Ce.pinState:(w&&(w=Un(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ce.spacerIsNative=!!w,w&&(Ce.spacerState=Nh(w))),Ce.spacer=Ve=w||xt.createElement(`div`),Ve.classList.add(`pin-spacer`),l&&Ve.classList.add(`pin-spacer-`+l),Ce.pinState=He=Nh(f)),n.force3D!==!1&&Le.set(f,{force3D:!0}),D.spacer=Ve=Ce.spacer,Ne=xi(f),fe=Ne[p+C.os2],y=Le.getProperty(f),z=Le.quickSetter(f,C.a,nn),Ud(f,Ve,Ne),ht=Nh(f)),Z){Fe=ys(Z)?f_(Z,d_):d_,N=Lh(`scroller-start`,l,I,C,Fe,0),me=Lh(`scroller-end`,l,I,C,Fe,0,N),R=N[`offset`+C.op.d2];var re=Un(dr(I,`content`)||I);ne=this.markerStart=Lh(`start`,l,re,C,Fe,R,0,E),ie=this.markerEnd=Lh(`end`,l,re,C,Fe,R,0,E),E&&(ye=Le.quickSetter([ne,ie],C.a,nn)),!F&&!(Ri.length&&dr(I,`fixedMarkers`)===!0)&&(ET(V?_t:I),Le.set([N,me],{force3D:!0}),$=Le.quickSetter(N,C.a,nn),xe=Le.quickSetter(me,C.a,nn))}if(E){var he=E.vars.onUpdate,se=E.vars.onUpdateParams;E.eventCallback(`onUpdate`,function(){D.update(0,0,1),he&&he.apply(E,se||[])})}if(D.previous=function(){return at[at.indexOf(D)-1]},D.next=function(){return at[at.indexOf(D)+1]},D.revert=function(ue,qe){if(!qe)return D.kill(!0);var Ue=ue!==!1||!D.enabled,je=Tn;Ue!==D.isReverted&&(Ue&&(pe=Math.max(ce(),D.scroll.rec||0),K=D.progress,ee=i&&i.progress()),ne&&[ne,ie,N,me].forEach(function(Yt){return Yt.style.display=Ue?`none`:`block`}),Ue&&(Tn=D,D.update(Ue)),f&&(!T||!D.isActive)&&(Ue?IT(f,Ve,He):Ud(f,Ve,xi(f),le)),Ue||D.update(Ue),Tn=je,D.isReverted=Ue)},D.refresh=function(ue,qe,Ue,je){if(!((Tn||!D.enabled)&&!qe)){if(f&&ue&&vi){cn(r,`scrollEnd`,N_);return}!Bn&&oe&&oe(D),Tn=D,ae.tween&&!Ue&&(ae.tween.kill(),ae.tween=0),de&&de.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(we){return we.vars.immediateRender&&we.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Yt=_e(),ot=Je(),Ct=E?E.duration():Zi(I,C),rn=Re<=.01||!Re,Rt=0,yt=je||0,dt=ys(Ue)?Ue.end:n.end,An=n.endTrigger||u,wt=ys(Ue)?Ue.start:n.start||(n.start===0||!u?0:f?`0 0`:`0 100%`),pn=D.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,D),Cn=u&&Math.max(0,at.indexOf(D))||0,Zt=Cn,Ot,Qt,Pi,Cs,sn,Ht,ci,A,k,Y,X,q,Te;for(Z&&ys(Ue)&&(q=Le.getProperty(N,C.p),Te=Le.getProperty(me,C.p));Zt-->0;)Ht=at[Zt],Ht.end||Ht.refresh(0,1)||(Tn=D),ci=Ht.pin,ci&&(ci===u||ci===f||ci===pn)&&!Ht.isReverted&&(Y||(Y=[]),Y.unshift(Ht),Ht.revert(!0,!0)),Ht!==at[Zt]&&(Cn--,Zt--);for(En(wt)&&(wt=wt(D)),wt=l_(wt,`start`,D),be=__(wt,u,Yt,C,ce(),ne,N,D,ot,te,F,Ct,E,D._startClamp&&`_startClamp`)||(f?-.001:0),En(dt)&&(dt=dt(D)),oi(dt)&&!dt.indexOf(`+=`)&&(~dt.indexOf(` `)?dt=(oi(wt)?wt.split(` `)[0]:``)+dt:(Rt=Oh(dt.substr(2),Yt),dt=oi(wt)?wt:(E?Le.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,be):be)+Rt,An=u)),dt=l_(dt,`end`,D),Q=Math.max(be,__(dt||(An?`100% 0`:Ct),An,Yt,C,ce()+Rt,ie,me,D,ot,te,F,Ct,E,D._endClamp&&`_endClamp`))||-.001,Rt=0,Zt=Cn;Zt--;)Ht=at[Zt]||{},ci=Ht.pin,ci&&Ht.start-Ht._pinPush<=be&&!E&&Ht.end>0&&(Ot=Ht.end-(D._startClamp?Math.max(0,Ht.start):Ht.start),(ci===u&&Ht.start-Ht._pinPush<be||ci===pn)&&isNaN(wt)&&(Rt+=Ot*(1-Ht.progress)),ci===f&&(yt+=Ot));if(be+=Rt,Q+=Rt,D._startClamp&&(D._startClamp+=Rt),D._endClamp&&!Bn&&(D._endClamp=Q||-.001,Q=Math.min(Q,Zi(I,C))),Re=Q-be||(be-=.01)&&.001,rn&&(K=Le.utils.clamp(0,1,Le.utils.normalize(be,Q,pe))),D._pinPush=yt,ne&&Rt&&(Ot={},Ot[C.a]=`+=`+Rt,pn&&(Ot[C.p]=`-=`+ce()),Le.set([ne,ie],Ot)),f&&!(kd&&D.end>=Zi(I,C)))Ot=xi(f),Cs=C===$t,Pi=ce(),W=parseFloat(y(C.a))+yt,!Ct&&Q>1&&(X=(V?xt.scrollingElement||li:I).style,X={style:X,value:X[`overflow`+C.a.toUpperCase()]},V&&xi(_t)[`overflow`+C.a.toUpperCase()]!==`scroll`&&(X.style[`overflow`+C.a.toUpperCase()]=`scroll`)),Ud(f,Ve,Ot),ht=Nh(f),Qt=pr(f,!0),A=F&&fr(I,Cs?bn:$t)(),p?(le=[p+C.os2,Re+yt+nn],le.t=Ve,Zt=p===Kt?Hh(f,C)+Re+yt:0,Zt&&(le.push(C.d,Zt+nn),Ve.style.flexBasis!==`auto`&&(Ve.style.flexBasis=Zt+nn)),Aa(le),pn&&at.forEach(function(we){we.pin===pn&&we.vars.pinSpacing!==!1&&(we._subPinOffset=!0)}),F&&ce(pe)):(Zt=Hh(f,C),Zt&&Ve.style.flexBasis!==`auto`&&(Ve.style.flexBasis=Zt+nn)),F&&(sn={top:Qt.top+(Cs?Pi-be:A)+nn,left:Qt.left+(Cs?A:Pi-be)+nn,boxSizing:`border-box`,position:`fixed`},sn[Ss]=sn[`max`+Ca]=Math.ceil(Qt.width)+nn,sn[bs]=sn[`max`+Jd]=Math.ceil(Qt.height)+nn,sn[_i]=sn[_i+qo]=sn[_i+Wo]=sn[_i+Yo]=sn[_i+Xo]=`0`,sn[Kt]=Ot[Kt],sn[Kt+qo]=Ot[Kt+qo],sn[Kt+Wo]=Ot[Kt+Wo],sn[Kt+Yo]=Ot[Kt+Yo],sn[Kt+Xo]=Ot[Kt+Xo],L=LT(He,sn,T),Bn&&ce(0)),i?(k=i._initted,Id(1),i.render(i.duration(),!0,!0),J=y(C.a)-W+Re+yt,j=Math.abs(Re-J)>1,F&&j&&L.splice(L.length-2,2),i.render(0,!0,!0),k||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Id(0)):J=Re,X&&(X.value?X.style[`overflow`+C.a.toUpperCase()]=X.value:X.style.removeProperty(`overflow-`+C.a));else if(u&&ce()&&!E)for(Qt=u.parentNode;Qt&&Qt!==_t;)Qt._pinOffset&&(be-=Qt._pinOffset,Q-=Qt._pinOffset),Qt=Qt.parentNode;Y&&Y.forEach(function(we){return we.revert(!1,!0)}),D.start=be,D.end=Q,Pe=Qe=Bn?pe:ce(),!E&&!Bn&&(Pe<pe&&ce(pe),D.scroll.rec=0),D.revert(!1,!0),Ye=wn(),U&&($e=-1,U.restart(!0)),Tn=0,i&&P&&(i._initted||ee)&&i.progress()!==ee&&i.progress(ee||0,!0).render(i.time(),!0,!0),(rn||K!==D.progress||E||_||i&&!i._initted)&&(i&&!P&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(E&&be<-.001&&!K?Le.utils.normalize(be,Q,0):K,!0),D.progress=rn||(Pe-be)/Re===K?0:K),f&&p&&(Ve._pinOffset=Math.round(D.progress*J)),de&&de.invalidate(),isNaN(q)||(q-=Le.getProperty(N,C.p),Te-=Le.getProperty(me,C.p),Uh(N,C,q),Uh(ne,C,q-(je||0)),Uh(me,C,Te),Uh(ie,C,Te-(je||0))),rn&&!Bn&&D.update(),h&&!Bn&&!De&&(De=!0,h(D),De=!1)}},D.getVelocity=function(){return(ce()-Qe)/(wn()-Oo)*1e3||0},D.endAnimation=function(){Fo(D.callbackAnimation),i&&(de?de.progress(1):i.paused()?P||Fo(i,D.direction<0,1):Fo(i,i.reversed()))},D.labelToScroll=function(ue){return i&&i.labels&&(be||D.refresh()||be)+i.labels[ue]/i.duration()*Re||0},D.getTrailing=function(ue){var qe=at.indexOf(D),Ue=D.direction>0?at.slice(0,qe).reverse():at.slice(qe+1);return(oi(ue)?Ue.filter(function(je){return je.vars.preventOverlaps===ue}):Ue).filter(function(je){return D.direction>0?je.end<=be:je.start>=Q})},D.update=function(ue,qe,Ue){if(!(E&&!Ue&&!ue)){var je=Bn===!0?pe:D.scroll(),Yt=ue?0:(je-be)/Re,ot=Yt<0?0:Yt>1?1:Yt||0,Ct=D.progress,rn,Rt,yt,dt,An,wt,pn,Cn;if(qe&&(Qe=Pe,Pe=E?ce():je,v&&(ge=ve,ve=i&&!P?i.totalProgress():ot)),m&&f&&!Tn&&!Ch&&vi&&(!ot&&be<je+(je-Qe)/(wn()-Oo)*m?ot=1e-4:ot===1&&Q>je+(je-Qe)/(wn()-Oo)*m&&(ot=.9999)),ot!==Ct&&D.enabled){if(rn=D.isActive=!!ot&&ot<1,Rt=!!Ct&&Ct<1,wt=rn!==Rt,An=wt||!!ot!=!!Ct,D.direction=ot>Ct?1:-1,D.progress=ot,An&&!Tn&&(yt=ot&&!Ct?0:ot===1?1:Ct===1?2:3,P&&(dt=!wt&&B[yt+1]!==`none`&&B[yt+1]||B[yt],Cn=i&&(dt===`complete`||dt===`reset`||dt in i))),b&&(wt||Cn)&&(Cn||d||!i)&&(En(b)?b(D):D.getTrailing(b).forEach(function(Pi){return Pi.endAnimation()})),P||(de&&!Tn&&!Ch?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo(`totalProgress`,ot,i._tTime/i._tDur):(de.vars.totalProgress=ot,de.invalidate().restart())):i&&i.totalProgress(ot,!!(Tn&&(Ye||ue)))),f){if(ue&&p&&(Ve.style[p+C.os2]=fe),!F)z(zo(W+J*ot));else if(An){if(pn=!ue&&ot>Ct&&Q+1>je&&je+1>=Zi(I,C),T)if(!ue&&(rn||pn)){var Zt=pr(f,!0),Ot=je-be;x_(f,_t,Zt.top+(C===$t?Ot:0)+nn,Zt.left+(C===$t?0:Ot)+nn)}else x_(f,Ve);Aa(rn||pn?L:ht),j&&ot<1&&rn||z(W+(ot===1&&!pn?J:0))}}v&&!ae.tween&&!Tn&&!Ch&&U.restart(!0),o&&(wt||S&&ot&&(ot<1||!Dd))&&Jo(o.targets).forEach(function(Pi){return Pi.classList[rn||S?`add`:`remove`](o.className)}),a&&!P&&!ue&&a(D),An&&!Tn?(P&&(Cn&&(dt===`complete`?i.pause().totalProgress(1):dt===`reset`?i.restart(!0).pause():dt===`restart`?i.restart(!0):i[dt]()),a&&a(D)),(wt||!Dd)&&(c&&wt&&Ma(D,c),G[yt]&&Ma(D,G[yt]),S&&(ot===1?D.kill(!1,1):G[yt]=0),wt||(yt=ot===1?1:3,G[yt]&&Ma(D,G[yt]))),x&&!rn&&Math.abs(D.getVelocity())>(ko(x)?x:2500)&&(Fo(D.callbackAnimation),de?de.progress(1):Fo(i,dt===`reverse`?1:!ot,1))):P&&a&&!Tn&&a(D)}if(xe){var Qt=E?je/E.duration()*(E._caScrollDist||0):je;$(Qt+(N._isFlipped?1:0)),xe(Qt)}ye&&ye(-je/E.duration()*(E._caScrollDist||0))}},D.enable=function(ue,qe){D.enabled||(D.enabled=!0,cn(I,`resize`,Vo),V||cn(I,`scroll`,ba),oe&&cn(r,`refreshInit`,oe),ue!==!1&&(D.progress=K=0,Pe=Qe=$e=ce()),qe!==!1&&D.refresh())},D.getTween=function(ue){return ue&&ae?ae.tween:de},D.setPositions=function(ue,qe,Ue,je){if(E){var Yt=E.scrollTrigger,ot=E.duration(),Ct=Yt.end-Yt.start;ue=Yt.start+Ct*ue/ot,qe=Yt.start+Ct*qe/ot}D.refresh(!1,!1,{start:c_(ue,Ue&&!!D._startClamp),end:c_(qe,Ue&&!!D._endClamp)},je),D.update()},D.adjustPinSpacing=function(ue){if(le&&ue){var qe=le.indexOf(C.d)+1;le[qe]=parseFloat(le[qe])+ue+nn,le[1]=parseFloat(le[1])+ue+nn,Aa(le)}},D.disable=function(ue,qe){if(ue!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,qe||de&&de.pause(),pe=0,Ce&&(Ce.uncache=1),oe&&ln(r,`refreshInit`,oe),U&&(U.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!V)){for(var Ue=at.length;Ue--;)if(at[Ue].scroller===I&&at[Ue]!==D)return;ln(I,`resize`,Vo),V||ln(I,`scroll`,ba)}},D.kill=function(ue,qe){D.disable(ue,qe),de&&!qe&&de.kill(),l&&delete Vd[l];var Ue=at.indexOf(D);Ue>=0&&at.splice(Ue,1),Ue===On&&zh>0&&On--,Ue=0,at.forEach(function(je){return je.scroller===D.scroller&&(Ue=1)}),Ue||Bn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,ue&&i.revert({kill:!1}),qe||i.kill()),ne&&[ne,ie,N,me].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),Zo===D&&(Zo=0),f&&(Ce&&(Ce.uncache=1),Ue=0,at.forEach(function(je){return je.pin===f&&Ue++}),Ue||(Ce.spacer=0)),n.onKill&&n.onKill(D)},at.push(D),D.enable(!1,!1),Me&&Me(D),i&&i.add&&!Re){var Xe=D.update;D.update=function(){D.update=Xe,st.cache++,be||Q||D.refresh()},Le.delayedCall(.01,D.update),Re=.01,be=Q=0}else D.refresh();f&&PT()},r.register=function(n){return Ta||(Le=n||C_(),A_()&&window.document&&r.enable(),Ta=Bo),Ta},r.defaults=function(n){if(n)for(var i in n)Dh[i]=n[i];return Dh},r.disable=function(n,i){Bo=0,at.forEach(function(a){return a[i?`kill`:`disable`](n)}),ln(ct,`wheel`,ba),ln(xt,`scroll`,ba),clearInterval(Ah),ln(xt,`touchcancel`,Yi),ln(_t,`touchstart`,Yi),Ph(ln,xt,`pointerdown,touchstart,mousedown`,h_),Ph(ln,xt,`pointerup,touchend,mouseup`,u_),Gh.kill(),Rh(ln);for(var s=0;s<st.length;s+=3)Ih(ln,st[s],st[s+1]),Ih(ln,st[s],st[s+2])},r.enable=function(){if(ct=window,xt=document,li=xt.documentElement,_t=xt.body,Le){if(Jo=Le.utils.toArray,Go=Le.utils.clamp,zd=Le.core.context||Yi,Id=Le.core.suppressOverwrites||Yi,Xd=ct.history.scrollRestoration||`auto`,Gd=ct.pageYOffset||0,Le.core.globals(`ScrollTrigger`,r),_t){Bo=1,Ea=document.createElement(`div`),Ea.style.height=`100vh`,Ea.style.position=`absolute`,B_(),bT(),Gt.register(Le),r.isTouch=Gt.isTouch,Yr=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Bd=Gt.isTouch===1,cn(ct,`wheel`,ba),Wd=[ct,xt,li,_t],Le.matchMedia?(r.matchMedia=function(h){var d=Le.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Le.addEventListener(`matchMediaInit`,function(){F_(),Kd()}),Le.addEventListener(`matchMediaRevert`,function(){return U_()}),Le.addEventListener(`matchMedia`,function(){Ms(0,1),As(`matchMedia`)}),Le.matchMedia().add(`(orientation: portrait)`,function(){return Nd(),Nd})):console.warn(`Requires GSAP 3.11.0 or later`),Nd(),cn(xt,`scroll`,ba);var n=_t.hasAttribute(`style`),i=_t.style,s=i.borderTopStyle,a=Le.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle=`solid`,o=pr(_t),$t.m=Math.round(o.top+$t.sc())||0,bn.m=Math.round(o.left+bn.sc())||0,s?i.borderTopStyle=s:i.removeProperty(`border-top-style`),n||(_t.setAttribute(`style`,``),_t.removeAttribute(`style`)),Ah=setInterval(p_,250),Le.delayedCall(.5,function(){return Ch=0}),cn(xt,`touchcancel`,Yi),cn(_t,`touchstart`,Yi),Ph(cn,xt,`pointerdown,touchstart,mousedown`,h_),Ph(cn,xt,`pointerup,touchend,mouseup`,u_),Od=Le.utils.checkPrefix(`transform`),kh.push(Od),Ta=wn(),Gh=Le.delayedCall(.2,Ms).pause(),wa=[xt,`visibilitychange`,function(){var h=ct.innerWidth,d=ct.innerHeight;xt.hidden?(a_=h,o_=d):(a_!==h||o_!==d)&&Vo()},xt,`DOMContentLoaded`,Ms,ct,`load`,Ms,ct,`resize`,Vo],Rh(cn),at.forEach(function(h){return h.enable(0,1)}),l=0;l<st.length;l+=3)Ih(ln,st[l],st[l+1]),Ih(ln,st[l],st[l+2])}else if(xt)xt.addEventListener(`DOMContentLoaded`,function h(){r.enable(),xt.removeEventListener(`DOMContentLoaded`,h)})}},r.config=function(n){`limitCallbacks`in n&&(Dd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ah)||(Ah=i)&&setInterval(p_,i),`ignoreMobileResize`in n&&(Bd=r.isTouch===1&&n.ignoreMobileResize),`autoRefreshEvents`in n&&(Rh(ln)||Rh(cn,n.autoRefreshEvents||`none`),T_=(n.autoRefreshEvents+``).indexOf(`resize`)===-1)},r.scrollerProxy=function(n,i){var s=Un(n),a=st.indexOf(s),o=ws(s);~a&&st.splice(a,o?6:2),i&&(o?Ri.unshift(ct,i,_t,i,li,i):Ri.unshift(s,i))},r.clearMatchMedia=function(n){at.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(oi(n)?Un(n):n).getBoundingClientRect(),o=a[s?Ss:bs]*i||0;return s?a.right-o>0&&a.left+o<ct.innerWidth:a.bottom-o>0&&a.top+o<ct.innerHeight},r.positionInViewport=function(n,i,s){oi(n)&&(n=Un(n));var a=n.getBoundingClientRect(),o=a[s?Ss:bs],l=i==null?o/2:i in Wh?Wh[i]*o:~i.indexOf(`%`)?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ct.innerWidth:(a.top+l)/ct.innerHeight},r.killAll=function(n){if(at.slice(0).forEach(function(s){return s.vars.id!==`ScrollSmoother`&&s.kill()}),n!==!0){var i=Es.killAll||[];Es={},i.forEach(function(s){return s()})}},r})();ft.version=`3.15.0`;ft.saveStyles=function(r){return r?Jo(r).forEach(function(e){if(e&&e.style){var t=ai.indexOf(e);t>=0&&ai.splice(t,5),ai.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),Le.core.getCache(e),zd())}}):ai};ft.revert=function(r,e){return Kd(!r,e)};ft.create=function(r,e){return new ft(r,e)};ft.refresh=function(r){return r?Vo(!0):(Ta||ft.register())&&Ms(!0)};ft.update=function(r){return++st.cache&&mr(r===!0?2:0)};ft.clearScrollMemory=O_;ft.maxScroll=function(r,e){return Zi(r,e?bn:$t)};ft.getScrollFunc=function(r,e){return fr(Un(r),e?bn:$t)};ft.getById=function(r){return Vd[r]};ft.getAll=function(){return at.filter(function(r){return r.vars.id!==`ScrollSmoother`})};ft.isScrolling=function(){return!!vi};ft.snapDirectional=$d;ft.addEventListener=function(r,e){var t=Es[r]||(Es[r]=[]);~t.indexOf(e)||t.push(e)};ft.removeEventListener=function(r,e){var t=Es[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ft.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var d=[],u=[],f=Le.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)===`on`&&En(e[o])&&o!==`onRefreshInit`?a(o,e[o]):e[o];return En(s)&&(s=s(),cn(ft,`refresh`,function(){return s=e.batchMax()})),Jo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(ft.create(c))}),t};var y_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1};var Fd=function r(e,t){t===!0?e.style.removeProperty(`touch-action`):e.style.touchAction=t===!0?`auto`:t?`pan-`+t+(Gt.isTouch?` pinch-zoom`:``):`none`,e===li&&r(_t,t)};var Fh={auto:1,scroll:1};var UT=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Le.core.getCache(s),o=wn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Fh[(l=xi(s)).overflowY]||Fh[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ws(s)&&(Fh[(l=xi(s)).overflowY]||Fh[l.overflowX]),a._isScrollT=o}(a._isScroll||i===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)};var k_=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&UT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(xt,Gt.eventTypes[0],S_,!1,!0)},onDisable:function(){return ln(xt,Gt.eventTypes[0],S_,!0)}})};var FT=/(input|label|select|textarea)/i;var M_;var S_=function(e){var t=FT.test(e.target.tagName);(t||M_)&&(e._gsapAllow=!0,M_=t)};var OT=function(e){ys(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type=`wheel,touch`),e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Un(e.target)||li,h=Le.core.globals().ScrollSmoother,d=h&&h.get(),u=Yr&&(e.content&&Un(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=fr(c,$t),p=fr(c,bn),_=1,m=(Gt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,g=0,M=En(i)?function(){return i(o)}:function(){return i||2.8},S,v,T=k_(c,e.type,!0,s),w=function(){return v=!1},E=Yi,x=Yi,b=function(){l=Zi(c,$t),x=Go(Yr?1:0,l),n&&(E=Go(0,Zi(c,bn))),S=Ts},C=function(){u._gsap.y=zo(parseFloat(u._gsap.y)+f.offset)+`px`,u.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(u._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},P=function(){if(v){requestAnimationFrame(w);var Z=zo(o.deltaY/2),te=x(f.v-Z);if(u&&te!==f.v+f.offset){f.offset=te-f.v;var D=zo((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+D+`, 0, 1)`,u._gsap.y=D+`px`,f.cacheID=st.cache,mr()}return!0}f.offset&&C(),v=!0},I,H,V,F,G=function(){b(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo(`scrollY`,l))};return u&&Le.set(u,{y:`+=0`}),e.ignoreCheck=function(B){return Yr&&B.type===`touchmove`&&P(B)||_>1.05&&B.type!==`touchstart`||o.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){v=!1;var B=_;_=zo((ct.visualViewport&&ct.visualViewport.scale||1)/m),I.pause(),B!==_&&Fd(c,_>1.01?!0:n?!1:`x`),H=p(),V=f(),b(),S=Ts},e.onRelease=e.onGestureStart=function(B,Z){if(f.offset&&C(),!Z)F.restart(!0);else{st.cache++;var te=M(),D,oe;n&&(D=p(),oe=D+te*.05*-B.velocityX/.227,te*=y_(p,D,oe,Zi(c,bn)),I.vars.scrollX=E(oe)),D=f(),oe=D+te*.05*-B.velocityY/.227,te*=y_(f,D,oe,Zi(c,$t)),I.vars.scrollY=x(oe),I.invalidate().duration(te).play(.01),(Yr&&I.vars.scrollY>=l||D>=l-1)&&Le.to({},{onUpdate:G,duration:te})}a&&a(B)},e.onWheel=function(){I._ts&&I.pause(),wn()-g>1e3&&(S=0,g=wn())},e.onChange=function(B,Z,te,D,oe){if(Ts!==S&&b(),Z&&n&&p(E(D[2]===Z?H+(B.startX-B.x):p()+Z-D[1])),te){f.offset&&C();var _e=oe[2]===te,Je=_e?V+B.startY-B.y:f()+te-oe[1],$e=x(Je);_e&&Je!==$e&&(V+=$e-Je),f($e)}(te||Z)&&mr()},e.onEnable=function(){Fd(c,n?!1:`x`),ft.addEventListener(`refresh`,G),cn(ct,`resize`,G),f.smooth&&(f.target.style.scrollBehavior=`auto`,f.smooth=p.smooth=!1),T.enable()},e.onDisable=function(){Fd(c,!0),ln(ct,`resize`,G),ft.removeEventListener(`refresh`,G),T.kill()},e.lockAxis=e.lockAxis!==!1,o=new Gt(e),o.iOS=Yr,Yr&&!f()&&f(1),Yr&&Le.ticker.add(Yi),F=o._dc,I=Le.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:z_(f,f(),function(){return I.pause()})},onUpdate:mr,onComplete:F.vars.onComplete}),o};ft.sort=function(r){if(En(r))return at.sort(r);var e=ct.pageYOffset||0;return ft.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),at.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ft.observe=function(r){return new Gt(r)};ft.normalizeScroll=function(r){if(typeof r>`u`)return Fn;if(r===!0&&Fn)return Fn.enable();if(r===!1){Fn&&Fn.kill(),Fn=r;return}var e=r instanceof Gt?r:OT(r);return Fn&&Fn.target===e.target&&Fn.kill(),ws(e.target)&&(Fn=e),e};ft.core={_getVelocityProp:Eh,_inputObserver:k_,_scrollers:st,_proxies:Ri,bridge:{ss:function(){vi||As(`scrollStart`),vi=wn()},ref:function(){return Tn}}};C_()&&Le.registerPlugin(ft);export{ku as C,xn as D,xT as E,zl as O,jr as S,qa as T,Xu as _,Bu as a,ft as b,Gu as c,Kl as d,Ou as f,Wu as g,Vl as h,Bm as i,zu as k,Iu as l,Rn as m,$s as n,Cu as o,Pu as p,Au as r,Du as s,$n as t,Jl as u,Yu as v,nt as w,io as x,fi as y};