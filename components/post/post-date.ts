import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-date")
export class PostDate extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                float: right;
                color: var(--grey);
                padding-top: 11px;
            }
        `,
    ];

    protected render() {
        return html`<slot></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-date": PostDate;
    }
}