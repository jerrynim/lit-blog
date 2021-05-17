import{r as t,e,n as r}from"./index.js";import{LitElement as o,html as i}from"lit-element/lit-element.js";var l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,n=(t,e,r,o)=>{for(var i,n=o>1?void 0:o?s(e,r):e,p=t.length-1;p>=0;p--)(i=t[p])&&(n=(o?i(e,r,n):i(n))||n);return o&&n&&l(e,r,n),n};let p=class extends o{constructor(){super(...arguments),this.count=0}render(){return i`
            <style>
                ${t}
            </style>
            <post-title>
                <p>lit-home임</p>
                <lit-link href="/post-1">Post1로 이동</lit-link>
            </post-title>
        `}};n([e({type:Number})],p.prototype,"count",2),p=n([r("lit-home")],p);export{p as Home};
