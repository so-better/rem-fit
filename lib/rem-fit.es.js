var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class RemFit {
  constructor(proportion, useDpr) {
    __publicField(this, "proportion");
    __publicField(this, "useDpr");
    this.proportion = proportion;
    this.useDpr = useDpr;
  }
  //设置根元素字体大小
  setFontSize(proportion) {
    const fontSize = Number((this.getScreenWidth() / proportion).toFixed(2));
    document.documentElement.setAttribute("data-standard", proportion + "");
    document.documentElement.style.setProperty("font-size", fontSize + "px", "important");
  }
  //获取屏幕宽度
  getScreenWidth() {
    return document.documentElement.offsetWidth > window.innerWidth ? document.documentElement.offsetWidth : window.innerWidth;
  }
  //进行适配设置
  init() {
    const dpr = this.useDpr ? Math.round(window.devicePixelRatio || 1) : 1;
    const scale = Number((1 / dpr).toFixed(2));
    let metaEle = document.querySelector('meta[name="viewport"]');
    if (!metaEle) {
      metaEle = document.createElement("meta");
      metaEle.setAttribute("name", "viewport");
      metaEle.setAttribute("content", `width=device-width,user-scalable=no, initial-scale=${scale},maximum-scale=${scale}, minimum-scale=${scale}`);
      document.getElementsByTagName("head")[0].appendChild(metaEle);
    } else {
      metaEle.setAttribute("content", `width=device-width,user-scalable=no, initial-scale=${scale},maximum-scale=${scale}, minimum-scale=${scale}`);
    }
    if (Array.isArray(this.proportion)) {
      for (let item of this.proportion) {
        if (this.getScreenWidth() >= item.breakpoint) {
          this.setFontSize(item.proportion);
        }
      }
    } else {
      this.setFontSize(this.proportion);
    }
    document.documentElement.setAttribute("data-dpr", `${dpr}`);
  }
  //移除适配
  static remove() {
    const metaEle = document.querySelector('meta[name="viewport"]');
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
