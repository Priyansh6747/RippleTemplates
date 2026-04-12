"use client"
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { colors } from "@/Constants/Color";

const theme = colors.dark;

const UI = {
    reviews: [
        {
            name: "Jack",
            username: "@jack",
            body: "I've never seen anything like this before. It's amazing. I love it.",
            img: "https://avatar.vercel.sh/jack",
        },
        {
            name: "Jill",
            username: "@jill",
            body: "I don't know what to say. I'm speechless. This is amazing.",
            img: "https://avatar.vercel.sh/jill",
        },
        {
            name: "John",
            username: "@john",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/john",
        },
        {
            name: "Jane",
            username: "@jane",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jane",
        },
        {
            name: "Jenny",
            username: "@jenny",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jenny",
        },
        {
            name: "James",
            username: "@james",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/james",
        },
    ]
};

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
    const firstRow = UI.reviews.slice(0, UI.reviews.length / 2);
    const secondRow = UI.reviews.slice(UI.reviews.length / 2);

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
