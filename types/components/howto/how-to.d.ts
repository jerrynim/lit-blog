import { LitElement } from "lit";
export declare class LitPost extends LitElement {
    createdAt: string;
    keywords: string;
    static styles: import("lit").CSSResultGroup[];
    firstUpdated(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "how-to": LitPost;
    }
}
