import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

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
        const url = window.location.href.replace(window.location.search, "");
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
        const description = articleBody.slice(0, 100);
        (document.querySelector("meta[name='description']") as any)!.content =
            description;

        const head = document.head;
        const script = document.createElement("script");
        script.type = "application/ld+json";

        (document.querySelector("meta[property='keywords']") as any)!.content =
            this.keywords;
        //* 타이틀 교체
        document.title = headline;

        (document.querySelector("link[rel='canonical'") as any).href = url;
        //? og설정

        (document.querySelector("meta[property='og:title']") as any)!.content =
            headline;

        (document.querySelector(
            "meta[property='og:description']",
        ) as any)!.content = description;

        (document.querySelector("meta[property='og:url']") as any)!.content =
            window.location.href;

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
                        "@type": "Organization",
                        email: "tjerry3@naver.com",
                        name: "jerrynim",
                        logo: {
                            "@type": "ImageObject",
                            url: "https://www.jerrynim.io/static/Profile.png",
                            contentUrl:
                                "https://www.jerrynim.io/static/Profile.png",
                            width: "149",
                            height: "149",
                        },
                        url: "https://www.jerrynim.io/",
                    },
                    genre: this.keywords,
                    keywords: this.keywords,
                    wordcount,
                    url,
                    dateCreated: this.createdAt,
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
        "how-to": LitPost;
    }
}
