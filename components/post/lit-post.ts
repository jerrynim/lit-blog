import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./post-head";
import "./post-title";
import { parseDate } from "@lib";

@customElement("lit-post")
export class LitPost extends LitElement {
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
                if (node.renderOptions?.host.localName === "post-head") {
                    headline = node.renderOptions?.host.textContent;
                }
            });

        const wordcount = articleBody.length;
        const dateCreated = parseDate(new Date());
        const dateModified = parseDate(new Date());
        const description = articleBody.slice(0, 100);

        const head = document.head;
        const script = document.createElement("script");
        script.type = "application/ld+json";

        //* 타이틀 교체
        document.querySelector("title")!.innerText = headline;

        //* 구조화 데이터 삽입
        script.appendChild(
            document.createTextNode(
                JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TechArticle",
                    headline,
                    image: "http://example.com/image.jpg",
                    author: "jerrynim",
                    genre: "search engine optimization",
                    keywords: "seo sales b2b",
                    wordcount,
                    url,
                    dateCreated,
                    dateModified,
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
