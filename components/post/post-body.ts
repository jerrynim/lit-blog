import { resetCss } from "@styles";
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";

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
                margin-bottom: 60px;
                font-size: 16px;
                line-height: 1.5;
                color: var(--grey);
            }
            @media (max-width: 700px) {
                :host {
                    width: auto;
                    padding: 0 20px;
                    font-size: 16px;
                }
            }
            ::slotted(ul) {
                position: relative;
                margin: 12px 0;
                padding-left: 14px;
            }
            ::slotted(ol) {
                position: relative;
                margin: 12px 0;
                padding-left: 20px;
            }

            ::slotted(code) {
                padding: 3px 4px;
                background-color: var(--lightgrey);
                color: var(--typescript);
            }
        `,
    ];

    firstUpdated(_changedProperties: any) {
        window.prerenderReady = true;
        super.firstUpdated(_changedProperties);
    }

    protected render() {
        return html`<slot></slot><post-buy-me-coffee></post-buy-me-coffee> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-body": PostBody;
    }
}
