import { LitElement } from "lit";
export declare class PostImage extends LitElement {
    static styles: import("lit").CSSResult[];
    constructor();
    width: number;
    src: string;
    alt: string;
    path: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "post-image": PostImage;
    }
}
