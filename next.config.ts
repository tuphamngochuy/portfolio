import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "";
const isProjectPage = Boolean(process.env.GITHUB_ACTIONS && repository && repository !== `${owner}.github.io`);
const basePath = isProjectPage ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
