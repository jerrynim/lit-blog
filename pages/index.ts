import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("lit-home")
export class Home extends LitElement {
    static styles = [resetCss];

    @property({ type: Number }) count = 0;

    protected render() {
        return html`
            <p>lit-home임</p>
            <lit-link href="/post-1">Post1로 이동</lit-link>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-home": Home;
    }
}
