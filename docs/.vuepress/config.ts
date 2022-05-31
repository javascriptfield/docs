import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  base: "/docs/",
  title: "前端开发文档",
  description: "前端开发文档",
  open: true,

  // 主题和它的配置
  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
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
  },
  plugins: [
    ["@vuepress/plugin-search",{
      maxSuggestions: 10,
      // 允许搜索 Frontmatter 中的 `tags`
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    },],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
  clientAppEnhanceFiles: path.resolve(
    __dirname,
    './clientAppEnhance.ts'
  ),
});
