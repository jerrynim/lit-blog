import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";

@customElement("post-blockquote")
export class PostBlockquote extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                position: relative;
                display: block;
                margin: 12px 0;
                padding: 3px 0;
                color: var(--black);
            }
            blockquote::before {
                position: absolute;
                top: 0;
                left: -12px;
                width: 3px;
                height: 100%;
                content: " ";
                background-color: var(--typescript);
            }
        `,
    ];

    protected render() {
        const text = this.childNodes[0].textContent;
        return html`<blockquote>${text}</blockquote>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-blockquote": PostBlockquote;
    }
}
