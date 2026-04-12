"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { UI } from "@/Constants/UIText";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
};

export function HeroSection() {
    const h = UI.hero;

    return (
        <SectionWrapper className="flex flex-col items-center pt-32 pb-20 text-center md:pt-40 md:pb-28">
            {/* Badge */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                <Badge variant="secondary" className="mb-6 px-3 py-1 text-xs font-medium">
                    {h.badge}
                </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
                {h.title}{" "}
                <span className="text-primary">{h.titleAccent}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
                {h.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
                <Button size="lg" nativeButton={false} render={<Link href={h.ctaPrimaryHref} />}>
                    {h.ctaPrimary}
                    <ArrowRight className="ml-1.5 size-4" data-icon="inline-end" />
                </Button>
                <Button variant="outline" size="lg" nativeButton={false} render={<Link href={h.ctaSecondaryHref} />}>
                    {h.ctaSecondary}
                </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="mt-12 flex items-center gap-3"
            >
                <div className="flex -space-x-2">
                    {UI.testimonials.reviews.slice(0, 4).map((r) => (
                        <Avatar key={r.username} className="size-8 ring-2 ring-background">
                            <AvatarImage src={r.img} alt={r.name} />
                        </Avatar>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground">{h.socialProof}</p>
            </motion.div>
        </SectionWrapper>
    );
}
