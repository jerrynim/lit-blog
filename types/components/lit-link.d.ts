import { LitElement } from "lit";
export declare class LitLink extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    href: string;
    constructor();
    connectedCallback(): void;
    _onClick(event: MouseEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-link": LitLink;
    }
}
