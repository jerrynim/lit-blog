import { resetCss } from "@styles";
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("post-body")
export class PostBody extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                width: 100%;
                max-width: 680px;
                padding-bottom: 100px;
                margin: auto;
                font-size: 18px;
                line-height: 30px;
            }

            ::slotted(ul) {
                position: relative;
                margin: 12px 0;
                padding-left: 14px;
            }

            ::slotted(code) {
                padding: 3px 4px;
                background-color: var(--lightgrey);
                color: var(--typescript);
            }
        `,
    ];
    protected render() {
        return html`<slot></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-body": PostBody;
    }
}
