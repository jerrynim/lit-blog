import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";
import Logo from "/Jerrynim.svg?raw";

@customElement("page-header")
export class PageHeader extends LitElement {
    static styles = [resetCss];

    protected render() {
        const LogoHTML = html([Logo] as any);
        return html` <lit-link href="/">${LogoHTML}</lit-link> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "page-header": PageHeader;
    }
}
