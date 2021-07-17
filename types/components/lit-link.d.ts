import { LitElement } from "lit";
export declare class LitLink extends LitElement {
    static styles: import("lit").CSSResultGroup[];
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
