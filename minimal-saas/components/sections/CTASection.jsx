import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UI } from "@/Constants/UIText";

export function CTASection() {
    const c = UI.cta;

    return (
        <section className="border-t border-border/60 bg-muted/30">
            <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center md:py-28">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {c.title}
                </h2>
                <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                    {c.subtitle}
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <Button size="lg" nativeButton={false} render={<Link href={c.ctaPrimaryHref} />}>
                        {c.ctaPrimary}
                        <ArrowRight className="ml-1.5 size-4" data-icon="inline-end" />
                    </Button>
                    <Button variant="outline" size="lg" nativeButton={false} render={<Link href={c.ctaSecondaryHref} />}>
                        {c.ctaSecondary}
                    </Button>
                </div>
            </div>
        </section>
    );
}
