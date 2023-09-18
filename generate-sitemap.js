console.log("Starting sitemap generation...");

const { createWriteStream } = require("fs");

const pages = [
  "app/locale",
  "app/coding",
  "app/coding/c",
  "app/coding/cplus",
  "app/coding/csharp",
  "app/coding/java",
  "app/coding/python",
  "app/coding/javascript",
  "app/coding/html",
  "app/coding/css",
  "app/coding/php",
  "app/coding/ruby",
  "app/media/art",
  "app/media/audio",
  "app/media/enhance",
  "app/media/redesign",
  "app/media/remove",
];

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

const newData = new Date().toISOString();

pages.forEach((page) => {
  sitemapContent += `
    <url>
        <loc>https://www.yourwebsite.com/${page}</loc>
        <lastmod>${newData}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
  `;
});

sitemapContent += `</urlset>`;

try {
  createWriteStream("public/sitemap.xml").write(sitemapContent, () => {
    console.log("Sitemap written successfully!");
  });
} catch (error) {
  console.error("Error generating sitemap:", error);
}
