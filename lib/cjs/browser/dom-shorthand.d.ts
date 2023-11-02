export declare const $id: (elementId: string) => HTMLElement | null;
export declare const $class: (classNames: string) => HTMLCollectionOf<Element>;
export declare const $query: {
    <K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    <K_1 extends keyof SVGElementTagNameMap>(selectors: K_1): SVGElementTagNameMap[K_1] | null;
    <K_2 extends keyof MathMLElementTagNameMap>(selectors: K_2): MathMLElementTagNameMap[K_2] | null;
    <K_3 extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K_3): HTMLElementDeprecatedTagNameMap[K_3] | null;
    <E extends Element = Element>(selectors: string): E | null;
};
export declare const $queryAll: {
    <K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    <K_1 extends keyof SVGElementTagNameMap>(selectors: K_1): NodeListOf<SVGElementTagNameMap[K_1]>;
    <K_2 extends keyof MathMLElementTagNameMap>(selectors: K_2): NodeListOf<MathMLElementTagNameMap[K_2]>;
    <K_3 extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K_3): NodeListOf<HTMLElementDeprecatedTagNameMap[K_3]>;
    <E extends Element = Element>(selectors: string): NodeListOf<E>;
};
