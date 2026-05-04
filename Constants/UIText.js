// ─── CENTRALIZED UI TEXT ──────────────────────────────────────────────────────
// Every user-visible string lives in customise.json.
// This file re-exports it as `UI` for backward compatibility with all components.
// NO hardcoded strings — everything pulls from customise.json.

import config from "@/customise.json";

export const UI = {
    // ─── Site-wide ──────────────────────────────────────────────────────────────
    siteName: config.brand.siteName,
    siteTagline: config.brand.siteTagline,

    // ─── Navigation ─────────────────────────────────────────────────────────────
    nav: config.nav,

    // ─── Hero ───────────────────────────────────────────────────────────────────
    hero: config.hero,

    // ─── Features ───────────────────────────────────────────────────────────────
    features: config.features,

    // ─── Product Demo ───────────────────────────────────────────────────────────
    productDemo: config.productDemo,

    // ─── Testimonials ───────────────────────────────────────────────────────────
    testimonials: config.testimonials,

    // ─── Pricing ────────────────────────────────────────────────────────────────
    pricing: config.pricing,

    // ─── FAQ ────────────────────────────────────────────────────────────────────
    faq: config.faq,

    // ─── CTA Section ────────────────────────────────────────────────────────────
    cta: config.cta,

    // ─── Footer ─────────────────────────────────────────────────────────────────
    footer: config.footer,

    // ─── Auth Pages ─────────────────────────────────────────────────────────────
    auth: config.auth,

    // ─── Dashboard ──────────────────────────────────────────────────────────────
    dashboard: config.dashboard,
};
