import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./post-head";
import "./post-body";
import "./post-title";

const addStructuredData = () => {
    return (Class: Function) => {
        //     Object.defineProperty(Class.prototype, "connectedCallback", {
        //         value: () => {
        //             const head = document.head;
        //             const script = document.createElement("script");
        //             script.type = "application/ld+json";

        //             script.appendChild(
        //                 document.createTextNode(`
        // { "@context": "https://schema.org",
        // "@type": "TechArticle",
        // "headline": "Extra! Extra! Read alla bout it",
        // "image": "http://example.com/image.jpg",
        // "author": "jerrynim",
        // "genre": "search engine optimization",
        // "keywords": "seo sales b2b",
        // "wordcount": "1120",
        // "url": "http://www.example.com",
        // "dateCreated": "2015-09-20",
        // "dateModified": "2015-09-20",
        // "description": "We love to do stuff to help people and stuff",
        // "articleBody": "You can paste your entire post in here, and yes it can get really really long."
        // }

        Object.defineProperty(Class.prototype, "disconnectedCallback", {
            value: () => {
                const script = document.head.querySelector(
                    "script[type='application/ld+json']",
                );
                if (script) {
                    document.head.removeChild(script);
                }
            },
        });
    };
};

@customElement("lit-post")
@addStructuredData()
export class LitPost extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                width: 680px;
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
        /** //TODO
          headline
            image
            genre
            keywords
            wordcount
            url
            dateCreated
            dateModified
            description
        */
        let articleBody = "";
        this.shadowRoot?.querySelectorAll("p").forEach((node) => {
            articleBody += node.innerText;
        });
        const wordcount = articleBody.length;
        const dateCreated = new Date().toISOString();
        const dateModified = new Date().toISOString();
        const description = articleBody.slice(0, 100);
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
