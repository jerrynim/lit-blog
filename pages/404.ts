import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("page-404")
export class Page404 extends LitElement {
    static styles = [
        resetCss,
        css`
            div {
                width: "100%";
                height: "100%";
            }
            img {
                display: block;
                margin: auto;
                width: 100%;
                max-width: 800px;
            }
        `,
    ];

    @property({ type: Number }) count = 0;
    protected render() {
        return html`<div><img src="/static/404.gif" /></div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "page-404": Page404;
    }
}
