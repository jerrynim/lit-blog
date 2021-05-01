import { LitElement } from "lit";
declare class Element extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-element": Element;
    }
}
export {};
