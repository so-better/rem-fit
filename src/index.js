class RemFit {
	constructor(proportion, useDpr) {
		this.proportion = proportion; //屏幕总宽度rem值
		this.useDpr = useDpr; //是否考虑dpr
		//如果dpr未赋值，则默认为true
		if (typeof(this.useDpr) != 'boolean') {
			this.useDpr = true;
		}
	}

	set() {
		var html = document.documentElement; //html根节点
		var dpr = 1; //默认dpr为1
		if (this.useDpr) {
			dpr = Math.round(window.devicePixelRatio || 1); //获取设备dpr
		}
		var scale = 1 / dpr;
		var metaEle = document.querySelector('meta[name="viewport"]') //meta元素
		//如果meta元素不存在，则自动创建并加入到head里。
		if (!metaEle) {
			metaEle = document.createElement('meta'); //创建
			metaEle.setAttribute("name", "viewport");
			metaEle.setAttribute("content",
				'width=device-width,user-scalable=no, initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' +
				scale);
			document.getElementsByTagName("head")[0].appendChild(metaEle);
		} else {
			metaEle.setAttribute("content",
				'width=device-width,user-scalable=no, initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' +
				scale);
		}
		//设置根元素字体大小
		var fontSize = window.innerWidth / this.proportion;
		html.setAttribute("data-standard", this.proportion);
		html.setAttribute("data-dpr", dpr); //将dpr绑定到html元素上
		html.style.setProperty('font-size', fontSize + 'px', 'important');
	}

}

const packages = require('../package.json');

console.log('%c感谢使用'+packages.name+'，当前版本：%c v'+packages.version+'\n%c'+packages.name+'完全由个人开发，如果你觉得还不错的话，欢迎前往github给个star，感谢！\ngithub地址：%c'+packages.github,'color:#808080;','color:#008a00','color:#808080;','color:#008a00');

module.exports = RemFit
