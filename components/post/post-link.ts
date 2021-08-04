import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-link")
export class PostLink extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: inline-block;
                color: var(--go);
            }
            .hidden-text {
                width: 0;
                height: 0;
                opacity: 0;
                font-size: 0;
            }

            slot {
                color: var(--go) !important;
            }
            a:hover {
                color: var(--go);
            }
        `,
    ];

    @property({ type: String })
    href = "";

    protected render() {
        return html`<a href=${this.href} target="_blank" rel="noreferrer">
            <p class="hidden-text">${this.href}</p>
            <slot></slot>
        </a>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-link": PostLink;
    }
}
