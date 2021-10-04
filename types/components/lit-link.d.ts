import { LitElement } from "lit";
export declare class LitLink extends LitElement {
    static styles: import("lit").CSSResult[];
    href: string;
    as: string;
    constructor();
    _onClick(event: MouseEvent): void;
    firstUpdated(change: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-link": LitLink;
    }
}
