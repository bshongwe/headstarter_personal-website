#!/usr/bin/env node

const fs = require('fs');

const urls = [
  'https://personal-portfolio-2024-green.vercel.app/',
  'https://personal-portfolio-2024-green.vercel.app/contact',
];

const generateSitemap = (urls) => {
  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
</urlset>
  `;

  fs.writeFileSync('sitemap.xml', sitemap.trim());
  console.log('Sitemap generated successfully!');
};

generateSitemap(urls);
