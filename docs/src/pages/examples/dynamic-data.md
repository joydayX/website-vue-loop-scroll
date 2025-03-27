# Dynamic Data Update

---

Supports dynamic data updates and insertions, simulating server-side data changes without affecting the current scrolling state.

<script setup lang="ts">
import { LoopScroll } from "@joyday/vue-loop-scroll";;
import { ref } from "vue";

const SCROLL_TEXT =  "scrolling scrolling";

const list = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  value: SCROLL_TEXT,
}));

const dataSource = ref(list);

const updateNum = ref(0);
const updateData = ()=>{
    updateNum.value++;
    dataSource.value = dataSource.value.map(item=>({
        ...item,
        value: item.id % 2 ? item.value:  `${SCROLL_TEXT}--time:${Date.now()}`
    }))
}

const appendNum = ref(0);
const appendData = ()=>{
    appendNum.value++;
    dataSource.value.push({
        id: dataSource.value.length + 1,
        value: SCROLL_TEXT
    });
}

</script>

<div :class="$style.box">
  <LoopScroll
    :dataSource
    :waitTime="1000"
    itemKey="id"
    :pausedOnHover="false"
  >
    <template #default="{ item }">
      {{ item.id }}.{{ item.value }}
    </template>
  </LoopScroll>
</div>

<button :class="$style.btn" @click="updateData">Update Data {{ updateNum > 0 ? updateNum : '' }}</button>

<button :class="$style.btn" @click="appendData">Append Data {{ appendNum > 0 ? appendNum : '' }}</button>

<style module>
  .box {
    resize: both;
    overflow: auto;
    height: 150px;
    border: 1px solid red;
    :global(.scroll-loop-item) {
      border-bottom: 1px dashed #000;
      padding: 10px 4px;
      &:last-child{
        border: 0;
      }
    }
  }

  .btn {
    color: #fff;
    background: #1677ff;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
    border-radius: 6px;
    padding: 0 15px;
    font-weight: bold;
    &:hover {
      background: #4096ff;
    }
  }
</style>

```vue
<script setup lang="ts">
import { LoopScroll } from "@joyday/vue-loop-scroll";
import { ref } from "vue";

const SCROLL_TEXT = "scrolling scrolling";

const list = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  value: SCROLL_TEXT,
}));

const dataSource = ref(list);

const updateNum = ref(0);
const updateData = () => {
  updateNum.value++;
  dataSource.value = dataSource.value.map((item) => ({
    ...item,
    value: item.id % 2 ? item.value : `${SCROLL_TEXT}--time:${Date.now()}`,
  }));
};

const appendNum = ref(0);
const appendData = () => {
  appendNum.value++;
  dataSource.value.push({
    id: dataSource.value.length + 1,
    value: SCROLL_TEXT,
  });
};
</script>

<template>
  <div class="box">
    <LoopScroll
      :dataSource
      :waitTime="1000"
      itemKey="id"
      :pausedOnHover="false"
    >
      <template #default="{ item }">
        <span>{{ item.id }}.{{ item.value }}</span>
      </template>
    </LoopScroll>
  </div>

  <button class="btn" @click="updateData">
    Update Data {{ updateNum > 0 ? updateNum : "" }}
  </button>
  <button class="btn" @click="appendData">
    Append Data {{ appendNum > 0 ? appendNum : "" }}
  </button>
</template>

<style scoped>
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

.btn {
  color: #fff;
  background: #1677ff;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  border-radius: 6px;
  padding: 0 15px;
  font-weight: bold;
  &:hover {
    background: #4096ff;
  }
}
</style>
```
