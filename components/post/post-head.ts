import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-head")
export class PostHead extends LitElement {
    static styles = [
        resetCss,
        css`
            h1 {
                font-size: 40px;
                font-weight: bold;
                margin-bottom: 84px;
            }
        `,
    ];

    protected render() {
        return html`<h1>
            <slot></slot>
        </h1>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-head": PostHead;
    }
}
