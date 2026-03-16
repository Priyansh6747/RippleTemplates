/*
 * ============================================================
 *  BOUNCY CARDS FEATURES — TEMPLATE CUSTOMIZATION GUIDE
 * ============================================================
 *
 *  HOW TO EDIT THIS FILE
 *  ─────────────────────
 *
 *  1. SWAP THE COLOR THEME
 *     Import a different colors.js and toggle light/dark:
 *       import { colors } from "./colors";
 *       const theme = colors.light;   // ← or colors.dark
 *
 *  2. SECTION HEADLINE & BUTTON
 *     Edit the SECTION_* constants below:
 *       SECTION_TITLE        — main heading (plain text part)
 *       SECTION_TITLE_ACCENT — the de-emphasized / colored part of the heading
 *       SECTION_CTA_TEXT     — label for the top-right button
 *       SECTION_CTA_HREF     — href for that button
 *
 *  3. FEATURE CARDS
 *     Edit the CARDS array. Each card has:
 *       title          — heading shown on the card
 *       demoLabel      — text shown inside the sliding demo panel
 *       gradientFrom   — Tailwind "from-*" class for the demo panel gradient
 *       gradientTo     — Tailwind "to-*" class for the demo panel gradient
 *       demoTextColor  — Tailwind text color class for the demo label
 *       span           — Tailwind col-span string controlling card width:
 *                          "col-span-12 md:col-span-4"  → narrow  (1/3)
 *                          "col-span-12 md:col-span-8"  → wide    (2/3)
 *                        Pairs in each row should add up to 12 columns.
 *
 *  4. CARD BACKGROUND
 *     BounceCard uses `theme.surface.alt` as its bg color.
 *     Change this in the BounceCard style prop if needed.
 *
 *  5. ADD / REMOVE CARDS
 *     - Add objects to the CARDS array.
 *     - Adjust the row1 / row2 slice indices in BouncyCardsFeatures
 *       so the spans in each row still sum to 12.
 *     - Example for 3 equal cards in one row: three "col-span-12 md:col-span-4"
 *
 *  6. HOVER ANIMATION
 *     Tweak the whileHover prop on BounceCard:
 *       whileHover={{ scale: 0.95, rotate: "-1deg" }}
 *
 * ============================================================
 */

"use client"

import React from "react";
import { motion } from "framer-motion";
import { colors } from "@/Constants/Color"

// ─── THEME ────────────────────────────────────────────────────────────────────
const theme = colors.light; // toggle to colors.dark for dark mode

// ─── SECTION CONTENT ──────────────────────────────────────────────────────────
const SECTION_TITLE        = "Section Title Goes Here";
const SECTION_TITLE_ACCENT = "with an accent phrase";
const SECTION_CTA_TEXT     = "Learn more";
const SECTION_CTA_HREF     = "#";

// ─── FEATURE CARDS ────────────────────────────────────────────────────────────
// Cards are split into rows. Each row's `span` values must sum to 12 columns.
const CARDS = [
    // ── Row 1 ──
    {
        title: "Card Title One",
        demoLabel: "FEATURE DEMO HERE",
        gradientFrom: "from-violet-400",
        gradientTo: "to-indigo-400",
        demoTextColor: "text-indigo-50",
        span: "col-span-12 md:col-span-4", // narrow
    },
    {
        title: "Card Title Two",
        demoLabel: "FEATURE DEMO HERE",
        gradientFrom: "from-amber-400",
        gradientTo: "to-orange-400",
        demoTextColor: "text-orange-50",
        span: "col-span-12 md:col-span-8", // wide
    },
    // ── Row 2 ──
    {
        title: "Card Title Three",
        demoLabel: "FEATURE DEMO HERE",
        gradientFrom: "from-green-400",
        gradientTo: "to-emerald-400",
        demoTextColor: "text-emerald-50",
        span: "col-span-12 md:col-span-8", // wide
    },
    {
        title: "Card Title Four",
        demoLabel: "FEATURE DEMO HERE",
        gradientFrom: "from-pink-400",
        gradientTo: "to-red-400",
        demoTextColor: "text-red-50",
        span: "col-span-12 md:col-span-4", // narrow
    },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export const BouncyCardsFeatures = () => {
    const row1 = CARDS.slice(0, 2); // ← adjust slice if you add/remove cards
    const row2 = CARDS.slice(2);

    return (
        <section
            className="mx-auto max-w-7xl px-4 py-12"
            style={{ color: theme.text.primary, backgroundColor: theme.base.background }}
        >
            {/* ── HEADER ── */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
                <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
                    {SECTION_TITLE}{" "}
                    <span style={{ color: theme.text.muted }}>{SECTION_TITLE_ACCENT}</span>
                </h2>

                <motion.a
                    href={SECTION_CTA_HREF}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="whitespace-nowrap rounded-lg px-4 py-2 font-medium shadow-xl transition-colors"
                    style={{
                        backgroundColor: theme.buttons.primary.bg,
                        color: theme.buttons.primary.text,
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = theme.buttons.primary.hover)
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = theme.buttons.primary.bg)
                    }
                >
                    {SECTION_CTA_TEXT}
                </motion.a>
            </div>

            {/* ── ROW 1 ── */}
            <div className="mb-4 grid grid-cols-12 gap-4">
                {row1.map((card, i) => (
                    <BounceCard key={i} className={card.span}>
                        <CardTitle>{card.title}</CardTitle>
                        <DemoPanel card={card} />
                    </BounceCard>
                ))}
            </div>

            {/* ── ROW 2 ── */}
            <div className="grid grid-cols-12 gap-4">
                {row2.map((card, i) => (
                    <BounceCard key={i} className={card.span}>
                        <CardTitle>{card.title}</CardTitle>
                        <DemoPanel card={card} />
                    </BounceCard>
                ))}
            </div>
        </section>
    );
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

const BounceCard = ({ className, children }) => (
    <motion.div
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
        className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl p-8 ${className}`}
        style={{ backgroundColor: theme.surface.alt }}
    >
        {children}
    </motion.div>
);

const CardTitle = ({ children }) => (
    <h3
        className="mx-auto text-center text-3xl font-semibold"
        style={{ color: theme.text.primary }}
    >
        {children}
    </h3>
);

const DemoPanel = ({ card }) => (
    <div
        className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}
    >
    <span className={`block text-center font-semibold ${card.demoTextColor}`}>
      {card.demoLabel}
    </span>
    </div>
);