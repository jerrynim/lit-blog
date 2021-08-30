import { LitElement } from "lit";
import "@components/page-header";
import "@components/root-router";
import "@components/lit-link";
import "@components/root-toast";
export declare class RootElement extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "root-element": RootElement;
    }
}
