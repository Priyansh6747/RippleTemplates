import Image from "next/image";
import {AuroraHero} from "@/components/Custom/Hero/AuroraHero";
import {BouncyCardsFeatures} from "@/components/Custom/Features/BouncyCard";
import ShiftingCountdown from "@/components/Custom/ShiftingCountDown";

export default function Home() {
  return (
    <>
      <AuroraHero/>
      <BouncyCardsFeatures/>
        <ShiftingCountdown/>
    </>
  );
}
