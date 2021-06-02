import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-title")
export class PostTitle extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                width: 100%;
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 12px;
            }
        `,
    ];

    protected render() {
        return html`<slot></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-title": PostTitle;
    }
}
