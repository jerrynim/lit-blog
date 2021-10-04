import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";

@customElement("qna-post")
export class QnaPost extends LitElement {
    static styles = [resetCss];

    protected render() {
        return html``;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "qna-post": QnaPost;
    }
}
