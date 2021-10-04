import { customElement } from "lit/decorators/custom-element.js";
import { html, LitElement } from "lit";
import { resetCss } from "@styles";
import "@components/page-header";
import "@components/root-router";
import "@components/lit-link";
import "@components/root-toast";

@customElement("root-element")
export class RootElement extends LitElement {
    static styles = [resetCss];

    render() {
        return html`
            <page-header></page-header>
            <root-router></root-router>
            <root-toast></root-toast>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "root-element": RootElement;
    }
}
