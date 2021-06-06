import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";

//@ts-ignore
const modules = import.meta.glob("../pages/*.ts");

@customElement("lit-link")
export class LitLink extends LitElement {
    static styles = [resetCss];

    @property()
    href: string = "";

    constructor() {
        super();
    }

    _onClick(event: MouseEvent) {
        event.preventDefault();

        const locationChangeEvent = new CustomEvent("locationchange", {
            bubbles: true,
            composed: true,
            detail: { href: this.href },
        });
        window.dispatchEvent(locationChangeEvent);
    }
    firstUpdated(change: any) {
        super.firstUpdated(change);
        //* prefetch link

        //? http://jerrynim.io/post/3?eventId=3 => post-3 ?
        const component = window.location.pathname.replace("/", "");
        console.log(component);
        if (component === "") {
            modules["../pages/lit-home.ts"]();
        } else {
            modules[`../pages/${component}.ts`]();
        }
    }

    render() {
        return html`
            <a href=${this.href} @click=${this._onClick}>
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
