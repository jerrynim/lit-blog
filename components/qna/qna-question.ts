import { resetCss } from "@styles";
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "@components/post/post-head-image";

@customElement("qna-question")
export class QnaQuestion extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                padding-bottom: 100px;
            }
            h1 {
                width: 680px;
                margin: auto;
                margin-bottom: 20px;
                font-size: 24px;
                font-weight: bold;
            }
        `,
    ];

    protected render() {
        const text = this.childNodes[0].textContent;

        return html`<h1>${text}</h1>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "qna-question": QnaQuestion;
    }
}
