import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("make-array-length")
@withPost
export class MakeArrayLength extends LitElement {
    protected render() {
        return html`<post-head-image src=""></post-head-image>
            <post-head>
                <h1>간단한 원하는 길이의 배열 만들기</h1>
                <post-tag>simple make array length array from</post-tag>
                <post-date>2022-04-12</post-date>
            </post-head>
            <post-body>
                간단하게 원하는 길이의 배열을 만드는 방법:<br />
                Array.from 메서드를 이용합니다.
                <post-code .code=${code1} language="typescript"></post-code>

                <post-code
                    .code=${code2}
                    language="typescript"
                    filename="결과"
                ></post-code>

                끝
            </post-body>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "make-array-length": MakeArrayLength;
    }
}

const code1 = "const array = Array.from({ length: 20 }, (_, index) => index);";

const code2 = `[
  0,  1,  2,  3,  4,  5,  6,
  7,  8,  9, 10, 11, 12, 13,
 14, 15, 16, 17, 18, 19
]`;
