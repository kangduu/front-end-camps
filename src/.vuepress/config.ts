import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "前端集训营",
  description: "一群新时代农民工的集训营",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
