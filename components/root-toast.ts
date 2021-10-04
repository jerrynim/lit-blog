import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";

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

            button {
                position: fixed;
                bottom: 50px;
                left: 0;
                right: 0;
                margin: auto;
                width: fit-content;
                display: inline-block;
                padding: 8px 16px;
                background-color: var(--black);
                color: white;
                border-radius: 16px;
                text-align: center;
                animation: fadeIn 0.5s ease-in-out;
                cursor: pointer;
                border: 0;
                box-shadow: 2px 3px 8px var(--black);
            }
        `,
    ];

    text = "";

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
        this.text = event.detail.text;
        setTimeout(() => {
            this.text = "";
        }, 3000);
    }

    _handleClcik() {
        this.text = "";
    }

    protected render() {
        return (
            this.text &&
            html`<button type="button" @click=${this._handleClcik}>
                ${this.text}
            </button>`
        );
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "root-toast": RootToast;
    }
}
