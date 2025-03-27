---
outline: deep
---

# Properties

---

| Name              | Required | Default | Type                                              | Description                                                                                                     |
| ----------------- | -------- | ------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **dataSource**    | Yes      | -       | `T[]`                                             | The array of data items to be displayed in the scrolling list.                                                  |
| **itemKey**       | No       | -       | `K` (Optional, must extend `keyof T` if provided) | The unique key field name for each data item in `dataSource`.                                                   |
| **direction**     | No       | `"up"`  | `"up" \| "down" \| "left" \| "right"`             | Scrolling direction. Options: `"up"`, `"down"`, `"left"`, `"right"`.                                            |
| **speed**         | No       | `1`     | `number`                                          | Scrolling speed factor (pixels per frame). Higher values scroll faster.                                         |
| **waitTime**      | No       | `0`     | `number`                                          | Pause time per step (in milliseconds). Default is no pause.                                                     |
| **pausedOnHover** | No       | `true`  | `boolean`                                         | Whether scrolling pauses when hovering over the component. Default behavior: scrolling does not pause on hover. |
| **loadCount**     | No       | `1`     | `number`                                          | Number of items loaded per batch. Affects scrolling smoothness and performance.                                 |
