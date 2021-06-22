import { LitElement } from "lit";
export declare class PostTitle extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    connectedCallback(): void;
    firstUpdated(): void;
    constructor();
    protected _handleClick(): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "post-title": PostTitle;
    }
}
