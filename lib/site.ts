// Canonical production origin, used for metadataBase, canonicals, sitemap,
// robots and JSON-LD. Hardcoded on purpose: the apex visionxai.in redirects
// here, and an env override previously let the wrong domain (.com) leak into
// every canonical and sitemap URL.
export const SITE_URL = "https://www.visionxai.in";
