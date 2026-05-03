import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { UI } from "@/Constants/UIText";

export function FAQSection() {
    const f = UI.faq;

    return (
        <SectionWrapper id="faq">
            {/* Header */}
            <div className="mb-14 text-center">
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium">
                    {f.badge}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {f.title}{" "}
                    <span className="text-primary">{f.titleAccent}</span>
                </h2>
            </div>

            {/* Accordion */}
            <div className="mx-auto max-w-2xl">
                <Accordion>
                    {f.items.map((item, i) => (
                        <AccordionItem key={i} value={`faq-${i}`}>
                            <AccordionTrigger>{item.q}</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-muted-foreground">{item.a}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </SectionWrapper>
    );
}
