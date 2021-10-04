import { LitElement } from "lit";
import "@components/post/post-head-image";
export declare class QnaQuestion extends LitElement {
    static styles: import("lit").CSSResult[];
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "qna-question": QnaQuestion;
    }
}
