"use client"

import { AuroraHero } from "@/components/Custom/Hero/AuroraHero"
import { BouncyCardsFeatures } from "@/components/Custom/Features/BouncyCard"
import { MarqueeDemo } from "@/components/Custom/MarqueeDemo"
import { colors } from "@/Constants/Color"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const theme = colors.dark;

const UI = {
  socialProofTitle: "Trusted by the best teams",
  socialProofSubtitle: "See what engineers and designers are saying about our platform.",
  ctaTitle: "Ready to transform your workflow?",
  ctaSubtitle: "Join thousands of developers building the future of the web.",
  ctaPrimary: "Get Started Free",
  ctaPrimaryHref: "/signup",
  ctaSecondary: "Read the Documentation",
  ctaSecondaryHref: "/docs"
}

export default function Home() {
  return (
    <div style={{ backgroundColor: theme.base.background, minHeight: "100vh" }}>
      {/* 1. Hero Section using Aurora custom component */}
      <AuroraHero />

      {/* 2. Features Section using BouncyCards custom component */}
      <BouncyCardsFeatures />

      {/* 3. Social Proof Section using MarqueeDemo custom component */}
      <section className="py-24 border-t" style={{ borderColor: theme.border.default, color: theme.text.primary, backgroundColor: theme.surface.default }}>
        <div className="mx-auto max-w-4xl text-center px-4 mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">{UI.socialProofTitle}</h2>
          <p className="text-lg" style={{ color: theme.text.muted }}>{UI.socialProofSubtitle}</p>
        </div>
        <div className="mx-auto max-w-7xl">
          <MarqueeDemo />
        </div>
      </section>

      {/* 4. CTA Section constructed specifically for the landing page */}
      <section className="py-32 px-4 border-t" style={{ borderColor: theme.border.default, backgroundColor: theme.base.background }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold sm:text-5xl mb-6" style={{ color: theme.text.primary }}>
            {UI.ctaTitle}
          </h2>
          <p className="text-xl mb-10" style={{ color: theme.text.muted }}>
            {UI.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href={UI.ctaPrimaryHref}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: theme.brand.primary, color: theme.text.inverse }}
            >
              {UI.ctaPrimary} <ArrowRight className="size-4" />
            </Link>
            <Link
              href={UI.ctaSecondaryHref}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: theme.surface.alt, color: theme.text.primary, border: `1px solid ${theme.border.default}` }}
            >
              {UI.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
