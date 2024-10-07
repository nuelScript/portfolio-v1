/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
