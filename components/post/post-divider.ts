import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";

@customElement("post-divider")
export class PostDivider extends LitElement {
    static styles = [
        resetCss,
        css`
            hr {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 30px;
                margin: 20px 0;
                border: 0;
            }

            hr::before {
                content: " ";
                width: 260px;
                height: 1px;
                background-color: var(--silver);
            }
            hr::after {
                content: "Jerrynim";
                position: absolute;
                width: 140px;
                background-color: white;
                text-align: center;
                font-size: 21px;
                font-family: Mansalva;
                color: var(--silver);
            }
        `,
    ];

    protected render() {
        return html`<hr />`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-divider": PostDivider;
    }
}
