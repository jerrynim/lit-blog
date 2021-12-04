import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import "@components/post";
import { withPost } from "@lib/decorators";

@customElement("front-end-back-end")
@withPost
export class FrontEndBackEnd extends LitElement {
    protected render() {
        return html`<post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1633613602/lit-blog/frontbackend_zklxwy.jpg"
            ></post-head-image>
            <post-head>
                <h1>프론트엔드 백엔드</h1>
                <post-tag>프론트엔드 백엔드</post-tag>
                <post-date>2021-10-07</post-date>
            </post-head>
            <post-body>
                프론트엔드 와 백엔드의 가 무엇인지, 어떤 일을 하고 필요한 역량은
                무엇인지 저의 생각을 적어보도록 하겠습니다.
                <post-title subTitle>프론트엔드</post-title>
                프론트엔드엔드(Front-End)와 백엔드(Back-End)의 차이점에 대해
                알아보도록 하겠습니다. 이전에는 프론트엔드라는 구분이 존재하지
                않았다가 생기게 되었습니다. 이는 요즘 시대에는 간단한 정적 웹
                페이지가 아닌 동적 웹 페이지를 제작하게 되는데, 이에 따라 필요한
                기술이 전문성을 지니게 되면서 프론트엔드 개발자라는 직군이
                분류가 되기 시작했습니다.<br />
                <post-blockquote>프론트엔드가 하는 일</post-blockquote>
                프론트엔드 개발자가 하는일 프론트엔드 개발자는 주로 어플리케이션
                개발에서 사용자가 마주하는 화면을 만들게 됩니다. 어플리케이션의
                화면 제작, 라우팅, 상태 관리, API를 통해 받은 데이터를 바인딩
                하는 등의 작업을 통해 사용자에게 데이터를 제공하고 인터액션이
                가능하도록 합니다.
                <post-blockquote>프론트엔드의 역량</post-blockquote>
                앞에서의 프론트엔드 개발자로서의 일을 하기 위해서는 화면을
                출력하기 위한 Html, Css, Javascript 에 대한 지식이 필요합니다.
                웹 개발자의 경우에는 브라우저에 대한 이해가 필요하며, 앱
                개발자의 경우 경우에 따라서는 IOS 및 Android에 대한 이해도
                필요합니다.<br />
                현재 프론트엔드 개발에는 프레임워크를 사용하는 것이 대두되었고,
                대표적으로 Angular, Vue, React 가 있습니다. 이 중 React가 가장
                많이 사용되며 사랑받고 있습니다.
                <post-title subTitle>백엔드</post-title>
                백엔드 개발자는 유저가 사용하는 화면에서는 보이지 않지만
                처리되는 일들을 합니다.
                <post-blockquote>백엔드가 하는일</post-blockquote>
                백엔드 개발자는 어플리케이션에서 다루는 데이터 및 서버, API를
                관리하게 됩니다. 사용자로부터 받은 데이터 혹은 가공된 데이터를
                처리 및 저장하여 데이터베이스를 관리하며, 많은 양의 트래픽에도
                안정적인 서버를 구축 및 배포하며, 화면에 출력하기 위한 데이터를
                보내주는 API를 제작합니다.
                <post-blockquote>백엔드의 역량</post-blockquote>
                백엔드 개발자는 데이터베이스에 대한 지식과 데이터를 다루기 위한
                SQL, 서버를 구축하기 위한 지식이 필요합니다. 사용하는 언어
                Python ,Node.js, Go ,Rust, Java 등 자유롭게 사용할 수 있습니다.
                서버를 배포하기 위해 클라우드 플랫폼을 사용하는 기술, Nginx 등의
                트래픽을 처리하기 위한 기술도 필요합니다. SSL 및 도메인, 보안
                등의 서버를 위한 기술 또한 필요합니다.
            </post-body>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "front-end-back-end": FrontEndBackEnd;
    }
}
