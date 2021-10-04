import { LitElement } from "lit";
export declare class PostCode extends LitElement {
    static styles: import("lit").CSSResult[];
    code: string;
    language: string;
    filename: string;
    button: HTMLElement | undefined;
    _handleMouseEnter(): void;
    _handleMouseLeave(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    _copyCode(): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "post-code": PostCode;
    }
}
