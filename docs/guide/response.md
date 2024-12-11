---
title: 响应式适配
---

# 响应式适配

> 创建 RemFit 实例对象时的构造参数 proportion 可以为数组，表示响应式适配，即在不同的屏幕宽度下，屏幕宽度的 rem 大小不同

## 基本使用

数组中的每一项都是一个对象，包含如下属性：

- `breakpoint`：屏幕宽度，即当屏幕大于此宽度时对应的 `proportion` 生效

- `proportion`：屏幕宽度的 `rem` 值

## 示例

如下是一个简单的响应式适配方案

```ts
const params = [
  //屏幕大于等于0px时总宽度为7.5rem
  {
    breakpoint: 0,
    proportion: 7.5
  },
  //屏幕大于等于640px时总宽度为20rem
  {
    breakpoint: 640,
    proportion: 20
  }
]
const remFit = new RemFit(params, false)
remFit.init()
```
