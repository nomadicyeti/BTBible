import"./Bg9kRutz.js";import{i as C}from"./BxiFlMN0.js";import{t as x,p as Q,aK as E,c as a,r as n,s as S,O as h,a as k}from"./D2BM3cv1.js";import{a as u,n as R,e as $,t as w,s as A}from"./CRc66pB2.js";import{e as q,i as F}from"./BbljCwWF.js";import{p as b}from"./C5aigyhq.js";import{s as D,a as T}from"./BRe-H2Zv.js";import{H as z,h as l}from"./B11Zin6s.js";import{s as M}from"./DoWIUU7Y.js";import{s as O}from"./ves1yLU4.js";var L=R('<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 20q-.825 0-1.412-.587Q10 18.825 10 18q0-.825.588-1.413Q11.175 16 12 16t1.413.587Q14 17.175 14 18q0 .825-.587 1.413Q12.825 20 12 20Zm0-6q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm0-6q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8Z"></path></svg>');function N(t,e){let o=b(e,"color",8,"black");var r=L();x(()=>M(r,"fill",o())),u(t,r)}var B=R('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"></path></svg>');function K(t,e){let o=b(e,"color",8,"black");var r=B();x(()=>M(r,"fill",o())),u(t,r)}var V=w("<li><a> </a></li>"),G=w('<div class="dy-dropdown dy-dropdown-bottom dy-dropdown-end"><div tabindex="0" class="dy-btn dy-btn-ghost p-1"><!></div> <ul tabindex="0" class="dy-dropdown-content dy-menu shadow bg-base-100 z-10"></ul></div>');function pt(t,e){Q(e,!1);const[o,r]=D(),g=()=>T(z,"$monoIconColor",o),p=E();let v=b(e,"actions",24,()=>[""]);function _(i){p("menuaction",{text:i}),document.activeElement.blur()}C();var c=G(),s=a(c),m=a(s);N(m,{get color(){return g()}}),n(s);var d=S(s,2);q(d,5,v,F,(i,f)=>{var I=V(),y=a(I),j=a(y,!0);n(y),n(I),x(()=>A(j,h(f))),$("click",y,()=>_(h(f))),u(i,I)}),n(d),n(c),u(t,c),k(),r()}var J=w("<li><a> </a></li>"),P=w('<div class="dy-dropdown dy-dropdown-bottom dy-dropdown-end"><div tabindex="0" class="dy-btn dy-btn-ghost p-1"><!></div> <ul tabindex="0" class="dy-dropdown-content dy-menu shadow bg-base-100 z-10"></ul></div>');function vt(t,e){Q(e,!1);const o=E();let r=b(e,"actions",24,()=>[""]);function g(s){o("menuaction",{text:s}),document.activeElement.blur()}C();var p=P(),v=a(p),_=a(v);K(_,{color:"white"}),n(v);var c=S(v,2);q(c,5,r,F,(s,m)=>{var d=J(),i=a(d),f=a(i,!0);n(i),n(d),x(()=>A(f,h(m))),$("click",i,()=>g(h(m))),u(s,d)}),n(c),n(p),u(t,p),k()}const Z="annotations.txt";function H(){let t="";return l.mainFeatures["annotation-share-subject"]?t+=l.mainFeatures["annotation-share-subject"]+`
`:t+=l.name+`
`,l.mainFeatures["annotation-share-email"]&&(t+=l.mainFeatures["annotation-share-email"]+`
`),t}async function mt(t){let e=t.reference+`
`+t.text;await O(H(),e,Z)}async function ft(t){let e=l.name+`

`+t.map(o=>`${o.reference}
${o.text}`).join(`

`);await O(H(),e,Z,!0)}const U=1,W=2,X=3;function Y(t,e){return t.bookIndex>e.bookIndex?1:t.bookIndex<e.bookIndex?-1:parseInt(t.chapter)>parseInt(e.chapter)?1:parseInt(t.chapter)<parseInt(e.chapter)?-1:parseInt(t.verse)>parseInt(e.verse)?1:-1}function tt(t,e){return t.date<e.date?1:-1}function et(t,e){return t.penColor>e.penColor?1:t.penColor<e.penColor?-1:t.date<e.date?1:-1}function ht(t,e){return e===W?t.toSorted(Y):e===U?t.toSorted(tt):e===X?t.toSorted(et):t}export{pt as C,vt as S,mt as a,U as b,W as c,X as d,ft as s,ht as t};
