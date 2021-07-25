import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("post-body")
export class PostBody extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                width: 100%;
                max-width: 680px;
                padding-bottom: 100px;
                margin: auto;
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
        return html`<slot></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-body": PostBody;
    }
}
