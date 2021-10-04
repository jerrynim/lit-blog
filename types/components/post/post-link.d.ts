import { LitElement } from "lit";
export declare class PostLink extends LitElement {
    static styles: import("lit").CSSResult[];
    href: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "post-link": PostLink;
    }
}
