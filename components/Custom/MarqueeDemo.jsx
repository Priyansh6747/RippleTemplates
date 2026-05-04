"use client"
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { colors } from "@/Constants/Color";
import config from "@/customise.json";

const theme = colors.dark;

const ReviewCard = ({
    img,
    name,
    username,
    body,
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "transition-colors"
            )}
            style={{
                borderColor: theme.border.default,
                backgroundColor: theme.surface.alt,
                color: theme.text.primary
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.surface.hover;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.surface.alt;
            }}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium opacity-60" style={{ color: theme.text.muted }}>
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm leading-relaxed" style={{ color: theme.text.muted }}>
                {body}
            </blockquote>
        </figure>
    );
};

export function MarqueeDemo() {
    const reviews = config.marqueeReviews;
    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3" style={{ background: `linear-gradient(to right, ${theme.base.background}, transparent)` }}></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3" style={{ background: `linear-gradient(to left, ${theme.base.background}, transparent)` }}></div>
        </div>
    );
}
