import { withPost } from "@lib/decorators";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import "@components/post";

@customElement("lit-tutorial-4")
@withPost
export class LitTutorial4 extends LitElement {
    protected render() {
        return html`<post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg"
            ></post-head-image>
            <post-head>
                <h1>Lit 튜토리얼 (4/6)</h1>
                <post-tag>lit lit-html lit-elemnt tutorial lifecycle</post-tag>
                <post-date>2021-07-25</post-date>
            </post-head>
            <post-body>
                이번 포스팅에는 LitElement에서 바인딩(bind) 하는 것을 알아보도록
                하겠습니다. lit-html에서는 엘리먼트에 자바스크립트 표현식을
                바인딩 하는 방법이 특별합니다.
                <post-link
                    href="https://lit-html.polymer-project.org/guide/template-reference#binding-types"
                    >> lit-html-biding</post-link
                >
                예제를 통해 살펴보도록 하겠습니다.
                <post-title subTitle>property</post-title>
                <code>${"<input>"}</code> 태그에 값을 변경하고 저장할 수 있도록
                value와 change 이벤트를 넣어주도록 하겠습니다.
                <post-code .code=${code1} language="typescript"></post-code>
                <code>${"<input>"}</code>태그에 .value라는 값으로 value
                property를 넣어주었습니다. 여기서 속성에 ' . '이 붙어있다면 값은
                <code>${"<input>"}</code>태그의 value property에 바인딩 되게
                됨을 의미합니다.<br />

                ' . '은 lit-html에서 property를 바인딩 할 때 사용됩니다.
                <post-title subTitle>event listerner </post-title>
                @keyup을 넣게 되면 <code>${"<input>"}</code>의 'keyup'에
                이벤트에 onChange라는 이벤트 헨들러를 추가해 주게 됩니다.
                결과적으로, <code>${"<input>"}</code>의 keyup 이벤트가 발생할 때
                마다 value property가 변경되며 콘솔이 찍히게 됩니다.
                <post-title subTitle>attribute</post-title>
                이번에는 <code>${"<input>"}</code>의 '.value' 속성을 'value'로
                변경해보도록 하겠습니다.
                <post-code .code=${code2} language="typescript"></post-code>
                속성에 ' . '을 제거하였을때 어떤 차이가 있는지 개발자도구의
                'Element'탭을 보면 직접적으로 볼 수 있습니다.
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628509604/lit-blog/attribute_oflsk8.png"
                    alt="lit-element attribute 차이"
                    width=${200}
                ></post-image>
                'value=' 와 같이 속성이름 앞에 기호가 없다면 attribute로 바인딩
                되게 됩니다.<br />
                attribute를 전달해 주면 그림과 같이 html 속성으로 추가되는걸 볼
                수 있습니다. 몇 가지 attribute를 더 사용해 보도록 하겠습니다.
                <post-code .code=${code3} language="typescript"></post-code>
                이러한 값들을 attribute로 바인딩 할 수 있습니다.
                <post-title subTitle>boolean attribute</post-title>
                이번에는<code>${"<input>"}</code> 태그에 'disabled'를 추가해
                보도록 하겠습니다.
                <post-code .code=${code4} language="typescript"></post-code>
                'disabled'를 추가하려하니 다음과 같은 경고가 나오게 됩니다.
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628512409/lit-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.33.09_qpb13r.png"
                    alt="disabled 사용시 경고"
                ></post-image>
                해당 attribute는 boolean 타입이므로 boolean 바인딩을 사용하라는
                경고 입니다. boolean 바인딩을 사용하기 위해서는 속성앞에 '?' 를
                추가해 주어야 합니다.
                <post-code .code=${code5} language="typescript"></post-code>
                이렇게 lit-html의 엘리먼트에 값을 바인딩 하는 것을 살펴
                보았습니다. 그렇다면 커스텀 엘리먼트에서는 어떻게 사용해야
                할까요?<br />
                커스텀 엘리먼트에서는 값들을 어떻게 바인딩하여 사용 할 수 있는지
                알아보도록 하겠습니다.
                <post-title subTitle>custom element</post-title>
                앞에서 <code>${"<input>"}</code> 태그를 사용하여 property를
                바인딩 하였드이 커스텀 엘리먼트를 만들어 property를 바인딩
                해보도록 하겠습니다. 우선 property를 가진
                <code>${"<lit-tomato>"}</code> 라는 엘리먼트를 만들어
                <code>${"<child-tomato>"}</code> 라는 컴포넌트를 바인딩 시키도록
                하겠습니다. <br /><br />
                앞의 코드에서 id는 attribute, .value는 property, @change는 event
                Listener, ?disabled는 boolean Attribute로
                <code>${"<input>"}</code> 태그에 바인딩 되었습니다. 만약 앞에
                기호를 붙이지 않는다면 전부 attribute로 바인딩 되게 됩니다.
                <br /><br />
                이번에는 커스텀 엘리먼트를 만들어 속성들을 바인딩해보도록
                하겠습니다.
                <post-code
                    .code=${code6}
                    language="typescript"
                    filename="pages/lit-tomato.ts"
                ></post-code>
                <post-code
                    .code=${code7}
                    language="typescript"
                    filename="pages/child-tomato.ts"
                ></post-code>
                <code>${"<lit-tomato>"}</code>에 앞에서와 같이 전달할 property를
                만들도록 하겠습니다.
                <post-code .code=${code8} language="typescript"></post-code>
                <code>${"<input>"}</code>에서와 동일하게 속성을 전달해 보도록
                하겠습니다.
                <post-code .code=${code9} language="typescript"></post-code>
                그리고 child-tomato가 값을 받았는지 확인해 보도록 하겠습니다.
                <post-code
                    .code=${code10}
                    language="typescript"
                    filename="components/child-tomato.ts"
                ></post-code>
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628513748/lit-blog/result_mjkgyq.png"
                    alt="자식이 받은 값"
                    width=${300}
                ></post-image>
                attribute 인 'id'와, property인 '.value'값이 출력 된 것을 확인
                할 수 있었습니다. 이벤트 헨들러와 disabled 값은 어떻게 받아와야
                할까요?
                <br /><br />
                이벤트 헨들러를 @change로 전달하게 되면 onChange 함수를 값으로
                전달받는 것이 아닌, <code>${"<child-tomato>"}</code>에 change 의
                change 이벤트에 이벤트 리스너가 추가 됨을 의미합니다. 이를
                확인하기위해 event를 발생시켜 보도록 하겠습니다.
                <post-code
                    .code=${code11}
                    language="typescript"
                    filename="components/child-tomato.ts"
                ></post-code>
                콘솔에 'tomato'가 출력 되는 것을 확인 할 수 있었습니다.<br />
                좀 더 직접적으로 확인해 보기위해 이벤트 이름을 바꿔보도록
                하겠습니다!
                <post-code
                    .code=${code12}
                    language="typescript"
                    filename="pages/lit-tomato.ts"
                ></post-code>
                <post-code .code=${code13} language="typescript"></post-code>
                동일하게 'tomato'가 출력되는 것을 확인 할 수 있었습니다.<br />
                그렇다면 ${"<child-tomato>"}의 ${"<input>"}태그에 onChange를
                전달하여 사용하려면 어떻게 해야할가요?<br />
                ${"<lit-tomato>"}에서 '@change'를 '.onchange'로 변경해 보도록
                하겠습니다.
                <post-code
                    .code=${code14}
                    language="typescript"
                    filename="pages/lit-tomato.ts"
                ></post-code>
                <post-code
                    .code=${code15}
                    language="typescript"
                    filename="components/child-tomao.ts"
                ></post-code>
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628596277/lit-blog/onchange_wryjcb.png"
                    width=${300}
                    alt="자식이 받은 onchange이벤트"
                ></post-image>
                이벤트 헨들러를 property로 전달해주었습니다. 전달받은 이벤트
                헨들러를 ${"<input>"}태그의 @keyup 속성에 넣어주도록 하겠습니다.
                그리고 전달받은 value를 띄우도록 하겠습니다.
                <post-code .code=${code16} language="typescript"></post-code>
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628596419/lit-blog/keyup_iurtwj.png"
                    width=${300}
                    alt="keyup으로 인풋값 변경하기"
                ></post-image>
                인풋안에 값을 입력하면 콘솔에 입력값이 출력 되는 걸 확인 할 수
                있습니다.하지만 'input value is tomaoto'는 변경되지 않는 걸로
                보아 <code>${"<lit-tomato>"}</code>의 value가
                <code>${"<child-tomato>"}</code>에 바인딩 되지 않았다는 걸 알수
                있습니다. 바인딩 시키기위해 <code>${"<child-tomato>"}</code>에
                value property를 만들어 주도록 하겠습니다.
                <post-code
                    .code=${code17}
                    language="typescript"
                    filename="components/child-tomato.ts"
                ></post-code>
                이제 인풋에 값을 입력하면 ${""}태그안의 this.value 값도 변경되
                는것을 확인 할 수 있습니다.
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628596576/lit-blog/%E1%84%8C%E1%85%A1%E1%84%89%E1%85%B5%E1%86%A8value_hy7yku.png"
                    width=${300}
                    alt="자식의 property"
                ></post-image>
                이처럼 커스텀 엘리먼트에 property를 바인딩 하기 위해선 커스텀
                엘리먼트에서 property를 선언해 주어야 합니다.
                <br /><br />
                이전에 '?disabled'로 전달해준 속성의 값이 undefined 였습니다. '
                ?' 기호는 attribute이기에 property처럼 값을 받지 못하였습니다.
                disabled 값을 바인딩하기 위해 커스텀 엘리먼트에 'disabled'라는
                이름을 가진 attribute가 필요합니다.
                <code>>${"<child-tomato>"}</code>에 'disabled'라는 attribute를
                가진 property를 만들어 보도록 하겠습니다.
                <post-code .code=${code18} language="typescript"></post-code>
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628597209/lit-blog/disabled-input_cnnbfz.png"
                    width=${100}
                    alt="disabled-input"
                ></post-image>
                <code>${"<lit-tomato>"}</code>의 disabled 값은 'true'로 disabled
                값이 잘 적용 된 것을 확인할 수 있습니다.
                <post-title subTitle>children </post-title>
                이번에는 <code>${"<child-tomato>"}</code>에게 html 템플릿을
                전달해보도록 하겠습니다.
                <post-code
                    .code=${code19}
                    language="typescript"
                    filename="pages/lit-tomato.ts"
                ></post-code>
                <post-code
                    .code=${code20}
                    language="typescript"
                    filename="components/child-tomato.ts"
                ></post-code>
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628597444/lit-blog/%E1%84%8C%E1%85%A1%E1%84%89%E1%85%B5%E1%86%A8_fjdwka.png"
                    width=${100}
                    alt="전달할 자식: 텍스트"
                ></post-image>
                자식을 나타내려면 어떻게 해야할까요?<br />
                첫번째 방법은 간단하게 this.children을 사용하면 됩니다.
                <post-code .code=${code21} language="typescript"></post-code>
                다른 방법은 쉐도우 돔의 <code>${"<slot>"}</code>태그를 사용하는
                것입니다.<br />
                <post-link
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot"
                    >> slot MDN</post-link
                >
                <post-title subTitle>마치며...</post-title>
                Lit-html에서 property를 바인딩 하는 것을 알아 보았습니다.
                바인딩하는 법만 알게된다면 투두리스트 정도의 웹을 만드는데 큰
                어려움을 없을 거라 생각합니다.<br />
                다음 포스팅에서는 redux를 사용하여 전역 상태관리를 해보려고
                합니다.
            </post-body>`;
    }
}

