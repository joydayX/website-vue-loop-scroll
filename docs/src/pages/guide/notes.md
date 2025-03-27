# Notes

---

When using this component in real projects, it is important to set **`itemKey`** and **`loadCount`** properly for optimal performance and accurate data updates.

- **`itemKey`** is the unique identifier for each list item. During data updates, the component will locate and update the corresponding item based on `itemKey`, ensuring correct data mapping and rendering.

- **`loadCount`** determines the number of items loaded per batch. The default value is `1`, but it is recommended to set it to **the maximum number of items that can fit in the visible area**. This improves performance by reducing unnecessary rendering calculations, instead of loading only `1` item at a time and repeatedly checking whether the visible area is filled.
