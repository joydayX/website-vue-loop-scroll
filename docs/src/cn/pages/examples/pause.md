# 滚动暂停

## 1. 单步滚动暂停

### 示例-1

组件可以通过 `waitTime` 属性来控制单步滚动的暂停时间，默认值为 `0`，表示不暂停。

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

### 示例-2

通过设置容器高度来实现单行滚动效果，例如：`.box { height: 45px; }`

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

## 2. 翻页滚动暂停

通过设置属性 `waitMode="page"` 实现每滚动一页后暂停的效果。

<div :class="$style.box">
  <LoopScroll :dataSource waitMode="page" :waitTime="1000"></LoopScroll>
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
    <LoopScroll :dataSource waitMode="page" :waitTime="1000"></LoopScroll>
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