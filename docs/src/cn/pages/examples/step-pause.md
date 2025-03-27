# 单步滚动停顿

## 示例一

组件可以通过 `waitTime` 属性来控制单步滚动的停顿时间，默认值为 `0`，表示不停顿。

<script setup lang="ts">
import { LoopScroll } from "@joyday/vue-loop-scroll";;

const dataSource = [
  "1. scrolling scrolling scrolling",
  "2. scrolling scrolling scrolling",
  "3. scrolling scrolling scrolling",
  "4. scrolling scrolling scrolling",
];
</script>

<div :class="$style.box">
  <LoopScroll :dataSource :waitTime="1000"></LoopScroll>
</div>

<style module>
  .box {
    height: 150px;
    border: 1px solid red;
    :global(.scroll-loop-item) {
      border-bottom: 1px dashed #000;
      padding: 10px 4px;
    }
  }
  .box2 {
    height: 45px;
    border: 1px solid red;
    :global(.scroll-loop-item) {
      padding: 10px 4px;
    }
  }
</style>

```vue
<script setup lang="ts">
import { LoopScroll } from "@joyday/vue-loop-scroll";

const dataSource = [
  "1. scrolling scrolling scrolling",
  "2. scrolling scrolling scrolling",
  "3. scrolling scrolling scrolling",
  "4. scrolling scrolling scrolling",
];
</script>

<template>
  <div class="box">
    <LoopScroll :dataSource :waitTime="1000"></LoopScroll>
  </div>
</template>

<style scoped>
.box {
  height: 150px;
  border: 1px solid red;
  :deep(.scroll-loop-item) {
    border-bottom: 1px dashed #000;
    padding: 10px 4px;
  }
}
</style>
```

## 示例二

单行翻转滚动。

<div :class="$style.box2">
  <LoopScroll :dataSource :waitTime="1000"></LoopScroll>
</div>

```vue
<script setup lang="ts">
import { LoopScroll } from "@joyday/vue-loop-scroll";

const dataSource = [
  "1. scrolling scrolling scrolling",
  "2. scrolling scrolling scrolling",
  "3. scrolling scrolling scrolling",
  "4. scrolling scrolling scrolling",
];
</script>

<template>
  <div class="box">
    <LoopScroll :dataSource :waitTime="1000"></LoopScroll>
  </div>
</template>

<style scoped>
.box {
  height: 45px;
  border: 1px solid red;
  :deep(.scroll-loop-item) {
    padding: 10px 4px;
  }
}
</style>
```
