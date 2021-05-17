import{r as t,e,n as r}from"./index.js";import{LitElement as o,html as i}from"lit-element/lit-element.js";var l=Object.defineProperty,n=Object.getOwnPropertyDescriptor,p=(t,e,r,o)=>{for(var i,p=o>1?void 0:o?n(e,r):e,s=t.length-1;s>=0;s--)(i=t[s])&&(p=(o?i(e,r,p):i(p))||p);return o&&p&&l(e,r,p),p};let s=class extends o{constructor(){super(...arguments),this.count=0}render(){return i`
            <style>
                ${t}
            </style>
            <post-title>
                <p>404입니다.</p>
                <br />
                <lit-link href="/">Home으로 돌아가기</lit-link>
            </post-title>
        `}};p([e({type:Number})],s.prototype,"count",2),s=p([r("page-404")],s);export{s as Page404};
