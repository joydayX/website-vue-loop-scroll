---
outline: deep
---

# Getting Started

## Installation

### PNPM

```bash
pnpm i @joyday/vue-loop-scroll
```

### NPM

```bash
npm i @joyday/vue-loop-scroll
```

## Basic Usage

The basic usage of the component.

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

## Customize Usage

You can customize the rendering content using `slot`.

```vue
<script setup lang="ts">
import { LoopScroll } from "@joyday/vue-loop-scroll";

const dataSource = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  value: "scrolling scrolling scrolling scrolling",
}));
</script>

<template>
  <div class="box">
    <LoopScroll :dataSource>
      <template #default="{ item }">
        <span>{{ item.id }}.{{ item.value }}</span>
      </template>
    </LoopScroll>
  </div>
</template>

<style scoped>
.box {
  height: 140px;
  border: 1px solid red;
  :deep(.scroll-loop-item) {
    margin: 10px;
  }
}
</style>
```

## Advanced Usage

You can pass scrolling direction, pause time per step, and specify a unique key for each data item.

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
