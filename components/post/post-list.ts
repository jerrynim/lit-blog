import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-list")
export class PostList extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                margin-bottom: 12px;
            }
            slot {
                display: block;
            }
            slot::before {
                content: "";
                height: 8px;
                margin: 12px 0 0;
                width: 8px;
                background: #5f6368;
                border-radius: 50%;
                left: 0;
                position: absolute;
            }
        `,
    ];

    protected render() {
        return html`<slot></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-list": PostList;
    }
}
