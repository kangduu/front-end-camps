import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  "/basis/",
  "/interview/",
  {
    text: "专题💫武研堂",
    icon: "book",
    link: "/algorithm/",
    // children: [
    //   { text: "数据结构", icon: "pen-to-square", link: "cherry" },
    //   { text: "算法", icon: "pen-to-square", link: "dragonfruit" },
    // ],
  },
]);
