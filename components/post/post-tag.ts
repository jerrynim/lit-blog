import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";

@customElement("post-tag")
export class PostTag extends LitElement {
    static styles = [
        resetCss,
        css`
            ul {
                display: inline-block;
            }
            li {
                display: inline-block;
                margin-right: 6px;
                margin-bottom: 8px;
                padding: 6px 12px;
                border: 1px solid var(--go);
                border-radius: 8px;
                color: var(--go);
                font-size: 14px;
            }
        `,
    ];

    protected render() {
        const text = this.childNodes[0].textContent;
        const tags = text?.split(" ");
        return html`<ul>
            ${tags?.map((tag) => html`<li>#${tag}</li>`)}
        </ul>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-tag": PostTag;
    }
}
