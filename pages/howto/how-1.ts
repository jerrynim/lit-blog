import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("how-1")
export class How1 extends LitElement {
    static styles = [resetCss, css``];

    protected render() {
        return html`<div><img src="/static/404.gif" /></div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "how-1": How1;
    }
}

// Uncaught TypeError: Failed to resolve module specifier "lit-element". Relative references must start with either "/", "./", or "../".
