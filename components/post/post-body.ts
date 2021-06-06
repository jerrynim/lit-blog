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
