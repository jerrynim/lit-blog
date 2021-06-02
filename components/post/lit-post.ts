import { LitElement, html, css } from "lit";
import { customElement, query } from "lit/decorators.js";
import { resetCss } from "@styles";
import "./post-head";
import "./post-body";
import "./post-title";

const addStructuredData = () => {
    return (Class: Function) => {
        //     Object.defineProperty(Class.prototype, "connectedCallback", {
        //         value: () => {
        //             const head = document.head;
        //             const script = document.createElement("script");
        //             script.type = "application/ld+json";

        //             script.appendChild(
        //                 document.createTextNode(`
        // { "@context": "https://schema.org",
        // "@type": "TechArticle",
        // "headline": "Extra! Extra! Read alla bout it",
        // "dependencies": "You must be at least a level 2 PRO to make this happen",
        // "proficiencyLevel": "Expert",
        // "alternativeHeadline": "This article is also about robots and stuff",
        // "image": "http://example.com/image.jpg",
        // "author": "Patrick Coombe",
        // "award": "Best article ever written",
        // "editor": "Craig Mount",
        // "genre": "search engine optimization",
        // "keywords": "seo sales b2b",
        // "wordcount": "1120",
        // "publisher": "Book Publisher Inc",
        // "url": "http://www.example.com",
        // "datePublished": "2015-09-20",
        // "dateCreated": "2015-09-20",
        // "dateModified": "2015-09-20",
        // "description": "We love to do stuff to help people and stuff",
        // "articleBody": "You can paste your entire post in here, and yes it can get really really long."
        // }

        Object.defineProperty(Class.prototype, "disconnectedCallback", {
            value: () => {
                const script = document.head.querySelector(
                    "script[type='application/ld+json']",
                );
                if (script) {
                    console.log("제거");
                    document.head.removeChild(script);
                }
            },
        });
    };
};

