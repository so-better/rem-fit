class RemFit {
	constructor(proportion, useDpr) {
		this.proportion = proportion; //屏幕总宽度rem值
		this.useDpr = useDpr; //是否考虑dpr
		//如果dpr未赋值，则默认为true
		if (typeof this.useDpr != 'boolean') {
			this.useDpr = false;
		}
	}

	//进行适配设置
	init() {
		let html = document.documentElement; //html根节点
		let dpr = 1; //默认dpr为1
		if (this.useDpr) {
			dpr = Math.round(window.devicePixelRatio || 1); //获取设备dpr
		}
		let scale = Number((1 / dpr).toFixed(2));
		let metaEle = document.querySelector('meta[name="viewport"]') //meta元素
		//如果meta元素不存在，则自动创建并加入到head里。
		if (!metaEle) {
			metaEle = document.createElement('meta'); //创建
			metaEle.setAttribute("name", "viewport");
			metaEle.setAttribute("content",
				'width=device-width,user-scalable=no, initial-scale=' + scale + ',maximum-scale=' + scale +
				', minimum-scale=' +
				scale);
			document.getElementsByTagName("head")[0].appendChild(metaEle);
		} else {
			metaEle.setAttribute("content",
				'width=device-width,user-scalable=no, initial-scale=' + scale + ',maximum-scale=' + scale +
				', minimum-scale=' +
				scale);
		}
		//设置根元素字体大小
		let fontSize = Number((window.innerWidth / this.proportion).toFixed(2));
		html.setAttribute("data-standard", this.proportion);
		html.setAttribute("data-dpr", dpr); //将dpr绑定到html元素上
		html.style.setProperty('font-size', fontSize + 'px', 'important');
	}

	//移除适配
	static remove() {
		//html根节点
		let html = document.documentElement;
		//meta元素
		let metaEle = document.querySelector('meta[name="viewport"]')
		//如果meta元素存在，则重置视口
		if (metaEle) {
			metaEle.setAttribute("content",
				'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no');
		}
		//清除对根元素的设置
		html.removeAttribute('data-standard');
		html.removeAttribute('data-dpr');
		html.style.fontSize = '';
	}
}

const packages = require('../package.json');

console.log('%c感谢使用' + packages.name + '，当前版本：%c v' + packages.version + '\n%c如果你觉得' + packages.name +
	'还不错，不妨去github点个star\ngithub地址：%c' + packages.github, 'color:#808080;', 'color:#008a00',
	'color:#808080;', 'color:#008a00');

module.exports = RemFit
