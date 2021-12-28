import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { withPost } from "@lib/decorators";
import "@components/post";

@customElement("a-frame-entity")
@withPost
export class AFrameEntity extends LitElement {
    protected render() {
        return html`<post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1634978785/a-frame_gtk4je.jpg"
            ></post-head-image>
            <post-head>
                <h1>A-Frame Entity 한글 번역</h1>
                <post-tag>A-Frame 한글 번역</post-tag>
                <post-date>2021-10-23</post-date>
            </post-head>
            <post-body>
                A-Frame은 <code>${"<a-entity>"}</code> 엘리먼트를 통해 엔티티를
                표현한다.
                <post-link
                    href="https://aframe.io/docs/1.2.0/introduction/entity-component-system.html"
                    >entity-component-system pattern</post-link
                >에서 정의한대로, 엔티티는 외관, 행동, 기능을 제공하기 위한
                컴포넌트를 플러그인하는 플레이스홀더 오브젝트입니다.<br /><br />
                A-Frame에서는 엔티티는 본질적으로 positon, rotation,scale
                구성요소와 연결됩니다.

                <post-title subTitle>Example</post-title>
                아래의 엔티티를 보도록 하겠습니다. 이 자체로는 외형, 행동,
                기능이 없습니다. 이것은 아무것도 하지 않습니다.
                <post-code code="<a-entity>" language="html"></post-code>
                우리는 컴포넌트를 렌더하거나 무언가를 하게만들기위해 컴포넌트에
                접근할 수 있습니다. 모양이나 외형을 주기 위해서, 우리는
                geometry나 material 컴포넌트에 접근 할 수 있습니다.
                <post-code .code=${code1} language="html"></post-code>
                혹은 빛을 내기 위해 우리는 light 컴포넌트를 추가로 붙일 수
                있습니다.
                <post-title subTitle>엔티티 검색</post-title>
                DOM API를 사용하여 간단하게 검색을 할 수 있습니다.
                <post-code .code=${code2} language="html"></post-code>
                <post-code
                    code="var el = document.querySelector('#mario');"
                    language="typescript"
                ></post-code>
                엔티티가 있으면, 우리는 아래의 상세 메서드나 프로퍼티에 접근 할
                수 있습니다.
                <post-title subTitle>Properties</post-title>
                <post-title subTitle>components</post-title>
                <code>${"<a-entity>.components"}</code> 는 엔티티에 접근 가능한
                객체입니다. 이것은 각 컴포넌트의 data,state,함수들을 포함하여
                엔티티의 컴포넌트에 접근하도록 해줍니다.<br /><br />
                예를 들어 엔티티의 three.js 카메라 객체나 material 객체를
                가져오고 싶다면, 해당 컴포넌트에 접근할 수 있습니다.
                <post-code .code=${code3} language="typescript"></post-code>
                만약 컴포넌트가 API를 노출하는경우, 메소드를 호출할 수 있습니다.
                <post-code
                    code="document.querySelector('a-entity[sound]').components.sound.pause();"
                    language="typescript"
                ></post-code>
                <post-title subTitle>hasLoaded</post-title>
                엔터티가 컴포넌트를 연결하고 초기화했는지 여부입니다. 엔터티가
                준비된 후 코드가 실행되도록 하는 가장 좋은 방법은 구성 요소 내에
                코드를 배치하는 것입니다.
                <post-title subTitle>isPlaying</post-title>
                엔터티가 활성 상태이고 재생 중인지 여부입니다. 엔티티를 일시
                중지하면 isPlaying가 false 가 됩니다
                <post-title subTitle>object3D</post-title>
                <code>${"<a-entity>.object3D"}</code> 는 three.js Ojbect3D
                표현에 대한 참조입니다. 더 구체적으로, object3D 는 cameras,
                meshes, lights, sounds와 같은 THREE.Object3D의 다양한 타입들을
                포함하는 THREE.Group객체가 됩니다.
                <post-code .code=${code4} language="typescript"></post-code>
                object3DMap을 이용해 Object3D 의 다양한 타입에 접근할 수
                있습니다.
                <post-title subTitle>object3DMap </post-title>
                엔티티의 object3DMap 객체는 THREE.Object3D 컴포넌트가 설정 한
                다양한 유형 (예: 카메라, 메쉬, 조명, 사운드)에 대한 액세스를
                제공하는 개체입니다 .<br />
                geometry 및 light 컴포넌트가 연결된 엔티티의 경우, object3DMap
                은 다음과 같습니다.
                <post-code .code=${code5} language="typescript"></post-code>
                setObject3D 와 removeObject3D 를 이용하여 THREE.Object3D들의
                엔티티 셋을 관리할 수 있습니다.
                <post-title subTitle>sceneEl</post-title>
                엔티티는 scene 엘리먼트의 참조를 가지고 있습니다.
                <post-code .code=${code6} language="typescript"></post-code>
                <post-title subTitle>Methods</post-title>
                <post-title subTitle>addState (stateName)</post-title>
                addState는 엔티티에 state를 푸쉬합니다. 그러면 stateadded
                이벤트가 발생하고, .is 를 사용하여 state 를 확인할 수 있습니다.
                <post-code .code=${code7} language="typescript"></post-code>

                <post-title subTitle>destroy()</post-title>
                컴포넌트와 해당 데이터를 지우는것 처럼같은 엔티티와 관련된
                메모리를 정리합니다.
                <post-title subTitle>emit (name, detail, bubbles)</post-title>
                emit 은 엔티티에서 커스텀 DOM 이벤트를 실행합니다. 예를들어,
                trigger an animation: 를 실행할 수 있습니다.
                <post-code .code=${code8} language="typescript"></post-code>
                이벤트의 두번째 인자로 데이터나 상세를 전달할 수 있습니다.
                <post-code
                    code="entity.emit('collide', { target: collidingEntity });"
                    language="typescript"
                ></post-code>
                이벤트는 기본적으로 버블을 일으킵니다. bubble: 값에 false 를
                전달해 버블을 막을 수 있습니다.
                <post-code
                    code="entity.emit('sink', null, false);"
                    language="typescript"
                ></post-code>
                <post-title subTitle>flushToDOM (recursive)</post-title>
                flushToDOM 은 컴포넌트의 데이터를 수동으로 직렬화하고 돔을
                업데이트 합니다.Read more about
                <post-link
                    href="https://aframe.io/docs/1.2.0/components/debug.html#component-to-dom-serialization"
                    >component-to-DOM serialization</post-link
                >.
                <post-title subTitle>getAttribute (componentName) </post-title>
                getAttribute 파싱된 컴포넌트 데이터(믹스인 및 기본값 포함)를
                검색합니다.
                <post-code .code=${code9} language="typescript"></post-code>
                만약 componentName이 등록된 컴포넌트의 이름이 아니라면.
                getAttribute는 일반적으로 다음처럼 작동합니다.
                <post-code .code=${code10} language="typescript"></post-code>
                <post-title subTitle
                    >getDOMAttribute (componentName)
                </post-title>
                getDOMAttribute 는 돔이나 setAttribute에 의해 명시적으로 정의된
                파싱된 컴포넌트 데이터만 검색합니다. 만약 componentName이 등록된
                컴포넌트라면, getDOMAttribute 는 오직 파싱된 객체로 HMLT에
                존재하는 컴포넌트 데이터만 리턴합니다. getDOMAttribute 은
                getAttribute의 부분폼 입니다. 반환되는 컴포넌트 데이터가 적용된
                mixins 나 기본값을 포함하지 않음으로서
                <br />
                위의 getAttribute 예제와 비교해보겠습니다.
                <post-code .code=${code11} language="typescript"></post-code>
                <post-title subTitle>getObject3D (type) </post-title>
                getObject3D은 object3DMap의 타입에 참조된 THREE.Object3D 자식을
                바라봅니다.
                <post-code .code=${code12} language="typescript"></post-code>
                <post-title subTitle>pause () </post-title>
                pause() 는 컴포넌트나 애니메이션에 의해 정의된 동적 행위를
                정지합니다. 엔티티를 정지할때, 애니메이션을 정지하고 각
                컴포넌트에 있는 Component.pause()를 호출합니다. 컴포넌트는 일시
                중지 시 발생하는 일을 구현하기로 결정하며, 이는 종종 이벤트
                리스너를 제거합니다. 엔터티를 pause()일시 중지하면 엔터티가 자식
                엔터티를 호출 합니다.
                <post-code .code=${code13} language="typescript"></post-code>
                예를들어 일시 중지 시
                <post-link
                    href="https://aframe.io/docs/1.2.0/components/look-controls.html"
                    >look-control </post-link
                >컴포넌트는 입력을 수신하는 이벤트 핸들러를 제거합니다.
                <post-title subTitle>play ()</post-title>
                play() 는 컴포넌트나 애니메이션에 의해 정의돈 동적 행위를
                시작합니다. 이것은 .DOM이 엔티티에 접근할때 자동으로 호출됩니다.
                엔티티 play()할때, 엔티티는 각 자식 엔티티의 play()를
                호출합니다.
                <br />
                예를들어,재생중인
                <post-link
                    href="https://aframe.io/docs/1.2.0/components/sound.html"
                    >sound component</post-link
                >는 사운드 재생을 시작합니다.
                <post-title
                    >setAttribute (componentName, value, [propertyValue |
                    clobber])
                </post-title>
                만약 componentName가 등록된 컴포넌트가 안거나 single-property
                컴포넌트이라면 setAttribute 보통 다음처럼 작동합니다.
                <post-code
                    code="entity.setAttribute('visible', false);"
                    language="typescript"
                ></post-code>
                만약 componentName이 등록된 컴포넌트임에도, 값을 위해 특별한
                파싱을 다룰수도 있습니다. 예를들어
                <post-link
                    href="https://aframe.io/docs/1.2.0/components/position.html"
                    >position component</post-link
                >는 single-property 컴포넌트인데, 이 property 타입 파서는 객체를
                받도록 해줍니다.
                <post-code .code=${code14} language="typescript"></post-code>
                <post-title subTitle
                    >Updating Multi-Property Component Data</post-title
                >
                multi-property 컴포넌트의 데이터를 업데이트하기
                위해선,componentName에 등록된 컴포넌트의 이름을 넣을 수 있고,
                값으로 property 객체를 전달할 수 있습니다.string 또한
                가능합니다(예,type: spot; distance: 30),하지만 객체는 A-frame이
                파싱에하는일을 줄여줍니다.
                <post-code .code=${code15} language="typescript"></post-code>
                혹은 multi-property 컴포넌트의 개별의 프로퍼티를
                업데이트하기위해, 등록된 컴포넌트의 componentName 과 두번째
                인자로 프로퍼티의 이름, 세번째 인자로 프로퍼티의 값을 줄 수
                있습니다.
                <post-code .code=${code16} language="typescript"></post-code>
                배열 프로퍼티 타입들은 특별하게 작동합니다:
                <ul>
                    <post-list
                        >배열은 변경 가능합니다. 배열에 대한 변경 사항이
                        컴포넌트에서 볼 수 있도록 참조로 할당됩니다.</post-list
                    >
                    <post-list
                        >배열 유형 속성에 대한 업데이트는 컴포넌트의
                        update메서드를 트리거 하거나 이벤트를 내 보내지 않습니다
                        .</post-list
                    >
                </ul>
                <post-title subTitle
                    >Putting Multi-Property Component Data
                </post-title>
                만약 .setAttribute의 세번째 인자로 true값을 주게되면, 지정되지
                않은 속성이 재설정되고 클로버됩니다
                <post-code .code=${code17} language="typescript"></post-code>
                <post-title subTitle>setObject3D (type, obj)</post-title>
                setBoject3D 는 전달된 obj를 등록합니다. THREE.Object3D, 엔티티의
                object3DMap 아래의 타입. A-frame은 엔티티 루트 object3D 의
                자식으로 obj를 더합니다. 엔티티 는 setObject3D 가 호출 될 때
                이벤트 세부 정보 object3dset와 함께 type이벤트를 실행합니다.
                <post-code .code=${code18} language="typescript"></post-code>
                <post-title
                    >removeAttribute (componentName, propertyName)
                </post-title>
                componentName이 등록된 컴포넌트의 이름이고, DOM에서 속성을
                제거하면서,removeAttribute 는 또한 엔티티로부터 컴포넌트를
                분리하고, 컴포넌트의 remove 생명주기 메소드를 실행합니다.
                <post-code .code=${code19} language="typescript"></post-code>
                propertyName이 주어지면, removeAttribute 는 propertyName속성의
                기본 값을 초기화합니다.
                <post-code .code=${code20} language="typescript"></post-code>
                <post-title subTitle>removeObject3D (type) </post-title>
                removeObject3D 엔티티의 THREE.Group의 타입에의해 정의된 객체를
                제거하고 scene 또한 그렇게합니다. 이것은 엔티티의 object3DMap 를
                업데이트합니다. 타입의 값을 null로 설정합니다. 이것은 보통
                컴포넌트로부터 호출됩니다. 종종 헨들러를 제거하면서
                <post-code .code=${code21} language="typescript"></post-code>
                <post-title subTitle>removeState (stateName) </post-title>
                removeState 는 엔티티로부터 state를 제거합니다. stateremoved
                이벤트를 실행하고, .is를 이용해 state를 확인할 수 있습니다.
                <post-code .code=${code22} language="typescript"></post-code>
                <post-title subTitle
                    >Listening for Component Changes
                </post-title>
                componentchanged를 사용해 엔티티의 변화를 감지할 수 있습니다.
                <post-code .code=${code23} language="typescript"></post-code>
                <post-title
                    >Listening for Child Elements Being Attached and Detached
                </post-title>
                child-attached 와 child-detached 이벤트를 이용해 엔티티에
                scene이 연결되고 해지되는 것을 감지할 수 있습니다.
                <post-code .code=${code24} language="typescript"></post-code>
            </post-body>`;
    }
}
//prettier-ignore
const code1 = "<a-entity geometry=\"primitive: box\" material=\"color: red\">";
//prettier-ignore
const code2 = "<a-entity id=\"mario\"></a-entity>";
//prettier-ignore
const code3 =`var camera = document.querySelector('a-entity[camera]').components.camera.camera;
var material = document.querySelector('a-entity[material]').components.material.material;`;

