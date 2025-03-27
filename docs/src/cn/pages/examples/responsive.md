# 自适应视口大小

---

通过设置以下 CSS 样式，可以手动调整 `box` 的大小（可通过右下角拖动）。你可以观察 `box` 的滚动情况：如果 `box` 变得较高，则不会滚动；如果 `box` 变得较低，则会触发滚动。

```css
.box {
  resize: both;
  overflow: auto;
}
```

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
  <LoopScroll :dataSource :pausedOnHover="false"></LoopScroll>
</div>

<style module>
  .box {
    resize: both;
    overflow: auto;

    height: 150px;
    border: 1px solid red;
    :global(.scroll-loop-item) {
      border-bottom: 1px dashed #000;
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
  resize: both;
  overflow: auto;

  height: 150px;
  border: 1px solid red;
  :deep(.scroll-loop-item) {
    border-bottom: 1px dashed #000;
    padding: 10px 4px;
  }
}
</style>
```
