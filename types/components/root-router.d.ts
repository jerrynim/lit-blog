import { LitElement } from "lit";
export declare class RootRouter extends LitElement {
    private history;
    pathname: string;
    as: string;
    constructor();
    _handleLocationChange(event: CustomEvent<{
        href: string;
        as?: string;
    }>): void;
    _handlePopState(): void;
    _renderPage(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "root-router": RootRouter;
    }
}
