import { css } from "lit";
export type Constructor<T> = {
    // tslint:disable-next-line:no-any
    new (...args: any[]): T;
};

export const withPost = (classOrDescriptor: Constructor<HTMLElement>): any => {
    return class NewClasss extends classOrDescriptor {
        static styles = [
            css`
                :host {
                    display: block;
                }
            `,
        ];

        firstUpdated() {
            let articleBody = "";
            let headline = "";
            let image = "";
            let createdAt = "";

            let keywords = "";
            const url = window.location.href.replace(
                window.location.search,
                "",
            );
            this.shadowRoot?.childNodes.forEach((node: any) => {
                //? dev에선 renderOptions, prod에선 renderRoot
                const localname =
                    node.localName || node.renderRoot?.host.localName;

                if (localname === "post-head-image") {
                    image = node.__src;
                }
                if (localname === "post-head") {
                    node.childNodes.forEach((dom: HTMLElement) => {
                        switch (dom.localName) {
                            case "h1":
                                headline = dom.innerText;
                                break;
                            case "post-tag":
                                keywords = dom.firstChild?.textContent || "";
                                break;
                            case "post-date":
                                createdAt = dom.innerText;
                                break;
                            default:
                                break;
                        }
                    });
                }

                if (localname === "post-body") {
                    node.childNodes.forEach((text: HTMLElement) => {
                        if (text.nodeValue) {
                            articleBody = articleBody.concat(
                                text.nodeValue.replaceAll("  ", ""),
                            );
                        }
                        if (text.innerText) {
                            articleBody = articleBody.concat(
                                text.innerText.replaceAll("  ", ""),
                            );
                        }
                    });
                    articleBody = articleBody.replace(/(\r\n|\n|\r)/gm, "");
                }
            });
            const wordcount = articleBody.length;
            const description = articleBody.slice(0, 100);
            (document.querySelector(
                "meta[name='description']",
            ) as any)!.content = description;

            const head = document.head;
            const script = document.createElement("script");
            script.type = "application/ld+json";

            //* 키워드
            (document.querySelector(
                "meta[property='keywords']",
            ) as any)!.content = keywords;
            //* 타이틀

            (document.querySelector(
                "meta[property='og:description']",
            ) as any)!.content = description;
            document.title = `${headline} | jerrynim`;

            //* canonical
            const link = document.createElement("link");
            link.rel = "canonical";
            link.href = `https://jerrynim.dev${window.location.pathname}`;

            head.appendChild(link);
            //? og설정

            (document.querySelector(
                "meta[property='og:title']",
            ) as any)!.content = `${headline} | jerrynim`;

            (document.querySelector(
                "meta[property='og:description']",
            ) as any)!.content = description;

            (document.querySelector(
                "meta[property='og:url']",
            ) as any)!.content = window.location.href;

            (document.querySelector(
                "meta[property='og:image']",
            ) as any)!.content = image;

            (document.querySelector(
                "meta[property='og:image:width']",
            ) as any)!.content = 1000;
            (document.querySelector(
                "meta[property='og:image:height']",
            ) as any)!.content = 300;
            (document.querySelector(
                "meta[property='og:image:alt']",
            ) as any)!.content = `thumbnail-${headline}`;

            (document.querySelector(
                "meta[property='og:image:secure_url']",
            ) as any)!.href = image;

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
                        image,
                        author: "jerrynim",
                        publisher: {
                            "@type": "Organization",
                            email: "tjerry3@naver.com",
                            name: "jerrynim",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://jerrynim.dev/static/Profile.png",
                                contentUrl:
                                    "https://jerrynim.dev/static/Profile.png",
                                width: "149",
                                height: "149",
                            },
                            url: "https://jerrynim.dev/",
                        },
                        genre: keywords,
                        keywords,
                        wordcount,
                        url,
                        dateCreated: createdAt,
                        datePublished: createdAt,
                        dateModified: createdAt,
                        description,
                        articleBody,
                    }),
                ),
            );
            head.appendChild(script);
            window.prerenderReady = true;
        }

        disconnectedCallback() {
            const script = document.head.querySelector(
                "script[type='application/ld+json']",
            );
            if (script) {
                document.head.removeChild(script);
            }
        }
    };
};

// export const withQna = (classOrDescriptor: Constructor<HTMLElement>): any => {
//     return class NewClasss extends classOrDescriptor {
//         firstUpdated() {
//             let question = "";
//             let answer = "";

//             this.shadowRoot?.childNodes.forEach((node: any) => {
//                 //? dev에선 renderOptions, prod에선 renderRoot
//                 const localname =
//                     node.localName || node.renderRoot?.host.localName;
//                 if (localname === "qna-question") {
//                     question = node.textContent;
//                 }
//                 if (localname === "qna-answer") {
//                     answer = node.textContent;
//                 }
//             });

//             const description = answer.slice(0, 100);
//             (document.querySelector(
//                 "meta[name='description']",
//             ) as any)!.content = description;

//             const head = document.head;

//             //* 키워드
//             (document.querySelector(
//                 "meta[property='keywords']",
//             ) as any)!.content = keywords;
//             //* 타이틀

//             (document.querySelector(
//                 "meta[property='og:description']",
//             ) as any)!.content = description;
//             document.title = `${question} | jerrynim`;

//             //? og설정

//             (document.querySelector(
//                 "meta[property='og:title']",
//             ) as any)!.content = `${question} | jerrynim`;

//             (document.querySelector(
//                 "meta[property='og:description']",
//             ) as any)!.content = description;

//             (document.querySelector(
//                 "meta[property='og:url']",
//             ) as any)!.content = window.location.href;

//             //* 구조화 데이터 삽입
//             const script = document.createElement("script");
//             script.type = "application/ld+json";

//             script.appendChild(
//                 document.createTextNode(
//                     JSON.stringify({
//                         "@context": "https://schema.org",
//                         "@type": "FAQPage",
//                         mainEntity: [
//                             {
//                                 "@type": "Question",
//                                 name: question,
//                                 acceptedAnswer: {
//                                     "@type": "Answer",
//                                     text: answer,
//                                 },
//                             },
//                         ],
//                     }),
//                 ),
//             );
//             head.appendChild(script);
//         }

//         disconnectedCallback() {
//             const script = document.head.querySelector(
//                 "script[type='application/ld+json']",
//             );
//             if (script) {
//                 document.head.removeChild(script);
//             }
//         }
//     };
// };
