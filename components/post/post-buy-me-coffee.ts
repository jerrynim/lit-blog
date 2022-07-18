import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";

@customElement("post-buy-me-coffee")
export class PageFooter extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                margin-top: 20px;
            }

            .buy-me-a-coffee {
                display: flex;
            }

            a {
                display: block;
                width: 150px;
                font-size: 0;
            }

            img {
                display: inline-block;
                width: 150px;
            }
        `,
    ];

    protected render() {
        return html`<div>
            <a href="https://www.buymeacoffee.com/jerrynim" target="_blank"
                >buy me a coffee<img src="/static/buy-me-a-coffee.svg" alt=""
            /></a>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-buy-me-coffee": PageFooter;
    }
}