@customElement("lit-post")
@addStructuredData()
export class LitPost extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                width: 680px;
                margin: auto;
            }
        `,
    ];

    protected render() {
        return html`<post-head>책을 쓰게 된 이야기 - 1부</post-head>
            <post-body>
                <p>
                    안녕하세요. '클론코딩으로 시작하는 Next.js'의 저자
                    제리님입니다. 집필을 마무리하고 어느 정도의 시간이 지나 책을
                    집필하게 된 이야기를 풀어보고자 합니다. 이야기는 시간의
                    순서대로 써나가 보도록 하겠습니다.
                </p>
                <post-title>시작</post-title>
                <p>
                    작년 초에 메일로 Next.js를 주제로 책을 써보지 않겠냐는
                    제안을 받았습니다. 보잘것없는 저의 깃허브를 보시고 집필
                    제안을 해주셨다고 합니다. 처음 제안을 받게 되었을 때 반은
                    기뻤지만 반은 걱정이 되었습니다. 내가 책을 쓸 정도의 지식을
                    갖추었는지, 내가 알고 있는 것들을 독자에게 잘 설명할 수
                    있는지 스스로 의심이 되었습니다. 하지만, 우선 흔히 오지 않는
                    기회를 놓치지 않기 위해 도전해보기로 하였습니다.
                </p>
                <post-title>아이템 선정</post-title>
                <p>
                    먼저 하게 되는 것은 책의 내용 구상과 목차를 정하는 것입니다.
                    담당자님과 오프라인 미팅을 통해서 3~4개 정도의 예제와 함께
                    Next.js 개발과 배포를 함께 할 수 있는 책을 만들기로
                    했습니다. 책의 크기는 최소 300장은 넘어야 한다고 하여
                    300장을 채울 수 있을지 불안하였습니다. 책의 내용을 정하기
                    위해 만들어 볼 예제를 정하기로 하는데 뻔한 투두 리스트는
                    하고 싶지 않았습니다. 하지만, 간단하면서 CRUD를 경험할 수
                    있고 친숙한 예제를 찾는 것은 쉽지 않았습니다. '그래서 다른
                    책이나 강의에서 투두 리스트를 만드는구나'라는 생각이
                    들었습니다 ㅎㅎ. 생각 끝에 첫 번째 예제로 깃허브 api를
                    이용한 레파지토리 리스트를 만들어 넥스트의 기능들을
                    사용해보도록 하기로 하였습니다. 예제로 독특하고 제가 경험한
                    넥스트의 기능들과 개발 방식을 전달하고 싶어 규모가 큰
                    애플리케이션을 만들고 싶었습니다. 이를 위해 클론코딩 방식을
                    선택하였고 대상을 '에어비엔비'로 정하였습니다. 에어비엔비
                    사이트를 클론 하기 위해 디자인과 디자인 시스템을 파악하고
                    피그마를 사용하여 제작하기 쉽도록 변형하며 만들었습니다. 이
                    과정에서 에어비엔비의 디자인이 자주 변하여서 기존의 디자인을
                    수정하기도 하고 애플리케이션의 규모를 적절히 조정하는 것이
                    힘들었습니다. 회사에서 일하듯이 디자인 시스템을 따라
                    사용해보면서 공통 컴포넌트를 만들어보고 api도 간단하게 직접
                    만들 수 있도록 코딩을 하여 첫 번째 작업물을 만들었습니다.
                    제가 사용하는 기술은 next.js, typescript, redux 였기 때문에
                    이에 익숙해지도록 간단한 예제를 만들며 해당 기술들을 미리
                    사용해본다면 좋을 것 같다고 생각하여, 두 번째 예제로 해당
                    기술들을 사용하여 제가 디자인한 '투두 리스트'를 만들기로
                    정하고, '에어비앤비'를 세 번째 예제로 하기로 하였습니다.
                </p>
                <post-title>글쓰기 시작 </post-title>
                <p>
                    글을 쓰기 전에 애플리케이션들을 미리 만들어두어야 했습니다.
                    세게의 예제를 회사 시간 이외에 만드는데 두 달이 걸렸고,
                    'Ulyesses'프로그램을 사용하여 글을 쓰기 시작했습니다. 책의
                    처음 부분으로 서론과 넥스트에 대한 설명을 써야 하는 것부터
                    막막했습니다. 다른 책들을 참고하며 어떻게 설명해야 하는지
                    용어를 어떻게 사용해야 하는지 보았고, 객관적인 정보를
                    전달하기 위해 여러 글들을 보았습니다. 초반에는 글을 쓸수록
                    내가 잘 모르는 것을 설명하는 것을 알아보아야 하고 그것을
                    설명하는 것은 내 것 같지 않다는 느낌이 들었습니다. 그러던 중
                    '개발자의 글쓰기'라는 책을 잠깐 보게 되었습니다. 책의 내용은
                    집필과 직접적인 연관이 있지 않았지만, 그중에 '개발자의 글은
                    정보공유의 목적이며, 독자 수준이 아닌 본인 수준의 맞는 글을
                    쓰자'라는 내용이 제게 다가왔습니다. 내용대로 내가 설명할 수
                    있는 방식으로 글을 쓰기로 하였습니다. 객관적인 정보를
                    전달하되 내가 모르는 용어는 사용하지 않고 읽는 사람도 쉽게
                    이해할 수 있도록 쓰기로 하였습니다. 그러자, 글을 쓰는 것이
                    조금은 더 쉽게 느껴졌고 내가 쓴 글이라는 느낌이 더
                    강해졌습니다.
                </p>
                <post-title>첫 번째 마감 </post-title>
                <p>
                    마감기한을 3개월, 2개월, 2개월로 1/3 분량씩 제출하기로
                    하였습니다. 담당자님이 보통 9개월 정도 걸린다고 하여 저는
                    파이팅 넘쳤기 때문에 8개월로 잡았습니다(만약, 집필을
                    생각하시는데 이 글을 보시는 분이 있다면 최소 1년으로
                    해주세요 제발..) 마감은 사람에게 정말 해롭습니다. 목표는
                    100페이지였는데 아이템을 고민하고, 애플리케이션을 만들고, 한
                    달 반짜리 해커톤에 참가하였고 글쓰기에 서툴던 저에게 3개월의
                    시간은 순식간에 지나갔습니다. 2주 후 마감인데 40페이지에
                    머물러있는 저는 마음이 급해지고 퇴근 후 시간과 주말은 모두
                    집필에 쏟아야 했습니다. 무엇보다 마감을 해야 한다는
                    스트레스를 계속 받게 되었습니다. 약속을 잘 지키고 책임감이
                    넘치는 저이기에 성공적인 마감을 위해 달렸지만, 계속해서
                    수정되는 코드와 그로 인한 글의 수정은 작업을 힘들게
                    하였습니다. 마감은 사람을 하게 만듭니다. 정신적으로 해롭지만
                    결과물의 속도는 보장하게 됩니다. 하지만, 퀄리티가 마음에
                    들지 않았지만 추후에 고치고자하는 것들이 생기게 되고, 나중에
                    찾아 고치는 것은 오탈자의 확률을 높이고 'Uylesses'프로그램이
                    제공하는 도구를 사용하더라도 추후에 찾기가 힘들었습니다.
                </p>
                <post-title>계속되는 수정 </post-title>
                <p>
                    책을 쓰면서 시간은 계속 흐르고 저의 코딩 스타일도 계속해서
                    변하고 발전됐습니다. 그로 인하여 기존에 작성해 두었던
                    코드들을 수정하게 되었습니다. 하지만 책을 어느 정도 작성한
                    상태였기 때문에 코드를 수정하게 된다면 책에 기록된 내용을
                    모두 찾아 수정하여야 했습니다. 결국 퀄리티를 위하여 다시
                    쓰는 게 나을 정도로 많은 양을 수정하고 내용을
                    보강하였습니다. 작은 예제는 감당할 수 있는 정도지만 규모가
                    있는 애플리케이션에서의 수정은 매우 버거웠습니다. '이래서
                    책이나 강의에서는 큰 규모의 애플리케이션을 만들지
                    않는구나'라는 생각이 들었습니다. 최근에 오탈자 제보가
                    들어오고 있는데 이러한 수정 작업들이 그러한 결과를
                    불러왔습니다. 책을 쓴다면 코드의 수정이 없도록 하는 것이
                    최선일 것입니다. 하지만 퀄리티를 위해 포기할 수 없는
                    부분이었습니다. 2부에서 계속...
                </p>
            </post-body> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "lit-post": LitPost;
    }
}