const code4 = `// Gaining access to the internal three.js scene graph.
var groupObject3D = document.querySelector('a-entity').object3D;
console.log(groupObject3D.parent);
console.log(groupObject3D.children);`;

const code5 = `{
    light: <THREE.Light Object>,
    mesh: <THREE.Mesh Object>
  }`;

const code6 = `var sceneEl = document.querySelector('a-scene');
var entity = sceneEl.querySelector('a-entity');
console.log(entity.sceneEl === sceneEl);  // >> true.`;

const code7 = `entity.addEventListener('stateadded', function (evt) {
    if (evt.detail === 'selected') {
      console.log('Entity now selected!');
    }
  });
  
  entity.addState('selected');
  entity.is('selected');  // >> true`;

const code8 = `// <a-entity animation="property: rotation; to: 0 360 0; startEvents: rotate">
entity.emit('rotate');`;

const code9 = `// <a-entity geometry="primitive: box; width: 3">

entity.getAttribute('geometry');
// >> {primitive: "box", depth: 2, height: 2, width: 3, ...}

entity.getAttribute('geometry').primitive;
// >> "box"

entity.getAttribute('geometry').height;
// >> 2

entity.getAttribute('position');
// >> {x: 0, y: 0, z: 0}`;

const code10 = `// <a-entity data-position="0 1 1">

entity.getAttribute('data-position');
// >> "0 1 1"`;

