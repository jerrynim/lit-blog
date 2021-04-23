import { Router } from "@vaadin/router";
import "./styles/resetCss.css";

window.addEventListener("load", () => {
    initRouter();
});

function initRouter() {
    const router = new Router(document.querySelector("main"));

    router.setRoutes([
        {
            path: "/",
            component: "lit-element",
            action: async () => {
                await import("./components/lit-element");
            },
        },
        {
            path: "/post",
            component: "post-i",
            action: async () => {
                await import("./pages/post-1");
            },
        },
    ]);
}
