import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";
import prism from "./prism";

@customElement("post-code")
export class PostCode extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                margin: 12px 0;
                font-size: 14px;
            }
            .filename {
                font-size: 16px;
                font-weight: bold;
            }
            code {
                display: block;
                overflow: scroll;
                padding: 16px;
                background-color: var(--lightgrey) !important;
            }
        `,
    ];

    @property({ type: String })
    code = "";

    @property({ type: String })
    language = "text";

    @property({ type: String })
    filename = "";
    protected render() {
        const _html = html([
            prism.highlight(
                this.code
                    .trim()
                    .replaceAll("&backtick;", "`")
                    .replaceAll("&dollar;", "$"),
                (prism as any).languages[this.language],
                this.language,
            ),
        ] as any);

        return html`<link rel="stylesheet" href="/prism.css" />
            <p class="filename">${this.filename}</p>
            <code class="language-${this.language}">${_html}</code> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-code": PostCode;
    }
}
