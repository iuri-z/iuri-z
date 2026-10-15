import { wgslTurbopackRule } from "@vgpu/wgsl/next";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/**
 * Política de segurança de conteúdo (CSP). Tudo só do próprio site: não há scripts, fontes, imagens
 * ou APIs de terceiros. 'unsafe-inline' em script/estilo é necessário porque o Next.js injeta scripts
 * de hidratação inline; a alternativa (nonce por requisição) exigiria renderização dinâmica em todas as páginas.
 * Em desenvolvimento o React precisa de eval e o HMR de websocket.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self' data: blob:${isProd ? "" : " ws: wss:"}`,
  "worker-src 'self' blob:",
  "media-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  ...(isProd ? [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" }] : []),
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), bluetooth=(), browsing-topics=(), interest-cohort=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

const config: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  poweredByHeader: false,
  turbopack: { root: import.meta.dirname, rules: { "*.wgsl": wgslTurbopackRule() } },
  transpilePackages: ["vgpu", "@vgpu/core", "@vgpu/wgsl", "@vgpu/wgsl-std"],
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};
export default config;
