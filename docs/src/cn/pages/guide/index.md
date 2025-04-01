---
outline: deep
---

# 开始使用

## 安装

### PNPM

```bash
pnpm i @joyday/vue-loop-scroll
```

### NPM

```bash
npm i @joyday/vue-loop-scroll
```

### Yarn

```bash
yarn add @joyday/vue-loop-scroll
```

## 基础用法

组件的基础使用方法。

```vue
<script setup lang="ts">
import { LoopScroll } from "@joyday/vue-loop-scroll";

const dataSource = [
  "1. scrolling scrolling scrolling scrolling",
  "2. scrolling scrolling scrolling scrolling",
  "3. scrolling scrolling scrolling scrolling",
  "4. scrolling scrolling scrolling scrolling",
];
</script>
<template>
  <LoopScroll :dataSource></LoopScroll>
</template>
```

## 自定义渲染

可使用 `slot` 自定义渲染内容。

```vue
<script setup lang="ts">
import { LoopScroll } from "@joyday/vue-loop-scroll";

const dataSource = [
  "1. scrolling scrolling scrolling scrolling",
  "2. scrolling scrolling scrolling scrolling",
  "3. scrolling scrolling scrolling scrolling",
  "4. scrolling scrolling scrolling scrolling",
];
</script>

<template>
  <LoopScroll :dataSource>
    <template #default="{ item }">
      <div class="item">{{ item }}</div>
    </template>
  </LoopScroll>
</template>
```

## 高级用法

可传递滚动方向、单步停顿时间以及数据的唯一标识字段名。

```vue
<script setup lang="ts">
import { LoopScroll } from "@joyday/vue-loop-scroll";

const dataSource = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  value: "scrolling scrolling scrolling scrolling",
}));
</script>
<template>
  <LoopScroll :dataSource itemKey="id" direction="left" :waitTime="3000">
    <template #default="{ item }">
      <div class="item">{{ item.id }}.{{ item.value }}</div>
    </template>
  </LoopScroll>
</template>
```
