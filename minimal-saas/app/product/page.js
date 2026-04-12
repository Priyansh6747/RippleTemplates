"use client"

import { MarqueeDemo } from "@/components/Custom/MarqueeDemo"
import ShiftingCountdown from "@/components/Custom/ShiftingCountDown"
import { colors } from "@/Constants/Color"

const theme = colors.dark;

const UI = {
    launchHeader: "Ripple is dropping soon.",
    launchSub: "Early access granted to the first 500 customers. Get ready to scale.",
}

export default function ProductPage() {
    return (
        <div style={{ backgroundColor: theme.base.background, minHeight: "100vh" }}>
            <section className="py-32 px-4 text-center border-b" style={{ borderColor: theme.border.default, color: theme.text.primary }}>
                <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${theme.brand.primary}, ${theme.status.info})` }}>
                    {UI.launchHeader}
                </h1>
                <p className="max-w-2xl mx-auto text-lg mb-16" style={{ color: theme.text.muted }}>{UI.launchSub}</p>

                <div className="rounded-3xl overflow-hidden mx-auto max-w-4xl shadow-2xl" style={{ border: `1px solid ${theme.border.default}` }}>
                    <ShiftingCountdown />
                </div>
            </section>

            <section className="py-24 bg-black/5">
                <MarqueeDemo />
            </section>
        </div>
    )
}