const code1 = `@customElement("lit-tomato")
class Tomato extends LitElement {
  @property() value = "";

  onChange(e) {
    this.value = e.target.value;
    console.log(e.target.value);
  }

  render() {
    return html&backtick; <input .value="&dollar;{this.value}" @keyup="&dollar;{this.onChange}" /> &backtick;;
  }
}`;

const code2 = `return html&backtick; <input value="&dollar;{this.value}" @keyup="&dollar;{this.onChange}" /> &backtick;;
`;

const code3 = `render() {
  return html&backtick;
    <input
      id="my-input"
      class="my-class"
      type="text"
      style="color:blue;"
      .value="&dollar;{this.value}"
      @keyup="&dollar;{this.onChange}"
    />
    &backtick;
}`;

const code4 = `<input
.value="&dollar;{this.value}"
@keyup="&dollar;{this.onChange}"
disabled="${false}"
/>`;

const code5 = `@property() value = "4";
@property({ type: Boolean }) disabled = false;

onChange(e) {
  this.value = e.target.value;
}

render() {
  return html&backtick;
    <input
      id="my-input"
      .value="&dollar;{this.value}"
      @change="&dollar;{this.onChange}"
      ?disabled="&dollar;{this.disabled}"
    />
    &backtick;;
}`;

const code6 = `import { LitElement, html, customElement, property } from "lit-element";
import "../components/child-tomato";

@customElement("lit-tomato")
class Tomato extends LitElement {
  render() {
    return html&backtick; <child-tomato></child-tomato> &backtick;;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}`;

