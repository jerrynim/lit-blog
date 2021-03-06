import { LitElement } from "lit";
import "@components/post";
export declare class FrontEndBackEnd extends LitElement {
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "front-end-back-end": FrontEndBackEnd;
    }
}
