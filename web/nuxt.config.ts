// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  plugins: ["@/plugins/mock/test.js"],

  compatibilityDate: "2025-01-23",
});
