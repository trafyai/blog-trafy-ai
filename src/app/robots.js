export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/terms-of-service",
        "/privacy-policy",
        "/cookie-policy",
        "/refund-policy",
      ],
    },
    sitemap: "https://trafy.ai/sitemap.xml",
  };
}
