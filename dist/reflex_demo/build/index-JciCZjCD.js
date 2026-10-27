(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const j_="modulepreload",Z_=function(r,e){return new URL(r,e).href},yu={},J_=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let d=function(m){return Promise.all(m.map(f=>Promise.resolve(f).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),h=c?.nonce||c?.getAttribute("nonce");i=d(t.map(m=>{if(m=Z_(m,n),m in yu)return;yu[m]=!0;const f=m.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(n)for(let M=l.length-1;M>=0;M--){const P=l[M];if(P.href===m&&(!f||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${g}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":j_,f||(v.as="script"),v.crossOrigin="",v.href=m,h&&v.setAttribute("nonce",h),document.head.appendChild(v),f)return new Promise((M,P)=>{v.addEventListener("load",M),v.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${m}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};var Q_=(async function(r={}){var e,t=r,n=typeof window=="object",i=typeof WorkerGlobalScope<"u",s=typeof process=="object"&&process.versions?.node&&process.type!="renderer",l=!n&&!s&&!i;if(s){const{createRequire:a}=await J_(async()=>{const{createRequire:o}=await Promise.resolve().then(()=>jT);return{createRequire:o}},void 0,import.meta.url);var c=a(import.meta.url)}var h="./this.program",d=(a,o)=>{throw o},m=import.meta.url,f="";function g(a){return t.locateFile?t.locateFile(a,f):f+a}var v,M;if(s){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var P=process.versions.node,S=P.split(".").slice(0,3);if(S=S[0]*1e4+S[1]*100+S[2].split("-")[0]*1,S<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+P+")");var x=c("fs");m.startsWith("file:")&&(f=c("path").dirname(c("url").fileURLToPath(m))+"/"),M=o=>{o=B(o)?new URL(o):o;var u=x.readFileSync(o);return C(Buffer.isBuffer(u)),u},v=async(o,u=!0)=>{o=B(o)?new URL(o):o;var p=x.readFileSync(o,u?void 0:"utf8");return C(u?Buffer.isBuffer(p):typeof p=="string"),p},process.argv.length>1&&(h=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),d=(o,u)=>{throw process.exitCode=o,u}}else if(l){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||i){try{f=new URL(".",m).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");i&&(M=a=>{var o=new XMLHttpRequest;return o.open("GET",a,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),v=async a=>{if(B(a))return new Promise((u,p)=>{var _=new XMLHttpRequest;_.open("GET",a,!0),_.responseType="arraybuffer",_.onload=()=>{if(_.status==200||_.status==0&&_.response){u(_.response);return}p(_.status)},_.onerror=p,_.send(null)});var o=await fetch(a,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw new Error(o.status+" : "+o.url)}}else throw new Error("environment detection error");var N=console.log.bind(console),k=console.error.bind(console);C(!l,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var L;typeof WebAssembly!="object"&&k("no native wasm support detected");var D=!1;function C(a,o){a||Qe("Assertion failed"+(o?": "+o:""))}var B=a=>a.startsWith("file://");function T(){var a=po();C((a&3)==0),a==0&&(a+=4),xe[a>>2]=34821223,xe[a+4>>2]=2310721022,xe[0]=1668509029}function O(){if(!D){var a=po();a==0&&(a+=4);var o=xe[a>>2],u=xe[a+4>>2];(o!=34821223||u!=2310721022)&&Qe(`Stack overflow! Stack cookie has been overwritten at ${W(a)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${W(u)} ${W(o)}`),xe[0]!=1668509029&&Qe("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class I extends Error{}class j extends I{}class ie extends I{constructor(o){super(o),this.excPtr=o;const u=su(o);this.name=u[0],this.message=u[1]}}(()=>{var a=new Int16Array(1),o=new Int8Array(a.buffer);if(a[0]=25459,o[0]!==115||o[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function ae(a){Object.getOwnPropertyDescriptor(t,a)||Object.defineProperty(t,a,{configurable:!0,set(){Qe(`Attempt to set \`Module.${a}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function V(a){return()=>C(!1,`call to '${a}' via reference taken before Wasm module initialization`)}function z(a){Object.getOwnPropertyDescriptor(t,a)&&Qe(`\`Module.${a}\` was supplied but \`${a}\` not included in INCOMING_MODULE_JS_API`)}function J(a){return a==="FS_createPath"||a==="FS_createDataFile"||a==="FS_createPreloadedFile"||a==="FS_unlink"||a==="addRunDependency"||a==="FS_createLazyFile"||a==="FS_createDevice"||a==="removeRunDependency"}function se(a,o){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,a)&&Object.defineProperty(globalThis,a,{configurable:!0,get(){o()}})}function ce(a,o){se(a,()=>{be(`\`${a}\` is not longer defined by emscripten. ${o}`)})}ce("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),ce("asm","Please use wasmExports instead");function oe(a){se(a,()=>{var o=`\`${a}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,u=a;u.startsWith("_")||(u="$"+a),o+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${u}')`,J(a)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),be(o)}),pe(a)}function pe(a){Object.getOwnPropertyDescriptor(t,a)||Object.defineProperty(t,a,{configurable:!0,get(){var o=`'${a}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;J(a)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Qe(o)}})}var me,ke,Ie,Fe,Ke,at,le,Z,xe,tt,Ne,Je,Xt,ot=!1;function St(){var a=Ie.buffer;Fe=new Int8Array(a),at=new Int16Array(a),Ke=new Uint8Array(a),le=new Uint16Array(a),Z=new Int32Array(a),xe=new Uint32Array(a),tt=new Float32Array(a),Ne=new Float64Array(a),Je=new BigInt64Array(a),Xt=new BigUint64Array(a)}C(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function Nt(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Ze(t.preRun.shift());ae("preRun"),$e(qe)}function gt(){C(!ot),ot=!0,O(),!t.noFSInit&&!b.initialized&&b.init(),Ki.__wasm_call_ctors(),b.ignorePermissions=!1}function zt(){if(O(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Ae(t.postRun.shift());ae("postRun"),$e(Re)}var Ht=0,Kt=null,Rt={},Ft=null;function X(a){Ht++,t.monitorRunDependencies?.(Ht),a?(C(!Rt[a]),Rt[a]=1,Ft===null&&typeof setInterval<"u"&&(Ft=setInterval(()=>{if(D){clearInterval(Ft),Ft=null;return}var o=!1;for(var u in Rt)o||(o=!0,k("still waiting on run dependencies:")),k(`dependency: ${u}`);o&&k("(end of list)")},1e4))):k("warning: run dependency added without ID")}function $t(a){if(Ht--,t.monitorRunDependencies?.(Ht),a?(C(Rt[a]),delete Rt[a]):k("warning: run dependency removed without ID"),Ht==0&&(Ft!==null&&(clearInterval(Ft),Ft=null),Kt)){var o=Kt;Kt=null,o()}}function Qe(a){t.onAbort?.(a),a="Aborted("+a+")",k(a),D=!0;var o=new WebAssembly.RuntimeError(a);throw ke?.(o),o}function F(a,o){return(...u)=>{C(ot,`native function \`${a}\` called before runtime initialization`);var p=Ki[a];return C(p,`exported native function \`${a}\` not found`),C(u.length<=o,`native function \`${a}\` called with ${u.length} args but expects ${o}`),p(...u)}}var E;function Q(){return t.locateFile?g("mujoco.wasm"):new URL(""+new URL("mujoco-CGsuVDfV.wasm",import.meta.url).href,import.meta.url).href}function re(a){if(a==E&&L)return new Uint8Array(L);if(M)return M(a);throw"both async and sync fetching of the wasm failed"}async function he(a){if(!L)try{var o=await v(a);return new Uint8Array(o)}catch{}return re(a)}async function Ee(a,o){try{var u=await he(a),p=await WebAssembly.instantiate(u,o);return p}catch(_){k(`failed to asynchronously prepare wasm: ${_}`),B(E)&&k(`warning: Loading from a file URI (${E}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),Qe(_)}}async function Te(a,o,u){if(!a&&typeof WebAssembly.instantiateStreaming=="function"&&!B(o)&&!s)try{var p=fetch(o,{credentials:"same-origin"}),_=await WebAssembly.instantiateStreaming(p,u);return _}catch(y){k(`wasm streaming compile failed: ${y}`),k("falling back to ArrayBuffer instantiation")}return Ee(o,u)}function de(){return{env:_u,wasi_snapshot_preview1:_u}}async function _e(){function a(w,A){return Ki=w.exports,Ie=Ki.memory,C(Ie,"memory not found in wasm exports"),St(),Ys=Ki.__indirect_function_table,C(Ys,"table not found in wasm exports"),qp(Ki),$t("wasm-instantiate"),Ki}X("wasm-instantiate");var o=t;function u(w){return C(t===o,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),o=null,a(w.instance)}var p=de();if(t.instantiateWasm)return new Promise((w,A)=>{try{t.instantiateWasm(p,(U,Y)=>{w(a(U,Y))})}catch(U){k(`Module.instantiateWasm callback failed with error: ${U}`),A(U)}});E??=Q();var _=await Te(L,E,p),y=u(_);return y}class we{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var $e=a=>{for(;a.length>0;)a.shift()(t)},Re=[],Ae=a=>Re.push(a),qe=[],Ze=a=>qe.push(a),nt=!0,W=a=>(C(typeof a=="number"),a>>>=0,"0x"+a.toString(16).padStart(8,"0")),K=a=>hu(a),H=()=>fu(),be=a=>{be.shown||={},be.shown[a]||(be.shown[a]=1,s&&(a="warning: "+a),k(a))},De=typeof TextDecoder<"u"?new TextDecoder:void 0,ve=(a,o=0,u=NaN)=>{for(var p=o+u,_=o;a[_]&&!(_>=p);)++_;if(_-o>16&&a.buffer&&De)return De.decode(a.subarray(o,_));for(var y="";o<_;){var w=a[o++];if(!(w&128)){y+=String.fromCharCode(w);continue}var A=a[o++]&63;if((w&224)==192){y+=String.fromCharCode((w&31)<<6|A);continue}var U=a[o++]&63;if((w&240)==224?w=(w&15)<<12|A<<6|U:((w&248)!=240&&be("Invalid UTF-8 leading byte "+W(w)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),w=(w&7)<<18|A<<12|U<<6|a[o++]&63),w<65536)y+=String.fromCharCode(w);else{var Y=w-65536;y+=String.fromCharCode(55296|Y>>10,56320|Y&1023)}}return y},Be=(a,o)=>(C(typeof a=="number",`UTF8ToString expects a number (got ${typeof a})`),a?ve(Ke,a,o):""),Ve=(a,o,u,p)=>Qe(`Assertion failed: ${Be(a)}, at: `+[o?Be(o):"unknown filename",u,p?Be(p):"unknown function"]),yt=[],Mt=0,wn=a=>{var o=new Xi(a);return o.get_caught()||(o.set_caught(!0),Mt--),o.set_rethrown(!1),yt.push(o),ea(a),gu(a)},In=()=>{if(!yt.length)return 0;var a=yt[yt.length-1];return ea(a.excPtr),a.excPtr},Vn=0,to=()=>{Se(0,0),C(yt.length>0);var a=yt.pop();mo(a.excPtr),Vn=0};class Xi{constructor(o){this.excPtr=o,this.ptr=o-24}set_type(o){xe[this.ptr+4>>2]=o}get_type(){return xe[this.ptr+4>>2]}set_destructor(o){xe[this.ptr+8>>2]=o}get_destructor(){return xe[this.ptr+8>>2]}set_caught(o){o=o?1:0,Fe[this.ptr+12]=o}get_caught(){return Fe[this.ptr+12]!=0}set_rethrown(o){o=o?1:0,Fe[this.ptr+13]=o}get_rethrown(){return Fe[this.ptr+13]!=0}init(o,u){this.set_adjusted_ptr(0),this.set_type(o),this.set_destructor(u)}set_adjusted_ptr(o){xe[this.ptr+16>>2]=o}get_adjusted_ptr(){return xe[this.ptr+16>>2]}}var Li=a=>cu(a),Ns=a=>{var o=Vn?.excPtr;if(!o)return Li(0),0;var u=new Xi(o);u.set_adjusted_ptr(o);var p=u.get_type();if(!p)return Li(0),o;for(var _ of a){if(_===0||_===p)break;var y=u.ptr+16;if(mu(_,p,y))return Li(_),o}return Li(p),o},Fs=()=>Ns([]),Us=a=>Ns([a]),ei=()=>{var a=yt.pop();a||Qe("no exception to throw");var o=a.excPtr;throw a.get_rethrown()||(yt.push(a),a.set_rethrown(!0),a.set_caught(!1),Mt++),Vn=new ie(o),Vn},Yr=a=>{if(a){var o=new Xi(a);yt.push(o),o.set_rethrown(!0),ei()}},Os=(a,o,u)=>{var p=new Xi(a);throw p.init(o,u),Vn=new ie(a),Mt++,Vn},ks=()=>Mt,lr=a=>{throw Vn||(Vn=new ie(a)),Vn},At={isAbs:a=>a.charAt(0)==="/",splitPath:a=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return o.exec(a).slice(1)},normalizeArray:(a,o)=>{for(var u=0,p=a.length-1;p>=0;p--){var _=a[p];_==="."?a.splice(p,1):_===".."?(a.splice(p,1),u++):u&&(a.splice(p,1),u--)}if(o)for(;u;u--)a.unshift("..");return a},normalize:a=>{var o=At.isAbs(a),u=a.slice(-1)==="/";return a=At.normalizeArray(a.split("/").filter(p=>!!p),!o).join("/"),!a&&!o&&(a="."),a&&u&&(a+="/"),(o?"/":"")+a},dirname:a=>{var o=At.splitPath(a),u=o[0],p=o[1];return!u&&!p?".":(p&&(p=p.slice(0,-1)),u+p)},basename:a=>a&&a.match(/([^\/]+|\/)\/*$/)[1],join:(...a)=>At.normalize(a.join("/")),join2:(a,o)=>At.normalize(a+"/"+o)},cr=()=>{if(s){var a=c("crypto");return o=>a.randomFillSync(o)}return o=>crypto.getRandomValues(o)},Kr=a=>{(Kr=cr())(a)},_i={resolve:(...a)=>{for(var o="",u=!1,p=a.length-1;p>=-1&&!u;p--){var _=p>=0?a[p]:b.cwd();if(typeof _!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!_)return"";o=_+"/"+o,u=At.isAbs(_)}return o=At.normalizeArray(o.split("/").filter(y=>!!y),!u).join("/"),(u?"/":"")+o||"."},relative:(a,o)=>{a=_i.resolve(a).slice(1),o=_i.resolve(o).slice(1);function u(Y){for(var ee=0;ee<Y.length&&Y[ee]==="";ee++);for(var ue=Y.length-1;ue>=0&&Y[ue]==="";ue--);return ee>ue?[]:Y.slice(ee,ue-ee+1)}for(var p=u(a.split("/")),_=u(o.split("/")),y=Math.min(p.length,_.length),w=y,A=0;A<y;A++)if(p[A]!==_[A]){w=A;break}for(var U=[],A=w;A<p.length;A++)U.push("..");return U=U.concat(_.slice(w)),U.join("/")}},jr=[],Di=a=>{for(var o=0,u=0;u<a.length;++u){var p=a.charCodeAt(u);p<=127?o++:p<=2047?o+=2:p>=55296&&p<=57343?(o+=4,++u):o+=3}return o},Bs=(a,o,u,p)=>{if(C(typeof a=="string",`stringToUTF8Array expects a string (got ${typeof a})`),!(p>0))return 0;for(var _=u,y=u+p-1,w=0;w<a.length;++w){var A=a.codePointAt(w);if(A<=127){if(u>=y)break;o[u++]=A}else if(A<=2047){if(u+1>=y)break;o[u++]=192|A>>6,o[u++]=128|A&63}else if(A<=65535){if(u+2>=y)break;o[u++]=224|A>>12,o[u++]=128|A>>6&63,o[u++]=128|A&63}else{if(u+3>=y)break;A>1114111&&be("Invalid Unicode code point "+W(A)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),o[u++]=240|A>>18,o[u++]=128|A>>12&63,o[u++]=128|A>>6&63,o[u++]=128|A&63,w++}}return o[u]=0,u-_},Zr=(a,o,u)=>{var p=Di(a)+1,_=new Array(p),y=Bs(a,_,0,_.length);return _.length=y,_},zs=()=>{if(!jr.length){var a=null;if(s){var o=256,u=Buffer.alloc(o),p=0,_=process.stdin.fd;try{p=x.readSync(_,u,0,o)}catch(y){if(y.toString().includes("EOF"))p=0;else throw y}p>0&&(a=u.slice(0,p).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(a=window.prompt("Input: "),a!==null&&(a+=`
`));if(!a)return null;jr=Zr(a)}return jr.shift()},R={ttys:[],init(){},shutdown(){},register(a,o){R.ttys[a]={input:[],output:[],ops:o},b.registerDevice(a,R.stream_ops)},stream_ops:{open(a){var o=R.ttys[a.node.rdev];if(!o)throw new b.ErrnoError(43);a.tty=o,a.seekable=!1},close(a){a.tty.ops.fsync(a.tty)},fsync(a){a.tty.ops.fsync(a.tty)},read(a,o,u,p,_){if(!a.tty||!a.tty.ops.get_char)throw new b.ErrnoError(60);for(var y=0,w=0;w<p;w++){var A;try{A=a.tty.ops.get_char(a.tty)}catch{throw new b.ErrnoError(29)}if(A===void 0&&y===0)throw new b.ErrnoError(6);if(A==null)break;y++,o[u+w]=A}return y&&(a.node.atime=Date.now()),y},write(a,o,u,p,_){if(!a.tty||!a.tty.ops.put_char)throw new b.ErrnoError(60);try{for(var y=0;y<p;y++)a.tty.ops.put_char(a.tty,o[u+y])}catch{throw new b.ErrnoError(29)}return p&&(a.node.mtime=a.node.ctime=Date.now()),y}},default_tty_ops:{get_char(a){return zs()},put_char(a,o){o===null||o===10?(N(ve(a.output)),a.output=[]):o!=0&&a.output.push(o)},fsync(a){a.output?.length>0&&(N(ve(a.output)),a.output=[])},ioctl_tcgets(a){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(a,o,u){return 0},ioctl_tiocgwinsz(a){return[24,80]}},default_tty1_ops:{put_char(a,o){o===null||o===10?(k(ve(a.output)),a.output=[]):o!=0&&a.output.push(o)},fsync(a){a.output?.length>0&&(k(ve(a.output)),a.output=[])}}},G=a=>{Qe("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},q={ops_table:null,mount(a){return q.createNode(null,"/",16895,0)},createNode(a,o,u,p){if(b.isBlkdev(u)||b.isFIFO(u))throw new b.ErrnoError(63);q.ops_table||={dir:{node:{getattr:q.node_ops.getattr,setattr:q.node_ops.setattr,lookup:q.node_ops.lookup,mknod:q.node_ops.mknod,rename:q.node_ops.rename,unlink:q.node_ops.unlink,rmdir:q.node_ops.rmdir,readdir:q.node_ops.readdir,symlink:q.node_ops.symlink},stream:{llseek:q.stream_ops.llseek}},file:{node:{getattr:q.node_ops.getattr,setattr:q.node_ops.setattr},stream:{llseek:q.stream_ops.llseek,read:q.stream_ops.read,write:q.stream_ops.write,mmap:q.stream_ops.mmap,msync:q.stream_ops.msync}},link:{node:{getattr:q.node_ops.getattr,setattr:q.node_ops.setattr,readlink:q.node_ops.readlink},stream:{}},chrdev:{node:{getattr:q.node_ops.getattr,setattr:q.node_ops.setattr},stream:b.chrdev_stream_ops}};var _=b.createNode(a,o,u,p);return b.isDir(_.mode)?(_.node_ops=q.ops_table.dir.node,_.stream_ops=q.ops_table.dir.stream,_.contents={}):b.isFile(_.mode)?(_.node_ops=q.ops_table.file.node,_.stream_ops=q.ops_table.file.stream,_.usedBytes=0,_.contents=null):b.isLink(_.mode)?(_.node_ops=q.ops_table.link.node,_.stream_ops=q.ops_table.link.stream):b.isChrdev(_.mode)&&(_.node_ops=q.ops_table.chrdev.node,_.stream_ops=q.ops_table.chrdev.stream),_.atime=_.mtime=_.ctime=Date.now(),a&&(a.contents[o]=_,a.atime=a.mtime=a.ctime=_.atime),_},getFileDataAsTypedArray(a){return a.contents?a.contents.subarray?a.contents.subarray(0,a.usedBytes):new Uint8Array(a.contents):new Uint8Array(0)},expandFileStorage(a,o){var u=a.contents?a.contents.length:0;if(!(u>=o)){var p=1024*1024;o=Math.max(o,u*(u<p?2:1.125)>>>0),u!=0&&(o=Math.max(o,256));var _=a.contents;a.contents=new Uint8Array(o),a.usedBytes>0&&a.contents.set(_.subarray(0,a.usedBytes),0)}},resizeFileStorage(a,o){if(a.usedBytes!=o)if(o==0)a.contents=null,a.usedBytes=0;else{var u=a.contents;a.contents=new Uint8Array(o),u&&a.contents.set(u.subarray(0,Math.min(o,a.usedBytes))),a.usedBytes=o}},node_ops:{getattr(a){var o={};return o.dev=b.isChrdev(a.mode)?a.id:1,o.ino=a.id,o.mode=a.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=a.rdev,b.isDir(a.mode)?o.size=4096:b.isFile(a.mode)?o.size=a.usedBytes:b.isLink(a.mode)?o.size=a.link.length:o.size=0,o.atime=new Date(a.atime),o.mtime=new Date(a.mtime),o.ctime=new Date(a.ctime),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},setattr(a,o){for(const u of["mode","atime","mtime","ctime"])o[u]!=null&&(a[u]=o[u]);o.size!==void 0&&q.resizeFileStorage(a,o.size)},lookup(a,o){throw new b.ErrnoError(44)},mknod(a,o,u,p){return q.createNode(a,o,u,p)},rename(a,o,u){var p;try{p=b.lookupNode(o,u)}catch{}if(p){if(b.isDir(a.mode))for(var _ in p.contents)throw new b.ErrnoError(55);b.hashRemoveNode(p)}delete a.parent.contents[a.name],o.contents[u]=a,a.name=u,o.ctime=o.mtime=a.parent.ctime=a.parent.mtime=Date.now()},unlink(a,o){delete a.contents[o],a.ctime=a.mtime=Date.now()},rmdir(a,o){var u=b.lookupNode(a,o);for(var p in u.contents)throw new b.ErrnoError(55);delete a.contents[o],a.ctime=a.mtime=Date.now()},readdir(a){return[".","..",...Object.keys(a.contents)]},symlink(a,o,u){var p=q.createNode(a,o,41471,0);return p.link=u,p},readlink(a){if(!b.isLink(a.mode))throw new b.ErrnoError(28);return a.link}},stream_ops:{read(a,o,u,p,_){var y=a.node.contents;if(_>=a.node.usedBytes)return 0;var w=Math.min(a.node.usedBytes-_,p);if(C(w>=0),w>8&&y.subarray)o.set(y.subarray(_,_+w),u);else for(var A=0;A<w;A++)o[u+A]=y[_+A];return w},write(a,o,u,p,_,y){if(C(!(o instanceof ArrayBuffer)),o.buffer===Fe.buffer&&(y=!1),!p)return 0;var w=a.node;if(w.mtime=w.ctime=Date.now(),o.subarray&&(!w.contents||w.contents.subarray)){if(y)return C(_===0,"canOwn must imply no weird position inside the file"),w.contents=o.subarray(u,u+p),w.usedBytes=p,p;if(w.usedBytes===0&&_===0)return w.contents=o.slice(u,u+p),w.usedBytes=p,p;if(_+p<=w.usedBytes)return w.contents.set(o.subarray(u,u+p),_),p}if(q.expandFileStorage(w,_+p),w.contents.subarray&&o.subarray)w.contents.set(o.subarray(u,u+p),_);else for(var A=0;A<p;A++)w.contents[_+A]=o[u+A];return w.usedBytes=Math.max(w.usedBytes,_+p),p},llseek(a,o,u){var p=o;if(u===1?p+=a.position:u===2&&b.isFile(a.node.mode)&&(p+=a.node.usedBytes),p<0)throw new b.ErrnoError(28);return p},mmap(a,o,u,p,_){if(!b.isFile(a.node.mode))throw new b.ErrnoError(43);var y,w,A=a.node.contents;if(!(_&2)&&A&&A.buffer===Fe.buffer)w=!1,y=A.byteOffset;else{if(w=!0,y=G(),!y)throw new b.ErrnoError(48);A&&((u>0||u+o<A.length)&&(A.subarray?A=A.subarray(u,u+o):A=Array.prototype.slice.call(A,u,u+o)),Fe.set(A,y))}return{ptr:y,allocated:w}},msync(a,o,u,p,_){return q.stream_ops.write(a,o,0,p,u,!1),0}}},ne=async a=>{var o=await v(a);return C(o,`Loading data file "${a}" failed (no arrayBuffer).`),new Uint8Array(o)},te=(...a)=>b.createDataFile(...a),Pe=a=>{for(var o=a;;){if(!Rt[a])return a;a=o+Math.random()}},Ue=[],Ce=(a,o,u,p)=>{typeof Browser<"u"&&Browser.init();var _=!1;return Ue.forEach(y=>{_||y.canHandle(o)&&(y.handle(a,o,u,p),_=!0)}),_},ze=(a,o,u,p,_,y,w,A,U,Y)=>{var ee=o?_i.resolve(At.join2(a,o)):a,ue=Pe(`cp ${ee}`);function ge(fe){function ye(je){Y?.(),A||te(a,o,je,p,_,U),y?.(),$t(ue)}Ce(fe,ee,ye,()=>{w?.(),$t(ue)})||ye(fe)}X(ue),typeof u=="string"?ne(u).then(ge,w):ge(u)},We=a=>{var o={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=o[a];if(typeof u>"u")throw new Error(`Unknown file open mode: ${a}`);return u},rt=(a,o)=>{var u=0;return a&&(u|=365),o&&(u|=146),u},dt=a=>Be(lu(a)),He={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},b={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(a){super(ot?dt(a):""),this.errno=a;for(var o in He)if(He[o]===a){this.code=o;break}}},FSStream:class{shared={};get object(){return this.node}set object(a){this.node=a}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(a){this.shared.flags=a}get position(){return this.shared.position}set position(a){this.shared.position=a}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(a,o,u,p){a||(a=this),this.parent=a,this.mount=a.mount,this.id=b.nextInode++,this.name=o,this.mode=u,this.rdev=p,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(a){a?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(a){a?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return b.isDir(this.mode)}get isDevice(){return b.isChrdev(this.mode)}},lookupPath(a,o={}){if(!a)throw new b.ErrnoError(44);o.follow_mount??=!0,At.isAbs(a)||(a=b.cwd()+"/"+a);e:for(var u=0;u<40;u++){for(var p=a.split("/").filter(Y=>!!Y),_=b.root,y="/",w=0;w<p.length;w++){var A=w===p.length-1;if(A&&o.parent)break;if(p[w]!=="."){if(p[w]===".."){if(y=At.dirname(y),b.isRoot(_)){a=y+"/"+p.slice(w+1).join("/");continue e}else _=_.parent;continue}y=At.join2(y,p[w]);try{_=b.lookupNode(_,p[w])}catch(Y){if(Y?.errno===44&&A&&o.noent_okay)return{path:y};throw Y}if(b.isMountpoint(_)&&(!A||o.follow_mount)&&(_=_.mounted.root),b.isLink(_.mode)&&(!A||o.follow)){if(!_.node_ops.readlink)throw new b.ErrnoError(52);var U=_.node_ops.readlink(_);At.isAbs(U)||(U=At.dirname(y)+"/"+U),a=U+"/"+p.slice(w+1).join("/");continue e}}}return{path:y,node:_}}throw new b.ErrnoError(32)},getPath(a){for(var o;;){if(b.isRoot(a)){var u=a.mount.mountpoint;return o?u[u.length-1]!=="/"?`${u}/${o}`:u+o:u}o=o?`${a.name}/${o}`:a.name,a=a.parent}},hashName(a,o){for(var u=0,p=0;p<o.length;p++)u=(u<<5)-u+o.charCodeAt(p)|0;return(a+u>>>0)%b.nameTable.length},hashAddNode(a){var o=b.hashName(a.parent.id,a.name);a.name_next=b.nameTable[o],b.nameTable[o]=a},hashRemoveNode(a){var o=b.hashName(a.parent.id,a.name);if(b.nameTable[o]===a)b.nameTable[o]=a.name_next;else for(var u=b.nameTable[o];u;){if(u.name_next===a){u.name_next=a.name_next;break}u=u.name_next}},lookupNode(a,o){var u=b.mayLookup(a);if(u)throw new b.ErrnoError(u);for(var p=b.hashName(a.id,o),_=b.nameTable[p];_;_=_.name_next){var y=_.name;if(_.parent.id===a.id&&y===o)return _}return b.lookup(a,o)},createNode(a,o,u,p){C(typeof a=="object");var _=new b.FSNode(a,o,u,p);return b.hashAddNode(_),_},destroyNode(a){b.hashRemoveNode(a)},isRoot(a){return a===a.parent},isMountpoint(a){return!!a.mounted},isFile(a){return(a&61440)===32768},isDir(a){return(a&61440)===16384},isLink(a){return(a&61440)===40960},isChrdev(a){return(a&61440)===8192},isBlkdev(a){return(a&61440)===24576},isFIFO(a){return(a&61440)===4096},isSocket(a){return(a&49152)===49152},flagsToPermissionString(a){var o=["r","w","rw"][a&3];return a&512&&(o+="w"),o},nodePermissions(a,o){return b.ignorePermissions?0:o.includes("r")&&!(a.mode&292)||o.includes("w")&&!(a.mode&146)||o.includes("x")&&!(a.mode&73)?2:0},mayLookup(a){if(!b.isDir(a.mode))return 54;var o=b.nodePermissions(a,"x");return o||(a.node_ops.lookup?0:2)},mayCreate(a,o){if(!b.isDir(a.mode))return 54;try{var u=b.lookupNode(a,o);return 20}catch{}return b.nodePermissions(a,"wx")},mayDelete(a,o,u){var p;try{p=b.lookupNode(a,o)}catch(y){return y.errno}var _=b.nodePermissions(a,"wx");if(_)return _;if(u){if(!b.isDir(p.mode))return 54;if(b.isRoot(p)||b.getPath(p)===b.cwd())return 10}else if(b.isDir(p.mode))return 31;return 0},mayOpen(a,o){return a?b.isLink(a.mode)?32:b.isDir(a.mode)&&(b.flagsToPermissionString(o)!=="r"||o&576)?31:b.nodePermissions(a,b.flagsToPermissionString(o)):44},checkOpExists(a,o){if(!a)throw new b.ErrnoError(o);return a},MAX_OPEN_FDS:4096,nextfd(){for(var a=0;a<=b.MAX_OPEN_FDS;a++)if(!b.streams[a])return a;throw new b.ErrnoError(33)},getStreamChecked(a){var o=b.getStream(a);if(!o)throw new b.ErrnoError(8);return o},getStream:a=>b.streams[a],createStream(a,o=-1){return C(o>=-1),a=Object.assign(new b.FSStream,a),o==-1&&(o=b.nextfd()),a.fd=o,b.streams[o]=a,a},closeStream(a){b.streams[a]=null},dupStream(a,o=-1){var u=b.createStream(a,o);return u.stream_ops?.dup?.(u),u},doSetAttr(a,o,u){var p=a?.stream_ops.setattr,_=p?a:o;p??=o.node_ops.setattr,b.checkOpExists(p,63),p(_,u)},chrdev_stream_ops:{open(a){var o=b.getDevice(a.node.rdev);a.stream_ops=o.stream_ops,a.stream_ops.open?.(a)},llseek(){throw new b.ErrnoError(70)}},major:a=>a>>8,minor:a=>a&255,makedev:(a,o)=>a<<8|o,registerDevice(a,o){b.devices[a]={stream_ops:o}},getDevice:a=>b.devices[a],getMounts(a){for(var o=[],u=[a];u.length;){var p=u.pop();o.push(p),u.push(...p.mounts)}return o},syncfs(a,o){typeof a=="function"&&(o=a,a=!1),b.syncFSRequests++,b.syncFSRequests>1&&k(`warning: ${b.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=b.getMounts(b.root.mount),p=0;function _(w){return C(b.syncFSRequests>0),b.syncFSRequests--,o(w)}function y(w){if(w)return y.errored?void 0:(y.errored=!0,_(w));++p>=u.length&&_(null)}u.forEach(w=>{if(!w.type.syncfs)return y(null);w.type.syncfs(w,a,y)})},mount(a,o,u){if(typeof a=="string")throw a;var p=u==="/",_=!u,y;if(p&&b.root)throw new b.ErrnoError(10);if(!p&&!_){var w=b.lookupPath(u,{follow_mount:!1});if(u=w.path,y=w.node,b.isMountpoint(y))throw new b.ErrnoError(10);if(!b.isDir(y.mode))throw new b.ErrnoError(54)}var A={type:a,opts:o,mountpoint:u,mounts:[]},U=a.mount(A);return U.mount=A,A.root=U,p?b.root=U:y&&(y.mounted=A,y.mount&&y.mount.mounts.push(A)),U},unmount(a){var o=b.lookupPath(a,{follow_mount:!1});if(!b.isMountpoint(o.node))throw new b.ErrnoError(28);var u=o.node,p=u.mounted,_=b.getMounts(p);Object.keys(b.nameTable).forEach(w=>{for(var A=b.nameTable[w];A;){var U=A.name_next;_.includes(A.mount)&&b.destroyNode(A),A=U}}),u.mounted=null;var y=u.mount.mounts.indexOf(p);C(y!==-1),u.mount.mounts.splice(y,1)},lookup(a,o){return a.node_ops.lookup(a,o)},mknod(a,o,u){var p=b.lookupPath(a,{parent:!0}),_=p.node,y=At.basename(a);if(!y)throw new b.ErrnoError(28);if(y==="."||y==="..")throw new b.ErrnoError(20);var w=b.mayCreate(_,y);if(w)throw new b.ErrnoError(w);if(!_.node_ops.mknod)throw new b.ErrnoError(63);return _.node_ops.mknod(_,y,o,u)},statfs(a){return b.statfsNode(b.lookupPath(a,{follow:!0}).node)},statfsStream(a){return b.statfsNode(a.node)},statfsNode(a){var o={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:b.nextInode,ffree:b.nextInode-1,fsid:42,flags:2,namelen:255};return a.node_ops.statfs&&Object.assign(o,a.node_ops.statfs(a.mount.opts.root)),o},create(a,o=438){return o&=4095,o|=32768,b.mknod(a,o,0)},mkdir(a,o=511){return o&=1023,o|=16384,b.mknod(a,o,0)},mkdirTree(a,o){var u=a.split("/"),p="";for(var _ of u)if(_){(p||At.isAbs(a))&&(p+="/"),p+=_;try{b.mkdir(p,o)}catch(y){if(y.errno!=20)throw y}}},mkdev(a,o,u){return typeof u>"u"&&(u=o,o=438),o|=8192,b.mknod(a,o,u)},symlink(a,o){if(!_i.resolve(a))throw new b.ErrnoError(44);var u=b.lookupPath(o,{parent:!0}),p=u.node;if(!p)throw new b.ErrnoError(44);var _=At.basename(o),y=b.mayCreate(p,_);if(y)throw new b.ErrnoError(y);if(!p.node_ops.symlink)throw new b.ErrnoError(63);return p.node_ops.symlink(p,_,a)},rename(a,o){var u=At.dirname(a),p=At.dirname(o),_=At.basename(a),y=At.basename(o),w,A,U;if(w=b.lookupPath(a,{parent:!0}),A=w.node,w=b.lookupPath(o,{parent:!0}),U=w.node,!A||!U)throw new b.ErrnoError(44);if(A.mount!==U.mount)throw new b.ErrnoError(75);var Y=b.lookupNode(A,_),ee=_i.relative(a,p);if(ee.charAt(0)!==".")throw new b.ErrnoError(28);if(ee=_i.relative(o,u),ee.charAt(0)!==".")throw new b.ErrnoError(55);var ue;try{ue=b.lookupNode(U,y)}catch{}if(Y!==ue){var ge=b.isDir(Y.mode),fe=b.mayDelete(A,_,ge);if(fe)throw new b.ErrnoError(fe);if(fe=ue?b.mayDelete(U,y,ge):b.mayCreate(U,y),fe)throw new b.ErrnoError(fe);if(!A.node_ops.rename)throw new b.ErrnoError(63);if(b.isMountpoint(Y)||ue&&b.isMountpoint(ue))throw new b.ErrnoError(10);if(U!==A&&(fe=b.nodePermissions(A,"w"),fe))throw new b.ErrnoError(fe);b.hashRemoveNode(Y);try{A.node_ops.rename(Y,U,y),Y.parent=U}catch(ye){throw ye}finally{b.hashAddNode(Y)}}},rmdir(a){var o=b.lookupPath(a,{parent:!0}),u=o.node,p=At.basename(a),_=b.lookupNode(u,p),y=b.mayDelete(u,p,!0);if(y)throw new b.ErrnoError(y);if(!u.node_ops.rmdir)throw new b.ErrnoError(63);if(b.isMountpoint(_))throw new b.ErrnoError(10);u.node_ops.rmdir(u,p),b.destroyNode(_)},readdir(a){var o=b.lookupPath(a,{follow:!0}),u=o.node,p=b.checkOpExists(u.node_ops.readdir,54);return p(u)},unlink(a){var o=b.lookupPath(a,{parent:!0}),u=o.node;if(!u)throw new b.ErrnoError(44);var p=At.basename(a),_=b.lookupNode(u,p),y=b.mayDelete(u,p,!1);if(y)throw new b.ErrnoError(y);if(!u.node_ops.unlink)throw new b.ErrnoError(63);if(b.isMountpoint(_))throw new b.ErrnoError(10);u.node_ops.unlink(u,p),b.destroyNode(_)},readlink(a){var o=b.lookupPath(a),u=o.node;if(!u)throw new b.ErrnoError(44);if(!u.node_ops.readlink)throw new b.ErrnoError(28);return u.node_ops.readlink(u)},stat(a,o){var u=b.lookupPath(a,{follow:!o}),p=u.node,_=b.checkOpExists(p.node_ops.getattr,63);return _(p)},fstat(a){var o=b.getStreamChecked(a),u=o.node,p=o.stream_ops.getattr,_=p?o:u;return p??=u.node_ops.getattr,b.checkOpExists(p,63),p(_)},lstat(a){return b.stat(a,!0)},doChmod(a,o,u,p){b.doSetAttr(a,o,{mode:u&4095|o.mode&-4096,ctime:Date.now(),dontFollow:p})},chmod(a,o,u){var p;if(typeof a=="string"){var _=b.lookupPath(a,{follow:!u});p=_.node}else p=a;b.doChmod(null,p,o,u)},lchmod(a,o){b.chmod(a,o,!0)},fchmod(a,o){var u=b.getStreamChecked(a);b.doChmod(u,u.node,o,!1)},doChown(a,o,u){b.doSetAttr(a,o,{timestamp:Date.now(),dontFollow:u})},chown(a,o,u,p){var _;if(typeof a=="string"){var y=b.lookupPath(a,{follow:!p});_=y.node}else _=a;b.doChown(null,_,p)},lchown(a,o,u){b.chown(a,o,u,!0)},fchown(a,o,u){var p=b.getStreamChecked(a);b.doChown(p,p.node,!1)},doTruncate(a,o,u){if(b.isDir(o.mode))throw new b.ErrnoError(31);if(!b.isFile(o.mode))throw new b.ErrnoError(28);var p=b.nodePermissions(o,"w");if(p)throw new b.ErrnoError(p);b.doSetAttr(a,o,{size:u,timestamp:Date.now()})},truncate(a,o){if(o<0)throw new b.ErrnoError(28);var u;if(typeof a=="string"){var p=b.lookupPath(a,{follow:!0});u=p.node}else u=a;b.doTruncate(null,u,o)},ftruncate(a,o){var u=b.getStreamChecked(a);if(o<0||(u.flags&2097155)===0)throw new b.ErrnoError(28);b.doTruncate(u,u.node,o)},utime(a,o,u){var p=b.lookupPath(a,{follow:!0}),_=p.node,y=b.checkOpExists(_.node_ops.setattr,63);y(_,{atime:o,mtime:u})},open(a,o,u=438){if(a==="")throw new b.ErrnoError(44);o=typeof o=="string"?We(o):o,o&64?u=u&4095|32768:u=0;var p,_;if(typeof a=="object")p=a;else{_=a.endsWith("/");var y=b.lookupPath(a,{follow:!(o&131072),noent_okay:!0});p=y.node,a=y.path}var w=!1;if(o&64)if(p){if(o&128)throw new b.ErrnoError(20)}else{if(_)throw new b.ErrnoError(31);p=b.mknod(a,u|511,0),w=!0}if(!p)throw new b.ErrnoError(44);if(b.isChrdev(p.mode)&&(o&=-513),o&65536&&!b.isDir(p.mode))throw new b.ErrnoError(54);if(!w){var A=b.mayOpen(p,o);if(A)throw new b.ErrnoError(A)}o&512&&!w&&b.truncate(p,0),o&=-131713;var U=b.createStream({node:p,path:b.getPath(p),flags:o,seekable:!0,position:0,stream_ops:p.stream_ops,ungotten:[],error:!1});return U.stream_ops.open&&U.stream_ops.open(U),w&&b.chmod(p,u&511),t.logReadFiles&&!(o&1)&&(a in b.readFiles||(b.readFiles[a]=1)),U},close(a){if(b.isClosed(a))throw new b.ErrnoError(8);a.getdents&&(a.getdents=null);try{a.stream_ops.close&&a.stream_ops.close(a)}catch(o){throw o}finally{b.closeStream(a.fd)}a.fd=null},isClosed(a){return a.fd===null},llseek(a,o,u){if(b.isClosed(a))throw new b.ErrnoError(8);if(!a.seekable||!a.stream_ops.llseek)throw new b.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new b.ErrnoError(28);return a.position=a.stream_ops.llseek(a,o,u),a.ungotten=[],a.position},read(a,o,u,p,_){if(C(u>=0),p<0||_<0)throw new b.ErrnoError(28);if(b.isClosed(a))throw new b.ErrnoError(8);if((a.flags&2097155)===1)throw new b.ErrnoError(8);if(b.isDir(a.node.mode))throw new b.ErrnoError(31);if(!a.stream_ops.read)throw new b.ErrnoError(28);var y=typeof _<"u";if(!y)_=a.position;else if(!a.seekable)throw new b.ErrnoError(70);var w=a.stream_ops.read(a,o,u,p,_);return y||(a.position+=w),w},write(a,o,u,p,_,y){if(C(u>=0),p<0||_<0)throw new b.ErrnoError(28);if(b.isClosed(a))throw new b.ErrnoError(8);if((a.flags&2097155)===0)throw new b.ErrnoError(8);if(b.isDir(a.node.mode))throw new b.ErrnoError(31);if(!a.stream_ops.write)throw new b.ErrnoError(28);a.seekable&&a.flags&1024&&b.llseek(a,0,2);var w=typeof _<"u";if(!w)_=a.position;else if(!a.seekable)throw new b.ErrnoError(70);var A=a.stream_ops.write(a,o,u,p,_,y);return w||(a.position+=A),A},mmap(a,o,u,p,_){if((p&2)!==0&&(_&2)===0&&(a.flags&2097155)!==2)throw new b.ErrnoError(2);if((a.flags&2097155)===1)throw new b.ErrnoError(2);if(!a.stream_ops.mmap)throw new b.ErrnoError(43);if(!o)throw new b.ErrnoError(28);return a.stream_ops.mmap(a,o,u,p,_)},msync(a,o,u,p,_){return C(u>=0),a.stream_ops.msync?a.stream_ops.msync(a,o,u,p,_):0},ioctl(a,o,u){if(!a.stream_ops.ioctl)throw new b.ErrnoError(59);return a.stream_ops.ioctl(a,o,u)},readFile(a,o={}){if(o.flags=o.flags||0,o.encoding=o.encoding||"binary",o.encoding!=="utf8"&&o.encoding!=="binary")throw new Error(`Invalid encoding type "${o.encoding}"`);var u=b.open(a,o.flags),p=b.stat(a),_=p.size,y=new Uint8Array(_);return b.read(u,y,0,_,0),o.encoding==="utf8"&&(y=ve(y)),b.close(u),y},writeFile(a,o,u={}){u.flags=u.flags||577;var p=b.open(a,u.flags,u.mode);if(typeof o=="string"&&(o=new Uint8Array(Zr(o))),ArrayBuffer.isView(o))b.write(p,o,0,o.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");b.close(p)},cwd:()=>b.currentPath,chdir(a){var o=b.lookupPath(a,{follow:!0});if(o.node===null)throw new b.ErrnoError(44);if(!b.isDir(o.node.mode))throw new b.ErrnoError(54);var u=b.nodePermissions(o.node,"x");if(u)throw new b.ErrnoError(u);b.currentPath=o.path},createDefaultDirectories(){b.mkdir("/tmp"),b.mkdir("/home"),b.mkdir("/home/web_user")},createDefaultDevices(){b.mkdir("/dev"),b.registerDevice(b.makedev(1,3),{read:()=>0,write:(p,_,y,w,A)=>w,llseek:()=>0}),b.mkdev("/dev/null",b.makedev(1,3)),R.register(b.makedev(5,0),R.default_tty_ops),R.register(b.makedev(6,0),R.default_tty1_ops),b.mkdev("/dev/tty",b.makedev(5,0)),b.mkdev("/dev/tty1",b.makedev(6,0));var a=new Uint8Array(1024),o=0,u=()=>(o===0&&(Kr(a),o=a.byteLength),a[--o]);b.createDevice("/dev","random",u),b.createDevice("/dev","urandom",u),b.mkdir("/dev/shm"),b.mkdir("/dev/shm/tmp")},createSpecialDirectories(){b.mkdir("/proc");var a=b.mkdir("/proc/self");b.mkdir("/proc/self/fd"),b.mount({mount(){var o=b.createNode(a,"fd",16895,73);return o.stream_ops={llseek:q.stream_ops.llseek},o.node_ops={lookup(u,p){var _=+p,y=b.getStreamChecked(_),w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>y.path},id:_+1};return w.parent=w,w},readdir(){return Array.from(b.streams.entries()).filter(([u,p])=>p).map(([u,p])=>u.toString())}},o}},{},"/proc/self/fd")},createStandardStreams(a,o,u){a?b.createDevice("/dev","stdin",a):b.symlink("/dev/tty","/dev/stdin"),o?b.createDevice("/dev","stdout",null,o):b.symlink("/dev/tty","/dev/stdout"),u?b.createDevice("/dev","stderr",null,u):b.symlink("/dev/tty1","/dev/stderr");var p=b.open("/dev/stdin",0),_=b.open("/dev/stdout",1),y=b.open("/dev/stderr",1);C(p.fd===0,`invalid handle for stdin (${p.fd})`),C(_.fd===1,`invalid handle for stdout (${_.fd})`),C(y.fd===2,`invalid handle for stderr (${y.fd})`)},staticInit(){b.nameTable=new Array(4096),b.mount(q,{},"/"),b.createDefaultDirectories(),b.createDefaultDevices(),b.createSpecialDirectories(),b.filesystems={MEMFS:q}},init(a,o,u){C(!b.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),b.initialized=!0,a??=t.stdin,o??=t.stdout,u??=t.stderr,b.createStandardStreams(a,o,u)},quit(){b.initialized=!1,fo(0);for(var a of b.streams)a&&b.close(a)},findObject(a,o){var u=b.analyzePath(a,o);return u.exists?u.object:null},analyzePath(a,o){try{var u=b.lookupPath(a,{follow:!o});a=u.path}catch{}var p={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=b.lookupPath(a,{parent:!0});p.parentExists=!0,p.parentPath=u.path,p.parentObject=u.node,p.name=At.basename(a),u=b.lookupPath(a,{follow:!o}),p.exists=!0,p.path=u.path,p.object=u.node,p.name=u.node.name,p.isRoot=u.path==="/"}catch(_){p.error=_.errno}return p},createPath(a,o,u,p){a=typeof a=="string"?a:b.getPath(a);for(var _=o.split("/").reverse();_.length;){var y=_.pop();if(y){var w=At.join2(a,y);try{b.mkdir(w)}catch(A){if(A.errno!=20)throw A}a=w}}return w},createFile(a,o,u,p,_){var y=At.join2(typeof a=="string"?a:b.getPath(a),o),w=rt(p,_);return b.create(y,w)},createDataFile(a,o,u,p,_,y){var w=o;a&&(a=typeof a=="string"?a:b.getPath(a),w=o?At.join2(a,o):a);var A=rt(p,_),U=b.create(w,A);if(u){if(typeof u=="string"){for(var Y=new Array(u.length),ee=0,ue=u.length;ee<ue;++ee)Y[ee]=u.charCodeAt(ee);u=Y}b.chmod(U,A|146);var ge=b.open(U,577);b.write(ge,u,0,u.length,0,y),b.close(ge),b.chmod(U,A)}},createDevice(a,o,u,p){var _=At.join2(typeof a=="string"?a:b.getPath(a),o),y=rt(!!u,!!p);b.createDevice.major??=64;var w=b.makedev(b.createDevice.major++,0);return b.registerDevice(w,{open(A){A.seekable=!1},close(A){p?.buffer?.length&&p(10)},read(A,U,Y,ee,ue){for(var ge=0,fe=0;fe<ee;fe++){var ye;try{ye=u()}catch{throw new b.ErrnoError(29)}if(ye===void 0&&ge===0)throw new b.ErrnoError(6);if(ye==null)break;ge++,U[Y+fe]=ye}return ge&&(A.node.atime=Date.now()),ge},write(A,U,Y,ee,ue){for(var ge=0;ge<ee;ge++)try{p(U[Y+ge])}catch{throw new b.ErrnoError(29)}return ee&&(A.node.mtime=A.node.ctime=Date.now()),ge}}),b.mkdev(_,y,w)},forceLoadFile(a){if(a.isDevice||a.isFolder||a.link||a.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{a.contents=M(a.url),a.usedBytes=a.contents.length}catch{throw new b.ErrnoError(29)}},createLazyFile(a,o,u,p,_){class y{lengthKnown=!1;chunks=[];get(fe){if(!(fe>this.length-1||fe<0)){var ye=fe%this.chunkSize,je=fe/this.chunkSize|0;return this.getter(je)[ye]}}setDataGetter(fe){this.getter=fe}cacheLength(){var fe=new XMLHttpRequest;if(fe.open("HEAD",u,!1),fe.send(null),!(fe.status>=200&&fe.status<300||fe.status===304))throw new Error("Couldn't load "+u+". Status: "+fe.status);var ye=Number(fe.getResponseHeader("Content-length")),je,ft=(je=fe.getResponseHeader("Accept-Ranges"))&&je==="bytes",ut=(je=fe.getResponseHeader("Content-Encoding"))&&je==="gzip",Vt=1024*1024;ft||(Vt=ye);var Tt=(Jt,_n)=>{if(Jt>_n)throw new Error("invalid range ("+Jt+", "+_n+") or no bytes requested!");if(_n>ye-1)throw new Error("only "+ye+" bytes available! programmer error!");var Ut=new XMLHttpRequest;if(Ut.open("GET",u,!1),ye!==Vt&&Ut.setRequestHeader("Range","bytes="+Jt+"-"+_n),Ut.responseType="arraybuffer",Ut.overrideMimeType&&Ut.overrideMimeType("text/plain; charset=x-user-defined"),Ut.send(null),!(Ut.status>=200&&Ut.status<300||Ut.status===304))throw new Error("Couldn't load "+u+". Status: "+Ut.status);return Ut.response!==void 0?new Uint8Array(Ut.response||[]):Zr(Ut.responseText||"")},hn=this;hn.setDataGetter(Jt=>{var _n=Jt*Vt,Ut=(Jt+1)*Vt-1;if(Ut=Math.min(Ut,ye-1),typeof hn.chunks[Jt]>"u"&&(hn.chunks[Jt]=Tt(_n,Ut)),typeof hn.chunks[Jt]>"u")throw new Error("doXHR failed!");return hn.chunks[Jt]}),(ut||!ye)&&(Vt=ye=1,ye=this.getter(0).length,Vt=ye,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ye,this._chunkSize=Vt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!i)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var w=new y,A={isDevice:!1,contents:w}}else var A={isDevice:!1,url:u};var U=b.createFile(a,o,A,p,_);A.contents?U.contents=A.contents:A.url&&(U.contents=null,U.url=A.url),Object.defineProperties(U,{usedBytes:{get:function(){return this.contents.length}}});var Y={},ee=Object.keys(U.stream_ops);ee.forEach(ge=>{var fe=U.stream_ops[ge];Y[ge]=(...ye)=>(b.forceLoadFile(U),fe(...ye))});function ue(ge,fe,ye,je,ft){var ut=ge.node.contents;if(ft>=ut.length)return 0;var Vt=Math.min(ut.length-ft,je);if(C(Vt>=0),ut.slice)for(var Tt=0;Tt<Vt;Tt++)fe[ye+Tt]=ut[ft+Tt];else for(var Tt=0;Tt<Vt;Tt++)fe[ye+Tt]=ut.get(ft+Tt);return Vt}return Y.read=(ge,fe,ye,je,ft)=>(b.forceLoadFile(U),ue(ge,fe,ye,je,ft)),Y.mmap=(ge,fe,ye,je,ft)=>{b.forceLoadFile(U);var ut=G();if(!ut)throw new b.ErrnoError(48);return ue(ge,Fe,ut,fe,ye),{ptr:ut,allocated:!0}},U.stream_ops=Y,U},absolutePath(){Qe("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){Qe("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){Qe("FS.createLink has been removed; use FS.symlink instead")},joinPath(){Qe("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){Qe("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){Qe("FS.standardizePath has been removed; use PATH.normalize instead")}},it={DEFAULT_POLLMASK:5,calculateAt(a,o,u){if(At.isAbs(o))return o;var p;if(a===-100)p=b.cwd();else{var _=it.getStreamFromFD(a);p=_.path}if(o.length==0){if(!u)throw new b.ErrnoError(44);return p}return p+"/"+o},writeStat(a,o){Z[a>>2]=o.dev,Z[a+4>>2]=o.mode,xe[a+8>>2]=o.nlink,Z[a+12>>2]=o.uid,Z[a+16>>2]=o.gid,Z[a+20>>2]=o.rdev,Je[a+24>>3]=BigInt(o.size),Z[a+32>>2]=4096,Z[a+36>>2]=o.blocks;var u=o.atime.getTime(),p=o.mtime.getTime(),_=o.ctime.getTime();return Je[a+40>>3]=BigInt(Math.floor(u/1e3)),xe[a+48>>2]=u%1e3*1e3*1e3,Je[a+56>>3]=BigInt(Math.floor(p/1e3)),xe[a+64>>2]=p%1e3*1e3*1e3,Je[a+72>>3]=BigInt(Math.floor(_/1e3)),xe[a+80>>2]=_%1e3*1e3*1e3,Je[a+88>>3]=BigInt(o.ino),0},writeStatFs(a,o){Z[a+4>>2]=o.bsize,Z[a+40>>2]=o.bsize,Z[a+8>>2]=o.blocks,Z[a+12>>2]=o.bfree,Z[a+16>>2]=o.bavail,Z[a+20>>2]=o.files,Z[a+24>>2]=o.ffree,Z[a+28>>2]=o.fsid,Z[a+44>>2]=o.flags,Z[a+36>>2]=o.namelen},doMsync(a,o,u,p,_){if(!b.isFile(o.node.mode))throw new b.ErrnoError(43);if(p&2)return 0;var y=Ke.slice(a,a+u);b.msync(o,y,_,u,p)},getStreamFromFD(a){var o=b.getStreamChecked(a);return o},varargs:void 0,getStr(a){var o=Be(a);return o}};function kt(a,o,u){try{var p=it.getStreamFromFD(a);if(C(!u),p.fd===o)return-28;if(o<0||o>=b.MAX_OPEN_FDS)return-8;var _=b.getStream(o);return _&&b.close(_),b.dupStream(p,o).fd}catch(y){if(typeof b>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}var wt=()=>{C(it.varargs!=null);var a=Z[+it.varargs>>2];return it.varargs+=4,a},Wt=wt;function Oe(a,o,u){it.varargs=u;try{var p=it.getStreamFromFD(a);switch(o){case 0:{var _=wt();if(_<0)return-28;for(;b.streams[_];)_++;var y;return y=b.dupStream(p,_),y.fd}case 1:case 2:return 0;case 3:return p.flags;case 4:{var _=wt();return p.flags|=_,0}case 12:{var _=Wt(),w=0;return at[_+w>>1]=2,0}case 13:case 14:return 0}return-28}catch(A){if(typeof b>"u"||A.name!=="ErrnoError")throw A;return-A.errno}}function ln(a,o){try{return it.writeStat(o,b.fstat(a))}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Et(a,o,u){it.varargs=u;try{var p=it.getStreamFromFD(a);switch(o){case 21509:return p.tty?0:-59;case 21505:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tcgets){var _=p.tty.ops.ioctl_tcgets(p),y=Wt();Z[y>>2]=_.c_iflag||0,Z[y+4>>2]=_.c_oflag||0,Z[y+8>>2]=_.c_cflag||0,Z[y+12>>2]=_.c_lflag||0;for(var w=0;w<32;w++)Fe[y+w+17]=_.c_cc[w]||0;return 0}return 0}case 21510:case 21511:case 21512:return p.tty?0:-59;case 21506:case 21507:case 21508:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tcsets){for(var y=Wt(),A=Z[y>>2],U=Z[y+4>>2],Y=Z[y+8>>2],ee=Z[y+12>>2],ue=[],w=0;w<32;w++)ue.push(Fe[y+w+17]);return p.tty.ops.ioctl_tcsets(p.tty,o,{c_iflag:A,c_oflag:U,c_cflag:Y,c_lflag:ee,c_cc:ue})}return 0}case 21519:{if(!p.tty)return-59;var y=Wt();return Z[y>>2]=0,0}case 21520:return p.tty?-28:-59;case 21531:{var y=Wt();return b.ioctl(p,o,y)}case 21523:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tiocgwinsz){var ge=p.tty.ops.ioctl_tiocgwinsz(p.tty),y=Wt();at[y>>1]=ge[0],at[y+2>>1]=ge[1]}return 0}case 21524:return p.tty?0:-59;case 21515:return p.tty?0:-59;default:return-28}}catch(fe){if(typeof b>"u"||fe.name!=="ErrnoError")throw fe;return-fe.errno}}function Mn(a,o){try{return a=it.getStr(a),it.writeStat(o,b.lstat(a))}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Nn(a,o,u,p){try{o=it.getStr(o);var _=p&256,y=p&4096;return p=p&-6401,C(!p,`unknown flags in __syscall_newfstatat: ${p}`),o=it.calculateAt(a,o,y),it.writeStat(u,_?b.lstat(o):b.stat(o))}catch(w){if(typeof b>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function ti(a,o,u,p){it.varargs=p;try{o=it.getStr(o),o=it.calculateAt(a,o);var _=p?wt():0;return b.open(o,u,_).fd}catch(y){if(typeof b>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function Ii(a,o){try{return a=it.getStr(a),it.writeStat(o,b.stat(a))}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}var Ct=()=>Qe("native code called abort()"),ct=a=>{for(var o="";;){var u=Ke[a++];if(!u)return o;o+=String.fromCharCode(u)}},gn={},bt={},An={},Fn=class extends Error{constructor(o){super(o),this.name="BindingError"}},_t=a=>{throw new Fn(a)};function Gd(a,o,u={}){var p=o.name;if(a||_t(`type "${p}" must have a positive integer typeid pointer`),bt.hasOwnProperty(a)){if(u.ignoreDuplicateRegistrations)return;_t(`Cannot register type '${p}' twice`)}if(bt[a]=o,delete An[a],gn.hasOwnProperty(a)){var _=gn[a];delete gn[a],_.forEach(y=>y())}}function Un(a,o,u={}){if(o.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return Gd(a,o,u)}var Ic=(a,o,u)=>{switch(o){case 1:return u?p=>Fe[p]:p=>Ke[p];case 2:return u?p=>at[p>>1]:p=>le[p>>1];case 4:return u?p=>Z[p>>2]:p=>xe[p>>2];case 8:return u?p=>Je[p>>3]:p=>Xt[p>>3];default:throw new TypeError(`invalid integer width (${o}): ${a}`)}},$i=a=>{if(a===null)return"null";var o=typeof a;return o==="object"||o==="array"||o==="function"?a.toString():""+a},Nc=(a,o,u,p)=>{if(o<u||o>p)throw new TypeError(`Passing a number "${$i(o)}" from JS side to C/C++ side to an argument of type "${a}", which is outside the valid range [${u}, ${p}]!`)},Wd=(a,o,u,p,_)=>{o=ct(o);const y=p===0n;let w=A=>A;if(y){const A=u*8;w=U=>BigInt.asUintN(A,U),_=w(_)}Un(a,{name:o,fromWireType:w,toWireType:(A,U)=>{if(typeof U=="number")U=BigInt(U);else if(typeof U!="bigint")throw new TypeError(`Cannot convert "${$i(U)}" to ${this.name}`);return Nc(o,U,p,_),U},argPackAdvance:ni,readValueFromPointer:Ic(o,u,!y),destructorFunction:null})},ni=8,Xd=(a,o,u,p)=>{o=ct(o),Un(a,{name:o,fromWireType:function(_){return!!_},toWireType:function(_,y){return y?u:p},argPackAdvance:ni,readValueFromPointer:function(_){return this.fromWireType(Ke[_])},destructorFunction:null})},$d=a=>({count:a.count,deleteScheduled:a.deleteScheduled,preservePointerOnDelete:a.preservePointerOnDelete,ptr:a.ptr,ptrType:a.ptrType,smartPtr:a.smartPtr,smartPtrType:a.smartPtrType}),no=a=>{function o(u){return u.$$.ptrType.registeredClass.name}_t(o(a)+" instance already deleted")},io=!1,Fc=a=>{},qd=a=>{a.smartPtr?a.smartPtrType.rawDestructor(a.smartPtr):a.ptrType.registeredClass.rawDestructor(a.ptr)},Uc=a=>{a.count.value-=1;var o=a.count.value===0;o&&qd(a)},Oc=(a,o,u)=>{if(o===u)return a;if(u.baseClass===void 0)return null;var p=Oc(a,o,u.baseClass);return p===null?null:u.downcast(p)},kc={},Yd={},Kd=(a,o)=>{for(o===void 0&&_t("ptr should not be undefined");a.baseClass;)o=a.upcast(o),a=a.baseClass;return o},jd=(a,o)=>(o=Kd(a,o),Yd[o]),Zd=class extends Error{constructor(o){super(o),this.name="InternalError"}},Hs=a=>{throw new Zd(a)},Vs=(a,o)=>{(!o.ptrType||!o.ptr)&&Hs("makeClassHandle requires ptr and ptrType");var u=!!o.smartPtrType,p=!!o.smartPtr;return u!==p&&Hs("Both smartPtrType and smartPtr must be specified"),o.count={value:1},Jr(Object.create(a,{$$:{value:o,writable:!0}}))};function Bc(a){var o=this.getPointee(a);if(!o)return this.destructor(a),null;var u=jd(this.registeredClass,o);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=o,u.$$.smartPtr=a,u.clone();var p=u.clone();return this.destructor(a),p}function _(){return this.isSmartPointer?Vs(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:o,smartPtrType:this,smartPtr:a}):Vs(this.registeredClass.instancePrototype,{ptrType:this,ptr:a})}var y=this.registeredClass.getActualType(o),w=kc[y];if(!w)return _.call(this);var A;this.isConst?A=w.constPointerType:A=w.pointerType;var U=Oc(o,this.registeredClass,A.registeredClass);return U===null?_.call(this):this.isSmartPointer?Vs(A.registeredClass.instancePrototype,{ptrType:A,ptr:U,smartPtrType:this,smartPtr:a}):Vs(A.registeredClass.instancePrototype,{ptrType:A,ptr:U})}var Jr=a=>typeof FinalizationRegistry>"u"?(Jr=o=>o,a):(io=new FinalizationRegistry(o=>{console.warn(o.leakWarning),Uc(o.$$)}),Jr=o=>{var u=o.$$,p=!!u.smartPtr;if(p){var _={$$:u},y=u.ptrType.registeredClass,w=new Error(`Embind found a leaked C++ instance ${y.name} <${W(u.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(w,Bc),_.leakWarning=w.stack.replace(/^Error: /,""),io.register(o,_,o)}return o},Fc=o=>io.unregister(o),Jr(a)),Jd=()=>{let a=Gs.prototype;Object.assign(a,{isAliasOf(u){if(!(this instanceof Gs)||!(u instanceof Gs))return!1;var p=this.$$.ptrType.registeredClass,_=this.$$.ptr;u.$$=u.$$;for(var y=u.$$.ptrType.registeredClass,w=u.$$.ptr;p.baseClass;)_=p.upcast(_),p=p.baseClass;for(;y.baseClass;)w=y.upcast(w),y=y.baseClass;return p===y&&_===w},clone(){if(this.$$.ptr||no(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=Jr(Object.create(Object.getPrototypeOf(this),{$$:{value:$d(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||no(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&_t("Object already scheduled for deletion"),Fc(this),Uc(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||no(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&_t("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const o=Symbol.dispose;o&&(a[o]=a.delete)};function Gs(){}var Ws=(a,o)=>Object.defineProperty(o,"name",{value:a}),ro=(a,o,u)=>{if(a[o].overloadTable===void 0){var p=a[o];a[o]=function(..._){return a[o].overloadTable.hasOwnProperty(_.length)||_t(`Function '${u}' called with an invalid number of arguments (${_.length}) - expects one of (${a[o].overloadTable})!`),a[o].overloadTable[_.length].apply(this,_)},a[o].overloadTable=[],a[o].overloadTable[p.argCount]=p}},so=(a,o,u)=>{t.hasOwnProperty(a)?((u===void 0||t[a].overloadTable!==void 0&&t[a].overloadTable[u]!==void 0)&&_t(`Cannot register public name '${a}' twice`),ro(t,a,a),t[a].overloadTable.hasOwnProperty(u)&&_t(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),t[a].overloadTable[u]=o):(t[a]=o,t[a].argCount=u)},Qd=48,ef=57,tf=a=>{C(typeof a=="string"),a=a.replace(/[^a-zA-Z0-9_]/g,"$");var o=a.charCodeAt(0);return o>=Qd&&o<=ef?`_${a}`:a};function nf(a,o,u,p,_,y,w,A){this.name=a,this.constructor=o,this.instancePrototype=u,this.rawDestructor=p,this.baseClass=_,this.getActualType=y,this.upcast=w,this.downcast=A,this.pureVirtualFunctions=[]}var Xs=(a,o,u)=>{for(;o!==u;)o.upcast||_t(`Expected null or instance of ${u.name}, got an instance of ${o.name}`),a=o.upcast(a),o=o.baseClass;return a};function rf(a,o){if(o===null)return this.isReference&&_t(`null is not a valid ${this.name}`),0;o.$$||_t(`Cannot pass "${$i(o)}" as a ${this.name}`),o.$$.ptr||_t(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=o.$$.ptrType.registeredClass,p=Xs(o.$$.ptr,u,this.registeredClass);return p}function sf(a,o){var u;if(o===null)return this.isReference&&_t(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),a!==null&&a.push(this.rawDestructor,u),u):0;(!o||!o.$$)&&_t(`Cannot pass "${$i(o)}" as a ${this.name}`),o.$$.ptr||_t(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&o.$$.ptrType.isConst&&_t(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);var p=o.$$.ptrType.registeredClass;if(u=Xs(o.$$.ptr,p,this.registeredClass),this.isSmartPointer)switch(o.$$.smartPtr===void 0&&_t("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:o.$$.smartPtrType===this?u=o.$$.smartPtr:_t(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=o.$$.smartPtr;break;case 2:if(o.$$.smartPtrType===this)u=o.$$.smartPtr;else{var _=o.clone();u=this.rawShare(u,jt.toHandle(()=>_.delete())),a!==null&&a.push(this.rawDestructor,u)}break;default:_t("Unsupporting sharing policy")}return u}function af(a,o){if(o===null)return this.isReference&&_t(`null is not a valid ${this.name}`),0;o.$$||_t(`Cannot pass "${$i(o)}" as a ${this.name}`),o.$$.ptr||_t(`Cannot pass deleted object as a pointer of type ${this.name}`),o.$$.ptrType.isConst&&_t(`Cannot convert argument of type ${o.$$.ptrType.name} to parameter type ${this.name}`);var u=o.$$.ptrType.registeredClass,p=Xs(o.$$.ptr,u,this.registeredClass);return p}function $s(a){return this.fromWireType(xe[a>>2])}var of=()=>{Object.assign(qs.prototype,{getPointee(a){return this.rawGetPointee&&(a=this.rawGetPointee(a)),a},destructor(a){this.rawDestructor?.(a)},argPackAdvance:ni,readValueFromPointer:$s,fromWireType:Bc})};function qs(a,o,u,p,_,y,w,A,U,Y,ee){this.name=a,this.registeredClass=o,this.isReference=u,this.isConst=p,this.isSmartPointer=_,this.pointeeType=y,this.sharingPolicy=w,this.rawGetPointee=A,this.rawConstructor=U,this.rawShare=Y,this.rawDestructor=ee,!_&&o.baseClass===void 0?p?(this.toWireType=rf,this.destructorFunction=null):(this.toWireType=af,this.destructorFunction=null):this.toWireType=sf}var zc=(a,o,u)=>{t.hasOwnProperty(a)||Hs("Replacing nonexistent public symbol"),t[a].overloadTable!==void 0&&u!==void 0?t[a].overloadTable[u]=o:(t[a]=o,t[a].argCount=u)},Hc=[],Ys,Me=a=>{var o=Hc[a];return o||(Hc[a]=o=Ys.get(a)),C(Ys.get(a)==o,"JavaScript-side Wasm function table mirror is out of date!"),o},ii=(a,o,u=!1)=>{C(!u,"Async bindings are only supported with JSPI."),a=ct(a);function p(){var y=Me(o);return y}var _=p();return typeof _!="function"&&_t(`unknown function pointer with signature ${a}: ${o}`),_};class lf extends Error{}var Vc=a=>{var o=ou(a),u=ct(o);return si(o),u},qi=(a,o)=>{var u=[],p={};function _(y){if(!p[y]&&!bt[y]){if(An[y]){An[y].forEach(_);return}u.push(y),p[y]=!0}}throw o.forEach(_),new lf(`${a}: `+u.map(Vc).join([", "]))},Gn=(a,o,u)=>{a.forEach(A=>An[A]=o);function p(A){var U=u(A);U.length!==a.length&&Hs("Mismatched type converter count");for(var Y=0;Y<a.length;++Y)Un(a[Y],U[Y])}var _=new Array(o.length),y=[],w=0;o.forEach((A,U)=>{bt.hasOwnProperty(A)?_[U]=bt[A]:(y.push(A),gn.hasOwnProperty(A)||(gn[A]=[]),gn[A].push(()=>{_[U]=bt[A],++w,w===y.length&&p(_)}))}),y.length===0&&p(_)},cf=(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge)=>{ee=ct(ee),y=ii(_,y),A&&=ii(w,A),Y&&=ii(U,Y),ge=ii(ue,ge);var fe=tf(ee);so(fe,function(){qi(`Cannot construct ${ee} due to unbound types`,[p])}),Gn([a,o,u],p?[p]:[],ye=>{ye=ye[0];var je,ft;p?(je=ye.registeredClass,ft=je.instancePrototype):ft=Gs.prototype;var ut=Ws(ee,function(...Ut){if(Object.getPrototypeOf(this)!==Vt)throw new Fn(`Use 'new' to construct ${ee}`);if(Tt.constructor_body===void 0)throw new Fn(`${ee} has no accessible constructor`);var ji=Tt.constructor_body[Ut.length];if(ji===void 0)throw new Fn(`Tried to invoke ctor of ${ee} with invalid number of parameters (${Ut.length}) - expected (${Object.keys(Tt.constructor_body).toString()}) parameters instead!`);return ji.apply(this,Ut)}),Vt=Object.create(ft,{constructor:{value:ut}});ut.prototype=Vt;var Tt=new nf(ee,ut,Vt,ge,je,y,A,Y);Tt.baseClass&&(Tt.baseClass.__derivedClasses??=[],Tt.baseClass.__derivedClasses.push(Tt));var hn=new qs(ee,Tt,!0,!1,!1),Jt=new qs(ee+"*",Tt,!1,!1,!1),_n=new qs(ee+" const*",Tt,!1,!0,!1);return kc[a]={pointerType:Jt,constPointerType:_n},zc(fe,ut),[hn,Jt,_n]})},ao=a=>{for(;a.length;){var o=a.pop(),u=a.pop();u(o)}};function Gc(a){for(var o=1;o<a.length;++o)if(a[o]!==null&&a[o].destructorFunction===void 0)return!0;return!1}function uf(a,o,u,p,_){if(a<o||a>u){var y=o==u?o:`${o} to ${u}`;_(`function ${p} called with ${a} arguments, expected ${y}`)}}function hf(a,o,u,p){var _=Gc(a),y=a.length-2,w=[],A=["fn"];o&&A.push("thisWired");for(var U=0;U<y;++U)w.push(`arg${U}`),A.push(`arg${U}Wired`);w=w.join(","),A=A.join(",");var Y=`return function (${w}) {
`;Y+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,_&&(Y+=`var destructors = [];
`);var ee=_?"destructors":"null",ue=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];o&&(Y+=`var thisWired = classParam['toWireType'](${ee}, this);
`);for(var U=0;U<y;++U)Y+=`var arg${U}Wired = argType${U}['toWireType'](${ee}, arg${U});
`,ue.push(`argType${U}`);if(Y+=(u||p?"var rv = ":"")+`invoker(${A});
`,_)Y+=`runDestructors(destructors);
`;else for(var U=o?1:2;U<a.length;++U){var ge=U===1?"thisWired":"arg"+(U-2)+"Wired";a[U].destructorFunction!==null&&(Y+=`${ge}_dtor(${ge});
`,ue.push(`${ge}_dtor`))}return u&&(Y+=`var ret = retType['fromWireType'](rv);
return ret;
`),Y+=`}
`,ue.push("checkArgCount","minArgs","maxArgs"),Y=`if (arguments.length !== ${ue.length}){ throw new Error(humanName + "Expected ${ue.length} closure arguments " + arguments.length + " given."); }
${Y}`,[ue,Y]}function df(a){for(var o=a.length-2,u=a.length-1;u>=2&&a[u].optional;--u)o--;return o}function Ks(a,o,u,p,_,y){var w=o.length;w<2&&_t("argTypes array size mismatch! Must at least get return value and 'this' types!"),C(!y,"Async bindings are only supported with JSPI.");for(var A=o[1]!==null&&u!==null,U=Gc(o),Y=o[0].name!=="void",ee=w-2,ue=df(o),ge=[a,_t,p,_,ao,o[0],o[1]],fe=0;fe<w-2;++fe)ge.push(o[fe+2]);if(!U)for(var fe=A?1:2;fe<o.length;++fe)o[fe].destructorFunction!==null&&ge.push(o[fe].destructorFunction);ge.push(uf,ue,ee);let[ye,je]=hf(o,A,Y,y);var ft=new Function(...ye,je)(...ge);return Ws(a,ft)}var js=(a,o)=>{for(var u=[],p=0;p<a;p++)u.push(xe[o+p*4>>2]);return u},oo=a=>{a=a.trim();const o=a.indexOf("(");return o===-1?a:(C(a.endsWith(")"),"Parentheses for argument names should match."),a.slice(0,o))},ff=(a,o,u,p,_,y,w,A,U)=>{var Y=js(u,p);o=ct(o),o=oo(o),y=ii(_,y,A),Gn([],[a],ee=>{ee=ee[0];var ue=`${ee.name}.${o}`;function ge(){qi(`Cannot call ${ue} due to unbound types`,Y)}o.startsWith("@@")&&(o=Symbol[o.substring(2)]);var fe=ee.registeredClass.constructor;return fe[o]===void 0?(ge.argCount=u-1,fe[o]=ge):(ro(fe,o,ue),fe[o].overloadTable[u-1]=ge),Gn([],Y,ye=>{var je=[ye[0],null].concat(ye.slice(1)),ft=Ks(ue,je,null,y,w,A);if(fe[o].overloadTable===void 0?(ft.argCount=u-1,fe[o]=ft):fe[o].overloadTable[u-1]=ft,ee.registeredClass.__derivedClasses)for(const ut of ee.registeredClass.__derivedClasses)ut.constructor.hasOwnProperty(o)||(ut.constructor[o]=ft);return[]}),[]})},pf=(a,o,u,p,_,y)=>{C(o>0);var w=js(o,u);_=ii(p,_),Gn([],[a],A=>{A=A[0];var U=`constructor ${A.name}`;if(A.registeredClass.constructor_body===void 0&&(A.registeredClass.constructor_body=[]),A.registeredClass.constructor_body[o-1]!==void 0)throw new Fn(`Cannot register multiple constructors with identical number of parameters (${o-1}) for class '${A.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return A.registeredClass.constructor_body[o-1]=()=>{qi(`Cannot construct ${A.name} due to unbound types`,w)},Gn([],w,Y=>(Y.splice(1,0,null),A.registeredClass.constructor_body[o-1]=Ks(U,Y,null,_,y),[])),[]})},mf=(a,o,u,p,_,y,w,A,U,Y)=>{var ee=js(u,p);o=ct(o),o=oo(o),y=ii(_,y,U),Gn([],[a],ue=>{ue=ue[0];var ge=`${ue.name}.${o}`;o.startsWith("@@")&&(o=Symbol[o.substring(2)]),A&&ue.registeredClass.pureVirtualFunctions.push(o);function fe(){qi(`Cannot call ${ge} due to unbound types`,ee)}var ye=ue.registeredClass.instancePrototype,je=ye[o];return je===void 0||je.overloadTable===void 0&&je.className!==ue.name&&je.argCount===u-2?(fe.argCount=u-2,fe.className=ue.name,ye[o]=fe):(ro(ye,o,ge),ye[o].overloadTable[u-2]=fe),Gn([],ee,ft=>{var ut=Ks(ge,ft,ue,y,w,U);return ye[o].overloadTable===void 0?(ut.argCount=u-2,ye[o]=ut):ye[o].overloadTable[u-2]=ut,[]}),[]})},Wc=(a,o,u)=>(a instanceof Object||_t(`${u} with invalid "this": ${a}`),a instanceof o.registeredClass.constructor||_t(`${u} incompatible with "this" of type ${a.constructor.name}`),a.$$.ptr||_t(`cannot call emscripten binding method ${u} on deleted object`),Xs(a.$$.ptr,a.$$.ptrType.registeredClass,o.registeredClass)),gf=(a,o,u,p,_,y,w,A,U,Y)=>{o=ct(o),_=ii(p,_),Gn([],[a],ee=>{ee=ee[0];var ue=`${ee.name}.${o}`,ge={get(){qi(`Cannot access ${ue} due to unbound types`,[u,w])},enumerable:!0,configurable:!0};return U?ge.set=()=>qi(`Cannot access ${ue} due to unbound types`,[u,w]):ge.set=fe=>_t(ue+" is a read-only property"),Object.defineProperty(ee.registeredClass.instancePrototype,o,ge),Gn([],U?[u,w]:[u],fe=>{var ye=fe[0],je={get(){var ut=Wc(this,ee,ue+" getter");return ye.fromWireType(_(y,ut))},enumerable:!0};if(U){U=ii(A,U);var ft=fe[1];je.set=function(ut){var Vt=Wc(this,ee,ue+" setter"),Tt=[];U(Y,Vt,ft.toWireType(Tt,ut)),ao(Tt)}}return Object.defineProperty(ee.registeredClass.instancePrototype,o,je),[]}),[]})},_f=(a,o,u)=>{a=ct(a),Gn([],[o],p=>(p=p[0],t[a]=p.fromWireType(u),[]))},Xc=[],ri=[0,1,,1,null,1,!0,1,!1,1],lo=a=>{a>9&&--ri[a+1]===0&&(C(ri[a]!==void 0,"Decref for unallocated handle."),ri[a]=void 0,Xc.push(a))},jt={toValue:a=>(a||_t(`Cannot use deleted val. handle = ${a}`),C(a===2||ri[a]!==void 0&&a%2===0,`invalid handle: ${a}`),ri[a]),toHandle:a=>{switch(a){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const o=Xc.pop()||ri.length;return ri[o]=a,ri[o+1]=1,o}}}},$c={name:"emscripten::val",fromWireType:a=>{var o=jt.toValue(a);return lo(a),o},toWireType:(a,o)=>jt.toHandle(o),argPackAdvance:ni,readValueFromPointer:$s,destructorFunction:null},qc=a=>Un(a,$c),vf=(a,o,u)=>{switch(o){case 1:return u?function(p){return this.fromWireType(Fe[p])}:function(p){return this.fromWireType(Ke[p])};case 2:return u?function(p){return this.fromWireType(at[p>>1])}:function(p){return this.fromWireType(le[p>>1])};case 4:return u?function(p){return this.fromWireType(Z[p>>2])}:function(p){return this.fromWireType(xe[p>>2])};default:throw new TypeError(`invalid integer width (${o}): ${a}`)}},xf=(a,o,u,p)=>{o=ct(o);function _(){}_.values={},Un(a,{name:o,constructor:_,fromWireType:function(y){return this.constructor.values[y]},toWireType:(y,w)=>w.value,argPackAdvance:ni,readValueFromPointer:vf(o,u,p),destructorFunction:null}),so(o,_)},Qr=(a,o)=>{var u=bt[a];return u===void 0&&_t(`${o} has unknown type ${Vc(a)}`),u},yf=(a,o,u)=>{var p=Qr(a,"enum");o=ct(o);var _=p.constructor,y=Object.create(p.constructor.prototype,{value:{value:u},constructor:{value:Ws(`${p.name}_${o}`,function(){})}});_.values[u]=y,_[o]=y},Sf=(a,o)=>{switch(o){case 4:return function(u){return this.fromWireType(tt[u>>2])};case 8:return function(u){return this.fromWireType(Ne[u>>3])};default:throw new TypeError(`invalid float width (${o}): ${a}`)}},Mf=(a,o,u)=>{o=ct(o),Un(a,{name:o,fromWireType:p=>p,toWireType:(p,_)=>{if(typeof _!="number"&&typeof _!="boolean")throw new TypeError(`Cannot convert ${$i(_)} to ${this.name}`);return _},argPackAdvance:ni,readValueFromPointer:Sf(o,u),destructorFunction:null})},Ef=(a,o,u,p,_,y,w,A)=>{var U=js(o,u);a=ct(a),a=oo(a),_=ii(p,_,w),so(a,function(){qi(`Cannot call ${a} due to unbound types`,U)},o-1),Gn([],U,Y=>{var ee=[Y[0],null].concat(Y.slice(1));return zc(a,Ks(a,ee,null,_,y,w),o-1),[]})},bf=(a,o,u,p,_)=>{o=ct(o);const y=p===0;let w=U=>U;if(y){var A=32-8*u;w=U=>U<<A>>>A,_=w(_)}Un(a,{name:o,fromWireType:w,toWireType:(U,Y)=>{if(typeof Y!="number"&&typeof Y!="boolean")throw new TypeError(`Cannot convert "${$i(Y)}" to ${o}`);return Nc(o,Y,p,_),Y},argPackAdvance:ni,readValueFromPointer:Ic(o,u,p!==0),destructorFunction:null})},Tf=(a,o,u)=>{var p=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],_=p[o];function y(w){var A=xe[w>>2],U=xe[w+4>>2];return new _(Fe.buffer,U,A)}u=ct(u),Un(a,{name:u,fromWireType:y,argPackAdvance:ni,readValueFromPointer:y},{ignoreDuplicateRegistrations:!0})},wf=Object.assign({optional:!0},$c),Af=(a,o)=>{Un(a,wf)},Yi=(a,o,u)=>(C(typeof u=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Bs(a,Ke,o,u)),Rf=(a,o)=>{o=ct(o),Un(a,{name:o,fromWireType(u){for(var p=xe[u>>2],_=u+4,y,w,A=_,w=0;w<=p;++w){var U=_+w;if(w==p||Ke[U]==0){var Y=U-A,ee=Be(A,Y);y===void 0?y=ee:(y+="\0",y+=ee),A=U+1}}return si(u),y},toWireType(u,p){p instanceof ArrayBuffer&&(p=new Uint8Array(p));var _,y=typeof p=="string";y||ArrayBuffer.isView(p)&&p.BYTES_PER_ELEMENT==1||_t("Cannot pass non-string to std::string"),y?_=Di(p):_=p.length;var w=ho(4+_+1),A=w+4;return xe[w>>2]=_,y?Yi(p,A,_+1):Ke.set(p,A),u!==null&&u.push(si,w),w},argPackAdvance:ni,readValueFromPointer:$s,destructorFunction(u){si(u)}})},Yc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Cf=(a,o)=>{C(a%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=a>>1,p=u+o/2,_=u;!(_>=p)&&le[_];)++_;if(_-u>16&&Yc)return Yc.decode(le.subarray(u,_));for(var y="",w=u;!(w>=p);++w){var A=le[w];if(A==0)break;y+=String.fromCharCode(A)}return y},Pf=(a,o,u)=>{if(C(o%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),C(typeof u=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??=2147483647,u<2)return 0;u-=2;for(var p=o,_=u<a.length*2?u/2:a.length,y=0;y<_;++y){var w=a.charCodeAt(y);at[o>>1]=w,o+=2}return at[o>>1]=0,o-p},Lf=a=>a.length*2,Df=(a,o)=>{C(a%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u="",p=0;!(p>=o/4);p++){var _=Z[a+p*4>>2];if(!_)break;u+=String.fromCodePoint(_)}return u},If=(a,o,u)=>{if(C(o%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),C(typeof u=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??=2147483647,u<4)return 0;for(var p=o,_=p+u-4,y=0;y<a.length;++y){var w=a.codePointAt(y);if(w>65535&&y++,Z[o>>2]=w,o+=4,o+4>_)break}return Z[o>>2]=0,o-p},Nf=a=>{for(var o=0,u=0;u<a.length;++u){var p=a.codePointAt(u);p>65535&&u++,o+=4}return o},Ff=(a,o,u)=>{u=ct(u);var p,_,y,w;o===2?(p=Cf,_=Pf,w=Lf,y=A=>le[A>>1]):o===4&&(p=Df,_=If,w=Nf,y=A=>xe[A>>2]),Un(a,{name:u,fromWireType:A=>{for(var U=xe[A>>2],Y,ee=A+4,ue=0;ue<=U;++ue){var ge=A+4+ue*o;if(ue==U||y(ge)==0){var fe=ge-ee,ye=p(ee,fe);Y===void 0?Y=ye:(Y+="\0",Y+=ye),ee=ge+o}}return si(A),Y},toWireType:(A,U)=>{typeof U!="string"&&_t(`Cannot pass non-string to C++ string type ${u}`);var Y=w(U),ee=ho(4+Y+o);return xe[ee>>2]=Y/o,_(U,ee+4,Y+o),A!==null&&A.push(si,ee),ee},argPackAdvance:ni,readValueFromPointer:$s,destructorFunction(A){si(A)}})},Uf=(a,o)=>{qc(a)},Of=(a,o)=>{o=ct(o),Un(a,{isVoid:!0,name:o,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,p)=>{}})},kf=()=>{throw new j},Kc=(a,o,u)=>{var p=[],_=a.toWireType(p,u);return p.length&&(xe[o>>2]=jt.toHandle(p)),_},Bf=(a,o,u)=>(a=jt.toValue(a),o=Qr(o,"emval::as"),Kc(o,u,a)),zf=(a,o)=>(a=jt.toValue(a),o=Qr(o,"emval::as"),o.toWireType(null,a)),Zs=[],Hf=(a,o,u,p)=>(a=Zs[a],o=jt.toValue(o),a(null,o,u,p)),Vf={},co=a=>{var o=Vf[a];return o===void 0?ct(a):o},Gf=(a,o,u,p,_)=>(a=Zs[a],o=jt.toValue(o),u=co(u),a(o,o[u],p,_)),jc=()=>globalThis,Wf=a=>a===0?jt.toHandle(jc()):(a=co(a),jt.toHandle(jc()[a])),Xf=a=>{var o=Zs.length;return Zs.push(a),o},$f=(a,o)=>{for(var u=new Array(a),p=0;p<a;++p)u[p]=Qr(xe[o+p*4>>2],`parameter ${p}`);return u},qf=(a,o,u)=>{var p=$f(a,o),_=p.shift();a--;var y=`return function (obj, func, destructorsRef, args) {
`,w=0,A=[];u===0&&A.push("obj");for(var U=["retType"],Y=[_],ee=0;ee<a;++ee)A.push(`arg${ee}`),U.push(`argType${ee}`),Y.push(p[ee]),y+=`  var arg${ee} = argType${ee}.readValueFromPointer(args${w?"+"+w:""});
`,w+=p[ee].argPackAdvance;var ue=u===1?"new func":"func.call";y+=`  var rv = ${ue}(${A.join(", ")});
`,_.isVoid||(U.push("emval_returnValue"),Y.push(Kc),y+=`  return emval_returnValue(retType, destructorsRef, rv);
`),y+=`};
`;var ge=new Function(...U,y)(...Y),fe=`methodCaller<(${p.map(ye=>ye.name).join(", ")}) => ${_.name}>`;return Xf(Ws(fe,ge))},Yf=(a,o)=>(a=jt.toValue(a),o=jt.toValue(o),jt.toHandle(a[o])),Kf=a=>{a>9&&(ri[a+1]+=1)},jf=a=>(a=jt.toValue(a),typeof a=="number"),Zf=a=>(a=jt.toValue(a),typeof a=="string"),Jf=()=>jt.toHandle([]),Qf=a=>jt.toHandle(co(a)),ep=a=>{var o=jt.toValue(a);ao(o),lo(a)},tp=(a,o)=>{a=Qr(a,"_emval_take_value");var u=a.readValueFromPointer(o);return jt.toHandle(u)},np=a=>{throw a=jt.toValue(a),a},ip=a=>a%4===0&&(a%100!==0||a%400===0),rp=[0,31,60,91,121,152,182,213,244,274,305,335],sp=[0,31,59,90,120,151,181,212,243,273,304,334],Zc=a=>{var o=ip(a.getFullYear()),u=o?rp:sp,p=u[a.getMonth()]+a.getDate()-1;return p},ap=9007199254740992,op=-9007199254740992,Jc=a=>a<op||a>ap?NaN:Number(a);function lp(a,o){a=Jc(a);var u=new Date(a*1e3);Z[o>>2]=u.getSeconds(),Z[o+4>>2]=u.getMinutes(),Z[o+8>>2]=u.getHours(),Z[o+12>>2]=u.getDate(),Z[o+16>>2]=u.getMonth(),Z[o+20>>2]=u.getFullYear()-1900,Z[o+24>>2]=u.getDay();var p=Zc(u)|0;Z[o+28>>2]=p,Z[o+36>>2]=-(u.getTimezoneOffset()*60);var _=new Date(u.getFullYear(),0,1),y=new Date(u.getFullYear(),6,1).getTimezoneOffset(),w=_.getTimezoneOffset(),A=(y!=w&&u.getTimezoneOffset()==Math.min(w,y))|0;Z[o+32>>2]=A}var cp=function(a){var o=(()=>{var u=new Date(Z[a+20>>2]+1900,Z[a+16>>2],Z[a+12>>2],Z[a+8>>2],Z[a+4>>2],Z[a>>2],0),p=Z[a+32>>2],_=u.getTimezoneOffset(),y=new Date(u.getFullYear(),0,1),w=new Date(u.getFullYear(),6,1).getTimezoneOffset(),A=y.getTimezoneOffset(),U=Math.min(A,w);if(p<0)Z[a+32>>2]=+(w!=A&&U==_);else if(p>0!=(U==_)){var Y=Math.max(A,w),ee=p>0?U:Y;u.setTime(u.getTime()+(ee-_)*6e4)}Z[a+24>>2]=u.getDay();var ue=Zc(u)|0;Z[a+28>>2]=ue,Z[a>>2]=u.getSeconds(),Z[a+4>>2]=u.getMinutes(),Z[a+8>>2]=u.getHours(),Z[a+12>>2]=u.getDate(),Z[a+16>>2]=u.getMonth(),Z[a+20>>2]=u.getYear();var ge=u.getTime();return isNaN(ge)?-1:ge/1e3})();return BigInt(o)},up=(a,o,u,p)=>{var _=new Date().getFullYear(),y=new Date(_,0,1),w=new Date(_,6,1),A=y.getTimezoneOffset(),U=w.getTimezoneOffset(),Y=Math.max(A,U);xe[a>>2]=Y*60,Z[o>>2]=+(A!=U);var ee=fe=>{var ye=fe>=0?"-":"+",je=Math.abs(fe),ft=String(Math.floor(je/60)).padStart(2,"0"),ut=String(je%60).padStart(2,"0");return`UTC${ye}${ft}${ut}`},ue=ee(A),ge=ee(U);C(ue),C(ge),C(Di(ue)<=16,`timezone name truncated to fit in TZNAME_MAX (${ue})`),C(Di(ge)<=16,`timezone name truncated to fit in TZNAME_MAX (${ge})`),U<A?(Yi(ue,u,17),Yi(ge,p,17)):(Yi(ue,p,17),Yi(ge,u,17))},Qc=()=>performance.now(),eu=()=>Date.now(),hp=a=>a>=0&&a<=3;function dp(a,o,u){if(!hp(a))return 28;var p;a===0?p=eu():p=Qc();var _=Math.round(p*1e3*1e3);return Je[u>>3]=BigInt(_),0}var Js=[],fp=(a,o)=>{C(Array.isArray(Js)),C(o%16==0),Js.length=0;for(var u;u=Ke[a++];){var p=String.fromCharCode(u),_=["d","f","i","p"];_.push("j"),C(_.includes(p),`Invalid character ${u}("${p}") in readEmAsmArgs! Use only [${_}], and do not specify "v" for void return argument.`);var y=u!=105;y&=u!=112,o+=y&&o%8?4:0,Js.push(u==112?xe[o>>2]:u==106?Je[o>>3]:u==105?Z[o>>2]:Ne[o>>3]),o+=y?8:4}return Js},pp=(a,o,u)=>{var p=fp(o,u);return C(au.hasOwnProperty(a),`No EM_ASM constant found at address ${a}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),au[a](...p)},mp=(a,o,u)=>pp(a,o,u),tu=()=>2147483648,gp=()=>tu(),_p=(a,o)=>(C(o,"alignment argument is required"),Math.ceil(a/o)*o),vp=a=>{var o=Ie.buffer,u=(a-o.byteLength+65535)/65536|0;try{return Ie.grow(u),St(),1}catch(p){k(`growMemory: Attempted to grow heap from ${o.byteLength} bytes to ${a} bytes, but got error: ${p}`)}},xp=a=>{var o=Ke.length;a>>>=0,C(a>o);var u=tu();if(a>u)return k(`Cannot enlarge memory, requested ${a} bytes, but the limit is ${u} bytes!`),!1;for(var p=1;p<=4;p*=2){var _=o*(1+.2/p);_=Math.min(_,a+100663296);var y=Math.min(u,_p(Math.max(a,_),65536)),w=vp(y);if(w)return!0}return k(`Failed to grow the heap from ${o} bytes to ${y} bytes, not enough memory!`),!1},uo={},yp=()=>h||"./this.program",es=()=>{if(!es.strings){var a=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:a,_:yp()};for(var u in uo)uo[u]===void 0?delete o[u]:o[u]=uo[u];var p=[];for(var u in o)p.push(`${u}=${o[u]}`);es.strings=p}return es.strings},Sp=(a,o)=>{var u=0,p=0;for(var _ of es()){var y=o+u;xe[a+p>>2]=y,u+=Yi(_,y,1/0)+1,p+=4}return 0},Mp=(a,o)=>{var u=es();xe[a>>2]=u.length;var p=0;for(var _ of u)p+=Di(_)+1;return xe[o>>2]=p,0},nu=0,iu=()=>nt||nu>0,Ep=a=>{iu()||(t.onExit?.(a),D=!0),d(a,new we(a))},bp=(a,o)=>{if(zg(),iu()&&!o){var u=`program exited (with status: ${a}), but keepRuntimeAlive() is set (counter=${nu}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;ke?.(u),k(u)}Ep(a)},Tp=bp;function wp(a){try{var o=it.getStreamFromFD(a);return b.close(o),0}catch(u){if(typeof b>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var Ap=(a,o,u,p)=>{for(var _=0,y=0;y<u;y++){var w=xe[o>>2],A=xe[o+4>>2];o+=8;var U=b.read(a,Fe,w,A,p);if(U<0)return-1;if(_+=U,U<A)break}return _};function Rp(a,o,u,p){try{var _=it.getStreamFromFD(a),y=Ap(_,o,u);return xe[p>>2]=y,0}catch(w){if(typeof b>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function Cp(a,o,u,p){o=Jc(o);try{if(isNaN(o))return 61;var _=it.getStreamFromFD(a);return b.llseek(_,o,u),Je[p>>3]=BigInt(_.position),_.getdents&&o===0&&u===0&&(_.getdents=null),0}catch(y){if(typeof b>"u"||y.name!=="ErrnoError")throw y;return y.errno}}var Pp=(a,o,u,p)=>{for(var _=0,y=0;y<u;y++){var w=xe[o>>2],A=xe[o+4>>2];o+=8;var U=b.write(a,Fe,w,A,p);if(U<0)return-1;if(_+=U,U<A)break}return _};function Lp(a,o,u,p){try{var _=it.getStreamFromFD(a),y=Pp(_,o,u);return xe[p>>2]=y,0}catch(w){if(typeof b>"u"||w.name!=="ErrnoError")throw w;return w.errno}}var Dp=a=>a,Ip=a=>{var o=t["_"+a];return C(o,"Cannot call unknown function "+a+", make sure it is exported"),o},Np=(a,o)=>{C(a.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Fe.set(a,o)},Qs=a=>du(a),Fp=a=>{var o=Di(a)+1,u=Qs(o);return Yi(a,u,o),u},ru=(a,o,u,p,_)=>{var y={string:ye=>{var je=0;return ye!=null&&ye!==0&&(je=Fp(ye)),je},array:ye=>{var je=Qs(ye.length);return Np(ye,je),je}};function w(ye){return o==="string"?Be(ye):o==="boolean"?!!ye:ye}var A=Ip(a),U=[],Y=0;if(C(o!=="array",'Return type should not be "array".'),p)for(var ee=0;ee<p.length;ee++){var ue=y[u[ee]];ue?(Y===0&&(Y=H()),U[ee]=ue(p[ee])):U[ee]=p[ee]}var ge=A(...U);function fe(ye){return Y!==0&&K(Y),w(ye)}return ge=fe(ge),ge},Up=(a,o,u,p)=>(..._)=>ru(a,o,u,_),Op=(...a)=>b.createPath(...a),kp=(...a)=>b.unlink(...a),Bp=(...a)=>b.createLazyFile(...a),zp=(...a)=>b.createDevice(...a),Hp=a=>ea(a),Vp=a=>mo(a),Gp=a=>{var o=H(),u=Qs(4),p=Qs(4);pu(a,u,p);var _=xe[u>>2],y=xe[p>>2],w=Be(_);si(_);var A;return y&&(A=Be(y),si(y)),K(o),[w,A]},su=a=>Gp(a);b.createPreloadedFile=ze,b.staticInit(),Jd(),of(),C(ri.length===10),t.noExitRuntime&&(nt=t.noExitRuntime),t.preloadPlugins&&(Ue=t.preloadPlugins),t.print&&(N=t.print),t.printErr&&(k=t.printErr),t.wasmBinary&&(L=t.wasmBinary),$p(),t.arguments&&t.arguments,t.thisProgram&&(h=t.thisProgram),C(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),C(typeof t.read>"u","Module.read option was removed"),C(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),C(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),C(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),C(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),C(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),C(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),C(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),C(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=X,t.removeRunDependency=$t,t.ccall=ru,t.cwrap=Up,t.FS_createPreloadedFile=ze,t.FS_unlink=kp,t.FS_createPath=Op,t.FS_createDevice=zp,t.FS=b,t.FS_createDataFile=te,t.FS_createLazyFile=Bp,t.MEMFS=q;var Wp=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];Wp.forEach(oe);var Xp=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Xp.forEach(pe),t.incrementExceptionRefcount=Hp,t.decrementExceptionRefcount=Vp,t.getExceptionMessage=su;function $p(){z("fetchSettings")}var au={701944:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(a){Object.defineProperty(t,a,{get:function(){return t["get_"+a]()},set:function(o){},enumerable:!0,configurable:!0})})}},ou=V("___getTypeName"),ho=V("_malloc"),fo=V("_fflush"),si=V("_free"),po=V("_emscripten_stack_get_end"),lu=V("_strerror"),Se=V("_setThrew"),cu=V("__emscripten_tempret_set"),uu=V("_emscripten_stack_init"),hu=V("__emscripten_stack_restore"),du=V("__emscripten_stack_alloc"),fu=V("_emscripten_stack_get_current"),mo=V("___cxa_decrement_exception_refcount"),ea=V("___cxa_increment_exception_refcount"),pu=V("___get_exception_message"),mu=V("___cxa_can_catch"),gu=V("___cxa_get_exception_ptr");function qp(a){ou=F("__getTypeName",1),ho=F("malloc",1),fo=F("fflush",1),si=F("free",1),po=a.emscripten_stack_get_end,a.emscripten_stack_get_base,lu=F("strerror",1),Se=F("setThrew",2),cu=F("_emscripten_tempret_set",1),uu=a.emscripten_stack_init,a.emscripten_stack_get_free,hu=a._emscripten_stack_restore,du=a._emscripten_stack_alloc,fu=a.emscripten_stack_get_current,mo=F("__cxa_decrement_exception_refcount",1),ea=F("__cxa_increment_exception_refcount",1),pu=F("__get_exception_message",3),mu=F("__cxa_can_catch",3),gu=F("__cxa_get_exception_ptr",1)}var _u={__assert_fail:Ve,__cxa_begin_catch:wn,__cxa_current_primary_exception:In,__cxa_end_catch:to,__cxa_find_matching_catch_2:Fs,__cxa_find_matching_catch_3:Us,__cxa_rethrow:ei,__cxa_rethrow_primary_exception:Yr,__cxa_throw:Os,__cxa_uncaught_exceptions:ks,__resumeException:lr,__syscall_dup3:kt,__syscall_fcntl64:Oe,__syscall_fstat64:ln,__syscall_ioctl:Et,__syscall_lstat64:Mn,__syscall_newfstatat:Nn,__syscall_openat:ti,__syscall_stat64:Ii,_abort_js:Ct,_embind_register_bigint:Wd,_embind_register_bool:Xd,_embind_register_class:cf,_embind_register_class_class_function:ff,_embind_register_class_constructor:pf,_embind_register_class_function:mf,_embind_register_class_property:gf,_embind_register_constant:_f,_embind_register_emval:qc,_embind_register_enum:xf,_embind_register_enum_value:yf,_embind_register_float:Mf,_embind_register_function:Ef,_embind_register_integer:bf,_embind_register_memory_view:Tf,_embind_register_optional:Af,_embind_register_std_string:Rf,_embind_register_std_wstring:Ff,_embind_register_user_type:Uf,_embind_register_void:Of,_emscripten_throw_longjmp:kf,_emval_as:Bf,_emval_as_int64:zf,_emval_call:Hf,_emval_call_method:Gf,_emval_decref:lo,_emval_get_global:Wf,_emval_get_method_caller:qf,_emval_get_property:Yf,_emval_incref:Kf,_emval_is_number:jf,_emval_is_string:Zf,_emval_new_array:Jf,_emval_new_cstring:Qf,_emval_run_destructors:ep,_emval_take_value:tp,_emval_throw:np,_localtime_js:lp,_mktime_js:cp,_tzset_js:up,clock_time_get:dp,emscripten_asm_const_int:mp,emscripten_date_now:eu,emscripten_get_heap_max:gp,emscripten_get_now:Qc,emscripten_resize_heap:xp,environ_get:Sp,environ_sizes_get:Mp,exit:Tp,fd_close:wp,fd_read:Rp,fd_seek:Cp,fd_write:Lp,invoke_ddd:Rg,invoke_dddi:km,invoke_dddidi:Bm,invoke_ddidi:Om,invoke_di:zm,invoke_didd:_g,invoke_dii:Rm,invoke_diii:lm,invoke_diiii:Um,invoke_diiiidd:Nm,invoke_diiiidi:hm,invoke_diiiii:nm,invoke_diiiiii:_m,invoke_diiiiiii:Hm,invoke_diiiiiiiii:mm,invoke_diiiiiiiiiiii:gm,invoke_fiii:Ug,invoke_i:im,invoke_id:eg,invoke_ii:jp,invoke_iid:Zm,invoke_iidiii:Tm,invoke_iidiiid:Em,invoke_iidiiiiidi:wm,invoke_iii:Yp,invoke_iiid:Am,invoke_iiididdddddd:bm,invoke_iiidiiiiiiii:Mm,invoke_iiii:Qp,invoke_iiiidddiiiii:Gm,invoke_iiiii:om,invoke_iiiiid:pg,invoke_iiiiii:sg,invoke_iiiiiii:Qm,invoke_iiiiiiii:jm,invoke_iiiiiiiidd:mg,invoke_iiiiiiiii:Im,invoke_iiiiiiiiid:Ag,invoke_iiiiiiiiii:ig,invoke_iiiiiiiiiidddiiiiiiiii:Sm,invoke_iiiiiiiiiii:tg,invoke_iiiiiiiiiiii:Og,invoke_iiiiiiiiiiiii:vg,invoke_iiij:rg,invoke_iiji:ng,invoke_j:Ng,invoke_ji:Tg,invoke_jiiii:ag,invoke_jij:xg,invoke_v:Jp,invoke_vi:Zp,invoke_vid:Jm,invoke_viddd:lg,invoke_vidddd:cg,invoke_vidi:Fm,invoke_vidiii:xm,invoke_vif:Lg,invoke_vii:tm,invoke_viid:Lm,invoke_viiddi:fg,invoke_viiddidi:dg,invoke_viiddii:Vm,invoke_viidi:Pm,invoke_viidii:um,invoke_viidiii:Ym,invoke_viidiiid:$m,invoke_viidiiiii:ym,invoke_viidiiiiidi:Km,invoke_viidiiiiiiii:vm,invoke_viii:Kp,invoke_viiid:fm,invoke_viiidd:hg,invoke_viiidi:Cm,invoke_viiididdddddd:qm,invoke_viiidiiiiiiii:Xm,invoke_viiii:sm,invoke_viiiiddd:ug,invoke_viiiidi:Cg,invoke_viiiifi:Pg,invoke_viiiii:em,invoke_viiiiid:dm,invoke_viiiiii:rm,invoke_viiiiiii:cm,invoke_viiiiiiii:Dm,invoke_viiiiiiiii:gg,invoke_viiiiiiiiii:Eg,invoke_viiiiiiiiiidddiiiiiiiii:Wm,invoke_viiiiiiiiiii:wg,invoke_viiiiiiiiiiid:pm,invoke_viiiiiiiiiiiii:Sg,invoke_viiiiiiiiiiiiii:Mg,invoke_viiiiiiiiiiiiiii:kg,invoke_viiiiiiiiiiiiiiiiii:bg,invoke_viiiij:Dg,invoke_viiij:am,invoke_viij:Ig,invoke_viijii:Fg,invoke_vij:yg,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:og,llvm_eh_typeid_for:Dp},Ki=await _e();function Yp(a,o,u){var p=H();try{return Me(a)(o,u)}catch(_){if(K(p),!(_ instanceof I))throw _;Se(1,0)}}function Kp(a,o,u,p){var _=H();try{Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function jp(a,o){var u=H();try{return Me(a)(o)}catch(p){if(K(u),!(p instanceof I))throw p;Se(1,0)}}function Zp(a,o){var u=H();try{Me(a)(o)}catch(p){if(K(u),!(p instanceof I))throw p;Se(1,0)}}function Jp(a){var o=H();try{Me(a)()}catch(u){if(K(o),!(u instanceof I))throw u;Se(1,0)}}function Qp(a,o,u,p){var _=H();try{return Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function em(a,o,u,p,_,y){var w=H();try{Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function tm(a,o,u){var p=H();try{Me(a)(o,u)}catch(_){if(K(p),!(_ instanceof I))throw _;Se(1,0)}}function nm(a,o,u,p,_,y){var w=H();try{return Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function im(a){var o=H();try{return Me(a)()}catch(u){if(K(o),!(u instanceof I))throw u;Se(1,0)}}function rm(a,o,u,p,_,y,w){var A=H();try{Me(a)(o,u,p,_,y,w)}catch(U){if(K(A),!(U instanceof I))throw U;Se(1,0)}}function sm(a,o,u,p,_){var y=H();try{Me(a)(o,u,p,_)}catch(w){if(K(y),!(w instanceof I))throw w;Se(1,0)}}function am(a,o,u,p,_){var y=H();try{Me(a)(o,u,p,_)}catch(w){if(K(y),!(w instanceof I))throw w;Se(1,0)}}function om(a,o,u,p,_){var y=H();try{return Me(a)(o,u,p,_)}catch(w){if(K(y),!(w instanceof I))throw w;Se(1,0)}}function lm(a,o,u,p){var _=H();try{return Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function cm(a,o,u,p,_,y,w,A){var U=H();try{Me(a)(o,u,p,_,y,w,A)}catch(Y){if(K(U),!(Y instanceof I))throw Y;Se(1,0)}}function um(a,o,u,p,_,y){var w=H();try{Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function hm(a,o,u,p,_,y,w){var A=H();try{return Me(a)(o,u,p,_,y,w)}catch(U){if(K(A),!(U instanceof I))throw U;Se(1,0)}}function dm(a,o,u,p,_,y,w){var A=H();try{Me(a)(o,u,p,_,y,w)}catch(U){if(K(A),!(U instanceof I))throw U;Se(1,0)}}function fm(a,o,u,p,_){var y=H();try{Me(a)(o,u,p,_)}catch(w){if(K(y),!(w instanceof I))throw w;Se(1,0)}}function pm(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge){var fe=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge)}catch(ye){if(K(fe),!(ye instanceof I))throw ye;Se(1,0)}}function mm(a,o,u,p,_,y,w,A,U,Y){var ee=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y)}catch(ue){if(K(ee),!(ue instanceof I))throw ue;Se(1,0)}}function gm(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge){var fe=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge)}catch(ye){if(K(fe),!(ye instanceof I))throw ye;Se(1,0)}}function _m(a,o,u,p,_,y,w){var A=H();try{return Me(a)(o,u,p,_,y,w)}catch(U){if(K(A),!(U instanceof I))throw U;Se(1,0)}}function vm(a,o,u,p,_,y,w,A,U,Y,ee,ue){var ge=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue)}catch(fe){if(K(ge),!(fe instanceof I))throw fe;Se(1,0)}}function xm(a,o,u,p,_,y){var w=H();try{Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function ym(a,o,u,p,_,y,w,A,U){var Y=H();try{Me(a)(o,u,p,_,y,w,A,U)}catch(ee){if(K(Y),!(ee instanceof I))throw ee;Se(1,0)}}function Sm(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye,je,ft,ut,Vt,Tt,hn,Jt){var _n=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye,je,ft,ut,Vt,Tt,hn,Jt)}catch(Ut){if(K(_n),!(Ut instanceof I))throw Ut;Se(1,0)}}function Mm(a,o,u,p,_,y,w,A,U,Y,ee,ue){var ge=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue)}catch(fe){if(K(ge),!(fe instanceof I))throw fe;Se(1,0)}}function Em(a,o,u,p,_,y,w){var A=H();try{return Me(a)(o,u,p,_,y,w)}catch(U){if(K(A),!(U instanceof I))throw U;Se(1,0)}}function bm(a,o,u,p,_,y,w,A,U,Y,ee,ue){var ge=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue)}catch(fe){if(K(ge),!(fe instanceof I))throw fe;Se(1,0)}}function Tm(a,o,u,p,_,y){var w=H();try{return Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function wm(a,o,u,p,_,y,w,A,U,Y){var ee=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y)}catch(ue){if(K(ee),!(ue instanceof I))throw ue;Se(1,0)}}function Am(a,o,u,p){var _=H();try{return Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function Rm(a,o,u){var p=H();try{return Me(a)(o,u)}catch(_){if(K(p),!(_ instanceof I))throw _;Se(1,0)}}function Cm(a,o,u,p,_,y){var w=H();try{Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function Pm(a,o,u,p,_){var y=H();try{Me(a)(o,u,p,_)}catch(w){if(K(y),!(w instanceof I))throw w;Se(1,0)}}function Lm(a,o,u,p){var _=H();try{Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function Dm(a,o,u,p,_,y,w,A,U){var Y=H();try{Me(a)(o,u,p,_,y,w,A,U)}catch(ee){if(K(Y),!(ee instanceof I))throw ee;Se(1,0)}}function Im(a,o,u,p,_,y,w,A,U){var Y=H();try{return Me(a)(o,u,p,_,y,w,A,U)}catch(ee){if(K(Y),!(ee instanceof I))throw ee;Se(1,0)}}function Nm(a,o,u,p,_,y,w){var A=H();try{return Me(a)(o,u,p,_,y,w)}catch(U){if(K(A),!(U instanceof I))throw U;Se(1,0)}}function Fm(a,o,u,p){var _=H();try{Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function Um(a,o,u,p,_){var y=H();try{return Me(a)(o,u,p,_)}catch(w){if(K(y),!(w instanceof I))throw w;Se(1,0)}}function Om(a,o,u,p,_){var y=H();try{return Me(a)(o,u,p,_)}catch(w){if(K(y),!(w instanceof I))throw w;Se(1,0)}}function km(a,o,u,p){var _=H();try{return Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function Bm(a,o,u,p,_,y){var w=H();try{return Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function zm(a,o){var u=H();try{return Me(a)(o)}catch(p){if(K(u),!(p instanceof I))throw p;Se(1,0)}}function Hm(a,o,u,p,_,y,w,A){var U=H();try{return Me(a)(o,u,p,_,y,w,A)}catch(Y){if(K(U),!(Y instanceof I))throw Y;Se(1,0)}}function Vm(a,o,u,p,_,y,w){var A=H();try{Me(a)(o,u,p,_,y,w)}catch(U){if(K(A),!(U instanceof I))throw U;Se(1,0)}}function Gm(a,o,u,p,_,y,w,A,U,Y,ee,ue){var ge=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue)}catch(fe){if(K(ge),!(fe instanceof I))throw fe;Se(1,0)}}function Wm(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye,je,ft,ut,Vt,Tt,hn,Jt,_n){var Ut=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye,je,ft,ut,Vt,Tt,hn,Jt,_n)}catch(ji){if(K(Ut),!(ji instanceof I))throw ji;Se(1,0)}}function Xm(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge){var fe=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge)}catch(ye){if(K(fe),!(ye instanceof I))throw ye;Se(1,0)}}function $m(a,o,u,p,_,y,w,A){var U=H();try{Me(a)(o,u,p,_,y,w,A)}catch(Y){if(K(U),!(Y instanceof I))throw Y;Se(1,0)}}function qm(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge){var fe=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge)}catch(ye){if(K(fe),!(ye instanceof I))throw ye;Se(1,0)}}function Ym(a,o,u,p,_,y,w){var A=H();try{Me(a)(o,u,p,_,y,w)}catch(U){if(K(A),!(U instanceof I))throw U;Se(1,0)}}function Km(a,o,u,p,_,y,w,A,U,Y,ee){var ue=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee)}catch(ge){if(K(ue),!(ge instanceof I))throw ge;Se(1,0)}}function jm(a,o,u,p,_,y,w,A){var U=H();try{return Me(a)(o,u,p,_,y,w,A)}catch(Y){if(K(U),!(Y instanceof I))throw Y;Se(1,0)}}function Zm(a,o,u){var p=H();try{return Me(a)(o,u)}catch(_){if(K(p),!(_ instanceof I))throw _;Se(1,0)}}function Jm(a,o,u){var p=H();try{Me(a)(o,u)}catch(_){if(K(p),!(_ instanceof I))throw _;Se(1,0)}}function Qm(a,o,u,p,_,y,w){var A=H();try{return Me(a)(o,u,p,_,y,w)}catch(U){if(K(A),!(U instanceof I))throw U;Se(1,0)}}function eg(a,o){var u=H();try{return Me(a)(o)}catch(p){if(K(u),!(p instanceof I))throw p;Se(1,0)}}function tg(a,o,u,p,_,y,w,A,U,Y,ee){var ue=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y,ee)}catch(ge){if(K(ue),!(ge instanceof I))throw ge;Se(1,0)}}function ng(a,o,u,p){var _=H();try{return Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function ig(a,o,u,p,_,y,w,A,U,Y){var ee=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y)}catch(ue){if(K(ee),!(ue instanceof I))throw ue;Se(1,0)}}function rg(a,o,u,p){var _=H();try{return Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function sg(a,o,u,p,_,y){var w=H();try{return Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function ag(a,o,u,p,_){var y=H();try{return Me(a)(o,u,p,_)}catch(w){if(K(y),!(w instanceof I))throw w;return Se(1,0),0n}}function og(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye,je,ft,ut,Vt,Tt,hn,Jt,_n,Ut,ji,Vg,Gg,Wg,Xg,$g,qg,Yg,Kg,jg,Zg,Jg,Qg,e_,t_,n_,i_,r_,s_,a_,o_,l_,c_,u_,h_,d_,f_,p_,m_,g_,__,v_,x_,y_,S_,M_,E_,b_,T_,w_,A_,R_,C_,P_,L_,D_,I_,N_,F_,U_,O_,k_,B_,z_,H_,V_,G_,W_,X_,$_,q_,Y_){var K_=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye,je,ft,ut,Vt,Tt,hn,Jt,_n,Ut,ji,Vg,Gg,Wg,Xg,$g,qg,Yg,Kg,jg,Zg,Jg,Qg,e_,t_,n_,i_,r_,s_,a_,o_,l_,c_,u_,h_,d_,f_,p_,m_,g_,__,v_,x_,y_,S_,M_,E_,b_,T_,w_,A_,R_,C_,P_,L_,D_,I_,N_,F_,U_,O_,k_,B_,z_,H_,V_,G_,W_,X_,$_,q_,Y_)}catch(xu){if(K(K_),!(xu instanceof I))throw xu;Se(1,0)}}function lg(a,o,u,p,_){var y=H();try{Me(a)(o,u,p,_)}catch(w){if(K(y),!(w instanceof I))throw w;Se(1,0)}}function cg(a,o,u,p,_,y){var w=H();try{Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function ug(a,o,u,p,_,y,w,A){var U=H();try{Me(a)(o,u,p,_,y,w,A)}catch(Y){if(K(U),!(Y instanceof I))throw Y;Se(1,0)}}function hg(a,o,u,p,_,y){var w=H();try{Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function dg(a,o,u,p,_,y,w,A){var U=H();try{Me(a)(o,u,p,_,y,w,A)}catch(Y){if(K(U),!(Y instanceof I))throw Y;Se(1,0)}}function fg(a,o,u,p,_,y){var w=H();try{Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function pg(a,o,u,p,_,y){var w=H();try{return Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function mg(a,o,u,p,_,y,w,A,U,Y){var ee=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y)}catch(ue){if(K(ee),!(ue instanceof I))throw ue;Se(1,0)}}function gg(a,o,u,p,_,y,w,A,U,Y){var ee=H();try{Me(a)(o,u,p,_,y,w,A,U,Y)}catch(ue){if(K(ee),!(ue instanceof I))throw ue;Se(1,0)}}function _g(a,o,u,p){var _=H();try{return Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function vg(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge){var fe=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge)}catch(ye){if(K(fe),!(ye instanceof I))throw ye;Se(1,0)}}function xg(a,o,u){var p=H();try{return Me(a)(o,u)}catch(_){if(K(p),!(_ instanceof I))throw _;return Se(1,0),0n}}function yg(a,o,u){var p=H();try{Me(a)(o,u)}catch(_){if(K(p),!(_ instanceof I))throw _;Se(1,0)}}function Sg(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe){var ye=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe)}catch(je){if(K(ye),!(je instanceof I))throw je;Se(1,0)}}function Mg(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye){var je=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye)}catch(ft){if(K(je),!(ft instanceof I))throw ft;Se(1,0)}}function Eg(a,o,u,p,_,y,w,A,U,Y,ee){var ue=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee)}catch(ge){if(K(ue),!(ge instanceof I))throw ge;Se(1,0)}}function bg(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye,je,ft,ut,Vt){var Tt=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye,je,ft,ut,Vt)}catch(hn){if(K(Tt),!(hn instanceof I))throw hn;Se(1,0)}}function Tg(a,o){var u=H();try{return Me(a)(o)}catch(p){if(K(u),!(p instanceof I))throw p;return Se(1,0),0n}}function wg(a,o,u,p,_,y,w,A,U,Y,ee,ue){var ge=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue)}catch(fe){if(K(ge),!(fe instanceof I))throw fe;Se(1,0)}}function Ag(a,o,u,p,_,y,w,A,U,Y){var ee=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y)}catch(ue){if(K(ee),!(ue instanceof I))throw ue;Se(1,0)}}function Rg(a,o,u){var p=H();try{return Me(a)(o,u)}catch(_){if(K(p),!(_ instanceof I))throw _;Se(1,0)}}function Cg(a,o,u,p,_,y,w){var A=H();try{Me(a)(o,u,p,_,y,w)}catch(U){if(K(A),!(U instanceof I))throw U;Se(1,0)}}function Pg(a,o,u,p,_,y,w){var A=H();try{Me(a)(o,u,p,_,y,w)}catch(U){if(K(A),!(U instanceof I))throw U;Se(1,0)}}function Lg(a,o,u){var p=H();try{Me(a)(o,u)}catch(_){if(K(p),!(_ instanceof I))throw _;Se(1,0)}}function Dg(a,o,u,p,_,y){var w=H();try{Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function Ig(a,o,u,p){var _=H();try{Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function Ng(a){var o=H();try{return Me(a)()}catch(u){if(K(o),!(u instanceof I))throw u;return Se(1,0),0n}}function Fg(a,o,u,p,_,y){var w=H();try{Me(a)(o,u,p,_,y)}catch(A){if(K(w),!(A instanceof I))throw A;Se(1,0)}}function Ug(a,o,u,p){var _=H();try{return Me(a)(o,u,p)}catch(y){if(K(_),!(y instanceof I))throw y;Se(1,0)}}function Og(a,o,u,p,_,y,w,A,U,Y,ee,ue){var ge=H();try{return Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue)}catch(fe){if(K(ge),!(fe instanceof I))throw fe;Se(1,0)}}function kg(a,o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye,je){var ft=H();try{Me(a)(o,u,p,_,y,w,A,U,Y,ee,ue,ge,fe,ye,je)}catch(ut){if(K(ft),!(ut instanceof I))throw ut;Se(1,0)}}var vu;function Bg(){uu(),T()}function go(){if(Ht>0){Kt=go;return}if(Bg(),Nt(),Ht>0){Kt=go;return}function a(){C(!vu),vu=!0,t.calledRun=!0,!D&&(gt(),me?.(t),t.onRuntimeInitialized?.(),ae("onRuntimeInitialized"),C(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),zt())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),a()},1)):a(),O()}function zg(){var a=N,o=k,u=!1;N=k=p=>{u=!0};try{fo(0),["stdout","stderr"].forEach(p=>{var _=b.analyzePath("/dev/"+p);if(_){var y=_.object,w=y.rdev,A=R.ttys[w];A?.output?.length&&(u=!0)}})}catch{}N=a,k=o,u&&be("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Hg(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();ae("preInit")}Hg(),go(),ot?e=t:e=new Promise((a,o)=>{me=a,ke=o});for(const a of Object.keys(t))a in r||Object.defineProperty(r,a,{configurable:!0,get(){Qe(`Access to module property ('${a}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const ev=""+new URL("mujoco-CGsuVDfV.wasm",import.meta.url).href;const Jl="186",Cr={ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tv=0,Su=1,nv=2,gs=1,iv=2,fs=3,Gi=0,pn=1,qn=2,fi=0,_s=1,Ir=2,Mu=3,Eu=4,rv=5,wr=100,sv=101,av=102,ov=103,lv=104,cv=200,uv=201,hv=202,dv=203,Yh=204,Kh=205,fv=206,pv=207,mv=208,gv=209,_v=210,vv=211,xv=212,yv=213,Sv=214,sl=0,al=1,ol=2,Ss=3,ll=4,cl=5,ul=6,hl=7,Ql=0,Mv=1,Ev=2,pi=0,ec=1,tc=2,nc=3,ja=4,ic=5,rc=6,sc=7,bu="attached",bv="detached",jh=300,sr=301,Nr=302,_o=303,vo=304,Za=306,Fr=1e3,ui=1001,Ba=1002,en=1003,Zh=1004,ps=1005,tn=1006,Pa=1007,Ti=1008,Pn=1009,Jh=1010,Qh=1011,Ms=1012,ac=1013,mi=1014,zn=1015,Tn=1016,oc=1017,lc=1018,Es=1020,ed=35902,td=35899,nd=1021,id=1022,Hn=1023,Ri=1026,rr=1027,cc=1028,uc=1029,ar=1030,hc=1031,dc=1033,La=33776,Da=33777,Ia=33778,Na=33779,dl=35840,fl=35841,pl=35842,ml=35843,gl=36196,_l=37492,vl=37496,xl=37488,yl=37489,za=37490,Sl=37491,Ml=37808,El=37809,bl=37810,Tl=37811,wl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Ll=37817,Dl=37818,Il=37819,Nl=37820,Fl=37821,Ul=36492,Ol=36494,kl=36495,Bl=36283,zl=36284,Ha=36285,Hl=36286,bs=2300,Ts=2301,xo=2302,Tu=2303,wu=2400,Au=2401,Ru=2402,Tv=2500,wv=0,rd=1,Vl=2,Av=3200,Va=0,Rv=1,Hi="",cn="srgb",Ln="srgb-linear",Ga="linear",Pt="srgb",yo=7680,Cv=519,Pv=512,Lv=513,Dv=514,fc=515,Iv=516,Nv=517,pc=518,Fv=519,sd=35044,Cu="300 es",hi=2e3,ws=2001;function Uv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ov(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function As(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kv(){const r=As("canvas");return r.style.display="block",r}const Pu={};function Wa(...r){const e="THREE."+r.shift();console.log(e,...r)}function ad(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ye(...r){r=ad(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function et(...r){r=ad(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Pr(...r){const e=r.join(" ");e in Pu||(Pu[e]=!0,Ye(...r))}function Bv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const zv={[sl]:al,[ol]:ul,[ll]:hl,[Ss]:cl,[al]:sl,[ul]:ol,[hl]:ll,[cl]:Ss};class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lu=1234567;const vs=Math.PI/180,Ur=180/Math.PI;function jn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function mc(r,e){return(r%e+e)%e}function Hv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Vv(r,e,t){return r!==e?(t-r)/(e-r):0}function xs(r,e,t){return(1-t)*r+t*e}function Gv(r,e,t,n){return xs(r,e,1-Math.exp(-t*n))}function Wv(r,e=1){return e-Math.abs(mc(r,e*2)-e)}function Xv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function $v(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function qv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Yv(r,e){return r+Math.random()*(e-r)}function Kv(r){return r*(.5-Math.random())}function jv(r){r!==void 0&&(Lu=r);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zv(r){return r*vs}function Jv(r){return r*Ur}function Qv(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function e0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function t0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function n0(r,e,t,n,i){const s=Math.cos,l=Math.sin,c=s(t/2),h=l(t/2),d=s((e+n)/2),m=l((e+n)/2),f=s((e-n)/2),g=l((e-n)/2),v=s((n-e)/2),M=l((n-e)/2);switch(i){case"XYX":r.set(c*m,h*f,h*g,c*d);break;case"YZY":r.set(h*g,c*m,h*f,c*d);break;case"ZXZ":r.set(h*f,h*g,c*m,c*d);break;case"XZX":r.set(c*m,h*M,h*v,c*d);break;case"YXY":r.set(h*v,c*m,h*M,c*d);break;case"ZYZ":r.set(h*M,h*v,c*m,c*d);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const od={DEG2RAD:vs,RAD2DEG:Ur,generateUUID:jn,clamp:mt,euclideanModulo:mc,mapLinear:Hv,inverseLerp:Vv,lerp:xs,damp:Gv,pingpong:Wv,smoothstep:Xv,smootherstep:$v,randInt:qv,randFloat:Yv,randFloatSpread:Kv,seededRandom:jv,degToRad:Zv,radToDeg:Jv,isPowerOfTwo:Qv,ceilPowerOfTwo:e0,floorPowerOfTwo:t0,setQuaternionFromProperEuler:n0,normalize:Lt,denormalize:Yn};class Ge{static{Ge.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*i+e.x,this.y=s*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,l,c){let h=n[i+0],d=n[i+1],m=n[i+2],f=n[i+3],g=s[l+0],v=s[l+1],M=s[l+2],P=s[l+3];if(f!==P||h!==g||d!==v||m!==M){let S=h*g+d*v+m*M+f*P;S<0&&(g=-g,v=-v,M=-M,P=-P,S=-S);let x=1-c;if(S<.9995){const N=Math.acos(S),k=Math.sin(N);x=Math.sin(x*N)/k,c=Math.sin(c*N)/k,h=h*x+g*c,d=d*x+v*c,m=m*x+M*c,f=f*x+P*c}else{h=h*x+g*c,d=d*x+v*c,m=m*x+M*c,f=f*x+P*c;const N=1/Math.sqrt(h*h+d*d+m*m+f*f);h*=N,d*=N,m*=N,f*=N}}e[t]=h,e[t+1]=d,e[t+2]=m,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,l){const c=n[i],h=n[i+1],d=n[i+2],m=n[i+3],f=s[l],g=s[l+1],v=s[l+2],M=s[l+3];return e[t]=c*M+m*f+h*v-d*g,e[t+1]=h*M+m*g+d*f-c*v,e[t+2]=d*M+m*v+c*g-h*f,e[t+3]=m*M-c*f-h*g-d*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,l=e._order,c=Math.cos,h=Math.sin,d=c(n/2),m=c(i/2),f=c(s/2),g=h(n/2),v=h(i/2),M=h(s/2);switch(l){case"XYZ":this._x=g*m*f+d*v*M,this._y=d*v*f-g*m*M,this._z=d*m*M+g*v*f,this._w=d*m*f-g*v*M;break;case"YXZ":this._x=g*m*f+d*v*M,this._y=d*v*f-g*m*M,this._z=d*m*M-g*v*f,this._w=d*m*f+g*v*M;break;case"ZXY":this._x=g*m*f-d*v*M,this._y=d*v*f+g*m*M,this._z=d*m*M+g*v*f,this._w=d*m*f-g*v*M;break;case"ZYX":this._x=g*m*f-d*v*M,this._y=d*v*f+g*m*M,this._z=d*m*M-g*v*f,this._w=d*m*f+g*v*M;break;case"YZX":this._x=g*m*f+d*v*M,this._y=d*v*f+g*m*M,this._z=d*m*M-g*v*f,this._w=d*m*f-g*v*M;break;case"XZY":this._x=g*m*f-d*v*M,this._y=d*v*f-g*m*M,this._z=d*m*M+g*v*f,this._w=d*m*f+g*v*M;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],l=t[1],c=t[5],h=t[9],d=t[2],m=t[6],f=t[10],g=n+c+f;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(m-h)*v,this._y=(s-d)*v,this._z=(l-i)*v}else if(n>c&&n>f){const v=2*Math.sqrt(1+n-c-f);this._w=(m-h)/v,this._x=.25*v,this._y=(i+l)/v,this._z=(s+d)/v}else if(c>f){const v=2*Math.sqrt(1+c-n-f);this._w=(s-d)/v,this._x=(i+l)/v,this._y=.25*v,this._z=(h+m)/v}else{const v=2*Math.sqrt(1+f-n-c);this._w=(l-i)/v,this._x=(s+d)/v,this._y=(h+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,l=e._w,c=t._x,h=t._y,d=t._z,m=t._w;return this._x=n*m+l*c+i*d-s*h,this._y=i*m+l*h+s*c-n*d,this._z=s*m+l*d+n*h-i*c,this._w=l*m-n*c-i*h-s*d,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,i=-i,s=-s,l=-l,c=-c);let h=1-t;if(c<.9995){const d=Math.acos(c),m=Math.sin(d);h=Math.sin(h*d)/m,t=Math.sin(t*d)/m,this._x=this._x*h+n*t,this._y=this._y*h+i*t,this._z=this._z*h+s*t,this._w=this._w*h+l*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+i*t,this._z=this._z*h+s*t,this._w=this._w*h+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${static{$.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,l=e.y,c=e.z,h=e.w,d=2*(l*i-c*n),m=2*(c*t-s*i),f=2*(s*n-l*t);return this.x=t+h*d+l*f-c*m,this.y=n+h*m+c*d-s*f,this.z=i+h*f+s*m-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,l=t.x,c=t.y,h=t.z;return this.x=i*h-s*c,this.y=s*l-n*h,this.z=n*c-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new $,Du=new Dn;class st{static{st.prototype.isMatrix3=!0}constructor(e,t,n,i,s,l,c,h,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,c,h,d)}set(e,t,n,i,s,l,c,h,d){const m=this.elements;return m[0]=e,m[1]=i,m[2]=c,m[3]=t,m[4]=s,m[5]=h,m[6]=n,m[7]=l,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],c=n[3],h=n[6],d=n[1],m=n[4],f=n[7],g=n[2],v=n[5],M=n[8],P=i[0],S=i[3],x=i[6],N=i[1],k=i[4],L=i[7],D=i[2],C=i[5],B=i[8];return s[0]=l*P+c*N+h*D,s[3]=l*S+c*k+h*C,s[6]=l*x+c*L+h*B,s[1]=d*P+m*N+f*D,s[4]=d*S+m*k+f*C,s[7]=d*x+m*L+f*B,s[2]=g*P+v*N+M*D,s[5]=g*S+v*k+M*C,s[8]=g*x+v*L+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],h=e[6],d=e[7],m=e[8];return t*l*m-t*c*d-n*s*m+n*c*h+i*s*d-i*l*h}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],h=e[6],d=e[7],m=e[8],f=m*l-c*d,g=c*h-m*s,v=d*s-l*h,M=t*f+n*g+i*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/M;return e[0]=f*P,e[1]=(i*d-m*n)*P,e[2]=(c*n-i*l)*P,e[3]=g*P,e[4]=(m*t-i*h)*P,e[5]=(i*s-c*t)*P,e[6]=v*P,e[7]=(n*h-d*t)*P,e[8]=(l*t-n*s)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,l,c){const h=Math.cos(s),d=Math.sin(s);return this.set(n*h,n*d,-n*(h*l+d*c)+l+e,-i*d,i*h,-i*(-d*l+h*c)+c+t,0,0,1),this}scale(e,t){return Pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return Pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return Pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new st,Iu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i0(){const r={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(i,s,l){return this.enabled===!1||s===l||!s||!l||(this.spaces[s].transfer===Pt&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b)),this.spaces[s].primaries!==this.spaces[l].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Pt&&(i.r=Lr(i.r),i.g=Lr(i.g),i.b=Lr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hi?Ga:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,l){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ln]:{primaries:e,whitePoint:n,transfer:Ga,toXYZ:Iu,fromXYZ:Nu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:Iu,fromXYZ:Nu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),r}const vt=i0();function Ai(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ur;class r0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ur===void 0&&(ur=As("canvas")),ur.width=e.width,ur.height=e.height;const i=ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ur}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=As("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let l=0;l<s.length;l++)s[l]=Ai(s[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s0=0;class gc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let l=0,c=i.length;l<c;l++)i[l].isDataTexture?s.push(Eo(i[l].image)):s.push(Eo(i[l]))}else s=Eo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Eo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?r0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let a0=0;const bo=new $;class on extends Wi{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=ui,i=ui,s=tn,l=Ti,c=Hn,h=Pn,d=on.DEFAULT_ANISOTROPY,m=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=jn(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=l,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bo).x}get height(){return this.source.getSize(bo).y}get depth(){return this.source.getSize(bo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=jh;on.DEFAULT_ANISOTROPY=1;class Ot{static{Ot.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const h=e.elements,d=h[0],m=h[4],f=h[8],g=h[1],v=h[5],M=h[9],P=h[2],S=h[6],x=h[10];if(Math.abs(m-g)<.01&&Math.abs(f-P)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+g)<.1&&Math.abs(f+P)<.1&&Math.abs(M+S)<.1&&Math.abs(d+v+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(d+1)/2,L=(v+1)/2,D=(x+1)/2,C=(m+g)/4,B=(f+P)/4,T=(M+S)/4;return k>L&&k>D?k<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(k),i=C/n,s=B/n):L>D?L<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(L),n=C/i,s=T/i):D<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(D),n=B/s,i=T/s),this.set(n,i,s,t),this}let N=Math.sqrt((S-M)*(S-M)+(f-P)*(f-P)+(g-m)*(g-m));return Math.abs(N)<.001&&(N=1),this.x=(S-M)/N,this.y=(f-P)/N,this.z=(g-m)/N,this.w=Math.acos((d+v+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o0 extends Wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new on(i),l=n.count;for(let c=0;c<l;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new gc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends o0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ld extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l0 extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class lt{static{lt.prototype.isMatrix4=!0}constructor(e,t,n,i,s,l,c,h,d,m,f,g,v,M,P,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,c,h,d,m,f,g,v,M,P,S)}set(e,t,n,i,s,l,c,h,d,m,f,g,v,M,P,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=l,x[9]=c,x[13]=h,x[2]=d,x[6]=m,x[10]=f,x[14]=g,x[3]=v,x[7]=M,x[11]=P,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/hr.setFromMatrixColumn(e,0).length(),s=1/hr.setFromMatrixColumn(e,1).length(),l=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,l=Math.cos(n),c=Math.sin(n),h=Math.cos(i),d=Math.sin(i),m=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const g=l*m,v=l*f,M=c*m,P=c*f;t[0]=h*m,t[4]=-h*f,t[8]=d,t[1]=v+M*d,t[5]=g-P*d,t[9]=-c*h,t[2]=P-g*d,t[6]=M+v*d,t[10]=l*h}else if(e.order==="YXZ"){const g=h*m,v=h*f,M=d*m,P=d*f;t[0]=g+P*c,t[4]=M*c-v,t[8]=l*d,t[1]=l*f,t[5]=l*m,t[9]=-c,t[2]=v*c-M,t[6]=P+g*c,t[10]=l*h}else if(e.order==="ZXY"){const g=h*m,v=h*f,M=d*m,P=d*f;t[0]=g-P*c,t[4]=-l*f,t[8]=M+v*c,t[1]=v+M*c,t[5]=l*m,t[9]=P-g*c,t[2]=-l*d,t[6]=c,t[10]=l*h}else if(e.order==="ZYX"){const g=l*m,v=l*f,M=c*m,P=c*f;t[0]=h*m,t[4]=M*d-v,t[8]=g*d+P,t[1]=h*f,t[5]=P*d+g,t[9]=v*d-M,t[2]=-d,t[6]=c*h,t[10]=l*h}else if(e.order==="YZX"){const g=l*h,v=l*d,M=c*h,P=c*d;t[0]=h*m,t[4]=P-g*f,t[8]=M*f+v,t[1]=f,t[5]=l*m,t[9]=-c*m,t[2]=-d*m,t[6]=v*f+M,t[10]=g-P*f}else if(e.order==="XZY"){const g=l*h,v=l*d,M=c*h,P=c*d;t[0]=h*m,t[4]=-f,t[8]=d*m,t[1]=g*f+P,t[5]=l*m,t[9]=v*f-M,t[2]=M*f-v,t[6]=c*m,t[10]=P*f+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,u0)}lookAt(e,t,n){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ni.crossVectors(n,Rn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ni.crossVectors(n,Rn)),Ni.normalize(),ta.crossVectors(Rn,Ni),i[0]=Ni.x,i[4]=ta.x,i[8]=Rn.x,i[1]=Ni.y,i[5]=ta.y,i[9]=Rn.y,i[2]=Ni.z,i[6]=ta.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],c=n[4],h=n[8],d=n[12],m=n[1],f=n[5],g=n[9],v=n[13],M=n[2],P=n[6],S=n[10],x=n[14],N=n[3],k=n[7],L=n[11],D=n[15],C=i[0],B=i[4],T=i[8],O=i[12],I=i[1],j=i[5],ie=i[9],ae=i[13],V=i[2],z=i[6],J=i[10],se=i[14],ce=i[3],oe=i[7],pe=i[11],me=i[15];return s[0]=l*C+c*I+h*V+d*ce,s[4]=l*B+c*j+h*z+d*oe,s[8]=l*T+c*ie+h*J+d*pe,s[12]=l*O+c*ae+h*se+d*me,s[1]=m*C+f*I+g*V+v*ce,s[5]=m*B+f*j+g*z+v*oe,s[9]=m*T+f*ie+g*J+v*pe,s[13]=m*O+f*ae+g*se+v*me,s[2]=M*C+P*I+S*V+x*ce,s[6]=M*B+P*j+S*z+x*oe,s[10]=M*T+P*ie+S*J+x*pe,s[14]=M*O+P*ae+S*se+x*me,s[3]=N*C+k*I+L*V+D*ce,s[7]=N*B+k*j+L*z+D*oe,s[11]=N*T+k*ie+L*J+D*pe,s[15]=N*O+k*ae+L*se+D*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],l=e[1],c=e[5],h=e[9],d=e[13],m=e[2],f=e[6],g=e[10],v=e[14],M=e[3],P=e[7],S=e[11],x=e[15],N=h*v-d*g,k=c*v-d*f,L=c*g-h*f,D=l*v-d*m,C=l*g-h*m,B=l*f-c*m;return t*(P*N-S*k+x*L)-n*(M*N-S*D+x*C)+i*(M*k-P*D+x*B)-s*(M*L-P*C+S*B)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],l=e[5],c=e[9],h=e[2],d=e[6],m=e[10];return t*(l*m-c*d)-n*(s*m-c*h)+i*(s*d-l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],h=e[6],d=e[7],m=e[8],f=e[9],g=e[10],v=e[11],M=e[12],P=e[13],S=e[14],x=e[15],N=t*c-n*l,k=t*h-i*l,L=t*d-s*l,D=n*h-i*c,C=n*d-s*c,B=i*d-s*h,T=m*P-f*M,O=m*S-g*M,I=m*x-v*M,j=f*S-g*P,ie=f*x-v*P,ae=g*x-v*S,V=N*ae-k*ie+L*j+D*I-C*O+B*T;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/V;return e[0]=(c*ae-h*ie+d*j)*z,e[1]=(i*ie-n*ae-s*j)*z,e[2]=(P*B-S*C+x*D)*z,e[3]=(g*C-f*B-v*D)*z,e[4]=(h*I-l*ae-d*O)*z,e[5]=(t*ae-i*I+s*O)*z,e[6]=(S*L-M*B-x*k)*z,e[7]=(m*B-g*L+v*k)*z,e[8]=(l*ie-c*I+d*T)*z,e[9]=(n*I-t*ie-s*T)*z,e[10]=(M*C-P*L+x*N)*z,e[11]=(f*L-m*C-v*N)*z,e[12]=(c*O-l*j-h*T)*z,e[13]=(t*j-n*O+i*T)*z,e[14]=(P*k-M*D-S*N)*z,e[15]=(m*D-f*k+g*N)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,l=e.x,c=e.y,h=e.z,d=s*l,m=s*c;return this.set(d*l+n,d*c-i*h,d*h+i*c,0,d*c+i*h,m*c+n,m*h-i*l,0,d*h-i*c,m*h+i*l,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,l){return this.set(1,n,s,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,l=t._y,c=t._z,h=t._w,d=s+s,m=l+l,f=c+c,g=s*d,v=s*m,M=s*f,P=l*m,S=l*f,x=c*f,N=h*d,k=h*m,L=h*f,D=n.x,C=n.y,B=n.z;return i[0]=(1-(P+x))*D,i[1]=(v+L)*D,i[2]=(M-k)*D,i[3]=0,i[4]=(v-L)*C,i[5]=(1-(g+x))*C,i[6]=(S+N)*C,i[7]=0,i[8]=(M+k)*B,i[9]=(S-N)*B,i[10]=(1-(g+P))*B,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let l=hr.set(i[0],i[1],i[2]).length();const c=hr.set(i[4],i[5],i[6]).length(),h=hr.set(i[8],i[9],i[10]).length();s<0&&(l=-l),Wn.copy(this);const d=1/l,m=1/c,f=1/h;return Wn.elements[0]*=d,Wn.elements[1]*=d,Wn.elements[2]*=d,Wn.elements[4]*=m,Wn.elements[5]*=m,Wn.elements[6]*=m,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,t.setFromRotationMatrix(Wn),n.x=l,n.y=c,n.z=h,this}makePerspective(e,t,n,i,s,l,c=hi,h=!1){const d=this.elements,m=2*s/(t-e),f=2*s/(n-i),g=(t+e)/(t-e),v=(n+i)/(n-i);let M,P;if(h)M=s/(l-s),P=l*s/(l-s);else if(c===hi)M=-(l+s)/(l-s),P=-2*l*s/(l-s);else if(c===ws)M=-l/(l-s),P=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=m,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=f,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=P,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,i,s,l,c=hi,h=!1){const d=this.elements,m=2/(t-e),f=2/(n-i),g=-(t+e)/(t-e),v=-(n+i)/(n-i);let M,P;if(h)M=1/(l-s),P=l/(l-s);else if(c===hi)M=-2/(l-s),P=-(l+s)/(l-s);else if(c===ws)M=-1/(l-s),P=-s/(l-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=m,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=f,d[9]=0,d[13]=v,d[2]=0,d[6]=0,d[10]=M,d[14]=P,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hr=new $,Wn=new lt,c0=new $(0,0,0),u0=new $(1,1,1),Ni=new $,ta=new $,Rn=new $,Fu=new lt,Uu=new Dn;class Ci{constructor(e=0,t=0,n=0,i=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],f=i[2],g=i[6],v=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-m,v),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h0=0;const Ou=new $,dr=new Dn,vi=new lt,na=new $,ts=new $,d0=new $,f0=new Dn,ku=new $(1,0,0),Bu=new $(0,1,0),zu=new $(0,0,1),Hu={type:"added"},p0={type:"removed"},fr={type:"childadded",child:null},To={type:"childremoved",child:null};class Gt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new $,t=new Ci,n=new Dn,i=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new st}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?na.copy(e):na.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ts,na,this.up):vi.lookAt(na,ts,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),dr.setFromRotationMatrix(vi),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hu),fr.child=e,this.dispatchEvent(fr),fr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p0),To.child=e,this.dispatchEvent(To),To.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hu),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,d0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(c=>({...c})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const f=h[d];s(e.shapes,f)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(s(e.materials,this.material[h]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];i.animations.push(s(e.animations,h))}}if(t){const c=l(e.geometries),h=l(e.materials),d=l(e.textures),m=l(e.images),f=l(e.shapes),g=l(e.skeletons),v=l(e.animations),M=l(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),m.length>0&&(n.images=m),f.length>0&&(n.shapes=f),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),M.length>0&&(n.nodes=M)}return n.object=i,n;function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gt.DEFAULT_UP=new $(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class di extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m0={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,l=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const P of e.hand.values()){const S=t.getJointPose(P,n),x=this._getHandJoint(d,P);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],g=m.position.distanceTo(f.position),v=.02,M=.005;d.inputState.pinching&&g>v+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=v-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return c!==null&&(c.visible=i!==null),h!==null&&(h.visible=s!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Ao(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=mc(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=Ao(l,s,e+1/3),this.g=Ao(l,s,e),this.b=Ao(l,s,e-1/3)}return vt.colorSpaceToWorking(this,i),this}setStyle(e,t=cn){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const l=i[1],c=i[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=cd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return vt.workingToColorSpace(fn.copy(this),e),Math.round(mt(fn.r*255,0,255))*65536+Math.round(mt(fn.g*255,0,255))*256+Math.round(mt(fn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,s=fn.b,l=Math.max(n,i,s),c=Math.min(n,i,s);let h,d;const m=(c+l)/2;if(c===l)h=0,d=0;else{const f=l-c;switch(d=m<=.5?f/(l+c):f/(2-l-c),l){case n:h=(i-s)/f+(i<s?6:0);break;case i:h=(s-n)/f+2;break;case s:h=(n-i)/f+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=cn){vt.workingToColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(ia);const n=xs(Fi.h,ia.h,t),i=xs(Fi.s,ia.s,t),s=xs(Fi.l,ia.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Xe;Xe.NAMES=cd;class vc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ud extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xn=new $,xi=new $,Ro=new $,yi=new $,pr=new $,mr=new $,Vu=new $,Co=new $,Po=new $,Lo=new $,Do=new Ot,Io=new Ot,No=new Ot;class Kn{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xn.subVectors(e,t),i.cross(Xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Xn.subVectors(i,t),xi.subVectors(n,t),Ro.subVectors(e,t);const l=Xn.dot(Xn),c=Xn.dot(xi),h=Xn.dot(Ro),d=xi.dot(xi),m=xi.dot(Ro),f=l*d-c*c;if(f===0)return s.set(0,0,0),null;const g=1/f,v=(d*h-c*m)*g,M=(l*m-c*h)*g;return s.set(1-v-M,M,v)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,i,s,l,c,h){return this.getBarycoord(e,t,n,i,yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,yi.x),h.addScaledVector(l,yi.y),h.addScaledVector(c,yi.z),h)}static getInterpolatedAttribute(e,t,n,i,s,l){return Do.setScalar(0),Io.setScalar(0),No.setScalar(0),Do.fromBufferAttribute(e,t),Io.fromBufferAttribute(e,n),No.fromBufferAttribute(e,i),l.setScalar(0),l.addScaledVector(Do,s.x),l.addScaledVector(Io,s.y),l.addScaledVector(No,s.z),l}static isFrontFacing(e,t,n,i){return Xn.subVectors(n,t),xi.subVectors(e,t),Xn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Xn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let l,c;pr.subVectors(i,n),mr.subVectors(s,n),Co.subVectors(e,n);const h=pr.dot(Co),d=mr.dot(Co);if(h<=0&&d<=0)return t.copy(n);Po.subVectors(e,i);const m=pr.dot(Po),f=mr.dot(Po);if(m>=0&&f<=m)return t.copy(i);const g=h*f-m*d;if(g<=0&&h>=0&&m<=0)return l=h/(h-m),t.copy(n).addScaledVector(pr,l);Lo.subVectors(e,s);const v=pr.dot(Lo),M=mr.dot(Lo);if(M>=0&&v<=M)return t.copy(s);const P=v*d-h*M;if(P<=0&&d>=0&&M<=0)return c=d/(d-M),t.copy(n).addScaledVector(mr,c);const S=m*M-v*f;if(S<=0&&f-m>=0&&v-M>=0)return Vu.subVectors(s,i),c=(f-m)/(f-m+(v-M)),t.copy(i).addScaledVector(Vu,c);const x=1/(S+P+g);return l=P*x,c=g*x,t.copy(n).addScaledVector(pr,l).addScaledVector(mr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pi{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=s.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,$n):$n.fromBufferAttribute(s,l),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}const i=e.children;for(let s=0,l=i.length;s<l;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),sa.subVectors(this.max,ns),gr.subVectors(e.a,ns),_r.subVectors(e.b,ns),vr.subVectors(e.c,ns),Ui.subVectors(_r,gr),Oi.subVectors(vr,_r),Zi.subVectors(gr,vr);let t=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-Zi.z,Zi.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,Zi.z,0,-Zi.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-Zi.y,Zi.x,0];return!Fo(t,gr,_r,vr,sa)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,gr,_r,vr,sa))?!1:(aa.crossVectors(Ui,Oi),t=[aa.x,aa.y,aa.z],Fo(t,gr,_r,vr,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new $,new $,new $,new $,new $,new $,new $,new $],$n=new $,ra=new Pi,gr=new $,_r=new $,vr=new $,Ui=new $,Oi=new $,Zi=new $,ns=new $,sa=new $,aa=new $,Ji=new $;function Fo(r,e,t,n,i){for(let s=0,l=r.length-3;s<=l;s+=3){Ji.fromArray(r,s);const c=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),h=e.dot(Ji),d=t.dot(Ji),m=n.dot(Ji);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>c)return!1}return!0}const Zt=new $,oa=new Ge;let g0=0;class mn extends Wi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sd,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class hd extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dd extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const _0=new Pi,is=new $,Uo=new $;class gi{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,l=e.length;s<l;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const t=is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(Uo)),this.expandByPoint(is.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let v0=0;const On=new lt,Oo=new Gt,xr=new $,Cn=new Pi,rs=new Pi,an=new $;class un extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uv(e)?dd:hd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const l=e[i];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const c=t[s];rs.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors(Cn.min,rs.min),Cn.expandByPoint(an),an.addVectors(Cn.max,rs.max),Cn.expandByPoint(an)):(Cn.expandByPoint(rs.min),Cn.expandByPoint(rs.max))}Cn.getCenter(n);let i=0;for(let s=0,l=e.count;s<l;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,l=t.length;s<l;s++){const c=t[s],h=this.morphTargetsRelative;for(let d=0,m=c.count;d<m;d++)an.fromBufferAttribute(c,d),h&&(xr.fromBufferAttribute(e,d),an.add(xr)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));const c=[],h=[];for(let T=0;T<n.count;T++)c[T]=new $,h[T]=new $;const d=new $,m=new $,f=new $,g=new Ge,v=new Ge,M=new Ge,P=new $,S=new $;function x(T,O,I){d.fromBufferAttribute(n,T),m.fromBufferAttribute(n,O),f.fromBufferAttribute(n,I),g.fromBufferAttribute(s,T),v.fromBufferAttribute(s,O),M.fromBufferAttribute(s,I),m.sub(d),f.sub(d),v.sub(g),M.sub(g);const j=1/(v.x*M.y-M.x*v.y);isFinite(j)&&(P.copy(m).multiplyScalar(M.y).addScaledVector(f,-v.y).multiplyScalar(j),S.copy(f).multiplyScalar(v.x).addScaledVector(m,-M.x).multiplyScalar(j),c[T].add(P),c[O].add(P),c[I].add(P),h[T].add(S),h[O].add(S),h[I].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let T=0,O=N.length;T<O;++T){const I=N[T],j=I.start,ie=I.count;for(let ae=j,V=j+ie;ae<V;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const k=new $,L=new $,D=new $,C=new $;function B(T){D.fromBufferAttribute(i,T),C.copy(D);const O=c[T];k.copy(O),k.sub(D.multiplyScalar(D.dot(O))).normalize(),L.crossVectors(C,O);const j=L.dot(h[T])<0?-1:1;l.setXYZW(T,k.x,k.y,k.z,j)}for(let T=0,O=N.length;T<O;++T){const I=N[T],j=I.start,ie=I.count;for(let ae=j,V=j+ie;ae<V;ae+=3)B(e.getX(ae+0)),B(e.getX(ae+1)),B(e.getX(ae+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const i=new $,s=new $,l=new $,c=new $,h=new $,d=new $,m=new $,f=new $;if(e)for(let g=0,v=e.count;g<v;g+=3){const M=e.getX(g+0),P=e.getX(g+1),S=e.getX(g+2);i.fromBufferAttribute(t,M),s.fromBufferAttribute(t,P),l.fromBufferAttribute(t,S),m.subVectors(l,s),f.subVectors(i,s),m.cross(f),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,S),c.add(m),h.add(m),d.add(m),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(P,h.x,h.y,h.z),n.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,v=t.count;g<v;g+=3)i.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),m.subVectors(l,s),f.subVectors(i,s),m.cross(f),n.setXYZ(g+0,m.x,m.y,m.z),n.setXYZ(g+1,m.x,m.y,m.z),n.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(c,h){const d=c.array,m=c.itemSize,f=c.normalized,g=new d.constructor(h.length*m);let v=0,M=0;for(let P=0,S=h.length;P<S;P++){c.isInterleavedBufferAttribute?v=h[P]*c.data.stride+c.offset:v=h[P]*m;for(let x=0;x<m;x++)g[M++]=d[v++]}return new mn(g,m,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,i=this.attributes;for(const c in i){const h=i[c],d=e(h,n);t.setAttribute(c,d)}const s=this.morphAttributes;for(const c in s){const h=[],d=s[c];for(let m=0,f=d.length;m<f;m++){const g=d[m],v=e(g,n);h.push(v)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const d=l[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const d=n[h];e.data.attributes[h]=d.toJSON(e.data)}const i={};let s=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let f=0,g=d.length;f<g;f++){const v=d[f];m.push(v.toJSON(e.data))}m.length>0&&(i[h]=m,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const d in i){const m=i[d];this.setAttribute(d,m.clone(t))}const s=e.morphAttributes;for(const d in s){const m=[],f=s[d];for(let g=0,v=f.length;g<v;g++)m.push(f[g].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,m=l.length;d<m;d++){const f=l[d];this.addGroup(f.start,f.count,f.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class x0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const vn=new $;class xc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Wa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Wa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ko=new $,y0=new $,S0=new st;class bi{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ko.subVectors(n,t).cross(y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ko),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||S0.getNormalMatrix(e),i=this.coplanarPoint(ko).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let M0=0;class Zn extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=_s,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=Kh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}if(t){const s=i(e.textures),l=i(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new bi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mi=new $,Bo=new $,la=new $,ca=new $;class zr{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bo.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),ca.copy(this.origin).sub(Bo);const s=e.distanceTo(t)*.5,l=-this.direction.dot(la),c=ca.dot(this.direction),h=-ca.dot(la),d=ca.lengthSq(),m=Math.abs(1-l*l);let f,g,v,M;if(m>0)if(f=l*h-c,g=l*c-h,M=s*m,f>=0)if(g>=-M)if(g<=M){const P=1/m;f*=P,g*=P,v=f*(f+l*g+2*c)+g*(l*f+g+2*h)+d}else g=s,f=Math.max(0,-(l*g+c)),v=-f*f+g*(g+2*h)+d;else g=-s,f=Math.max(0,-(l*g+c)),v=-f*f+g*(g+2*h)+d;else g<=-M?(f=Math.max(0,-(-l*s+c)),g=f>0?-s:Math.min(Math.max(-s,-h),s),v=-f*f+g*(g+2*h)+d):g<=M?(f=0,g=Math.min(Math.max(-s,-h),s),v=g*(g+2*h)+d):(f=Math.max(0,-(l*s+c)),g=f>0?s:Math.min(Math.max(-s,-h),s),v=-f*f+g*(g+2*h)+d);else g=l>0?-s:s,f=Math.max(0,-(l*g+c)),v=-f*f+g*(g+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Bo).addScaledVector(la,g),v}intersectSphere(e,t){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,s=e.radius*e.radius;if(i>s)return null;const l=Math.sqrt(s-i),c=n-l,h=n+l;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,l,c,h;const d=1/this.direction.x,m=1/this.direction.y,f=1/this.direction.z,g=this.origin;return d>=0?(n=(e.min.x-g.x)*d,i=(e.max.x-g.x)*d):(n=(e.max.x-g.x)*d,i=(e.min.x-g.x)*d),m>=0?(s=(e.min.y-g.y)*m,l=(e.max.y-g.y)*m):(s=(e.max.y-g.y)*m,l=(e.min.y-g.y)*m),n>l||s>i||((s>n||isNaN(n))&&(n=s),(l<i||isNaN(i))&&(i=l),f>=0?(c=(e.min.z-g.z)*f,h=(e.max.z-g.z)*f):(c=(e.max.z-g.z)*f,h=(e.min.z-g.z)*f),n>h||c>i)||((c>n||n!==n)&&(n=c),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,i,s){const l=this.origin,c=this.direction,h=c.x,d=c.y,m=c.z,f=e.x-l.x,g=e.y-l.y,v=e.z-l.z,M=t.x-l.x,P=t.y-l.y,S=t.z-l.z,x=n.x-l.x,N=n.y-l.y,k=n.z-l.z,L=Math.abs(h),D=Math.abs(d),C=Math.abs(m);let B,T,O,I,j,ie,ae,V,z,J,se,ce;if(L>=D&&L>=C?(O=h,ie=f,z=M,ce=x,h>=0?(B=d,T=m,I=g,j=v,ae=P,V=S,J=N,se=k):(B=m,T=d,I=v,j=g,ae=S,V=P,J=k,se=N)):D>=C?(O=d,ie=g,z=P,ce=N,d>=0?(B=m,T=h,I=v,j=f,ae=S,V=M,J=k,se=x):(B=h,T=m,I=f,j=v,ae=M,V=S,J=x,se=k)):(O=m,ie=v,z=S,ce=k,m>=0?(B=h,T=d,I=f,j=g,ae=M,V=P,J=x,se=N):(B=d,T=h,I=g,j=f,ae=P,V=M,J=N,se=x)),O===0)return null;const oe=B/O,pe=T/O,me=1/O,ke=I-oe*ie,Ie=j-pe*ie,Fe=ae-oe*z,Ke=V-pe*z,at=J-oe*ce,le=se-pe*ce,Z=at*Ke-le*Fe,xe=ke*le-Ie*at,tt=Fe*Ie-Ke*ke;if(i){if(Z<0||xe<0||tt<0)return null}else if((Z<0||xe<0||tt<0)&&(Z>0||xe>0||tt>0))return null;const Ne=Z+xe+tt;if(Ne===0)return null;const Je=me*(Z*ie+xe*z+tt*ce);return(Ne>0?Je<0:Je>0)?null:this.at(Je/Ne,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vi extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gu=new lt,Qi=new zr,ua=new gi,Wu=new $,ha=new $,da=new $,fa=new $,zo=new $,pa=new $,Xu=new $,ma=new $;class Bt extends Gt{constructor(e=new un,t=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){pa.set(0,0,0);for(let h=0,d=s.length;h<d;h++){const m=c[h],f=s[h];m!==0&&(zo.fromBufferAttribute(f,e),l?pa.addScaledVector(zo,m):pa.addScaledVector(zo.sub(t),m))}t.add(pa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(ua.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ua,Wu)===null||Qi.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Gu.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,l=this.material,c=s.index,h=s.attributes.position,d=s.attributes.uv,m=s.attributes.uv1,f=s.attributes.normal,g=s.groups,v=s.drawRange;if(c!==null)if(Array.isArray(l))for(let M=0,P=g.length;M<P;M++){const S=g[M],x=l[S.materialIndex],N=Math.max(S.start,v.start),k=Math.min(c.count,Math.min(S.start+S.count,v.start+v.count));for(let L=N,D=k;L<D;L+=3){const C=c.getX(L),B=c.getX(L+1),T=c.getX(L+2);i=ga(this,x,e,n,d,m,f,C,B,T),i&&(i.faceIndex=Math.floor(L/3),i.face.materialIndex=S.materialIndex,t.push(i))}}else{const M=Math.max(0,v.start),P=Math.min(c.count,v.start+v.count);for(let S=M,x=P;S<x;S+=3){const N=c.getX(S),k=c.getX(S+1),L=c.getX(S+2);i=ga(this,l,e,n,d,m,f,N,k,L),i&&(i.faceIndex=Math.floor(S/3),t.push(i))}}else if(h!==void 0)if(Array.isArray(l))for(let M=0,P=g.length;M<P;M++){const S=g[M],x=l[S.materialIndex],N=Math.max(S.start,v.start),k=Math.min(h.count,Math.min(S.start+S.count,v.start+v.count));for(let L=N,D=k;L<D;L+=3){const C=L,B=L+1,T=L+2;i=ga(this,x,e,n,d,m,f,C,B,T),i&&(i.faceIndex=Math.floor(L/3),i.face.materialIndex=S.materialIndex,t.push(i))}}else{const M=Math.max(0,v.start),P=Math.min(h.count,v.start+v.count);for(let S=M,x=P;S<x;S+=3){const N=S,k=S+1,L=S+2;i=ga(this,l,e,n,d,m,f,N,k,L),i&&(i.faceIndex=Math.floor(S/3),t.push(i))}}}}function E0(r,e,t,n,i,s,l,c){let h;if(e.side===pn?h=n.intersectTriangle(l,s,i,!0,c):h=n.intersectTriangle(i,s,l,e.side===Gi,c),h===null)return null;ma.copy(c),ma.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(ma);return d<t.near||d>t.far?null:{distance:d,point:ma.clone(),object:r}}function ga(r,e,t,n,i,s,l,c,h,d){r.getVertexPosition(c,ha),r.getVertexPosition(h,da),r.getVertexPosition(d,fa);const m=E0(r,e,t,n,ha,da,fa,Xu);if(m){const f=new $;Kn.getBarycoord(Xu,ha,da,fa,f),i&&(m.uv=Kn.getInterpolatedAttribute(i,c,h,d,f,new Ge)),s&&(m.uv1=Kn.getInterpolatedAttribute(s,c,h,d,f,new Ge)),l&&(m.normal=Kn.getInterpolatedAttribute(l,c,h,d,f,new $),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const g={a:c,b:h,c:d,normal:new $,materialIndex:0};Kn.getNormal(ha,da,fa,g.normal),m.face=g,m.barycoord=f}return m}const ss=new Ot,$u=new Ot,qu=new Ot,b0=new Ot,Yu=new lt,_a=new $,Ho=new gi,Ku=new lt,Vo=new zr;class T0 extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bu,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingBox.expandByPoint(_a)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingSphere.expandByPoint(_a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(i),e.ray.intersectsSphere(Ho)!==!1&&(Ku.copy(i).invert(),Vo.copy(e.ray).applyMatrix4(Ku),!(this.boundingBox!==null&&Vo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bv?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;$u.fromBufferAttribute(i.attributes.skinIndex,e),qu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ss.copy(t),t.set(0,0,0,0)):(ss.set(...t,1),t.set(0,0,0)),ss.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const l=qu.getComponent(s);if(l!==0){const c=$u.getComponent(s);Yu.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(b0.copy(ss).applyMatrix4(Yu),l)}}return t.isVector4&&(t.w=ss.w),t.applyMatrix4(this.bindMatrixInverse)}}class fd extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yc extends on{constructor(e=null,t=1,n=1,i,s,l,c,h,d=en,m=en,f,g){super(null,l,c,h,d,m,i,s,f,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ju=new lt,w0=new lt;class Sc{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new lt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,l=e.length;s<l;s++){const c=e[s]?e[s].matrixWorld:w0;ju.multiplyMatrices(c,t[s]),ju.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Sc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new yc(t,e,e,Hn,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let l=t[s];l===void 0&&(Ye("Skeleton: No bone found with UUID:",s),l=new fd),this.bones.push(l),this.boneInverses.push(new lt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const l=t[i];e.bones.push(l.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Xa extends mn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yr=new lt,Zu=new lt,va=[],Ju=new Pi,A0=new lt,as=new Bt,os=new gi;class pd extends Bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,A0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),Ju.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(Ju)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),os.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,l=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[l+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(n),e.ray.intersectsSphere(os)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,yr),Zu.multiplyMatrices(n,yr),as.matrixWorld=Zu,as.raycast(e,va);for(let l=0,c=va.length;l<c;l++){const h=va[l];h.instanceId=s,h.object=this,t.push(h)}va.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new yc(new Float32Array(i*this.count),i,this.count,cc,zn));const s=this.morphTexture.source.data.data;let l=0;for(let d=0;d<n.length;d++)l+=n[d];const c=this.geometry.morphTargetsRelative?1:1-l,h=i*e;return s[h]=c,s.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const er=new gi,R0=new Ge(.5,.5),xa=new $;class Mc{constructor(e=new bi,t=new bi,n=new bi,i=new bi,s=new bi,l=new bi){this.planes=[e,t,n,i,s,l]}set(e,t,n,i,s,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi,n=!1){const i=this.planes,s=e.elements,l=s[0],c=s[1],h=s[2],d=s[3],m=s[4],f=s[5],g=s[6],v=s[7],M=s[8],P=s[9],S=s[10],x=s[11],N=s[12],k=s[13],L=s[14],D=s[15];if(i[0].setComponents(d-l,v-m,x-M,D-N).normalize(),i[1].setComponents(d+l,v+m,x+M,D+N).normalize(),i[2].setComponents(d+c,v+f,x+P,D+k).normalize(),i[3].setComponents(d-c,v-f,x-P,D-k).normalize(),n)i[4].setComponents(h,g,S,L).normalize(),i[5].setComponents(d-h,v-g,x-S,D-L).normalize();else if(i[4].setComponents(d-h,v-g,x-S,D-L).normalize(),t===hi)i[5].setComponents(d+h,v+g,x+S,D+L).normalize();else if(t===ws)i[5].setComponents(h,g,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);const t=R0.distanceTo(e.center);return er.radius=.7071067811865476+t,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(xa.x=i.normal.x>0?e.max.x:e.min.x,xa.y=i.normal.y>0?e.max.y:e.min.y,xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class md extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $a=new $,qa=new $,Qu=new lt,ls=new zr,ya=new gi,Go=new $,eh=new $;class Ec extends Gt{constructor(e=new un,t=new md){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)$a.fromBufferAttribute(t,i-1),qa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$a.distanceTo(qa);e.setAttribute("lineDistance",new nn(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=s,e.ray.intersectsSphere(ya)===!1)return;Qu.copy(i).invert(),ls.copy(e.ray).applyMatrix4(Qu);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const v=Math.max(0,l.start),M=Math.min(m.count,l.start+l.count);for(let P=v,S=M-1;P<S;P+=d){const x=m.getX(P),N=m.getX(P+1),k=Sa(this,e,ls,h,x,N,P);k&&t.push(k)}if(this.isLineLoop){const P=m.getX(M-1),S=m.getX(v),x=Sa(this,e,ls,h,P,S,M-1);x&&t.push(x)}}else{const v=Math.max(0,l.start),M=Math.min(g.count,l.start+l.count);for(let P=v,S=M-1;P<S;P+=d){const x=Sa(this,e,ls,h,P,P+1,P);x&&t.push(x)}if(this.isLineLoop){const P=Sa(this,e,ls,h,M-1,v,M-1);P&&t.push(P)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Sa(r,e,t,n,i,s,l){const c=r.geometry.attributes.position;if($a.fromBufferAttribute(c,i),qa.fromBufferAttribute(c,s),t.distanceSqToSegment($a,qa,Go,eh)>n)return;Go.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(Go);if(!(d<e.near||d>e.far))return{distance:d,point:eh.clone().applyMatrix4(r.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:r}}const th=new $,nh=new $;class C0 extends Ec{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)th.fromBufferAttribute(t,i),nh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+th.distanceTo(nh);e.setAttribute("lineDistance",new nn(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class P0 extends Ec{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gd extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ih=new lt,Gl=new zr,Ma=new gi,Ea=new $;class _d extends Gt{constructor(e=new un,t=new gd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=s,e.ray.intersectsSphere(Ma)===!1)return;ih.copy(i).invert(),Gl.copy(e.ray).applyMatrix4(ih);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=n.index,f=n.attributes.position;if(d!==null){const g=Math.max(0,l.start),v=Math.min(d.count,l.start+l.count);for(let M=g,P=v;M<P;M++){const S=d.getX(M);Ea.fromBufferAttribute(f,S),rh(Ea,S,h,i,e,t,this)}}else{const g=Math.max(0,l.start),v=Math.min(f.count,l.start+l.count);for(let M=g,P=v;M<P;M++)Ea.fromBufferAttribute(f,M),rh(Ea,M,h,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function rh(r,e,t,n,i,s,l){const c=Gl.distanceSqToPoint(r);if(c<t){const h=new $;Gl.closestPointToPoint(r,h),h.applyMatrix4(n);const d=i.ray.origin.distanceTo(h);if(d<i.near||d>i.far)return;s.push({distance:d,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class vd extends on{constructor(e=[],t=sr,n,i,s,l,c,h,d,m){super(e,t,n,i,s,l,c,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rs extends on{constructor(e,t,n=mi,i,s,l,c=en,h=en,d,m=Ri,f=1){if(m!==Ri&&m!==rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:f};super(g,i,s,l,c,h,m,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class L0 extends Rs{constructor(e,t=mi,n=sr,i,s,l=en,c=en,h,d=Ri){const m={width:e,height:e,depth:1},f=[m,m,m,m,m,m];super(e,e,t,n,i,s,l,c,h,d),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xd extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hr extends un{constructor(e=1,t=1,n=1,i=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:l};const c=this;i=Math.floor(i),s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],f=[];let g=0,v=0;M("z","y","x",-1,-1,n,t,e,l,s,0),M("z","y","x",1,-1,n,t,-e,l,s,1),M("x","z","y",1,1,e,n,t,i,l,2),M("x","z","y",1,-1,e,n,-t,i,l,3),M("x","y","z",1,-1,e,t,n,i,s,4),M("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(h),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(m,3)),this.setAttribute("uv",new nn(f,2));function M(P,S,x,N,k,L,D,C,B,T,O){const I=L/B,j=D/T,ie=L/2,ae=D/2,V=C/2,z=B+1,J=T+1;let se=0,ce=0;const oe=new $;for(let pe=0;pe<J;pe++){const me=pe*j-ae;for(let ke=0;ke<z;ke++){const Ie=ke*I-ie;oe[P]=Ie*N,oe[S]=me*k,oe[x]=V,d.push(oe.x,oe.y,oe.z),oe[P]=0,oe[S]=0,oe[x]=C>0?1:-1,m.push(oe.x,oe.y,oe.z),f.push(ke/B),f.push(1-pe/T),se+=1}}for(let pe=0;pe<T;pe++)for(let me=0;me<B;me++){const ke=g+me+z*pe,Ie=g+me+z*(pe+1),Fe=g+(me+1)+z*(pe+1),Ke=g+(me+1)+z*pe;h.push(ke,Ie,Ke),h.push(Ie,Fe,Ke),ce+=6}c.addGroup(v,ce,O),v+=ce,g+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bc extends un{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],l=[],c=[],h=[],d=new $,m=new Ge;l.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let f=0,g=3;f<=t;f++,g+=3){const v=n+f/t*i;d.x=e*Math.cos(v),d.y=e*Math.sin(v),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(l[g]/e+1)/2,m.y=(l[g+1]/e+1)/2,h.push(m.x,m.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new nn(l,3)),this.setAttribute("normal",new nn(c,3)),this.setAttribute("uv",new nn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class or extends un{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,l=t/2,c=Math.floor(n),h=Math.floor(i),d=c+1,m=h+1,f=e/c,g=t/h,v=[],M=[],P=[],S=[];for(let x=0;x<m;x++){const N=x*g-l;for(let k=0;k<d;k++){const L=k*f-s;M.push(L,-N,0),P.push(0,0,1),S.push(k/c),S.push(1-x/h)}}for(let x=0;x<h;x++)for(let N=0;N<c;N++){const k=N+d*x,L=N+d*(x+1),D=N+1+d*(x+1),C=N+1+d*x;v.push(k,L,C),v.push(L,D,C)}this.setIndex(v),this.setAttribute("position",new nn(M,3)),this.setAttribute("normal",new nn(P,3)),this.setAttribute("uv",new nn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tc extends un{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(l+c,Math.PI);let d=0;const m=[],f=new $,g=new $,v=[],M=[],P=[],S=[];for(let x=0;x<=n;x++){const N=[],k=x/n,L=l+k*c,D=e*Math.cos(L),C=Math.sqrt(e*e-D*D);let B=0;x===0&&l===0?B=.5/t:x===n&&h===Math.PI&&(B=-.5/t);for(let T=0;T<=t;T++){const O=T/t,I=i+O*s;f.x=-C*Math.cos(I),f.y=D,f.z=C*Math.sin(I),M.push(f.x,f.y,f.z),g.copy(f).normalize(),P.push(g.x,g.y,g.z),S.push(O+B,1-k),N.push(d++)}m.push(N)}for(let x=0;x<n;x++)for(let N=0;N<t;N++){const k=m[x][N+1],L=m[x][N],D=m[x+1][N],C=m[x+1][N+1];(x!==0||l>0)&&v.push(k,L,C),(x!==n-1||h<Math.PI)&&v.push(L,D,C)}this.setIndex(v),this.setAttribute("position",new nn(M,3)),this.setAttribute("normal",new nn(P,3)),this.setAttribute("uv",new nn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Or(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(sh(i))i.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(sh(i[0])){const s=[];for(let l=0,c=i.length;l<c;l++)s[l]=i[l].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function xn(r){const e={};for(let t=0;t<r.length;t++){const n=Or(r[t]);for(const i in n)e[i]=n[i]}return e}function sh(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function D0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Cs={clone:Or,merge:xn};var I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qt extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=N0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"v3":this.uniforms[n].value=new $().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"m3":this.uniforms[n].value=new st().fromArray(i.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Sd extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kr extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jn extends kr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class F0 extends Zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Ql,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U0 extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O0 extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function zi(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Fa(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function k0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ah(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,l=0;l!==n;++s){const c=t[s]*e;for(let h=0;h!==e;++h)i[l++]=r[c+h]}return i}function B0(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let l=s[n];if(l!==void 0)if(Array.isArray(l))do l=s[n],l!==void 0&&(e.push(s.time),t.push(...l)),s=r[i++];while(s!==void 0);else if(l.toArray!==void 0)do l=s[n],l!==void 0&&(e.push(s.time),l.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do l=s[n],l!==void 0&&(e.push(s.time),t.push(l)),s=r[i++];while(s!==void 0)}class Vr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let l;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}l=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let h=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(i=s,s=t[--n-1],e>=s)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let l=0;l!==i;++l)t[l]=n[s+l];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class z0 extends Vr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,l=e+1,c=i[s],h=i[l];if(c===void 0)switch(this.getSettings_().endingStart){case Au:s=e,c=2*t-n;break;case Ru:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Au:l=e,h=2*n-t;break;case Ru:l=1,h=n+i[1]-i[0];break;default:l=e-1,h=t}const d=(n-t)*.5,m=this.valueSize;this._weightPrev=d/(t-c),this._weightNext=d/(h-n),this._offsetPrev=s*m,this._offsetNext=l*m}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=e*c,d=h-c,m=this._offsetPrev,f=this._offsetNext,g=this._weightPrev,v=this._weightNext,M=(n-t)/(i-t),P=M*M,S=P*M,x=-g*S+2*g*P-g*M,N=(1+g)*S+(-1.5-2*g)*P+(-.5+g)*M+1,k=(-1-v)*S+(1.5+v)*P+.5*M,L=v*S-v*P;for(let D=0;D!==c;++D)s[D]=x*l[m+D]+N*l[d+D]+k*l[h+D]+L*l[f+D];return s}}class H0 extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=e*c,d=h-c,m=(n-t)/(i-t),f=1-m;for(let g=0;g!==c;++g)s[g]=l[d+g]*f+l[h+g]*m;return s}}class V0 extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class G0 extends Vr{interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=e*c,d=h-c,m=this.inTangents,f=this.outTangents;if(!m||!f){const M=(n-t)/(i-t),P=1-M;for(let S=0;S!==c;++S)s[S]=l[d+S]*P+l[h+S]*M;return s}const g=c*2,v=e-1;for(let M=0;M!==c;++M){const P=l[d+M],S=l[h+M],x=v*g+M*2,N=f[x],k=f[x+1],L=e*g+M*2,D=m[L],C=m[L+1],B=X0(n,t,N,D,i);s[M]=Md(B,P,k,C,S)}return s}}function Md(r,e,t,n,i){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function W0(r,e,t,n,i){const s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function X0(r,e,t,n,i){let s=(r-e)/(i-e);for(let l=0;l<8;l++){const c=Md(s,e,t,n,i)-r;if(Math.abs(c)<1e-10)break;const h=W0(s,e,t,n,i);if(Math.abs(h)<1e-10)break;s=Math.max(0,Math.min(1,s-c/h))}return s}class Qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zi(t,this.TimeBufferType),this.values=zi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zi(e.times,Array),values:zi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Fa(e.settings)&&(n.settings={inTangents:zi(e.settings.inTangents,Array),outTangents:zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new V0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new H0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new z0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new G0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Ts:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break;case Tu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return xo;case this.InterpolantFactoryMethodBezier:return Tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Fa(this.settings)&&(oh(this.settings.inTangents,e),oh(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,l=i-1;for(;s!==i&&n[s]<e;)++s;for(;l!==-1&&n[l]>t;)--l;if(++l,s!==0||l!==i){s>=l&&(l=Math.max(l,1),s=l-1);const c=this.getValueSize();this.times=n.slice(s,l),this.values=this.values.slice(s*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==s;c++){const h=n[c];if(typeof h=="number"&&isNaN(h)){et("KeyframeTrack: Time is not a valid number.",this,c,h),e=!1;break}if(l!==null&&l>h){et("KeyframeTrack: Out of order keys.",this,c,h,l),e=!1;break}l=h}if(i!==void 0&&Ov(i))for(let c=0,h=i.length;c!==h;++c){const d=i[c];if(isNaN(d)){et("KeyframeTrack: Value is not a valid number.",this,c,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xo,s=e.length-1;let l=1;for(let c=1;c<s;++c){let h=!1;const d=e[c],m=e[c+1];if(d!==m&&(c!==1||d!==e[0]))if(i)h=!0;else{const f=c*n,g=f-n,v=f+n;for(let M=0;M!==n;++M){const P=t[f+M];if(P!==t[g+M]||P!==t[v+M]){h=!0;break}}}if(h){if(c!==l){e[l]=e[c];const f=c*n,g=l*n;for(let v=0;v!==n;++v)t[g+v]=t[f+v]}++l}}if(s>0){e[l]=e[s];for(let c=s*n,h=l*n,d=0;d!==n;++d)t[h+d]=t[c+d];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Fa(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function oh(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Ts;class Gr extends Qn{constructor(e,t,n){super(e,t,n)}}Gr.prototype.ValueTypeName="bool";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=bs;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ed extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}Ed.prototype.ValueTypeName="color";class Ps extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}Ps.prototype.ValueTypeName="number";class $0 extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=(n-t)/(i-t);let d=e*c;for(let m=d+c;d!==m;d+=4)Dn.slerpFlat(s,0,l,d-c,l,d,h);return s}}class Ls extends Qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new $0(this.times,this.values,this.getValueSize(),e)}}Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Wr extends Qn{constructor(e,t,n){super(e,t,n)}}Wr.prototype.ValueTypeName="string";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=bs;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ya extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}Ya.prototype.ValueTypeName="vector";class q0{constructor(e="",t=-1,n=[],i=Tv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(K0(n[l]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,l=n.length;s!==l;++s)t.push(Qn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,l=[];for(let c=0;c<s;c++){let h=[],d=[];h.push((c+s-1)%s,c,(c+1)%s),d.push(0,1,0);const m=k0(h);h=ah(h,1,m),d=ah(d,1,m),!i&&h[0]===0&&(h.push(s),d.push(d[0])),l.push(new Ps(".morphTargetInfluences["+t[c].name+"]",h,d).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,h=e.length;c<h;c++){const d=e[c],m=d.name.match(s);if(m&&m.length>1){const f=m[1];let g=i[f];g||(i[f]=g=[]),g.push(d)}}const l=[];for(const c in i)l.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return l}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Y0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Ya;case"color":return Ed;case"quaternion":return Ls;case"bool":case"boolean":return Gr;case"string":return Wr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function K0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Y0(r.type);if(r.times===void 0){const n=[],i=[];B0(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Fa(r.settings)&&(t.settings={inTangents:zi(r.settings.inTangents,Float32Array),outTangents:zi(r.settings.outTangents,Float32Array)}),t}const wi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(lh(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!lh(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function lh(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class j0{constructor(e,t,n){const i=this;let s=!1,l=0,c=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(m){c++,s===!1&&i.onStart!==void 0&&i.onStart(m,l,c),s=!0},this.itemEnd=function(m){l++,i.onProgress!==void 0&&i.onProgress(m,l,c),l===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(m){i.onError!==void 0&&i.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,f){return d.push(m,f),this},this.removeHandler=function(m){const f=d.indexOf(m);return f!==-1&&d.splice(f,2),this},this.getHandler=function(m){for(let f=0,g=d.length;f<g;f+=2){const v=d[f],M=d[f+1];if(v.global&&(v.lastIndex=0),v.test(m))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Z0=new j0;class Xr{constructor(e){this.manager=e!==void 0?e:Z0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei={};class J0 extends Error{constructor(e,t){super(e),this.response=t}}class bd extends Xr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=wi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:i});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:i});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,h=this.responseType;fetch(l).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const m=Ei[e],f=d.body.getReader(),g=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),v=g?parseInt(g):0,M=v!==0;let P=0;const S=new ReadableStream({start(x){N();function N(){f.read().then(({done:k,value:L})=>{if(k)x.close();else{P+=L.byteLength;const D=new ProgressEvent("progress",{lengthComputable:M,loaded:P,total:v});for(let C=0,B=m.length;C<B;C++){const T=m[C];T.onProgress&&T.onProgress(D)}x.enqueue(L),N()}},k=>{x.error(k)})}}});return new Response(S)}else throw new J0(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(m=>new DOMParser().parseFromString(m,c));case"json":return d.json();default:if(c==="")return d.text();{const f=/charset="?([^;"\s]*)"?/i.exec(c),g=f&&f[1]?f[1].toLowerCase():void 0,v=new TextDecoder(g);return d.arrayBuffer().then(M=>v.decode(M))}}}).then(d=>{wi.add(`file:${e}`,d);const m=Ei[e];delete Ei[e];for(let f=0,g=m.length;f<g;f++){const v=m[f];v.onLoad&&v.onLoad(d)}}).catch(d=>{const m=Ei[e];if(m===void 0)throw this.manager.itemError(e),d;delete Ei[e];for(let f=0,g=m.length;f<g;f++){const v=m[f];v.onError&&v.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Sr=new WeakMap;class Q0 extends Xr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=wi.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0);else{let f=Sr.get(l);f===void 0&&(f=[],Sr.set(l,f)),f.push({onLoad:t,onError:i})}return l}const c=As("img");function h(){m(),t&&t(this);const f=Sr.get(this)||[];for(let g=0;g<f.length;g++){const v=f[g];v.onLoad&&v.onLoad(this)}Sr.delete(this),s.manager.itemEnd(e)}function d(f){m(),i&&i(f),wi.remove(`image:${e}`);const g=Sr.get(this)||[];for(let v=0;v<g.length;v++){const M=g[v];M.onError&&M.onError(f)}Sr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function m(){c.removeEventListener("load",h,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),wi.add(`image:${e}`,c),s.manager.itemStart(e),c.src=e,c}}class ex extends Xr{constructor(e){super(e)}load(e,t,n,i){const s=new on,l=new Q0(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ja extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class tx extends Ja{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wo=new lt,ch=new $,uh=new $;class wc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mc,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(ch),uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wo,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,l=i?i.z/s.x:1,c=i?i.w/s.y:1,h=i?i.x/s.x:0,d=i?i.y/s.y:0;e.coordinateSystem===ws||e.reversedDepth?t.set(.5*l,0,0,.5*l+h,0,.5*c,0,.5*c+d,0,0,1,0,0,0,0,1):t.set(.5*l,0,0,.5*l+h,0,.5*c,0,.5*c+d,0,0,.5,.5,0,0,0,1),t.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ba=new $,Ta=new Dn,ai=new $;class Td extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ba,Ta,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ta,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ba,Ta,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ta,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ki=new $,hh=new Ge,dh=new Ge;class yn extends Td{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,hh,dh),t.subVectors(dh,hh)}setViewOffset(e,t,n,i,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,d=l.fullHeight;s+=l.offsetX*i/h,t-=l.offsetY*n/d,i*=l.width/h,n*=l.height/d}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nx extends wc{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ur*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class ix extends Ja{constructor(e,t,n=0,i=Math.PI/3,s=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=l,this.map=null,this.shadow=new nx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class rx extends wc{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ac extends Ja{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Is extends Td{constructor(e=-1,t=1,n=1,i=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,l=n+e,c=i+t,h=i-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,l=s+d*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(s,l,c,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sx extends wc{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wl extends Ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new sx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ys{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Xo=new WeakMap;class ax extends Xr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=wi.get(`image-bitmap:${e}`);if(l!==void 0){if(s.manager.itemStart(e),l.then){l.then(d=>{Xo.has(l)===!0?(i&&i(Xo.get(l)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(d),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0);return}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(e,c).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(d){return wi.add(`image-bitmap:${e}`,d),t&&t(d),s.manager.itemEnd(e),d}).catch(function(d){i&&i(d),Xo.set(h,d),wi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});wi.add(`image-bitmap:${e}`,h),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Mr=-90,Er=1;class ox extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(Mr,Er,e,t);i.layers=this.layers,this.add(i);const s=new yn(Mr,Er,e,t);s.layers=this.layers,this.add(s);const l=new yn(Mr,Er,e,t);l.layers=this.layers,this.add(l);const c=new yn(Mr,Er,e,t);c.layers=this.layers,this.add(c);const h=new yn(Mr,Er,e,t);h.layers=this.layers,this.add(h);const d=new yn(Mr,Er,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,l,c,h]=t;for(const d of t)this.remove(d);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,l,c,h,d,m]=this.children,f=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,4,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),n.texture.generateMipmaps=P,e.setRenderTarget(n,5,i),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(f,g,v),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class lx extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cx{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ux.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ux(){this._document.hidden===!1&&this.reset()}const Rc="\\[\\]\\.:\\/",hx=new RegExp("["+Rc+"]","g"),Cc="[^"+Rc+"]",dx="[^"+Rc.replace("\\.","")+"]",fx=/((?:WC+[\/:])*)/.source.replace("WC",Cc),px=/(WCOD+)?/.source.replace("WCOD",dx),mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),_x=new RegExp("^"+fx+px+mx+gx+"$"),vx=["material","materials","bones","map"];class xx{constructor(e,t,n){const i=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Dt{constructor(e,t,n){this.path=t,this.parsedPath=n||Dt.parseTrackName(t),this.node=Dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Dt.Composite(e,t,n):new Dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hx,"")}static parseTrackName(e){const t=_x.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);vx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let l=0;l<s.length;l++){const c=s[l];if(c.name===t||c.uuid===t)return c;const h=n(c.children);if(h)return h}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===d){d=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const l=e[i];if(l===void 0){const d=t.nodeName;et("PropertyBinding: Trying to update property for track: "+d+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=s}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=i;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Dt.Composite=xx;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const fh=new lt;class yx{constructor(e,t,n=0,i=1/0){this.ray=new zr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new _c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fh),this}intersectObject(e,t=!0,n=[]){return Xl(e,this,n,t),n.sort(ph),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Xl(e[i],this,n,t);return n.sort(ph),n}}function ph(r,e){return r.distance-e.distance}function Xl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let l=0,c=s.length;l<c;l++)Xl(s[l],e,t,!0)}}class mh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wd{static{wd.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}class Sx extends Wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function gh(r,e,t,n){const i=Mx(n);switch(t){case nd:return r*e;case cc:return r*e/i.components*i.byteLength;case uc:return r*e/i.components*i.byteLength;case ar:return r*e*2/i.components*i.byteLength;case hc:return r*e*2/i.components*i.byteLength;case id:return r*e*3/i.components*i.byteLength;case Hn:return r*e*4/i.components*i.byteLength;case dc:return r*e*4/i.components*i.byteLength;case La:case Da:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fl:case ml:return Math.max(r,16)*Math.max(e,8)/4;case dl:case pl:return Math.max(r,8)*Math.max(e,8)/2;case gl:case _l:case xl:case yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vl:case za:case Sl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case bl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case wl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Al:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Il:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ul:case Ol:case kl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Bl:case zl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ha:case Hl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mx(r){switch(r){case Pn:case Jh:return{byteLength:1,components:1};case Ms:case Qh:case Tn:return{byteLength:2,components:1};case oc:case lc:return{byteLength:2,components:4};case mi:case ac:case zn:return{byteLength:4,components:1};case ed:case td:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);function Ad(){let r=null,e=!1,t=null,n=null;function i(s,l){n=r.requestAnimationFrame(i),t(s,l)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ex(r){const e=new WeakMap;function t(c,h){const d=c.array,m=c.usage,f=d.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,d,m),c.onUploadCallback();let v;if(d instanceof Float32Array)v=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)v=r.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=r.SHORT;else if(d instanceof Uint32Array)v=r.UNSIGNED_INT;else if(d instanceof Int32Array)v=r.INT;else if(d instanceof Int8Array)v=r.BYTE;else if(d instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function n(c,h,d){const m=h.array,f=h.updateRanges;if(r.bindBuffer(d,c),f.length===0)r.bufferSubData(d,0,m);else{f.sort((v,M)=>v.start-M.start);let g=0;for(let v=1;v<f.length;v++){const M=f[g],P=f[v];P.start<=M.start+M.count+1?M.count=Math.max(M.count,P.start+P.count-M.start):(++g,f[g]=P)}f.length=g+1;for(let v=0,M=f.length;v<M;v++){const P=f[v];r.bufferSubData(d,P.start*m.BYTES_PER_ELEMENT,m,P.start,P.count)}h.clearUpdateRanges()}h.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(r.deleteBuffer(h.buffer),e.delete(c))}function l(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,h),d.version=c.version}}return{get:i,remove:s,update:l}}var bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tx=`#ifdef USE_ALPHAHASH
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
#endif`,wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
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
#endif`,Lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
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
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
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
#endif`,kx=`#ifdef USE_BUMPMAP
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qx=`#define PI 3.141592653589793
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
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kx=`vec3 transformedNormal = objectNormal;
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
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hy=`#ifdef USE_GRADIENTMAP
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
}`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,my=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,gy=`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sy=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,My=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Ey=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,by=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ly=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ny=`#if defined( USE_POINTS_UV )
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
#endif`,Fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ky=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,By=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`#ifdef USE_MORPHTARGETS
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
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
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
#endif`,Yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,lS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,cS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,uS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hS=`#ifdef USE_SKINNING
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
#endif`,dS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fS=`#ifdef USE_SKINNING
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
#endif`,pS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_S=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vS=`#ifdef USE_TRANSMISSION
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
#endif`,xS=`#ifdef USE_TRANSMISSION
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
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ES=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TS=`uniform sampler2D t2D;
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
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`#include <common>
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
}`,LS=`#if DEPTH_PACKING == 3200
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
}`,DS=`#define DISTANCE
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
}`,IS=`#define DISTANCE
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`uniform float scale;
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
}`,OS=`uniform vec3 diffuse;
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
}`,kS=`#include <common>
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
}`,BS=`uniform vec3 diffuse;
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
}`,zS=`#define LAMBERT
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
}`,HS=`#define LAMBERT
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
}`,VS=`#define MATCAP
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
}`,GS=`#define MATCAP
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
}`,WS=`#define NORMAL
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
}`,XS=`#define NORMAL
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
}`,$S=`#define PHONG
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
}`,qS=`#define PHONG
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
}`,YS=`#define STANDARD
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
}`,KS=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,jS=`#define TOON
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
}`,ZS=`#define TOON
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
}`,JS=`uniform float size;
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
}`,QS=`uniform vec3 diffuse;
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
}`,eM=`#include <common>
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
}`,tM=`uniform vec3 color;
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
}`,nM=`uniform float rotation;
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
}`,iM=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:bx,alphahash_pars_fragment:Tx,alphamap_fragment:wx,alphamap_pars_fragment:Ax,alphatest_fragment:Rx,alphatest_pars_fragment:Cx,aomap_fragment:Px,aomap_pars_fragment:Lx,batching_pars_vertex:Dx,batching_vertex:Ix,begin_vertex:Nx,beginnormal_vertex:Fx,bsdfs:Ux,iridescence_fragment:Ox,bumpmap_pars_fragment:kx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Vx,color_fragment:Gx,color_pars_fragment:Wx,color_pars_vertex:Xx,color_vertex:$x,common:qx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:Kx,displacementmap_pars_vertex:jx,displacementmap_vertex:Zx,emissivemap_fragment:Jx,emissivemap_pars_fragment:Qx,colorspace_fragment:ey,colorspace_pars_fragment:ty,envmap_fragment:ny,envmap_common_pars_fragment:iy,envmap_pars_fragment:ry,envmap_pars_vertex:sy,envmap_physical_pars_fragment:gy,envmap_vertex:ay,fog_vertex:oy,fog_pars_vertex:ly,fog_fragment:cy,fog_pars_fragment:uy,gradientmap_pars_fragment:hy,lightmap_pars_fragment:dy,lights_lambert_fragment:fy,lights_lambert_pars_fragment:py,lights_pars_begin:my,lights_toon_fragment:_y,lights_toon_pars_fragment:vy,lights_phong_fragment:xy,lights_phong_pars_fragment:yy,lights_physical_fragment:Sy,lights_physical_pars_fragment:My,lights_fragment_begin:Ey,lights_fragment_maps:by,lights_fragment_end:Ty,lightprobes_pars_fragment:wy,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:Py,map_fragment:Ly,map_pars_fragment:Dy,map_particle_fragment:Iy,map_particle_pars_fragment:Ny,metalnessmap_fragment:Fy,metalnessmap_pars_fragment:Uy,morphinstance_vertex:Oy,morphcolor_vertex:ky,morphnormal_vertex:By,morphtarget_pars_vertex:zy,morphtarget_vertex:Hy,normal_fragment_begin:Vy,normal_fragment_maps:Gy,normal_pars_fragment:Wy,normal_pars_vertex:Xy,normal_vertex:$y,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:Yy,clearcoat_normal_fragment_maps:Ky,clearcoat_pars_fragment:jy,iridescence_pars_fragment:Zy,opaque_fragment:Jy,packing:Qy,premultiplied_alpha_fragment:eS,project_vertex:tS,dithering_fragment:nS,dithering_pars_fragment:iS,roughnessmap_fragment:rS,roughnessmap_pars_fragment:sS,shadowmap_pars_fragment:aS,shadowmap_pars_vertex:oS,shadowmap_vertex:lS,shadowmask_pars_fragment:cS,skinbase_vertex:uS,skinning_pars_vertex:hS,skinning_vertex:dS,skinnormal_vertex:fS,specularmap_fragment:pS,specularmap_pars_fragment:mS,tonemapping_fragment:gS,tonemapping_pars_fragment:_S,transmission_fragment:vS,transmission_pars_fragment:xS,uv_pars_fragment:yS,uv_pars_vertex:SS,uv_vertex:MS,worldpos_vertex:ES,background_vert:bS,background_frag:TS,backgroundCube_vert:wS,backgroundCube_frag:AS,cube_vert:RS,cube_frag:CS,depth_vert:PS,depth_frag:LS,distance_vert:DS,distance_frag:IS,equirect_vert:NS,equirect_frag:FS,linedashed_vert:US,linedashed_frag:OS,meshbasic_vert:kS,meshbasic_frag:BS,meshlambert_vert:zS,meshlambert_frag:HS,meshmatcap_vert:VS,meshmatcap_frag:GS,meshnormal_vert:WS,meshnormal_frag:XS,meshphong_vert:$S,meshphong_frag:qS,meshphysical_vert:YS,meshphysical_frag:KS,meshtoon_vert:jS,meshtoon_frag:ZS,points_vert:JS,points_frag:QS,shadow_vert:eM,shadow_frag:tM,sprite_vert:nM,sprite_frag:iM},Le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ci={basic:{uniforms:xn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:xn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:xn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:xn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:xn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:xn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:xn([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:xn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:xn([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:xn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:xn([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:xn([Le.common,Le.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:xn([Le.lights,Le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};ci.physical={uniforms:xn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const wa={r:0,b:0,g:0},rM=new lt,Rd=new st;Rd.set(-1,0,0,0,1,0,0,0,1);function sM(r,e,t,n,i,s){const l=new Xe(0);let c=i===!0?0:1,h,d,m=null,f=0,g=null;function v(N){let k=N.isScene===!0?N.background:null;if(k&&k.isTexture){const L=N.backgroundBlurriness>0;k=e.get(k,L)}return k}function M(N){let k=!1;const L=v(N);L===null?S(l,c):L&&L.isColor&&(S(L,1),k=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function P(N,k){const L=v(k);L&&(L.isCubeTexture||L.mapping===Za)?(d===void 0&&(d=new Bt(new Hr(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Or(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,C,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=L,d.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(rM.makeRotationFromEuler(k.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Rd),d.material.toneMapped=vt.getTransfer(L.colorSpace)!==Pt,(m!==L||f!==L.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,m=L,f=L.version,g=r.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Bt(new or(2,2),new qt({name:"BackgroundMaterial",uniforms:Or(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.toneMapped=vt.getTransfer(L.colorSpace)!==Pt,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(m!==L||f!==L.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,m=L,f=L.version,g=r.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function S(N,k){N.getRGB(wa,yd(r)),t.buffers.color.setClear(wa.r,wa.g,wa.b,k,s)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(N,k=1){l.set(N),c=k,S(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(N){c=N,S(l,c)},render:M,addToRenderList:P,dispose:x}}function aM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=g(null);let s=i,l=!1;function c(j,ie,ae,V,z){let J=!1;const se=f(j,V,ae,ie);s!==se&&(s=se,d(s.object)),J=v(j,V,ae,z),J&&M(j,V,ae,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(J||l)&&(l=!1,L(j,ie,ae,V),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function h(){return r.createVertexArray()}function d(j){return r.bindVertexArray(j)}function m(j){return r.deleteVertexArray(j)}function f(j,ie,ae,V){const z=V.wireframe===!0;let J=n[ie.id];J===void 0&&(J={},n[ie.id]=J);const se=j.isInstancedMesh===!0?j.id:0;let ce=J[se];ce===void 0&&(ce={},J[se]=ce);let oe=ce[ae.id];oe===void 0&&(oe={},ce[ae.id]=oe);let pe=oe[z];return pe===void 0&&(pe=g(h()),oe[z]=pe),pe}function g(j){const ie=[],ae=[],V=[];for(let z=0;z<t;z++)ie[z]=0,ae[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:ae,attributeDivisors:V,object:j,attributes:{},index:null}}function v(j,ie,ae,V){const z=s.attributes,J=ie.attributes;let se=0;const ce=ae.getAttributes();for(const oe in ce)if(ce[oe].location>=0){const me=z[oe];let ke=J[oe];if(ke===void 0&&(oe==="instanceMatrix"&&j.instanceMatrix&&(ke=j.instanceMatrix),oe==="instanceColor"&&j.instanceColor&&(ke=j.instanceColor)),me===void 0||me.attribute!==ke||ke&&me.data!==ke.data)return!0;se++}return s.attributesNum!==se||s.index!==V}function M(j,ie,ae,V){const z={},J=ie.attributes;let se=0;const ce=ae.getAttributes();for(const oe in ce)if(ce[oe].location>=0){let me=J[oe];me===void 0&&(oe==="instanceMatrix"&&j.instanceMatrix&&(me=j.instanceMatrix),oe==="instanceColor"&&j.instanceColor&&(me=j.instanceColor));const ke={};ke.attribute=me,me&&me.data&&(ke.data=me.data),z[oe]=ke,se++}s.attributes=z,s.attributesNum=se,s.index=V}function P(){const j=s.newAttributes;for(let ie=0,ae=j.length;ie<ae;ie++)j[ie]=0}function S(j){x(j,0)}function x(j,ie){const ae=s.newAttributes,V=s.enabledAttributes,z=s.attributeDivisors;ae[j]=1,V[j]===0&&(r.enableVertexAttribArray(j),V[j]=1),z[j]!==ie&&(r.vertexAttribDivisor(j,ie),z[j]=ie)}function N(){const j=s.newAttributes,ie=s.enabledAttributes;for(let ae=0,V=ie.length;ae<V;ae++)ie[ae]!==j[ae]&&(r.disableVertexAttribArray(ae),ie[ae]=0)}function k(j,ie,ae,V,z,J,se){se===!0?r.vertexAttribIPointer(j,ie,ae,z,J):r.vertexAttribPointer(j,ie,ae,V,z,J)}function L(j,ie,ae,V){P();const z=V.attributes,J=ae.getAttributes(),se=ie.defaultAttributeValues;for(const ce in J){const oe=J[ce];if(oe.location>=0){let pe=z[ce];if(pe===void 0&&(ce==="instanceMatrix"&&j.instanceMatrix&&(pe=j.instanceMatrix),ce==="instanceColor"&&j.instanceColor&&(pe=j.instanceColor)),pe!==void 0){const me=pe.normalized,ke=pe.itemSize,Ie=e.get(pe);if(Ie===void 0)continue;const Fe=Ie.buffer,Ke=Ie.type,at=Ie.bytesPerElement,le=Ke===r.INT||Ke===r.UNSIGNED_INT||pe.gpuType===ac;if(pe.isInterleavedBufferAttribute){const Z=pe.data,xe=Z.stride,tt=pe.offset;if(Z.isInstancedInterleavedBuffer){for(let Ne=0;Ne<oe.locationSize;Ne++)x(oe.location+Ne,Z.meshPerAttribute);j.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ne=0;Ne<oe.locationSize;Ne++)S(oe.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let Ne=0;Ne<oe.locationSize;Ne++)k(oe.location+Ne,ke/oe.locationSize,Ke,me,xe*at,(tt+ke/oe.locationSize*Ne)*at,le)}else{if(pe.isInstancedBufferAttribute){for(let Z=0;Z<oe.locationSize;Z++)x(oe.location+Z,pe.meshPerAttribute);j.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Z=0;Z<oe.locationSize;Z++)S(oe.location+Z);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let Z=0;Z<oe.locationSize;Z++)k(oe.location+Z,ke/oe.locationSize,Ke,me,ke*at,ke/oe.locationSize*Z*at,le)}}else if(se!==void 0){const me=se[ce];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(oe.location,me);break;case 3:r.vertexAttrib3fv(oe.location,me);break;case 4:r.vertexAttrib4fv(oe.location,me);break;default:r.vertexAttrib1fv(oe.location,me)}}}}N()}function D(){O();for(const j in n){const ie=n[j];for(const ae in ie){const V=ie[ae];for(const z in V){const J=V[z];for(const se in J)m(J[se].object),delete J[se];delete V[z]}}delete n[j]}}function C(j){if(n[j.id]===void 0)return;const ie=n[j.id];for(const ae in ie){const V=ie[ae];for(const z in V){const J=V[z];for(const se in J)m(J[se].object),delete J[se];delete V[z]}}delete n[j.id]}function B(j){for(const ie in n){const ae=n[ie];for(const V in ae){const z=ae[V];if(z[j.id]===void 0)continue;const J=z[j.id];for(const se in J)m(J[se].object),delete J[se];delete z[j.id]}}}function T(j){for(const ie in n){const ae=n[ie],V=j.isInstancedMesh===!0?j.id:0,z=ae[V];if(z!==void 0){for(const J in z){const se=z[J];for(const ce in se)m(se[ce].object),delete se[ce];delete z[J]}delete ae[V],Object.keys(ae).length===0&&delete n[ie]}}}function O(){I(),l=!0,s!==i&&(s=i,d(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:O,resetDefaultState:I,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:P,enableAttribute:S,disableUnusedAttributes:N}}function oM(r,e,t){let n;function i(h){n=h}function s(h,d){r.drawArrays(n,h,d),t.update(d,n,1)}function l(h,d,m){m!==0&&(r.drawArraysInstanced(n,h,d,m),t.update(d,n,m))}function c(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,m);let g=0;for(let v=0;v<m;v++)g+=d[v];t.update(g,n,1)}this.setMode=i,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function lM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(B){return!(B!==Hn&&n.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(B){const T=B===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Pn&&B!==zn&&!T&&n.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function h(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=h(d);m!==d&&(Ye("WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const f=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),k=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=r.getParameter(r.MAX_SAMPLES),C=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:f,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:M,maxTextureSize:P,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:N,maxVaryings:k,maxFragmentUniforms:L,maxSamples:D,samples:C}}function cM(r){const e=this;let t=null,n=0,i=!1,s=!1;const l=new bi,c=new st,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,g){const v=f.length!==0||g||n!==0||i;return i=g,n=f.length,v},this.beginShadows=function(){s=!0,m(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,g){t=m(f,g,0)},this.setState=function(f,g,v){const M=f.clippingPlanes,P=f.clipIntersection,S=f.clipShadows,x=r.get(f);if(!i||M===null||M.length===0||s&&!S)s?m(null):d();else{const N=s?0:n,k=N*4;let L=x.clippingState||null;h.value=L,L=m(M,g,k,v);for(let D=0;D!==k;++D)L[D]=t[D];x.clippingState=L,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=N}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(f,g,v,M){const P=f!==null?f.length:0;let S=null;if(P!==0){if(S=h.value,M!==!0||S===null){const x=v+P*4,N=g.matrixWorldInverse;c.getNormalMatrix(N),(S===null||S.length<x)&&(S=new Float32Array(x));for(let k=0,L=v;k!==P;++k,L+=4)l.copy(f[k]).applyMatrix4(N,c),l.normal.toArray(S,L),S[L+3]=l.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,S}}const Rr=4,uM=6,hM=20,dM=256,cs=new Is,_h=new Xe;let $o=null,qo=0,Yo=0,Ko=!1;const fM=new $,tr=new $;class $l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:l=256,position:c=fM}=s;$o=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,i,h,c),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($o,qo,Yo),this._renderer.xr.enabled=Ko,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$o=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Tn,format:Hn,colorSpace:Ln,depthBuffer:!1},i=vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=pM(s)),this._blurMaterial=gM(s,e,t),this._ggxMaterial=mM(s,e,t)}return i}_compileMaterial(e){const t=new Bt(new un,e);this._renderer.compile(t,cs)}_sceneToCubeUV(e,t,n,i,s){const h=new yn(90,1,t,n),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],f=this._renderer,g=f.autoClear,v=f.toneMapping;f.getClearColor(_h),f.toneMapping=pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new Hr,new Vi({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,S=P.material;let x=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,x=!0):(S.color.copy(_h),x=!0);for(let k=0;k<6;k++){const L=k%3;L===0?(h.up.set(0,d[k],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+m[k],s.y,s.z)):L===1?(h.up.set(0,0,d[k]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+m[k],s.z)):(h.up.set(0,d[k],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+m[k]));const D=this._cubeSize;br(i,L*D,k>2?D:0,D,D),f.setRenderTarget(i),x&&f.render(P,h),f.render(e,h)}f.toneMapping=v,f.autoClear=g,e.background=N}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===sr||e.mapping===Nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const s=i?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=s;const c=s.uniforms;c.envMap.value=e;const h=this._cubeSize;br(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,cs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const h=l.uniforms,d=n/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),f=Math.sqrt(d*d-m*m),g=d*1.25,v=f*g,{_lodMax:M}=this,P=this._sizeLods[n],S=3*P*(n>M-Rr?n-M+Rr:0),x=4*(this._cubeSize-P);h.envMap.value=e.texture,h.roughness.value=v,h.mipInt.value=M-t,br(s,S,x,3*P,2*P),i.setRenderTarget(s),i.render(c,cs),h.envMap.value=s.texture,h.roughness.value=0,h.mipInt.value=M-n,br(e,S,x,3*P,2*P),i.setRenderTarget(e),i.render(c,cs)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,l=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,l),this._blurPass(s,e,n,n,l)}_blurPass(e,t,n,i,s){const l=this._renderer,c=this._blurMaterial,h=this._lodMeshes[i];h.material=c;const d=c.uniforms;d.envMap.value=e.texture,d.sigma.value=s,d.mipInt.value=this._lodMax-n;const m=this._sizeLods[i],f=3*m*(i>this._lodMax-Rr?i-this._lodMax+Rr:0),g=4*(this._cubeSize-m);br(t,f,g,3*m,2*m),l.setRenderTarget(t),l.render(h,cs)}}function pM(r){const e=[],t=[];let n=r;const i=r-Rr+1+uM;for(let s=0;s<i;s++){const l=Math.pow(2,n);e.push(l);const c=1/(l-2),h=-c,d=1+c,m=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,M=new Float32Array(v*g*f),P=new Float32Array(v*g*f);for(let x=0;x<f;x++){const N=x%3*2/3-1,k=x>2?0:-1,L=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];M.set(L,v*g*x);for(let D=0;D<g;D++){const C=m[D*2]*2-1,B=m[D*2+1]*2-1;x===0?tr.set(1,B,C):x===1?tr.set(-C,1,-B):x===2?tr.set(-C,B,1):x===3?tr.set(-1,B,-C):x===4?tr.set(-C,-1,B):tr.set(C,B,-1),tr.toArray(P,(x*g+D)*v)}}const S=new un;S.setAttribute("position",new mn(M,v)),S.setAttribute("outputDirection",new mn(P,v)),t.push(new Bt(S,null)),n>Rr&&n--}return{lodMeshes:t,sizeLods:e}}function vh(r,e,t){const n=new Sn(r,e,t);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function mM(r,e,t){return new qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function gM(r,e,t){return new qt({name:"SphericalGaussianBlur",defines:{SAMPLES:hM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function xh(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function yh(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cd extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hr(5,5,5),s=new qt({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:fi});s.uniforms.tEquirect.value=t;const l=new Bt(i,s),c=t.minFilter;return t.minFilter===Ti&&(t.minFilter=tn),new ox(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(s)}}function _M(r){let e=new WeakMap,t=new WeakMap,n=null;function i(g,v=!1){return g==null?null:v?l(g):s(g)}function s(g){if(g&&g.isTexture){const v=g.mapping;if(v===_o||v===vo)if(e.has(g)){const M=e.get(g).texture;return c(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const P=new Cd(M.height);return P.fromEquirectangularTexture(r,g),e.set(g,P),g.addEventListener("dispose",d),c(P.texture,g.mapping)}else return null}}return g}function l(g){if(g&&g.isTexture){const v=g.mapping,M=v===_o||v===vo,P=v===sr||v===Nr;if(M||P){let S=t.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return n===null&&(n=new $l(r)),S=M?n.fromEquirectangular(g,S):n.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const N=g.image;return M&&N&&N.height>0||P&&N&&h(N)?(n===null&&(n=new $l(r)),S=M?n.fromEquirectangular(g):n.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",m),S.texture):null}}}return g}function c(g,v){return v===_o?g.mapping=sr:v===vo&&(g.mapping=Nr),g}function h(g){let v=0;const M=6;for(let P=0;P<M;P++)g[P]!==void 0&&v++;return v===M}function d(g){const v=g.target;v.removeEventListener("dispose",d);const M=e.get(v);M!==void 0&&(e.delete(v),M.dispose())}function m(g){const v=g.target;v.removeEventListener("dispose",m);const M=t.get(v);M!==void 0&&(t.delete(v),M.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function vM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Pr("WebGLRenderer: "+n+" extension not supported."),i}}}function xM(r,e,t,n){const i={},s=new WeakMap;function l(f){const g=f.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",l),delete i[g.id];const v=s.get(g);v&&(e.remove(v),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(f,g){return i[g.id]===!0||(g.addEventListener("dispose",l),i[g.id]=!0,t.memory.geometries++),g}function h(f){const g=f.attributes;for(const v in g)e.update(g[v],r.ARRAY_BUFFER)}function d(f){const g=[],v=f.index,M=f.attributes.position;let P=0;if(M===void 0)return;if(v!==null){const N=v.array;P=v.version;for(let k=0,L=N.length;k<L;k+=3){const D=N[k+0],C=N[k+1],B=N[k+2];g.push(D,C,C,B,B,D)}}else{const N=M.array;P=M.version;for(let k=0,L=N.length/3-1;k<L;k+=3){const D=k+0,C=k+1,B=k+2;g.push(D,C,C,B,B,D)}}const S=new(M.count>=65535?dd:hd)(g,1);S.version=P;const x=s.get(f);x&&e.remove(x),s.set(f,S)}function m(f){const g=s.get(f);if(g){const v=f.index;v!==null&&g.version<v.version&&d(f)}else d(f);return s.get(f)}return{get:c,update:h,getWireframeAttribute:m}}function yM(r,e,t){let n;function i(f){n=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function h(f,g){r.drawElements(n,g,s,f*l),t.update(g,n,1)}function d(f,g,v){v!==0&&(r.drawElementsInstanced(n,g,s,f*l,v),t.update(g,n,v))}function m(f,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,f,0,v);let P=0;for(let S=0;S<v;S++)P+=g[S];t.update(P,n,1)}this.setMode=i,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=m}function SM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,c){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:et("WebGLInfo: Unknown draw mode:",l);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function MM(r,e,t){const n=new WeakMap,i=new Ot;function s(l,c,h){const d=l.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=m!==void 0?m.length:0;let g=n.get(c);if(g===void 0||g.count!==f){let O=function(){B.dispose(),n.delete(c),c.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();const v=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,P=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],N=c.morphAttributes.color||[];let k=0;v===!0&&(k=1),M===!0&&(k=2),P===!0&&(k=3);let L=c.attributes.position.count*k,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*D*4*f),B=new ld(C,L,D,f);B.type=zn,B.needsUpdate=!0;const T=k*4;for(let I=0;I<f;I++){const j=S[I],ie=x[I],ae=N[I],V=L*D*4*I;for(let z=0;z<j.count;z++){const J=z*T;v===!0&&(i.fromBufferAttribute(j,z),C[V+J+0]=i.x,C[V+J+1]=i.y,C[V+J+2]=i.z,C[V+J+3]=0),M===!0&&(i.fromBufferAttribute(ie,z),C[V+J+4]=i.x,C[V+J+5]=i.y,C[V+J+6]=i.z,C[V+J+7]=0),P===!0&&(i.fromBufferAttribute(ae,z),C[V+J+8]=i.x,C[V+J+9]=i.y,C[V+J+10]=i.z,C[V+J+11]=ae.itemSize===4?i.w:1)}}g={count:f,texture:B,size:new Ge(L,D)},n.set(c,g),c.addEventListener("dispose",O)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",l.morphTexture,t);else{let v=0;for(let P=0;P<d.length;P++)v+=d[P];const M=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",d)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:s}}function EM(r,e,t,n,i){let s=new WeakMap;function l(d){const m=i.render.frame,f=d.geometry,g=e.get(d,f);if(s.get(g)!==m&&(e.update(g),s.set(g,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),s.get(d)!==m&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),s.set(d,m))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==m&&(v.update(),s.set(v,m))}return g}function c(){s=new WeakMap}function h(d){const m=d.target;m.removeEventListener("dispose",h),n.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:c}}const bM={[ec]:"LINEAR_TONE_MAPPING",[tc]:"REINHARD_TONE_MAPPING",[nc]:"CINEON_TONE_MAPPING",[ja]:"ACES_FILMIC_TONE_MAPPING",[rc]:"AGX_TONE_MAPPING",[sc]:"NEUTRAL_TONE_MAPPING",[ic]:"CUSTOM_TONE_MAPPING"};function TM(r,e,t,n,i,s){const l=new Sn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,h=null;const d=new un;d.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new nn([0,2,0,0,2,0],2));const m=new Sd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Bt(d,m),g=new Is(-1,1,1,-1,0,1);let v=null,M=null,P=!1,S,x=null,N=[],k=!1;this.setSize=function(L,D){l.setSize(L,D),c!==null&&c.setSize(L,D),h!==null&&h.setSize(L,D);for(let C=0;C<N.length;C++){const B=N[C];B.setSize&&B.setSize(L,D)}},this.setEffects=function(L){N=L,k=N.length>0&&N[0].isRenderPass===!0;const D=l.width,C=l.height;N.length>0&&c===null&&(c=new Sn(D,C,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),h=new Sn(D,C,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<N.length;B++){const T=N[B];T.setSize&&T.setSize(D,C)}},this.begin=function(L,D){if(P||L.toneMapping===pi&&N.length===0)return!1;if(x=D,D!==null){const C=D.width,B=D.height;(l.width!==C||l.height!==B)&&this.setSize(C,B)}return k===!1&&L.setRenderTarget(l),S=L.toneMapping,L.toneMapping=pi,!0},this.hasRenderPass=function(){return k},this.end=function(L,D){L.toneMapping=S,P=!0;let C=l,B=c;for(let T=0;T<N.length;T++){const O=N[T];O.enabled!==!1&&(O.render(L,B,C,D),O.needsSwap!==!1&&(C=B,B=B===c?h:c))}if(v!==L.outputColorSpace||M!==L.toneMapping){v=L.outputColorSpace,M=L.toneMapping,m.defines={},vt.getTransfer(v)===Pt&&(m.defines.SRGB_TRANSFER="");const T=bM[M];T&&(m.defines[T]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=C.texture,L.setRenderTarget(x),L.render(f,g),x=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){l.dispose(),c!==null&&c.dispose(),h!==null&&h.dispose(),d.dispose(),m.dispose()}}const Pd=new on,ql=new Rs(1,1),Ld=new ld,Dd=new l0,Id=new vd,Sh=[],Mh=[],Eh=new Float32Array(16),bh=new Float32Array(9),Th=new Float32Array(4);function $r(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Sh[i];if(s===void 0&&(s=new Float32Array(i),Sh[i]=s),e!==0){n.toArray(s,0);for(let l=1,c=0;l!==e;++l)c+=t,r[l].toArray(s,c)}return s}function rn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function eo(r,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function wM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function AM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function RM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function CM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function PM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Th.set(n),r.uniformMatrix2fv(this.addr,!1,Th),sn(t,n)}}function LM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;bh.set(n),r.uniformMatrix3fv(this.addr,!1,bh),sn(t,n)}}function DM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Eh.set(n),r.uniformMatrix4fv(this.addr,!1,Eh),sn(t,n)}}function IM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function NM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function UM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function OM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function BM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function zM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function HM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ql.compareFunction=t.isReversedDepthBuffer()?pc:fc,s=ql):s=Pd,t.setTexture2D(e||s,i)}function VM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dd,i)}function GM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Id,i)}function WM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ld,i)}function XM(r){switch(r){case 5126:return wM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return PM;case 35675:return LM;case 35676:return DM;case 5124:case 35670:return IM;case 35667:case 35671:return NM;case 35668:case 35672:return FM;case 35669:case 35673:return UM;case 5125:return OM;case 36294:return kM;case 36295:return BM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}function $M(r,e){r.uniform1fv(this.addr,e)}function qM(r,e){const t=$r(e,this.size,2);r.uniform2fv(this.addr,t)}function YM(r,e){const t=$r(e,this.size,3);r.uniform3fv(this.addr,t)}function KM(r,e){const t=$r(e,this.size,4);r.uniform4fv(this.addr,t)}function jM(r,e){const t=$r(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ZM(r,e){const t=$r(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function JM(r,e){const t=$r(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function QM(r,e){r.uniform1iv(this.addr,e)}function eE(r,e){r.uniform2iv(this.addr,e)}function tE(r,e){r.uniform3iv(this.addr,e)}function nE(r,e){r.uniform4iv(this.addr,e)}function iE(r,e){r.uniform1uiv(this.addr,e)}function rE(r,e){r.uniform2uiv(this.addr,e)}function sE(r,e){r.uniform3uiv(this.addr,e)}function aE(r,e){r.uniform4uiv(this.addr,e)}function oE(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let l;this.type===r.SAMPLER_2D_SHADOW?l=ql:l=Pd;for(let c=0;c!==i;++c)t.setTexture2D(e[c]||l,s[c])}function lE(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||Dd,s[l])}function cE(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||Id,s[l])}function uE(r,e,t){const n=this.cache,i=e.length,s=eo(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||Ld,s[l])}function hE(r){switch(r){case 5126:return $M;case 35664:return qM;case 35665:return YM;case 35666:return KM;case 35674:return jM;case 35675:return ZM;case 35676:return JM;case 5124:case 35670:return QM;case 35667:case 35671:return eE;case 35668:case 35672:return tE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return rE;case 36295:return sE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return uE}}class dE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=XM(t.type)}}class fE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hE(t.type)}}class pE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,l=i.length;s!==l;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function wh(r,e){r.seq.push(e),r.map[e.id]=e}function mE(r,e,t){const n=r.name,i=n.length;for(jo.lastIndex=0;;){const s=jo.exec(n),l=jo.lastIndex;let c=s[1];const h=s[2]==="]",d=s[3];if(h&&(c=c|0),d===void 0||d==="["&&l+2===i){wh(t,d===void 0?new dE(c,r,e):new fE(c,r,e));break}else{let f=t.map[c];f===void 0&&(f=new pE(c),wh(t,f)),t=f}}}class Ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const c=e.getActiveUniform(t,l),h=e.getUniformLocation(t,c.name);mE(c,h,this)}const i=[],s=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(l):s.push(l);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,l=t.length;s!==l;++s){const c=t[s],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function Ah(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const gE=37297;let _E=0;function vE(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=i;l<s;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const Rh=new st;function xE(r){vt._getMatrix(Rh,vt.workingColorSpace,r);const e=`mat3( ${Rh.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case Ga:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ch(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+s+`

`+vE(r.getShaderSource(e),c)}else return s}function yE(r,e){const t=xE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const SE={[ec]:"Linear",[tc]:"Reinhard",[nc]:"Cineon",[ja]:"ACESFilmic",[rc]:"AgX",[sc]:"Neutral",[ic]:"Custom"};function ME(r,e){const t=SE[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Aa=new $;function EE(){vt.getLuminanceCoefficients(Aa);const r=Aa.x.toFixed(4),e=Aa.y.toFixed(4),t=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function TE(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wE(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),l=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[l]={type:s.type,location:r.getAttribLocation(e,l),locationSize:c}}return t}function ms(r){return r!==""}function Ph(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(r){return r.replace(AE,CE)}const RE=new Map;function CE(r,e){let t=ht[e];if(t===void 0){const n=RE.get(e);if(n!==void 0)t=ht[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yl(t)}const PE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(r){return r.replace(PE,LE)}function LE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ih(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const DE={[gs]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function IE(r){return DE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NE={[sr]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function FE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":NE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const UE={[Nr]:"ENVMAP_MODE_REFRACTION"};function OE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":UE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kE={[Ql]:"ENVMAP_BLENDING_MULTIPLY",[Mv]:"ENVMAP_BLENDING_MIX",[Ev]:"ENVMAP_BLENDING_ADD"};function BE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":kE[r.combine]||"ENVMAP_BLENDING_NONE"}function zE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function HE(r,e,t,n){const i=r.getContext(),s=t.defines;let l=t.vertexShader,c=t.fragmentShader;const h=IE(t),d=FE(t),m=OE(t),f=BE(t),g=zE(t),v=bE(t),M=TE(s),P=i.createProgram();let S,x,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ms).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ms).join(`
`),x.length>0&&(x+=`
`)):(S=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),x=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+f:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?ht.tonemapping_pars_fragment:"",t.toneMapping!==pi?ME("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,yE("linearToOutputTexel",t.outputColorSpace),EE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),l=Yl(l),l=Ph(l,t),l=Lh(l,t),c=Yl(c),c=Ph(c,t),c=Lh(c,t),l=Dh(l),c=Dh(c),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const k=N+S+l,L=N+x+c,D=Ah(i,i.VERTEX_SHADER,k),C=Ah(i,i.FRAGMENT_SHADER,L);i.attachShader(P,D),i.attachShader(P,C),t.index0AttributeName!==void 0?i.bindAttribLocation(P,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(P,0,"position"),i.linkProgram(P);function B(j){if(r.debug.checkShaderErrors){const ie=i.getProgramInfoLog(P)||"",ae=i.getShaderInfoLog(D)||"",V=i.getShaderInfoLog(C)||"",z=ie.trim(),J=ae.trim(),se=V.trim();let ce=!0,oe=!0;if(i.getProgramParameter(P,i.LINK_STATUS)===!1)if(ce=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,P,D,C);else{const pe=Ch(i,D,"vertex"),me=Ch(i,C,"fragment");et("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(P,i.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+z+`
`+pe+`
`+me)}else z!==""?Ye("WebGLProgram: Program Info Log:",z):(J===""||se==="")&&(oe=!1);oe&&(j.diagnostics={runnable:ce,programLog:z,vertexShader:{log:J,prefix:S},fragmentShader:{log:se,prefix:x}})}i.deleteShader(D),i.deleteShader(C),T=new Ua(i,P),O=wE(i,P)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let O;this.getAttributes=function(){return O===void 0&&B(this),O};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(P,gE)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_E++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=D,this.fragmentShader=C,this}let VE=0;class GE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new WE(e),t.set(e,n)),n}}class WE{constructor(e){this.id=VE++,this.code=e,this.usedTimes=0}}function XE(r){return r===ar||r===za||r===Ha}function $E(r,e,t,n,i,s){const l=new _c,c=new GE,h=new Set,d=[],m=new Map,f=n.logarithmicDepthBuffer;let g=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function P(T,O,I,j,ie,ae){const V=j.fog,z=ie.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?j.environment:null,se=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ce=e.get(T.envMap||J,se),oe=ce&&ce.mapping===Za?ce.image.height:null,pe=v[T.type];T.precision!==null&&(g=n.getMaxPrecision(T.precision),g!==T.precision&&Ye("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ke=me!==void 0?me.length:0;let Ie=0;z.morphAttributes.position!==void 0&&(Ie=1),z.morphAttributes.normal!==void 0&&(Ie=2),z.morphAttributes.color!==void 0&&(Ie=3);let Fe,Ke,at,le;if(pe){const yt=ci[pe];Fe=yt.vertexShader,Ke=yt.fragmentShader}else{Fe=T.vertexShader,Ke=T.fragmentShader;const yt=c.getVertexShaderStage(T),Mt=c.getFragmentShaderStage(T);c.update(T,yt,Mt),at=yt.id,le=Mt.id}const Z=r.getRenderTarget(),xe=r.state.buffers.depth.getReversed(),tt=ie.isInstancedMesh===!0,Ne=ie.isBatchedMesh===!0,Je=!!T.map,Xt=!!T.matcap,ot=!!ce,St=!!T.aoMap,Nt=!!T.lightMap,gt=!!T.bumpMap&&T.wireframe===!1,zt=!!T.normalMap,Ht=!!T.displacementMap,Kt=!!T.emissiveMap,Rt=!!T.metalnessMap,Ft=!!T.roughnessMap,X=T.anisotropy>0,$t=T.clearcoat>0,Qe=T.dispersion>0,F=T.retroreflectivity>0,E=T.iridescence>0,Q=T.sheen>0,re=T.transmission>0,he=X&&!!T.anisotropyMap,Ee=$t&&!!T.clearcoatMap,Te=$t&&!!T.clearcoatNormalMap,de=$t&&!!T.clearcoatRoughnessMap,_e=E&&!!T.iridescenceMap,we=E&&!!T.iridescenceThicknessMap,$e=Q&&!!T.sheenColorMap,Re=Q&&!!T.sheenRoughnessMap,Ae=!!T.specularMap,qe=!!T.specularColorMap,Ze=!!T.specularIntensityMap,nt=re&&!!T.transmissionMap,W=re&&!!T.thicknessMap,K=!!T.gradientMap,H=!!T.alphaMap,be=T.alphaTest>0,De=!!T.alphaHash,ve=!!T.extensions;let Be=pi;T.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Be=r.toneMapping);const Ve={shaderID:pe,shaderType:T.type,shaderName:T.name,vertexShader:Fe,fragmentShader:Ke,defines:T.defines,customVertexShaderID:at,customFragmentShaderID:le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ne,batchingColor:Ne&&ie._colorsTexture!==null,instancing:tt,instancingColor:tt&&ie.instanceColor!==null,instancingMorph:tt&&ie.morphTexture!==null,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Je,matcap:Xt,envMap:ot,envMapMode:ot&&ce.mapping,envMapCubeUVHeight:oe,aoMap:St,lightMap:Nt,bumpMap:gt,normalMap:zt,displacementMap:Ht,emissiveMap:Kt,normalMapObjectSpace:zt&&T.normalMapType===Rv,normalMapTangentSpace:zt&&T.normalMapType===Va,packedNormalMap:zt&&T.normalMapType===Va&&XE(T.normalMap.format),metalnessMap:Rt,roughnessMap:Ft,anisotropy:X,anisotropyMap:he,clearcoat:$t,clearcoatMap:Ee,clearcoatNormalMap:Te,clearcoatRoughnessMap:de,dispersion:Qe,retroreflection:F,iridescence:E,iridescenceMap:_e,iridescenceThicknessMap:we,sheen:Q,sheenColorMap:$e,sheenRoughnessMap:Re,specularMap:Ae,specularColorMap:qe,specularIntensityMap:Ze,transmission:re,transmissionMap:nt,thicknessMap:W,gradientMap:K,opaque:T.transparent===!1&&T.blending===_s&&T.alphaToCoverage===!1,alphaMap:H,alphaTest:be,alphaHash:De,combine:T.combine,mapUv:Je&&M(T.map.channel),aoMapUv:St&&M(T.aoMap.channel),lightMapUv:Nt&&M(T.lightMap.channel),bumpMapUv:gt&&M(T.bumpMap.channel),normalMapUv:zt&&M(T.normalMap.channel),displacementMapUv:Ht&&M(T.displacementMap.channel),emissiveMapUv:Kt&&M(T.emissiveMap.channel),metalnessMapUv:Rt&&M(T.metalnessMap.channel),roughnessMapUv:Ft&&M(T.roughnessMap.channel),anisotropyMapUv:he&&M(T.anisotropyMap.channel),clearcoatMapUv:Ee&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:we&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Re&&M(T.sheenRoughnessMap.channel),specularMapUv:Ae&&M(T.specularMap.channel),specularColorMapUv:qe&&M(T.specularColorMap.channel),specularIntensityMapUv:Ze&&M(T.specularIntensityMap.channel),transmissionMapUv:nt&&M(T.transmissionMap.channel),thicknessMapUv:W&&M(T.thicknessMap.channel),alphaMapUv:H&&M(T.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(zt||X),vertexNormals:!!z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!z.attributes.uv&&(Je||H),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||z.attributes.normal===void 0&&zt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:ie.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Ie,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ae.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Be,decodeVideoTexture:Je&&T.map.isVideoTexture===!0&&vt.getTransfer(T.map.colorSpace)===Pt,decodeVideoTextureEmissive:Kt&&T.emissiveMap.isVideoTexture===!0&&vt.getTransfer(T.emissiveMap.colorSpace)===Pt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qn,flipSided:T.side===pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ve&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&T.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ve.vertexUv1s=h.has(1),Ve.vertexUv2s=h.has(2),Ve.vertexUv3s=h.has(3),h.clear(),Ve}function S(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)O.push(I),O.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(x(O,T),N(O,T),O.push(r.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function x(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numSunLights),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numSunLightShadows),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function N(T,O){l.disableAll(),O.instancing&&l.enable(0),O.instancingColor&&l.enable(1),O.instancingMorph&&l.enable(2),O.matcap&&l.enable(3),O.envMap&&l.enable(4),O.normalMapObjectSpace&&l.enable(5),O.normalMapTangentSpace&&l.enable(6),O.clearcoat&&l.enable(7),O.iridescence&&l.enable(8),O.alphaTest&&l.enable(9),O.vertexColors&&l.enable(10),O.vertexAlphas&&l.enable(11),O.vertexUv1s&&l.enable(12),O.vertexUv2s&&l.enable(13),O.vertexUv3s&&l.enable(14),O.vertexTangents&&l.enable(15),O.anisotropy&&l.enable(16),O.alphaHash&&l.enable(17),O.batching&&l.enable(18),O.dispersion&&l.enable(19),O.retroreflection&&l.enable(24),O.batchingColor&&l.enable(20),O.gradientMap&&l.enable(21),O.packedNormalMap&&l.enable(22),O.vertexNormals&&l.enable(23),T.push(l.mask),l.disableAll(),O.fog&&l.enable(0),O.useFog&&l.enable(1),O.flatShading&&l.enable(2),O.logarithmicDepthBuffer&&l.enable(3),O.reversedDepthBuffer&&l.enable(4),O.skinning&&l.enable(5),O.morphTargets&&l.enable(6),O.morphNormals&&l.enable(7),O.morphColors&&l.enable(8),O.premultipliedAlpha&&l.enable(9),O.shadowMapEnabled&&l.enable(10),O.doubleSided&&l.enable(11),O.flipSided&&l.enable(12),O.useDepthPacking&&l.enable(13),O.dithering&&l.enable(14),O.transmission&&l.enable(15),O.sheen&&l.enable(16),O.opaque&&l.enable(17),O.pointsUvs&&l.enable(18),O.decodeVideoTexture&&l.enable(19),O.decodeVideoTextureEmissive&&l.enable(20),O.alphaToCoverage&&l.enable(21),O.numLightProbeGrids>0&&l.enable(22),O.hasPositionAttribute&&l.enable(23),T.push(l.mask)}function k(T){const O=v[T.type];let I;if(O){const j=ci[O];I=Cs.clone(j.uniforms)}else I=T.uniforms;return I}function L(T,O){let I=m.get(O);return I!==void 0?++I.usedTimes:(I=new HE(r,O,T,i),d.push(I),m.set(O,I)),I}function D(T){if(--T.usedTimes===0){const O=d.indexOf(T);d[O]=d[d.length-1],d.pop(),m.delete(T.cacheKey),T.destroy()}}function C(T){c.remove(T)}function B(){c.dispose()}return{getParameters:P,getProgramCacheKey:S,getUniforms:k,acquireProgram:L,releaseProgram:D,releaseShaderCache:C,programs:d,dispose:B}}function qE(){let r=new WeakMap;function e(l){return r.has(l)}function t(l){let c=r.get(l);return c===void 0&&(c={},r.set(l,c)),c}function n(l){r.delete(l)}function i(l,c,h){r.get(l)[c]=h}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function YE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Nh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Fh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function l(g){let v=0;return g.isInstancedMesh&&(v+=2),g.isSkinnedMesh&&(v+=1),v}function c(g,v,M,P,S,x){let N=r[e];return N===void 0?(N={id:g.id,object:g,geometry:v,material:M,materialVariant:l(g),groupOrder:P,renderOrder:g.renderOrder,z:S,group:x},r[e]=N):(N.id=g.id,N.object=g,N.geometry=v,N.material=M,N.materialVariant=l(g),N.groupOrder=P,N.renderOrder=g.renderOrder,N.z=S,N.group=x),e++,N}function h(g,v,M,P,S,x,N){N.reversedDepth===!0&&(S=-S);const k=c(g,v,M,P,S,x);M.transmission>0?n.push(k):M.transparent===!0?i.push(k):t.push(k)}function d(g,v,M,P,S,x){const N=c(g,v,M,P,S,x);M.transmission>0?n.unshift(N):M.transparent===!0?i.unshift(N):t.unshift(N)}function m(g,v){t.length>1&&t.sort(g||YE),n.length>1&&n.sort(v||Nh),i.length>1&&i.sort(v||Nh)}function f(){for(let g=e,v=r.length;g<v;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:h,unshift:d,finish:f,sort:m}}function KE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let l;return s===void 0?(l=new Fh,r.set(n,[l])):i>=s.length?(l=new Fh,s.push(l)):l=s[i],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function jE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new Xe};break;case"SpotLight":t={position:new $,direction:new $,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function ZE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let JE=0;function QE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function eb(r){const e=new jE,t=ZE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new $);const i=new $,s=new lt,l=new lt;function c(d){let m=0,f=0,g=0;for(let ie=0;ie<9;ie++)n.probe[ie].set(0,0,0);let v=0,M=0,P=0,S=0,x=0,N=0,k=0,L=0,D=0,C=0,B=0,T=0,O=0,I=0;d.sort(QE);for(let ie=0,ae=d.length;ie<ae;ie++){const V=d[ie],z=V.color,J=V.intensity,se=V.distance;let ce=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ar?ce=V.shadow.map.texture:ce=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)m+=z.r*J,f+=z.g*J,g+=z.b*J;else if(V.isLightProbe){for(let oe=0;oe<9;oe++)n.probe[oe].addScaledVector(V.sh.coefficients[oe],J);I++}else if(V.isSunLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const pe=V.shadow,me=t.get(V);me.shadowIntensity=pe.intensity,me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize.copy(pe.mapSize).multiply(pe.getFrameExtents()),n.sunShadow[M]=me,n.sunShadowMap[M]=ce;const ke=pe.getViewportCount();for(let Ie=0;Ie<ke;Ie++)n.sunShadowMatrix[P+Ie]=pe.getMatrix(Ie),n.sunShadowCascade[P+Ie]=pe._cascadeData[Ie];P+=ke,M++}n.sun[v]=oe,v++}else if(V.isDirectionalLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const pe=V.shadow,me=t.get(V);me.shadowIntensity=pe.intensity,me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,n.directionalShadow[S]=me,n.directionalShadowMap[S]=ce,n.directionalShadowMatrix[S]=V.shadow.matrix,D++}n.directional[S]=oe,S++}else if(V.isSpotLight){const oe=e.get(V);oe.position.setFromMatrixPosition(V.matrixWorld),oe.color.copy(z).multiplyScalar(J),oe.distance=se,oe.coneCos=Math.cos(V.angle),oe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),oe.decay=V.decay,n.spot[N]=oe;const pe=V.shadow;if(V.map&&(n.spotLightMap[T]=V.map,T++,pe.updateMatrices(V),V.castShadow&&O++),n.spotLightMatrix[N]=pe.matrix,V.castShadow){const me=t.get(V);me.shadowIntensity=pe.intensity,me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,n.spotShadow[N]=me,n.spotShadowMap[N]=ce,B++}N++}else if(V.isRectAreaLight){const oe=e.get(V);oe.color.copy(z).multiplyScalar(J),oe.halfWidth.set(V.width*.5,0,0),oe.halfHeight.set(0,V.height*.5,0),n.rectArea[k]=oe,k++}else if(V.isPointLight){const oe=e.get(V);if(oe.color.copy(V.color).multiplyScalar(V.intensity),oe.distance=V.distance,oe.decay=V.decay,V.castShadow){const pe=V.shadow,me=t.get(V);me.shadowIntensity=pe.intensity,me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,me.shadowCameraNear=pe.camera.near,me.shadowCameraFar=pe.camera.far,n.pointShadow[x]=me,n.pointShadowMap[x]=ce,n.pointShadowMatrix[x]=V.shadow.matrix,C++}n.point[x]=oe,x++}else if(V.isHemisphereLight){const oe=e.get(V);oe.skyColor.copy(V.color).multiplyScalar(J),oe.groundColor.copy(V.groundColor).multiplyScalar(J),n.hemi[L]=oe,L++}}k>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=f,n.ambient[2]=g;const j=n.hash;(j.sunLength!==v||j.directionalLength!==S||j.pointLength!==x||j.spotLength!==N||j.rectAreaLength!==k||j.hemiLength!==L||j.numSunShadows!==M||j.numDirectionalShadows!==D||j.numPointShadows!==C||j.numSpotShadows!==B||j.numSpotMaps!==T||j.numLightProbes!==I)&&(n.sun.length=v,n.directional.length=S,n.spot.length=N,n.rectArea.length=k,n.point.length=x,n.hemi.length=L,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.directionalShadowMatrix.length=D,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=B,n.spotShadowMap.length=B,n.spotLightMatrix.length=B+T-O,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=I,j.sunLength=v,j.directionalLength=S,j.pointLength=x,j.spotLength=N,j.rectAreaLength=k,j.hemiLength=L,j.numSunShadows=M,j.numDirectionalShadows=D,j.numPointShadows=C,j.numSpotShadows=B,j.numSpotMaps=T,j.numLightProbes=I,n.version=JE++)}function h(d,m){let f=0,g=0,v=0,M=0,P=0,S=0;const x=m.matrixWorldInverse;for(let N=0,k=d.length;N<k;N++){const L=d[N];if(L.isSunLight){const D=n.sun[f];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(x),f++}else if(L.isDirectionalLight){const D=n.directional[g];D.direction.setFromMatrixPosition(L.matrixWorld),i.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(i),D.direction.transformDirection(x),g++}else if(L.isSpotLight){const D=n.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(L.matrixWorld),i.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(i),D.direction.transformDirection(x),M++}else if(L.isRectAreaLight){const D=n.rectArea[P];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),l.identity(),s.copy(L.matrixWorld),s.premultiply(x),l.extractRotation(s),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(l),D.halfHeight.applyMatrix4(l),P++}else if(L.isPointLight){const D=n.point[v];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),v++}else if(L.isHemisphereLight){const D=n.hemi[S];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(x),S++}}}return{setup:c,setupView:h,state:n}}function Uh(r){const e=new eb(r),t=[],n=[],i=[];function s(g){f.camera=g,t.length=0,n.length=0,i.length=0}function l(g){t.push(g)}function c(g){n.push(g)}function h(g){i.push(g)}function d(){e.setup(t)}function m(g){e.setupView(t,g)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:d,setupLightsView:m,pushLight:l,pushShadow:c,pushLightProbeGrid:h}}function tb(r){let e=new WeakMap;function t(i,s=0){const l=e.get(i);let c;return l===void 0?(c=new Uh(r),e.set(i,[c])):s>=l.length?(c=new Uh(r),l.push(c)):c=l[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ib=`uniform sampler2D shadow_pass;
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
}`,rb=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],sb=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Oh=new lt,us=new $,Zo=new $;function ab(r,e,t){let n=new Mc;const i=new Ge,s=new Ge,l=new Ot,c=new U0,h=new O0,d={},m=t.maxTextureSize,f={[Gi]:pn,[pn]:Gi,[qn]:qn},g=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:nb,fragmentShader:ib}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const M=new un;M.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new Bt(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let x=this.type;this.render=function(C,B,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||C.length===0)return;this.type===iv&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);const O=r.getRenderTarget(),I=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),ie=r.state;ie.setBlending(fi),ie.buffers.depth.getReversed()===!0?ie.buffers.color.setClear(0,0,0,0):ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const ae=x!==this.type;ae&&B.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(z=>z.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,z=C.length;V<z;V++){const J=C[V],se=J.shadow;if(se===void 0){Ye("WebGLShadowMap:",J,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;i.copy(se.mapSize);const ce=se.getFrameExtents();i.multiply(ce),s.copy(se.mapSize),(i.x>m||i.y>m)&&(i.x>m&&(s.x=Math.floor(m/ce.x),i.x=s.x*ce.x,se.mapSize.x=s.x),i.y>m&&(s.y=Math.floor(m/ce.y),i.y=s.y*ce.y,se.mapSize.y=s.y));const oe=r.state.buffers.depth.getReversed();if(se.camera._reversedDepth=oe,se.map===null||ae===!0){if(se.map!==null&&(se.map.depthTexture!==null&&(se.map.depthTexture.dispose(),se.map.depthTexture=null),se.map.dispose()),this.type===fs){if(J.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}se.map=new Sn(i.x,i.y,{format:ar,type:Tn,minFilter:tn,magFilter:tn,generateMipmaps:!1}),se.map.texture.name=J.name+".shadowMap",se.map.depthTexture=new Rs(i.x,i.y,zn),se.map.depthTexture.name=J.name+".shadowMapDepth",se.map.depthTexture.format=Ri,se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=en,se.map.depthTexture.magFilter=en}else J.isPointLight?(se.map=new Cd(i.x),se.map.depthTexture=new L0(i.x,mi)):(se.map=new Sn(i.x,i.y),se.map.depthTexture=new Rs(i.x,i.y,mi)),se.map.depthTexture.name=J.name+".shadowMap",se.map.depthTexture.format=Ri,this.type===gs?(se.map.depthTexture.compareFunction=oe?pc:fc,se.map.depthTexture.minFilter=tn,se.map.depthTexture.magFilter=tn):(se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=en,se.map.depthTexture.magFilter=en);se.camera.updateProjectionMatrix()}se.map.isWebGLCubeRenderTarget!==!0&&(se.map.width!==i.x||se.map.height!==i.y)&&se.map.setSize(i.x,i.y);const pe=se.map.isWebGLCubeRenderTarget?6:se.getViewportCount();J.isPointLight!==!0&&se.updateMatrices(J,T);for(let me=0;me<pe;me++){const ke=se.getCamera(me);if(J.isPointLight){const Ie=se.camera,Fe=se.matrix,Ke=J.distance||Ie.far;Ke!==Ie.far&&(Ie.far=Ke,Ie.updateProjectionMatrix()),us.setFromMatrixPosition(J.matrixWorld),Ie.position.copy(us),Zo.copy(Ie.position),Zo.add(rb[me]),Ie.up.copy(sb[me]),Ie.lookAt(Zo),Ie.updateMatrixWorld(),Fe.makeTranslation(-us.x,-us.y,-us.z),Oh.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),se._frustum.setFromProjectionMatrix(Oh,Ie.coordinateSystem,Ie.reversedDepth)}if(se.map.isWebGLCubeRenderTarget)r.setRenderTarget(se.map,me),r.clear();else{me===0&&(r.setRenderTarget(se.map),r.clear());const Ie=se.getViewport(me);l.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),ie.viewport(l)}n=se.getFrustum(me),L(B,T,ke,J,this.type)}se.isPointLightShadow!==!0&&this.type===fs&&N(se,T),se.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(O,I,j)};function N(C,B){const T=e.update(P);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null?C.mapPass=new Sn(i.x,i.y,{format:ar,type:Tn}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),g.uniforms.shadow_pass.value=C.map.depthTexture,g.uniforms.resolution.value.set(C.map.width,C.map.height),g.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(B,null,T,g,P,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value.set(C.map.width,C.map.height),v.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(B,null,T,v,P,null)}function k(C,B,T,O){let I=null;const j=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(j!==void 0)I=j;else if(I=T.isPointLight===!0?h:c,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ie=I.uuid,ae=B.uuid;let V=d[ie];V===void 0&&(V={},d[ie]=V);let z=V[ae];z===void 0&&(z=I.clone(),V[ae]=z,B.addEventListener("dispose",D)),I=z}if(I.visible=B.visible,I.wireframe=B.wireframe,O===fs?I.side=B.shadowSide!==null?B.shadowSide:B.side:I.side=B.shadowSide!==null?B.shadowSide:f[B.side],I.alphaMap=B.alphaMap,I.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,I.map=B.map,I.clipShadows=B.clipShadows,I.clippingPlanes=B.clippingPlanes,I.clipIntersection=B.clipIntersection,I.displacementMap=B.displacementMap,I.displacementScale=B.displacementScale,I.displacementBias=B.displacementBias,I.wireframeLinewidth=B.wireframeLinewidth,I.linewidth=B.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const ie=r.properties.get(I);ie.light=T}return I}function L(C,B,T,O,I){if(C.visible===!1)return;if(C.layers.test(B.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&I===fs)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);const ae=e.update(C),V=C.material;if(Array.isArray(V)){const z=ae.groups;for(let J=0,se=z.length;J<se;J++){const ce=z[J],oe=V[ce.materialIndex];if(oe&&oe.visible){const pe=k(C,oe,O,I);C.onBeforeShadow(r,C,B,T,ae,pe,ce),r.renderBufferDirect(T,null,ae,pe,C,ce),C.onAfterShadow(r,C,B,T,ae,pe,ce)}}}else if(V.visible){const z=k(C,V,O,I);C.onBeforeShadow(r,C,B,T,ae,z,null),r.renderBufferDirect(T,null,ae,z,C,null),C.onAfterShadow(r,C,B,T,ae,z,null)}}const ie=C.children;for(let ae=0,V=ie.length;ae<V;ae++)L(ie[ae],B,T,O,I)}function D(C){C.target.removeEventListener("dispose",D);for(const T in d){const O=d[T],I=C.target.uuid;I in O&&(O[I].dispose(),delete O[I])}}}function ob(r,e){function t(){let W=!1;const K=new Ot;let H=null;const be=new Ot(0,0,0,0);return{setMask:function(De){H!==De&&!W&&(r.colorMask(De,De,De,De),H=De)},setLocked:function(De){W=De},setClear:function(De,ve,Be,Ve,yt){yt===!0&&(De*=Ve,ve*=Ve,Be*=Ve),K.set(De,ve,Be,Ve),be.equals(K)===!1&&(r.clearColor(De,ve,Be,Ve),be.copy(K))},reset:function(){W=!1,H=null,be.set(-1,0,0,0)}}}function n(){let W=!1,K=!1,H=null,be=null,De=null;return{setReversed:function(ve){if(K!==ve){const Be=e.get("EXT_clip_control");ve?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),K=ve;const Ve=De;De=null,this.setClear(Ve)}},getReversed:function(){return K},setTest:function(ve){ve?Z(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(ve){H!==ve&&!W&&(r.depthMask(ve),H=ve)},setFunc:function(ve){if(K&&(ve=zv[ve]),be!==ve){switch(ve){case sl:r.depthFunc(r.NEVER);break;case al:r.depthFunc(r.ALWAYS);break;case ol:r.depthFunc(r.LESS);break;case Ss:r.depthFunc(r.LEQUAL);break;case ll:r.depthFunc(r.EQUAL);break;case cl:r.depthFunc(r.GEQUAL);break;case ul:r.depthFunc(r.GREATER);break;case hl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}be=ve}},setLocked:function(ve){W=ve},setClear:function(ve){De!==ve&&(De=ve,K&&(ve=1-ve),r.clearDepth(ve))},reset:function(){W=!1,H=null,be=null,De=null,K=!1}}}function i(){let W=!1,K=null,H=null,be=null,De=null,ve=null,Be=null,Ve=null,yt=null;return{setTest:function(Mt){W||(Mt?Z(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(Mt){K!==Mt&&!W&&(r.stencilMask(Mt),K=Mt)},setFunc:function(Mt,wn,In){(H!==Mt||be!==wn||De!==In)&&(r.stencilFunc(Mt,wn,In),H=Mt,be=wn,De=In)},setOp:function(Mt,wn,In){(ve!==Mt||Be!==wn||Ve!==In)&&(r.stencilOp(Mt,wn,In),ve=Mt,Be=wn,Ve=In)},setLocked:function(Mt){W=Mt},setClear:function(Mt){yt!==Mt&&(r.clearStencil(Mt),yt=Mt)},reset:function(){W=!1,K=null,H=null,be=null,De=null,ve=null,Be=null,Ve=null,yt=null}}}const s=new t,l=new n,c=new i,h=new WeakMap,d=new WeakMap;let m={},f={},g={},v=new WeakMap,M=[],P=null,S=!1,x=null,N=null,k=null,L=null,D=null,C=null,B=null,T=new Xe(0,0,0),O=0,I=!1,j=null,ie=null,ae=null,V=null,z=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ce=0;const oe=r.getParameter(r.VERSION);oe.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(oe)[1]),se=ce>=1):oe.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),se=ce>=2);let pe=null,me={};const ke=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),Fe=new Ot().fromArray(ke),Ke=new Ot().fromArray(Ie);function at(W,K,H,be){const De=new Uint8Array(4),ve=r.createTexture();r.bindTexture(W,ve),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Be=0;Be<H;Be++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(K,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(K+Be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return ve}const le={};le[r.TEXTURE_2D]=at(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=at(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[r.TEXTURE_2D_ARRAY]=at(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=at(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Z(r.DEPTH_TEST),l.setFunc(Ss),gt(!1),zt(Su),Z(r.CULL_FACE),St(fi);function Z(W){m[W]!==!0&&(r.enable(W),m[W]=!0)}function xe(W){m[W]!==!1&&(r.disable(W),m[W]=!1)}function tt(W,K){return g[W]!==K?(r.bindFramebuffer(W,K),g[W]=K,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=K),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=K),!0):!1}function Ne(W,K){let H=M,be=!1;if(W){H=v.get(K),H===void 0&&(H=[],v.set(K,H));const De=W.textures;if(H.length!==De.length||H[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,Be=De.length;ve<Be;ve++)H[ve]=r.COLOR_ATTACHMENT0+ve;H.length=De.length,be=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,be=!0);be&&r.drawBuffers(H)}function Je(W){return P!==W?(r.useProgram(W),P=W,!0):!1}const Xt={[wr]:r.FUNC_ADD,[sv]:r.FUNC_SUBTRACT,[av]:r.FUNC_REVERSE_SUBTRACT};Xt[ov]=r.MIN,Xt[lv]=r.MAX;const ot={[cv]:r.ZERO,[uv]:r.ONE,[hv]:r.SRC_COLOR,[Yh]:r.SRC_ALPHA,[_v]:r.SRC_ALPHA_SATURATE,[mv]:r.DST_COLOR,[fv]:r.DST_ALPHA,[dv]:r.ONE_MINUS_SRC_COLOR,[Kh]:r.ONE_MINUS_SRC_ALPHA,[gv]:r.ONE_MINUS_DST_COLOR,[pv]:r.ONE_MINUS_DST_ALPHA,[vv]:r.CONSTANT_COLOR,[xv]:r.ONE_MINUS_CONSTANT_COLOR,[yv]:r.CONSTANT_ALPHA,[Sv]:r.ONE_MINUS_CONSTANT_ALPHA};function St(W,K,H,be,De,ve,Be,Ve,yt,Mt){if(W===fi){S===!0&&(xe(r.BLEND),S=!1);return}if(S===!1&&(Z(r.BLEND),S=!0),W!==rv){if(W!==x||Mt!==I){if((N!==wr||D!==wr)&&(r.blendEquation(r.FUNC_ADD),N=wr,D=wr),Mt)switch(W){case _s:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ir:r.blendFunc(r.ONE,r.ONE);break;case Mu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Eu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:et("WebGLState: Invalid blending: ",W);break}else switch(W){case _s:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Mu:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eu:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",W);break}k=null,L=null,C=null,B=null,T.set(0,0,0),O=0,x=W,I=Mt}return}De=De||K,ve=ve||H,Be=Be||be,(K!==N||De!==D)&&(r.blendEquationSeparate(Xt[K],Xt[De]),N=K,D=De),(H!==k||be!==L||ve!==C||Be!==B)&&(r.blendFuncSeparate(ot[H],ot[be],ot[ve],ot[Be]),k=H,L=be,C=ve,B=Be),(Ve.equals(T)===!1||yt!==O)&&(r.blendColor(Ve.r,Ve.g,Ve.b,yt),T.copy(Ve),O=yt),x=W,I=!1}function Nt(W,K){W.side===qn?xe(r.CULL_FACE):Z(r.CULL_FACE);let H=W.side===pn;K&&(H=!H),gt(H),W.blending===_s&&W.transparent===!1?St(fi):St(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),s.setMask(W.colorWrite);const be=W.stencilWrite;c.setTest(be),be&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(W){j!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),j=W)}function zt(W){W!==tv?(Z(r.CULL_FACE),W!==ie&&(W===Su?r.cullFace(r.BACK):W===nv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),ie=W}function Ht(W){W!==ae&&(se&&r.lineWidth(W),ae=W)}function Kt(W,K,H){W?(Z(r.POLYGON_OFFSET_FILL),(V!==K||z!==H)&&(V=K,z=H,l.getReversed()&&(K=-K),r.polygonOffset(K,H))):xe(r.POLYGON_OFFSET_FILL)}function Rt(W){W?Z(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)}function Ft(W){W===void 0&&(W=r.TEXTURE0+J-1),pe!==W&&(r.activeTexture(W),pe=W)}function X(W,K,H){H===void 0&&(pe===null?H=r.TEXTURE0+J-1:H=pe);let be=me[H];be===void 0&&(be={type:void 0,texture:void 0},me[H]=be),(be.type!==W||be.texture!==K)&&(pe!==H&&(r.activeTexture(H),pe=H),r.bindTexture(W,K||le[W]),be.type=W,be.texture=K)}function $t(){const W=me[pe];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Qe(){try{r.compressedTexImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function E(){try{r.texSubImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function Q(){try{r.texSubImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function re(){try{r.compressedTexSubImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function he(){try{r.compressedTexSubImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function Ee(){try{r.texStorage2D(...arguments)}catch(W){et("WebGLState:",W)}}function Te(){try{r.texStorage3D(...arguments)}catch(W){et("WebGLState:",W)}}function de(){try{r.texImage2D(...arguments)}catch(W){et("WebGLState:",W)}}function _e(){try{r.texImage3D(...arguments)}catch(W){et("WebGLState:",W)}}function we(W){return f[W]!==void 0?f[W]:r.getParameter(W)}function $e(W,K){f[W]!==K&&(r.pixelStorei(W,K),f[W]=K)}function Re(W){Fe.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Fe.copy(W))}function Ae(W){Ke.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ke.copy(W))}function qe(W,K){let H=d.get(K);H===void 0&&(H=new WeakMap,d.set(K,H));let be=H.get(W);be===void 0&&(be=r.getUniformBlockIndex(K,W.name),H.set(W,be))}function Ze(W,K){const be=d.get(K).get(W);h.get(K)!==be&&(r.uniformBlockBinding(K,be,W.__bindingPointIndex),h.set(K,be))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),l.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),m={},f={},pe=null,me={},g={},v=new WeakMap,M=[],P=null,S=!1,x=null,N=null,k=null,L=null,D=null,C=null,B=null,T=new Xe(0,0,0),O=0,I=!1,j=null,ie=null,ae=null,V=null,z=null,Fe.set(0,0,r.canvas.width,r.canvas.height),Ke.set(0,0,r.canvas.width,r.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Z,disable:xe,bindFramebuffer:tt,drawBuffers:Ne,useProgram:Je,setBlending:St,setMaterial:Nt,setFlipSided:gt,setCullFace:zt,setLineWidth:Ht,setPolygonOffset:Kt,setScissorTest:Rt,activeTexture:Ft,bindTexture:X,unbindTexture:$t,compressedTexImage2D:Qe,compressedTexImage3D:F,texImage2D:de,texImage3D:_e,pixelStorei:$e,getParameter:we,updateUBOMapping:qe,uniformBlockBinding:Ze,texStorage2D:Ee,texStorage3D:Te,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Re,viewport:Ae,reset:nt}}function lb(r,e,t,n,i,s,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ge,m=new WeakMap,f=new Set;let g;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(F,E){return M?new OffscreenCanvas(F,E):As("canvas")}function S(F,E,Q){let re=1;const he=Qe(F);if((he.width>Q||he.height>Q)&&(re=Q/Math.max(he.width,he.height)),re<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Ee=Math.floor(re*he.width),Te=Math.floor(re*he.height);g===void 0&&(g=P(Ee,Te));const de=E?P(Ee,Te):g;return de.width=Ee,de.height=Te,de.getContext("2d").drawImage(F,0,0,Ee,Te),Ye("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+Te+")."),de}else return"data"in F&&Ye("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),F;return F}function x(F){return F.generateMipmaps}function N(F){r.generateMipmap(F)}function k(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(F,E,Q,re,he,Ee=!1){if(F!==null){if(r[F]!==void 0)return r[F];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Te;re&&(Te=e.get("EXT_texture_norm16"),Te||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=E;if(E===r.RED&&(Q===r.FLOAT&&(de=r.R32F),Q===r.HALF_FLOAT&&(de=r.R16F),Q===r.UNSIGNED_BYTE&&(de=r.R8),Q===r.UNSIGNED_SHORT&&Te&&(de=Te.R16_EXT),Q===r.SHORT&&Te&&(de=Te.R16_SNORM_EXT)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.R8UI),Q===r.UNSIGNED_SHORT&&(de=r.R16UI),Q===r.UNSIGNED_INT&&(de=r.R32UI),Q===r.BYTE&&(de=r.R8I),Q===r.SHORT&&(de=r.R16I),Q===r.INT&&(de=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(de=r.RG32F),Q===r.HALF_FLOAT&&(de=r.RG16F),Q===r.UNSIGNED_BYTE&&(de=r.RG8),Q===r.UNSIGNED_SHORT&&Te&&(de=Te.RG16_EXT),Q===r.SHORT&&Te&&(de=Te.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RG8UI),Q===r.UNSIGNED_SHORT&&(de=r.RG16UI),Q===r.UNSIGNED_INT&&(de=r.RG32UI),Q===r.BYTE&&(de=r.RG8I),Q===r.SHORT&&(de=r.RG16I),Q===r.INT&&(de=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(de=r.RGB16UI),Q===r.UNSIGNED_INT&&(de=r.RGB32UI),Q===r.BYTE&&(de=r.RGB8I),Q===r.SHORT&&(de=r.RGB16I),Q===r.INT&&(de=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),Q===r.UNSIGNED_INT&&(de=r.RGBA32UI),Q===r.BYTE&&(de=r.RGBA8I),Q===r.SHORT&&(de=r.RGBA16I),Q===r.INT&&(de=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_SHORT&&Te&&(de=Te.RGB16_EXT),Q===r.SHORT&&Te&&(de=Te.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),E===r.RGBA){const _e=Ee?Ga:vt.getTransfer(he);Q===r.FLOAT&&(de=r.RGBA32F),Q===r.HALF_FLOAT&&(de=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(de=_e===Pt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Te&&(de=Te.RGBA16_EXT),Q===r.SHORT&&Te&&(de=Te.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function D(F,E){let Q;return F?E===null||E===mi||E===Es?Q=r.DEPTH24_STENCIL8:E===zn?Q=r.DEPTH32F_STENCIL8:E===Ms&&(Q=r.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===mi||E===Es?Q=r.DEPTH_COMPONENT24:E===zn?Q=r.DEPTH_COMPONENT32F:E===Ms&&(Q=r.DEPTH_COMPONENT16),Q}function C(F,E){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==en&&F.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function B(F){const E=F.target;E.removeEventListener("dispose",B),O(E),E.isVideoTexture&&m.delete(E),E.isHTMLTexture&&f.delete(E)}function T(F){const E=F.target;E.removeEventListener("dispose",T),j(E)}function O(F){const E=n.get(F);if(E.__webglInit===void 0)return;const Q=F.source,re=v.get(Q);if(re){const he=re[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&I(F),Object.keys(re).length===0&&v.delete(Q)}n.remove(F)}function I(F){const E=n.get(F);r.deleteTexture(E.__webglTexture);const Q=F.source,re=v.get(Q);delete re[E.__cacheKey],l.memory.textures--}function j(F){const E=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let he=0;he<E.__webglFramebuffer[re].length;he++)r.deleteFramebuffer(E.__webglFramebuffer[re][he]);else r.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)r.deleteFramebuffer(E.__webglFramebuffer[re]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=F.textures;for(let re=0,he=Q.length;re<he;re++){const Ee=n.get(Q[re]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),l.memory.textures--),n.remove(Q[re])}n.remove(F)}let ie=0;function ae(){ie=0}function V(){return ie}function z(F){ie=F}function J(){const F=ie;return F>=i.maxTextures&&Ye("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+i.maxTextures),ie+=1,F}function se(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function ce(F,E){const Q=n.get(F);if(F.isVideoTexture&&X(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Q.__version!==F.version){const re=F.image;if(re===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(Q,F,E);return}}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function oe(F,E){const Q=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){xe(Q,F,E);return}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function pe(F,E){const Q=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){xe(Q,F,E);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function me(F,E){const Q=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Q.__version!==F.version){tt(Q,F,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const ke={[Fr]:r.REPEAT,[ui]:r.CLAMP_TO_EDGE,[Ba]:r.MIRRORED_REPEAT},Ie={[en]:r.NEAREST,[Zh]:r.NEAREST_MIPMAP_NEAREST,[ps]:r.NEAREST_MIPMAP_LINEAR,[tn]:r.LINEAR,[Pa]:r.LINEAR_MIPMAP_NEAREST,[Ti]:r.LINEAR_MIPMAP_LINEAR},Fe={[Pv]:r.NEVER,[Fv]:r.ALWAYS,[Lv]:r.LESS,[fc]:r.LEQUAL,[Dv]:r.EQUAL,[pc]:r.GEQUAL,[Iv]:r.GREATER,[Nv]:r.NOTEQUAL};function Ke(F,E){if(E.type===zn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===tn||E.magFilter===Pa||E.magFilter===ps||E.magFilter===Ti||E.minFilter===tn||E.minFilter===Pa||E.minFilter===ps||E.minFilter===Ti)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,ke[E.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,ke[E.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,ke[E.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,Ie[E.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,Ie[E.minFilter]),E.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,Fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===en||E.minFilter!==ps&&E.minFilter!==Ti||E.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function at(F,E){let Q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",B));const re=E.source;let he=v.get(re);he===void 0&&(he={},v.set(re,he));const Ee=se(E);if(Ee!==F.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,Q=!0),he[Ee].usedTimes++;const Te=he[F.__cacheKey];Te!==void 0&&(he[F.__cacheKey].usedTimes--,Te.usedTimes===0&&I(E)),F.__cacheKey=Ee,F.__webglTexture=he[Ee].texture}return Q}function le(F,E,Q){return Math.floor(Math.floor(F/Q)/E)}function Z(F,E,Q,re){const Ee=F.updateRanges;if(Ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,re,E.data);else{Ee.sort(($e,Re)=>$e.start-Re.start);let Te=0;for(let $e=1;$e<Ee.length;$e++){const Re=Ee[Te],Ae=Ee[$e],qe=Re.start+Re.count,Ze=le(Ae.start,E.width,4),nt=le(Re.start,E.width,4);Ae.start<=qe+1&&Ze===nt&&le(Ae.start+Ae.count-1,E.width,4)===Ze?Re.count=Math.max(Re.count,Ae.start+Ae.count-Re.start):(++Te,Ee[Te]=Ae)}Ee.length=Te+1;const de=t.getParameter(r.UNPACK_ROW_LENGTH),_e=t.getParameter(r.UNPACK_SKIP_PIXELS),we=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let $e=0,Re=Ee.length;$e<Re;$e++){const Ae=Ee[$e],qe=Math.floor(Ae.start/4),Ze=Math.ceil(Ae.count/4),nt=qe%E.width,W=Math.floor(qe/E.width),K=Ze,H=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(r.UNPACK_SKIP_ROWS,W),t.texSubImage2D(r.TEXTURE_2D,0,nt,W,K,H,Q,re,E.data)}F.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,de),t.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(r.UNPACK_SKIP_ROWS,we)}}function xe(F,E,Q){let re=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=r.TEXTURE_3D);const he=at(F,E),Ee=E.source;t.bindTexture(re,F.__webglTexture,r.TEXTURE0+Q);const Te=n.get(Ee);if(Ee.version!==Te.__version||he===!0){if(t.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const H=vt.getPrimaries(vt.workingColorSpace),be=E.colorSpace===Hi?null:vt.getPrimaries(E.colorSpace),De=E.colorSpace===Hi||H===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let _e=S(E.image,!1,i.maxTextureSize);_e=$t(E,_e);const we=s.convert(E.format,E.colorSpace),$e=s.convert(E.type);let Re=L(E.internalFormat,we,$e,E.normalized,E.colorSpace,E.isVideoTexture);Ke(re,E);let Ae;const qe=E.mipmaps,Ze=E.isVideoTexture!==!0,nt=Te.__version===void 0||he===!0,W=Ee.dataReady,K=C(E,_e);if(E.isDepthTexture)Re=D(E.format===rr,E.type),nt&&(Ze?t.texStorage2D(r.TEXTURE_2D,1,Re,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,Re,_e.width,_e.height,0,we,$e,null));else if(E.isDataTexture)if(qe.length>0){Ze&&nt&&t.texStorage2D(r.TEXTURE_2D,K,Re,qe[0].width,qe[0].height);for(let H=0,be=qe.length;H<be;H++)Ae=qe[H],Ze?W&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,Ae.width,Ae.height,we,$e,Ae.data):t.texImage2D(r.TEXTURE_2D,H,Re,Ae.width,Ae.height,0,we,$e,Ae.data);E.generateMipmaps=!1}else Ze?(nt&&t.texStorage2D(r.TEXTURE_2D,K,Re,_e.width,_e.height),W&&Z(E,_e,we,$e)):t.texImage2D(r.TEXTURE_2D,0,Re,_e.width,_e.height,0,we,$e,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,K,Re,qe[0].width,qe[0].height,_e.depth);for(let H=0,be=qe.length;H<be;H++)if(Ae=qe[H],E.format!==Hn)if(we!==null)if(Ze){if(W)if(E.layerUpdates.size>0){const De=gh(Ae.width,Ae.height,E.format,E.type);for(const ve of E.layerUpdates){const Be=Ae.data.subarray(ve*De/Ae.data.BYTES_PER_ELEMENT,(ve+1)*De/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,ve,Ae.width,Ae.height,1,we,Be)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,Ae.width,Ae.height,_e.depth,we,Ae.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,Re,Ae.width,Ae.height,_e.depth,0,Ae.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,Ae.width,Ae.height,_e.depth,we,$e,Ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,Re,Ae.width,Ae.height,_e.depth,0,we,$e,Ae.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ze&&nt&&t.texStorage2D(r.TEXTURE_2D,K,Re,qe[0].width,qe[0].height);for(let H=0,be=qe.length;H<be;H++)Ae=qe[H],E.format!==Hn?we!==null?Ze?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(r.TEXTURE_2D,H,Re,Ae.width,Ae.height,0,Ae.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?W&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,Ae.width,Ae.height,we,$e,Ae.data):t.texImage2D(r.TEXTURE_2D,H,Re,Ae.width,Ae.height,0,we,$e,Ae.data)}else if(E.isDataArrayTexture)if(Ze){if(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,K,Re,_e.width,_e.height,_e.depth),W)if(E.layerUpdates.size>0){const H=gh(_e.width,_e.height,E.format,E.type);for(const be of E.layerUpdates){const De=_e.data.subarray(be*H/_e.data.BYTES_PER_ELEMENT,(be+1)*H/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,be,_e.width,_e.height,1,we,$e,De)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,we,$e,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Re,_e.width,_e.height,_e.depth,0,we,$e,_e.data);else if(E.isData3DTexture)Ze?(nt&&t.texStorage3D(r.TEXTURE_3D,K,Re,_e.width,_e.height,_e.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,we,$e,_e.data)):t.texImage3D(r.TEXTURE_3D,0,Re,_e.width,_e.height,_e.depth,0,we,$e,_e.data);else if(E.isFramebufferTexture){if(nt)if(Ze)t.texStorage2D(r.TEXTURE_2D,K,Re,_e.width,_e.height);else{let H=_e.width,be=_e.height;for(let De=0;De<K;De++)t.texImage2D(r.TEXTURE_2D,De,Re,H,be,0,we,$e,null),H>>=1,be>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const H=r.canvas;if(H.hasAttribute("layoutsubtree")||H.setAttribute("layoutsubtree","true"),_e.parentNode!==H){H.appendChild(_e),f.add(E),H.onpaint=be=>{const De=be.changedElements;for(const ve of f)De.includes(ve.image)&&(ve.needsUpdate=!0)},H.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,_e);else{const De=r.RGBA,ve=r.RGBA,Be=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,De,ve,Be,_e)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(qe.length>0){if(Ze&&nt){const H=Qe(qe[0]);t.texStorage2D(r.TEXTURE_2D,K,Re,H.width,H.height)}for(let H=0,be=qe.length;H<be;H++)Ae=qe[H],Ze?W&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,we,$e,Ae):t.texImage2D(r.TEXTURE_2D,H,Re,we,$e,Ae);E.generateMipmaps=!1}else if(Ze){if(nt){const H=Qe(_e);t.texStorage2D(r.TEXTURE_2D,K,Re,H.width,H.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we,$e,_e)}else t.texImage2D(r.TEXTURE_2D,0,Re,we,$e,_e);x(E)&&N(re),Te.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function tt(F,E,Q){if(E.image.length!==6)return;const re=at(F,E),he=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+Q);const Ee=n.get(he);if(he.version!==Ee.__version||re===!0){t.activeTexture(r.TEXTURE0+Q);const Te=vt.getPrimaries(vt.workingColorSpace),de=E.colorSpace===Hi?null:vt.getPrimaries(E.colorSpace),_e=E.colorSpace===Hi||Te===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,$e=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let ve=0;ve<6;ve++)!we&&!$e?Re[ve]=S(E.image[ve],!0,i.maxCubemapSize):Re[ve]=$e?E.image[ve].image:E.image[ve],Re[ve]=$t(E,Re[ve]);const Ae=Re[0],qe=s.convert(E.format,E.colorSpace),Ze=s.convert(E.type),nt=L(E.internalFormat,qe,Ze,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,K=Ee.__version===void 0||re===!0,H=he.dataReady;let be=C(E,Ae);Ke(r.TEXTURE_CUBE_MAP,E);let De;if(we){W&&K&&t.texStorage2D(r.TEXTURE_CUBE_MAP,be,nt,Ae.width,Ae.height);for(let ve=0;ve<6;ve++){De=Re[ve].mipmaps;for(let Be=0;Be<De.length;Be++){const Ve=De[Be];E.format!==Hn?qe!==null?W?H&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,Ve.width,Ve.height,qe,Ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,nt,Ve.width,Ve.height,0,Ve.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,Ve.width,Ve.height,qe,Ze,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,nt,Ve.width,Ve.height,0,qe,Ze,Ve.data)}}}else{if(De=E.mipmaps,W&&K){De.length>0&&be++;const ve=Qe(Re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,be,nt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if($e){W?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Re[ve].width,Re[ve].height,qe,Ze,Re[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Re[ve].width,Re[ve].height,0,qe,Ze,Re[ve].data);for(let Be=0;Be<De.length;Be++){const yt=De[Be].image[ve].image;W?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,yt.width,yt.height,qe,Ze,yt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,nt,yt.width,yt.height,0,qe,Ze,yt.data)}}else{W?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,qe,Ze,Re[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,qe,Ze,Re[ve]);for(let Be=0;Be<De.length;Be++){const Ve=De[Be];W?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,qe,Ze,Ve.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,nt,qe,Ze,Ve.image[ve])}}}x(E)&&N(r.TEXTURE_CUBE_MAP),Ee.__version=he.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Ne(F,E,Q,re,he,Ee){const Te=s.convert(Q.format,Q.colorSpace),de=s.convert(Q.type),_e=L(Q.internalFormat,Te,de,Q.normalized,Q.colorSpace),we=n.get(E),$e=n.get(Q);if($e.__renderTarget=E,!we.__hasExternalTextures){const Re=Math.max(1,E.width>>Ee),Ae=Math.max(1,E.height>>Ee);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,_e,Re,Ae,E.depth,0,Te,de,null):t.texImage2D(he,Ee,_e,Re,Ae,0,Te,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),Ft(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,he,$e.__webglTexture,0,Rt(E)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,he,$e.__webglTexture,Ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(F,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,F),E.depthBuffer){const re=E.depthTexture,he=re&&re.isDepthTexture?re.type:null,Ee=D(E.stencilBuffer,he),Te=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ft(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt(E),Ee,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt(E),Ee,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,F)}else{const re=E.textures;for(let he=0;he<re.length;he++){const Ee=re[he],Te=s.convert(Ee.format,Ee.colorSpace),de=s.convert(Ee.type),_e=L(Ee.internalFormat,Te,de,Ee.normalized,Ee.colorSpace);Ft(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt(E),_e,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt(E),_e,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,_e,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(F,E,Q){const re=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=n.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Ke(r.TEXTURE_CUBE_MAP,E.depthTexture);const we=s.convert(E.depthTexture.format),$e=s.convert(E.depthTexture.type);let Re;E.depthTexture.format===Ri?Re=r.DEPTH_COMPONENT24:E.depthTexture.format===rr&&(Re=r.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Re,E.width,E.height,0,we,$e,null)}}else ce(E.depthTexture,0);const Ee=he.__webglTexture,Te=Rt(E),de=re?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,_e=E.depthTexture.format===rr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ri)Ft(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,de,Ee,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,_e,de,Ee,0);else if(E.depthTexture.format===rr)Ft(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,de,Ee,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,_e,de,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(F){const E=n.get(F),Q=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const re=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",he)};re.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=re}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let re=0;re<6;re++)Xt(E.__webglFramebuffer[re],F,re);else{const re=F.texture.mipmaps;re&&re.length>0?Xt(E.__webglFramebuffer[0],F,0):Xt(E.__webglFramebuffer,F,0)}else if(Q){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=r.createRenderbuffer(),Je(E.__webglDepthbuffer[re],F,!1);else{const he=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ee)}}else{const re=F.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Je(E.__webglDepthbuffer,F,!1);else{const he=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function St(F,E,Q){const re=n.get(F);E!==void 0&&Ne(re.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&ot(F)}function Nt(F){const E=F.texture,Q=n.get(F),re=n.get(E);F.addEventListener("dispose",T);const he=F.textures,Ee=F.isWebGLCubeRenderTarget===!0,Te=he.length>1;if(Te||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=E.version,l.memory.textures++),Ee){Q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[de]=[];for(let _e=0;_e<E.mipmaps.length;_e++)Q.__webglFramebuffer[de][_e]=r.createFramebuffer()}else Q.__webglFramebuffer[de]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)Q.__webglFramebuffer[de]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Te)for(let de=0,_e=he.length;de<_e;de++){const we=n.get(he[de]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),l.memory.textures++)}if(F.samples>0&&Ft(F)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){const _e=he[de];Q.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[de]);const we=s.convert(_e.format,_e.colorSpace),$e=s.convert(_e.type),Re=L(_e.internalFormat,we,$e,_e.normalized,_e.colorSpace,F.isXRRenderTarget===!0),Ae=Rt(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,Re,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,Q.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(Q.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Ke(r.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Ne(Q.__webglFramebuffer[de][_e],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else Ne(Q.__webglFramebuffer[de],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(E)&&N(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,_e=he.length;de<_e;de++){const we=he[de],$e=n.get(we);let Re=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Re=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,$e.__webglTexture),Ke(Re,we),Ne(Q.__webglFramebuffer,F,we,r.COLOR_ATTACHMENT0+de,Re,0),x(we)&&N(Re)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(de=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,re.__webglTexture),Ke(de,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Ne(Q.__webglFramebuffer[_e],F,E,r.COLOR_ATTACHMENT0,de,_e);else Ne(Q.__webglFramebuffer,F,E,r.COLOR_ATTACHMENT0,de,0);x(E)&&N(de),t.unbindTexture()}F.depthBuffer&&ot(F)}function gt(F){const E=F.textures;for(let Q=0,re=E.length;Q<re;Q++){const he=E[Q];if(x(he)){const Ee=k(F),Te=n.get(he).__webglTexture;t.bindTexture(Ee,Te),N(Ee),t.unbindTexture()}}}const zt=[],Ht=[];function Kt(F){if(F.samples>0){if(Ft(F)===!1){const E=F.textures,Q=F.width,re=F.height;let he=r.COLOR_BUFFER_BIT;const Ee=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(F),de=E.length>1;if(de)for(let we=0;we<E.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const _e=F.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let we=0;we<E.length;we++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[we]);const $e=n.get(E[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$e,0)}r.blitFramebuffer(0,0,Q,re,0,0,Q,re,he,r.NEAREST),h===!0&&(zt.length=0,Ht.length=0,zt.push(r.COLOR_ATTACHMENT0+we),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(zt.push(Ee),Ht.push(Ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ht)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,zt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let we=0;we<E.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,Te.__webglColorRenderbuffer[we]);const $e=n.get(E[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,$e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&h){const E=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Rt(F){return Math.min(i.maxSamples,F.samples)}function Ft(F){const E=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(F){const E=l.render.frame;m.get(F)!==E&&(m.set(F,E),F.update())}function $t(F,E){const Q=F.colorSpace,re=F.format,he=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Q!==Ln&&Q!==Hi&&(vt.getTransfer(Q)===Pt?(re!==Hn||he!==Pn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",Q)),E}function Qe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.getTextureUnits=V,this.setTextureUnits=z,this.setTexture2D=ce,this.setTexture2DArray=oe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=St,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cb(r,e){function t(n,i=Hi){let s;const l=vt.getTransfer(i);if(n===Pn)return r.UNSIGNED_BYTE;if(n===oc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ed)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===td)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jh)return r.BYTE;if(n===Qh)return r.SHORT;if(n===Ms)return r.UNSIGNED_SHORT;if(n===ac)return r.INT;if(n===mi)return r.UNSIGNED_INT;if(n===zn)return r.FLOAT;if(n===Tn)return r.HALF_FLOAT;if(n===nd)return r.ALPHA;if(n===id)return r.RGB;if(n===Hn)return r.RGBA;if(n===Ri)return r.DEPTH_COMPONENT;if(n===rr)return r.DEPTH_STENCIL;if(n===cc)return r.RED;if(n===uc)return r.RED_INTEGER;if(n===ar)return r.RG;if(n===hc)return r.RG_INTEGER;if(n===dc)return r.RGBA_INTEGER;if(n===La||n===Da||n===Ia||n===Na)if(l===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===La)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===La)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dl||n===fl||n===pl||n===ml)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gl||n===_l||n===vl||n===xl||n===yl||n===za||n===Sl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gl||n===_l)return l===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===vl)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===xl)return s.COMPRESSED_R11_EAC;if(n===yl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===za)return s.COMPRESSED_RG11_EAC;if(n===Sl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ml||n===El||n===bl||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Dl||n===Il||n===Nl||n===Fl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ml)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return l===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ul||n===Ol||n===kl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ul)return l===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===zl||n===Ha||n===Hl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hb=`
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

}`;class db{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new xd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qt({vertexShader:ub,fragmentShader:hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fb extends Wi{constructor(e,t){super();const n=this;let i=null,s=1,l=null,c="local-floor",h=1,d=null,m=null,f=null,g=null,v=null,M=null;const P=typeof XRWebGLBinding<"u",S=new db,x={},N=t.getContextAttributes();let k=null,L=null;const D=[],C=[],B=new Ge;let T=null,O=null;const I=new yn;I.viewport=new Ot;const j=new yn;j.viewport=new Ot;const ie=[I,j],ae=new lx;let V=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Z=D[le];return Z===void 0&&(Z=new wo,D[le]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(le){let Z=D[le];return Z===void 0&&(Z=new wo,D[le]=Z),Z.getGripSpace()},this.getHand=function(le){let Z=D[le];return Z===void 0&&(Z=new wo,D[le]=Z),Z.getHandSpace()};function J(le){const Z=C.indexOf(le.inputSource);if(Z===-1)return;const xe=D[Z];xe!==void 0&&(xe.update(le.inputSource,le.frame,d||l),xe.dispatchEvent({type:le.type,data:le.inputSource}))}function se(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",se),i.removeEventListener("inputsourceschange",ce);for(let le=0;le<D.length;le++){const Z=C[le];Z!==null&&(C[le]=null,D[le].disconnect(Z))}V=null,z=null,S.reset();for(const le in x)delete x[le];if(e.setRenderTarget(k),v=null,g=null,f=null,i=null,L=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),O!==null){const le=O.camera;le.fov=O.fov,le.zoom=O.zoom,le.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){s=le,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){c=le,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(le){d=le},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return f===null&&P&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return M},this.getSession=function(){return i},this.setSession=async function(le){if(i=le,i!==null){if(k=e.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",se),i.addEventListener("inputsourceschange",ce),N.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,tt=null,Ne=null;N.depth&&(Ne=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=N.stencil?rr:Ri,tt=N.stencil?Es:mi);const Je={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};f=this.getBinding(),g=f.createProjectionLayer(Je),i.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Sn(g.textureWidth,g.textureHeight,{format:Hn,type:Pn,depthTexture:new Rs(g.textureWidth,g.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const xe={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),L=new Sn(v.framebufferWidth,v.framebufferHeight,{format:Hn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),d=null,l=await i.requestReferenceSpace(c),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ce(le){for(let Z=0;Z<le.removed.length;Z++){const xe=le.removed[Z],tt=C.indexOf(xe);tt>=0&&(C[tt]=null,D[tt].disconnect(xe))}for(let Z=0;Z<le.added.length;Z++){const xe=le.added[Z];let tt=C.indexOf(xe);if(tt===-1){for(let Je=0;Je<D.length;Je++)if(Je>=C.length){C.push(xe),tt=Je;break}else if(C[Je]===null){C[Je]=xe,tt=Je;break}if(tt===-1)break}const Ne=D[tt];Ne&&Ne.connect(xe)}}const oe=new $,pe=new $;function me(le,Z,xe){oe.setFromMatrixPosition(Z.matrixWorld),pe.setFromMatrixPosition(xe.matrixWorld);const tt=oe.distanceTo(pe),Ne=Z.projectionMatrix.elements,Je=xe.projectionMatrix.elements,Xt=Ne[14]/(Ne[10]-1),ot=Ne[14]/(Ne[10]+1),St=(Ne[9]+1)/Ne[5],Nt=(Ne[9]-1)/Ne[5],gt=(Ne[8]-1)/Ne[0],zt=(Je[8]+1)/Je[0],Ht=Xt*gt,Kt=Xt*zt,Rt=tt/(-gt+zt),Ft=Rt*-gt;if(Z.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Ft),le.translateZ(Rt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Ne[10]===-1)le.projectionMatrix.copy(Z.projectionMatrix),le.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const X=Xt+Rt,$t=ot+Rt,Qe=Ht-Ft,F=Kt+(tt-Ft),E=St*ot/$t*X,Q=Nt*ot/$t*X;le.projectionMatrix.makePerspective(Qe,F,E,Q,X,$t),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function ke(le,Z){Z===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Z.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(i===null)return;let Z=le.near,xe=le.far;S.texture!==null&&(S.depthNear>0&&(Z=S.depthNear),S.depthFar>0&&(xe=S.depthFar)),ae.near=j.near=I.near=Z,ae.far=j.far=I.far=xe,(V!==ae.near||z!==ae.far)&&(i.updateRenderState({depthNear:ae.near,depthFar:ae.far}),V=ae.near,z=ae.far),ae.layers.mask=le.layers.mask|6,I.layers.mask=ae.layers.mask&-5,j.layers.mask=ae.layers.mask&-3;const tt=le.parent,Ne=ae.cameras;ke(ae,tt);for(let Je=0;Je<Ne.length;Je++)ke(Ne[Je],tt);Ne.length===2?me(ae,I,j):ae.projectionMatrix.copy(I.projectionMatrix),O===null&&le.isPerspectiveCamera&&(O={camera:le,fov:le.fov,zoom:le.zoom}),Ie(le,ae,tt)};function Ie(le,Z,xe){xe===null?le.matrix.copy(Z.matrixWorld):(le.matrix.copy(xe.matrixWorld),le.matrix.invert(),le.matrix.multiply(Z.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Z.projectionMatrix),le.projectionMatrixInverse.copy(Z.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Ur*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(g===null&&v===null))return h},this.setFoveation=function(le){h=le,g!==null&&(g.fixedFoveation=le),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=le)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ae)},this.getCameraTexture=function(le){return x[le]};let Fe=null;function Ke(le,Z){if(m=Z.getViewerPose(d||l),M=Z,m!==null){const xe=m.views;v!==null&&(e.setRenderTargetFramebuffer(L,v.framebuffer),e.setRenderTarget(L));let tt=!1;xe.length!==ae.cameras.length&&(ae.cameras.length=0,tt=!0);for(let ot=0;ot<xe.length;ot++){const St=xe[ot];let Nt=null;if(v!==null)Nt=v.getViewport(St);else{const zt=f.getViewSubImage(g,St);Nt=zt.viewport,ot===0&&(e.setRenderTargetTextures(L,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(L))}let gt=ie[ot];gt===void 0&&(gt=new yn,gt.layers.enable(ot),gt.viewport=new Ot,ie[ot]=gt),gt.matrix.fromArray(St.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(St.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ot===0&&(ae.matrix.copy(gt.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),tt===!0&&ae.cameras.push(gt)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&P){f=n.getBinding();const ot=f.getDepthInformation(xe[0]);ot&&ot.isValid&&ot.texture&&S.init(ot,i.renderState)}if(Ne&&Ne.includes("camera-access")&&P){e.state.unbindTexture(),f=n.getBinding();for(let ot=0;ot<xe.length;ot++){const St=xe[ot].camera;if(St){let Nt=x[St];Nt||(Nt=new xd,x[St]=Nt);const gt=f.getCameraImage(St);Nt.sourceTexture=gt}}}}for(let xe=0;xe<D.length;xe++){const tt=C[xe],Ne=D[xe];tt!==null&&Ne!==void 0&&Ne.update(tt,Z,d||l)}Fe&&Fe(le,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),M=null}const at=new Ad;at.setAnimationLoop(Ke),this.setAnimationLoop=function(le){Fe=le},this.dispose=function(){}}}const pb=new lt,Nd=new st;Nd.set(-1,0,0,0,1,0,0,0,1);function mb(r,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function n(S,x){x.color.getRGB(S.fogColor.value,yd(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function i(S,x,N,k,L){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(S,x):x.isMeshLambertMaterial?(s(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(S,x),f(S,x)):x.isMeshPhongMaterial?(s(S,x),m(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(S,x),g(S,x),x.isMeshPhysicalMaterial&&v(S,x,L)):x.isMeshMatcapMaterial?(s(S,x),M(S,x)):x.isMeshDepthMaterial?s(S,x):x.isMeshDistanceMaterial?(s(S,x),P(S,x)):x.isMeshNormalMaterial?s(S,x):x.isLineBasicMaterial?(l(S,x),x.isLineDashedMaterial&&c(S,x)):x.isPointsMaterial?h(S,x,N,k):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===pn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===pn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const N=e.get(x),k=N.envMap,L=N.envMapRotation;k&&(S.envMap.value=k,S.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(L)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Nd),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function l(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function c(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function h(S,x,N,k){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*N,S.scale.value=k*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function f(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function v(S,x,N){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===pn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.retroreflectivity>0&&(S.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function P(S,x){const N=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gb(r,e,t,n){let i={},s={},l=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,D){const C=D.program;n.uniformBlockBinding(L,C)}function d(L,D){let C=i[L.id];C===void 0&&(S(L),C=m(L),i[L.id]=C,L.addEventListener("dispose",N));const B=D.program;n.updateUBOMapping(L,B);const T=e.render.frame;s[L.id]!==T&&(g(L),s[L.id]=T)}function m(L){const D=f();L.__bindingPointIndex=D;const C=r.createBuffer(),B=L.__size,T=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,B,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,C),C}function f(){for(let L=0;L<c;L++)if(l.indexOf(L)===-1)return l.push(L),L;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const D=i[L.id],C=L.uniforms,B=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let T=0,O=C.length;T<O;T++){const I=C[T];if(Array.isArray(I))for(let j=0,ie=I.length;j<ie;j++)v(I[j],T,j,B);else v(I,T,0,B)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(L,D,C,B){if(P(L,D,C,B)===!0){const T=L.__offset,O=L.value;if(Array.isArray(O)){let I=0;for(let j=0;j<O.length;j++){const ie=O[j],ae=x(ie);M(ie,L.__data,I),typeof ie!="number"&&typeof ie!="boolean"&&!ie.isMatrix3&&!ArrayBuffer.isView(ie)&&(I+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(O,L.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,L.__data)}}function M(L,D,C){typeof L=="number"||typeof L=="boolean"?D[0]=L:L.isMatrix3?(D[0]=L.elements[0],D[1]=L.elements[1],D[2]=L.elements[2],D[3]=0,D[4]=L.elements[3],D[5]=L.elements[4],D[6]=L.elements[5],D[7]=0,D[8]=L.elements[6],D[9]=L.elements[7],D[10]=L.elements[8],D[11]=0):ArrayBuffer.isView(L)?D.set(new L.constructor(L.buffer,L.byteOffset,D.length)):L.toArray(D,C)}function P(L,D,C,B){const T=L.value,O=D+"_"+C;if(B[O]===void 0)return typeof T=="number"||typeof T=="boolean"?B[O]=T:ArrayBuffer.isView(T)?B[O]=T.slice():B[O]=T.clone(),!0;{const I=B[O];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return B[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(I.equals(T)===!1)return I.copy(T),!0}}return!1}function S(L){const D=L.uniforms;let C=0;const B=16;for(let O=0,I=D.length;O<I;O++){const j=Array.isArray(D[O])?D[O]:[D[O]];for(let ie=0,ae=j.length;ie<ae;ie++){const V=j[ie],z=Array.isArray(V.value)?V.value:[V.value];for(let J=0,se=z.length;J<se;J++){const ce=z[J],oe=x(ce),pe=C%B,me=pe%oe.boundary,ke=pe+me;C+=me,ke!==0&&B-ke<oe.storage&&(C+=B-ke),V.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=C,C+=oe.storage}}}const T=C%B;return T>0&&(C+=B-T),L.__size=C,L.__cache={},this}function x(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(D.boundary=16,D.storage=L.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",L),D}function N(L){const D=L.target;D.removeEventListener("dispose",N);const C=l.indexOf(D.__bindingPointIndex);l.splice(C,1),r.deleteBuffer(i[D.id]),delete i[D.id],delete s[D.id]}function k(){for(const L in i)r.deleteBuffer(i[L]);l=[],i={},s={}}return{bind:h,update:d,dispose:k}}const _b=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function vb(){return oi===null&&(oi=new yc(_b,16,16,ar,Tn),oi.name="DFG_LUT",oi.minFilter=tn,oi.magFilter=tn,oi.wrapS=ui,oi.wrapT=ui,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class xb{constructor(e={}){const{canvas:t=kv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:g=!1,outputBufferType:v=Pn}=e;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=l;const P=v,S=new Set([dc,hc,uc]),x=new Set([Pn,mi,Ms,Es,oc,lc]),N=new Uint32Array(4),k=new Int32Array(4),L=new $;let D=null,C=null;const B=[],T=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let j=!1,ie=null,ae=null,V=null,z=null;this._outputColorSpace=cn;let J=0,se=0,ce=null,oe=-1,pe=null;const me=new Ot,ke=new Ot;let Ie=null;const Fe=new Xe(0);let Ke=0,at=t.width,le=t.height,Z=1,xe=null,tt=null;const Ne=new Ot(0,0,at,le),Je=new Ot(0,0,at,le);let Xt=!1;const ot=new Mc;let St=!1,Nt=!1;const gt=new lt,zt=new $,Ht=new Ot,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Ft(){return ce===null?Z:1}let X=n;function $t(R,G){return t.getContext(R,G)}let Qe,F,E,Q,re,he,Ee,Te,de,_e,we,$e,Re,Ae,qe,Ze,nt,W,K,H,be,De,ve;try{const R={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",wn,!1),X===null){const G="webgl2";if(X=$t(G,R),X===null)throw $t(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(R){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),et("WebGLRenderer: "+R.message),R}function Be(){Qe=new vM(X),Qe.init(),be=new cb(X,Qe),F=new lM(X,Qe,e,be),E=new ob(X,Qe),F.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ae=X.createFramebuffer(),V=X.createFramebuffer(),z=X.createFramebuffer(),Q=new SM(X),re=new qE,he=new lb(X,Qe,E,re,F,be,Q),Ee=new _M(I),Te=new Ex(X),De=new aM(X,Te),de=new xM(X,Te,Q,De),_e=new EM(X,de,Te,De,Q),W=new MM(X,F,he),qe=new cM(re),we=new $E(I,Ee,Qe,F,De,qe),$e=new mb(I,re),Re=new KE,Ae=new tb(Qe),nt=new sM(I,Ee,E,_e,M,h),Ze=new ab(I,_e,F),ve=new gb(X,Q,F,E),K=new oM(X,Qe,Q),H=new yM(X,Qe,Q),Q.programs=we.programs,I.capabilities=F,I.extensions=Qe,I.properties=re,I.renderLists=Re,I.shadowMap=Ze,I.state=E,I.info=Q}P!==Pn&&(O=new TM(P,t.width,t.height,c,i,s));const Ve=new fb(I,X);this.xr=Ve,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=Qe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Qe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(at,le,!1))},this.getSize=function(R){return R.set(at,le)},this.setSize=function(R,G,q=!0){if(Ve.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}at=R,le=G,t.width=Math.floor(R*Z),t.height=Math.floor(G*Z),q===!0&&(t.style.width=R+"px",t.style.height=G+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(at*Z,le*Z).floor()},this.setDrawingBufferSize=function(R,G,q){at=R,le=G,Z=q,t.width=Math.floor(R*q),t.height=Math.floor(G*q),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(P===Pn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(me)},this.getViewport=function(R){return R.copy(Ne)},this.setViewport=function(R,G,q,ne){R.isVector4?Ne.set(R.x,R.y,R.z,R.w):Ne.set(R,G,q,ne),E.viewport(me.copy(Ne).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(Je)},this.setScissor=function(R,G,q,ne){R.isVector4?Je.set(R.x,R.y,R.z,R.w):Je.set(R,G,q,ne),E.scissor(ke.copy(Je).multiplyScalar(Z).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(R){E.setScissorTest(Xt=R)},this.setOpaqueSort=function(R){xe=R},this.setTransparentSort=function(R){tt=R},this.getClearColor=function(R){return R.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,q=!0){let ne=0;if(R){let te=!1;if(ce!==null){const Pe=ce.texture.format;te=S.has(Pe)}if(te){const Pe=ce.texture.type,Ue=x.has(Pe),Ce=nt.getClearColor(),ze=nt.getClearAlpha(),We=Ce.r,rt=Ce.g,dt=Ce.b;Ue?(N[0]=We,N[1]=rt,N[2]=dt,N[3]=ze,X.clearBufferuiv(X.COLOR,0,N)):(k[0]=We,k[1]=rt,k[2]=dt,k[3]=ze,X.clearBufferiv(X.COLOR,0,k))}else ne|=X.COLOR_BUFFER_BIT}G&&(ne|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),ie=R},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),nt.dispose(),Re.dispose(),Ae.dispose(),re.dispose(),Ee.dispose(),_e.dispose(),De.dispose(),ve.dispose(),we.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Fs),Ve.removeEventListener("sessionend",Us),ei.stop()};function yt(R){R.preventDefault(),Wa("WebGLRenderer: Context Lost."),j=!0}function Mt(){Wa("WebGLRenderer: Context Restored."),j=!1;const R=Q.autoReset,G=Ze.enabled,q=Ze.autoUpdate,ne=Ze.needsUpdate,te=Ze.type;Be(),Q.autoReset=R,Ze.enabled=G,Ze.autoUpdate=q,Ze.needsUpdate=ne,Ze.type=te}function wn(R){et("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function In(R){const G=R.target;G.removeEventListener("dispose",In),Vn(G)}function Vn(R){to(R),re.remove(R)}function to(R){const G=re.get(R).programs;G!==void 0&&(G.forEach(function(q){we.releaseProgram(q)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,q,ne,te,Pe){G===null&&(G=Kt);const Ue=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ce=Di(R,G,q,ne,te);E.setMaterial(ne,Ue);let ze=q.index,We=1;if(ne.wireframe===!0){if(ze=de.getWireframeAttribute(q),ze===void 0)return;We=2}const rt=q.drawRange,dt=q.attributes.position;let He=rt.start*We,b=(rt.start+rt.count)*We;Pe!==null&&(He=Math.max(He,Pe.start*We),b=Math.min(b,(Pe.start+Pe.count)*We)),ze!==null?(He=Math.max(He,0),b=Math.min(b,ze.count)):dt!=null&&(He=Math.max(He,0),b=Math.min(b,dt.count));const it=b-He;if(it<0||it===1/0)return;De.setup(te,ne,Ce,q,ze);let kt,wt=K;if(ze!==null&&(kt=Te.get(ze),wt=H,wt.setIndex(kt)),te.isMesh)ne.wireframe===!0?(E.setLineWidth(ne.wireframeLinewidth*Ft()),wt.setMode(X.LINES)):wt.setMode(X.TRIANGLES);else if(te.isLine){let Wt=ne.linewidth;Wt===void 0&&(Wt=1),E.setLineWidth(Wt*Ft()),te.isLineSegments?wt.setMode(X.LINES):te.isLineLoop?wt.setMode(X.LINE_LOOP):wt.setMode(X.LINE_STRIP)}else te.isPoints?wt.setMode(X.POINTS):te.isSprite&&wt.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))wt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Wt=te._multiDrawStarts,Oe=te._multiDrawCounts,ln=te._multiDrawCount,Et=ze?Te.get(ze).bytesPerElement:1,Mn=re.get(ne).currentProgram.getUniforms();for(let Nn=0;Nn<ln;Nn++)Mn.setValue(X,"_gl_DrawID",Nn),wt.render(Wt[Nn]/Et,Oe[Nn])}else if(te.isInstancedMesh)wt.renderInstances(He,it,te.count);else if(q.isInstancedBufferGeometry){const Wt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Oe=Math.min(q.instanceCount,Wt);wt.renderInstances(He,it,Oe)}else wt.render(He,it)};function Xi(R,G,q,ne){ie!==null&&R.isNodeMaterial&&ie.setObject(ne,R),St===!0&&qe.setState(R,q,!1),R.transparent===!0&&R.side===qn&&R.forceSinglePass===!1?(R.side=pn,R.needsUpdate=!0,cr(R,G,ne),R.side=Gi,R.needsUpdate=!0,cr(R,G,ne),R.side=qn):cr(R,G,ne)}this.compile=function(R,G,q=null){q===null&&(q=R),ie!==null&&ie.renderStart(R,G,q),C=Ae.get(q),C.init(G),T.push(C),q.traverseVisible(function(te){te.isLight&&te.layers.test(G.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),R!==q&&R.traverseVisible(function(te){te.isLight&&te.layers.test(G.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),C.setupLights(),ie!==null&&ie.updateLights(C.state.lightsArray),Nt=this.localClippingEnabled,St=qe.init(this.clippingPlanes,Nt),St===!0&&qe.setGlobalState(this.clippingPlanes,G),ie!==null&&Ze.render(C.state.shadowsArray,q,G);const ne=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Pe=te.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){const Ce=Pe[Ue];Xi(Ce,q,G,te),ne.add(Ce)}else Xi(Pe,q,G,te),ne.add(Pe)}),C=T.pop(),ie!==null&&ie.renderEnd(),ne},this.compileAsync=function(R,G,q=null){const ne=this.compile(R,G,q);return new Promise(te=>{function Pe(){if(ne.forEach(function(Ue){const ze=re.get(Ue).currentProgram;(ze===void 0||ze.isReady())&&ne.delete(Ue)}),ne.size===0){te(R);return}setTimeout(Pe,10)}Qe.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Li=null;function Ns(R){Li&&Li(R)}function Fs(){ei.stop()}function Us(){ei.start()}const ei=new Ad;ei.setAnimationLoop(Ns),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(R){Li=R,Ve.setAnimationLoop(R),R===null?ei.stop():ei.start()},Ve.addEventListener("sessionstart",Fs),Ve.addEventListener("sessionend",Us),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;ie!==null&&ie.renderStart(R,G);const q=Ve.enabled===!0&&Ve.isPresenting===!0,ne=O!==null&&(ce===null||q)&&O.begin(I,ce);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(G),G=Ve.getCamera()),R.isScene===!0&&R.onBeforeRender(I,R,G,ce),C=Ae.get(R,T.length),C.init(G),C.state.textureUnits=he.getTextureUnits(),T.push(C),gt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ot.setFromProjectionMatrix(gt,hi,G.reversedDepth),Nt=this.localClippingEnabled,St=qe.init(this.clippingPlanes,Nt),D=Re.get(R,B.length),D.init(),B.push(D),Ve.enabled===!0&&Ve.isPresenting===!0){const Ue=I.xr.getDepthSensingMesh();Ue!==null&&Yr(Ue,G,-1/0,I.sortObjects)}Yr(R,G,0,I.sortObjects),D.finish(),ie!==null&&ie.updateLights(C.state.lightsArray),I.sortObjects===!0&&D.sort(xe,tt),Rt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Rt&&nt.addToRenderList(D,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&qe.beginShadows();const te=C.state.shadowsArray;if(Ze.render(te,R,G),St===!0&&qe.endShadows(),(ne&&O.hasRenderPass())===!1){const Ue=D.opaque,Ce=D.transmissive;if(C.setupLights(),G.isArrayCamera){const ze=G.cameras;if(Ce.length>0)for(let We=0,rt=ze.length;We<rt;We++){const dt=ze[We];ks(Ue,Ce,R,dt)}Rt&&nt.render(R);for(let We=0,rt=ze.length;We<rt;We++){const dt=ze[We];Os(D,R,dt,dt.viewport)}}else Ce.length>0&&ks(Ue,Ce,R,G),Rt&&nt.render(R),Os(D,R,G)}ce!==null&&se===0&&(he.updateMultisampleRenderTarget(ce),he.updateRenderTargetMipmap(ce)),ne&&O.end(I),R.isScene===!0&&R.onAfterRender(I,R,G),De.resetDefaultState(),oe=-1,pe=null,T.pop(),T.length>0?(C=T[T.length-1],he.setTextureUnits(C.state.textureUnits),St===!0&&qe.setGlobalState(I.clippingPlanes,C.state.camera)):C=null,B.pop(),B.length>0?D=B[B.length-1]:D=null,ie!==null&&ie.renderEnd()};function Yr(R,G,q,ne){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLightProbeGrid)C.pushLightProbeGrid(R);else if(R.isLight)C.pushLight(R),R.castShadow&&C.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(ot)){ne&&Ht.setFromMatrixPosition(R.matrixWorld).applyMatrix4(gt);const Ue=_e.update(R),Ce=R.material;Ce.visible&&D.push(R,Ue,Ce,q,Ht.z,null,G)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(ot))){const Ue=_e.update(R),Ce=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ht.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ht.copy(Ue.boundingSphere.center)),Ht.applyMatrix4(R.matrixWorld).applyMatrix4(gt)),Array.isArray(Ce)){const ze=Ue.groups;for(let We=0,rt=ze.length;We<rt;We++){const dt=ze[We],He=Ce[dt.materialIndex];He&&He.visible&&D.push(R,Ue,He,q,Ht.z,dt,G)}}else Ce.visible&&D.push(R,Ue,Ce,q,Ht.z,null,G)}}const Pe=R.children;for(let Ue=0,Ce=Pe.length;Ue<Ce;Ue++)Yr(Pe[Ue],G,q,ne)}function Os(R,G,q,ne){const{opaque:te,transmissive:Pe,transparent:Ue}=R;C.setupLightsView(q),St===!0&&qe.setGlobalState(I.clippingPlanes,q),ne&&E.viewport(me.copy(ne)),te.length>0&&lr(te,G,q),Pe.length>0&&lr(Pe,G,q),Ue.length>0&&lr(Ue,G,q),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ks(R,G,q,ne){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[ne.id]===void 0){const He=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[ne.id]=new Sn(1,1,{generateMipmaps:!0,type:He?Tn:Pn,minFilter:Ti,samples:Math.max(4,F.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Pe=C.state.transmissionRenderTarget[ne.id],Ue=ne.viewport||me;Pe.setSize(Ue.z*I.transmissionResolutionScale,Ue.w*I.transmissionResolutionScale);const Ce=I.getRenderTarget(),ze=I.getActiveCubeFace(),We=I.getActiveMipmapLevel();I.setRenderTarget(Pe),I.getClearColor(Fe),Ke=I.getClearAlpha(),Ke<1&&I.setClearColor(16777215,.5),I.clear(),Rt&&nt.render(q);const rt=I.toneMapping;I.toneMapping=pi;const dt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),C.setupLightsView(ne),St===!0&&qe.setGlobalState(I.clippingPlanes,ne),lr(R,q,ne),he.updateMultisampleRenderTarget(Pe),he.updateRenderTargetMipmap(Pe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let b=0,it=G.length;b<it;b++){const kt=G[b],{object:wt,geometry:Wt,material:Oe,group:ln}=kt;if(Oe.side===qn&&wt.layers.test(ne.layers)){const Et=Oe.side;Oe.side=pn,Oe.needsUpdate=!0,At(wt,q,ne,Wt,Oe,ln),Oe.side=Et,Oe.needsUpdate=!0,He=!0}}He===!0&&(he.updateMultisampleRenderTarget(Pe),he.updateRenderTargetMipmap(Pe))}I.setRenderTarget(Ce,ze,We),I.setClearColor(Fe,Ke),dt!==void 0&&(ne.viewport=dt),I.toneMapping=rt}function lr(R,G,q){const ne=G.isScene===!0?G.overrideMaterial:null;for(let te=0,Pe=R.length;te<Pe;te++){const Ue=R[te],{object:Ce,geometry:ze,group:We}=Ue;let rt=Ue.material;rt.allowOverride===!0&&ne!==null&&(rt=ne),Ce.layers.test(q.layers)&&At(Ce,G,q,ze,rt,We)}}function At(R,G,q,ne,te,Pe){ie!==null&&te.isNodeMaterial&&ie.setObject(R,te),R.onBeforeRender(I,G,q,ne,te,Pe),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(I,G,q,ne,R,Pe),te.transparent===!0&&te.side===qn&&te.forceSinglePass===!1?(te.side=pn,te.needsUpdate=!0,I.renderBufferDirect(q,G,ne,te,R,Pe),te.side=Gi,te.needsUpdate=!0,I.renderBufferDirect(q,G,ne,te,R,Pe),te.side=qn):I.renderBufferDirect(q,G,ne,te,R,Pe),R.onAfterRender(I,G,q,ne,te,Pe)}function cr(R,G,q){G.isScene!==!0&&(G=Kt);const ne=re.get(R),te=C.state.lights,Pe=C.state.shadowsArray,Ue=te.state.version,Ce=we.getParameters(R,te.state,Pe,G,q,C.state.lightProbeGridArray),ze=we.getProgramCacheKey(Ce);let We=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,ne.fog=G.fog;const rt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=Ee.get(R.envMap||ne.environment,rt),ne.envMapRotation=ne.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",In),We=new Map,ne.programs=We);let dt=We.get(ze);if(dt!==void 0){if(ne.currentProgram===dt&&ne.lightsStateVersion===Ue)return _i(R,Ce),dt}else Ce.uniforms=we.getUniforms(R),ie!==null&&R.isNodeMaterial&&ie.build(R,q,Ce),R.onBeforeCompile(Ce,I),dt=we.acquireProgram(Ce,ze),We.set(ze,dt),ne.uniforms=Ce.uniforms;const He=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=qe.uniform),_i(R,Ce),ne.needsLights=Zr(R),ne.lightsStateVersion=Ue,ne.needsLights&&(He.ambientLightColor.value=te.state.ambient,He.lightProbe.value=te.state.probe,He.sunLights.value=te.state.sun,He.sunLightShadows.value=te.state.sunShadow,He.directionalLights.value=te.state.directional,He.directionalLightShadows.value=te.state.directionalShadow,He.spotLights.value=te.state.spot,He.spotLightShadows.value=te.state.spotShadow,He.rectAreaLights.value=te.state.rectArea,He.ltc_1.value=te.state.rectAreaLTC1,He.ltc_2.value=te.state.rectAreaLTC2,He.pointLights.value=te.state.point,He.pointLightShadows.value=te.state.pointShadow,He.hemisphereLights.value=te.state.hemi,He.sunShadowMatrix.value=te.state.sunShadowMatrix,He.sunShadowCascade.value=te.state.sunShadowCascade,He.directionalShadowMatrix.value=te.state.directionalShadowMatrix,He.spotLightMatrix.value=te.state.spotLightMatrix,He.spotLightMap.value=te.state.spotLightMap,He.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=C.state.lightProbeGridArray.length>0,ne.currentProgram=dt,ne.uniformsList=null,dt}function Kr(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Ua.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function _i(R,G){const q=re.get(R);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function jr(R,G){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;L.setFromMatrixPosition(G.matrixWorld);for(let q=0,ne=R.length;q<ne;q++){const te=R[q];if(te.texture!==null&&te.boundingBox.containsPoint(L))return te}return null}function Di(R,G,q,ne,te){G.isScene!==!0&&(G=Kt),he.resetTextureUnits();const Pe=G.fog,Ue=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?G.environment:null,Ce=ce===null?I.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:vt.workingColorSpace,ze=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,We=Ee.get(ne.envMap||Ue,ze),rt=ne.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,dt=!!q.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),He=!!q.morphAttributes.position,b=!!q.morphAttributes.normal,it=!!q.morphAttributes.color;let kt=pi;ne.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(kt=I.toneMapping);const wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Wt=wt!==void 0?wt.length:0,Oe=re.get(ne),ln=C.state.lights;if(St===!0&&(Nt===!0||R!==pe)){const bt=R===pe&&ne.id===oe;qe.setState(ne,R,bt)}let Et=!1;ne.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ln.state.version||Oe.outputColorSpace!==Ce||te.isBatchedMesh&&Oe.batching===!1||!te.isBatchedMesh&&Oe.batching===!0||te.isBatchedMesh&&Oe.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Oe.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Oe.instancing===!1||!te.isInstancedMesh&&Oe.instancing===!0||te.isSkinnedMesh&&Oe.skinning===!1||!te.isSkinnedMesh&&Oe.skinning===!0||te.isInstancedMesh&&Oe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Oe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Oe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Oe.instancingMorph===!1&&te.morphTexture!==null||Oe.envMap!==We||ne.fog===!0&&Oe.fog!==Pe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==qe.numPlanes||Oe.numIntersection!==qe.numIntersection)||Oe.vertexAlphas!==rt||Oe.vertexTangents!==dt||Oe.morphTargets!==He||Oe.morphNormals!==b||Oe.morphColors!==it||Oe.toneMapping!==kt||Oe.morphTargetsCount!==Wt||!!Oe.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,Oe.__version=ne.version);let Mn=Oe.currentProgram;Et===!0&&(Mn=cr(ne,G,te),ie&&ne.isNodeMaterial&&ie.onUpdateProgram(ne,Mn,Oe));let Nn=!1,ti=!1,Ii=!1;const Ct=Mn.getUniforms(),ct=Oe.uniforms;if(E.useProgram(Mn.program)&&(Nn=!0,ti=!0,Ii=!0),ne.id!==oe&&(oe=ne.id,ti=!0),Oe.needsLights){const bt=jr(C.state.lightProbeGridArray,te);Oe.lightProbeGrid!==bt&&(Oe.lightProbeGrid=bt,ti=!0)}if(Nn||pe!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ct.setValue(X,"projectionMatrix",R.projectionMatrix),Ct.setValue(X,"viewMatrix",R.matrixWorldInverse);const An=Ct.map.cameraPosition;An!==void 0&&An.setValue(X,zt.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&Ct.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ct.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),pe!==R&&(pe=R,ti=!0,Ii=!0)}if(Oe.needsLights&&(ln.state.sunShadowMap.length>0&&Ct.setValue(X,"sunShadowMap",ln.state.sunShadowMap,he),ln.state.directionalShadowMap.length>0&&Ct.setValue(X,"directionalShadowMap",ln.state.directionalShadowMap,he),ln.state.spotShadowMap.length>0&&Ct.setValue(X,"spotShadowMap",ln.state.spotShadowMap,he),ln.state.pointShadowMap.length>0&&Ct.setValue(X,"pointShadowMap",ln.state.pointShadowMap,he)),te.isSkinnedMesh){Ct.setOptional(X,te,"bindMatrix"),Ct.setOptional(X,te,"bindMatrixInverse");const bt=te.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),Ct.setValue(X,"boneTexture",bt.boneTexture,he))}te.isBatchedMesh&&(Ct.setOptional(X,te,"batchingTexture"),Ct.setValue(X,"batchingTexture",te._matricesTexture,he),Ct.setOptional(X,te,"batchingIdTexture"),Ct.setValue(X,"batchingIdTexture",te._indirectTexture,he),Ct.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Ct.setValue(X,"batchingColorTexture",te._colorsTexture,he));const gn=q.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&W.update(te,q,Mn),(ti||Oe.receiveShadow!==te.receiveShadow)&&(Oe.receiveShadow=te.receiveShadow,Ct.setValue(X,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&G.environment!==null&&(ct.envMapIntensity.value=G.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=vb()),ti){if(Ct.setValue(X,"toneMappingExposure",I.toneMappingExposure),Oe.needsLights&&Bs(ct,Ii),Pe&&ne.fog===!0&&$e.refreshFogUniforms(ct,Pe),$e.refreshMaterialUniforms(ct,ne,Z,le,C.state.transmissionRenderTarget[R.id]),Oe.needsLights&&Oe.lightProbeGrid){const bt=Oe.lightProbeGrid;ct.probesSH.value=bt.texture,ct.probesMin.value.copy(bt.boundingBox.min),ct.probesMax.value.copy(bt.boundingBox.max),ct.probesResolution.value.copy(bt.resolution)}Ua.upload(X,Kr(Oe),ct,he)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ua.upload(X,Kr(Oe),ct,he),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ct.setValue(X,"center",te.center),Ct.setValue(X,"modelViewMatrix",te.modelViewMatrix),Ct.setValue(X,"normalMatrix",te.normalMatrix),Ct.setValue(X,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const bt=ne.uniformsGroups;for(let An=0,Fn=bt.length;An<Fn;An++){const _t=bt[An];ve.update(_t,Mn),ve.bind(_t,Mn)}}return Mn}function Bs(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.sunLights.needsUpdate=G,R.sunLightShadows.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Zr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(R,G,q){const ne=re.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),re.get(R.texture).__webglTexture=G,re.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:q,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const q=re.get(R);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,q=0){ce=R,J=G,se=q;let ne=null,te=!1,Pe=!1;if(R){const Ce=re.get(R);if(Ce.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,Ce.__webglFramebuffer),me.copy(R.viewport),ke.copy(R.scissor),Ie=R.scissorTest,E.viewport(me),E.scissor(ke),E.setScissorTest(Ie),oe=-1;return}else if(Ce.__webglFramebuffer===void 0)he.setupRenderTarget(R);else if(Ce.__hasExternalTextures)he.rebindTextures(R,re.get(R.texture).__webglTexture,re.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const rt=R.depthTexture;if(Ce.__boundDepthTexture!==rt){if(rt!==null&&re.has(rt)&&(R.width!==rt.image.width||R.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(R)}}const ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Pe=!0);const We=re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[G])?ne=We[G][q]:ne=We[G],te=!0):R.samples>0&&he.useMultisampledRTT(R)===!1?ne=re.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?ne=We[q]:ne=We,me.copy(R.viewport),ke.copy(R.scissor),Ie=R.scissorTest}else me.copy(Ne).multiplyScalar(Z).floor(),ke.copy(Je).multiplyScalar(Z).floor(),Ie=Xt;if(q!==0&&(ne=ae),E.bindFramebuffer(X.FRAMEBUFFER,ne)&&E.drawBuffers(R,ne),E.viewport(me),E.scissor(ke),E.setScissorTest(Ie),te){const Ce=re.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,q)}else if(Pe){const Ce=G;for(let ze=0;ze<R.textures.length;ze++){const We=re.get(R.textures[ze]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ze,We.__webglTexture,q,Ce)}}else if(R!==null&&q!==0){const Ce=re.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ce.__webglTexture,q)}oe=-1};function zs(R){const G=re.get(R);return(G.__readFormat!==R.format||G.__readType!==R.type)&&(G.__readFormat=R.format,G.__readType=R.type,G.__formatReadable=F.textureFormatReadable(R.format),G.__typeReadable=F.textureTypeReadable(R.type)),G}this.readRenderTargetPixels=function(R,G,q,ne,te,Pe,Ue,Ce=0){if(!(R&&R.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){E.bindFramebuffer(X.FRAMEBUFFER,ze);try{const We=R.textures[Ce],rt=We.format,dt=We.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ce);const He=zs(We);if(He.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-ne&&q>=0&&q<=R.height-te&&X.readPixels(G,q,ne,te,be.convert(rt),be.convert(dt),Pe)}finally{const We=ce!==null?re.get(ce).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,G,q,ne,te,Pe,Ue,Ce=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(G>=0&&G<=R.width-ne&&q>=0&&q<=R.height-te){E.bindFramebuffer(X.FRAMEBUFFER,ze);const We=R.textures[Ce],rt=We.format,dt=We.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ce);const He=zs(We);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const b=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,b),X.bufferData(X.PIXEL_PACK_BUFFER,Pe.byteLength,X.STREAM_READ),X.readPixels(G,q,ne,te,be.convert(rt),be.convert(dt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const it=ce!==null?re.get(ce).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,it);const kt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Bv(X,kt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,b),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Pe),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(b),X.deleteSync(kt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,q=0){const ne=Math.pow(2,-q),te=Math.floor(R.image.width*ne),Pe=Math.floor(R.image.height*ne),Ue=G!==null?G.x:0,Ce=G!==null?G.y:0;he.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,q,0,0,Ue,Ce,te,Pe),E.unbindTexture()},this.copyTextureToTexture=function(R,G,q=null,ne=null,te=0,Pe=0){let Ue,Ce,ze,We,rt,dt,He,b,it;const kt=R.isCompressedTexture?R.mipmaps[Pe]:R.image;if(q!==null)Ue=q.max.x-q.min.x,Ce=q.max.y-q.min.y,ze=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,rt=q.min.y,dt=q.isBox3?q.min.z:0;else{const ct=Math.pow(2,-te);Ue=Math.floor(kt.width*ct),Ce=Math.floor(kt.height*ct),R.isDataArrayTexture?ze=kt.depth:R.isData3DTexture?ze=Math.floor(kt.depth*ct):ze=1,We=0,rt=0,dt=0}ne!==null?(He=ne.x,b=ne.y,it=ne.z):(He=0,b=0,it=0);const wt=be.convert(G.format),Wt=be.convert(G.type);let Oe;G.isData3DTexture?(he.setTexture3D(G,0),Oe=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(he.setTexture2DArray(G,0),Oe=X.TEXTURE_2D_ARRAY):(he.setTexture2D(G,0),Oe=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const ln=E.getParameter(X.UNPACK_ROW_LENGTH),Et=E.getParameter(X.UNPACK_IMAGE_HEIGHT),Mn=E.getParameter(X.UNPACK_SKIP_PIXELS),Nn=E.getParameter(X.UNPACK_SKIP_ROWS),ti=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,kt.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,kt.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,We),E.pixelStorei(X.UNPACK_SKIP_ROWS,rt),E.pixelStorei(X.UNPACK_SKIP_IMAGES,dt);const Ii=R.isDataArrayTexture||R.isData3DTexture,Ct=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const ct=re.get(R),gn=re.get(G),bt=re.get(ct.__renderTarget),An=re.get(gn.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,bt.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Fn=0;Fn<ze;Fn++)Ii&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,re.get(R).__webglTexture,te,dt+Fn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,re.get(G).__webglTexture,Pe,it+Fn)),X.blitFramebuffer(We,rt,Ue,Ce,He,b,Ue,Ce,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||re.has(R)){const ct=re.get(R),gn=re.get(G);E.bindFramebuffer(X.READ_FRAMEBUFFER,V),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,z);for(let bt=0;bt<ze;bt++)Ii?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ct.__webglTexture,te,dt+bt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ct.__webglTexture,te),Ct?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,gn.__webglTexture,Pe,it+bt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,gn.__webglTexture,Pe),te!==0?X.blitFramebuffer(We,rt,Ue,Ce,He,b,Ue,Ce,X.COLOR_BUFFER_BIT,X.NEAREST):Ct?X.copyTexSubImage3D(Oe,Pe,He,b,it+bt,We,rt,Ue,Ce):X.copyTexSubImage2D(Oe,Pe,He,b,We,rt,Ue,Ce);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ct?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Oe,Pe,He,b,it,Ue,Ce,ze,wt,Wt,kt.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Oe,Pe,He,b,it,Ue,Ce,ze,wt,kt.data):X.texSubImage3D(Oe,Pe,He,b,it,Ue,Ce,ze,wt,Wt,kt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Pe,He,b,Ue,Ce,wt,Wt,kt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Pe,He,b,kt.width,kt.height,wt,kt.data):X.texSubImage2D(X.TEXTURE_2D,Pe,He,b,Ue,Ce,wt,Wt,kt);E.pixelStorei(X.UNPACK_ROW_LENGTH,ln),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et),E.pixelStorei(X.UNPACK_SKIP_PIXELS,Mn),E.pixelStorei(X.UNPACK_SKIP_ROWS,Nn),E.pixelStorei(X.UNPACK_SKIP_IMAGES,ti),Pe===0&&G.generateMipmaps&&X.generateMipmap(Oe),E.unbindTexture()},this.initRenderTarget=function(R){re.get(R).__webglFramebuffer===void 0&&he.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?he.setTextureCube(R,0):R.isData3DTexture?he.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?he.setTexture2DArray(R,0):he.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){J=0,se=0,ce=null,E.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const yb=[1,2,4,8],Sb=4,Fd=1,Ud=1.5,Ka=2,kh=4,Jo=2,kn={jointPos:0,jointVel:29,rootPos:58,rootQuat:61,rootLinVel:65,rootAngVel:68,torsoQuat:71};function Mb(r,e){return[r[0]*e[0]-r[1]*e[1]-r[2]*e[2]-r[3]*e[3],r[0]*e[1]+r[1]*e[0]+r[2]*e[3]-r[3]*e[2],r[0]*e[2]-r[1]*e[3]+r[2]*e[0]+r[3]*e[1],r[0]*e[3]+r[1]*e[2]-r[2]*e[1]+r[3]*e[0]]}function Qo(r){const e=Math.hypot(r[0],r[1],r[2],r[3]),[t,n,i,s]=[r[0]/e,r[1]/e,r[2]/e,r[3]/e];return[1-2*(i*i+s*s),2*(n*i-t*s),2*(n*s+t*i),2*(n*i+t*s),1-2*(n*n+s*s),2*(i*s-t*n),2*(n*s-t*i),2*(i*s+t*n),1-2*(n*n+i*i)]}function Eb(r){const[e,t,n,i]=r;return Math.atan2(2*(e*i+t*n),1-2*(n*n+i*i))}class bb{constructor(e,t){const n=new Float32Array(e);this.layers=[];let i=0;for(const[s,l]of t){const c=n.subarray(i,i+s*l);i+=s*l;const h=n.subarray(i,i+s);i+=s,this.layers.push({W:c,b:h,out:s,inp:l,y:new Float32Array(s)})}}run(e){let t=e;return this.layers.forEach((n,i)=>{const{W:s,b:l,out:c,inp:h,y:d}=n;for(let m=0;m<c;m++){let f=l[m];const g=m*h;for(let v=0;v<h;v++)f+=s[g+v]*t[v];d[m]=i<this.layers.length-1&&f<0?Math.expm1(f):f}t=d}),t}}class Tb{constructor(e,t,n){this.meta=e,this.frames=e.frames,this.track=t,this.width=e.track_width,this.policy=n}row(e){return this.track.subarray(e*this.width,(e+1)*this.width)}}class wb{constructor(e,t,n,i){this.mujoco=e,this.model=t,this.data=n,this.jointNames=i.joint_names,this.defaultPos=Float64Array.from(i.default_joint_pos),this.actionScale=Float64Array.from(i.action_scale),this.isLeg=i.leg_joint_mask,this.reflexBodies=i.reflex_bodies,this.dt=i.physics_dt,this.decimation=i.decimation,this.holdSteps=Math.round(Fd/this.dt),this.totalSteps=Math.round(Ud/this.dt),this.horizonSteps=Math.round(Ka/this.dt),this.qadr=this.jointNames.map(s=>this.#e(s,"qposadr")),this.dadr=this.jointNames.map(s=>this.#e(s,"dofadr")),this.bodyId={};for(let s=0;s<t.nbody;s++){const l=t.body(s);this.bodyId[l.name]=s,l.delete()}this.torso=this.bodyId.torso_link,this.obs=new Float32Array(193),this.motion=null}#e(e,t){const n=this.model.jnt(e),i=n.id;return n.delete(),t==="qposadr"?this.model.jnt_qposadr[i]:this.model.jnt_dofadr[i]}setMotion(e,t=0){this.motion=e,this.reset(t)}reset(e,{keepXY:t=!1}={}){const{mujoco:n,model:i,data:s}=this,l=t?[s.qpos[0],s.qpos[1]]:null;n.mj_resetData(i,s);const c=this.motion.row(e),h=s.qpos,d=s.qvel;for(let g=0;g<3;g++)h[g]=c[kn.rootPos+g];for(let g=0;g<4;g++)h[3+g]=c[kn.rootQuat+g];l&&([h[0],h[1]]=l);const m=Qo(Array.from(h.subarray(3,7))),f=[c[kn.rootAngVel],c[kn.rootAngVel+1],c[kn.rootAngVel+2]];for(let g=0;g<3;g++)d[g]=c[kn.rootLinVel+g],d[3+g]=m[g]*f[0]+m[3+g]*f[1]+m[6+g]*f[2];for(let g=0;g<29;g++)h[this.qadr[g]]=c[kn.jointPos+g],d[this.dadr[g]]=c[kn.jointVel+g];s.ctrl.set(this.defaultPos),n.mj_forward(i,s),this.stepIndex=e,this.lastAction=new Float64Array(29),this.event=null,this.pending=null}get frame(){return this.stepIndex%this.motion.frames}alpha(e){return e>=this.totalSteps?0:e<=this.holdSteps?1:1-(e-this.holdSteps)/(this.totalSteps-this.holdSteps)}get eventActive(){return this.event!==null&&this.event.age<this.horizonSteps}get busy(){return this.pending!==null||this.eventActive}currentDelta(e=new Float64Array(29)){if(e.fill(0),!this.event)return e;const t=this.alpha(this.event.age);if(t>0)for(let n=0;n<29;n++)e[n]=t*this.event.delta[n];return e}measuredState(){const{data:e}=this,t=e.qpos,n=e.qvel,i=Qo(Array.from(t.subarray(3,7))),s=[n[3],n[4],n[5]];return{rootPos:Array.from(t.subarray(0,3)),rootQuat:Array.from(t.subarray(3,7)),rootAngVelWorld:[0,1,2].map(l=>i[3*l]*s[0]+i[3*l+1]*s[1]+i[3*l+2]*s[2]),jointPos:this.qadr.map(l=>t[l]),jointVel:this.dadr.map(l=>n[l])}}bodyLocal(e,t){const n=this.bodyId[e],i=this.data.xpos.subarray(n*3,n*3+3),s=this.data.xmat.subarray(n*9,n*9+9),l=[t[0]-i[0],t[1]-i[1],t[2]-i[2]];return[0,1,2].map(c=>s[c]*l[0]+s[3+c]*l[1]+s[6+c]*l[2])}strike(e,t,n,i,s){if(!this.reflexBodies.includes(e)||this.busy)return!1;const l=Math.hypot(n[0],n[1])||1,c=[n[0]/l,n[1]/l,0];let h=null;if(s){const d=Float64Array.from(s);for(let m=0;m<29;m++)this.isLeg[m]&&(d[m]=0);h={delta:d,dir:c,age:0,body:e}}return this.pending={event:h,body:this.bodyId[e],point:t.slice(),force:c.map(d=>d*i),age:0},!0}context(e,t){for(let v=0;v<10;v++)e[t+v]=0;if(!this.eventActive)return;const n=Eb(Array.from(this.data.qpos.subarray(3,7))),i=Math.cos(n),s=Math.sin(n),[l,c]=this.event.dir,h=i*l+s*c,d=-s*l+i*c,m=Math.max(Math.hypot(h,d),1e-8);e[t]=h/m,e[t+1]=d/m;const f=Math.max(Ka-this.event.age*this.dt,0),g=Math.min(Math.max(f/Sb,0),1);yb.forEach((v,M)=>{e[t+2+2*M]=Math.sin(Math.PI*g*v),e[t+3+2*M]=Math.cos(Math.PI*g*v)})}observation(){const{data:e,obs:t}=this,n=this.motion.row(this.frame),i=this.eventActive;for(let f=0;f<29;f++){const g=i&&this.isLeg[f];t[f]=g?0:n[kn.jointPos+f],t[29+f]=g?0:n[kn.jointVel+f]}const s=e.xquat.subarray(this.torso*4,this.torso*4+4),l=Mb([s[0],-s[1],-s[2],-s[3]],Array.from(n.subarray(kn.torsoQuat,kn.torsoQuat+4))),c=Qo(l);for(let f=0;f<3;f++)t[58+2*f]=c[3*f],t[59+2*f]=c[3*f+1];const h=e.qpos,d=e.qvel;for(let f=0;f<3;f++)t[64+f]=d[3+f];const m=this.currentDelta();for(let f=0;f<29;f++)t[67+f]=h[this.qadr[f]]-m[f]-this.defaultPos[f],t[96+f]=d[this.dadr[f]],t[125+f]=this.lastAction[f],t[154+f]=m[f];return this.context(t,183),t}controlStep(){const e=this.motion.policy.run(this.observation()),t=new Float64Array(29);for(let n=0;n<29;n++)this.lastAction[n]=e[n],t[n]=this.defaultPos[n]+this.actionScale[n]*e[n];for(let n=0;n<this.decimation;n++)this.physicsStep(t);this.stepIndex+=1}physicsStep(e){const{data:t}=this,n=t.xfrc_applied;n.fill(0);const i=this.pending;if(i){if(i.age<kh){const c=t.xipos.subarray(i.body*3,i.body*3+3),h=[i.point[0]-c[0],i.point[1]-c[1],i.point[2]-c[2]],d=i.force,m=i.body*6;n[m]=d[0],n[m+1]=d[1],n[m+2]=d[2],n[m+3]=h[1]*d[2]-h[2]*d[1],n[m+4]=h[2]*d[0]-h[0]*d[2],n[m+5]=h[0]*d[1]-h[1]*d[0]}i.age===Jo&&i.event&&(this.event=i.event,this.event.age=Jo),i.age+=1,i.age>=Math.max(kh,Jo+1)&&(this.pending=null)}const s=this.currentDelta(),l=t.ctrl;for(let c=0;c<29;c++)l[c]=e[c]+s[c];this.mujoco.mj_step(this.model,t),this.event&&(this.event.age+=1,this.event.age>=this.horizonSteps&&this.event.age>=this.totalSteps&&(this.event=null))}}function Bh(r,e){if(e===wv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Vl||e===rd){let t=r.getIndex();if(t===null){const s=[],l=r.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)s.push(c);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Vl)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Ab(r){const e=new Map,t=new Map,n=r.clone();return Od(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,l=e.get(i),c=l.skeleton.bones;s.skeleton=l.skeleton.clone(),s.bindMatrix.copy(l.bindMatrix),s.skeleton.bones=c.map(function(h){return t.get(h)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Od(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Od(r.children[n],e.children[n],t)}class Rb extends Xr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ib(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new zh(t,xt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new zh(t,xt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new $b(t)})}load(e,t,n,i){const s=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const d=ys.extractUrlBase(e);l=ys.resolveURL(d,this.path)}else l=ys.extractUrlBase(e);this.manager.itemStart(e);const c=function(d){i?i(d):console.error(d),s.manager.itemError(e),s.manager.itemEnd(e)},h=new bd(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(d){try{s.parse(d,l,function(m){t(m),s.manager.itemEnd(e)},c)}catch(m){c(m)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const l={},c={},h=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===kd){try{l[xt.KHR_BINARY_GLTF]=new qb(e)}catch(f){i&&i(f);return}s=JSON.parse(l[xt.KHR_BINARY_GLTF].content)}else s=JSON.parse(h.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new aT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const f=this.pluginCallbacks[m](d);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[f.name]=f,l[f.name]=!0}if(s.extensionsUsed)for(let m=0;m<s.extensionsUsed.length;++m){const f=s.extensionsUsed[m],g=s.extensionsRequired||[];switch(f){case xt.KHR_MATERIALS_UNLIT:l[f]=new Lb;break;case xt.KHR_DRACO_MESH_COMPRESSION:l[f]=new Yb(s,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:l[f]=new Kb;break;case xt.KHR_MESH_QUANTIZATION:l[f]=new jb;break;default:g.indexOf(f)>=0&&c[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}d.setExtensions(l),d.setPlugins(c),d.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Cb(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Yt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Pb{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,h=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let d;const m=new Xe(16777215);h.color!==void 0&&m.setRGB(h.color[0],h.color[1],h.color[2],Ln);const f=h.range!==void 0?h.range:0;switch(h.type){case"directional":d=new Wl(m),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new Ac(m),d.distance=f;break;case"spot":d=new ix(m),d.distance=f,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,d.angle=h.spot.outerConeAngle,d.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return d.position.set(0,0,0),li(d,h),h.intensity!==void 0&&(d.intensity=h.intensity),d.name=t.createUniqueName(h.name||"light_"+e),i=Promise.resolve(d),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],c=(s.extensions&&s.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(h){return n._getNodeRef(t.cache,c,h)})}}class Lb{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Vi}extendParams(e,t,n){const i=[];e.color=new Xe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const l=s.baseColorFactor;e.color.setRGB(l[0],l[1],l[2],Ln),e.opacity=l[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,cn))}return Promise.all(i)}}class Db{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Ib{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(s,s)}return Promise.all(i)}}class Nb{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Fb{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Ub{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,cn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Ob{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class kb{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(s[0],s[1],s[2],Ln),Promise.all(i)}}class Bb{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class zb{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(s[0],s[1],s[2],Ln),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,cn)),Promise.all(i)}}class Hb{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Vb{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Jn:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Gb{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],l=t.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,l)}}class Wb{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const l=s.extensions[t],c=i.images[l.source];let h=n.textureLoader;if(c.uri){const d=n.options.manager.getHandler(c.uri);d!==null&&(h=d)}return n.loadTextureImage(e,l.source,h)}}class Xb{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const l=s.extensions[t],c=i.images[l.source];let h=n.textureLoader;if(c.uri){const d=n.options.manager.getHandler(c.uri);d!==null&&(h=d)}return n.loadTextureImage(e,l.source,h)}}class zh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(c){const h=i.byteOffset||0,d=i.byteLength||0,m=i.count,f=i.byteStride,g=new Uint8Array(c,h,d);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(m,f,g,i.mode,i.filter).then(function(v){return v.buffer}):l.ready.then(function(){const v=new ArrayBuffer(m*f);return l.decodeGltfBuffer(new Uint8Array(v),m,f,g,i.mode,i.filter),v})})}else return null}}class $b{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const d of i.primitives)if(d.mode!==Bn.TRIANGLES&&d.mode!==Bn.TRIANGLE_STRIP&&d.mode!==Bn.TRIANGLE_FAN&&d.mode!==void 0)return null;const l=n.extensions[this.name].attributes,c=[],h={};for(const d in l)c.push(this.parser.getDependency("accessor",l[d]).then(m=>(h[d]=m,h[d])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(d=>{const m=d.pop(),f=m.isGroup?m.children:[m],g=d[0].count,v=[];for(const M of f){const P=new lt,S=new $,x=new Dn,N=new $(1,1,1),k=new pd(M.geometry,M.material,g);for(let D=0;D<g;D++)h.TRANSLATION&&S.fromBufferAttribute(h.TRANSLATION,D),h.ROTATION&&x.fromBufferAttribute(h.ROTATION,D),h.SCALE&&N.fromBufferAttribute(h.SCALE,D),k.setMatrixAt(D,P.compose(S,x,N));let L=null;for(const D in h)if(D==="_COLOR_0"){const C=h[D];k.instanceColor=new Xa(C.array,C.itemSize,C.normalized)}else if(D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE"){if(L===null){const B=k.geometry;L=new un,L.name=B.name;for(const T in B.attributes)L.setAttribute(T,B.attributes[T]);for(const T in B.morphAttributes)L.morphAttributes[T]=B.morphAttributes[T];B.index!==null&&L.setIndex(B.index),L.morphTargetsRelative=B.morphTargetsRelative;for(const T of B.groups)L.addGroup(T.start,T.count,T.materialIndex);B.boundingBox!==null&&(L.boundingBox=B.boundingBox.clone()),B.boundingSphere!==null&&(L.boundingSphere=B.boundingSphere.clone()),L.drawRange.start=B.drawRange.start,L.drawRange.count=B.drawRange.count,L.userData=Object.assign({},B.userData),k.geometry=L}const C=h[D];L.setAttribute(D,new Xa(C.array,C.itemSize,C.normalized))}Gt.prototype.copy.call(k,M),this.parser.assignFinalMaterial(k),v.push(k)}return m.isGroup?(m.clear(),m.add(...v),m):v[0]}))}}const kd="glTF",hs=12,Hh={JSON:1313821514,BIN:5130562};class qb{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,hs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-hs,s=new DataView(e,hs);let l=0;for(;l<i;){const c=s.getUint32(l,!0);l+=4;const h=s.getUint32(l,!0);if(l+=4,h===Hh.JSON){const d=new Uint8Array(e,hs+l,c);this.content=n.decode(d)}else if(h===Hh.BIN){const d=hs+l;this.body=e.slice(d,d+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Yb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,l=e.extensions[this.name].attributes,c={},h={},d={};for(const m in l){const f=Kl[m]||m.toLowerCase();c[f]=l[m]}for(const m in e.attributes){const f=Kl[m]||m.toLowerCase();if(l[m]!==void 0){const g=n.accessors[e.attributes[m]],v=Dr[g.componentType];d[f]=v.name,h[f]=g.normalized===!0}}return t.getDependency("bufferView",s).then(function(m){return new Promise(function(f,g){i.decodeDracoFile(m,function(v){for(const M in v.attributes){const P=v.attributes[M],S=h[M];S!==void 0&&(P.normalized=S)}f(v)},c,d,Ln,g)})})}}class Kb{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class jb{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class Bd extends Vr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let l=0;l!==i;l++)t[l]=n[s+l];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=c*2,d=c*3,m=i-t,f=(n-t)/m,g=f*f,v=g*f,M=e*d,P=M-d,S=-2*v+3*g,x=v-g,N=1-S,k=x-g+f;for(let L=0;L!==c;L++){const D=l[P+L+c],C=l[P+L+h]*m,B=l[M+L+c],T=l[M+L]*m;s[L]=N*D+k*C+S*B+x*T}return s}}const Zb=new Dn;class Jb extends Bd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Zb.fromArray(s).normalize().toArray(s),s}}const Bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vh={9728:en,9729:tn,9984:Zh,9985:Pa,9986:ps,9987:Ti},Gh={33071:ui,33648:Ba,10497:Fr},el={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qb={CUBICSPLINE:void 0,LINEAR:Ts,STEP:bs},tl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new kr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),r.DefaultMaterial}function nr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function li(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tT(r,e,t){let n=!1,i=!1,s=!1;for(let d=0,m=e.length;d<m;d++){const f=e[d];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const l=[],c=[],h=[];for(let d=0,m=e.length;d<m;d++){const f=e[d];if(n){const g=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;l.push(g)}if(i){const g=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;c.push(g)}if(s){const g=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;h.push(g)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const m=d[0],f=d[1],g=d[2];return n&&(r.morphAttributes.position=m),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=g),r.morphTargetsRelative=!0,r})}function nT(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iT(r){let e;const t=r.extensions&&r.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nl(t.attributes):e=r.indices+":"+nl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+nl(r.targets[n]);return e}function nl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function jl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const sT=new lt;class aT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,l=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const h=c.match(/Version\/(\d+)/);i=n&&h?parseInt(h[1],10):-1,s=c.indexOf("Firefox")>-1,l=s?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&l<98?this.textureLoader=new ex(this.options.manager):this.textureLoader=new ax(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const c={scene:l[0][i.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:i.asset,parser:n,userData:{}};return nr(s,c,i),li(c,i),Promise.all(n._invokeAll(function(h){return h.afterRoot&&h.afterRoot(c)})).then(function(){for(const h of c.scenes)h.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const l=t[i].joints;for(let c=0,h=l.length;c<h;c++)e[l[c]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const l=e[i];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(l,c)=>{const h=this.associations.get(l);h!=null&&this.associations.set(c,h);for(const[d,m]of l.children.entries())s(m,c.children[d])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,l){return n.getDependency(e,l)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,l){n.load(ys.resolveURL(t.uri,i.path),s,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const l=el[i.type],c=Dr[i.componentType],h=i.normalized===!0,d=new c(i.count*l);return Promise.resolve(new mn(d,l,h))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(l){const c=l[0],h=el[i.type],d=Dr[i.componentType],m=d.BYTES_PER_ELEMENT,f=m*h,g=i.byteOffset||0,v=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,M=i.normalized===!0;let P,S;if(v&&v!==f){const x=Math.floor(g/v),N="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let k=t.cache.get(N);k||(P=new d(c,x*v,i.count*v/m),k=new x0(P,v/m),t.cache.add(N,k)),S=new xc(k,h,g%v/m,M)}else c===null?P=new d(i.count*h):P=new d(c,g,i.count*h),S=new mn(P,h,M);if(i.sparse!==void 0){const x=el.SCALAR,N=Dr[i.sparse.indices.componentType],k=i.sparse.indices.byteOffset||0,L=i.sparse.values.byteOffset||0,D=new N(l[1],k,i.sparse.count*x),C=new d(l[2],L,i.sparse.count*h);c!==null&&(S=new mn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let B=0,T=D.length;B<T;B++){const O=D[B];if(S.setX(O,C[B*h]),h>=2&&S.setY(O,C[B*h+1]),h>=3&&S.setZ(O,C[B*h+2]),h>=4&&S.setW(O,C[B*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,l=t.images[s];let c=this.textureLoader;if(l.uri){const h=n.manager.getHandler(l.uri);h!==null&&(c=h)}return this.loadTextureImage(e,s,c)}loadTextureImage(e,t,n){const i=this,s=this.json,l=s.textures[e],c=s.images[t],h=(c.uri||c.bufferView)+":"+l.sampler;if(this.textureCache[h])return this.textureCache[h];const d=this.loadImageSource(t,n).then(function(m){m.flipY=!1,m.name=l.name||c.name||"",m.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(m.name=c.uri);const g=(s.samplers||{})[l.sampler]||{};return m.magFilter=Vh[g.magFilter]||tn,m.minFilter=Vh[g.minFilter]||Ti,m.wrapS=Gh[g.wrapS]||Fr,m.wrapT=Gh[g.wrapT]||Fr,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==en&&m.minFilter!==tn,i.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[h]=d,d}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const l=i.images[e],c=self.URL||self.webkitURL;let h=l.uri||"",d=!1;if(l.bufferView!==void 0)h=n.getDependency("bufferView",l.bufferView).then(function(f){d=!0;const g=new Blob([f],{type:l.mimeType});return h=c.createObjectURL(g),h});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(h).then(function(f){return new Promise(function(g,v){let M=g;t.isImageBitmapLoader===!0&&(M=function(P){const S=new on(P);S.needsUpdate=!0,g(S)}),t.load(ys.resolveURL(f,s.path),M,void 0,v)})}).then(function(f){return d===!0&&c.revokeObjectURL(h),li(f,l),f.userData.mimeType=l.mimeType||rT(l.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),f});return this.sourceCache[e]=m,m}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),s.extensions[xt.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const h=s.associations.get(l);l=s.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(l,c),s.associations.set(l,h)}}return i!==void 0&&(l.colorSpace=i),e[t]=l,l})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,l=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let h=this.cache.get(c);h||(h=new gd,Zn.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,h.sizeAttenuation=!1,this.cache.add(c,h)),n=h}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let h=this.cache.get(c);h||(h=new md,Zn.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,this.cache.add(c,h)),n=h}if(i||s||l){let c="ClonedMaterial:"+n.uuid+":";i&&(c+="derivative-tangents:"),s&&(c+="vertex-colors:"),l&&(c+="flat-shading:");let h=this.cache.get(c);h||(h=n.clone(),s&&(h.vertexColors=!0),l&&(h.flatShading=!0),i&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(c,h),this.associations.set(h,this.associations.get(n))),n=h}e.material=n}getMaterialType(){return kr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let l;const c={},h=s.extensions||{},d=[];if(h[xt.KHR_MATERIALS_UNLIT]){const f=i[xt.KHR_MATERIALS_UNLIT];l=f.getMaterialType(),d.push(f.extendParams(c,s,t))}else{const f=s.pbrMetallicRoughness||{};if(c.color=new Xe(1,1,1),c.opacity=1,Array.isArray(f.baseColorFactor)){const g=f.baseColorFactor;c.color.setRGB(g[0],g[1],g[2],Ln),c.opacity=g[3]}f.baseColorTexture!==void 0&&d.push(t.assignTexture(c,"map",f.baseColorTexture,cn)),c.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,c.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(c,"metalnessMap",f.metallicRoughnessTexture)),d.push(t.assignTexture(c,"roughnessMap",f.metallicRoughnessTexture))),l=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,c)})))}s.doubleSided===!0&&(c.side=qn);const m=s.alphaMode||tl.OPAQUE;if(m===tl.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,m===tl.MASK&&(c.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&l!==Vi&&(d.push(t.assignTexture(c,"normalMap",s.normalTexture)),c.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;c.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&l!==Vi&&(d.push(t.assignTexture(c,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&l!==Vi){const f=s.emissiveFactor;c.emissive=new Xe().setRGB(f[0],f[1],f[2],Ln)}return s.emissiveTexture!==void 0&&l!==Vi&&d.push(t.assignTexture(c,"emissiveMap",s.emissiveTexture,cn)),Promise.all(d).then(function(){const f=new l(c);return s.name&&(f.name=s.name),li(f,s),t.associations.set(f,{materials:e}),s.extensions&&nr(i,f,s),f})}createUniqueName(e){const t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(c){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(h){return Wh(h,c,t)})}const l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c],m=iT(d),f=i[m];if(f)l.push(f.promise);else{let g;d.extensions&&d.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?g=s(d):g=Wh(new un,d,t),d.mode===Bn.TRIANGLE_STRIP?g=g.then(v=>Bh(v,rd)):d.mode===Bn.TRIANGLE_FAN&&(g=g.then(v=>Bh(v,Vl))),i[m]={primitive:d,promise:g},l.push(g)}}return Promise.all(l)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],l=s.primitives,c=[];for(let h=0,d=l.length;h<d;h++){const m=l[h].material===void 0?eT(this.cache):this.getDependency("material",l[h].material);c.push(m)}return c.push(t.loadGeometries(l)),Promise.all(c).then(async function(h){const d=h.slice(0,h.length-1),m=h[h.length-1],f=[];for(let v=0,M=m.length;v<M;v++){const P=m[v],S=l[v];let x;const N=d[v];if(S.mode===Bn.TRIANGLES||S.mode===Bn.TRIANGLE_STRIP||S.mode===Bn.TRIANGLE_FAN||S.mode===void 0){const k=s.isSkinnedMesh===!0,L=P.hasAttribute("skinIndex")&&P.hasAttribute("skinWeight");k&&L===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),x=k&&L?new T0(P,N):new Bt(P,N),x.isSkinnedMesh===!0&&x.normalizeSkinWeights()}else if(S.mode===Bn.LINES)x=new C0(P,N);else if(S.mode===Bn.LINE_STRIP)x=new Ec(P,N);else if(S.mode===Bn.LINE_LOOP)x=new P0(P,N);else if(S.mode===Bn.POINTS)x=new _d(P,N);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&nT(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),li(x,s),S.extensions&&nr(i,x,S),t.assignFinalMaterial(x),f.push(x)}for(let v=0,M=f.length;v<M;v++)t.associations.set(f[v],{meshes:e,primitives:v});if(f.length===1)return s.extensions&&nr(i,f[0],s),f[0];const g=new di;s.extensions&&nr(i,g,s),t.associations.set(g,{meshes:e});for(let v=0,M=f.length;v<M;v++)g.add(f[v]);return g})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yn(od.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Is(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),li(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),l=i,c=[],h=[];for(let d=0,m=l.length;d<m;d++){const f=l[d];if(f){c.push(f);const g=new lt;s!==null&&g.fromArray(s.array,d*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new Sc(c,h)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,l=[],c=[],h=[],d=[],m=[];for(let f=0,g=i.channels.length;f<g;f++){const v=i.channels[f],M=i.samplers[v.sampler],P=v.target,S=P.node,x=i.parameters!==void 0?i.parameters[M.input]:M.input,N=i.parameters!==void 0?i.parameters[M.output]:M.output;P.node!==void 0&&(l.push(this.getDependency("node",S)),c.push(this.getDependency("accessor",x)),h.push(this.getDependency("accessor",N)),d.push(M),m.push(P))}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(h),Promise.all(d),Promise.all(m)]).then(function(f){const g=f[0],v=f[1],M=f[2],P=f[3],S=f[4],x=[];for(let k=0,L=g.length;k<L;k++){const D=g[k],C=v[k],B=M[k],T=P[k],O=S[k];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const I=n._createAnimationTracks(D,C,B,T,O);if(I)for(let j=0;j<I.length;j++)x.push(I[j])}const N=new q0(s,void 0,x);return li(N,i),N})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const l=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&l.traverse(function(c){if(c.isMesh)for(let h=0,d=i.weights.length;h<d;h++)c.morphTargetInfluences[h]=i.weights[h]}),l})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),l=[],c=i.children||[];for(let d=0,m=c.length;d<m;d++)l.push(n.getDependency("node",c[d]));const h=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(l),h]).then(function(d){const m=d[0],f=d[1],g=d[2];g!==null&&m.traverse(function(v){v.isSkinnedMesh&&v.bind(g,sT)});for(let v=0,M=f.length;v<M;v++)m.add(f[v]);if(m.userData.pivot!==void 0&&f.length>0){const v=m.userData.pivot,M=f[0];m.pivot=new $().fromArray(v),m.position.x-=v[0],m.position.y-=v[1],m.position.z-=v[2],M.position.set(0,0,0),delete m.userData.pivot}return m})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],l=s.name?i.createUniqueName(s.name):"",c=[],h=i._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return h&&c.push(h),s.camera!==void 0&&c.push(i.getDependency("camera",s.camera).then(function(d){return i._getNodeRef(i.cameraCache,s.camera,d)})),i._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){c.push(d)}),this.nodeCache[e]=Promise.all(c).then(function(d){let m;if(s.isBone===!0?m=new fd:d.length>1?m=new di:d.length===1?m=d[0]:m=new Gt,m!==d[0])for(let f=0,g=d.length;f<g;f++)m.add(d[f]);if(s.name&&(m.userData.name=s.name,m.name=l),li(m,s),s.extensions&&nr(n,m,s),s.matrix!==void 0){const f=new lt;f.fromArray(s.matrix),m.applyMatrix4(f)}else s.translation!==void 0&&m.position.fromArray(s.translation),s.rotation!==void 0&&m.quaternion.fromArray(s.rotation),s.scale!==void 0&&m.scale.fromArray(s.scale);if(!i.associations.has(m))i.associations.set(m,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const f=i.associations.get(m);i.associations.set(m,{...f})}return i.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new di;n.name&&(s.name=i.createUniqueName(n.name)),li(s,n),n.extensions&&nr(t,s,n);const l=n.nodes||[],c=[];for(let h=0,d=l.length;h<d;h++)c.push(i.getDependency("node",l[h]));return Promise.all(c).then(function(h){for(let m=0,f=h.length;m<f;m++){const g=h[m];g.parent!==null?s.add(Ab(g)):s.add(g)}const d=m=>{const f=new Map;for(const[g,v]of i.associations)(g instanceof Zn||g instanceof on)&&f.set(g,v);return m.traverse(g=>{const v=i.associations.get(g);v!=null&&f.set(g,v)}),f};return i.associations=d(s),s})}_createAnimationTracks(e,t,n,i,s){const l=[],c=e.name?e.name:e.uuid,h=[];function d(v){v.morphTargetInfluences&&h.push(v.name?v.name:v.uuid)}Bi[s.path]===Bi.weights?(d(e),e.isGroup&&e.children.forEach(d)):h.push(c);let m;switch(Bi[s.path]){case Bi.weights:m=Ps;break;case Bi.rotation:m=Ls;break;case Bi.translation:case Bi.scale:m=Ya;break;default:n.itemSize===1?m=Ps:m=Ya;break}const f=i.interpolation!==void 0?Qb[i.interpolation]:Ts,g=this._getArrayFromAccessor(n);for(let v=0,M=h.length;v<M;v++){const P=new m(h[v]+"."+Bi[s.path],t.array,g,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(P),l.push(P)}return l}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=jl(t.constructor),i=new Float32Array(t.length);for(let s=0,l=t.length;s<l;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ls?Jb:Bd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function oT(r,e,t){const n=e.attributes,i=new Pi;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],h=c.min,d=c.max;if(h!==void 0&&d!==void 0){if(i.set(new $(h[0],h[1],h[2]),new $(d[0],d[1],d[2])),c.normalized){const m=jl(Dr[c.componentType]);i.min.multiplyScalar(m),i.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const c=new $,h=new $;for(let d=0,m=s.length;d<m;d++){const f=s[d];if(f.POSITION!==void 0){const g=t.json.accessors[f.POSITION],v=g.min,M=g.max;if(v!==void 0&&M!==void 0){if(h.setX(Math.max(Math.abs(v[0]),Math.abs(M[0]))),h.setY(Math.max(Math.abs(v[1]),Math.abs(M[1]))),h.setZ(Math.max(Math.abs(v[2]),Math.abs(M[2]))),g.normalized){const P=jl(Dr[g.componentType]);h.multiplyScalar(P)}c.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(c)}r.boundingBox=i;const l=new gi;i.getCenter(l.center),l.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=l}function Wh(r,e,t){const n=e.attributes,i=[];function s(l,c){return t.getDependency("accessor",l).then(function(h){r.setAttribute(c,h)})}for(const l in n){const c=Kl[l]||l.toLowerCase();c in r.attributes||i.push(s(n[l],c))}if(e.indices!==void 0&&!r.index){const l=t.getDependency("accessor",e.indices).then(function(c){r.setIndex(c)});i.push(l)}return vt.workingColorSpace!==Ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),li(r,e),oT(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?tT(r,e.targets,t):r})}const Xh={type:"change"},Pc={type:"start"},zd={type:"end"},Ra=new zr,$h=new bi,lT=Math.cos(70*od.DEG2RAD),Qt=new $,En=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},il=1e-6;class cT extends Sx{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cr.ROTATE,MIDDLE:Cr.DOLLY,RIGHT:Cr.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Dn,this._lastTargetPosition=new $,this._quat=new Dn().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mh,this._sphericalDelta=new mh,this._scale=1,this._panOffset=new $,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new $,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hT.bind(this),this._onPointerDown=uT.bind(this),this._onPointerUp=dT.bind(this),this._onContextMenu=xT.bind(this),this._onMouseWheel=mT.bind(this),this._onKeyDown=gT.bind(this),this._onTouchStart=_T.bind(this),this._onTouchMove=vT.bind(this),this._onMouseDown=fT.bind(this),this._onMouseMove=pT.bind(this),this._interceptControlDown=yT.bind(this),this._interceptControlUp=ST.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=It.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xh),this.update(),this.state=It.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=En:n>Math.PI&&(n-=En),i<-Math.PI?i+=En:i>Math.PI&&(i-=En),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=l!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=Qt.length();l=this._clampDistance(c*this._scale);const h=c-l;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),s=!!h}else if(this.object.isOrthographicCamera){const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=h!==this.object.zoom;const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),l=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Ra.origin.copy(this.object.position),Ra.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ra.direction))<lT?this.object.lookAt(this.target):($h.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ra.intersectPlane($h,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>il||this._lastTargetPosition.distanceToSquared(this.target)>il?(this.dispatchEvent(Xh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Qt.copy(i).sub(this.target);let s=Qt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,l=n.width,c=n.height;this._mouse.x=i/l*2-1,this._mouse.y=-(s/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function uT(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function hT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function dT(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zd),this.state=It.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fT(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=It.DOLLY;break;case Cr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=It.ROTATE}break;case Cr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Pc)}function pT(r){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function mT(r){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(r.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(zd))}function gT(r){this.enabled!==!1&&this._handleKeyDown(r)}function _T(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=It.TOUCH_ROTATE;break;case Ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=It.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Pc)}function vT(r){switch(this._trackPointer(r),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=It.NONE}}function xT(r){this.enabled!==!1&&r.preventDefault()}function yT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ST(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class MT extends ud{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Hr;e.deleteAttribute("uv");const t=new kr({side:pn}),n=new kr,i=new Ac(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Bt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const l=new pd(e,n,6),c=new Gt;c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),c.updateMatrix(),l.setMatrixAt(0,c.matrix),c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),c.updateMatrix(),l.setMatrixAt(1,c.matrix),c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),c.updateMatrix(),l.setMatrixAt(2,c.matrix),c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),c.updateMatrix(),l.setMatrixAt(3,c.matrix),c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),c.updateMatrix(),l.setMatrixAt(4,c.matrix),c.position.set(-2.193,-.369,-5.547),c.rotation.set(0,.516,0),c.scale.set(3.875,3.487,2.986),c.updateMatrix(),l.setMatrixAt(5,c.matrix),this.add(l);const h=new Bt(e,Tr(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const d=new Bt(e,Tr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const m=new Bt(e,Tr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const f=new Bt(e,Tr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const g=new Bt(e,Tr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const v=new Bt(e,Tr(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Tr(r){return new F0({color:0,emissive:16777215,emissiveIntensity:r})}const Oa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class qr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ET=new Is(-1,1,1,-1,0,1);class bT extends un{constructor(){super(),this.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nn([0,2,0,0,2,0],2))}}const TT=new bT;class Lc{constructor(e){this._mesh=new Bt(TT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ET)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class wT extends qr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cs.clone(e.uniforms),this.material=new qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Lc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class qh extends qr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let l,c;this.inverse?(l=0,c=1):(l=1,c=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,l,4294967295),s.buffers.stencil.setClear(c),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class AT extends qr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class RT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ge);this._width=n.width,this._height=n.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wT(Oa),this.copyPass.material.blending=fi,this.timer=new cx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const l=this.passes[i];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const c=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}qh!==void 0&&(l instanceof qh?n=!0:l instanceof AT&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class CT extends qr{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=i}}const PT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Br extends qr{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ge(e.x,e.y):new Ge(256,256),this.clearColor=new Xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(s,l,{type:Tn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const f=new Sn(s,l,{type:Tn,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+m,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const g=new Sn(s,l,{type:Tn,depthBuffer:!1});g.texture.name="UnrealBloomPass.v"+m,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),s=Math.round(s/2),l=Math.round(l/2)}const c=PT;this.highPassUniforms=Cs.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qt({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];s=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new Ge(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Cs.clone(Oa.uniforms),this.blendMaterial=new qt({uniforms:this.copyUniforms,vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,premultipliedAlpha:!0,blending:Ir,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xe,this._oldClearAlpha=1,this._basic=new Vi,this._fsQuad=new Lc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ge(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let c=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[h].uniforms.direction.value=Br.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=Br.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),c=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=l}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let l=0;l<e;l++)t.push(.39894*Math.exp(-.5*l*l/(n*n))/n);const i=[],s=[];for(let l=1;l<e;l+=2){const c=t[l],h=l+1<e?t[l+1]:0,d=c+h;i.push((l*c+(l+1)*h)/d),s.push(d)}return new qt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ge(.5,.5)},direction:{value:new Ge(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Br.BlurDirectionX=new Ge(1,0);Br.BlurDirectionY=new Ge(0,1);const Ca={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class LT extends qr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Cs.clone(Ca.uniforms),this.material=new Sd({name:Ca.name,uniforms:this.uniforms,vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader}),this._fsQuad=new Lc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===Pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ec?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ic&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const ka=new Xe("#ffb02e"),DT=new Xe("#ff5a14"),IT=new Xe("#78c8ff"),NT=new Xe("#07090d"),Hd=new Xe("#0d1118"),FT={pelvis:"Pelvis",waist_yaw_link:"Waist",waist_roll_link:"Waist",torso_link:"Chest",shoulder_pitch_link:"Shoulder",shoulder_roll_link:"Shoulder",shoulder_yaw_link:"Upper arm",elbow_link:"Forearm",wrist_roll_link:"Wrist",wrist_pitch_link:"Wrist",wrist_yaw_link:"Glove"};function UT(r,e=""){if(e==="head_link")return"Head";const t=r.startsWith("left_")?"Left ":r.startsWith("right_")?"Right ":"",n=r.replace(/^(left|right)_/,"");return t+(FT[n]??n)}function OT(r){return r.userData.rimColor={value:new Xe(0,0,0)},r.onBeforeCompile=e=>{e.uniforms.rimColor=r.userData.rimColor,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 rimColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float rimF = pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 2.2);
        totalEmissiveRadiance += rimColor * (0.10 + 1.8 * rimF);`)},r}function kT(){return new Bt(new Tc(90,32,16),new qt({side:pn,depthWrite:!1,fog:!1,uniforms:{horizon:{value:Hd},top:{value:new Xe("#030406")}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`varying vec3 vDir; uniform vec3 horizon, top;
        void main(){ float h = smoothstep(-0.02, 0.45, vDir.y); gl_FragColor = vec4(mix(horizon, top, pow(h, 0.7)), 1.0);
          #include <colorspace_fragment>
        }`}))}function BT(){const r=new di,e=new Bt(new bc(60,96),new kr({color:"#0b0d11",roughness:.8,metalness:.05,envMapIntensity:.15}));e.receiveShadow=!0,r.add(e);const t=new Bt(new or(120,120),new qt({transparent:!0,depthWrite:!1,uniforms:{focus:{value:new Ge},tint:{value:new Xe("#9fb3d1")}},vertexShader:"varying vec2 vXY; void main(){ vXY = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        varying vec2 vXY; uniform vec2 focus; uniform vec3 tint;
        float line(float coord, float width){ float d = abs(fract(coord - 0.5) - 0.5) / fwidth(coord); return 1.0 - min(d / width, 1.0); }
        void main(){
          float r = length(vXY - focus);
          float minor = max(line(vXY.x * 2.0, 1.0), line(vXY.y * 2.0, 1.0)) * 0.035;
          float major = max(line(vXY.x * 0.5, 1.0), line(vXY.y * 0.5, 1.0)) * 0.09;
          float fade = exp(-r * r / 40.0);
          float pool = exp(-r * r / 1.6) * 0.07;
          gl_FragColor = vec4(tint, (max(minor, major) * fade) + pool);
        }`}));return t.position.z=.001,r.add(t),{group:r,grid:t}}class zT{constructor(e,t=48){this.count=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.life=new Float32Array(t);const n=new un;n.setAttribute("position",new mn(this.pos,3)),n.setAttribute("life",new mn(this.life,1)),this.points=new _d(n,new qt({transparent:!0,depthWrite:!1,blending:Ir,uniforms:{color:{value:ka.clone().multiplyScalar(2.2)},scale:{value:1}},vertexShader:`attribute float life; varying float vLife; uniform float scale;
        void main(){ vLife = life; vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = scale * 34.0 * life / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vLife; uniform vec3 color;
        void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
          gl_FragColor = vec4(color, smoothstep(0.5, 0.0, d) * vLife); }`})),this.points.frustumCulled=!1,e.add(this.points)}burst(e,t){for(let n=0;n<this.count;n++){const i=new $().randomDirection();i.addScaledVector(t,-1.2).normalize().multiplyScalar(.8+Math.random()*2.2),this.pos.set([e.x,e.y,e.z],n*3),this.vel.set([i.x,i.y,i.z+.6],n*3),this.life[n]=.6+Math.random()*.4}}update(e){for(let t=0;t<this.count;t++)if(!(this.life[t]<=0)){this.life[t]=Math.max(0,this.life[t]-e*1.6),this.vel[t*3+2]-=6*e;for(let n=0;n<3;n++)this.vel[t*3+n]*=1-2.5*e,this.pos[t*3+n]+=this.vel[t*3+n]*e}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.life.needsUpdate=!0}}function HT(r){return new qt({transparent:!0,depthWrite:!1,blending:Ir,side:qn,uniforms:{t:{value:1},color:{value:r.clone().multiplyScalar(2)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float t; uniform vec3 color;
      void main(){ float r = length(vUv); float radius = 0.15 + 0.85 * t;
        float band = exp(-pow((r - radius) / (0.035 + 0.04 * t), 2.0));
        float core = exp(-r * r / 0.02) * (1.0 - t) * 1.5;
        float a = (band + core) * (1.0 - t) * step(r, 1.0);
        gl_FragColor = vec4(color, a); }`})}function VT(){const r=new qt({transparent:!0,depthWrite:!1,blending:Ir,uniforms:{time:{value:0},strength:{value:0},color:{value:IT.clone()}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float time, strength; uniform vec3 color;
      void main(){
        float x = vUv.x, y = (vUv.y - 0.5) * 2.0;
        float chev = fract(x * 5.0 - abs(y) * 0.9 - time * 1.6);
        float stripe = smoothstep(0.0, 0.08, chev) * (1.0 - smoothstep(0.22, 0.32, chev));
        float edge = smoothstep(1.0, 0.55, abs(y));
        float along = smoothstep(0.0, 0.12, x) * (1.0 - smoothstep(0.7, 1.0, x));
        gl_FragColor = vec4(color * 1.6, stripe * edge * along * strength * 0.85);
      }`}),e=new Bt(new or(1.6,.5),r);return e.geometry.translate(.8+.25,0,0),e.position.z=.004,e.visible=!1,e}class GT{constructor(e){this.canvas=e;const t=new xb({canvas:e,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.toneMapping=ja,t.toneMappingExposure=.95,t.shadowMap.enabled=!0,t.shadowMap.type=gs,this.renderer=t;const n=new ud;n.background=NT,this.sky=kT(),this.sky.renderOrder=-1,n.add(this.sky),n.fog=new vc(Hd,5,24);const i=new $l(t);n.environment=i.fromScene(new MT,.04).texture,n.environmentIntensity=.4,this.scene=n,this.camera=new yn(34,1,.05,200),this.camera.position.set(2.45,1.3,2.8),this.controls=new cT(this.camera,e),this.controls.target.set(0,.7,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=1.4,this.controls.maxDistance=9,this.controls.maxPolarAngle=Math.PI*.495,this.controls.enablePan=!1,this.world=new di,this.world.rotation.x=-Math.PI/2,n.add(this.world);const s=new tx("#cfd8ea","#050608",.2);n.add(s);const l=new Wl("#fff1e2",2.1);l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.left=-2.5,l.shadow.camera.right=2.5,l.shadow.camera.top=2.5,l.shadow.camera.bottom=-2.5,l.shadow.camera.near=.5,l.shadow.camera.far=12,l.shadow.bias=-4e-4,l.shadow.normalBias=.02,l.shadow.radius=4,this.key=l,this.keyOffset=new $(2.5,5,2),n.add(l,l.target);const c=new Wl("#7fb6ff",2.2);c.position.set(-2.5,4.5,-4),n.add(c);const h=new Ac("#ff9a3c",0,3,2);this.world.add(h),this.flash=h;const d=BT();this.world.add(d.group),this.floorGrid=d.grid,this.sparks=new zT(this.world),this.ring=new Bt(new or(.34,.34),HT(ka)),this.ring.visible=!1,this.world.add(this.ring),this.retreat=VT(),this.world.add(this.retreat),this.composer=new RT(t),this.composer.addPass(new CT(n,this.camera)),this.bloom=new Br(new Ge(1,1),.7,.45,1),this.composer.addPass(this.bloom),this.composer.addPass(new LT),this.bodies=new Map,this.pickables=[],this.raycaster=new yx,this.shake=0,this.follow=!0,this.focus=new $(0,0,.7),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.bloom.setSize(e,t),this.camera.aspect=e/t,this.camera.fov=e/t<.8?50:34,this.camera.updateProjectionMatrix()}async loadRobot(e,t){const n=await new Rb().loadAsync(e),i=new Set(t),s={light:{color:"#bfc5ce",metalness:.2,roughness:.42,clearcoat:.35,clearcoatRoughness:.3},dark:{color:"#1d2027",metalness:.5,roughness:.4,clearcoat:.3,clearcoatRoughness:.35},glove:{color:"#a8180f",metalness:0,roughness:.45,clearcoat:.7,clearcoatRoughness:.25,sheen:.3,sheenColor:"#ff6a4a"}};n.scene.updateMatrixWorld(!0);const l=[];n.scene.traverse(c=>{c.isMesh&&l.push(c)});for(const c of l){const[h,d]=(c.name||c.parent?.name||"").split("--");if(!h)continue;let m=this.bodies.get(h);if(!m){const S=new di;this.world.add(S),m={group:S,materials:[],reflex:i.has(h),rim:0,rimTarget:0,rimColor:ka.clone()},this.bodies.set(h,m)}const f=c.geometry.getAttribute("color"),g=f?f.getX(0):.8,v=d.includes("glove")?"glove":g<.4?"dark":"light",M=OT(new Jn(s[v]));c.geometry.deleteAttribute("color"),c.geometry.computeVertexNormals();const P=new Bt(c.geometry,M);P.castShadow=!0,P.receiveShadow=!0,P.userData={body:h,part:d},m.group.add(P),m.materials.push(M),m.reflex?this.pickables.push(P):this.pickablesBlocked=(this.pickablesBlocked??[]).concat(P)}}setPoses(e,t,n,i){const s=new Dn,l=new Dn;e.forEach((c,h)=>{const d=this.bodies.get(c);if(!d)return;const m=h*3,f=h*4;d.group.position.set(t.pos[m]+(n.pos[m]-t.pos[m])*i,t.pos[m+1]+(n.pos[m+1]-t.pos[m+1])*i,t.pos[m+2]+(n.pos[m+2]-t.pos[m+2])*i),s.set(t.quat[f+1],t.quat[f+2],t.quat[f+3],t.quat[f]),l.set(n.quat[f+1],n.quat[f+2],n.quat[f+3],n.quat[f]),d.group.quaternion.slerpQuaternions(s,l,i)})}pick(e,t){this.raycaster.setFromCamera({x:e,y:t},this.camera);const i=this.raycaster.intersectObjects(this.pickables.concat(this.pickablesBlocked??[]),!1)[0];if(!i||!this.bodies.get(i.object.userData.body).reflex)return null;const s=this.world.worldToLocal(i.point.clone()),l=this.raycaster.ray.direction.clone().applyQuaternion(this.world.quaternion.clone().invert()),c=this.bodies.get(i.object.userData.body).group;return{body:i.object.userData.body,part:i.object.userData.part,point:s,pointBody:c.worldToLocal(i.point.clone()),dir:l}}bodyPointWorld(e,t){const n=this.bodies.get(e).group;return this.world.worldToLocal(n.localToWorld(t.clone()))}setHover(e){for(const[t,n]of this.bodies)n.strike||(n.rimTarget=t===e?.55:0,n.rimColor.copy(ka))}impact(e,t,n){this.sparks.burst(e,t.clone().multiplyScalar(-1)),this.ring.position.copy(e).addScaledVector(t,-.01),this.ring.lookAt(this.world.localToWorld(e.clone().sub(t))),this.ring.material.uniforms.t.value=0,this.ring.visible=!0,this.flash.position.copy(e).addScaledVector(t,-.15),this.flash.intensity=1.6,this.shake=1;const i=this.bodies.get(n);i&&(this.struck=i,i.strike=!0,i.rimColor.copy(DT))}setReflexState({alpha:e,active:t,dirWorld:n,robotXY:i,countdown:s}){this.struck&&(this.struck.rimTarget=1.4*e,!t&&e===0&&(this.struck.strike=!1,this.struck=null)),t&&n?(this.retreat.visible=!0,this.retreat.position.set(i[0],i[1],.004),this.retreat.rotation.z=Math.atan2(n[1],n[0]),this.retreat.material.uniforms.strength.value=Math.min(1,s*1.5)):(this.retreat.material.uniforms.strength.value*=.9,this.retreat.material.uniforms.strength.value<.01&&(this.retreat.visible=!1))}frame(e,t,n){if(this.sparks.update(e),this.ring.visible){const c=this.ring.material.uniforms.t;c.value=Math.min(1,c.value+e/.55),this.ring.scale.setScalar(.5+.8*c.value),c.value>=1&&(this.ring.visible=!1)}this.flash.intensity*=Math.exp(-e*9),this.retreat.material.uniforms.time.value=t;for(const c of this.bodies.values()){c.rim+=(c.rimTarget-c.rim)*Math.min(1,e*14);for(const h of c.materials)h.userData.rimColor.value.copy(c.rimColor).multiplyScalar(c.rim)}const i=new $(n[0],n[1],.7);if(this.follow){const c=i.clone().sub(this.focus).multiplyScalar(1-Math.exp(-e*3));this.focus.add(c);const h=new $(c.x,c.z,-c.y);this.camera.position.add(h),this.controls.target.add(h)}this.floorGrid.material.uniforms.focus.value.set(n[0],n[1]);const s=new $(n[0],0,-n[1]);this.key.position.copy(s).add(this.keyOffset),this.key.target.position.copy(s),this.controls.update(),this.sky.position.copy(this.camera.position);let l=null;this.shake>.001&&(this.shake*=Math.exp(-e*10),l=new $().randomDirection().multiplyScalar(.012*this.shake),this.camera.position.add(l)),this.composer.render(),l&&this.camera.position.sub(l)}}const Dc=new URL("./assets/",document.baseURI),ir=.02,WT=new URL("./vendor/pyodide/",document.baseURI),XT=160,$T=.35,bn=r=>document.getElementById(r),pt={canvas:bn("view"),loader:bn("loader"),fill:bn("loader-fill"),text:bn("loader-text"),motions:bn("motions"),hint:bn("hint"),dissolve:bn("dissolve"),scope:bn("scope"),part:bn("scope-part"),pause:bn("btn-pause"),follow:bn("btn-follow"),reset:bn("btn-reset"),hintText:bn("hint-text"),solve:bn("scope-solve")};function ds(r,e){pt.fill.style.width=`${Math.round(r*100)}%`,e&&(pt.text.textContent=e)}async function Ds(r){const e=await fetch(new URL(r,Dc));if(!e.ok)throw new Error(`${r}: HTTP ${e.status}`);return e.arrayBuffer()}const Vd=async r=>JSON.parse(new TextDecoder().decode(await Ds(r))),rl=new Map;function Zl(r){return rl.has(r)||rl.set(r,(async()=>{const e=await Vd(`motions/${r}/meta.json`),[t,n]=await Promise.all([Ds(`motions/${r}/reference.bin`),Ds(`motions/${r}/policy.bin`)]);return new Tb(e,new Float32Array(t),new bb(n,e.policy_layers))})()),rl.get(r)}function qT(r,e){const t=new Worker(new URL(""+new URL("reflex_worker-CHSJQ9dU.js",import.meta.url).href,import.meta.url),{type:"module"}),n={ready:!1,jointNames:null,waiting:new Map,nextId:1};return t.onmessage=({data:i})=>{i.type==="ready"?(n.ready=!0,n.jointNames=i.jointNames,r()):i.type==="result"||i.type==="error"&&i.id?(n.waiting.get(i.id)?.(i),n.waiting.delete(i.id)):i.type==="error"&&(console.error("reflex solver:",i.message),e(i.message))},t.onerror=i=>e(i.message),t.postMessage({type:"init",assets:Dc.href,vendor:WT.href}),n.solve=i=>new Promise(s=>{const l=n.nextId++;n.waiting.set(l,s),t.postMessage({type:"solve",id:l,...i})}),n}async function YT(){ds(.05,"Loading MuJoCo…");const[r,e]=await Promise.all([Q_({locateFile:m=>m.endsWith(".wasm")?ev:m}),Vd("motions/manifest.json")]);ds(.4,"Compiling robot…");const t=new r.MjVFS;for(const m of["left","right"]){const f=`${m}_boxing_glove_collision.stl`;t.addBuffer(f,new Uint8Array(await Ds(`robot/${f}`)))}const n=new TextDecoder().decode(await Ds("robot/g1_physics.xml")),i=r.MjModel.from_xml_string(n,t),s=new r.MjData(i),l=new wb(r,i,s,e);ds(.55,"Loading robot…");const c=new GT(pt.canvas);await c.loadRobot(new URL("robot/g1_visual.glb",Dc).href,e.reflex_bodies);const h=new URLSearchParams(location.search),d=e.motions.find(m=>m.id===h.get("motion"))?.id??e.motions[0].id;return ds(.75,"Loading policy…"),l.setMotion(await Zl(d),0),ds(1,"Ready"),{mujoco:r,model:i,data:s,rt:l,stage:c,manifest:e,initial:d}}function KT({model:r,data:e,rt:t,stage:n,manifest:i,initial:s}){const l=qT(()=>{pt.hintText.textContent="Click anywhere on the robot's upper body to strike it",pt.hint.classList.remove("loading")},()=>{pt.hintText.textContent="The reflex solver could not start in this browser",pt.hint.classList.add("failed")}),c=[];for(let z=1;z<r.nbody;z++)c.push(Object.keys(t.bodyId).find(J=>t.bodyId[J]===z));const h=()=>{const z=new Float64Array(c.length*3),J=new Float64Array(c.length*4);return c.forEach((se,ce)=>{const oe=t.bodyId[se];z.set(e.xpos.subarray(oe*3,oe*3+3),ce*3),J.set(e.xquat.subarray(oe*4,oe*4+4),ce*4)}),{pos:z,quat:J}};let d=h(),m=d;const f={motionId:s,loops:!0,paused:!1,accum:0,time:0,solving:null,epoch:0,readyAt:0,hover:null,fallTimer:0,transitioning:!1,struck:0,trace:new Float32Array(200),traceKind:new Uint8Array(200)},g=z=>i.motions.find(J=>J.id===z);f.loops=g(s).loops;const v=Math.round((Ka+.6)/ir),M=()=>!(!l.ready||f.paused||f.transitioning||f.solving||t.busy||f.time<f.readyAt||!f.loops&&t.motion.frames-t.frame<v);async function P(z){f.transitioning||(f.transitioning=!0,pt.dissolve.classList.add("on"),await new Promise(J=>setTimeout(J,360)),await z(),f.epoch+=1,d=m=h(),f.accum=0,f.trace.fill(0),f.traceKind.fill(0),n.setReflexState({alpha:0,active:!1}),pt.dissolve.classList.remove("on"),f.readyAt=f.time+.4,f.transitioning=!1)}async function S(z){if(z===f.motionId||f.transitioning)return;for(const ce of pt.motions.children)ce.classList.toggle("active",ce.dataset.id===z);const J=await Zl(z);await P(()=>{f.motionId=z,f.loops=g(z).loops,t.motion=J,t.reset(0,{keepXY:!0});const ce=new URL(location.href);ce.searchParams.set("motion",z),history.replaceState(null,"",ce)});const se=i.motions.findIndex(ce=>ce.id===z);[se-1,se+1].forEach(ce=>i.motions[ce]&&Zl(i.motions[ce].id))}for(const z of i.motions){const J=document.createElement("button");J.textContent=z.label,J.dataset.id=z.id,J.classList.toggle("active",z.id===s),J.addEventListener("click",()=>S(z.id)),pt.motions.appendChild(J)}const x=z=>{const J=pt.canvas.getBoundingClientRect();return[(z.clientX-J.left)/J.width*2-1,-((z.clientY-J.top)/J.height)*2+1]};let N=null;pt.canvas.addEventListener("pointerdown",z=>{N={x:z.clientX,y:z.clientY,t:performance.now()}}),pt.canvas.addEventListener("pointermove",z=>{if(z.pointerType!=="mouse"||z.buttons)return;const J=M()?n.pick(...x(z)):null;f.hover=J?.body??null,n.setHover(f.hover),pt.canvas.classList.toggle("aim",!!J)}),pt.canvas.addEventListener("pointerleave",()=>{f.hover=null,n.setHover(null),pt.canvas.classList.remove("aim")}),pt.canvas.addEventListener("pointerup",z=>{if(!N)return;const J=Math.hypot(z.clientX-N.x,z.clientY-N.y),se=performance.now()-N.t<450;if(N=null,J>6||!se||!M())return;const ce=n.pick(...x(z));ce&&k(ce)});async function k(z){const J=new $(z.dir.x,z.dir.y,0);if(J.lengthSq()<1e-6)return;J.normalize();const se=f.epoch,ce=[z.pointBody.x,z.pointBody.y,z.pointBody.z];f.solving={hit:z},n.setHover(null),pt.canvas.classList.remove("aim"),pt.hint.classList.add("gone");const oe=t.measuredState(),pe=l.jointNames.map(le=>t.jointNames.indexOf(le)),me=await l.solve({rootPos:oe.rootPos,rootQuat:oe.rootQuat,rootAngVelWorld:oe.rootAngVelWorld,jointPos:pe.map(le=>oe.jointPos[le]),jointVel:pe.map(le=>oe.jointVel[le]),body:z.body,pointLocal:ce,normalWorld:[J.x,J.y,0]});if(f.solving=null,se!==f.epoch)return;let ke=null;me.type==="result"&&me.success&&(ke=new Float64Array(29),pe.forEach((le,Z)=>{ke[le]=me.delta[Z]}));const Ie=t.bodyId[z.body],Fe=e.xpos.subarray(Ie*3,Ie*3+3),Ke=e.xmat.subarray(Ie*9,Ie*9+9),at=[0,1,2].map(le=>Fe[le]+Ke[3*le]*ce[0]+Ke[3*le+1]*ce[1]+Ke[3*le+2]*ce[2]);t.strike(z.body,at,[J.x,J.y],XT,ke)&&(n.impact(new $(...at),J,z.body),pt.part.textContent=UT(z.body,z.part),pt.solve.textContent=ke?`ReflexAPI solved in browser · ${Math.round(me.wall_ms)} ms`:"ReflexAPI found no retreat · push only",f.struck+=1,f.readyAt=1/0)}const L=(z,J)=>{z.classList.toggle("on",J),z.setAttribute("aria-pressed",String(J))},D=()=>{f.paused=!f.paused,pt.pause.classList.toggle("paused",f.paused),pt.pause.setAttribute("aria-label",f.paused?"Play":"Pause")},C=()=>{n.follow=!n.follow,L(pt.follow,n.follow)},B=()=>P(()=>t.reset(0,{keepXY:!0}));pt.pause.addEventListener("click",D),pt.follow.addEventListener("click",C),pt.reset.addEventListener("click",B),window.addEventListener("keydown",z=>{z.target.closest?.("button")&&(z.key===" "||z.key==="Enter")||(z.key===" "?(z.preventDefault(),D()):z.key==="f"||z.key==="F"?C():(z.key==="r"||z.key==="R")&&B())}),document.addEventListener("visibilitychange",()=>{ie=performance.now()});const T=pt.scope.getContext("2d");function O(){const z=Math.min(window.devicePixelRatio,2),J=pt.scope.clientWidth,se=pt.scope.clientHeight;pt.scope.width!==J*z&&(pt.scope.width=J*z,pt.scope.height=se*z),T.setTransform(z,0,0,z,0,0),T.clearRect(0,0,J,se);const ce=f.trace.length,oe=J/(ce-1);T.strokeStyle="rgba(255,255,255,0.07)",T.lineWidth=1;for(const Fe of[.25,.5,.75])T.beginPath(),T.moveTo(0,se*Fe),T.lineTo(J,se*Fe),T.stroke();for(let Fe=0;Fe<ce;Fe++)f.traceKind[Fe]>=1&&(T.fillStyle="rgba(120,200,255,0.09)",T.fillRect(Fe*oe,0,oe+.5,se));const pe=1,me=Fe=>se-3-Math.min(Fe,pe)/pe*(se-8),ke=T.createLinearGradient(0,0,0,se);ke.addColorStop(0,"rgba(255,140,40,0.35)"),ke.addColorStop(1,"rgba(255,140,40,0)"),T.fillStyle=ke,T.beginPath(),T.moveTo(0,se);for(let Fe=0;Fe<ce;Fe++)T.lineTo(Fe*oe,me(f.trace[Fe]));T.lineTo(J,se),T.fill(),T.lineWidth=2,T.lineJoin="round";for(let Fe=1;Fe<ce;Fe++){const Ke=f.traceKind[Fe];T.strokeStyle=Ke===2?"#ff6a1f":Ke===3?"#ffb02e":"rgba(238,241,246,0.35)",T.beginPath(),T.moveTo((Fe-1)*oe,me(f.trace[Fe-1])),T.lineTo(Fe*oe,me(f.trace[Fe])),T.stroke()}const Ie=f.trace[ce-1];T.fillStyle=Ie>.01?"#ffb02e":"rgba(238,241,246,0.5)",T.beginPath(),T.arc(J-3,me(Ie),2.6,0,Math.PI*2),T.fill()}const I=new Float64Array(29);function j(){t.currentDelta(I);let z=0;for(let ce=0;ce<29;ce++)z+=I[ce]*I[ce];const J=t.event?t.event.age*t.dt:1/0,se=t.eventActive?J<=Fd?2:J<Ud?3:1:0;f.trace.copyWithin(0,1),f.traceKind.copyWithin(0,1),f.trace[f.trace.length-1]=Math.sqrt(z),f.traceKind[f.trace.length-1]=se}let ie=performance.now(),ae=!1;function V(z){const J=Math.min((z-ie)/1e3,.1);if(ie=z,!f.paused&&!f.transitioning&&!f.solving){f.accum+=J;let pe=0;for(;f.accum>=ir&&pe<4;){d=m,t.controlStep(),m=h(),f.accum-=ir,f.time+=ir,pe+=1,j();const me=t.busy;if(ae&&!me&&(f.readyAt=f.time+$T),ae=me,!f.loops&&t.stepIndex>=t.motion.frames-1){P(()=>t.reset(0,{keepXY:!0}));break}const ke=e.xpos[t.torso*3+2];if(f.fallTimer=ke<.4?f.fallTimer+ir:0,f.fallTimer>.6){f.fallTimer=0,P(()=>t.reset(t.frame,{keepXY:!0}));break}}pe===4&&(f.accum=Math.min(f.accum,ir))}const se=f.paused||f.transitioning?1:Math.min(f.accum/ir,1);n.setPoses(c,d,m,se);const ce=t.event,oe=ce?Math.max(Ka-ce.age*t.dt,0):0;n.setReflexState({alpha:ce?t.alpha(ce.age):0,active:t.eventActive,dirWorld:ce?.dir,robotXY:[e.qpos[0],e.qpos[1]],countdown:oe}),f.hover&&!M()&&(f.hover=null,n.setHover(null),pt.canvas.classList.remove("aim")),pt.part.style.opacity=t.eventActive?1:.45,n.frame(J,z/1e3,[e.qpos[0],e.qpos[1]]),O(),requestAnimationFrame(V)}requestAnimationFrame(V),window.__reflex={rt:t,stage:n,state:f,canStrike:M,selectMotion:S,solver:l}}YT().then(r=>{KT(r),pt.loader.classList.add("done")}).catch(r=>{console.error(r),pt.loader.classList.add("error"),pt.text.textContent=`Could not start the simulation: ${r.message}`});const jT=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
