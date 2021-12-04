import { withPost } from "@lib/decorators";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import "@components/post";

@customElement("lit-tutorial-5")
@withPost
export class LitTutorial5 extends LitElement {
    protected render() {
        return html`<post-head-image
                src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg"
            ></post-head-image>
            <post-head>
                <h1>Lit 튜토리얼 (5/6)</h1>
                <post-tag>lit lit-html lit-elemnt tutorial redux</post-tag>
                <post-date>2021-07-25</post-date>
            </post-head>
            <post-body>
                lit-프로젝트에 전역 형상 관리를 위하여 redux(리덕스)를
                사용하도록 하겠습니다.<br />

                리덕스를 사용하는데 필요한 라이브러리들을 설치해 주도록
                하겠습니다.
                <post-blockquote
                    >yarn add redux @reduxjs/toolkit pwa-helpers
                </post-blockquote>
                리덕스 툴킷을 이용하여 간단하게 스토어와 간단한 모듈을 만들도록
                하겠습니다. 'pwa-helpers'는 컴포넌트에 스토어를 connect 하는
                함수를 제공합니다.
                <post-title subTitle>리덕스 스토어 만들기 </post-title>
                <post-code
                    .code=${code1}
                    language="typescript"
                    filename="store/vegetable.ts"
                ></post-code>
                <post-code
                    .code=${code2}
                    language="typescript"
                    filename="store/index.ts"
                ></post-code>
                <post-title subTitle>(option)리덕스 사가 사용하기 </post-title>
                redux-saga를 사용하길 원한다면 다음과 같이 saga를 실행할 코드를
                추가해 주세요.
                <post-code .code=${code3} language="typescript"></post-code>
                <post-title subTitle>리덕스 스토어 연결하기 </post-title>
                리덕스를 사용할 컴포넌트에서 다음과 같이 connect를 해주도록
                합니다.
                <post-code
                    .code=${code4}
                    language="typescript"
                    filename="pages/lit-tomato.ts"
                ></post-code>
                리덕스의 값을 사용하기 위해 다음과 같이 작성합니다.
                <post-code .code=${code5} language="typescript"></post-code>
                앞의 코드의 실행 결과 리덕스 값인 'redux-tomato'를 불러 올 수
                있게 되었습니다.
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628775156/lit-blog/redux-tomato_vvu3hw.png"
                    width=${200}
                    alt="lit-element redux 사용하기"
                ></post-image>
                <post-title subTitle>스토어 업데이트하기 </post-title>디스패치를
                하여 리덕스의 name값을 변경해보도록 하겠습니다.
                <post-code .code=${code6} language="typescript"></post-code>
                버튼을 클릭하면 액션을 디스패치하여 값이 변경되고, 바인딩된
                name도 변경되는 것을 확인 할 수 있었습니다.
                <post-image
                    src="https://res.cloudinary.com/dij9kacx9/image/upload/v1628775273/lit-blog/redux-update_wcms8x.png"
                    alt="lit-elemnt redux update"
                ></post-image>
            </post-body>`;
    }
}

const code1 = `import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VegetableState {
  name: string;
}

const initialState: VegetableState = {
  name: "redux-tomato",
};

const vegetable = createSlice({
  name: "vegetable",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const vegetableActions = { ...vegetable.actions };

export default vegetable;`;

const code2 = `import { combineReducers, configureStore } from "@reduxjs/toolkit";
import vegetable from "./vegetable";

const rootReducer = combineReducers({
  vegetable: vegetable.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
`;

const code3 = `import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
  import createSagaMiddleware, { Task } from "redux-saga";
  import { Store } from "redux";
  import { all } from "redux-saga/effects";
  
  const rootReducer = combineReducers({});
  
  export type RootState = ReturnType<typeof rootReducer>;
  
  let sagaMiddleware = createSagaMiddleware();
  
  const middleware = [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ];
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: true,
  });
  
  export function* rootSaga() {
    yield all([]);
  }
  
  export interface SagaStore extends Store {
    sagaTask?: Task;
  }
  
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);`;

const code4 = `import { connect } from "pwa-helpers";
import { store } from "../store";

class Tomato extends connect(store)(LitElement) {
`;

const code5 = `import { LitElement, html, customElement, property } from "lit-element";
import "../components/child-tomato";
import { connect } from "pwa-helpers";
import { RootState, store } from "../store";

@customElement("lit-tomato")
class Tomato extends connect(store)(LitElement) {
  //? state 정의 부분
  @property() name = "";

  //* 리덕스 업데이트 될때 실행 된다
  stateChanged(state: RootState) {
    console.log(state);
    this.name = state.vegetable.name;
    super.stateChanged(state);
  }

  render() {
    return html&backtick;&dollar;{this.name}&backtick;;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}`;

const code6 = `class Tomato extends connect(store)(LitElement) {
    //? state 정의 부분
    @property() name = store.getState().vegetable.name;
  
    //* 리덕스 업데이트 될때 실행 된다
    stateChanged(state: RootState) {
      console.log("stateChanged");
      this.name = state.vegetable.name;
      super.stateChanged(state);
    }
  
    //* name 변경하기
    changeName() {
      store.dispatch(vegetableActions.setName("changed-tomato"));
    }
  
    render() {
      return html&backtick;&dollar;{this.name}
        <button @click="&dollar;{this.changeName}">change</button> &backtick;;
    }
  }`;

declare global {
    interface HTMLElementTagNameMap {
        "lit-tutorial-5": LitTutorial5;
    }
}
