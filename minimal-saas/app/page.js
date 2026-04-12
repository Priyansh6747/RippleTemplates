"use client"

import { AuroraHero } from "@/components/Custom/Hero/AuroraHero"
import { IconCloudDemo } from "@/components/Custom/IconCloudDemo"
import { colors } from "@/Constants/Color"

const theme = colors.dark;

const UI = {
  cloudTitle: "Integration Ecosystem",
  cloudSubtitle: "Connects beautifully with everything your team already uses."
}

export default function Home() {
  return (
    <div style={{ backgroundColor: theme.base.background }}>
      <AuroraHero />

      <section className="py-24" style={{ color: theme.text.primary }}>
        <div className="mx-auto max-w-4xl text-center px-4 mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">{UI.cloudTitle}</h2>
          <p className="text-lg" style={{ color: theme.text.muted }}>{UI.cloudSubtitle}</p>
        </div>
        <div className="max-w-7xl mx-auto h-[600px]">
          <IconCloudDemo />
        </div>
      </section>
    </div>
  )
}
