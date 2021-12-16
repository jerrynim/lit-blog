import { html } from "lit";

export const _yield = html`<post-link
        href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield"
        >yield</post-link
    >는 제네레이터의 함수를 다음 next()가 호출 될때까지 중지시킵니다.`;

export default {
    yield: _yield,
} as { [key: string]: any };
