import { withPost } from "@lib/decorators";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import "@components/post";

@customElement("lit-tutorial-6")
@withPost
export class LitTutorial6 extends LitElement {
    protected render() {
        return html`<post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg"
            ></post-head-image>
            <post-head>
                <h1>Lit 튜토리얼 (6/6)</h1>
                <post-tag>lit lit-html lit-elemnt tutorial route</post-tag>
                <post-date>2021-07-25</post-date>
            </post-head>
            <post-body>
                웹 컴포넌트에서 라우팅을 하는 법을 알아보도록 하겠습니다. 기존의
                라우팅 처럼 해당 페이지를 불러와서 렌더링 한다기 보다, 웹
                컴포넌트를 교체하는 방식이라고 생각하시면 편할거라 생각합니다.
                <br />
                라우팅을 하기위해
                <post-link href="https://vaadin.com/router"
                    >'@vaadin/router'</post-link
                >라는 라이브러리를 설치하도록 하겠습니다.
                <post-blockquote>yarn add @vaadin/router </post-blockquote>
                '@vaadin/router'는 A CLIENT-SIDE ROUTER FOR WEB COMPONENTS, 웹
                컴포넌트를 위한 클라이언트 사이드 라우터 입니다. 이전에는
                'index.html'안에 웹 컴포넌트를 직접 불러와 사용하였지만
                '@vaadin/router'를 사용하여 웹 컴포넌트를 교체하도록 하겠습니다.
                <br /><br />
                'index.html'에
                <code>${"<main>"}</code>컴포넌트를 만들도록 하겠습니다.
                <post-code
                    .code=${code1}
                    language="html"
                    filename="index.html"
                ></post-code>
                앞에서 만든 <code>${"<main>"}</code>태그를 라우터로 만들어
                내부에 웹 컴포넌트를 불러오도록 하겠습니다.
                <post-code
                    .code=${code2}
                    language="typescript"
                    filename="index.ts"
                ></post-code>
                <code>${"<main>"}</code>태그를 불러와 경로가 "/"라면
                'lit-tomato' 컴포넌트 불러오도록 설정하였습니다. 'lit-tomao'를
                사용하기 위해 import를 해주었는네, 이를 다음과 같은 방식으로
                경로가 변경될 때 불러 올 수 있습니다.
                <post-code .code=${code3} language="typescript"></post-code>
                '/lit-potato'경로를 주소창에 입력해 본다면
                'lit-potato'컴포넌트가 <code>${"<main>"}</code>태그 안에 렌더링
                된 것을 확인 할수 있었습니다.
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628986122/lit-blog/vaading-route_yntkky.png"
                    alt="라우트 렌더링 확인"
                ></post-image>
                이번에는 depth가 있는 경로를 가진 컴포넌트를 다뤄보겠습니다.
                경로가 '/vegetable/lit-tomato'라면 어떻게 만들어야 할까요?<br />
                간단하게 path를 경로와 맞게 설정해주면 됩니다.
                <post-code .code=${code4} language="typescript"></post-code>
                이번에는 children이라는 속성을 이용하여
                '/vegetable/lit-tomato'경로를 설정해보도록 하겠습니다.
                <post-code .code=${code5} language="typescript"></post-code>
                브라우저에 '/vegetable/lit-tomato' 경로로 이동하여 보면
                'lit-tomato' 컴포넌트가 렌더링 된 것을 확인 할 수 있습니다.
                <post-title subTitle>동적라우팅 </post-title>
                동적 경로를 설정하는 것 또한 간단합니다. 전달받을 query를 :를
                사용하여 동적페이지를 만들 수 있습닏다.
                <post-code .code=${code6} language="typescript"></post-code>
                기존에 없던 경로인 '/vegetable/lit-apple'을 브라우저에 입력하면
                lit-tomato 컴포넌트가 나타나는 것을 확인 할 수 있습니다. 작성한
                코드는
                <post-link
                    href="https://github.com/jerrynim/jerrynim-lit-project"
                    >https://github.com/jerrynim/jerrynim-lit-project</post-link
                >
                에서 확인할 수 있습니다.
            </post-body>`;
    }
}

const code1 = `<body>
<main></main>
  <script src="/vendor/webcomponents-loader.js"></script>
</body>`;

const code2 = `import "./styles/styles.css";
import "./pages/lit-tomato";
import { Router } from "@vaadin/router";

window.addEventListener("load", () => {
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector("main"));
  router.setRoutes([
    {
      path: "/",
      component: "lit-tomato",
    },
  ]);
}`;

const code3 = `function initRouter() {
  const router = new Router(document.querySelector("main"));
  router.setRoutes([
    {
      path: "/",
      component: "lit-tomato",
    },
    {
      path: "/lit-potato",
      component: "lit-potato",
      action: () => {
        import("./pages/lit-potato");
      },
    },
  ]);
}`;

const code4 = `{
  path: "/vegetable/lit-tomato",
  component: "lit-tomato",
},`;

const code5 = `{
  path: "/vegetable",
  component: "lit-tomato",
  children: [{ path: "/lit-tomato", component: "lit-tomato" }],
},`;

const code6 = `{
  path: "/vegetable/:name",
  component: "lit-tomato",
},`;

declare global {
    interface HTMLElementTagNameMap {
        "lit-tutorial-6": LitTutorial6;
    }
}
