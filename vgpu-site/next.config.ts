import { wgslTurbopackRule } from "@vgpu/wgsl/next";
import type { NextConfig } from "next";

const config: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  turbopack: { root: import.meta.dirname, rules: { "*.wgsl": wgslTurbopackRule() } },
  transpilePackages: ["vgpu", "@vgpu/core", "@vgpu/wgsl", "@vgpu/wgsl-std"],
};
export default config;
