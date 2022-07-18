import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { resetCss } from "@styles";
import logoIcon from "/static/logo.svg?raw";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

@customElement("page-header")
export class PageHeader extends LitElement {
    static styles = [
        resetCss,
        css`
            :host {
                display: flex;
                height: 68px;
                padding: 0 42px;
                align-items: center;
            }
            a {
                font-size: 0;
            }
        `,
    ];

    protected render() {
        const LogoIcon = unsafeSVG(logoIcon);
        return html`<a href="https://github.com/jerrynim" target="_blank"
            >jerrynim-Logo${LogoIcon}</a
        >`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "page-header": PageHeader;
    }
}
