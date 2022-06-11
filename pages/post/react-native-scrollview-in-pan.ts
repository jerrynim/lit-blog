import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("react-native-scrollview-in-pan")
@withPost
export class ReactNativeScrollViewInPan extends LitElement {
    protected render() {
        return html`<post-head-image src=""></post-head-image>
            <post-head>
                <h1>react-native ScrollView in pan responder</h1>
                <post-tag>react-native ScrollView in pan panresponder</post-tag>
                <post-date>2020-06-11</post-date>
            </post-head>
            <post-body>
                I want to use react-native ScrollView in panResponder.
                <br />
                I expect to run scroll-event when drag contents in ScrollView. I
                expect panResponder-event occur when drag contents that is not
                in ScrollView, <br />write code:
                <post-code
                    .code=${code1}
                    language="typescript"
                    filename="Not Working Code1"
                ></post-code>
                panResponder works, Scroll did not work<br />
                i found that 'onStartShouldSetPanResponder: () => true' makes
                scroll not work<br />
                and when using 'onStartShouldSetPanResponder: () => false'
                panResponder did not work<br />
                <br />
                I found solution for this,
                <ul>
                    <post-list>
                        <post-title subTitle
                            >use react-native-gesture-handler</post-title
                        >
                        Use 'react-native-gesture-handler' that supports
                        ScrollView in PanResponder<br />
                        but i need to run it with 'react-native-web', WebView<br />
                        'react-native-gesture-handler' does not support this.
                        <br />I need to find way to support web
                    </post-list>
                    <post-list>
                        <post-title>stopPropagation in ScrollView</post-title>
                        'stop event propagation' works!
                        <post-code
                            .code=${code2}
                            language="typescript"
                        ></post-code>
                    </post-list>
                    <post-list>
                        <post-title>use inner View in ScrollView</post-title>
                        View which has property
                        'onResponderTerminationRequest={() => false}
                        onStartShouldSetResponder={() => true}' makes scrollable
                        write code:
                        <post-code
                            .code=${code3}
                            language="typescript"
                        ></post-code>
                    </post-list>
                </ul>
            </post-body>`;
    }
}

const code1 = `PanResponder.create({
  onStartShouldSetPanResponder: () => true,
  onMoveShouldSetPanResponder: () => true,
  onPanResponderMove: (event, gestureState) => {}

  ...

  return (<View {...panResponders.panHandlers}>
    <ScrollView >
    ...
    </ScrollView>
  </View>)
`;

const code2 = `<ScrollView onTouchMove={(e)=>{
  e.stopPropagation()
  ...
}}>`;

const code3 = `<ScrollView>
  <View
    onResponderTerminationRequest={() => false}
    onStartShouldSetResponder={() => true}
  >
    ...
  </View>
</ScrollView>`;

declare global {
    interface HTMLElementTagNameMap {
        "react-native-scrollview-in-pan": ReactNativeScrollViewInPan;
    }
}
