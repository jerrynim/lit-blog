declare var Prism: {
    manual: any;
    disableWorkerMessageHandler: any;
    util: {
        encode: (n: any) => any;
        type: (e: any) => string;
        objId: (e: any) => any;
        clone: (e: any, r: any) => any;
        getLanguage: (e: any) => any;
        currentScript: () => HTMLOrSVGScriptElement | null;
        isActive: (e: any, n: any, t: any) => boolean;
    };
    languages: {
        plain: {};
        plaintext: {};
        text: {};
        txt: {};
        extend: (e: any, n: any) => any;
        insertBefore: (t: any, e: any, n: any, r: any) => {};
        DFS: (n: any, t: any, r: any, a: any) => void;
    };
    plugins: {};
    highlightAll: (e: any, n: any) => void;
    highlightAllUnder: (e: any, n: any, t: any) => void;
    highlightElement: (e: any, n: any, t: any) => undefined;
    highlight: (e: any, n: any, t: any) => any;
    tokenize: (e: any, n: any) => any[];
    hooks: {
        all: {};
        add: (e: any, n: any) => void;
        run: (e: any, n: any) => void;
    };
    Token: {
        (e: any, n: any, t: any, r: any): void;
        stringify(e: any, t: any): any;
    };
};
export default Prism;
