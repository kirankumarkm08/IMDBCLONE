/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
  content: [
    "./pages/**/*.{ts,js,jsx,tsx}",
    "./app/**/*.{ts,js,jsx,tsx}",
    "./Components/**/*.{ts,js,jsx,tsx}",
  ],
};

export default nextConfig;
