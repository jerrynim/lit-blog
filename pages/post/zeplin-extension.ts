import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("zeplin-extension")
@withPost
export class ZeplinExtension extends LitElement {
    protected render() {
        return html`<post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1633769168/lit-blog/zeplin_ejiybe.jpg"
            ></post-head-image>
            <post-head>
                <h1>Zeplin extension 개발하기</h1>
                <post-tag>Zeplin extension</post-tag>
                <post-date>2021-10-09</post-date>
            </post-head>
            <post-body>
                <post-link href="https://extensions.zeplin.io/"
                    >Zeplin Extension</post-link
                >을 이용하면 제플린을 Html이나 Css 스타일 속성들을 우측 패널에
                출력이 가능합니다. Zeplin Extension 을 직접 개발하여 선택한
                디자인에 대한 정보나 출력을 원하는대로 변경또한 가능합니다.
                Zeplin Extension 개발 가이드를 따라 Zeplin Extension으로 받을 수
                있는 정보를 확인하고 원하는대로 출력을 해보도록 하겠습니다.
            </post-body>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "zeplin-extension": ZeplinExtension;
    }
}
