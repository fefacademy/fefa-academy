/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://fefaacademy.me",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", disallow: ["/u", "/join"] }],
  },
};
