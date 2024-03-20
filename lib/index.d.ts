type ProportionItemType = {
    breakpoint: number;
    proportion: number;
};
declare class RemFit {
    proportion: number | ProportionItemType[];
    useDpr?: boolean;
    constructor(proportion: number | ProportionItemType[], useDpr?: boolean);
    private __checkParams;
    private __setFontSize;
    private __getScreenWidth;
    init(): void;
    static remove(): void;
}
export default RemFit;
