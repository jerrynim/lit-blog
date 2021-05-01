import { LitElement } from "lit";
export declare class GoogleAnalytics extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "google-analytics": GoogleAnalytics;
    }
}
