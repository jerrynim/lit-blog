import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { resetCss } from "@styles";
import copyIcon from "/static/copy.svg?raw";

@customElement("post-title")
export class PostTitle extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: inline-flex;
                align-items: center;
                margin-bottom: 12px;
                cursor: pointer;
            }

            :host(:hover) svg {
                visibility: visible;
                opacity: 1;
            }

            :host(:hover) h2::after {
                opacity: 1;
            }

            h2 {
                position: relative;
                font-size: 24px;
                font-weight: bold;
                color: var(--black);
                margin-right: 6px;
                transition: var(--transition);
            }

            h2::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                display: block;
                background: var(--black);
                transition: 300ms;
                opacity: 0;
            }

            svg {
                transition: var(--transition);
                opacity: 0;
                visibility: hidden;
            }
        `,
    ];

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
    }

    protected render() {
        const CopyIcon = html([copyIcon] as any);

        return html`<h2 id=${this.title}>${this.title}</h2>
            ${CopyIcon}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-title": PostTitle;
    }
}
