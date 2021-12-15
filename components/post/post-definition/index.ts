import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";

import definitions from "./definition";

@customElement("post-definition")
export class PostDefinition extends LitElement {
    static styles = [resetCss];

    protected render() {
        const text = this.childNodes[0].textContent;
        console.log(definitions[text].strings);
        return html`<span>${text}</span>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-definition": PostDefinition;
    }
}
