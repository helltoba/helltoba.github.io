import{b as j,a as B,n as $,c as ee}from"./disclose-version.CJZQUDuK.js";import"./legacy.CSOsDga6.js";import{b as L,h as p,e as I,G as ae,ad as U,H as te,g as D,s as S,i as A,j as x,ae as C,r as W,c as z,d as Y,C as M,af as ne,ag as re,ah as le,ai as se,aj as X,ak as ie,al as fe,a1 as oe,x as O,am as ue,an as de,ao as ve,o as ce,E as _e,q as he,k as ge,ap as J,p as me,t as P,a as pe,aq as Ee,ar as ke,f as be,as as we,B as V}from"./runtime.olcEU33U.js";import{i as xe,a as q}from"./stores.CwOT6lui.js";import{l as F,p as y}from"./props.CcPGr5Eo.js";function Ne(f,e){return e}function Te(f,e,n,o){for(var _=[],u=e.length,s=0;s<u;s++)re(e[s].e,_,!0);var c=u>0&&_.length===0&&n!==null;if(c){var d=n.parentNode;le(d),d.append(n),o.clear(),w(f,e[0].prev,e[u-1].next)}se(_,()=>{for(var v=0;v<u;v++){var a=e[v];c||(o.delete(a.k),w(f,a.prev,a.next)),X(a.e,!c)}})}function ye(f,e,n,o,_,u=null){var s=f,c={flags:e,items:new Map,first:null};p&&I();var d=null,v=!1;L(()=>{var a=n(),i=ae(a)?a:a==null?[]:U(a),t=i.length;if(v&&t===0)return;v=t===0;let r=!1;if(p){var h=s.data===te;h!==(t===0)&&(s=D(),S(s),A(!1),r=!0)}if(p){for(var k=null,g,l=0;l<t;l++){if(x.nodeType===8&&x.data===ie){s=x,r=!0,A(!1);break}var m=i[l],N=o(m,l);g=K(x,c,k,null,m,N,l,_,e),c.items.set(N,g),k=g}t>0&&S(D())}if(!p){var b=fe;Ae(i,c,s,_,e,(b.f&C)!==0,o)}u!==null&&(t===0?d?W(d):d=z(()=>u(s)):d!==null&&Y(d,()=>{d=null})),r&&A(!0),n()}),p&&(s=x)}function Ae(f,e,n,o,_,u,s){var c=f.length,d=e.items,v=e.first,a=v,i,t=null,r=[],h=[],k,g,l,m;for(m=0;m<c;m+=1){if(k=f[m],g=s(k,m),l=d.get(g),l===void 0){var N=a?a.e.nodes_start:n;t=K(N,e,t,t===null?e.first:t.next,k,g,m,o,_),d.set(g,t),r=[],h=[],a=t.next;continue}if(Ce(l,k,m),l.e.f&C&&W(l.e),l!==a){if(i!==void 0&&i.has(l)){if(r.length<h.length){var b=h[0],E;t=b.prev;var R=r[0],T=r[r.length-1];for(E=0;E<r.length;E+=1)G(r[E],b,n);for(E=0;E<h.length;E+=1)i.delete(h[E]);w(e,R.prev,T.next),w(e,t,R),w(e,T,b),a=b,t=T,m-=1,r=[],h=[]}else i.delete(l),G(l,a,n),w(e,l.prev,l.next),w(e,l,t===null?e.first:t.next),w(e,t,l),t=l;continue}for(r=[],h=[];a!==null&&a.k!==g;)(u||!(a.e.f&C))&&(i??(i=new Set)).add(a),h.push(a),a=a.next;if(a===null)continue;l=a}r.push(l),t=l,a=l.next}if(a!==null||i!==void 0){for(var H=i===void 0?[]:U(i);a!==null;)(u||!(a.e.f&C))&&H.push(a),a=a.next;var Q=H.length;if(Q>0){var Z=null;Te(e,H,Z,d)}}M.first=e.first&&e.first.e,M.last=t&&t.e}function Ce(f,e,n,o){ne(f.v,e),f.i=n}function K(f,e,n,o,_,u,s,c,d){var v=(d&de)!==0,a=(d&ve)===0,i=v?a?oe(_):O(_):_,t=d&ue?O(s):s,r={i:t,v:i,k:u,a:null,e:null,prev:n,next:o};try{return r.e=z(()=>c(f,i,t),p),r.e.prev=n&&n.e,r.e.next=o&&o.e,n===null?e.first=r:(n.next=r,n.e.next=r.e),o!==null&&(o.prev=r,o.e.prev=r.e),r}finally{}}function G(f,e,n){for(var o=f.next?f.next.e.nodes_start:n,_=e?e.e.nodes_start:n,u=f.e.nodes_start;u!==o;){var s=ce(u);_.before(u),u=s}}function w(f,e,n){e===null?f.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Ie(f,e,n,o,_){var c;p&&I();var u=(c=e.$$slots)==null?void 0:c[n],s=!1;u===!0&&(u=e.children,s=!0),u===void 0||u(f,s?()=>o:o)}function Se(f,e,n,o,_,u){let s=p;p&&I();var c,d,v=null;p&&x.nodeType===1&&(v=x,I());var a=p?x:f,i;L(()=>{const t=e()||null;var r=J;t!==c&&(i&&(t===null?Y(i,()=>{i=null,d=null}):t===d?W(i):X(i)),t&&t!==d&&(i=z(()=>{if(v=p?v:document.createElementNS(r,t),j(v,v),o){var h=p?he(v):v.appendChild(ge());p&&(h===null?A(!1):S(h)),o(v,h)}M.nodes_end=v,a.before(v)})),c=t,c&&(d=c))},_e),s&&(A(!0),S(a))}/**
 * @license lucide-svelte v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var He=$("<svg><!><!></svg>");function Oe(f,e){const n=F(e,["children","$$slots","$$events","$$legacy"]),o=F(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);me(e,!1);let _=y(e,"name",8,void 0),u=y(e,"color",8,"currentColor"),s=y(e,"size",8,24),c=y(e,"strokeWidth",8,2),d=y(e,"absoluteStrokeWidth",8,!1),v=y(e,"iconNode",24,()=>[]);const a=(...k)=>k.filter((g,l,m)=>!!g&&m.indexOf(g)===l).join(" ");xe();var i=He();let t;var r=ke(i);ye(r,1,v,Ne,(k,g)=>{let l=()=>V(g)[0],m=()=>V(g)[1];var N=ee(),b=be(N);Se(b,l,!0,(E,R)=>{let T;P(()=>T=q(E,T,{...m()},void 0,E.namespaceURI===J,E.nodeName.includes("-")))}),B(k,N)});var h=Ee(r);Ie(h,e,"default",{}),we(i),P(()=>t=q(i,t,{...Re,...o,width:s(),height:s(),stroke:u(),"stroke-width":d()?Number(c())*24/Number(s()):c(),class:a("lucide-icon","lucide",_()?`lucide-${_()}`:"",n.class)},void 0,!0)),B(f,i),pe()}export{Oe as I,Ie as s};