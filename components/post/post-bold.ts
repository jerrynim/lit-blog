import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-bold")
export class PostBold extends LitElement {
    static styles = [resetCss];

    protected render() {
        return html``;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-bold": PostBold;
    }
}
