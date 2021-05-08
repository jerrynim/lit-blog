import { LitElement } from "lit";
import "@styles/resetCss.css";
import "./root-router";
import "./lit-link";
export declare class RootElement extends LitElement {
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "root-element": RootElement;
    }
}
