import type { NextConfig } from "next";

const NEXT_CONFIG: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default NEXT_CONFIG;
