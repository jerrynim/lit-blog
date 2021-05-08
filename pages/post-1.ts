import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("post-1")
export class POST1 extends LitElement {
    @property({ type: Number }) count = 0;
    protected render() {
        return html`
            <post-title>
                <lit-link href="/post-1">Post1로 이동</lit-link>
                <br />
                <lit-link href="/">Home으로 이동</lit-link>
                <br />
                <lit-link href="/something">없는 페이지로 이동</lit-link>
            </post-title>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-1": POST1;
    }
}
