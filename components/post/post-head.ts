import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-head")
export class PostHead extends LitElement {
    static styles = [resetCss];

    protected render() {
        return html``;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-head": PostHead;
    }
}
