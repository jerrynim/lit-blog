import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import "@components/post";
import { withPost } from "@lib/decorators";

@customElement("about-pod-file")
@withPost
export class AboutPodFile extends LitElement {
    protected render() {
        return html` <post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1631084015/lit-blog/balloon_nosppg.jpg"
            ></post-head-image>
            <post-head>
                <h1>About PodFile</h1>
                <post-tag>react-native podFile</post-tag>
                <post-date>2021-09-08</post-date>
            </post-head>
            <post-body>
                <post-link
                    href="https://guides.cocoapods.org/syntax/podfile.html#podfile"
                    >Podfile</post-link
                >
                은 하나 이상의 Xcode 프로젝트 target의 종속성을 정의한
                사양입니다.<br /><br />
                예제 코드와 함게 PodFile의 구문의 의미를 하나씩 살펴보도록
                하겠습니다. 기본적으로 PodFile의 언어는 ruby 입니다.<br />터미널에서
                <code>${" pod init"}</code>을 실행하게되면 다음과 같은 PodFile이
                생성됩니다.
                <post-code
                    .code=${podfileCode}
                    language="typescript"
                    filename="ios/PodFile"
                ></post-code>
                <ul>
                    <post-list>
                        <post-link
                            href="https://guides.cocoapods.org/syntax/podfile.html#platform"
                            >platform</post-link
                        ><br />
                        <post-code code="platform :ios, '9.0'"></post-code>
                        앱에서 지원하려는 플랫폼과 해당 플랫폼의 최소 버전을
                        지정합니다.
                    </post-list>
                    <post-list>
                        <post-link
                            href="https://guides.cocoapods.org/syntax/podfile.html#target"
                            >target</post-link
                        ><br />
                        <post-code code="target 'example' do"></post-code>
                        주어진 블록 내에서 정의된 CocoaPods 'target' 및 'scopes
                        dependencies'을 정의합니다. 'target'은 Xcode 'target'과
                        일치해야 합니다.
                    </post-list>
                    <post-list>
                        <post-link
                            href="https://stackoverflow.com/questions/41210249/why-do-we-use-use-frameworks-in-cocoapods"
                            >use_frameworks!</post-link
                        >
                        <post-code code="use_frameworks!"></post-code>
                        use_frameworks!정적 라이브러리 대신 프레임워크를
                        사용하고 싶다고 CocoaPods에 알립니다. Swift는 정적
                        라이브러리를 지원하지 않기 때문에 프레임워크를 사용해야
                        합니다.
                    </post-list>
                    <post-list>
                        <post-link
                            href="https://guides.cocoapods.org/syntax/podfile.html#inherit_bang"
                            >inherit!</post-link
                        >
                        <post-code code="inherit! :search_paths"></post-code>
                        현재 'target'에 대한 상속 모드를 설정합니다.
                        <br />
                        <br />
                        ":complete" : 부모로부터 모든 동작을 상속합니다.<br />
                        ":none" : 부모로부터 어떤 동작도 상속하지 않습니다.
                        <br />
                        ":search_paths": 부모의 검색 경로만 상속합니다.
                    </post-list>
                </ul>
                기본적인 PodFile의 구문들을 알아보았습니다. 이번에는 제가 실제로
                사용하는 PodFile의 구문들을 분석해보도록 하겠습니다.
                <post-code
                    .code=${podfileCode2}
                    language="typescript"
                    filename="ios/PodFile"
                ></post-code>
                <ul>
                    <post-list
                        >require_relative
                        <post-code
                            code="require_relative '../../../node_modules/@react-native-community/cli-platform-ios/native_modules'
"
                        ></post-code>
                        require_relative는 ruby에서 사용하는 메서드로 현재
                        파일위치를 기준으로 파일을 찾습니다. monorepo의 사용으로
                        라이브러리의 경로가 변경되었을 때 사용합니다.
                    </post-list>
                    <post-list>
                        <post-link
                            href="https://guides.cocoapods.org/syntax/podfile.html#pod"
                            >pod</post-link
                        >
                        <post-code
                            code="pod 'RNFastImage', :path => '../../../node_modules/react-native-fast-image'"
                        ></post-code>
                        프로젝트의 dependency 정의합니다. 첫번째 값은
                        'dependency'의 이름이며, 두번째 값은 옵션으로 버전을
                        정의할 수 있습니다.
                    </post-list>
                    <post-list>
                        <post-link
                            href="https://guides.cocoapods.org/syntax/podfile.html#project"
                            >project</post-link
                        >
                        <post-code .code=${projectCode}></post-code>
                        Pods 라이브러리가 연결되어야 하는 'target'이 포함된
                        Xcode 프로젝트를 지정합니다.<br />
                        사용자 정의 빌드 구성의 빌드 설정을 릴리스 또는 디버그
                        사전 설정 후에 모델링할지 여부를 지정할 수도 있습니다.
                    </post-list>
                    <post-list
                        >def / end
                        <post-code
                            code="def common_pods 
end"
                        ></post-code>
                        def / end 문을 이용하여 구문을 저장 할 수 있게 됩니다.
                    </post-list>
                    <post-list>
                        <post-link
                            href="https://stackoverflow.com/questions/60499216/use-framework-vs-use-native-modules"
                            >use_native_modules!</post-link
                        >
                        <post-code
                            code="config = use_native_modules!"
                        ></post-code>
                        React Native 0.60 이상에서 'auto-linking' 을 위해
                        사용됩니다. 'pod install' 실행 시 자동으로 프로젝트에
                        추가된 'dependency'가 자동으로 link 됩니다.
                    </post-list>
                    <post-list
                        >use_react_native!
                        <post-code
                            code="use_react_native!(:path => rn_path)"
                        ></post-code>
                        react-native를 사용하도록 합니다. react-native가 설치된
                        node_modules/react-native 경로를 설정해주어야합니다.
                        다음과 같이 기본 react-native 경로를 사용할 수 있습니다.
                        <br />
                        <post-code
                            code="use_react_native!(:path => config['reactNativePath'])"
                        ></post-code>
                        다만, monorepo인경우 react-native의 위치를 루트경로로
                        설정해주어야 합니다.
                    </post-list>
                    <post-list
                        >use_flipper!
                        <post-code
                            code="use_flipper!({ 'Flipper-Folly' => '2.5.3', 'Flipper' => '0.87.0', 'Flipper-RSocket' => '1.3.1' }"
                        ></post-code>
                        <post-link href="https://fbflipper.com/"
                            >flipper</post-link
                        >는 앱을 디버깅하기 위한 플랫폼입니다. 이를 사용하도록
                        명시하고 필요한 종속성들의 버전을 명시합니다.
                    </post-list>
                    <post-list
                        >post_install!
                        <post-code
                            code="post_install do |installer|"
                        ></post-code>
                        설치가 완료된 후 실행되는 훅으로 [Pod::Installer] 를
                        인자로 받습니다.
                    </post-list>
                </ul>
                그 외 유용한 링크
                <post-link href="https://github.com/ClintJang/cocoapods-tips"
                    >CocoaPods 유용한 정보 모음입니다.</post-link
                >
            </post-body>`;
    }
}
const podfileCode = `# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'example' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for example

  target 'example-tvOSTests' do
    inherit! :search_paths
    # Pods for testing
  end

  target 'exampleTests' do
    inherit! :search_paths
    # Pods for testing
  end

end

target 'example-tvOS' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for example-tvOS

  target 'example-tvOSTests' do
    inherit! :search_paths
    # Pods for testing
  end

end
`;

const podfileCode2 = `require_relative '../../../node_modules/react-native/scripts/react_native_pods'
require_relative '../../../node_modules/@react-native-community/cli-platform-ios/native_modules'

pod 'RNFastImage', :path => '../../../node_modules/react-native-fast-image'


platform :ios, '10.0'

project 'example',
        'simulator' => :debug,
        'dev' => :release,
        'preview' => :release

def common_pods
  rn_path = '../../../node_modules/react-native'
 
  config = use_native_modules!
  use_react_native!(:path => rn_path)

  # Enables Flipper.
  #
  # Note that if you have use_frameworks! enabled, Flipper will not work and
  # you should disable these next few lines.
  use_flipper!({ 'Flipper-Folly' => '2.5.3', 'Flipper' => '0.87.0', 'Flipper-RSocket' => '1.3.1' }
end

target 'example' do
  common_pods
end

post_install do |installer|
  flipper_post_install(installer)
  installer.pods_project.targets.each do |target|
  end
  target.build_configurations.each do |config|
  end
end
`;

const projectCode = `project 'example',
    'simulator' => :debug,
    'dev' => :release,
    'preview' => :release`;

declare global {
    interface HTMLElementTagNameMap {
        "about-pod-file": AboutPodFile;
    }
}
