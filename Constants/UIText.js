// ─── CENTRALIZED UI TEXT ──────────────────────────────────────────────────────
// Every user-visible string lives here. Swap values to rebrand instantly.
// NO hardcoded strings in JSX — everything pulls from this file.

export const UI = {
    // ─── Site-wide ──────────────────────────────────────────────────────────────
    siteName: "Ripple",
    siteTagline: "Ship faster, scale smarter.",

    // ─── Navigation ─────────────────────────────────────────────────────────────
    nav: {
        links: [
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
        ],
        cta: "Get Started",
        ctaHref: "/signup",
        login: "Sign In",
        loginHref: "/login",
    },

    // ─── Hero ───────────────────────────────────────────────────────────────────
    hero: {
        badge: "Now in Public Beta",
        title: "Build products that",
        titleAccent: "people love",
        subtitle:
            "A modern SaaS platform that helps you ship faster with beautiful defaults, smart automation, and zero configuration overhead.",
        ctaPrimary: "Get Started Free",
        ctaPrimaryHref: "/signup",
        ctaSecondary: "View Demo",
        ctaSecondaryHref: "#product-demo",
        socialProof: "Trusted by 2,000+ teams worldwide",
    },

    // ─── Features ───────────────────────────────────────────────────────────────
    features: {
        badge: "Features",
        title: "Everything you need to",
        titleAccent: "ship with confidence",
        subtitle:
            "Built for modern teams — from idea to production in record time.",
        items: [
            {
                icon: "Zap",
                title: "Lightning Fast",
                description:
                    "Optimised from the ground up. Sub-second response times with edge caching built in.",
            },
            {
                icon: "Shield",
                title: "Enterprise Security",
                description:
                    "SOC 2 compliant with end-to-end encryption, SSO, and role-based access control.",
            },
            {
                icon: "BarChart3",
                title: "Real-time Analytics",
                description:
                    "Live dashboards and custom reports that help you understand and grow your metrics.",
            },
            {
                icon: "Layers",
                title: "Modular Architecture",
                description:
                    "Compose your stack from reusable building blocks. Extend without breaking.",
            },
            {
                icon: "Globe",
                title: "Global Scale",
                description:
                    "Deploy to 30+ regions. Automatic failover and load balancing included.",
            },
            {
                icon: "Sparkles",
                title: "AI Powered",
                description:
                    "Smart suggestions, automated workflows, and intelligent search built right in.",
            },
        ],
    },

    // ─── Product Demo ───────────────────────────────────────────────────────────
    productDemo: {
        badge: "Product",
        title: "See it in action",
        subtitle:
            "A quick look at the dashboard experience — clean, fast, and intuitive.",
        tabs: [
            { label: "Dashboard", value: "dashboard" },
            { label: "Analytics", value: "analytics" },
            { label: "Settings", value: "settings" },
        ],
    },

    // ─── Testimonials ───────────────────────────────────────────────────────────
    testimonials: {
        badge: "Testimonials",
        title: "Loved by teams",
        titleAccent: "everywhere",
        subtitle: "Hear from the people building with us.",
        reviews: [
            {
                name: "Sarah Chen",
                username: "@sarahc",
                role: "CTO at Nexus",
                body: "We cut our deployment time by 80%. The developer experience is unmatched.",
                img: "https://avatar.vercel.sh/sarah",
            },
            {
                name: "Marcus Webb",
                username: "@mwebb",
                role: "Founder at Brio",
                body: "Finally a platform that just works. Our team onboarded in under a day.",
                img: "https://avatar.vercel.sh/marcus",
            },
            {
                name: "Elena Ruiz",
                username: "@elenr",
                role: "VP Eng at Scale",
                body: "The analytics alone are worth it. We make data-driven decisions in minutes.",
                img: "https://avatar.vercel.sh/elena",
            },
            {
                name: "David Park",
                username: "@dpark",
                role: "Lead Dev at Arc",
                body: "Best developer tooling I've used. The component library is incredible.",
                img: "https://avatar.vercel.sh/david",
            },
            {
                name: "Aisha Malik",
                username: "@aisha",
                role: "PM at Orbit",
                body: "Collaboration has never been easier. Our team ships twice as fast now.",
                img: "https://avatar.vercel.sh/aisha",
            },
            {
                name: "Tom Nguyen",
                username: "@tomn",
                role: "Eng at Craft",
                body: "Switched from a custom stack and never looked back. The migration was seamless.",
                img: "https://avatar.vercel.sh/tom",
            },
        ],
    },

    // ─── Pricing ────────────────────────────────────────────────────────────────
    pricing: {
        badge: "Pricing",
        title: "Simple, transparent",
        titleAccent: "pricing",
        subtitle: "No hidden fees. No surprises. Start free and scale as you grow.",
        plans: [
            {
                name: "Starter",
                price: "$0",
                period: "/month",
                description: "For individuals and side projects.",
                features: [
                    "Up to 3 projects",
                    "1 GB storage",
                    "Community support",
                    "Basic analytics",
                ],
                cta: "Start Free",
                popular: false,
            },
            {
                name: "Pro",
                price: "$29",
                period: "/month",
                description: "For growing teams that need more.",
                features: [
                    "Unlimited projects",
                    "50 GB storage",
                    "Priority support",
                    "Advanced analytics",
                    "Custom domains",
                    "Team collaboration",
                ],
                cta: "Get Started",
                popular: true,
            },
            {
                name: "Enterprise",
                price: "$99",
                period: "/month",
                description: "For organisations with advanced needs.",
                features: [
                    "Everything in Pro",
                    "Unlimited storage",
                    "24/7 dedicated support",
                    "SSO & SAML",
                    "Audit logs",
                    "SLA guarantee",
                    "Custom integrations",
                ],
                cta: "Contact Sales",
                popular: false,
            },
        ],
    },

    // ─── FAQ ────────────────────────────────────────────────────────────────────
    faq: {
        badge: "FAQ",
        title: "Frequently asked",
        titleAccent: "questions",
        items: [
            {
                q: "How do I get started?",
                a: "Sign up for a free account and you can start building in under 2 minutes. No credit card required.",
            },
            {
                q: "Can I upgrade or downgrade at any time?",
                a: "Absolutely. You can change your plan at any time from the dashboard. Changes take effect immediately.",
            },
            {
                q: "Is there a free trial for paid plans?",
                a: "Yes — every paid plan comes with a 14-day free trial. Cancel anytime, no questions asked.",
            },
            {
                q: "Do you offer refunds?",
                a: "We offer a 30-day money-back guarantee on all paid plans. Just reach out to our support team.",
            },
            {
                q: "What kind of support do you offer?",
                a: "Starter plans get community support. Pro and Enterprise plans include priority email and chat support.",
            },
        ],
    },

    // ─── CTA Section ────────────────────────────────────────────────────────────
    cta: {
        title: "Ready to get started?",
        subtitle:
            "Join thousands of teams already building with Ripple. Start free today.",
        ctaPrimary: "Create Free Account",
        ctaPrimaryHref: "/signup",
        ctaSecondary: "Talk to Sales",
        ctaSecondaryHref: "#",
    },

    // ─── Footer ─────────────────────────────────────────────────────────────────
    footer: {
        brand: "Ripple",
        tagline: "Ship faster, scale smarter.",
        copyright: "© 2026 Ripple. All rights reserved.",
        groups: [
            {
                title: "Product",
                links: [
                    { label: "Features", href: "#features" },
                    { label: "Pricing", href: "#pricing" },
                    { label: "Changelog", href: "#" },
                ],
            },
            {
                title: "Company",
                links: [
                    { label: "About", href: "#" },
                    { label: "Blog", href: "#" },
                    { label: "Careers", href: "#" },
                ],
            },
            {
                title: "Legal",
                links: [
                    { label: "Privacy", href: "#" },
                    { label: "Terms", href: "#" },
                ],
            },
        ],
    },

    // ─── Auth Pages ─────────────────────────────────────────────────────────────
    auth: {
        login: {
            title: "Welcome back",
            subtitle: "Sign in to your account to continue.",
            emailLabel: "Email",
            emailPlaceholder: "you@example.com",
            passwordLabel: "Password",
            passwordPlaceholder: "••••••••",
            submit: "Sign In",
            forgotPassword: "Forgot password?",
            switchText: "Don't have an account?",
            switchLink: "Sign up",
            switchHref: "/signup",
            divider: "or",
            socialGoogle: "Continue with Google",
            socialGithub: "Continue with GitHub",
        },
        signup: {
            title: "Create your account",
            subtitle: "Get started in less than 2 minutes.",
            nameLabel: "Full Name",
            namePlaceholder: "Jane Doe",
            emailLabel: "Email",
            emailPlaceholder: "you@example.com",
            passwordLabel: "Password",
            passwordPlaceholder: "••••••••",
            submit: "Create Account",
            switchText: "Already have an account?",
            switchLink: "Sign in",
            switchHref: "/login",
            divider: "or",
            socialGoogle: "Continue with Google",
            socialGithub: "Continue with GitHub",
        },
    },

    // ─── Dashboard ──────────────────────────────────────────────────────────────
    dashboard: {
        sidebarTitle: "Ripple",
        sidebarNav: [
            { label: "Dashboard", icon: "LayoutDashboard", href: "/dashboard" },
            { label: "Analytics", icon: "BarChart3", href: "#" },
            { label: "Projects", icon: "FolderKanban", href: "#" },
            { label: "Team", icon: "Users", href: "#" },
            { label: "Settings", icon: "Settings", href: "#" },
        ],
        headerTitle: "Overview",
        headerSubtitle: "Welcome back! Here's what's happening.",
        stats: [
            { label: "Total Revenue", value: "$45,231", change: "+20.1%", trend: "up" },
            { label: "Subscriptions", value: "2,350", change: "+12.5%", trend: "up" },
            { label: "Active Users", value: "18,204", change: "+8.2%", trend: "up" },
            { label: "Churn Rate", value: "2.4%", change: "-0.3%", trend: "down" },
        ],
        chartTitle: "Revenue Over Time",
        chartData: [
            { month: "Jan", revenue: 4000 },
            { month: "Feb", revenue: 3000 },
            { month: "Mar", revenue: 5000 },
            { month: "Apr", revenue: 4800 },
            { month: "May", revenue: 6200 },
            { month: "Jun", revenue: 7800 },
            { month: "Jul", revenue: 7200 },
        ],
        recentTitle: "Recent Transactions",
        recentItems: [
            { name: "Sarah Chen", email: "sarah@nexus.io", amount: "+$249.00", status: "Completed" },
            { name: "Marcus Webb", email: "marcus@brio.co", amount: "+$149.00", status: "Completed" },
            { name: "Elena Ruiz", email: "elena@scale.dev", amount: "+$99.00", status: "Pending" },
            { name: "David Park", email: "david@arc.com", amount: "+$399.00", status: "Completed" },
            { name: "Aisha Malik", email: "aisha@orbit.io", amount: "+$199.00", status: "Processing" },
        ],
    },
};
