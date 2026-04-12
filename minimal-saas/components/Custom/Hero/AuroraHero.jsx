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
import { colors } from "@/Constants/Color";

const theme = colors.dark;

const AURORA_COLORS = [
    theme.brand.primary,
    theme.status.info,
    theme.brand.hover,
    theme.status.success,
];

const UI = {
    badge: "v2.0 Beta Now Live",
    headline: "Build the Future of SaaS",
    subheadline: "Deploy breathtaking, modern web applications in minutes. Engineered for performance, designed for aesthetics. Everything you need to scale, right out of the box.",
    ctaText: "Start Building Free",
    ctaHref: "#",
};

export const AuroraHero = () => {
    const color = useMotionValue(AURORA_COLORS[0]);

    useEffect(() => {
        animate(color, AURORA_COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${theme.base.background} 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
            style={{
                backgroundImage,
                color: theme.text.primary,
            }}
            className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
        >
            <div className="relative z-10 flex flex-col items-center">
                <span
                    className="mb-6 inline-block rounded-full px-3 py-1.5 text-sm font-medium"
                    style={{
                        backgroundColor: theme.surface.active,
                        color: theme.text.primary,
                    }}
                >
                    {UI.badge}
                </span>

                <h1
                    className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-4xl font-bold leading-tight text-transparent sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight"
                >
                    {UI.headline}
                </h1>

                <p
                    className="my-8 max-w-2xl text-center text-base leading-relaxed sm:text-lg"
                    style={{ color: theme.text.muted }}
                >
                    {UI.subheadline}
                </p>

                <motion.button
                    style={{
                        border,
                        boxShadow,
                        backgroundColor: theme.surface.default,
                        color: theme.text.primary,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex w-fit items-center gap-2 rounded-full px-6 py-3 transition-colors hover:bg-opacity-80"
                    onClick={() => {
                        window.location.href = UI.ctaHref;
                    }}
                >
                    <span className="font-medium text-inherit">{UI.ctaText}</span>
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </motion.button>
            </div>

            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                </Canvas>
            </div>
        </motion.section>
    );
};