import type { Metadata } from "next";

import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";

export const metadata: Metadata = {
    title: "Blog",
    description: "Dicas e estratégias para impulsionar seu negócio",
    robots: "index, follow",
    openGraph: {
        title: "Site.Set",
        description: "Dicas e estratégias para impulsionar seu negócio",
        url: "https://site-blog-livid.vercel.app/og-image.jpg",
        siteName: "Site.Set",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://site-blog-livid.vercel.app/og-image.jpg",
                width: 116,
                height: 33,
                alt: "Site.Set"
            }
        ]
    }
}

export default function BlogListPage(){
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return (
        <BlogList posts={sortedPosts} />
    )
}