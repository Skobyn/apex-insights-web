/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      "same-assets.com",
      "ext.same-assets.com",
      "source.unsplash.com",
      "images.unsplash.com",
      "ugc.same-assets.com",
      "www.gravatar.com",
      "s.gravatar.com",
      "github.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "openweathermap.org",
      "platform-lookaside.fbsbx.com",
      "ui-avatars.com",
      "api.mapbox.com",
      "vitharani-images.s3.amazonaws.com",
      "vitharani.com",
      "pbs.twimg.com",
      "tse3.mm.bing.net",
      "www.bing.com",
      "en.wikipedia.org",
      "upload.wikimedia.org",
      "asset.brandfetch.io",
      "cdn.sanity.io",
    ],
  },
};

module.exports = nextConfig;
