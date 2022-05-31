import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { localTheme } from "./theme";
const { searchPlugin } = require("@vuepress/plugin-search");
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
import { viteBundler } from '@vuepress/bundler-vite'
export default defineUserConfig({
  // 站点配置
  base: "/docs/",
  title: "前端开发文档",
  description: "前端开发文档",
  open: true,
  bundler: viteBundler({
    viteOptions: {
    },
  }),
  // 主题和它的配置
  theme: localTheme({
    // 默认主题配置项
    logo: "https://vuejs.org/images/logo.png",
    navbar: [
      {
        text: "指南",
        link: "/pages/62e711/",
      },
      {
        text: "Git",
        link: "/pages/6df8fb/",
      },
      {
        text: "JS",
        link: "/pages/203558/",
      },
      {
        text: "CSS",
        link: "/pages/d7f4cc/",
      },
      {
        text: "Vue",
        link: "/pages/d2611f/",
      },
      {
        text: "面试",
        link: "/pages/d33b06/",
      },
    ],
    repo: "https://github.com/javascriptfield/docs",
    repoLabel: "GitHub",
    sidebar: "auto",
  }),
  plugins: [
    [
      searchPlugin({
        maxSuggestions: 10,
        // 允许搜索 Frontmatter 中的 `tags`
        getExtraFields: (page) => page.frontmatter.tags ?? [],
      }),
    ],
    registerComponentsPlugin({
      // 配置项
        componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
