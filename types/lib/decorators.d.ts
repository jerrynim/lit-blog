export declare type Constructor<T> = {
    new (...args: any[]): T;
};
export declare const withPost: (classOrDescriptor: Constructor<HTMLElement>) => any;
