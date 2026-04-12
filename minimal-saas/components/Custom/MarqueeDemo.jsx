"use client"
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

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

const COLORS = {
    primary: "#111827",
    secondary: "#e5e7eb",
    background: "transparent",
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
                "hover:bg-gray-950/[.05] dark:hover:bg-gray-50/[.15]"
            )}
            style={{
                borderColor: COLORS.secondary,
                backgroundColor: COLORS.background,
                color: COLORS.primary
            }}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium">
                        {/* UI:REVIEW_NAME (The display name of the reviewer) */}
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium opacity-60">
                        {/* UI:REVIEW_USERNAME (The username of the reviewer) */}
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">
                {/* UI:REVIEW_BODY (The content of the review) */}
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
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    );
}