const code7 = `import { LitElement, html, customElement, property } from "lit-element";

@customElement("child-tomato")
class ChildTomato extends LitElement {
  render() {
    return html&backtick;
      <style></style>
      <h1>i'm child-tomato</h1>
      <input />
      &backtick;;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "child-tomato": ChildTomato;
  }
}`;

const code8 = `@property({ type: String }) value = "toamto";
@property({ type: Boolean }) disabled = true;

onChange(e) {
  this.value = e.target.value;
  console.log(e.target.value);
}`;

const code9 = `<child-tomato
id="my-input"
.value="&dollar;{this.value}"
@change="&dollar;{this.onChange}"
?disabled="&dollar;{this.disabled}"
></child-tomato>`;

const code10 = `class ChildTomato extends LitElement {
  //*connectedCallback은 커스텀 엘리먼트가 문서의 DOM에 처음 연결될 때 호출됩니다.
  connectedCallback() {
    super.connectedCallback();
    console.log(this.id);
    console.log(this.value);
    console.log(this.change);
    console.log(this.disabled);
  }`;

const code11 = `connectedCallback() {
    super.connectedCallback();

    this.dispatchEvent(new Event("change"));

    // console.log(this.id);
    // console.log(this.value);
    // console.log(this.change);
    // console.log(this.disabled);
  }`;

