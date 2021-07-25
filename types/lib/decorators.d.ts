export declare type Constructor<T> = {
    new (...args: any[]): T;
};
export declare const withStructuredData: (classOrDescriptor: Constructor<HTMLElement>) => any;
