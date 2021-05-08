import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("lit-link")
export class LitLink extends LitElement {
    static styles = [resetCss];

    @property()
    href: string = "";

    @query("#link-element")
    _link: any;

    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
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
            <a id="link-element" href="" @click=${this._onClick}>
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
