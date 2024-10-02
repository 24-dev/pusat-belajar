// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Pusat Belajar 24 DEV",
      favicon: "/favicon.ico",
      social: {
        github: "https://github.com/24-dev/pusat-belajar",
      },
      logo: {
        src: "./src/assets/24dev-logo-square-128.svg",
      },
      sidebar: [
        {
          label: "Pengenalan",
          link: "/pengenalan",
        },
        {
          label: "Tutorials",
          autogenerate: { directory: "tutorials" },
        },
      ],
    }),
  ],
});
