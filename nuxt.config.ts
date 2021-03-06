import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  generate: {
    routes: ["/ja/", "/en/", "/zh-CN/", "/zh-TW/"],
  },
});
