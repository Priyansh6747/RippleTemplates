import Image from "next/image";
import { AuroraHero } from "@/components/Custom/Hero/AuroraHero";
import { BouncyCardsFeatures } from "@/components/Custom/Features/BouncyCard";
import ShiftingCountdown from "@/components/Custom/ShiftingCountDown";
import { CodeDemo } from "@/components/Custom/Code";
import { RadixCheckboxDemo } from "@/components/Custom/RadixCheckboxDemo";
import { RadixTooltipDemo } from "@/components/Custom/RadixTooltipDemo";
import { MarqueeDemo } from "@/components/Custom/MarqueeDemo";
import { DockDemo } from "@/components/Custom/DockDemo";
import { IconCloudDemo } from "@/components/Custom/IconCloudDemo";

export default function Home() {
  return (
    <>
      <AuroraHero />
      <BouncyCardsFeatures />
      <ShiftingCountdown />
      <CodeDemo duration={2} delay={0.5} writing={true} cursor={true} />
      <div className="flex justify-center p-8">
        <RadixCheckboxDemo />
      </div>
      <div className="flex justify-center p-8">
        <RadixTooltipDemo side="top" sideOffset={4} align="center" />
      </div>
      <div className="w-full py-8">
        <MarqueeDemo />
      </div>
      <div className="w-full py-8">
        <DockDemo />
      </div>
      <div className="flex justify-center p-8 max-w-md mx-auto aspect-square w-full">
        <IconCloudDemo />
      </div>
    </>
  );
}
