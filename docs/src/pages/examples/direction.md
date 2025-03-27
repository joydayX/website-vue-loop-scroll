# Scroll in All Directions

---

The component allows you to control the scrolling direction using the `direction` prop. The default value is `"up"`, and the supported directions are `"up"`, `"down"`, `"left"`, and `"right"`.

<script setup lang="ts">
import { LoopScroll } from "@joyday/vue-loop-scroll";;

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

## 1. Direction Up

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

## 2. Direction Down

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

## 3. Direction Left

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

## 4. Direction Right

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
