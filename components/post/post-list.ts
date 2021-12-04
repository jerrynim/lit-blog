import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";

@customElement("post-list")
export class PostList extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                margin-bottom: 12px;
            }
            slot {
                display: block;
            }
            slot::before {
                content: "";
                height: 8px;
                margin: 9px 0 0;
                width: 8px;
                background: var(--grey);
                border-radius: 50%;
                left: 0;
                position: absolute;
            }
        `,
    ];

    protected render() {
        if (this.parentElement?.localName === "ol") {
            return html`<style>
                    :host {
                        display: list-item !important;
                    }
                    slot::before {
                        content: none !important;
                    }</style
                ><slot></slot>`;
        }
        return html`<slot></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-list": PostList;
    }
}
