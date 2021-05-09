import { customElement } from "@lit/reactive-element/decorators/custom-element";
import { property } from "@lit/reactive-element/decorators/property";
import { html, LitElement } from "lit";
import "../pages";

const CLIENT_URL = "http://localhost:3000";

@customElement("root-router")
export class RootRouter extends LitElement {
    private history: string[] = [];

    @property()
    pathname: string = "";

    constructor() {
        super();
        this._handleLocationChange = this._handleLocationChange.bind(this);
        this._handlePopState = this._handlePopState.bind(this);
        this._renderPage = this._renderPage.bind(this);

        const pathname = window.location.href.replace(CLIENT_URL, "");

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
        }>,
    ) {
        const { href } = event.detail;
        if (!href) {
            return;
        }
        //* 외부 라우팅
        if (href.startsWith("http") && !href.startsWith(CLIENT_URL)) {
            window.location.href = href;
            return;
        }

        //* 내부 라우팅
        //* 마지막 pathname이 href 라면
        if (this.history[this.history.length - 1] === href) {
            return;
        }
        window.history.pushState({}, "", href);
        this.history.push(href);

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

    async _renderPage() {
        const split = window.location.pathname.split("/");
        let component = split[split.length - 1];
        if (!component) {
            component = "lit-home";
        }

        //? 등록된 custom element가 아니라면
        try {
            if (document.createElement(component).constructor !== HTMLElement) {
                this.shadowRoot!.innerHTML = `<${component}></${component}>`;
            } else {
                this.shadowRoot!.innerHTML = `<page-404></page-404>`;
            }
        } catch (e) {}
    }

    render() {
        console.log("re-render");
        this._renderPage();
        return html``;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "root-router": RootRouter;
    }
}
