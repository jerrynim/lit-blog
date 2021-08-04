import { LitElement } from "lit";
export declare class PostCode extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    code: string;
    language: string;
    filename: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "post-code": PostCode;
    }
}
