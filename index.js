window.onload = () => {
    const main = document.querySelector("main");

    //* hashchange 이벤트 등록
    window.addEventListener("hashchange", (e) => {
        console.log("hashchanged!!");
    });
    //* 1초후 현재 페이지 내로 라우팅 실행
    setTimeout(() => {
        window.history.pushState({}, "title", `${window.location.href}/move`);
        console.log(window.history);
    }, 1000);

    main.innerHTML = "<div>js loaded</div>";
};
