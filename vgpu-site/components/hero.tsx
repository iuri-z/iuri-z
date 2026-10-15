import { HeroTabProvider } from "@/components/hero/hero-tab-state";
import { BrandLogo } from "./brand-logo";
import { HeroTabs } from "./hero-tabs";
import { WALL_GLOBAL_LIGHT_MASK_URL } from "./prism-background/pipelines/light/assets/manifest";
import { PrismBackground } from "./prism-background/prism-background";
import { preload } from "react-dom";

export function Hero() {
  preload(WALL_GLOBAL_LIGHT_MASK_URL, { as: "fetch", crossOrigin: "anonymous", fetchPriority: "high", type: "image/webp" });
  return (
    <HeroTabProvider>
      <section data-hero-theme className="relative -mt-16 min-h-svh overflow-hidden min-[768px]:h-svh min-[768px]:max-h-[80em] min-[768px]:min-h-0">
        <PrismBackground enabled />
        <div data-hero-overlay data-hero-foot-fade aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[16%]" />
        <div data-hero-container className="relative z-10 mx-auto min-h-svh w-full max-w-[1448px] overflow-hidden min-[768px]:h-full min-[768px]:min-h-0">
          <div data-hero-overlay className="pointer-events-none relative z-10 grid min-h-svh grid-cols-1 grid-rows-[auto_1fr] gap-8 px-6 pb-6 pt-24 min-[768px]:absolute min-[768px]:inset-0 min-[768px]:min-h-0 min-[768px]:grid-rows-1 min-[768px]:gap-0 min-[768px]:py-[clamp(3rem,8svh,6rem)] min-[768px]:justify-items-start min-[1100px]:grid-cols-[minmax(0,26em)_minmax(0,1fr)] min-[1100px]:gap-[clamp(2rem,5vw,5rem)]">
            <div className="pointer-events-auto relative z-10 col-start-1 row-start-2 flex h-full flex-col items-center self-start justify-self-center min-[768px]:row-start-1 min-[768px]:h-auto min-[768px]:items-start min-[768px]:self-center min-[768px]:justify-self-start min-[1100px]:col-start-1 min-[1100px]:row-start-1">
              <h1 data-hero-title className="mb-8 min-[768px]:mb-10">
                <span className="sr-only">Zimmer Tech</span>
                <BrandLogo decorative className="block w-[min(88vw,34rem)] text-3xl min-[1100px]:text-4xl" />
              </h1>
              <p className="max-w-[11em] text-balance text-center text-3xl font-light leading-tight min-[768px]:text-left min-[768px]:text-4xl">
                Você explica. Eu entrego funcionando.
              </p>
              <p className="mt-5 max-w-[26em] text-center text-[15px] leading-relaxed opacity-70 min-[768px]:text-left">
                Sites, sistemas sob medida e automações para pequenos negócios, e reforço para times de TI. Atendimento remoto para todo o Brasil.
              </p>
              <div className="mt-auto w-full max-w-[28em] min-[768px]:mt-7">
                <HeroTabs />
              </div>
            </div>
            <div className="pointer-events-none relative col-start-1 row-start-1 aspect-square w-[min(70vw,18rem)] justify-self-center min-[768px]:absolute min-[768px]:inset-0 min-[768px]:aspect-auto min-[768px]:w-auto min-[768px]:p-20 min-[1100px]:static min-[1100px]:col-start-2 min-[1100px]:row-start-1 min-[1100px]:size-full min-[1100px]:min-h-0">
              <div data-triangle-container aria-hidden="true" className="size-full" />
            </div>
          </div>
        </div>
      </section>
    </HeroTabProvider>
  );
}
