import type { Metadata } from "next";
import { LandingPage } from "@/templates/landing-page";

export const metadata: Metadata = {
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar",
    robots: "index, follow",
    openGraph: {
        title: "Site.Set",
        description: "Venda seus produtos como afiliado em um único lugar",
        url: "https://site-blog-livid.vercel.app/og-image.jpg",
        siteName: "Site.Set",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://site-blog-livid.vercel.app/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Site.Set"
            }
        ]
    }
}

export default function HomePage(){
    return <LandingPage />
}