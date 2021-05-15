import { customElement } from "lit/decorators/custom-element";
import { property } from "lit/decorators/property";
import { LitElement, html, render } from "lit";

// import "../pages";

//@ts-ignore
const modules = import.meta.glob("../pages/*.ts");

for (const path in modules) {
    modules[path]().then((mod) => {
        console.log(path, mod);
    });
}
const CLIENT_URL = "http://localhost:3000";
//@ts-ignore

@customElement("root-router")
export class RootRouter extends LitElement {
    private history: string[] = [];

    @property()
    pathname: string = "";

    dom: any;

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

    async _renderPage() {}

    render() {
        const split = window.location.pathname.split("/");
        let component = split[split.length - 1];
        if (!component) {
            render(`<${component}></${component}>`, this);
            component = "lit-home";
        }
        console.log(this.shadowRoot!);
        console.log(component);
        //? 등록된 custom element가 아니라면
        try {
            if (!!customElements.get(component)) {
            } else {
            }
        } catch (e) {}
        return html`<page-404></page-404>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "root-router": RootRouter;
    }
}
