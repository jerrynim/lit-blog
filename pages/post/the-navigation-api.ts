import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("the-navigation-api")
@withPost
export class TheNavigationApi extends LitElement {
    protected render() {
        return html`<post-head-image src=""></post-head-image>
            <post-head>
                <h1>(번역)Modern client-side routing: the Navigation API</h1>
                <post-tag
                    >client-side routing Navigation API App History</post-tag
                >
                <post-date>2022-06-11</post-date>
            </post-head>
            <post-body>
                원본 링크 :
                <post-link
                    href="https://developer.chrome.com/docs/web-platform/navigation-api/"
                    >https://developer.chrome.com/docs/web-platform/navigation-api/</post-link
                >
                <br />
                <post-blockquote
                    >이 API는 개발 중에는 "앱 기록 API"로 알려졌지만 이후
                    "내비게이션 API"로 이름이 변경되었습니다.
                </post-blockquote>
                단일 페이지 애플리케이션 또는 SPA는 핵심 기능으로 정의됩니다.
                즉, 서버에서 완전히 새로운 페이지를 로드하는 기본 방법 대신
                사용자가 사이트와 상호 작용할 때 콘텐츠를 동적으로 다시
                작성합니다.<br />
                SPA는 History API를 통해(또는 제한된 경우에 사이트의 #hash
                부분을 조정하여) 이 기능을 제공할 수 있었지만 SPA가 표준이 되기
                오래 전에 개발 된 투박한 API 입니다. 완전히 새로운 접근.
                Navigation API는 단순히 History API의 거친 부분을 패치하려고
                하는 것이 아니라 이 공간을 완전히 점검하는 제안된 API입니다.
                (예를 들어, Scroll Restoration 은 History API를 재발명하지 않고
                패치했습니다.)
                <post-title subTitle>사용 예</post-title>
                Navigation API를 사용하려면 먼저 전역
                <code>navigation</code>개체에 "navigate" 리스너를 추가하십시오.
                이 이벤트는 기본적으로 중앙 집중식 입니다. 사용자가 작업(예:
                링크 클릭, 양식 제출 또는 뒤로가기)을 수행했는지 또는 탐색이
                프로그래밍 방식으로 트리거되었는지(예: 사이트의 암호). 대부분의
                경우 코드가 해당 작업에 대한 브라우저의 기본 동작을 재정의할 수
                있습니다. SPA의 경우 이는 사용자를 동일한 페이지에 유지하고
                사이트 콘텐츠를 로드하거나 변경하는 것을 의미합니다.
                <br />
                <br />
                <code>NavigateEvent</code>는 목적지 URL과 같은 탐색에 대한
                정보가 포함된 "탐색" 수신기로 전달되며, 이를 통해 한 곳에서
                탐색에 응답할 수 있습니다. example.com의 기본 "탐색" 리스너는
                다음과 같습니다.
                <post-code .code=${code1} language="javascript"></post-code>
                다음 두 가지 방법 중 하나로 탐색을 가로챌 수 있습니다.

                <ul>
                    <post-list
                        >탐색을 처리하기 위해 호출
                        <code>transitionWhile()</code>(위에서 설명한 대로).
                    </post-list>
                    <post-list
                        >를 호출 preventDefault()하면 탐색이 완전히 취소될 수
                        있습니다.
                    </post-list>
                </ul>
                이 예제는 <code>transitionWhile()</code>비동기 함수에서 생성된
                약속으로 이벤트를 호출합니다. 이 메서드를 호출하면 브라우저는
                코드가 사이트의 다음 상태를 구성할 것임을 알고 있습니다.
                <code>navigation.transition</code>이렇게 하면 다른 코드에서 전환
                진행 상황을 추적하는 데 사용할 수 있는 전환 개체가 생성됩니다 .

                <br />
                둘 다
                <code>transitionWhile()</code
                >일반적<code>preventDefault()</code>으로 허용되지만 호출할 수
                없는 경우가 있습니다. <code>transitionWhile()</code>탐색이 교차
                출처 탐색인 경우(예: 도메인을 떠나는 경우) 탐색을 처리할 수
                없습니다 . <code>preventDefault()</code>사용자가 브라우저에서
                뒤로 또는 앞으로 버튼을 누르고 있으면 탐색을 취소할 수 없습니다
                . 사이트에서 사용자를 가둘 수 없어야 합니다. (이것은 GitHub에서
                논의되고 있습니다 .)

                <br />
                탐색 자체를 중지하거나 차단할 수 없더라도 "탐색" 이벤트는 계속
                발생합니다. 유용한 정보 이므로 예를 들어 사용자 가 사이트를
                떠나고 있음을 나타내는 Analytics 이벤트를 코드에 기록할 수
                있습니다.

                <post-title subTitle
                    >플랫폼에 다른 이벤트를 추가하는 이유는
                    무엇입니까?</post-title
                >
                "탐색" 이벤트 리스너는 SPA 내에서 URL 변경 처리를 중앙
                집중화합니다. 이것은 이전 API를 사용하는 어려운 제안입니다.
                History API를 사용하여 자신의 SPA에 대한 라우팅을 작성한 적이
                있다면 다음과 같은 코드를 추가했을 수 있습니다.
                <post-code .code=${code2} language="javascript"></post-code>
                이것은 괜찮지만 완전하지는 않습니다. 링크는 페이지에서 왔다 갔다
                할 수 있으며 사용자가 페이지를 탐색할 수 있는 유일한 방법은
                아닙니다. 예를 들어 양식을 제출하거나
                <post-link
                    href="https://developer.mozilla.org/ko/docs/Web/HTML/Element/map"
                    >이미지 지도</post-link
                >를 사용할 수도 있습니다 . 귀하의 페이지는 이러한 문제를 처리할
                수 있지만 새로운 Navigation API가 달성하는 것과 같이 단순화할 수
                있는 가능성의 긴 꼬리가 있습니다.
                <br />
                <br />
                개인적으로 History API는 종종 이러한 가능성에 도움이 될 수
                있다고 생각합니다 . 그러나 실제로는 사용자가 브라우저에서 뒤로
                또는 앞으로를 누를 때 응답하고 URL을 푸시하고 교체하는 두 가지
                표면 영역만 있습니다. 위에서 설명한 것처럼 예를 들어 클릭
                이벤트에 대한 리스너를 수동으로 설정하는 경우를 제외하고는
                "탐색"과 유사하지 않습니다.

                <post-title subTitle>이행</post-title>
                코드가 <code>transitionWhile()</code>"navigate" 리스너 내에서
                호출하면 브라우저에 이제 새로운 업데이트된 상태를 위해 페이지를
                준비하고 있음을 알립니다. 탐색에 시간이 걸릴 수 있습니다. 당신
                이 <code>Promise</code>전달하는
                <code>transitionWhile()</code>것은 탐색에 걸리는 시간을
                브라우저에 알려줍니다.
                <br />
                <br />
                따라서 이 API는 브라우저가 이해하는 의미론적 개념을 도입합니다.
                SPA 탐색은 현재 시간이 지남에 따라 문서를 이전 URL 및 상태에서
                새 URL로 변경하면서 발생하고 있습니다. 여기에는 접근성을
                포함하여 여러 가지 잠재적인 이점이 있습니다. 브라우저는 탐색의
                시작, 끝 또는 잠재적 실패를 표시할 수 있습니다. 예를 들어
                Chrome은 기본 로딩 표시기를 활성화하고 사용자가 중지 버튼과 상호
                작용할 수 있도록 합니다. (현재 사용자가 뒤로/앞으로 버튼을 통해
                탐색할 때는 발생하지 않지만 곧 수정될 예정 입니다.)

                <post-title subTitle>전환 성공 및 실패</post-title>
                "탐색" 이벤트가 완료되면 탐색 중인 URL이 적용됩니다.<code
                    >transitionWhile()</code
                >
                을(를) 호출한 경우에도 즉시 발생합니다 .
                <post-code .code=${code3}></post-code>
                <code>transitionWhile()</code>에 약속을 전달하면 다음 두 가지 중
                하나가 발생 합니다.
                <ul>
                    <post-list>
                        이것이 Promise충족되면(또는 호출하지 않은
                        transitionWhile()경우) Navigation API는
                        "navigatesuccess"를 Event.
                    </post-list>
                    <post-list>
                        거부 하면 PromiseAPI는 "navigateerror"를 ErrorEvent.
                    </post-list>
                </ul>
                이러한 이벤트를 통해 코드는 중앙 집중식으로 성공 또는 실패를
                처리할 수 있습니다. 예를 들어 다음과 같이 이전에 표시된 진행률
                표시기를 숨겨 성공을 처리할 수 있습니다.
                <post-code .code=${code4}></post-code>
                <code>transitionWhile</code> 또는 실패 시 오류 메시지를 표시할
                수 있습니다(즉, 거부 로 <code>Promise</code>전달 된 경우).
                <post-code .code=${code5} language="javascript"></post-code>
                를 수신하는 "navigateerror" 이벤트 리스너
                <code>ErrorEvent</code>는 새 페이지를 설정하는 코드에서 오류를
                수신하도록 보장하므로 특히 편리합니다.
                <code>await fetch()</code>네트워크를 사용할 수 없는 경우 오류가
                결국 로 라우팅된다는 사실만 알 수 있습니다
                <code>"navigateerror".</code>
                <post-title subTitle>중단 신호</post-title>
                새 페이지를 준비하는 동안 비동기식 작업을 수행할 수 있기 때문에
                코드가 처리하는 전환(특정 URL 또는 상태를 로드하기 위해)이
                선점되거나 오래된 것으로 간주될 수 있습니다. 사용자가 방금 다른
                링크를 클릭했거나 코드가 다른 탐색을 수행하기 때문에 발생할 수
                있습니다.
                <br />
                <br />
                이러한 가능성을 처리하기 위해 "탐색" 리스너에 전달된 이벤트에는
                .인 <code>signal</code>속성이 포함되어 있습니다
                <code>AbortSignal.</code>
                자세한 내용은
                <post-link
                    href="https://developer.chrome.com/blog/abortable-fetch/"
                    >중단 가능한 가져오기</post-link
                >
                를 참조하세요 . 짧은 버전은 기본적으로 작업을 중지해야 할 때
                이벤트를 발생시키는 개체를 제공한다는 것입니다. 특히, 탐색이
                선점된 경우 기내 네트워크 요청을 취소 하는
                <code>AbortSignal</code>에 대한 모든 호출에 전달할 수 있습니다 .
                <code>fetch()</code>이것은 사용자의 대역폭을 절약하고 에서
                <code>Promise</code>반환된 것을 거부합니다 <code>fetch()</code>.
                예를 들어 현재 유효하지 않은 페이지 탐색을 표시하도록 DOM을
                업데이트하는 다음 코드를 방지합니다. <br /><br />
                <code>fetch()</code>구체적인 예를 들어, 청취자 의 호출로 고양이
                밈 페이지를 로드하도록 설정할 수 있습니다 . 이를 전달하면
                사용자가 완료 <code>signal</code>되기 전에 사이트에서 다른
                페이지를 대신 로드하기로 결정한 경우 가져오기가 취소됩니다 .
                <code>fetch</code>구경하다:
                <post-code .code=${code6} language="typescript"></post-code>
                <post-title subTitle>탐색 항목</post-title>
                <code>navigation.currentEntry</code>현재 항목에 대한 액세스를
                제공합니다. 이것은 사용자가 현재 어디에 있는지를 설명하는
                개체입니다. 이 항목에는 현재 URL, 시간 경과에 따라 이 항목을
                식별하는 데 사용할 수 있는 메타데이터 및 개발자 제공 상태가
                포함됩니다. <post-code .code=${code7}></post-code>
            </post-body>`;
    }
}

