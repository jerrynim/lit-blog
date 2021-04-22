import { resetCss } from "@styles";

import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lit-element")
class Element extends LitElement {
    static styles = [resetCss];

    render() {
        return html``;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-element": Element;
    }
}
