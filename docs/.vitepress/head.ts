import { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  ["link", { rel: "icon", href: "/website-vue-loop-scroll/favicon.ico" }],
  [
    "meta",
    {
      content:
        "vue,vue3,auto-scroll,loop-scroll,marquee,seamless-scroll,scrolling,continuous-scroll,vue-component",
      name: "keywords",
    },
  ],
  [
    "meta",
    {
      content:
        "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      name: "viewport",
    },
  ],
];
