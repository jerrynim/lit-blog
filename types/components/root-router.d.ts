import { LitElement } from "lit";
export declare class RootRouter extends LitElement {
    private history;
    pathname: string;
    constructor();
    _handleLocationChange(event: CustomEvent<{
        href: string;
    }>): void;
    _handlePopState(): void;
    _renderPage(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "root-router": RootRouter;
    }
}
