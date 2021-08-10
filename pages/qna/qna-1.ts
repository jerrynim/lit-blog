import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element";
import { resetCss } from "@styles";
import { withQna } from "@lib/decorators";
import "@components/qna";

@customElement("qna-1")
@withQna
export class Qna1 extends LitElement {
    static styles = [resetCss, css``];

    protected render() {
        return html`<qna-question
                >Uncaught TypeError: Failed to resolve module specifier
                "lit-element/lit-element.js". Relative references must start
                with either "/", "./", or "../".</qna-question
            ><qna-answer
                >remove external in rollupOptions rollupOptions: { external:
                /^lit-element/, },
            </qna-answer>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "qna-1": Qna1;
    }
}
