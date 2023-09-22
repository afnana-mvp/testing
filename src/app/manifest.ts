import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Features araby.ai",
    short_name: "araby.ai",
    description: "Introducing Araby.ai, the ultimate productivity Ai designed to empower your workflow with cutting-edge AI tools in both Arabic and English.",
    start_url: "/",
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
        src: "../../public/maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
