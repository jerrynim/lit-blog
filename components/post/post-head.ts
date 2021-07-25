import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-head")
export class PostHead extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                width: 100%;
                max-width: 680px;
                margin: auto;
                margin-bottom: 84px;
            }
            ::slotted(h1) {
                margin: 0;
                margin-bottom: 20px;
                font-size: 40px;
                font-weight: bold;
            }
        `,
    ];

    protected render() {
        return html` <slot></slot> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-head": PostHead;
    }
}
