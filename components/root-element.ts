import { customElement } from "lit/decorators/custom-element";
import { html, LitElement } from "lit";
import { resetCss } from "@styles";
import "@styles/resetCss.css";
import "./root-router";
import "./lit-link";

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
            <root-router></root-router>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "root-element": RootElement;
    }
}
