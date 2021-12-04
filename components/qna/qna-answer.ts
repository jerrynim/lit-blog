import { resetCss } from "@styles";
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";

@customElement("qna-answer")
export class QnaAnswer extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                width: 680px;
                padding-bottom: 100px;
                margin: auto;
            }
            h3 {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 8px;
            }
        `,
    ];

    protected render() {
        const text = this.childNodes[0].textContent;

        return html` <h3>Answer</h3>
            ${text}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "qna-answer": QnaAnswer;
    }
}
