import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("async-await")
@withPost
export class AsyncAwait extends LitElement {
    protected render() {
        return html`<post-head-image src=""></post-head-image>
            <post-head>
                <h1>async await</h1>
                <post-tag>javascript async await promise</post-tag>
                <post-date>2021-12-14</post-date>
            </post-head>
            <post-body
                >설명에 앞서 이 글은 asnyc / await 사용에 익숙한 사람을
                대상으로합니다.
                <br />
                <post-definition>yield</post-definition>
                는 제네레이터 함수를 일시정지 시킵니다.
            </post-body>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "async-await": AsyncAwait;
    }
}
