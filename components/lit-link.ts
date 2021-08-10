import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";

//@ts-ignore
const modules = import.meta.glob("../pages/**/*.ts");

@customElement("lit-link")
export class LitLink extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: inline-block;
            }
            .hidden-text {
                width: 0;
                height: 0;
                opacity: 0;
                font-size: 0;
            }
        `,
    ];

    @property()
    href: string = "";

    @property()
    as: string = "";

    constructor() {
        super();
    }

    _onClick(event: MouseEvent) {
        event.preventDefault();

        const locationChangeEvent = new CustomEvent("locationchange", {
            composed: true,
            detail: { href: this.href, as: this.as || undefined },
        });
        window.dispatchEvent(locationChangeEvent);
    }
    firstUpdated(change: any) {
        super.firstUpdated(change);
        const component = window.location.pathname.replace("/", "");
        if (component === "") {
            modules["../pages/index.ts"]();
        } else {
            modules[`../pages/${component}.ts`]();
        }
    }

    render() {
        return html`
            <a href=${this.href} @click=${this._onClick}>
                <p class="hidden-text">${this.href}</p>
                <slot></slot>
            </a>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-link": LitLink;
    }
}
