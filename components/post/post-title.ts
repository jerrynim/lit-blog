import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";
import copyIcon from "/static/copy.svg?raw";
import { property } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

@customElement("post-title")
export class PostTitle extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: block;
                width: fit-content;
                cursor: pointer;
            }

            :host(:hover) svg {
                visibility: visible;
                opacity: 1;
            }

            h2 {
                position: relative;
                font-size: 30px;
                font-weight: bold;
                color: var(--black);
                transition: var(--transition);
                word-break: break-all;
                margin-top: 30px;
                margin-bottom: 20px;
            }

            .subtitle {
                position: relative;
                font-size: 24px;
                font-weight: bold;
                color: var(--black);
                transition: var(--transition);
                word-break: break-all;
                margin-top: 20px;
                margin-bottom: 10px;
            }

            svg {
                margin-left: 6px;
                vertical-align: middle;
                transition: var(--transition);

                opacity: 0;
                visibility: hidden;
            }
        `,
    ];

    @property({ type: Boolean })
    subTitle = false;

    get title() {
        return this.childNodes[0].textContent || "";
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated() {
        const href = decodeURI(window.location.href);
        if (href.includes("#")) {
            const strings = href.split("#");
            const tag = strings[strings.length - 1];

            if (this.title === tag) {
                window.scrollTo(0, this.offsetTop - 20);
            }
        }
    }

    constructor() {
        super();
        this.addEventListener("click", this._handleClick);
    }

    protected _handleClick() {
        const textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        textarea.value = `${window.location.href}#${encodeURI(this.title)}`;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        const toastUpEvent = new CustomEvent("toast-up", {
            composed: true,
            detail: { text: "클립보드에 복사되었습니다." },
        });
        window.dispatchEvent(toastUpEvent);
    }

    protected render() {
        const CopyIcon = unsafeSVG(copyIcon);

        if (this.subTitle) {
            return html`<h2 class="subtitle" id=${this.title}>
                ${this.title}${CopyIcon}
            </h2>`;
        }
        return html`<h2 id=${this.title}>${this.title}${CopyIcon}</h2> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-title": PostTitle;
    }
}
