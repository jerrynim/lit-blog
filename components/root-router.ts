import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { LitElement, html, css } from "lit";
import("../pages/post/a-frame-entity");

//@ts-ignore
const modules = import.meta.glob("../pages/**/*.ts");
const CLIENT_URL = "http://localhost:3000";

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
@customElement("root-router")
export class RootRouter extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
    private history: string[] = [];

    @property()
    pathname: string = "";

    constructor() {
        super();
        this._handleLocationChange = this._handleLocationChange.bind(this);
        this._handlePopState = this._handlePopState.bind(this);
        this._renderPage = this._renderPage.bind(this);

        const pathname = window.location.pathname + window.location.search;

        this.history.push(pathname);
        this.pathname = pathname;

        window.addEventListener(
            "locationchange",
            this._handleLocationChange as any,
        );
        window.addEventListener("popstate", this._handlePopState);
    }

    _handleLocationChange(
        event: CustomEvent<{
            href: string;
            as?: string;
        }>,
    ) {
        const { href, as } = event.detail;

        if (!href) {
            return;
        }

        //* 외부 라우팅
        if (href.startsWith("http") && !href.startsWith(CLIENT_URL)) {
            window.location.href = href;
            return;
        }

        //! as 는 내부만
        if (as && as.startsWith("http") && !as.startsWith(CLIENT_URL)) {
            throw Error("as는 내부라우팅에만 씁니다.");
        }
        //* 내부 라우팅
        //* 마지막 pathname이 href 라면
        if (this.history[this.history.length - 1] === href) {
            return;
        }
        window.history.pushState({}, "", href);
        this.history.push(href);
        if (as) {
            this.pathname = as;
            return;
        }

        this.pathname = window.location.pathname;
        return;
    }

    //? 뒤로가기 또는 앞으로 가기 시
    _handlePopState() {
        const { pathname } = window.location;

        //? 뒤로 가기시 -2가 undefined여도 뒤로가기임
        const nextPath = this.history[this.history.length];

        //? 앞으로 가기시
        const index = this.history.findIndex((history) => history === pathname);
        if (!index) {
            this.history.push(pathname);
        }
        //? 현재 this.pathname 다음이 pathname이 아니면 뒤를 자르고 pathname 추가
        if (index && nextPath !== pathname) {
            this.history = this.history.splice(0, index);
            this.history.push(pathname);
        }

        this.pathname = pathname;
    }

    _renderPage() {
        const { pathname } = window.location;
        const split = pathname.split("/");
        const component = split[split.length - 1];

        switch (component) {
            case "":
                modules["../pages/index.ts"]();
                return html`<lit-home></lit-home>`;
            default:
                try {
                    modules[`../pages${pathname}.ts`]();
                    return unsafeHTML(`<${component}></${component}>`);
                } catch (e) {
                    console.log(e);
                    modules["../pages/404.ts"]();
                    return html`<page-404></page-404>`;
                }
        }
    }
    gtag: any;
    connectedCallback() {
        super.connectedCallback();

        if (import.meta.env.PROD && !isRobot) {
            const script = document.createElement("script");
            const GA_ID = "G-CLE76PBB93";
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            this.gtag = function () {
                // eslint-disable-next-line prefer-rest-params
                window.dataLayer.push(arguments);
            };

            this.gtag("js", new Date());
            this.gtag("config", GA_ID);
        }
    }

    render() {
        return this._renderPage();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "root-router": RootRouter;
    }
}
