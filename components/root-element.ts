import { customElement } from "lit/decorators/custom-element";
import { html, LitElement } from "lit";
import { resetCss } from "@styles";
import "@components/page-header";
import "@components/root-router";
import "@components/lit-link";
import "@components/root-toast";
import { detectRobot } from "@lib";

const userAgent = navigator.userAgent;
const isRobot = detectRobot(userAgent);

if (import.meta.env.PROD && !isRobot) {
    window.addEventListener("load", () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/service-worker.js");
        }
    });
}

@customElement("root-element")
export class RootElement extends LitElement {
    static styles = [resetCss];

    connectedCallback() {
        super.connectedCallback();
        console.log(import.meta.env.PROD, "프로드");
        console.log(isRobot, "로봇");

        if (import.meta.env.PROD && !isRobot) {
            const script = document.createElement("script");
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${
                import.meta.env.VITE_GA_ID
            }`;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() {
                // eslint-disable-next-line prefer-rest-params
                window.dataLayer.push(arguments);
            }
            //@ts-ignore
            gtag("js", new Date());
            //@ts-ignore
            gtag("config", import.meta.env.VITE_GA_ID, {
                send_page_view: true,
            });
        }
    }

    render() {
        return html`
            <page-header></page-header>
            <root-router></root-router>
            <root-toast></root-toast>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "root-element": RootElement;
    }
}
