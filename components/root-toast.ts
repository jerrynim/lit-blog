import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";
import { property, query } from "lit/decorators.js";

@customElement("root-toast")
export class RootToast extends LitElement {
    static styles = [
        resetCss,
        css`
            @keyframes fadeIn {
                0% {
                    opacity: 0.3;
                }
                100% {
                    opacity: 1;
                }
            }

            @keyframes fadeOut {
                0% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }

            .fade-in {
                opacity: 1;
                animation: fadeIn 0.5s ease-in-out;
            }
            .fade-out {
                opacity: 0;
                animation: fadeOut 0.5s ease-in-out;
            }

            button {
                position: fixed;
                bottom: 50px;
                left: 0;
                right: 0;
                margin: auto;
                width: fit-content;
                display: inline-block;
                padding: 8px 16px;
                background-color: var(--lightgrey);
                color: var(--black);
                border-radius: 16px;
                text-align: center;
                animation: fadeIn 0.5s ease-in-out;
                cursor: pointer;
                border: 0;
                box-shadow: 1px 1px 8px var(--black);
            }
        `,
    ];

    private timeoutId: NodeJS.Timeout | null = null;

    @property()
    text = "";

    @query("button")
    button: HTMLButtonElement | undefined;

    constructor() {
        super();
        this._handleToastUp = this._handleToastUp.bind(this);
        window.addEventListener("toast-up", this._handleToastUp as any);
    }

    _handleToastUp(
        event: CustomEvent<{
            text: string;
        }>,
    ) {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        this.text = event.detail.text;
        this.timeoutId = setTimeout(() => {
            this.button!.className = "fade-out";
            setTimeout(() => {
                this.text = "";
            }, 500);
        }, 3000);
    }

    _handleClcik() {
        this.text = "";
    }

    protected render() {
        return html`<button
            type="button"
            class="${this.text ? "fade-in" : "fade-out"}"
            aria-label="${this.text ? "fade-in" : "fade-out"}"
            @click=${this._handleClcik}
        >
            ${this.text}
        </button>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "root-toast": RootToast;
    }
}
