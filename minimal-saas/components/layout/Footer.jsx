import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { UI } from "@/Constants/UIText";

export function Footer() {
    return (
        <footer className="border-t border-border/60 bg-background">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {/* ── Brand Column ── */}
                    <div className="col-span-2 md:col-span-1">
                        <p className="text-lg font-semibold tracking-tight text-foreground">
                            {UI.footer.brand}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {UI.footer.tagline}
                        </p>
                    </div>

                    {/* ── Link Groups ── */}
                    {UI.footer.groups.map((group) => (
                        <div key={group.title}>
                            <p className="mb-3 text-sm font-medium text-foreground">
                                {group.title}
                            </p>
                            <ul className="space-y-2">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator className="my-8" />

                <p className="text-center text-sm text-muted-foreground">
                    {UI.footer.copyright}
                </p>
            </div>
        </footer>
    );
}
