import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("async-await")
@withPost
export class AsyncAwait extends LitElement {
    protected render() {
        return html`<post-head-image src=''></post-head-image>
           <post-head>
               <h1></h1>
               <post-tag></post-tag>
               <post-date></post-date>
           </post-head>
           <post-body></post-body>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "async-await": AsyncAwait;
    }
}
