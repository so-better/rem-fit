class RemFit {
  constructor(proportion, useDpr) {
    this.proportion = proportion;
    this.useDpr = useDpr;
    this.__checkParams();
  }
  /**
   * 校验参数
   */
  __checkParams() {
    if ((typeof this.proportion != "number" || isNaN(this.proportion)) && !Array.isArray(this.proportion)) {
      throw new TypeError("The first argument must be a number or array");
    }
    if (typeof this.useDpr != "boolean") {
      this.useDpr = false;
    }
    if (Array.isArray(this.proportion)) {
      const pass = this.proportion.every((item) => {
        if (item && typeof item == "object") {
          if (typeof item.breakpoint == "number" && !isNaN(item.breakpoint) && item.breakpoint >= 0) {
            if (typeof item.proportion == "number" && !isNaN(item.proportion) && item.proportion > 0) {
              return true;
            }
          }
        }
        return false;
      });
      if (!pass) {
        throw new TypeError("Invalid arguments");
      }
    }
  }
  /**
   * 设置根元素字体大小
   */
  __setFontSize(proportion) {
    let fontSize = Number((this.__getScreenWidth() / proportion).toFixed(2));
    document.documentElement.setAttribute("data-standard", proportion);
    document.documentElement.style.setProperty("font-size", fontSize + "px", "important");
  }
  //获取屏幕宽度
  __getScreenWidth() {
    return document.documentElement.offsetWidth > window.innerWidth ? document.documentElement.offsetWidth : window.innerWidth;
  }
  //进行适配设置
  init() {
    let dpr = 1;
    if (this.useDpr) {
      dpr = Math.round(window.devicePixelRatio || 1);
    }
    let scale = Number((1 / dpr).toFixed(2));
    let metaEle = document.querySelector('meta[name="viewport"]');
    if (!metaEle) {
      metaEle = document.createElement("meta");
      metaEle.setAttribute("name", "viewport");
      metaEle.setAttribute("content", "width=device-width,user-scalable=no, initial-scale=" + scale + ",maximum-scale=" + scale + ", minimum-scale=" + scale);
      document.getElementsByTagName("head")[0].appendChild(metaEle);
    } else {
      metaEle.setAttribute("content", "width=device-width,user-scalable=no, initial-scale=" + scale + ",maximum-scale=" + scale + ", minimum-scale=" + scale);
    }
    if (Array.isArray(this.proportion)) {
      for (let item of this.proportion) {
        if (this.__getScreenWidth() >= item.breakpoint) {
          this.__setFontSize(item.proportion);
        }
      }
    } else {
      this.__setFontSize(this.proportion);
    }
    document.documentElement.setAttribute("data-dpr", dpr);
  }
  //移除适配
  static remove() {
    let metaEle = document.querySelector('meta[name="viewport"]');
    if (metaEle) {
      metaEle.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no");
    }
    document.documentElement.removeAttribute("data-standard");
    document.documentElement.removeAttribute("data-dpr");
    document.documentElement.style.fontSize = "";
  }
}
export {
  RemFit as default
};
