import { withPost } from "@lib/decorators";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import "@components/post";

@customElement("lit-tutorial-1")
@withPost
export class LitTutorial1 extends LitElement {
    protected render() {
        const code = "yarn\nyarn dev";

        const indexhtml = `
        <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Lit project</title>
    <meta name="description" content="Lit project Start" />

    <script>
      if (!window.customElements) {
        document.write("<!--");
      }
    </script>
    <script src="/vendor/custom-elements-es5-adapter.js"></script>
    <!-- ! DO NOT REMOVE THIS COMMENT, WE NEED ITS CLOSING MARKER -->
  </head>
  <body>
    <main>
      <lit-tomato></lit-tomato>
    </main>
    <script src="/vendor/webcomponents-loader.js"></script>
  </body>
</html>
        `;

        const litTomato1 = `
        import { LitElement, html, customElement } from "lit-element";

@customElement("lit-tomato")
class Tomato extends LitElement {
  render() {
    return html&backtick;
      <style></style>
      <h1>Hello Tomato!</h1>
      &backtick;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}
        `;

        const litTomato2 = `
        render() {
    return html&backtick;
    <style></style>
    <h1>Hello Tomato!</h1>
&backtick;;
}`;
        const firstline =
            // eslint-disable-next-line quotes
            'import { LitElement, html, customElement } from "lit-element";';
        const lithtml1 = `return html&backtick;
    <style></style>
    <h1>Hello Tomato!</h1>
&backtick;`;

        const babelrc = `
const plugins = [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
  ];`;

        const globalDeclare = `declare global {
    interface HTMLElementTagNameMap {
      "lit-tomato": Tomato;
    }
  }`;
        return html`<post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg"
            ></post-head-image>
            <post-head>
                <h1>Lit 튜토리얼 (1/6)</h1>
                <post-tag>lit lit-html lit-elemnt tutorial start</post-tag>
                <post-date>2021-07-25</post-date>
            </post-head>
            <post-body>
                안녕하세요. 작년에 lit-html을 소개하는
                <post-link
                    href="https://velog.io/@jerrynim_/Lit-html-1-%EC%86%8C%EA%B0%9C"
                    >li-html 어떠세요??</post-link
                >을 올리고, 웹 컴포넌트 개발에 대한 관심만 가지고 있다가 그디어
                lit-html을 사용하여 웹 컴포넌트 개발을 해보게 되었습니다.
                <post-title subTitle>웹 컴포넌트 왜 사용할까?</post-title>
                웹 컴포넌트는 웹 표준 기반을 준수하여 Html, Css, Javascript 로
                만들어진 재사용 가능한 캡슐화 된 컴포넌트 입니다. 다음 링크는 웹
                컴포넌트를 사용하는 이유를 알려주고 있습니다.
                <post-link href="https://han41858.tistory.com/15"
                    >왜 Web Component가 중요한가</post-link
                >
                lit-project를 시작하기에 앞서 웹 컴포넌트의 특성 대해 알아
                보도록 하겠습니다.
                <post-title subTitle>웹 컴포넌트 특성</post-title>
                <post-link
                    href="https://developer.mozilla.org/ko/docs/Web/Web_Components"
                    >웹 컴포넌트 란</post-link
                >
                웹 컴포넌트란 재사용 할 수 있는 캡슐화된 컴포넌트를 만들며 다음
                세 가지 주요 기술들로 구성되어 있습니다.
                <ul>
                    <post-list>
                        Custom elements: 사용자 인터페이스에서 원하는대로 사용할
                        수있는 사용자 정의 요소 및 해당 동작을 정의 할 수있는
                        JavaScript API 세트입니다.
                    </post-list>
                    <post-list>
                        Shadow DOM: 캡슐화된 "그림자" DOM 트리를 엘리먼트 — 메인
                        다큐먼트 DOM 으로부터 독립적으로 렌더링 되는 — 를
                        추가하고 연관된 기능을 제어하기 위한 JavaScript API 의
                        집합. 이 방법으로 엘리먼트의 기능을 프라이빗하게 유지할
                        수 있어, 다큐먼트의 다른 부분과의 충돌에 대한 걱정 없이
                        스크립트와 스타일을 작성할 수 있습니다.
                    </post-list>
                    <post-list>
                        HTML 템플릿: 과 엘리먼트는 렌더링된 페이지에 나타나지
                        않는 마크업 템플릿을 작성할 수 있게 해줍니다. 그 후,
                        커스텀 엘리먼트의 구조를 기반으로 여러번 재사용할 수
                        있습니다.
                    </post-list>
                </ul>
                <post-title subTitle>lit 프로젝트 설정하기</post-title>
                리액트를 시작하기 위해서는 처음 하는 것은 CRA(Create React
                App)을 설치 하기 일 것입니다. lit 프로젝트를 시작하기 위해
                저희는 thepassle 가 만든
                <post-link
                    href="https://github.com/thepassle/create-lit-app-advanced"
                    >CLA(Create Lit App)</post-link
                >을 사용 할 수 있습니다. 하지만 저는 타입스크립트를 사용하길
                원했고 다음
                <post-link
                    href="https://vaadin.com/learn/tutorials/lit-element/starting-a-lit-element-project"
                    >vaadin 강의</post-link
                >
                및 webpack 블로그 글을 참고하여 웹 컴포넌트 실행을 위한 webpack
                및 프로젝트 설정을 직접 하였습니다. 간단한 웹 컴포넌트 실행이
                되는 프로젝트를 깃허브에 올려 두었습니다.
                <post-link
                    href="https://github.com/jerrynim/jerrynim-lit-project"
                    >깃허브 : jerrynim-lit-project-starter</post-link
                >
                저는 Next.js를 사용하는 것을 좋아하기 때문에 폴더구조는
                Next.js의 구조를 사용하였습니다.
                <post-title subTitle>프로젝트 실행해보기</post-title>
                jerrynim-lit-project-starter 프로젝트를 다운로드 받아 필요한
                패키지를 설치후 실행해 보도록 하겠습니다. 설정해둔 포트는
                3000으로, http://localhost:3000/ 로 접속하여확인 할 수 있습니다.

                <post-code .code=${code} language="bash"></post-code>
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1627958263/lit-blog/hello_nfjvqu.png"
                    alt="hello tomato!"
                ></post-image>

                'Hello Tomato!'라는 메세지가 출력 되었습니다. 개발자도구의
                Elements를 확인하여보면<code class="code"
                    >${"<lit-tomato>"}</code
                >라는 생소한 태그가 보입니다. <code>${"<lit-tomato>"}</code>라는
                태그를 찾아보도록 하겠습니다. 해당 태그를 'index.html'에서 찾아
                볼 수 있습니다.
                <post-code
                    .code=${indexhtml}
                    language="html"
                    filename="index.html"
                ></post-code>
                <code>${"<lit-tomato>"}</code>를 찾아보니 해당 태그는 가지고
                있는 값이 없습니다. 그렇다면 'Hello Tomato'는 어디로부터 출력
                되는 걸까요?, 'Hello Tomato'를 찾아보니
                'pages/lit-tomatoo.ts'에서 찾을수 있었습니다.
                <post-code
                    .code=${litTomato1}
                    language="typescript"
                    filename="pages/lit-tomato"
                ></post-code>
                생소한 코드이지만 'Hello Tomato' 텍스트를 찾을 수 있었습니다.
                Html을 리턴하는 익숙한 코드를 찾을 수 있습니다.
                <post-code
                    .code=${litTomato2}
                    language="typescript"
                ></post-code>
                lit-html을 사용하여 템플릿을 리턴 한다는 것을 짐작해 볼수
                있었습니다. 코드를 하나씩 살펴보며 알아가보도록 하겠습니다.
                코드의 첫줄 입니다.
                <post-code .code=${firstline} language="typescript"></post-code>
                'lit-elemnt' 라이브러리를 사용하는 것을 볼 수 있습니다.
                <post-link href="https://lit-element.polymer-project.org/guide"
                    >lit-element</post-link
                >는 홈페이지에 'A simple base class for creating fast,
                lightweight web components'라고 설명 되어 있습니다. 번역하면
                '빠르고 가벼운 웹 컴포넌트를 위한 간단한 클래스'를 의미합니다.
                그렇습니다.lit-element는 웹 컴포넌트를 만들기 위해 사용 됩니다.
                lit-element의 특징은 다음과 같습니다.
                <ul>
                    <post-list
                        >LitElement는 lit-html 을 사용하여 HTML 템플릿을
                        정의하고 렌더링합니다.
                        <post-code
                            .code=${lithtml1}
                            language="typescript"
                        ></post-code>
                    </post-list>
                    <post-list>
                        LitElement는 웹 페이지에 쉽게 포함하기 위해 사용자 정의
                        요소를 사용하고 캡슐화를 위해
                        <post-link
                            href="https://polymer-library.polymer-project.org/2.0/docs/devguide/shadow-dom#:~:text=Shadow%20DOM%20is%20a%20new,as%20it%20relates%20to%20Polymer."
                            >Shadow DOM</post-link
                        >을 사용합니다.
                    </post-list>
                </ul>
                <post-link
                    href="https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=ko#:~:text=Shadow%20DOM%EC%9D%80%20%EA%B5%AC%EC%84%B1%20%EC%9A%94%EC%86%8C%EC%97%90%20%EB%A1%9C%EC%BB%AC%EC%9D%B4%EB%A9%B0%20%EB%82%B4%EB%B6%80%20%EA%B5%AC%EC%A1%B0,%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95%EC%9D%84%20%EC%A0%95%EC%9D%98%ED%95%A9%EB%8B%88%EB%8B%A4."
                    >Shoadow DOM(쉐도우 돔)</post-link
                >이라는 단어가 생소할 것입니다. 앞으로의 개발에 필요한 쉐도우
                돔의 특징에 대해 알아보도록 하겠습니다. 참고 :<post-link
                    href="https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=ko#:~:text=Shadow%20DOM%EC%9D%80%20%EA%B5%AC%EC%84%B1%20%EC%9A%94%EC%86%8C%EC%97%90%20%EB%A1%9C%EC%BB%AC%EC%9D%B4%EB%A9%B0%20%EB%82%B4%EB%B6%80%20%EA%B5%AC%EC%A1%B0,%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95%EC%9D%84%20%EC%A0%95%EC%9D%98%ED%95%A9%EB%8B%88%EB%8B%A4."
                    >구글 Shadow Dom 문서</post-link
                >
                <ul>
                    <post-list>
                        격리된 DOM: 구성 요소의 DOM은 자체 포함됩니다(예:
                        document.querySelector()는 구성 요소의 Shadow DOM에
                        노드를 반환하지 않음).
                    </post-list>
                    <post-list>
                        범위가 지정된 CSS: Shadow DOM 내부에 정의한 CSS는 범위가
                        Shadow DOM으로 지정되어 있습니다. 스타일 규칙은 누출되지
                        않으며 페이지 스타일은 스며들지 않습니다.
                    </post-list>
                    <post-list>
                        컴퍼지션: 구성 요소에 대한 선언적 마크업 기반 API를
                        디자인합니다.
                    </post-list>
                    <post-list>
                        CSS 단순화: 범위가 지정된 DOM이란 간단한 CSS 선택기와
                        훨씬 일반적인 ID/클래스 이름을 사용할 수 있으며 이름
                        충돌에 대해 걱정할 필요가 없음을 의미합니다.
                    </post-list>
                    <post-list>
                        생산성: 큰(전역) 단일 페이지보다 DOM 청크에서 앱을
                        고려합니다.
                    </post-list>
                </ul>
                쉐도우 돔은 1)외부 css의 영향을 받지 않고, 2)querySelector로
                불러올 수 없고, 3)composed를 이용하여 이벤트 전달을 막을수도
                있습니다. 3)의 의미를
                <post-link
                    href="https://dev.to/open-wc/composed-true-considered-harmful-5g59"
                    >composed?</post-link
                >
                글을 읽는다면 쉐도우 돔의 이벤트에 대해 이해하는 것에 도움이 될
                것입니다. 다음 코드를 보도록 하겠습니다.
                <post-title subTitle>decorators</post-title>
                다음 코드를 보니 다음과 같은 코드가 있습니다.
                <post-code
                    language="typescript"
                    code='@customElement("lit-tomato")'
                ></post-code>
                @로 시작하는 코드 이것은 데코레이터라 부르며, 데코레이터는
                클래스, 클래스 메소드 및 클래스 필드 선언의 동작을 변경할 수있는
                특수 표현식입니다. LitElement는 컴포넌트를 정의 할 때
                작성해야하는 상용구 코드의 양을 줄이는 데코레이터 세트를
                제공합니다.
                <post-link
                    href="https://lit-element.polymer-project.org/guide/decorators"
                    >lit-element 데코레이터 가이드</post-link
                >
                앞의 코드에서 사용된 데코레이터를 살펴보도록 하겠습니다.<br />
                @customElemenet("lit-tomato") 코드는 다음 코드와 동일합니다.
                <post-code
                    code="customElements.define('lit-tomato', Tomato);"
                    language="typescript"
                ></post-code>
                <post-link
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements"
                    >window.customElements MDN</post-link
                >
                <br />
                Tomato라는 LitElement 를 <code>${"<lit-tomato>"}</code>처럼
                사용할 수 있도록 정의해주는 역활을 합니다. 이때 엘리먼트의
                이름을 지정할때 '-'는 필수로 들어가야합니다. 이름에 '-' 가
                없다면 다음 그림과 같은 빨간 줄을 보게 될 것입니다.
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628045194/lit-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-04_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_11.45.34_k92ota.png"
                    alt="웹 컴포넌트 이름 규칙"
                ></post-image>
                타입스크립와 데코레이터를 함께 사용하기 위해서 간단한 설정이
                필요했습니다. <br />tsconfig에서 experimentalDecorators 값을
                true로 변경해 주었고,
                <post-code
                    code='"experimentalDecorators": true,'
                    language="typescript"
                    filename="tsconfig.json"
                ></post-code>
                .babelrc에서 데코레이터를 사용하기위한 바벨 플러그인들을 설치해
                추가해 주었습니다.
                <post-code
                    .code=${babelrc}
                    language="typescript"
                    filename=".babelrc"
                ></post-code>
                @query 등 다른 데코레이터는 다음 포스팅에서 변수 사용과 함께
                사용해보도록 하겠습니다.<br />
                마지막으로 다음과 같이 엘리먼트의 타입을 선언해 줌으로써 다른
                파일에서 커스텀 웹 컴포넌트를 찾을 수 있게 되었습니다.
                <post-code
                    .code=${globalDeclare}
                    language="typescript"
                ></post-code>
                'lit-potato'라는 이름만 다른 파일을 만들어 html안에서
                <code>${"<lit-tomato>"}</code>를 사용해 보도록 하겠습니다.
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628048374/lit-blog/lit-code_qs3moz.png"
                    alt="lit type 자동완성"
                ></post-image>
                타입 조회는 할 수 있지만 자동으로 import가 되지 않으니 만들어준
                웹 컴포넌트를 다른 파일에서 사용하려면 import를 해주어야 합니다.
                <post-code
                    code='import "./lit-tomato";'
                    language="typescript"
                ></post-code>
                마찬가지로 index.html에서
                <code>${"<lit-tomato>"}</code>를 사용 할 수 있도록 index.ts에서
                import 해주어야 합니다.
                <post-code
                    code='import "./pages/lit-tomato";'
                    language="typescript"
                    filename="index.ts"
                ></post-code>
                여기까지 간단한 lit-element의 구성을 살펴 보았습니다. 다시
                보자면 LitElement 를 확장한 클래스는 html 템플릿을 리턴하는 웹
                컴포넌트를 리턴합니다. 이 클래스를
                <code>${"<lit-tomato>"}</code>라는 커스텀 엘리먼트로 지정하였고
                index.ts에서 lit-tomato를 import하여 index.html에서 사용한
                <code>${"<lit-tomato>"}</code> 커스텀 엘리먼트를 사용할 수 있게
                되었습니다. 다음 포스팅에서는 본격적으로 property를 사용하여
                변수 사용 및 뷰의 변화를 주는 것을 해보도록 하겠습니다.
            </post-body>`;
    }
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-tutorial-1": LitTutorial1;
    }
}
