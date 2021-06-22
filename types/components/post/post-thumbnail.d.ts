import { LitElement } from "lit";
export declare class PostThumbnail extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    image: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "post-thumbnail": PostThumbnail;
    }
}
