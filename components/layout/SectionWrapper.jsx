import { cn } from "@/lib/utils";

export function SectionWrapper({ children, className, id, ...props }) {
    return (
        <section
            id={id}
            className={cn("mx-auto w-full max-w-7xl px-6 py-20 md:py-28", className)}
            {...props}
        >
            {children}
        </section>
    );
}
