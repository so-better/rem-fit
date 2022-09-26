class RemFit {
    constructor(proportion, useDpr) {
        this.proportion = proportion
        this.useDpr = useDpr
        this._checkParams()
    }

    /**
     * 校验参数
     */
    _checkParams() {
        if (
            (typeof this.proportion != 'number' || isNaN(this.proportion)) &&
            !Array.isArray(this.proportion)
        ) {
            throw new TypeError('The first argument must be a number or array')
        }
        if (typeof this.useDpr != 'boolean') {
            //如果dpr未赋值，则默认为true
            this.useDpr = false
        }
        //如果是数组
        if (Array.isArray(this.proportion)) {
            const pass = this.proportion.every(item => {
                if (item && typeof item == 'object') {
                    if (
                        typeof item.breakpoint == 'number' &&
                        !isNaN(item.breakpoint) &&
                        item.breakpoint >= 0
                    ) {
                        if (
                            typeof item.proportion == 'number' &&
                            !isNaN(item.proportion) &&
                            item.proportion > 0
                        ) {
                            return true
                        }
                    }
                }
                return false
            })
            if (!pass) {
                throw new TypeError('Invalid arguments')
            }
        }
    }

    /**
     * 设置根元素字体大小
     */
    _setFontSize(proportion) {
        let fontSize = Number((window.innerWidth / proportion).toFixed(2))
        document.documentElement.setAttribute('data-standard', proportion)
        document.documentElement.style.setProperty(
            'font-size',
            fontSize + 'px',
            'important'
        )
    }

    //进行适配设置
    init() {
        let dpr = 1 //默认dpr为1
        if (this.useDpr) {
            dpr = Math.round(window.devicePixelRatio || 1) //获取设备dpr
        }
        let scale = Number((1 / dpr).toFixed(2))
        let metaEle = document.querySelector('meta[name="viewport"]') //meta元素
        //如果meta元素不存在，则自动创建并加入到head里。
        if (!metaEle) {
            metaEle = document.createElement('meta') //创建
            metaEle.setAttribute('name', 'viewport')
            metaEle.setAttribute(
                'content',
                'width=device-width,user-scalable=no, initial-scale=' +
                    scale +
                    ',maximum-scale=' +
                    scale +
                    ', minimum-scale=' +
                    scale
            )
            document.getElementsByTagName('head')[0].appendChild(metaEle)
        } else {
            metaEle.setAttribute(
                'content',
                'width=device-width,user-scalable=no, initial-scale=' +
                    scale +
                    ',maximum-scale=' +
                    scale +
                    ', minimum-scale=' +
                    scale
            )
        }
        document.documentElement.setAttribute('data-dpr', dpr) //将dpr绑定到html元素上
        //添加延时器，在部分机型上会出现视口改变但是设备宽度还没有改变的bug
        setTimeout(() => {
            //proportion为数组
            if (Array.isArray(this.proportion)) {
                for (let item of this.proportion) {
                    if (window.innerWidth >= item.breakpoint) {
                        this._setFontSize(item.proportion)
                    }
                }
            } else {
                this._setFontSize(this.proportion)
            }
        }, 50)
    }

    //移除适配
    static remove() {
        //meta元素
        let metaEle = document.querySelector('meta[name="viewport"]')
        //如果meta元素存在，则重置视口
        if (metaEle) {
            metaEle.setAttribute(
                'content',
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
            )
        }
        //清除对根元素的设置
        document.documentElement.removeAttribute('data-standard')
        document.documentElement.removeAttribute('data-dpr')
        document.documentElement.style.fontSize = ''
    }
}

const packages = require('../package.json')

console.log(
    '%c感谢使用' +
        packages.name +
        '，当前版本：%c v' +
        packages.version +
        '\n%c如果你觉得' +
        packages.name +
        '还不错，不妨去github点个star\ngithub地址：%c' +
        packages.repository.url,
    'color:#808080;',
    'color:#008a00',
    'color:#808080;',
    'color:#008a00'
)

module.exports = RemFit
