const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ["i.scdn.co", "alexisosuna.s3.us-west-1.amazonaws.com"],
  },
});
