import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../components/post/lit-post";

@customElement("post-1")
export class POST1 extends LitElement {
    @property({ type: Number }) count = 0;
    protected render() {
        return html` <lit-post></lit-post> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-1": POST1;
    }
}
