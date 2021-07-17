import { LitElement } from "lit";
export declare class Home extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    count: number;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-home": Home;
    }
}
