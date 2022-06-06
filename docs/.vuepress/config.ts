import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { localTheme } from "./theme";
const { searchPlugin } = require("@vuepress/plugin-search");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");
const dirTree = require("directory-tree");
const tree = dirTree("/docs/docs", {
  extensions: /\.md/,
  exclude: /\.vuepress|README.md/,
  normalizePath: true,
});
const navbar = tree.children.map((e) => {
  return {
    text: e.name,
    link: e.children[0].path.replace("/docs/docs", ""),
  };
});
const sidebar = tree.children.map(e => {
  return {
    [`/${e.name}/`]: [{
      text: e.name,
      children: e.children.map(child => {
        return child.path.replace("/docs/docs", "")
      })
    }],
  };
}).reduce((acc,cur) => {
  const result = Object.assign(acc, cur)
  return result
}, {})
export default defineUserConfig({
  // 站点配置
  base: "/docs/",
  title: "Front-end",
  // 主题和它的配置
  theme: localTheme({
    // 默认主题配置项
    logo: null,
    navbar: navbar,
    repo: "javascriptfield/docs",
    repoLabel: "GitHub",
    sidebar: sidebar
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
