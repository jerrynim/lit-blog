import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("vanilla-route")
@withPost
export class VanillaRoute extends LitElement {
    protected render() {
        return html`<post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1635330118/lit-blog/route_fjzln0.jpg"
            ></post-head-image>
            <post-head>
                <h1>Vanilla Javascript SPA만들기</h1>
                <post-tag>Vanilla Javascript SPA 라우팅</post-tag>
                <post-date>2021-10-27</post-date>
            </post-head>
            <post-body>
                바닐라 자바스크립트만들 활용하여 라우팅을 만들도록하겠습니다.
                <br />
                우리에게 필요한 것은 html과 js파일이 전부입니다. 기본적이
                html파일을 만들도록 하겠습니다.
                <post-code
                    .code=${code1}
                    language="html"
                    filename="index.html"
                ></post-code>
                실행될 js파일을 만들어 추가하도록 하겠습니다. index.html 파일을
                열때 내부 콘텐츠를 설정하도록 하겠습니다.
                <post-code
                    .code=${code2}
                    language="javascript"
                    filename="index.js"
                ></post-code>
                만들어준 js파일을 사용하도록 index.html에서
                <code>${"<script>"}</code>태그를 사용하여 실행해주도록
                하겠습니다.
                <post-code
                    .code=${code3}
                    language="html"
                    filename="index.html"
                ></post-code>

                라우터를 작동하는 원리는 브라우저의 주소이동을 감지하여
                <code>${"<main>"}</code>내의 콘텐츠 바꾸는것입니다. 이를 위해
                브라우저의 주소변경부터 해보도록 하겠습니다.

                <post-code
                    .code=${code2}
                    language="javascript"
                    filename="index.js"
                ></post-code>
                기본적으로 페이지 이동을 위해서 html의
                <code>${"<a>"}</code>태그를 사용할 수 있습니다. 그리고
                window.location 객체를 이용하여 이동할 수 있습니다.
                window.location 객체정보를 확인해보겠습니다.
                <post-code .code=${code4} language="typescript"></post-code>
                이동을하게 되는데 이때 페이지가 이동한것을 감지하기 위해서
                "hashchange" 이벤트를 사용할 수 있습니다.
                <post-code .code=${code5} language="typescript"></post-code>
            </post-body>`;
    }
}

const code1 = `<!DOCTYPE html>
<html>
    <body>
        <main></main>
    </body>
</html>`;

const code2 = `window.onload = () => {
    const main = document.querySelector("main");
    main.innerHTML = "<div>js loaded</div>";
};
`;

const code3 = `<!DOCTYPE html>
<html>
    <body>
        <script src="./index.js"></a>
        <main></main>
    </body>
</html>`;
const code4 = `{
    ancestorOrigins: {},
    href: "http://localhost:3000/post/vanilla-route",
    origin: "http://localhost:3000",
    protocol: "http:",
    host: "localhost:3000",
    hostname: "localhost",
    port: "3000",
    pathname: "/post/vanilla-route",
    search: "",
    hash: "",
}`;

const code5 = `window.onload = () => {
    const main = document.querySelector("main");

    //* hashchange 이벤트 등록
    window.addEventListener("hashchange", (e) => {
        console.log("hashchange", e);
    });
    //* 1초후 현재 페이지 내로 라우팅 실행
    setTimeout(() => {
        window.location = $backtick;&dollar;{window.location.href}#header&backtick;;
    }, 1000);

    main.innerHTML = "<div>js loaded</div>";
};
`;

declare global {
    interface HTMLElementTagNameMap {
        "vanilla-route": VanillaRoute;
    }
}
