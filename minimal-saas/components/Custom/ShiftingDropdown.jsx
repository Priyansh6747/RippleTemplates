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
import { colors } from "@/Constants/Color";
import Link from "next/link";

const theme = colors.dark;
const ACCENT_COLOR = theme.text.accent;

const UI = {
    tabs: [
        { id: 1, title: "Products" },
        { id: 2, title: "Pricing" },
        { id: 3, title: "Blog" },
    ],
    productsMenu: {
        categories: [
            { heading: "Startup", links: ["Bookkeeping", "Invoicing"] },
            { heading: "Scaleup", links: ["Live Coaching", "Reviews", "Tax/VAT"] },
            { heading: "Enterprise", links: ["White glove", "SOX Compliance", "Staffing", "More"] },
        ],
        viewMore: "View all features"
    },
    pricingMenu: [
        { icon: FiHome, label: "Startup", href: "/pricing" },
        { icon: FiBarChart2, label: "Scaleup", href: "/pricing" },
        { icon: FiPieChart, label: "Enterprise", href: "/pricing" },
    ],
    blogMenu: {
        posts: [
            { src: "/imgs/blog/4.png", title: "Announcing v2.0", desc: "The future of deployment." },
            { src: "/imgs/blog/5.png", title: "New Infrastructure", desc: "Scaling across regions." },
        ],
        viewMore: "Read our blog"
    }
};

export const ShiftingDropDown = () => {
    return (
        <nav
            className="flex h-20 w-full items-center justify-between px-8"
            style={{ backgroundColor: theme.base.background, color: theme.text.primary, borderBottom: `1px solid ${theme.border.default}` }}
        >
            <Link href="/" className="text-xl font-bold tracking-tight">Ripple<span style={{ color: theme.brand.primary }}>.</span></Link>
            <Tabs />
            <Link
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={{ backgroundColor: theme.buttons.primary.bg, color: theme.buttons.primary.text }}
            >
                Login
            </Link>
        </nav>
    );
};

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
            {UI.tabs.map((t) => (
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

const Tab = ({ children, tab, handleSetSelected, selected }) => {
    const isActive = selected === tab;

    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
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

const Content = ({ selected, dir }) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-2xl p-4 shadow-xl z-50"
            style={{
                border: `1px solid ${theme.border.default}`,
                background: `linear-gradient(to bottom, ${theme.surface.default}, ${theme.surface.alt})`,
            }}
        >
            <Bridge />
            <Nub selected={selected} />

            {UI.tabs.map((t) => (
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
                            {t.id === 1 && <Products />}
                            {t.id === 2 && <Pricing />}
                            {t.id === 3 && <Blog />}
                        </motion.div>
                    )}
                </div>
            ))}
        </motion.div>
    );
};

const Bridge = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

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
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border z-40"
        />
    );
};

const Products = () => (
    <div>
        <div className="flex gap-4">
            {UI.productsMenu.categories.map(({ heading, links }) => (
                <div key={heading}>
                    <h3 className="mb-2 text-sm font-semibold" style={{ color: theme.text.primary }}>
                        {heading}
                    </h3>
                    {links.map((link) => (
                        <Link
                            key={link}
                            href="/product"
                            className="mb-1 block text-sm transition-colors hover:opacity-100"
                            style={{ color: theme.text.muted }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = theme.text.primary)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = theme.text.muted)}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            ))}
        </div>
        <ViewMoreLink href="/product" label={UI.productsMenu.viewMore} />
    </div>
);

const Pricing = () => (
    <div
        className="grid grid-cols-3 gap-4"
        style={{ borderColor: theme.border.default }}
    >
        {UI.pricingMenu.map(({ icon: Icon, label, href }, i) => (
            <Link
                key={label}
                href={href}
                className="flex w-full flex-col items-center justify-center py-4 transition-colors rounded-xl"
                style={{
                    color: theme.text.muted,
                    borderLeft: i > 0 ? `1px solid ${theme.border.default}` : "none",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.text.primary;
                    e.currentTarget.style.backgroundColor = theme.surface.active;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.text.muted;
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
            >
                <Icon className="mb-2 text-2xl" style={{ color: ACCENT_COLOR }} />
                <span className="text-sm font-medium">{label}</span>
            </Link>
        ))}
    </div>
);

const Blog = () => (
    <div>
        <div className="grid grid-cols-2 gap-4">
            {UI.blogMenu.posts.map(({ src, title, desc }) => (
                <Link key={title} href="#" className="block p-2 rounded-xl transition-colors hover:bg-white/5">
                    <div className="mb-2 h-20 w-full rounded-lg bg-gray-800" />
                    <h4 className="mb-0.5 text-sm font-semibold" style={{ color: theme.text.primary }}>
                        {title}
                    </h4>
                    <p className="text-xs" style={{ color: theme.text.muted }}>{desc}</p>
                </Link>
            ))}
        </div>
        <ViewMoreLink label={UI.blogMenu.viewMore} />
    </div>
);

const ViewMoreLink = ({ href = "#", label }) => (
    <Link
        href={href}
        className="ml-auto mt-4 flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-80"
        style={{ color: ACCENT_COLOR }}
    >
        <span>{label}</span>
        <FiArrowRight />
    </Link>
);