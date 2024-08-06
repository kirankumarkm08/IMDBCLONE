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
    content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  },
};

export default nextConfig;
