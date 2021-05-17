import{r as t,e,n as r}from"./index.js";import{LitElement as i,html as l}from"lit-element/lit-element.js";var o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=(t,e,r,i)=>{for(var l,s=i>1?void 0:i?n(e,r):e,p=t.length-1;p>=0;p--)(l=t[p])&&(s=(i?l(e,r,s):l(s))||s);return i&&s&&o(e,r,s),s};let p=class extends i{constructor(){super(...arguments),this.count=0}render(){return l`
            <style>
                ${t}
            </style>
            <post-title>
                <lit-link href="/post-1">Post1로 이동</lit-link>
                <br />
                <lit-link href="/">Home으로 이동</lit-link>
                <br />
                <lit-link href="/something">없는 페이지로 이동</lit-link>
            </post-title>
        `}};s([e({type:Number})],p.prototype,"count",2),p=s([r("post-1")],p);export{p as POST1};
