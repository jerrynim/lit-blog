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
                바닐라 자바스크립트만을 활용하여 라우팅을 만들도록하겠습니다.
                <br />
                우리에게 필요한 것은 html과 js파일이 전부입니다. 기본적인
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

                <post-code
                    .code=${code2}
                    language="javascript"
                    filename="index.js"
                ></post-code>
                <post-divider></post-divider>
                <code>${"<a>"}</code>태그와 window.location.href 값을 변경하는
                방법을 통해 이동을할 수 있지만, 페이지 자체를 새로 불러오기
                때문에 같은 어플리케이션이라고 해도 깜박임이 발생하게 됩니다.
                <br />
                주소를 이동해도 페이지 자체가 새로고침이 되지 않기위해서
                <post-link
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Window/history"
                    >window.history</post-link
                >의 pushState 메서드를 사용하여 주소변경을할 수 있습니다.<br />pushState
                메서드는 (데이터,타이틀,URL)의 매개변수를 받도록되어있습니다.
                <post-code .code=${code6} language="typescript"></post-code>
                메서드를 실행시켜보면 주소창의 주소가 변경된 것을 확인할 수
                있습니다.
                <br />
                주소가 바뀌었다면 이를 감지하여 <code>${"<main>"}</code>태그내의
                콘텐츠를 바꾸는것이 라우팅의 원리가 되겠습니다.<br />
                주소가 변경된 것을 알리고 감지하기 위하여
                <code>locationchange</code>라는
                <post-link
                    href="https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent"
                    >커스텀 이벤트</post-link
                >를 만들도록 하겠습니다.
                <post-code
                    .code=${code5}
                    language="typescript"
                    filename="index.js"
                ></post-code>
                주소변경 이벤트를 발생시키는 버튼을 만들어 주소변경 및 이벤트
                감지를 확인해보도록 하겠습니다.
                <post-code
                    .code=${code7}
                    language="typescript"
                    filename="index.js"
                ></post-code>
                버튼을 클릭하면 콘솔창에 메세지가 출력되고 브라우저의 주소가
                변경되는 것을 확인할 수 있습니다.
                <br />
                <br />
                <code>locationchange</code> 이벤트가 항상 같은 주소로 이동하는
                것은 아니기에 변경할 주소를 인자로 받을 수
                있도록하도록하겠습니다.
                <post-blockquote>
                    커스텀 이벤트를 생성할때에 detail에 값을주어 원하는 변수를
                    전달할 수 있습니다.
                </post-blockquote>
                <post-code
                    .code=${code8}
                    language="typescript"
                    filename="index.js"
                ></post-code>
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

    const handleLocationChange = (e) => {
        console.log("locationchanged");
    };

    window.addEventListener("locationchange", handleLocationChange);

    main.innerHTML = "<div>js loaded</div>";
};
`;

//prettier-ignore
const code6 = "window.history.pushState(undefined,\"타이틀\",\"/some\")";

const code7 = `window.onload = () => {
    const main = document.querySelector("main");

    const handleLocationChange = (e) => {
        console.log("locationchanged");

        //* 주소변경
        window.history.pushState(undefined, "타이틀", "/some");
    };

    //* locationchange 이벤트리스너
    window.addEventListener("locationchange", handleLocationChange);

    main.innerHTML = "<div><button type='button'>move to /some</button></div>";

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const locationChangeEvent = new CustomEvent("locationchange", {
            composed: true, //웹 컴포넌트라면 넣어주세요
        });
        //* 주소변경 이벤트 Dispatch
        window.dispatchEvent(locationChangeEvent);
    });
};
`;

const code8 = `window.onload = () => {
    const main = document.querySelector("main");

    const handleLocationChange = (e) => {
        const { href } = e.detail;
        console.log(href);

        //* 주소변경
        window.history.pushState(undefined, "타이틀", href);
    };

    //* locationchange 이벤트리스너
    window.addEventListener("locationchange", handleLocationChange);

    main.innerHTML = "<div><button type='button'>move to /some</button></div>";

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const locationChangeEvent = new CustomEvent("locationchange", {
            composed: true,
            detail: { href: "some" },
        });

        //* 주소변경 이벤트 Dispatch
        window.dispatchEvent(locationChangeEvent);
    });
};
`;

declare global {
    interface HTMLElementTagNameMap {
        "vanilla-route": VanillaRoute;
    }
}
