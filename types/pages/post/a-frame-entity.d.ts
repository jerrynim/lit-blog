import { LitElement } from "lit";
import "@components/post";
export declare class AFrameEntity extends LitElement {
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "a-frame-entity": AFrameEntity;
    }
}
