import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("page-404")
export class Page404 extends LitElement {
    @property({ type: Number }) count = 0;
    protected render() {
        return html`<post-title>
            <p>404입니다.</p>
            <br />
            <lit-link href="/">Home으로 돌아가기</lit-link>
        </post-title> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "page-404": Page404;
    }
}
