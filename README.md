# rem-fit

[![npm](https://img.shields.io/npm/v/rem-fit)](https://www.npmjs.com/package/rem-fit)
[![license](https://img.shields.io/npm/l/rem-fit)](https://github.com/so-better/rem-fit/blob/master/LICENSE)

一款使用 rem 适配 web 页面的轻量级 JS 插件

## 简介

`rem-fit` 是一个基础的基于 rem 进行 web 页面适配的轻量级 JS 插件，尤其是在移动端，使用 `rem-fit` 可以做到完全百分百还原设计稿。

`rem-fit` 将整个屏幕宽度划分为若干份，每一份代表 `1rem` 的宽度，无论实际 `px` 是多少的屏幕，只要划分成若干份，每一份都是固定的 `rem` 数值，因此整个屏幕的 `rem` 宽度也是固定的。

## 特性

- 轻量级，无任何依赖
- 支持固定份数和响应式多断点两种适配模式
- 支持设备 DPR（物理像素比）适配
- 支持 CDN、下载本地、npm 多种引入方式
- 提供 TypeScript 类型定义

## 安装

### 通过 npm / yarn / pnpm 安装

```bash
# npm
npm install rem-fit

# 安装指定版本
npm install rem-fit@1.6.7

# yarn
yarn add rem-fit

# pnpm
pnpm add rem-fit
```

### 通过 CDN 使用

```html
<!-- 引入固定版本 -->
<script src="https://unpkg.com/rem-fit@1.6.7/lib/rem-fit.umd.js"></script>
<!-- 始终引入最新版本 -->
<script src="https://unpkg.com/rem-fit/lib/rem-fit.umd.js"></script>
```

```html
<!-- 使用 CDN 上的 ES 模块版本 -->
<script type="module">
  import { RemFit } from 'https://unpkg.com/rem-fit/lib/rem-fit.es.js'
</script>
```

### 下载到本地使用

- 下载地址：[rem-fit-1.6.7.tgz](https://registry.npmmirror.com/rem-fit/download/rem-fit-1.6.7.tgz)
- 解压后将 `lib` 目录拷贝到项目下，在 HTML 中引入：

```html
<!-- UMD 版本 -->
<script src="lib/rem-fit.umd.js" type="text/javascript"></script>

<!-- ES 模块版本 -->
<script type="module">
  import { RemFit } from 'lib/rem-fit.es.js'
</script>
```

## 快速上手

若通过 CDN 或本地文件引入，先获取 `RemFit` 对象：

```ts
const RemFit = window.RemFit.default
// 或
const { RemFit } = window.RemFit
```

若通过 npm 安装：

```ts
import RemFit from 'rem-fit'
```

创建实例并初始化：

```ts
// 将屏幕宽度设定为 7.5rem，以 750px 宽度的设计稿为标准，则 1rem = 100px
const remFit = new RemFit(7.5, true)
remFit.init()
```

## API

### `new RemFit(proportion, useDpr?)`

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| proportion | `number \| ProportionItemType[]` | 是 | 屏幕宽度的 rem 份数。传数字表示固定份数；传数组表示响应式多断点适配 |
| useDpr | `boolean` | 否 | 是否考虑设备 DPR（物理像素与逻辑像素比），默认 `false` |

### `remFit.init()`

进行适配。根据屏幕宽度和适配参数更改根节点字体大小及视口设置。

```ts
const remFit = new RemFit(7.5, false)
remFit.init()
```

### `RemFit.remove()`

移除适配（静态方法）。重置视口和根元素字体大小，与具体实例无关。

```ts
RemFit.remove()
```

### `ProportionItemType`

```ts
type ProportionItemType = {
  breakpoint: number  // 断点屏幕宽度（px），屏幕宽度 >= 此值时生效
  proportion: number  // 此断点下屏幕宽度的 rem 值
}
```

## 响应式多断点适配

`proportion` 传数组时，可实现不同屏幕宽度下使用不同的 rem 份数：

```ts
const params = [
  // 屏幕 >= 0px 时总宽度为 7.5rem
  { breakpoint: 0, proportion: 7.5 },
  // 屏幕 >= 640px 时总宽度为 20rem
  { breakpoint: 640, proportion: 20 }
]
const remFit = new RemFit(params, false)
remFit.init()
```

如果屏幕宽度可变，结合 `resize` 事件重新调用 `init()`：

```ts
window.addEventListener('resize', () => {
  remFit.init()
})
```

## 文档

完整文档请访问：[https://www.so-better.cn/docs/rem-fit](https://www.so-better.cn/docs/rem-fit)

## License

[MIT](./LICENSE)
