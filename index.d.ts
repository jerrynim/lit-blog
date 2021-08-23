declare module "*.svg?raw";
interface ImportMeta {
    env: {
        PROD: boolean;
        VITE_GA_ID: string;
    };
}

interface Window {
    dataLayer: any;
    prerenderReady: boolean;
}
