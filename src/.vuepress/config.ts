import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/front-end-camps/",
  lang: "zh-CN",
  title: "杜同学日记",
  description: "新时代农民工",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
