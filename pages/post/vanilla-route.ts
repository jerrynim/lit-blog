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
                바닐라 자바스크립트에서 라우팅을 만드는 작업을 함께 보도록
                하겠습니다. 이 블로그에서도 사용하고 있는 방식으로 브라우저의
                history API, popstate 이벤트, 커스텀 이벤트를 사용하여 제작하게
                됩니다.
                <post-title subTitle>프로젝트 설정</post-title>
                우리에게 필요한 것은 html과 js 파일이 전부입니다.<br />
                기본적인 html 파일을 만들도록 하겠습니다.
                <post-code
                    .code=${code1}
                    language="html"
                    filename="index.html"
                ></post-code>
                실행될 js 파일을 만들어 추가하도록 하겠습니다.<br />index.html
                파일을 열 때 내부 콘텐츠를 설정하도록 하겠습니다.
                <post-code
                    .code=${code2}
                    language="javascript"
                    filename="index.js"
                ></post-code>
                만들어준 js 파일을 사용하도록 index.html에서
                <code>${"<script>"}</code>태그를 사용하여 실행해 주도록
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
                방법을 통해 이동을 할 수 있지만, 페이지 자체를 새로 불러오기
                때문에 같은 어플리케이션이라고 해도 깜박임이 발생하게 됩니다.
                <br />
                주소를 이동해도 페이지 자체가 새로고침이 되지 않기 위해서
                <post-link
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Window/history"
                    >window.history</post-link
                >의 pushState 메서드를 사용하여 주소 변경을 할 수 있습니다.<br />pushState
                메서드는 (데이터, 타이틀, URL)의 매개변수를 받도록 되어있습니다.
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
                주소 변경 이벤트를 발생시키는 버튼을 만들어 주소 변경 및 이벤트
                감지를 확인해 보도록 하겠습니다.
                <post-code
                    .code=${code7}
                    language="typescript"
                    filename="index.js"
                ></post-code>
                버튼을 클릭하면 콘솔 창에 메세지가 출력되고 브라우저의 주소가
                변경되는 것을 확인할 수 있습니다.
                <br />
                <br />
                <code>locationchange</code> 이벤트가 항상 같은 주소로 이동하는
                것은 아니기에 변경할 주소를 인자로 받을 수 있도록 하도록
                하겠습니다.
                <post-blockquote>
                    커스텀 이벤트를 생성할 때에 detail에 값을 주어 원하는 변수를
                    전달할 수 있습니다.
                </post-blockquote>
                <post-code
                    .code=${code8}
                    language="typescript"
                    filename="index.js"
                ></post-code>
                주소이동에 성공했으니 주소에 맞게 콘텐츠를 변경하도록 하면
                라우팅을 구현할 수 있습니다. 이때
                <code>window.location.pathname</code>을 사용하여 라우팅 경로를
                받아오도록 합니다. pathname을 사용하는 이유는 "/some?
                page=1"처럼 쿼리 값이 있을 때 쿼리 값을 제외한 경로를 받을 수
                있기 때문입니다.
                <post-code
                    .code=${code9}
                    language="typescript"
                    filename="index.js"
                ></post-code>
                <post-divider></post-divider>
                <code>locationchange</code> 커스텀 이벤트를 통해 라우팅을 하는데
                성공했지만, 뒤로 가기 혹은 앞으로 가기를 할 때 주소는 이동하지만
                콘텐츠가 바뀌지 않는 것을 볼 수 있습니다.<br />
                이를 위해 뒤로 가기 및 앞으로가기 이벤트를 감지하는
                <post-link
                    href="https://developer.mozilla.org/ko/docs/Web/API/Window/popstate_event"
                    >popstate</post-link
                >
                이벤트를 이용하여 변경된 주소로 콘텐츠를 변경해 주도록
                하겠습니다.
                <post-code
                    .code=${code10}
                    language="typescript"
                    filename="index.js"
                ></post-code>
                이제 페이지 이동, 뒤로 가기, 앞으로 가기로 콘텐츠를 불러오게
                되었습니다. 하지만 이러한 방식에는 문제가 있는데 동일한 경로로
                이동을 하게 될 경우 history 스택에 같은 경로가 쌓이게 되고, 뒤로
                가기 시 같은 페이지가 나오는 문제가 발생합니다.
                <br />
                <br />

                띠라서 주소이동시에 같은경로라면 이동하지 않도록 작업을하도록
                하겠습니다.
                <post-code
                    .code=${code11}
                    language="typescript"
                    filename="index.js"
                ></post-code>

                <post-divider></post-divider>
                자주 사용하게 될 주소 이동을 함수로 만들고, 내부 콘텐츠를 switch
                내에서 require 하여 동적으로 콘텐츠를 불러올 수도 있습니다.
                이러한 작업은 작업자가 필요에 따라 추가해 주시면 됩니다.

                <br />
                <br />

                앞에서 다룬 내용을<post-link
                    href="https://github.com/jerrynim/vanillajs-router/tree/master"
                    >깃허브</post-link
                >에 예제를 통해 올리도록 하겠습니다.<br />
                도움이 되었다면 좋겠네요ㅎㅎ<br />
                *이 블로그에서 사용한
                <post-link
                    href="https://github.com/jerrynim/lit-blog/blob/master/components/root-router.ts"
                    >lit-html을 사용한 라우터</post-link
                >도 첨부하도록 하겠습니다.
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

const code9 = `   //* 경로에 맞는 콘텐츠 렌더
const renderContents = () => {
    const { pathname } = window.location;
    switch (pathname) {
        case "/some":
            main.innerHTML = "<div>some Contents</div>";
            break;
        default:
            main.innerHTML = "<div>404</div>";
    }
};

const handleLocationChange = (e) => {
    const { href } = e.detail;

    //* 주소변경
    window.history.pushState(undefined, "타이틀", href);
    //* 콘텐츠 렌더링
    renderContents();
};`;

const code10 = `window.addEventListener("popstate", () => {
    renderContents();
});`;

const code11 = `button.addEventListener("click", () => {
    const targetUrl = "some?foo=bar";
    const { pathname } = window.location;

    //* 같은 URL 은 스택에 추가하지 않는다
    if (targetUrl === pathname) {
        return;
    }

    const locationChangeEvent = new CustomEvent("locationchange", {
        composed: true,
        detail: { href: "some" },
    });

    //* 주소변경 이벤트 Dispatch
    window.dispatchEvent(locationChangeEvent);
});`;

declare global {
    interface HTMLElementTagNameMap {
        "vanilla-route": VanillaRoute;
    }
}
