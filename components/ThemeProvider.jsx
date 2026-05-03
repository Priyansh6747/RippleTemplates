"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useEffect } from "react";
import { colors } from "@/Constants/Color";

// ─── Flatten a nested object into CSS variable names ──────────────────────────
// e.g. { base: { background: "#fff" } } → { "--color-base-background": "#fff" }
function flattenTokens(obj, prefix = "--color") {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        const varName = `${prefix}-${key}`;
        if (typeof value === "object" && value !== null) {
            Object.assign(result, flattenTokens(value, varName));
        } else {
            result[varName] = value;
        }
    }
    return result;
}

const lightVars = flattenTokens(colors.light);
const darkVars = flattenTokens(colors.dark);

// ─── Inner component that injects CSS variables on <html> ─────────────────────
function ThemeVariableInjector({ children }) {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const vars = resolvedTheme === "dark" ? darkVars : lightVars;
        const root = document.documentElement;
        for (const [prop, value] of Object.entries(vars)) {
            root.style.setProperty(prop, value);
        }
    }, [resolvedTheme]);

    return children;
}

// ─── Public ThemeProvider ─────────────────────────────────────────────────────
export function ThemeProvider({ children }) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <ThemeVariableInjector>{children}</ThemeVariableInjector>
        </NextThemesProvider>
    );
}
