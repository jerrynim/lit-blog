import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";
import { withPost } from "@lib/decorators";

@customElement("front-end-back-end")
@withPost
export class FrontEndBackEnd extends LitElement {
    static styles = [resetCss];

    protected render() {
        return html`<post-head-image src=""></post-head-image>
            <post-head>
                <h1>프론트엔드 백엔드 차이</h1>
                <post-tag>프론트엔드 백엔드 차이 장전 단점</post-tag>
                <post-date></post-date>
            </post-head>
            <post-body></post-body>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "front-end-back-end": FrontEndBackEnd;
    }
}
