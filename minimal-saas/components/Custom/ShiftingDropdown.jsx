/*
 * ============================================================
 *  SHIFTING DROPDOWN NAV — TEMPLATE CUSTOMIZATION GUIDE
 * ============================================================
 *
 *  HOW TO EDIT THIS FILE
 *  ─────────────────────
 *
 *  1. SWAP THE COLOR THEME
 *     Import a different colors.js and toggle light/dark:
 *       import { colors } from "./colors";
 *       const theme = colors.dark;   // ← or colors.light
 *
 *  2. NAV TABS & DROPDOWN CONTENT
 *     Edit the TABS array at the bottom of this file.
 *     Each tab has:
 *       title      — label shown in the nav bar
 *       Component  — the React component rendered inside the dropdown panel
 *     The id is auto-assigned; don't set it manually.
 *
 *  3. DROPDOWN PANEL SIZE
 *     In the Content component, change `w-96` to any Tailwind width:
 *       "w-80"  → narrower
 *       "w-[28rem]"  → custom width
 *
 *  4. DROPDOWN PANEL BACKGROUND
 *     Content uses a gradient built from theme.surface colors.
 *     To use a solid color instead, replace the `background` style with:
 *       backgroundColor: theme.surface.default
 *
 *  5. ACCENT COLOR (icons, "View more" links, etc.)
 *     Change ACCENT_COLOR to any theme token or hex:
 *       const ACCENT_COLOR = theme.brand.primary;
 *
 *  6. BLOG IMAGES
 *     In the Blog component, replace the `src` values with your own image paths.
 *     Or swap the <img> tags for any preview component you like.
 *
 *  7. NAV WRAPPER BACKGROUND
 *     The outer <div> in ShiftingDropDown uses theme.base.background.
 *     Change it to any color or remove it if this nav sits inside another layout.
 *
 *  8. SLIDE ANIMATION DIRECTION
 *     In Content's inner motion.div, the x offset on enter is ±100px.
 *     Increase for a more dramatic slide, decrease/set 0 to disable:
 *       x: dir === "l" ? 100 : dir === "r" ? -100 : 0
 *
 * ============================================================
 */

"use client"

import React, { useEffect, useState } from "react";
import {
    FiArrowRight,
    FiBarChart2,
    FiChevronDown,
    FiHome,
    FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { colors } from "@/Constants/Color"

// ─── THEME ────────────────────────────────────────────────────────────────────
const theme = colors.dark; // toggle to colors.light for light mode

// ─── ACCENT COLOR ─────────────────────────────────────────────────────────────
// Used for icons, "View more" links, and other highlighted elements
const ACCENT_COLOR = theme.text.accent;

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export const ShiftingDropDown = () => {
    return (
        <div
            className="flex h-96 w-full justify-start p-8 md:justify-center"
            style={{ backgroundColor: theme.base.background, color: theme.text.primary }}
        >
            <Tabs />
        </div>
    );
};

// ─── TABS BAR ─────────────────────────────────────────────────────────────────
const Tabs = () => {
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);

    const handleSetSelected = (val) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }
        setSelected(val);
    };

    return (
        <div
            onMouseLeave={() => handleSetSelected(null)}
            className="relative flex h-fit gap-2"
        >
            {TABS.map((t) => (
                <Tab
                    key={t.id}
                    selected={selected}
                    handleSetSelected={handleSetSelected}
                    tab={t.id}
                >
                    {t.title}
                </Tab>
            ))}

            <AnimatePresence>
                {selected && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    );
};

// ─── INDIVIDUAL TAB BUTTON ────────────────────────────────────────────────────
const Tab = ({ children, tab, handleSetSelected, selected }) => {
    const isActive = selected === tab;

    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors"
            style={{
                backgroundColor: isActive ? theme.surface.active : "transparent",
                color: isActive ? theme.text.primary : theme.text.muted,
            }}
        >
            <span>{children}</span>
            <FiChevronDown
                className={`transition-transform ${isActive ? "rotate-180" : ""}`}
            />
        </button>
    );
};

