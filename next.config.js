/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
 pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
 experimental: {
  appDir: true,
  mdxRs: true,
 },
 sassOptions: {
  includePaths: [path.join(__dirname, "styles")],
 },
};

const withMDX = require("@next/mdx")({
 extension: /\.mdx?$/,
 experimental: {
  mdxRs: true,
 },
 options: {
  // If you use remark-gfm, you'll need to use next.config.mjs
  // as the package is ESM only
  // https://github.com/remarkjs/remark-gfm#install
  remarkPlugins: [],
  rehypePlugins: [],
  // If you use `MDXProvider`, uncomment the following line.
  // providerImportSource: "@mdx-js/react",
 },
});
module.exports = withMDX(nextConfig);
