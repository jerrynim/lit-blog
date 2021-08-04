import { LitElement } from "lit";
export declare class PostList extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "post-list": PostList;
    }
}
