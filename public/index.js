window.onload = () => {
    const main = document.querySelector("main");

    const handleLocationChange = (e) => {
        const { href } = e.detail;
        console.log(href);

        //* 주소변경
        window.history.pushState(undefined, "타이틀", href);
    };

    //* locationchange 이벤트리스너
    window.addEventListener("locationchange", handleLocationChange);

    main.innerHTML = "<div><button type='button'>move to /some</button></div>";

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const locationChangeEvent = new CustomEvent("locationchange", {
            composed: true,
            detail: { href: "some" },
        });

        //* 주소변경 이벤트 Dispatch
        window.dispatchEvent(locationChangeEvent);
    });
};
