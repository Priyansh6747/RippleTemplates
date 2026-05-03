"use client"

import React from "react";
import { motion } from "framer-motion";
import { colors } from "@/Constants/Color";
import Link from "next/link";

const theme = colors.dark;

const UI = {
    title: "Powerful abstractions",
    titleAccent: "for modern apps.",
    cta: "Explore the docs",
    ctaHref: "/product",
    cards: [
        {
            title: "Lightning Fast Builds",
            demoLabel: "12ms",
            gradientFrom: "from-blue-500",
            gradientTo: "to-cyan-400",
            demoTextColor: "text-white",
            span: "col-span-12 md:col-span-4",
        },
        {
            title: "Globally Distributed Edge",
            demoLabel: "99.99% Uptime",
            gradientFrom: "from-purple-500",
            gradientTo: "to-pink-500",
            demoTextColor: "text-white",
            span: "col-span-12 md:col-span-8",
        },
        {
            title: "Automated Deployments",
            demoLabel: "git push",
            gradientFrom: "from-emerald-400",
            gradientTo: "to-teal-500",
            demoTextColor: "text-white",
            span: "col-span-12 md:col-span-8",
        },
        {
            title: "Instant Rollbacks",
            demoLabel: "1-Click",
            gradientFrom: "from-orange-400",
            gradientTo: "to-red-500",
            demoTextColor: "text-white",
            span: "col-span-12 md:col-span-4",
        },
    ]
};

export const BouncyCardsFeatures = () => {
    const row1 = UI.cards.slice(0, 2);
    const row2 = UI.cards.slice(2);

    return (
        <section
            className="w-full px-4 py-24"
            style={{ color: theme.text.primary, backgroundColor: theme.base.background }}
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                    <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
                        {UI.title}{" "}
                        <span style={{ color: theme.text.muted }}>{UI.titleAccent}</span>
                    </h2>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href={UI.ctaHref}
                            className="whitespace-nowrap rounded-full px-6 py-3 font-semibold shadow-xl transition-colors"
                            style={{
                                backgroundColor: theme.surface.default,
                                color: theme.text.primary,
                                border: `1px solid ${theme.border.default}`,
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor = theme.surface.hover)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor = theme.surface.default)
                            }
                        >
                            {UI.cta}
                        </Link>
                    </motion.div>
                </div>

                <div className="mb-4 grid grid-cols-12 gap-4">
                    {row1.map((card, i) => (
                        <BounceCard key={i} {...card} />
                    ))}
                </div>
                <div className="grid grid-cols-12 gap-4">
                    {row2.map((card, i) => (
                        <BounceCard key={i} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const BounceCard = ({
    title,
    demoLabel,
    gradientFrom,
    gradientTo,
    demoTextColor,
    span,
}) => {
    return (
        <motion.div
            whileHover={{ scale: 0.98, rotate: "-1deg" }}
            className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl p-8 ${span}`}
            style={{
                backgroundColor: theme.surface.alt,
                border: `1px solid ${theme.border.default}`,
            }}
        >
            <div
                className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
            >
                <span
                    className={`block text-center font-semibold tracking-wide ${demoTextColor}`}
                >
                    {demoLabel}
                </span>
            </div>
            <h3 className="relative z-10 block text-2xl font-bold" style={{ color: theme.text.primary }}>
                {title}
            </h3>
        </motion.div>
    );
};

export default BouncyCardsFeatures;