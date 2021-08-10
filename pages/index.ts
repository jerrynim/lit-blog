import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element";
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

            <h2 class="category-title">QnA</h2>
            <lit-link href="/qna/qna-1">qna-1</lit-link>
        </div> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-home": Home;
    }
}
