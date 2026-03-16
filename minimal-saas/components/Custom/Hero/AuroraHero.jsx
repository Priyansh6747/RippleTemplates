/*
 * ============================================================
 *  AURORA HERO — TEMPLATE CUSTOMIZATION GUIDE
 * ============================================================
 *
 *  HOW TO EDIT THIS FILE
 *  ─────────────────────
 *
 *  1. SWAP THE COLOR THEME
 *     Import a different colors.js file (light or dark mode):
 *       import { colors } from "./colors";
 *     Then choose the scheme:
 *       const theme = colors.light;   // ← change to colors.dark for dark mode
 *
 *  2. AURORA GRADIENT COLORS
 *     AURORA_COLORS drives the animated radial gradient behind the content.
 *     Replace the hex values with any colors you like:
 *       const AURORA_COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
 *     Tip: pull from your brand palette, e.g.:
 *       const AURORA_COLORS = [theme.brand.primary, theme.status.info, ...];
 *
 *  3. TEXT CONTENT
 *     Search for the TEXT CONTENT section below and update:
 *       BADGE_TEXT     — small pill above the headline  (e.g. "Beta Now Live!")
 *       HEADLINE       — main h1 text
 *       SUBHEADLINE    — paragraph below the headline
 *       CTA_TEXT       — call-to-action button label
 *       CTA_HREF       — href / onClick handler for the button
 *
 *  4. STARS BACKGROUND
 *     Tweak <Stars> props to change the particle field:
 *       radius  — spread of stars (default 50)
 *       count   — number of stars (default 2500)
 *       factor  — star size multiplier (default 4)
 *       speed   — animation speed (default 2)
 *
 *  5. DARK / LIGHT BASE
 *     The section background is driven by:
 *       theme.base.background  (solid fallback)
 *     and the radial gradient in `backgroundImage`.
 *     Adjust the gradient stop percentage (default 50%) to push the
 *     aurora higher or lower:
 *       `radial-gradient(125% 125% at 50% 0%, ${theme.base.background} 50%, ${color})`
 *                                                                         ^^^
 *
 * ============================================================
 */

"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";
import { colors } from "@/Constants/Color"

// ─── THEME ────────────────────────────────────────────────────────────────────
// Toggle between colors.light and colors.dark
const theme = colors.dark;

// ─── AURORA COLORS ────────────────────────────────────────────────────────────
// These colors animate the radial gradient background.
// Feel free to replace with values from `theme` or any custom hex codes.
const AURORA_COLORS = [
    theme.brand.primary,
    theme.status.info,
    theme.status.error,
    theme.brand.hover,
];

// ─── TEXT CONTENT ─────────────────────────────────────────────────────────────
const BADGE_TEXT   = "Beta Now Live!";
const HEADLINE     = "Your Compelling Title Goes Here";
const SUBHEADLINE  = "A short description of your product or service. Keep it punchy — one or two sentences that communicate your core value proposition.";
const CTA_TEXT     = "Get Started Free";
const CTA_HREF     = "#";   // replace with a route or an onClick handler

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export const AuroraHero = () => {
    const color = useMotionValue(AURORA_COLORS[0]);

    useEffect(() => {
        animate(color, AURORA_COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${theme.base.background} 50%, ${color})`;
    const border           = useMotionTemplate`1px solid ${color}`;
    const boxShadow        = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
            style={{ backgroundImage }}
            className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24"
            // Inline style for colors that Tailwind can't generate dynamically
            sx={{ color: theme.text.primary }}
        >
            {/* ── CONTENT ── */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Badge */}
                <span
                    className="mb-1.5 inline-block rounded-full px-3 py-1.5 text-sm"
                    style={{
                        backgroundColor: theme.surface.raised + "80", // 50% opacity
                        color: theme.text.secondary,
                        border: `1px solid ${theme.border.default}`,
                    }}
                >
                    {BADGE_TEXT}
                </span>

                {/* Headline */}
                <h1
                    className="max-w-3xl text-center text-3xl font-medium leading-tight sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
                    style={{
                        background: `linear-gradient(to bottom right, ${theme.text.primary}, ${theme.text.muted})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    {HEADLINE}
                </h1>

                {/* Subheadline */}
                <p
                    className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed"
                    style={{ color: theme.text.muted }}
                >
                    {SUBHEADLINE}
                </p>

                {/* CTA Button */}
                <motion.a
                    href={CTA_HREF}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="group relative flex w-fit items-center gap-1.5 rounded-full px-4 py-2 transition-colors"
                    style={{
                        border,
                        boxShadow,
                        backgroundColor: theme.surface.overlay,
                        color: theme.text.primary,
                    }}
                >
                    {CTA_TEXT}
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </motion.a>
            </div>

            {/* ── STAR FIELD BACKGROUND ── */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                </Canvas>
            </div>
        </motion.section>
    );
};