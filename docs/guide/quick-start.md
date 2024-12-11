---
title: 快速上手
---

# 快速上手

## 获取 Animator 对象和 Clip 对象

- 如果你是通过 `cdn` 在线引入或者下载文件到本地使用，需要先按照如下方法获取 `Animator` 对象和 `Clip` 对象

```ts
const { Animator, Clip } = window.AnimatorClip
```

- 如果你是通过 `npm/yarn/pnpm` 引入

```ts
import { Animator, Clip } from 'animator-clip'
```

## 创建实例

创建 `Animator` 实例

```ts
//Animator实例在创建时，构造函数包含el和options两个参数
const animator = new Animator(el, options)
```

创建 `Clip` 实例

```ts
//clip实例创建时，构造函数只有一个参数，也可以没有
const clip = new Clip([options])
```

将 `clip` 添加到 `animator` 中

```ts
animator.addClip(clip) //clip必须添加到animator中才能进行动画
```

> clip 对象实例被称之为动画帧，创建完成后塞入动画实例 animator 中，调用 animator 来执行动画

具体关于 `animator` 实例和 `clip` 实例的描述参考后续文档
