/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // 关键：静态导出
  trailingSlash: true,            // 可选：避免 404
  eslint: {
    ignoreDuringBuilds: true,     // 保持你原来的 ESLint 忽略
  },
};

module.exports = nextConfig;
