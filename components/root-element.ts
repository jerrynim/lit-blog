import { customElement } from "lit/decorators/custom-element";
import { html, LitElement } from "lit";
import { resetCss } from "@styles";
import "@components/page-header";
import "@components/root-router";
import "@components/lit-link";
import "@styles/resetCss.css";

if (process.env.NODE_ENV === "production") {
    window.addEventListener("load", () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("./service-worker.js");
        }
    });
}

@customElement("root-element")
export class RootElement extends LitElement {
    static styles = [resetCss];

    constructor() {
        super();
    }

    render() {
        return html`
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
