const env = process.env.NEXT_PUBLIC_TYPE;
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    console.log("Start In " + env);
    return config;
  }
});