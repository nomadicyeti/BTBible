import"./Bg9kRutz.js";import{i as dt}from"./BxiFlMN0.js";import{p as gt,a9 as j,aa as pt,c as f,r as u,t as z,a as mt,a7 as S,f as E,O as s,a8 as D,a0 as L,s as bt}from"./D2BM3cv1.js";import{a as k,t as Q,d as G,s as vt,e as _t}from"./CRc66pB2.js";import{p as ht,i as H}from"./C5aigyhq.js";import{e as kt,i as yt}from"./BbljCwWF.js";import{a as $t,b as J,t as xt,s as K}from"./DoWIUU7Y.js";import{s as Bt,a as y}from"./BRe-H2Zv.js";import{b as wt,g as d}from"./CroP3Izp.js";import{h as $,F as Ct,R as Nt,_ as jt,x as St,j as g,p as M}from"./B11Zin6s.js";import{c as Dt}from"./EgJd3ViG.js";function V(t){var c,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(c=0;c<i;c++)t[c]&&(r=V(t[c]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function Lt(){for(var t,c,r=0,o="",i=arguments.length;r<i;r++)(t=arguments[r])&&(c=V(t))&&(o&&(o+=" "),o+=c);return o}function At(t){return typeof t=="object"?Lt(t):t??""}var Ft=Q('<button class="dy-btn dy-btn-ghost flex-col gap-1 my-2"><picture><img alt=""></picture> <span class="text-center"> </span></button>'),It=Q('<div class="h-16"><div class="mx-auto max-w-screen-md"><div><!></div></div></div>');function Kt(t,c){var q,O,P;gt(c,!1);const[r,o]=Bt(),i=()=>y(Ct,"$s",r),W=()=>y(M,"$refs",r),X=()=>y(jt,"$theme",r),Y=()=>y(St,"$language",r),A=D(),F=D(),I=D();let Z=ht(c,"barType",8,void 0);const m=(q=$)==null?void 0:q.bottomNavBarItems,tt=((O=Dt.screens)==null?void 0:O.length)>0,et=$.mainFeatures.search,at=((P=$.plans)==null?void 0:P.plans.length)>0;function st(a){let e=!0;switch(a){case"contents":e=tt;break;case"plans":e=at;break;case"search":e=et;break;default:e=!0}return e}function R(a,e){let p=a===Z();return a==="book"&&e&&e!==""&&(p=!1),p}function ot(){let a="grid-cols-5";if(m)switch(m.length){case 2:a="grid-cols-2";break;case 3:a="grid-cols-3";break;case 4:a="grid-cols-4";break;default:a="grid-cols-5"}return a}function rt(a,e){switch(a){case"contents":d(g(`/contents/${e&&e!==""?e:"1"}`));break;case"about":d(g("/about"));break;case"book":if(e&&e!==""){const[B,n]=e.split("|"),l=$.bookCollections.find(w=>w.id===B);let v="";if(l)v=l.languageCode+"_"+l.id;else return;M.set({docSet:v,book:n,chapter:"1",verse:"1"})}d(g("/text"));break;case"plans":d(g("/plans"));break;case"search":d(g(`/search/${W().collection}`));break;case"settings":d(g("/settings"));break;default:console.log("BottomNavigation Bar: Unknown NavBar button type pressed: ",a);break}}j(()=>i(),()=>{S(A,i()["ui.bottom-navigation."]["background-color"])}),j(()=>i(),()=>{S(F,i()["ui.bottom-navigation.item.text"].color)}),j(()=>i(),()=>{S(I,i()["ui.bottom-navigation.item.text.selected"].color)}),pt(),dt();var b=It(),T=f(b),x=f(T);const nt=L(()=>`grid ${ot()??""} justify-items-center`);var ct=f(x);{var it=a=>{var e=G(),p=E(e);kt(p,1,()=>m,yt,(B,n)=>{var l=G(),v=E(l);{var w=C=>{var _=Ft(),h=f(_),U=f(h);const lt=L(()=>At(R(s(n).type,s(n).link.default)?"opacity-100":"opacity-50"));u(h);var N=bt(h,2);const ft=L(()=>`color: ${(R(s(n).type,s(n).link.default)?s(I):s(F))??""}`);var ut=f(N,!0);u(N),u(_),z(()=>{xt(h,"invert",X()==="Dark"),K(U,"src",`${wt??""}/icons/menu-items/${s(n).images[0].file??""}`),J(U,s(lt)),K(N,"style",s(ft)),vt(ut,s(n).title[Y()]||s(n).title[Nt])}),_t("click",_,()=>rt(s(n).type,s(n).link.default)),k(C,_)};H(v,C=>{st(s(n).type)&&C(w)})}k(B,l)}),k(a,e)};H(ct,a=>{m&&a(it)})}u(x),u(T),u(b),z(()=>{$t(b,"background-color",s(A)),J(x,s(nt))}),k(t,b),mt(),o()}export{Kt as B,At as c};
