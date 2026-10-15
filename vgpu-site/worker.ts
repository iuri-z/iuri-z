/**
 * Worker de entrada: redireciona HTTP para HTTPS (301) e repassa o resto ao Next.js (OpenNext).
 * O Cloudflare entrega o pedido com o mesmo esquema que o visitante usou (http: ou https:).
 */
// @ts-expect-error: gerado por `opennextjs-cloudflare build`
import openNext from "./.open-next/worker.js";
// @ts-expect-error: gerado por `opennextjs-cloudflare build`
export { DOQueueHandler, DOShardedTagCache, BucketCachePurge } from "./.open-next/worker.js";

const LOCAL = new Set(["localhost", "127.0.0.1", "[::1]"]);

export default {
  async fetch(request: Request, env: unknown, ctx: unknown): Promise<Response> {
    const url = new URL(request.url);
    if (url.protocol === "http:" && !LOCAL.has(url.hostname)) {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return (openNext as { fetch: (r: Request, e: unknown, c: unknown) => Promise<Response> }).fetch(request, env, ctx);
  },
};
