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
        return html`<div class="categories-wrapper">
            <h2 class="category-title">Post</h2>
            <lit-link href="/post/writing-book-1"
                >책을 쓰게 된 이야기 -1</lit-link
            >
            <lit-link href="/post/writing-book-2"
                >책을 쓰게 된 이야기 -2</lit-link
            >
            <lit-link href="/post/lit-tutorial-1">Lit 튜토리얼 (1/6)</lit-link>
            <lit-link href="/post/lit-tutorial-2">Lit 튜토리얼 (2/6)</lit-link>
            <lit-link href="/post/lit-tutorial-3">Lit 튜토리얼 (3/6)</lit-link>
            <lit-link href="/post/lit-tutorial-4">Lit 튜토리얼 (4/6)</lit-link>
            <lit-link href="/post/lit-tutorial-5">Lit 튜토리얼 (5/6)</lit-link>
            <lit-link href="/post/lit-tutorial-6">Lit 튜토리얼 (6/6)</lit-link>
            <lit-link href="/post/use-github-access-token"
                >github access token 사용하기</lit-link
            >
            <lit-link href="/post/about-pod-file">about-pod-file</lit-link>
            <lit-link href="/post/front-end-back-end"
                >프론트엔드 백엔드</lit-link
            >
            <lit-link href="/post/what-is-vanilla-javascript"
                >vanilla Javascript 란?</lit-link
            >
            <lit-link href="/post/semantic-tag">시맨틱 태그</lit-link>
        </div> `;
    }
}
