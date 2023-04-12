const withSvgr = require("next-svgr");
/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  compiler: {
    ///se declara para configurar que se utiliza styled component
    styledComponents: true,
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
