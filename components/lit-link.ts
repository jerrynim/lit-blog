import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("lit-link")
export class LitLink extends LitElement {
    static styles = [resetCss];

    @property()
    href: string = "";

    constructor() {
        super();
    }

    _onClick(event: MouseEvent) {
        event.preventDefault();

        const locationChangeEvent = new CustomEvent("locationchange", {
            bubbles: true,
            composed: true,
            detail: { href: this.href },
        });
        window.dispatchEvent(locationChangeEvent);
    }

    render() {
        return html`
            <!-- <link rel="prefetch" href="/${this.href}" /> -->
            <a id="link-element" href=${this.href} @click=${this._onClick}>
                <slot></slot>
            </a>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-link": LitLink;
    }
}
