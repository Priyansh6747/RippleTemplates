/*
 * ============================================================
 *  SHIFTING COUNTDOWN — TEMPLATE CUSTOMIZATION GUIDE
 * ============================================================
 *
 *  HOW TO EDIT THIS FILE
 *  ─────────────────────
 *
 *  1. SWAP THE COLOR THEME
 *     Import a different colors.js and toggle light/dark:
 *       import { colors } from "./colors";
 *       const theme = colors.light;   // ← or colors.dark
 *
 *  2. SET THE COUNTDOWN DATE
 *     Change COUNTDOWN_TO to any future ISO date string:
 *       const COUNTDOWN_TO = "2025-12-31";
 *     Or a full datetime:
 *       const COUNTDOWN_TO = "2025-12-31T23:59:59";
 *
 *  3. SECTION WRAPPER BACKGROUND
 *     The outer wrapper uses a gradient defined by WRAPPER_GRADIENT.
 *     You can replace it with a solid color from the theme:
 *       const WRAPPER_GRADIENT = theme.brand.primary;
 *     Or keep it as a CSS gradient string:
 *       const WRAPPER_GRADIENT = `linear-gradient(to bottom right, ${theme.brand.primary}, ${theme.status.info})`;
 *
 *  4. COUNTDOWN UNITS
 *     The UNITS array controls which units are shown and their labels.
 *     Each entry: { unit: "Day" | "Hour" | "Minute" | "Second", label: string }
 *     Remove an entry to hide that unit entirely.
 *
 *  5. CARD SIZE
 *     Adjust height in CountdownItem's className:
 *       "h-24 md:h-36"  ← change these to resize the cards
 *
 *  6. DIVIDER BETWEEN CARDS
 *     The border between items uses theme.border.default.
 *     Remove the `borderRight` style on CountdownItem to hide dividers.
 *
 *  7. ANIMATION SPEED
 *     In useTimer's handleCountdown, change the `duration` values:
 *       { duration: 0.35 }   ← exit animation speed (seconds)
 *       { duration: 0.35 }   ← enter animation speed (seconds)
 *
 * ============================================================
 */

"use client"

import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { colors } from "@/Constants/Color"

// ─── THEME ────────────────────────────────────────────────────────────────────
const theme = colors.dark; // toggle to colors.light for light mode

// ─── COUNTDOWN TARGET DATE ────────────────────────────────────────────────────
// Change this to your target date (ISO 8601 format)
const COUNTDOWN_TO = "2025-12-31";

// ─── WRAPPER BACKGROUND ───────────────────────────────────────────────────────
// A CSS gradient string — or swap for a solid theme color
const WRAPPER_GRADIENT = `linear-gradient(to bottom right, ${theme.brand.primary}, ${theme.status.info})`;

// ─── UNITS ────────────────────────────────────────────────────────────────────
// Remove entries to hide units; reorder to rearrange them
const UNITS = [
    { unit: "Day",    label: "days"    },
    { unit: "Hour",   label: "hours"   },
    { unit: "Minute", label: "minutes" },
    { unit: "Second", label: "seconds" },
];

// ─── TIME CONSTANTS ───────────────────────────────────────────────────────────
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR   = MINUTE * 60;
const DAY    = HOUR   * 24;

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const ShiftingCountdown = () => {
    return (
        <div style={{ background: WRAPPER_GRADIENT }} className="p-4">
            <div
                className="mx-auto flex w-full max-w-5xl items-center"
                style={{ backgroundColor: theme.surface.default }}
            >
                {UNITS.map(({ unit, label }, i) => (
                    <CountdownItem key={unit} unit={unit} text={label} isLast={i === UNITS.length - 1} />
                ))}
            </div>
        </div>
    );
};

// ─── COUNTDOWN ITEM ───────────────────────────────────────────────────────────
const CountdownItem = ({ unit, text, isLast }) => {
    const { ref, time } = useTimer(unit);

    return (
        <div
            className="flex h-24 w-1/4 flex-col items-center justify-center gap-1 font-mono md:h-36 md:gap-2"
            style={{
                borderRight: isLast ? "none" : `1px solid ${theme.border.default}`,
            }}
        >
            <div className="relative w-full overflow-hidden text-center">
        <span
            ref={ref}
            className="block text-2xl font-medium md:text-4xl lg:text-6xl xl:text-7xl"
            style={{ color: theme.text.primary }}
        >
          {time}
        </span>
            </div>
            <span
                className="text-xs font-light md:text-sm lg:text-base"
                style={{ color: theme.text.muted }}
            >
        {text}
      </span>
        </div>
    );
};

export default ShiftingCountdown;

// ─── HOOK ─────────────────────────────────────────────────────────────────────
// NOTE: Framer Motion exit animations can be buggy when repeating keys and
// tabbing between windows. This custom hook handles entrance/exit animations
// manually instead of relying on AnimatePresence.
const useTimer = (unit) => {
    const [ref, animate] = useAnimate();
    const intervalRef = useRef(null);
    const timeRef     = useRef(0);
    const [time, setTime] = useState(0);



    const handleCountdown = async () => {
        const end      = new Date(COUNTDOWN_TO);
        const now      = new Date();
        const distance = +end - +now;

        let newTime = 0;
        if      (unit === "Day")    newTime = Math.floor(distance / DAY);
        else if (unit === "Hour")   newTime = Math.floor((distance % DAY)  / HOUR);
        else if (unit === "Minute") newTime = Math.floor((distance % HOUR) / MINUTE);
        else                        newTime = Math.floor((distance % MINUTE) / SECOND);

        if (newTime !== timeRef.current) {
            // Exit animation
            await animate(
                ref.current,
                { y: ["0%", "-50%"], opacity: [1, 0] },
                { duration: 0.35 }
            );
            timeRef.current = newTime;
            setTime(newTime);
            // Enter animation
            await animate(
                ref.current,
                { y: ["50%", "0%"], opacity: [0, 1] },
                { duration: 0.35 }
            );
        }
    };
    useEffect(() => {
        intervalRef.current = setInterval(handleCountdown, 1000);
        return () => clearInterval(intervalRef.current || undefined);
    }, []);

    return { ref, time };
};