import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("no-recoil")
@withPost
export class NoRecoil extends LitElement {
    protected render() {
        return html`<post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1640095781/lit-blog/nono_knwr4l.jpg"
            ></post-head-image>
            <post-head>
                <h1>리코일을 안쓰기로한다</h1>
                <post-tag>no recoil i like redux</post-tag>
                <post-date>2021-12-21</post-date>
            </post-head>
            <post-body
                >웹소켓을 클래스로 만들어 필요한 곳에서 connect 하고 onMessage를
                설정하도록 하려고 하는데, 메세지를 받을때(onmessage) recoil 값을
                바꾸고 싶었다. 또한 ws.send 메서드를 사용해 메세지를 보내야
                했다.
                <br />
                하지만 리코일은 리액트 컴포넌트에서 그것도 함수형에서만 사용할
                수 있어서 도저히 클래스 내부에서 recoil값을 바꿀수가 없었다.<br />
                이런 상황에서 그저 리덕스만 떠올랐다. 리덕스였다면 액션을
                만들어서 금새 만들었을텐데...
                <br />
                다양한 방법들을 생각해보았다.<br />
                <br />
                클래스형과 함수형 컴포넌트를 조합해서 사용하는 방법을
                생각해보았다.<br />문제는 웹소켓의 메세지를 보내는것을 밖에서도
                재사용해야해서 static으로 함수를 만든다 해도 this에 접근할 수
                없어 불가능했다.
                <post-code .code=${code1} language="typescript"></post-code>
                이번에는 커스텀 훅스를 만들어서 사용해볼까 생각해보았다.
                <br />하지만 훅스의 특성상 생성되는 웹소켓을 여러 컴포넌트에
                만들게 되면 불필요한 커넥트가 발생할거라 생각했다.
                <br />구글링을 해보니 이처럼 사용해서 메모리 누수가
                발생했다고한다... <br /><br />
                웹소켓은 전역변수로 만들어 사용하기로한다.
                <post-code .code=${code2} language="typescript"></post-code>
                작동은 잘 되지만 관리하기 영 별로다.<br />
                이렇게 할바에는 클래스로 만들어서 사용하기로 한다.<br />
                <post-code .code=${code3} language="typescript"></post-code>
                하지만 클래스 내에서 리코일을 사용할 수 없으니 ws.onmessage 값을
                변경하여 리코일 값을 사용할 수 있었다.
                <post-code .code=${code4} language="typescript"></post-code>
                작동은하나 클래스 내에서 한번에 정리하는걸 원했다.<br /><br />
                애초에 리코일은 SSR 지원도 되지 않았으니,<br />
                나는 더는 리코일을 사용하지 않고 리덕스를 사용하기로한다.
            </post-body>`;
    }
}

const code1 = `class Component extends React.Component {
    ws = null;

    static send() {
        //can't connect this...
    }

    render() {
        return <div />;
    }
}`;

const code2 = `let ws = null

const connect = () =>{
    ws = new WebSocket("htttps://")
}
`;

const code3 = `class WebSocket {
	webSocket: WebSocket | null = null

	connectWebSocket() {
		this.webSocket = new WebSocket("https://")
	}
}
const ws = new WebSocket()    
`;

const code4 = `
const onMessage = (message: any) => {
    setRecoilValue(message.data);
}
useEffect(()=>{
    iotWebSocket.webSocket!.onmessage = onMessage
},[recoilValue])
`;

declare global {
    interface HTMLElementTagNameMap {
        "no-recoil": NoRecoil;
    }
}
