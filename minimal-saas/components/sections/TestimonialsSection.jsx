"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { UI } from "@/Constants/UIText";

function ReviewCard({ img, name, username, role, body }) {
    return (
        <figure className="relative h-full w-72 cursor-default overflow-hidden rounded-xl border border-border/60 bg-card p-5 transition-colors hover:bg-accent/40">
            <div className="flex items-center gap-3">
                <Avatar className="size-9">
                    <AvatarImage src={img} alt={name} />
                </Avatar>
                <div>
                    <figcaption className="text-sm font-medium text-foreground">
                        {name}
                    </figcaption>
                    <p className="text-xs text-muted-foreground">{role}</p>
                </div>
            </div>
            <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{body}&rdquo;
            </blockquote>
        </figure>
    );
}

export function TestimonialsSection() {
    const t = UI.testimonials;
    const mid = Math.ceil(t.reviews.length / 2);
    const firstRow = t.reviews.slice(0, mid);
    const secondRow = t.reviews.slice(mid);

    return (
        <SectionWrapper id="testimonials" className="overflow-hidden">
            {/* Header */}
            <div className="mb-14 text-center">
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium">
                    {t.badge}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {t.title}{" "}
                    <span className="text-primary">{t.titleAccent}</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                    {t.subtitle}
                </p>
            </div>

            {/* Marquee Rows */}
            <div className="relative">
                <Marquee pauseOnHover className="[--duration:30s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="mt-4 [--duration:30s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>

                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
            </div>
        </SectionWrapper>
    );
}
