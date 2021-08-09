export const parseDate = (date: Date) => {
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(
        -2,
    )}-${date.getDate()}`;
};

export const resetMetaData = () => {
    const title = "제리님 블로그";
    const description = "좋은 포스트와 해결법을 저장하는 곳";
    const keywords = "제리님 기술 블로그";
    const url = "https://www.jerrynim.io/";
    const image = "https://jerrynim.io/static/Profile.png";

    (document.querySelector("meta[name='description']") as any)!.content =
        description;

    //* 키워드
    (document.querySelector("meta[property='keywords']") as any)!.content =
        keywords;
    //* 타이틀

    (document.querySelector(
        "meta[property='og:description']",
    ) as any)!.content = description;
    document.title = title;

    (document.querySelector("link[rel='canonical'") as any).href = url;

    //? og설정

    (document.querySelector("meta[property='og:title']") as any)!.content =
        title;

    (document.querySelector(
        "meta[property='og:description']",
    ) as any)!.content = description;

    (document.querySelector("meta[property='og:url']") as any)!.content = url;

    (document.querySelector("meta[property='og:image']") as any)!.content =
        image;

    (document.querySelector(
        "meta[property='og:image:width']",
    ) as any)!.content = 1000;
    (document.querySelector(
        "meta[property='og:image:height']",
    ) as any)!.content = 300;
    (document.querySelector("meta[property='og:image:alt']") as any)!.content =
        title;

    (document.querySelector(
        "meta[property='og:image:secure_url']",
    ) as any)!.href = image;
};
