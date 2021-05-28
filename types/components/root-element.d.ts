import { LitElement } from "lit";
import "@components/page-header";
import "@components/root-router";
import "@components/lit-link";
import "@styles/resetCss.css";
export declare class RootElement extends LitElement {
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "root-element": RootElement;
    }
}
