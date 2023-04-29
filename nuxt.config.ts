// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"],
  serverMiddleware: [
    // Set the MIME type for JavaScript files
    { path: "/_nuxt/*.js", type: "text/javascript" },

    // Set the MIME type for CSS files
    { path: "/_nuxt/*.css", type: "text/css" },
  ],
});
