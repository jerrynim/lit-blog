import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("post-1")
export class POST1 extends LitElement {
    @property({ type: Number }) count = 0;
    protected render() {
        return html`<post-title></post-title> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-1": POST1;
    }
}
