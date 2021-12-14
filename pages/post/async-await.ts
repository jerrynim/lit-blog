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
               <h1>async await </h1>
               <post-tag>javascript async await promise</post-tag>
               <post-date>2021-12-14</post-date>
           </post-head>
           <post-body></post-body>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "async-await": AsyncAwait;
    }
}
