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
                position: relative;
            }
            .post-description-word:hover {
                cursor: pointer;
            }
            .post-description-box {
                visibility: hidden;
                position: absolute;
            }
        `,
    ];

    @query(".post-description-box")
    descriptionBox;

    _handleMouseOver = (event: Event) => {
        console.log(event);
        console.log("mousedown");
        this.descriptionBox!.style.visibility = "visible";
    };

    _handleMouseLeave = (event) => {
        console.log("mouseleave");
        this.descriptionBox!.style.visibility = "hidden";

        if (this.contains(event.target)) {
            console.log("contain");
            return;
        }
    };

    protected render() {
        const text = this.childNodes[0].textContent;
        if (!text) {
            return null;
        }
        return html`<span
                class="post-description-word"
                @mouseover=${this._handleMouseOver}
                @mouseleave=${this._handleMouseLeave}
                >${text}</span
            >
            <div class="post-description-box">${definitions[text]}</div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-definition": PostDefinition;
    }
}
