import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-image")
export class PostImage extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                margin: 20px 0;
            }
            img {
                width: 100%;
            }
            span {
                color: var(--grey);
            }
            a {
                cursor: zoom-in;
            }
        `,
    ];

    @property({
        type: String,
    })
    src = "";

    @property({ type: String })
    alt = "";

    @property({ type: String })
    path = "";
    protected render() {
        return html`<a href=${this.src} target="_blank" rel="noreferrer"
                ><img
                    src=${this.src.replace("/upload/", "/upload/f_auto,w_680/")}
                    alt=${this.alt} /></a
            ><span>[${this.alt}]</span>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-image": PostImage;
    }
}
