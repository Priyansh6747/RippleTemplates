import { IconCloud } from "@/components/ui/icon-cloud";
import config from "@/customise.json";

const COLORS = {
    background: "transparent",
};

export function IconCloudDemo() {
    const UI = config.iconCloud;
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
