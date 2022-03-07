import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("yarn-berry-typescript-cannot-find-module")
@withPost
export class YarnBerryTypescriptCannotFindModule extends LitElement {
    protected render() {
        return html`<post-head-image src=""></post-head-image>
            <post-head>
                <h1>yarn berry cannot find module 해결</h1>
                <post-tag>yarn berry cannot find module vscode</post-tag>
                <post-date>2022-03-07</post-date>
            </post-head>
            <post-body>
                vscode에서 yarn berry 사용시 설치한 모듈들을 찾을 수 없다는
                에러가 뜰때 다음과 같이 실행하면 해결할 수 있다.

                <post-code .code=${code1}></post-code>

                yarn berry 공식 문서에서는 다음과 같이 설명한다.<br />
                Smart IDE(예: VSCode 또는 IntelliJ)는 Plug'n'Play 설치 를 사용할
                때 TypeScript가 작동하도록 특별한 구성이 필요합니다 .<br />

                yarn sdks vscode vim지원되는 지정된 편집기에 대한 기본 SDK와
                설정을 모두 생성하는 데 사용 합니다.

                <post-title subTitle>[참고자료]</post-title>
                https://yarnpkg.com/getting-started/editor-sdks<br />
                https://www.zigae.com/yarn2/
            </post-body>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "yarn-berry-typescript-cannot-find-module": YarnBerryTypescriptCannotFindModule;
    }
}

const code1 = `yarn add @yarnpkg/sdks -D
yarn dlx @yarnpkg/sdks vscode
`;
