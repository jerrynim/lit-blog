import { LitElement } from "lit";
export declare class PostDefinition extends LitElement {
    constructor();
    static styles: import("lit").CSSResult[];
    descriptionBox: HTMLDivElement | undefined;
    _handleMouseOver(): void;
    _handleMouseLeave(): void;
    protected render(): import("lit-html").TemplateResult<1> | null;
}
declare global {
    interface HTMLElementTagNameMap {
        "post-definition": PostDefinition;
    }
}
