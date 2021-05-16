import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("page-header")
export class PageHeader extends LitElement {
    static styles = [resetCss];

    protected render() {
        return html` <lit-link href="/"> </lit-link> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "page-header": PageHeader;
    }
}