const code12 = `<child-tomato
  @jerrynim-custom-event="&dollar;{this.onChange}"
></child-tomato>`;
const code13 = `class ChildTomato extends LitElement {
  connectedCallback() {
    super.connectedCallback();

    this.dispatchEvent(new Event("jerrynim-custom-event"));`;

const code14 = `<child-tomato
.onchange="&dollar;{this.onChange}"
></child-tomato>`;

const code15 = `connectedCallback() {
  super.connectedCallback();
  console.log(this.onchange);
}`;

const code16 = `class ChildTomato extends LitElement {
  customFunction: any;

  render() {
    return html&backtick;
      <style></style>
      <h1>i'm child-tomato</h1>
      <input .value="&dollar;{this.value}" @keyup="&dollar;{this.customFunction}" />
      input value is &dollar;{this.value}
      &backtick;;
  }
}`;

const code17 = `class ChildTomato extends LitElement {
  @property({ type: String }) value = "";`;

const code18 = `@property({ type: Boolean, attribute: "disabled" }) disabledValue = false;

<input
   .value="&dollar;{this.value}"
   @keyup="&dollar;{this.customFunction}"
   ?disabled="&dollar;{this.disabledValue}"
 />`;

const code19 = `import { LitElement, html, customElement, property } from "lit-element";
import "../components/child-tomato";

@customElement("lit-tomato")
class Tomato extends LitElement {
  render() {
    return html&backtick;<child-tomato>자식</child-tomato>&backtick;;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}`;

const code20 = `import { LitElement, html, customElement, property } from "lit-element";

@customElement("child-tomato")
class ChildTomato extends LitElement {
  render() {
    return html&backtick;
      <style></style>
      <div>자식 :</div>
      &backtick;;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "child-tomato": ChildTomato;
  }
}
`;

const code21 = `class TomatoChild extends LitElement {
  render() {
    return html&backtick;
      <style></style>
      <div>&dollar;{this.children}</div>
      &backtick;;
  }
}`;

declare global {
    interface HTMLElementTagNameMap {
        "lit-tutorial-4": LitTutorial4;
    }
}
