import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-title")
export class PostTitle extends LitElement {
    static styles = [resetCss];

    protected render() {
        return html``;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-title": PostTitle;
    }
}
