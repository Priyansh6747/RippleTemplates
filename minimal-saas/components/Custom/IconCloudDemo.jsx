import { IconCloud } from "@/components/ui/icon-cloud";

const UI = {
    iconSlugs: [
        "typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
        "amazonaws",
        "postgresql",
        "firebase",
        "nginx",
        "vercel",
        "testinglibrary",
        "jest",
        "cypress",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "sonarqube",
        "figma"
    ]
};

const COLORS = {
    background: "transparent",
};

export function IconCloudDemo() {
    /* UI:ICON_SLUGS (The list of simpleicons slugs to display in the cloud) */
    const images = UI.iconSlugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    );

    return (
        <div
            className="relative flex size-full items-center justify-center overflow-hidden"
            style={{ backgroundColor: COLORS.background }}
        >
            <IconCloud images={images} />
        </div>
    );
}
