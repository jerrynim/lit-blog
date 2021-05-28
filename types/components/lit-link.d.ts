import { LitElement } from "lit";
export declare class LitLink extends LitElement {
    href: string;
    constructor();
    _onClick(event: MouseEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-link": LitLink;
    }
}
