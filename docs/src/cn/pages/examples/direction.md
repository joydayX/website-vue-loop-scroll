# 四个方向滚动

---

组件可以通过 `direction` 属性来控制滚动方向，默认值为 `"up"`，支持的方向包括 `"up"`、`"down"`、`"left"` 和 `"right"`。

<script setup lang="ts">
import { LoopScroll } from "@joyday/vue-loop-scroll";

const dataSource = [
  "1. scrolling scrolling scrolling",
  "2. scrolling scrolling scrolling",
  "3. scrolling scrolling scrolling",
  "4. scrolling scrolling scrolling",
];
</script>

<style module>
  .boxUp {
    height: 150px;
    border: 1px solid red;
    :global(.scroll-loop-item) {
      border-bottom: 1px dashed #000;
      padding: 10px;
    }
  }
  .boxDown {
    height: 150px;
    border: 1px solid red;
    :global(.scroll-loop-item) {
      border-top: 1px dashed #000;
      padding: 10px;
    }
  }
  .boxLeft {
    width: 680px;
    border: 1px solid red;
    :global(.scroll-loop-item) {
      padding: 10px;
    }
  }
  .boxRight {
    width: 680px;
    border: 1px solid red;
    :global(.scroll-loop-item) {
      padding: 10px;
    }
  }
</style>

## 1. 向上滚动

<div :class="$style.boxUp">
  <LoopScroll :dataSource></LoopScroll>
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
    <LoopScroll :dataSource></LoopScroll>
  </div>
</template>

<style scoped>
.box {
  height: 150px;
  border: 1px solid red;
  :deep(.scroll-loop-item) {
    border-bottom: 1px dashed #000;
    padding: 10px;
  }
}
</style>
```

## 2. 向下滚动

<div :class="$style.boxDown">
  <LoopScroll :dataSource direction="down"></LoopScroll>
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
    <LoopScroll :dataSource direction="down"></LoopScroll>
  </div>
</template>

<style scoped>
.box {
  height: 150px;
  border: 1px solid red;
  :deep(.scroll-loop-item) {
    border-top: 1px dashed #000;
    padding: 10px;
  }
}
</style>
```

## 3. 向左滚动

<div :class="$style.boxLeft">
  <LoopScroll :dataSource direction="left"></LoopScroll>
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
    <LoopScroll :dataSource direction="left"></LoopScroll>
  </div>
</template>

<style scoped>
.box {
  width: 680px;
  border: 1px solid red;
  :deep(.scroll-loop-item) {
    padding: 10px;
  }
}
</style>
```

## 4. 向右滚动

<div :class="$style.boxRight">
  <LoopScroll :dataSource direction="right"></LoopScroll>
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
    <LoopScroll :dataSource direction="right"></LoopScroll>
  </div>
</template>

<style scoped>
.box {
  width: 680px;
  border: 1px solid red;
  :deep(.scroll-loop-item) {
    padding: 10px;
  }
}
</style>
```
