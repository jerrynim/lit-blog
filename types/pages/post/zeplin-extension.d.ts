import { LitElement } from "lit";
import "@components/post";
export declare class ZeplinExtension extends LitElement {
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "zeplin-extension": ZeplinExtension;
    }
}
