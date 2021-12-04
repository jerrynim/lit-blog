import { LitElement } from "lit";
export declare class RootRouter extends LitElement {
    static styles: import("lit").CSSResult[];
    private history;
    pathname: string;
    constructor();
    _handleLocationChange(event: CustomEvent<{
        href: string;
        as?: string;
    }>): void;
    _handlePopState(): void;
    _renderPage(): import("lit-html").TemplateResult<1>;
    gtag: any;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "root-router": RootRouter;
    }
}
