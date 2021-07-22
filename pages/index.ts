import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";

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
        `,
    ];

    protected render() {
        return html`<div class="categories-wrapper">
            <h2 class="category-title">Post</h2>
            <lit-link href="/post/writing-book-1"
                >책을 쓰게 된 이야기 -1</lit-link
            >
            <lit-link href="/post/writing-book-2"
                >책을 쓰게 된 이야기 -2</lit-link
            >
            <h2 class="category-title">Howto</h2>
            <lit-link href="/post/writing-book-1"
                >책을 쓰게 된 이야기 -1</lit-link
            >
        </div> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-home": Home;
    }
}
