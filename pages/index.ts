import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";
import { resetMetaData } from "@lib";
@customElement("lit-home")
export class Home extends LitElement {
    static styles = [
        resetCss,
        css`
            .categories-wrapper {
                max-width: 680px;
                margin: auto;
            }
            .category-title {
                font-size: 24px;
                margin-top: 12px;
                margin-bottom: 12px;
            }
            lit-link {
                display: block;
                width: fit-content;
                margin-bottom: 12px;
            }
        `,
    ];

    connectedCallback() {
        super.connectedCallback();
        resetMetaData();
    }

    firstUpdated(_changedProperties: any) {
        super.firstUpdated(_changedProperties);
        window.prerenderReady = true;
    }
    protected render() {
        return html`<div>
            <h2>이곳은...</h2>
            개발을 하다가만난 문제를 해결할 수 있는 곳입니다.<br />제가 개발하며
            겪은 에러들을 공유하는 곳입니다.<br />제가 공유하고 싶은 글과 코드를
            공유하는 곳입니다.
            <h2>블로그 자랑</h2>
            lit만을 사용하여 만든 블로입니다.<br />
            에디터에서 블로그 글을 쓸 수 있도록 개발되어있습니다.<br />
            소수만을 사용한 사이즈 사용...<br />
            SSR이 불가능함을 극복하기 위한 그 외의 SEO 지원<br />
            <br />
            <h2></h2>
        </div> `;
    }
}