const code11 = `// <a-entity geometry="primitive: box; width: 3">

entity.getDOMAttribute('geometry');
// >> { primitive: "box", width: 3 }

entity.getDOMAttribute('geometry').primitive;
// >> "box"

entity.getDOMAttribute('geometry').height;
// >> undefined

entity.getDOMAttribute('position');
// >> undefined`;

const code12 = `AFRAME.registerComponent('example-mesh', {
    init: function () {
      var el = this.el;
      el.setObject3D('mesh', new THREE.Mesh());
      el.getObject3D('mesh');  // Returns THREE.Mesh that was just created.
    }
  });`;

const code13 = `// <a-entity id="spinning-jumping-ball">
entity.pause();`;

const code14 = `entity.setAttribute('position', { x: 1, y: 2, z: 3 });
`;

const code15 = `// Only the properties passed in the object will be overwritten.
entity.setAttribute('light', {
  type: 'spot',
  distance: 30,
  intensity: 2.0
});`;

const code16 = `// All previous properties for the material component (besides the color)  will be unaffected.
entity.setAttribute('material', 'color', 'crimson');`;

const code17 = `// All previous properties for the light component will be removed and overwritten.
entity.setAttribute('light', {
  type: 'spot',
  distance: 30,
  intensity: 2.0
}, true);`;