// ─── DROPDOWN PANEL ───────────────────────────────────────────────────────────
const Content = ({ selected, dir }) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg p-4"
            style={{
                border: `1px solid ${theme.border.default}`,
                background: `linear-gradient(to bottom, ${theme.surface.default}, ${theme.surface.alt})`,
            }}
        >
            <Bridge />
            <Nub selected={selected} />

            {TABS.map((t) => (
                <div className="overflow-hidden" key={t.id}>
                    {selected === t.id && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                            <t.Component />
                        </motion.div>
                    )}
                </div>
            ))}
        </motion.div>
    );
};

// ─── HOVER BRIDGE (keeps dropdown open while mousing between tab and panel) ───
const Bridge = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

// ─── ANIMATED NUB (pointer triangle) ─────────────────────────────────────────
const Nub = ({ selected }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");
            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();
            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
                backgroundColor: theme.surface.default,
                borderColor: theme.border.default,
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border"
        />
    );
};

// ─── DROPDOWN CONTENT COMPONENTS ─────────────────────────────────────────────
// Replace these with your own content. Each is referenced in the TABS array.

const Products = () => (
    <div>
        <div className="flex gap-4">
            {[
                { heading: "Startup",    links: ["Bookkeeping", "Invoicing"] },
                { heading: "Scaleup",    links: ["Live Coaching", "Reviews", "Tax/VAT"] },
                { heading: "Enterprise", links: ["White glove", "SOX Compliance", "Staffing", "More"] },
            ].map(({ heading, links }) => (
                <div key={heading}>
                    <h3 className="mb-2 text-sm font-medium" style={{ color: theme.text.primary }}>
                        {heading}
                    </h3>
                    {links.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="mb-1 block text-sm transition-colors hover:opacity-100"
                            style={{ color: theme.text.muted }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = theme.text.primary)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = theme.text.muted)}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            ))}
        </div>
        <ViewMoreLink />
    </div>
);

const Pricing = () => (
    <div
        className="grid grid-cols-3 gap-4"
        style={{ borderColor: theme.border.default }}
    >
        {[
            { icon: FiHome,     label: "Startup"    },
            { icon: FiBarChart2, label: "Scaleup"  },
            { icon: FiPieChart, label: "Enterprise" },
        ].map(({ icon: Icon, label }, i) => (
            <a
                key={label}
                href="#"
                className="flex w-full flex-col items-center justify-center py-2 transition-colors"
                style={{
                    color: theme.text.muted,
                    borderLeft: i > 0 ? `1px solid ${theme.border.default}` : "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = theme.text.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = theme.text.muted)}
            >
                <Icon className="mb-2 text-xl" style={{ color: ACCENT_COLOR }} />
                <span className="text-xs">{label}</span>
            </a>
        ))}
    </div>
);

const Blog = () => (
    <div>
        <div className="grid grid-cols-2 gap-2">
            {[
                { src: "/imgs/blog/4.png", title: "Post Title One",   desc: "A short description for this blog post goes here." },
                { src: "/imgs/blog/5.png", title: "Post Title Two",   desc: "A short description for this blog post goes here." },
            ].map(({ src, title, desc }) => (
                <a key={title} href="#">
                    <img
                        className="mb-2 h-14 w-full rounded object-cover"
                        src={src}
                        alt={title}
                    />
                    <h4 className="mb-0.5 text-sm font-medium" style={{ color: theme.text.primary }}>
                        {title}
                    </h4>
                    <p className="text-xs" style={{ color: theme.text.muted }}>{desc}</p>
                </a>
            ))}
        </div>
        <ViewMoreLink />
    </div>
);

// Shared "View more" link used inside dropdown panels
const ViewMoreLink = ({ href = "#", label = "View more" }) => (
    <a
        href={href}
        className="ml-auto mt-4 flex items-center gap-1 text-sm transition-opacity hover:opacity-80"
        style={{ color: ACCENT_COLOR }}
    >
        <span>{label}</span>
        <FiArrowRight />
    </a>
);

// ─── TABS CONFIG ──────────────────────────────────────────────────────────────
// Add, remove, or reorder tabs here.
// title     — label shown in the nav bar
// Component — the dropdown panel component for this tab
const TABS = [
    { title: "Products", Component: Products },
    { title: "Pricing",  Component: Pricing  },
    { title: "Blog",     Component: Blog     },
].map((n, idx) => ({ ...n, id: idx + 1 }));