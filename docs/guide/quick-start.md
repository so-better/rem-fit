---
title: 快速上手
---

# 快速上手

## 基本使用

如果你是通过 `cdn` 在线引入或者下载文件到本地使用，需要先按照如下方法获取 `RemFit` 对象

```ts
const RemFit = window.RemFit.default
```

或者

```ts
const { RemFit } = window.RemFit
```

如果是通过 `npm` `yarn` `pnpm` 安装

```ts
import RemFit from 'rem-fit'
```

接着，创建实例对象

```ts
const remFit = new RemFit(proportion, useDpr)
```

## 构造参数

##### proportion <Badge type="danger" text="number | ProportionItemType[]" />

设置以 `rem` 为单位的屏幕总宽度值，即屏幕的划分份数。如果是数值，表示任意情况下屏幕宽度始终为固定的 `rem` 值；如果是数组，则数组中每个元素是一个对象，该对象包含 `breakpoint` 和 `proportion` 两个字段，分别表示断点屏幕宽度像素值、此断点下的屏幕宽度 `rem` 值

##### useDpr <Badge type="danger" text="boolean" />

否考虑设备 `dpr`，即设备物理像素与逻辑像素比，默认为 `false`

## 示例

```ts
//将屏幕宽度设定为7.5rem，以750px宽度的设计稿为标准，则1rem=100px
const remFit = new RemFit(7.5, true)
remFit.init()
```
