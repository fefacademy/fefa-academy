/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://example.com",
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/u" },
      { userAgent: "*", disallow: "/join" },
    ],
  },
};

export default config;
