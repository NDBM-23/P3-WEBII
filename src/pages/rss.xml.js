import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "Nestor Becerra | Blog",
        description: "Mi camino aprendiendo Astro y Desarrollo de Software en el CETI",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>es</language>`,
    });
}
