"use client"

import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { colors } from "@/Constants/Color"

const theme = colors.dark;

const UI = {
    targetDate: "2026-12-31T23:59:59",
    units: [
        { unit: "Day", label: "days" },
        { unit: "Hour", label: "hours" },
        { unit: "Minute", label: "minutes" },
        { unit: "Second", label: "seconds" },
    ]
}

const ShiftingCountdown = () => {
    return (
        <div style={{ background: `linear-gradient(to bottom right, ${theme.brand.primary}, ${theme.status.info})` }} className="p-1">
            <div
                className="mx-auto flex w-full max-w-5xl items-center rounded-[22px] overflow-hidden"
                style={{ backgroundColor: theme.surface.default }}
            >
                {UI.units.map(({ unit, label }, i) => (
                    <CountdownItem key={unit} unit={unit} text={label} isLast={i === UI.units.length - 1} />
                ))}
            </div>
        </div>
    );
};

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
                    className="block text-2xl font-bold md:text-4xl lg:text-6xl xl:text-7xl"
                    style={{ color: theme.text.primary }}
                >
                    {time}
                </span>
            </div>
            <span
                className="text-xs font-semibold uppercase tracking-wider md:text-sm"
                style={{ color: theme.brand.primary }}
            >
                {text}
            </span>
        </div>
    );
};

export default ShiftingCountdown;

const useTimer = (unit) => {
    const [ref, animate] = useAnimate();
    const intervalRef = useRef(null);
    const timeRef = useRef(0);
    const [time, setTime] = useState(0);

    const handleCountdown = async () => {
        const end = new Date(UI.targetDate);
        const now = new Date();
        const distance = +end - +now;

        let newTime = 0;
        if (unit === "Day") newTime = Math.floor(distance / (1000 * 60 * 60 * 24));
        else if (unit === "Hour") newTime = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        else if (unit === "Minute") newTime = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        else newTime = Math.floor((distance % (1000 * 60)) / 1000);

        if (newTime !== timeRef.current) {
            await animate(
                ref.current,
                { y: ["0%", "-50%"], opacity: [1, 0] },
                { duration: 0.35 }
            );
            timeRef.current = newTime;
            setTime(newTime);
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