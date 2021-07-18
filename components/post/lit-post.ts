import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./post-head";
import "./post-title";
import { parseDate } from "@lib";

@customElement("lit-post")
export class LitPost extends LitElement {
    @property()
    createdAt: string = "";

    @property()
    keywords = "";
    static styles = [
        css`
            :host {
                display: block;
                width: 680px;
                padding-bottom: 100px;
                margin: auto;
            }
            ::slotted(p) {
                font-size: 18px;
                line-height: 30px;
                margin: 0;
                margin-bottom: 12px;
            }
        `,
    ];

    firstUpdated() {
        let articleBody = "";
        let headline = "";
        const url = `${window.location.host}${window.location.pathname}`;
        this.shadowRoot
            ?.querySelector("slot")!
            .assignedNodes()
            .forEach((node: any) => {
                if (node.innerText) {
                    articleBody += node.innerText;
                }
                //? dev에선 renderOptions, prod에선 renderRoot
                const localname =
                    node.renderOptions?.host.localName ||
                    node.renderRoot?.host.localName;
                if (localname === "post-head") {
                    headline =
                        node.renderOptions?.host.textContent ||
                        node.renderRoot?.host.textContent;
                }
            });

        const wordcount = articleBody.length;
        const dateCreated = parseDate(new Date());
        const description = articleBody.slice(0, 100);

        const head = document.head;
        const script = document.createElement("script");
        script.type = "application/ld+json";

        //* 타이틀 교체
        document.title = headline;

        //* 구조화 데이터 삽입
        script.appendChild(
            document.createTextNode(
                JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TechArticle",
                    headline,
                    mainEntityOfPage: window.location.href.replace(
                        window.location.search,
                        "",
                    ),
                    image: "https://www.jerrynim.io/static/Profile.png",
                    author: "jerrynim",
                    publisher: {
                        "@type": "Person",
                        email: "tjerry3@naver.com",
                        image: "https://www.jerrynim.io/static/Profile.png",
                        jobTitle: "Developer",
                        name: "jerrynim",
                        url: "https://www.jerrynim.io/",
                    },
                    genre: this.keywords,
                    keywords: this.keywords,
                    wordcount,
                    url,
                    dateCreated,
                    datePublished: this.createdAt,
                    dateModified: this.createdAt,
                    description,
                    articleBody,
                }),
            ),
        );
        head.appendChild(script);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        const script = document.head.querySelector(
            "script[type='application/ld+json']",
        );
        if (script) {
            document.head.removeChild(script);
        }
    }

    protected render() {
        return html`<slot></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-post": LitPost;
    }
}
