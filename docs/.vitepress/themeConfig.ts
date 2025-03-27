export const nav = {
  en: [
    { text: "Home", link: "/" },
    { text: "Examples", link: "/pages/examples/" },
  ],
  zh: [
    { text: "首页", link: "/cn/" },
    { text: "示例", link: "/cn/pages/examples/" },
  ],
};

export const sidebar = {
  en: {
    "/pages/": {
      base: "/pages/",
      items: [
        {
          text: "Introduction",
          items: [
            { text: "Getting Started", link: "guide/" },
            { text: "Properties", link: "guide/properties" },
            { text: "Notes", link: "guide/notes" },
          ],
        },
        {
          text: "Examples",
          items: [
            { text: "Basic Usage", link: "examples/" },
            { text: "Scroll in All Directions", link: "examples/direction" },
            { text: "Step-by-Step Pause", link: "examples/step-pause" },
            { text: "Scrolling Speed", link: "examples/speed" },
            {
              text: "Disable Pause on Hover",
              link: "examples/disable-hover-pause",
            },
            { text: "Responsive Viewport", link: "examples/responsive" },
            { text: "Dynamic Data Update", link: "examples/dynamic-data" },
          ],
        },
      ],
    },
  },
  zh: {
    "/cn/pages/": {
      base: "/cn/pages/",
      items: [
        {
          text: "介绍",
          items: [
            { text: "开始", link: "guide/" },
            { text: "属性", link: "guide/properties" },
            { text: "注意事项", link: "guide/notes" },
          ],
        },
        {
          text: "示例",
          items: [
            { text: "基本使用", link: "examples/" },
            { text: "四个方向滚动", link: "examples/direction" },
            { text: "单步滚动停顿", link: "examples/step-pause" },
            { text: "滚动速度控制", link: "examples/speed" },
            { text: "禁用鼠标悬停暂停", link: "examples/disable-hover-pause" },
            { text: "自适应视口大小", link: "examples/responsive" },
            { text: "动态数据更新", link: "examples/dynamic-data" },
          ],
        },
      ],
    },
  },
};
