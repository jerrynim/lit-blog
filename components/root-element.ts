import { customElement } from "lit/decorators/custom-element";
import { html, LitElement } from "lit";
import { resetCss } from "@styles";
import "@components/page-header";
import "@components/root-router";
import "@components/lit-link";
import "@styles/resetCss.css";
import "../pages";

@customElement("root-element")
export class RootElement extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <style>
                ${resetCss}
            </style>
            <page-header></page-header>
            <root-router></root-router>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "root-element": RootElement;
    }
}
