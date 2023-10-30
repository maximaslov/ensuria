/** @type {import('next').NextConfig} */
const nextConfig = {
 compiler: {
  // Enables the styled-components SWC transform
  styledComponents: true,
 },
 images: {
  domains: ["media.istockphoto.com", "images.unsplash.com"],
 },
};

module.exports = nextConfig;