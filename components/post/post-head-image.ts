import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-head-image")
export class PostHeadImage extends LitElement {
    static styles = [
        resetCss,
        css`
            .post-head-image-wrapper {
                position: relative;
                display: block;
                width: 100%;
                padding-bottom: 30%;
                margin-bottom: 80px;
            }
            @media (max-width: 700px) {
                .post-head-image-wrapper {
                    margin-bottom: 20px;
                }
            }
            div {
                width: 100%;
                height: 100%;
                position: absolute;
                background-attachment: fixed;
                background-repeat: no-repeat;
                background-position: 0 68px;
                background-size: contain;
            }
        `,
    ];

    @property({
        type: String,
        attribute: true,
        converter: (value) => {
            // quality auto, format auto
            return value?.replace(
                "/upload/",
                `/upload/f_auto,q_auto,w_${window.innerWidth},ar_10:3/`,
            );
        },
    })
    src = "";

    protected render() {
        return html`<div class="post-head-image-wrapper">
            <div style="background-image: url(${this.src});"></div>
        </div> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-head-image": PostHeadImage;
    }
}
