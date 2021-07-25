import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-tag")
export class PostTag extends LitElement {
    static styles = [resetCss];

    protected render() {
        return html`<img />`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-tag": PostTag;
    }
}
