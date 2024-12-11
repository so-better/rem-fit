---
title: API
---

# API

## init()

进行适配

- 类型

  ```ts
  init(): void
  ```

- 详细信息

  该方法是 `rem-fit` 核心的方法，执行此方法时，`rem-fit` 会根据屏幕的宽度以及适配参数进行适配，最终更改根节点字体大小和修改视口大小

- 示例

  ```ts
  const remFit = new RemFit(7.5, false)
  remFit.init()
  ```

## remove()

移除适配

- 类型

  ```ts
  remove(): void
  ```

- 详细信息

  该方法 `RemFit` 的类对象方法，不是实例对象方法

  创建多个 `remFit` 对象实例并且调用了多个其 `init` 方法，`remove` 方法都可以重置，因为本质上它的重置是对 `html` 和 `meta` 标签的更改，与具体的某个 `remFit` 对象实例无关

- 示例

  ```ts
  RemFit.remove()
  ```
