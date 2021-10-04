import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";
import { styleMap } from "lit/directives/style-map.js";

@customElement("post-image")
export class PostImage extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                margin: 20px 0;
            }

            span {
                color: var(--grey);
            }
            a {
                cursor: zoom-in;
                display: block;
                text-align: center;
                margin: auto;
            }
            img {
                width: 100%;
            }
        `,
    ];

    constructor() {
        super();
    }

    @property({ type: Number })
    width = window.innerWidth < 720 ? window.innerWidth - 40 : 680;

    @property({
        type: String,
    })
    src = "";

    @property({ type: String })
    alt = "";

    @property({ type: String })
    path = "";

    protected render() {
        const width = { maxWidth: this.width + "px" };
        const cloudinarySrc = this.src.replace(
            "/upload/",
            `/upload/f_auto,w_${this.width}/`,
        );
        return html`<a
                href=${this.src}
                target="_blank"
                rel="noreferrer"
                style=${styleMap(width)}
                ><img src="${cloudinarySrc}" alt=${this.alt} /></a
            ><span>[${this.alt}]</span>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-image": PostImage;
    }
}
