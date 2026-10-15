// Impede publicar o site com textos de rascunho "[PREENCHER: ...]" (o Google indexaria esses trechos).
// Para publicar mesmo assim: ALLOW_PLACEHOLDERS=1 npm run cf:deploy
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const achados = [];
const varre = (dir) => {
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome);
    if (statSync(p).isDirectory()) varre(p);
    else if (/\.(tsx?|mdx?)$/.test(nome)) {
      readFileSync(p, "utf8").split("\n").forEach((l, i) => {
        (l.match(/\[PREENCHER[^\]]*\]/g) ?? []).forEach((t) => achados.push(`${p}:${i + 1} ${t}`));
      });
    }
  }
};
["app", "components"].forEach(varre);
if (achados.length && !process.env.ALLOW_PLACEHOLDERS) {
  console.error(`\nExistem ${achados.length} trechos de rascunho no site:\n  ${achados.join("\n  ")}\n\nPreencha-os antes de publicar (ou use ALLOW_PLACEHOLDERS=1).\n`);
  process.exit(1);
}
