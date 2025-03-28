import { defineConfig } from "vitepress";
import { nav, sidebar } from "./themeConfig";
import { head } from "./head";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/website-vue-loop-scroll/",
  vite: {
    ssr: {
      noExternal: ["@joyday/vue-loop-scroll"],
    },
  },
  srcDir: "src",
  title: "Vue Loop Scroll",
  head,
  description:
    "A high-performance Vue component for loop scrolling, supporting large data sets, adaptive resizing, real-time data updates, and flexible scrolling controls.",
  themeConfig: {
    logo: "/logo.png",
    nav: nav.en,
    sidebar: sidebar.en,
    darkModeSwitchLabel: "Theme",
    darkModeSwitchTitle: "Switch to Dark Mode",
    docFooter: {
      next: "Next Page",
      prev: "Previous Page",
    },
    footer: {
      copyright: `Copyright © 2014-${new Date().getFullYear()}`,
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
      text: "Last updated on",
    },
    lightModeSwitchTitle: "Switch to Light Mode",
    outline: {
      label: "Page Navigation",
    },
    returnToTopLabel: "Back to Top",
    search: {
      options: {
        translations: {
          button: {
            buttonAriaLabel: "Search",
            buttonText: "Search",
          },
          modal: {
            footer: {
              navigateText: "Switch",
              selectText: "Choose",
            },
            noResultsText: "No results",
            resetButtonTitle: "Clear the query",
          },
        },
      },
      provider: "local",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/joydayX/vue-loop-scroll",
      },
    ],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    cn: {
      label: "简体中文",
      lang: "cn",
      themeConfig: {
        nav: nav.zh,
        sidebar: sidebar.zh,
        darkModeSwitchLabel: "主题",
        darkModeSwitchTitle: "切换到深色模式",
        docFooter: {
          next: "下一页",
          prev: "上一页",
        },
        lastUpdated: {
          formatOptions: {
            dateStyle: "short",
            timeStyle: "medium",
          },
          text: "最后更新于",
        },
        lightModeSwitchTitle: "切换到浅色模式",
        outline: {
          label: "页面导航",
        },
        returnToTopLabel: "回到顶部",
        search: {
          options: {
            translations: {
              button: {
                buttonAriaLabel: "搜索文档",
                buttonText: "搜索文档",
              },
              modal: {
                footer: {
                  navigateText: "切换",
                  selectText: "选择",
                },
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
              },
            },
          },
          provider: "local",
        },
      },
    },
  },
});
