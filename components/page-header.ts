import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";
import logoIcon from "/logo.svg?raw";

@customElement("page-header")
export class PageHeader extends LitElement {
    protected render() {
        const LogoIcon = html([logoIcon] as any);
        return html`
            <style>
                ${resetCss}
            </style>
            <lit-link href="/">${LogoIcon}</lit-link>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "page-header": PageHeader;
    }
}
