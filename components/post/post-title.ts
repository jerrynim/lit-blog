import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";
import copyIcon from "/copy.svg?raw";

@customElement("post-title")
export class PostTitle extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: inline-flex;
                align-items: center;
                margin-bottom: 12px;
                cursor: pointer;
            }

            :host(:hover) svg {
                visibility: visible;
            }

            :host(:hover) h2 {
                text-decoration: underline;
            }

            h2 {
                font-size: 24px;
                font-weight: bold;
                color: #333333;
                margin-right: 6px;
            }

            svg {
                visibility: hidden;
            }
        `,
    ];

    protected render() {
        const CopyIcon = html([copyIcon] as any);

        return html`<h2><slot></slot></h2>
            ${CopyIcon}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-title": PostTitle;
    }
}
