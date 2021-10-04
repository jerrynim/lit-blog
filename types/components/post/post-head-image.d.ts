import { LitElement } from "lit";
export declare class PostHeadImage extends LitElement {
    static styles: import("lit").CSSResult[];
    src: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "post-head-image": PostHeadImage;
    }
}
