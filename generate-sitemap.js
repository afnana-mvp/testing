console.log("Starting sitemap generation...");

const { createWriteStream } = require("fs");
const languages = ["en", "ar"];
const pages = [
  "coding/c",
  "coding/cplus",
  "coding/csharp",
  "coding/java",
  "coding/python",
  "coding/javascript",
  "coding/html",
  "coding/css",
  "coding/php",
  "coding/ruby",
  "media/art",
  "media/audio",
  "media/enhance",
  "media/redesign",
  "media/remove",
  "writing",
  "writing/blog",
  "writing/email",
  "writing/facebook",
  "writing/instagram",
  "writing/linkedin",
  "writing/tiktok",
  "writing/tweet",
];

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

const newData = new Date().toISOString();

pages.forEach((page) => {
  languages.forEach((lang) => {
    const urlSuffix = lang === "en" ? "" : `-${lang}`;
    sitemapContent += `
      <url>
          <loc>https://www.features.rvamp.com${urlSuffix}/${page}</loc>
          <lastmod>${newData}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
    `;


    languages.forEach((altLang) => {
      const altUrlSuffix = altLang === "en" ? "" : `${altLang}`;
      sitemapContent += `
          <xhtml:link rel="alternate" hreflang="${altLang}" href="https://www.features.rvamp.com/${altUrlSuffix}/${page}" />
      `;
    });

    sitemapContent += `
      </url>
    `;
  });
});

sitemapContent += `</urlset>`;

try {
  createWriteStream("public/sitemap.xml").write(sitemapContent, () => {
    console.log("Sitemap written successfully!");
  });
} catch (error) {
  console.error("Error generating sitemap:", error);
}
