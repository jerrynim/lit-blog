import { LitElement } from "lit";
import "@components/post";
export declare class AsyncAwait extends LitElement {
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "async-await": AsyncAwait;
    }
}
