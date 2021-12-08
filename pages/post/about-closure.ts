import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("about-closure")
@withPost
export class Closure extends LitElement {
    protected render() {
        return html`<post-head-image src=""></post-head-image>
            <post-head>
                <h1>클로저</h1>
                <post-tag>자바스크립트 클로저 closure</post-tag>
                <post-date>2021-12-08</post-date>
            </post-head>
            <post-body>
                <post-link
                    href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures"
                    >MDN 에서</post-link
                >
                <code
                    >클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.</code
                >
                라고 설명을 하는데 한국말이지만 무슨말인지 모르겠다. 이러니
                면접에서 물어봐도 설명하기가 참 힘들다. 클로저란 자식 이번에
                쉽게 대답할 수 있도록해보자. Closures are inner functions that
                have access to the outer function’s variables and parameters.
                Even after the outer function’s execution is finished, the inner
                functions have access to the variables in the outer function.
                Closures are everywhere in JavaScript and you’ve probably been
                using it ev
            </post-body>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "about-closur": Closure;
    }
}
