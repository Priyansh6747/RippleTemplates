"use client"

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from '@/components/ui/tooltip';
import { buttonVariants } from '@/components/ui/button';

const UI = {
    buttonText: "Hover",
    tooltipText: "Add to library"
};

const COLORS = {
    primary: "#111827",
    secondary: "#6b7280",
    background: "#ffffff"
};

export function RadixTooltipDemo({
    side,
    sideOffset,
    align,
    alignOffset,
    followCursor,
}) {
    return (
        <Tooltip followCursor={followCursor}>
            <TooltipTrigger
                className={buttonVariants({ variant: "outline" })}
                style={{ color: COLORS.primary, borderColor: COLORS.secondary }}
            >
                {/* UI:BUTTON_TEXT (The text shown on the button trigger) */}
                {UI.buttonText}
            </TooltipTrigger>
            <TooltipContent
                side={side}
                sideOffset={sideOffset}
                align={align}
                alignOffset={alignOffset}
                style={{ backgroundColor: COLORS.background, color: COLORS.primary }}
            >
                <p>
                    {/* UI:TOOLTIP_TEXT (The text shown inside the tooltip) */}
                    {UI.tooltipText}
                </p>
            </TooltipContent>
        </Tooltip>
    );
}
