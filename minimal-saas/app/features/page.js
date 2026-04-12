"use client"

import { BouncyCardsFeatures } from "@/components/Custom/Features/BouncyCard"
import { CodeDemo } from "@/components/Custom/Code"
import { colors } from "@/Constants/Color"

const theme = colors.dark;

const UI = {
    developerTitle: "Built for Engineers.",
    developerDesc: "Ship directly to the edge with no configuration. Automatic previews and frictionless deploys.",
}

export default function FeaturesPage() {
    return (
        <div style={{ backgroundColor: theme.base.background, minHeight: "100vh" }}>
            <BouncyCardsFeatures />

            <section className="py-24 border-t" style={{ borderColor: theme.border.default, color: theme.text.primary }}>
                <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">{UI.developerTitle}</h2>
                        <p className="text-xl" style={{ color: theme.text.muted }}>{UI.developerDesc}</p>
                    </div>
                    <div className="flex justify-center items-center rounded-3xl p-8" style={{ backgroundColor: theme.surface.alt, border: `1px solid ${theme.border.default}` }}>
                        <CodeDemo duration={0.8} delay={0.2} writing={true} cursor={true} />
                    </div>
                </div>
            </section>
        </div>
    )
}
