import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { resetCss } from "@styles";
import prism from "./prism";
import { styleMap } from "lit/directives/style-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("post-code")
export class PostCode extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                position: relative;
                margin: 12px 0;
                font-size: 14px;
            }
            .filename {
                color: var(--black);
                font-size: 16px;
                font-weight: bold;
            }
            code {
                display: block;
                overflow: scroll;
                padding: 16px;
                background-color: var(--lightgrey) !important;
            }

            button {
                display: none;
                position: absolute;
                top: 16px;
                right: 16px;
                background-color: transparent;
                cursor: pointer;
                color: var(--go);
                border: 1px solid;
                padding: 3px 8px;
                font-size: 13px;
                border-radius: 4px;
            }

            button:hover {
                background-color: rgba(255, 255, 255, 0.7);
            }
        `,
    ];
    @property({ type: String })
    code = "";

    @property({ type: String })
    language = "text";

    @property({ type: String })
    filename = "";

    @property({ type: String })
    whiteSpace = "pre";

    @query("#copy-button")
    button: HTMLElement | undefined;

    _handleMouseEnter() {
        this.button!.style.display = "block";
    }
    _handleMouseLeave() {
        this.button!.style.display = "none";
    }

    connectedCallback() {
        super.connectedCallback();
        this.code = this.code
            .trim()
            .replaceAll("&backtick;", "`")
            .replaceAll("&dollar;", "$");
        this.addEventListener("mouseenter", this._handleMouseEnter);
        this.addEventListener("mouseleave", this._handleMouseLeave);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("mouseenter", this._handleMouseEnter);
        this.removeEventListener("mouseenter", this._handleMouseLeave);
    }

    _copyCode() {
        this.button!.innerText = "copied!!";
        const textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        textarea.value = this.code;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        setTimeout(() => {
            this.button!.innerText = "copy";
        }, 2000);
    }
    protected render() {
        const _html = unsafeHTML(
            `${prism.highlight(
                this.code,
                (prism as any).languages[this.language],
                this.language,
            )}`,
        );

        const buttonStyles = { top: this.filename ? "46px" : "16px" };
        return html`<link rel="stylesheet" href="/prism.css" />
            ${this.filename && html`<p class="filename">${this.filename}</p>`}
            <button
                type="button"
                id="copy-button"
                @click=${this._copyCode}
                style=${styleMap(buttonStyles)}
            >
                copy
            </button>
            <code class="language-${this.language}">${_html}</code>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-code": PostCode;
    }
}
