"use client"

import ShiftingCountdown from "@/components/Custom/ShiftingCountDown"
import { colors } from "@/Constants/Color"
import Link from "next/link"
import { Check } from "lucide-react"
import config from "@/customise.json"

const theme = colors.dark;

export default function PricingPage() {
    const UI = config.pricing;
    return (
        <div style={{ backgroundColor: theme.base.background, minHeight: "100vh" }}>

            {/* Promo Header */}
            <section className="pt-32 pb-16 px-4 text-center border-b" style={{ borderColor: theme.border.default, color: theme.text.primary }}>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${theme.brand.primary}, ${theme.status.info})` }}>
                    {UI.launchHeader}
                </h1>
                <p className="max-w-2xl mx-auto text-lg mb-16" style={{ color: theme.text.muted }}>{UI.launchSub}</p>

                <div className="mx-auto max-w-4xl shadow-2xl rounded-3xl" style={{ border: `1px solid ${theme.border.default}` }}>
                    <ShiftingCountdown />
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-24 px-4" style={{ backgroundColor: theme.surface.default }}>
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: theme.text.primary }}>{UI.pricingTitle}</h2>
                        <p className="text-lg" style={{ color: theme.text.muted }}>{UI.pricingSubtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {UI.plans.map((plan, idx) => (
                            <div
                                key={plan.name}
                                className="relative rounded-3xl p-8 flex flex-col transition-transform hover:-translate-y-2"
                                style={{
                                    backgroundColor: theme.surface.alt,
                                    border: plan.popular ? `2px solid ${theme.brand.primary}` : `1px solid ${theme.border.default}`,
                                    boxShadow: plan.popular ? `0 0 40px ${theme.brand.primary}33` : 'none'
                                }}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: theme.brand.primary, color: theme.text.inverse }}>
                                        {UI.popularBadge || "Most Popular"}
                                    </div>
                                )}
                                <h3 className="text-xl font-semibold mb-2" style={{ color: theme.text.primary }}>{plan.name}</h3>
                                <p className="text-sm mb-6 min-h-[40px]" style={{ color: theme.text.muted }}>{plan.description}</p>

                                <div className="mb-8 flex items-baseline gap-1">
                                    <span className="text-5xl font-bold tracking-tight" style={{ color: theme.text.primary }}>{plan.price}</span>
                                    <span className="font-medium" style={{ color: theme.text.muted }}>{plan.period}</span>
                                </div>

                                <div className="flex-1">
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <Check className="size-5 shrink-0" style={{ color: theme.brand.primary }} />
                                                <span style={{ color: theme.text.secondary }}>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href="/signup"
                                    className="w-full py-4 rounded-xl text-center font-bold transition-opacity hover:opacity-90"
                                    style={{
                                        backgroundColor: plan.popular ? theme.brand.primary : theme.surface.default,
                                        color: plan.popular ? theme.text.inverse : theme.text.primary,
                                        border: plan.popular ? 'none' : `1px solid ${theme.border.default}`
                                    }}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
