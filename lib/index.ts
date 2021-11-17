export const parseDate = (date: Date) => {
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
        "0" + date.getDate()
    ).slice(-2)}`;
};

export const resetMetaData = () => {
    const title = "제리님 블로그";
    const description = "좋은 포스트와 해결법을 저장하는 곳";
    const keywords = "제리님 기술 블로그";
    const url = "https://jerrynim.dev/";
    const image = "https://jerrynim.dev/static/Profile.png";

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

export const detectRobot = (userAgent: string): boolean => {
    const robots = new RegExp(
        (
            [
                /bot/,
                /spider/,
                /crawl/, // GENERAL TERMS
                /APIs-Google/,
                /AdsBot/,
                /Googlebot/, // GOOGLE ROBOTS
                /mediapartners/,
                /Google Favicon/,
                /FeedFetcher/,
                /Google-Read-Aloud/,
                /DuplexWeb-Google/,
                /googleweblight/,
                /bing/,
                /yandex/,
                /baidu/,
                /duckduck/,
                /yahoo/, // OTHER ENGINES
                /ecosia/,
                /ia_archiver/,
                /facebook/,
                /instagram/,
                /pinterest/,
                /reddit/, // SOCIAL MEDIA
                /slack/,
                /twitter/,
                /whatsapp/,
                /youtube/,
                /semrush/, // OTHER
            ] as RegExp[]
        )
            .map((r) => r.source)
            .join("|"),
        "i",
    ); // BUILD REGEXP + "i" FLAG

    return robots.test(userAgent);
};
