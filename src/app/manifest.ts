import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio 2024 - Pierre Guéroult 🪶",
    short_name: "Pierre Guéroult - Dev",
    description:
      "Portfolio 2024 de Pierre Guéroult ⋅ Développeur full stack ⋅ Rouen et périphéries ⋅ Étudiant BUT Métiers du Multimédia et de l'Internet ⋅ Recherche de stage et d'alternance",
    start_url: "/",
    display: "standalone",
    background_color: "#343b45",
    theme_color: "#ae9f86",
    dir: "ltr",
    lang: "fr",
    prefer_related_applications: false,
    icons: [
      {
        src: "/icons/touch/32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icons/touch/64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/icons/touch/128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/icons/touch/256.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  } as MetadataRoute.Manifest;
}
