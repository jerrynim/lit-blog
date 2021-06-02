import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";
import "./post-title";
@customElement("post-body")
export class PostBody extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                width: 100%;
            }
            ::slotted(p) {
                font-size: 18px;
                line-height: 30px;
                margin: 0;
                margin-bottom: 12px;
            }
        `,
    ];

    protected render() {
        return html`<div>
            <slot></slot>
        </div> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-body": PostBody;
    }
}
