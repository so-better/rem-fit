---
title: 安装
---

# 安装

## 下载 rem-fit 本地到使用

- 下载地址：[rem-fit](https://registry.npmmirror.com/rem-fit/download/rem-fit-1.6.6.tgz)
- 下载完成后最终解压得到一个 package 文件夹，进入 package 文件夹后，将 package 目录下的整个 lib 目录拷贝到你的项目下
- 在 html 页面中引入 js

```html
<!-- 使用全局构建版本 -->
<script src="lib/rem-fit.umd.js" type="text/javascript"></script>
```

```html
<!-- 使用es模块构建版本 -->
<script type="module">
  import { RemFit } from 'lib/rem-fit.es.js'
</script>
```

## 通过 CDN 使用 rem-fit

你可以借助 `script` 标签直接通过 CDN 来使用 `rem-fit`

```html
<!-- 引入固定版本的rem-fit -->
<script src="https://unpkg.com/rem-fit@1.6.6/lib/rem-fit.umd.js"></script>
<!-- 始终引入最新的rem-fit -->
<script src="https://unpkg.com/rem-fit/lib/rem-fit.umd.js"></script>
```

```html
<!-- 使用CDN上的es模块构建版本 -->
<script type="module">
  import { data } from 'https://unpkg.com/rem-fit/lib/rem-fit.es.js'
</script>
```

## 通过 npm/yarn/pnpm 安装 rem-fit

> 假设你已了解关于  html、css  和  javascript  的中级知识，并且对于 npm，es6，webpack 已经有了足够的了解，我们更推荐这类安装方式

::: code-group

```bash [npm]
npm install rem-fit

# 安装指定版本
npm install rem-fit@1.6.6
```

```bash [yarn]
yarn install rem-fit

# 安装指定版本
yarn install rem-fit@1.6.6
```

```bash [pnpm]
pnpm install rem-fit

# 安装指定版本
pnpm install rem-fit@1.6.6
```

:::
