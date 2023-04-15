// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  router:{
    base: '/GalacticoreNuxtApp/',
  },
  app:{
    baseURL: '/GalacticoreNuxtApp/'
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"],
});
