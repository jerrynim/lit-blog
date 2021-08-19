import { LitElement } from "lit";
import "@components/qna";
import "@components/post";
export declare class UseGithubToken extends LitElement {
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "use-github-access-token": UseGithubToken;
    }
}
