import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Features araby.ai",
    short_name: "araby.ai",
    description: "Introducing Araby.ai, the ultimate productivity Ai designed to empower your workflow with cutting-edge AI tools in both Arabic and English.",
    start_url: "https://www.features.rvamp.com/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "../../public/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "../../public/menifest/maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "../../public/menifest/maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "../../public/menifest/maskable_icon_x128.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "../../public/menifest/maskable_icon_x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "../../public/menifest/maskable_icon_x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "../../public/menifest/maskable_icon_x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
