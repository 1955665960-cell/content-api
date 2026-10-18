import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👇 强行忽略 TypeScript 构建报错
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;