const code1 = `navigation.addEventListener('navigate', navigateEvent => {
  switch (navigateEvent.destination.url) {
    case 'https://example.com/':
      navigateEvent.transitionWhile(loadIndexPage());
      break;
    case 'https://example.com/cats':
      navigateEvent.transitionWhile(loadCatsPage());
      break;
  }
});`;

const code2 = `function updatePage(event) {
    event.preventDefault(); // we're handling this link
    window.history.pushState(null, '', event.target.href);
    // TODO: set up page based on new URL
  }
  const links = [...document.querySelectorAll('a[href]')];
  links.forEach(link => link.addEventListener('click', updatePage));`;

const code3 = `주의
즉 navigation.currentEntry, location.href, 등이 즉시 업데이트됩니다. 이는 새 데이터를 가져오거나 새 하위 리소스를 로드할 때 상대 URL 확인과 같은 것에 영향을 줍니다.

많은 웹 및 기본 응용 프로그램은 들어오는 콘텐츠에 대한 일종의 자리 표시자로 페이지를 즉시 업데이트합니다. 그러나 페이지의 콘텐츠도 즉시 업데이트하지 않으면 현재 항목 및 URL에 대한 애플리케이션의 프로그래밍 방식 보기와 동기화되지 않아 까다로울 수 있습니다.

이러한 문제는 GitHub에서 논의되고 있습니다 .`;

const code4 = `navigation.addEventListener('navigatesuccess', event => {
    loadingIndicator.hidden = true;
  });`;

const code5 = `navigation.addEventListener('navigateerror', event => {
    loadingIndicator.hidden = true; // also hide indicator
    showMessage(&backtick;Failed to load page: &dollar;{event.message}&backtick;);
  });`;

const code6 = `navigation.addEventListener('navigate', navigateEvent => {
    if (isCatsUrl(navigateEvent.destination.url)) {
      const processNavigation = async () => {
        const request = await fetch('/cat-memes.json', {
          signal: navigateEvent.signal,
        });
        const json = await request.json();
        // TODO: do something with cat memes json
      };
      navigateEvent.transitionWhile(processNavigation());
    } else {
      // load some other page
    }
  });`;

const code7 = `Navigation API를 명시적으로 사용하지 않는 사이트에도 "현재 항목"이 있으며, History API history.pushState()및 에서 이전 방법을 사용하는 경우 항목이 업데이트되거나 대체됩니다 history.replaceState().`;

declare global {
    interface HTMLElementTagNameMap {
        "the-navigation-api": TheNavigationApi;
    }
}
