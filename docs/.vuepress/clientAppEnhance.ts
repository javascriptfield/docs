import { defineClientAppEnhance } from "@vuepress/client";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  router.beforeEach((to) => {
    console.log("before navigation");
  });
});
