"use client"

import { CodeDemo } from "@/components/Custom/Code"
import { IconCloudDemo } from "@/components/Custom/IconCloudDemo"
import { colors } from "@/Constants/Color"

const theme = colors.dark;

const UI = {
    headerTitle: "Product Features",
    headerSubtitle: "Deep dive into the architecture that powers your next big idea.",
    developerTitle: "Developer Experience First.",
    developerDesc: "Ship directly to the edge with no configuration. Automatic previews and frictionless deploys. Write code, we handle the rest.",
    integrationTitle: "Ecosystem Integration",
    integrationDesc: "Connects beautifully with everything your team already uses. No vendors lock-in. Just pure API-driven flexibility."
}

export default function FeaturesPage() {
    return (
        <div style={{ backgroundColor: theme.base.background, minHeight: "100vh" }}>

            {/* Header */}
            <section className="pt-32 pb-16 px-4 text-center" style={{ color: theme.text.primary }}>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                    {UI.headerTitle}
                </h1>
                <p className="max-w-2xl mx-auto text-xl" style={{ color: theme.text.muted }}>
                    {UI.headerSubtitle}
                </p>
            </section>

            {/* Code Feature */}
            <section className="py-24 border-t" style={{ borderColor: theme.border.default, backgroundColor: theme.surface.default }}>
                <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-8">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl font-bold mb-6" style={{ color: theme.text.primary }}>{UI.developerTitle}</h2>
                        <p className="text-lg leading-relaxed" style={{ color: theme.text.muted }}>{UI.developerDesc}</p>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center items-center rounded-3xl p-8 shadow-2xl" style={{ backgroundColor: theme.surface.alt, border: `1px solid ${theme.border.default}` }}>
                        <div className="w-full max-w-lg">
                            <CodeDemo duration={0.8} delay={0.2} writing={true} cursor={true} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations Feature */}
            <section className="py-24 border-t" style={{ borderColor: theme.border.default, backgroundColor: theme.base.background }}>
                <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-8">
                    <div className="flex justify-center items-center rounded-3xl h-[500px]" style={{ backgroundColor: theme.surface.default, border: `1px solid ${theme.border.default}` }}>
                        <IconCloudDemo />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-6" style={{ color: theme.text.primary }}>{UI.integrationTitle}</h2>
                        <p className="text-lg leading-relaxed" style={{ color: theme.text.muted }}>{UI.integrationDesc}</p>
                    </div>
                </div>
            </section>

        </div>
    )
}
