import { LitElement } from "lit";
export declare const injectMeta: () => void;
export declare class LitPost extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-post": LitPost;
    }
}
