import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";

@customElement("post-thumbnail")
export class PostThumbnail extends LitElement {
    static styles = [resetCss, css``];

    @property()
    image: string = "";

    protected render() {
        return html`<picture>
            <source type="image/webp" srcset="" />
            <img src="" alt="" />
        </picture>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-thumbnail": PostThumbnail;
    }
}