const code18 = `AFRAME.registerComponent('example-orthogonal-camera', {
    update: function () {
      this.el.setObject3D('camera', new THREE.OrthogonalCamera());
    }
  });`;

const code19 = `entity.removeAttribute('geometry');  // Detach the geometry component.
  entity.removeAttribute('sound');  // Detach the sound component.`;

const code20 = `entity.setAttribute('material', 'color', 'blue');  // The color is blue.
  entity.removeAttribute('material', 'color');  // Reset the color to the default value, white.`;

const code21 = `AFRAME.registerComponent('example-light', {
    update: function () {
      this.el.setObject3D('light', new THREE.Light());
      // Light is now part of the scene.
      // object3DMap.light is now a THREE.Light() object.
    },
  
    remove: function () {
      this.el.removeObject3D('light');
      // Light is now removed from the scene.
      // object3DMap.light is now null.
    }
  });`;

const code22 = `entity.addEventListener('stateremoved', function (evt) {
    if (evt.detail.state === 'selected') {
      console.log('Entity no longer selected.');
    }
  });
  
  entity.addState('selected');
  entity.is('selected');  // >> true
  
  entity.removeState('selected');
  entity.is('selected');  // >> false`;
const code23 = `entity.addEventListener('componentchanged', function (evt) {
    if (evt.detail.name === 'position') {
      console.log('Entity has moved to', evt.target.getAttribute('position'), '!');
    }
  });`;

const code24 = `entity.addEventListener('child-attached', function (evt) {
    if (evt.detail.el.tagName.toLowerCase() === 'a-box') {
      console.log('a box element has been attached');
    };
  });`;
declare global {
    interface HTMLElementTagNameMap {
        "a-frame-entity": AFrameEntity;
    }
}
