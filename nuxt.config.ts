import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  app: {
    head: {
      title: "3rd Curve Healthcare | Better strategy for hospital growth.",
      htmlAttrs: { lang: "en" },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
      meta: [
        {
          name: "description",
          content:
            "3rd Curve Healthcare helps hospitals and health systems make clearer growth decisions in service line strategy, business development, and market positioning.",
        },
        {
          name: "keywords",
          content:
            "3rd Curve Healthcare, hospital growth, service line strategy, business development, market positioning",
        },
        { name: "author", content: "3rd Curve Healthcare" },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "charset", content: "utf-8" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "og:title",
          content: "3rd Curve Healthcare | Better strategy for hospital growth.",
        },
        {
          name: "og:description",
          content:
            "3rd Curve Healthcare helps hospitals and health systems make clearer growth decisions in service line strategy, business development, and market positioning.",
        },
        { name: "og:url", content: "https://3rdcurve.com" },
        { name: "og:type", content: "website" },
        { name: "og:locale", content: "en_US" },
        { name: "og:site_name", content: "3rd Curve Healthcare" },
        { name: "canonical", content: "https://3rdcurve.com" },
      ],
    },
  },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    mode: "svg",
  },
});
