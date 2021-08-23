import { LitElement } from "lit";
export declare class PostBody extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    firstUpdated(_changedProperties: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "post-body": PostBody;
    }
}
