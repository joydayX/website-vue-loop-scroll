# Responsive Viewport

---

By applying the following CSS styles, you can manually adjust the size of the `box` (resizable from the bottom-right corner). You can observe the scrolling behavior: if the `box` becomes taller, scrolling will stop; if it becomes shorter, scrolling will be enabled.

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
