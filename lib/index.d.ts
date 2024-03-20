declare class RemFit {
    proportion: number;
    useDpr?: boolean;
    constructor(proportion: number, useDpr?: boolean);
    private __checkParams;
    private __setFontSize;
    private __getScreenWidth;
    init(): void;
    static remove(): void;
}
export default RemFit;
