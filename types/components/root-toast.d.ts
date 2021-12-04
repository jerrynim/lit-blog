import { LitElement } from "lit";
export declare class RootToast extends LitElement {
    static styles: import("lit").CSSResult[];
    private timeoutId;
    text: string;
    button: HTMLButtonElement | undefined;
    constructor();
    _handleToastUp(event: CustomEvent<{
        text: string;
    }>): void;
    _handleClcik(): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "root-toast": RootToast;
    }
}
