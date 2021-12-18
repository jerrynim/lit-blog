import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";

import definitions from "./definition";
import { query } from "lit/decorators.js";

@customElement("post-definition")
export class PostDefinition extends LitElement {
    constructor() {
        super();
        this._handleMouseOver = this._handleMouseOver.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }
    static styles = [
        resetCss,
        css`
            :host {
                display: inline-block;
            }

            strong {
                color: var(--go);
            }
            hr {
                background-color: var(--grey);
            }

            .post-description {
                position: relative;
                cursor: pointer;
            }

            .post-description-box {
                /* visibility: hidden; */
                display: block;
                position: absolute;
                width: 300px;
                padding: 8px;
                background-color: var(--lightgrey);
                border-radius: 4px;
                font-size: 14px;
                cursor: default;
            }
        `,
    ];

    @query(".post-description-box")
    descriptionBox: HTMLDivElement | undefined;

    _handleMouseOver() {
        this.descriptionBox!.style.visibility = "visible";
    }

    _handleMouseLeave() {
        this.descriptionBox!.style.visibility = "hidden";
    }

    protected render() {
        const text = this.childNodes[0].textContent;
        if (!text) {
            return null;
        }
        return html`<span
            class="post-description"
            @mouseover=${this._handleMouseOver}
            @mouseleave=${this._handleMouseLeave}
        >
            <strong>${text}</strong>
            <div class="post-description-box">
                <p>${definitions[text]}</p>
            </div>
        </span>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-definition": PostDefinition;
    }
}
