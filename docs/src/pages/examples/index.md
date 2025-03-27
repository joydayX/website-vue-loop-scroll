# Basic Usage

---

If no slot is used, the component will render each value from the data source by default, and each item's `key` will be the result of `JSON.stringify(value)`.

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
  <LoopScroll :dataSource></LoopScroll>
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
    <LoopScroll :dataSource></LoopScroll>
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
