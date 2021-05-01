import { customElement } from "@lit/reactive-element/decorators/custom-element";
import { html, LitElement } from "lit";
import { resetCss } from "@styles";

@customElement("root-element")
export class RootElement extends LitElement {
    private route: any;

    constructor() {
        super();
        console.log(window.location);
        window.addEventListener("hashchange", (event) => {
            console.log(event);
        });
    }
    render() {
        return html`
            <style>
                ${resetCss}
            </style>
            <div>hi</div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "root-element": RootElement;
    }
}
