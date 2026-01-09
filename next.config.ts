import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["en", "jp", "sg"],
    defaultLocale: "en",
  },
};

export default nextConfig;
