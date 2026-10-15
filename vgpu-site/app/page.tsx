import { Header } from "@/components/header";
import { HeaderShell } from "@/components/header-shell";
import { Hero } from "@/components/hero";
import { Sections } from "@/components/sections";
import { ShineEffect } from "@/components/shine-effect";
import { Starfield } from "@/components/starfield";

export default function Page() {
  return (
    <div id="inicio">
      <Starfield />
      <ShineEffect />
      <HeaderShell><Header /></HeaderShell>
      <Hero />
      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-24 min-[768px]:pt-0 lg:px-12 lg:pb-20"><Sections /></main>
    </div>
  );
}
