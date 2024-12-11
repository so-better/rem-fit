export type ProportionItemType = {
    breakpoint: number;
    proportion: number;
};
declare class RemFit {
    proportion: number | ProportionItemType[];
    useDpr?: boolean;
    constructor(proportion: number | ProportionItemType[], useDpr?: boolean);
    private setFontSize;
    private getScreenWidth;
    init(): void;
    static remove(): void;
}
export { RemFit, RemFit as default };
