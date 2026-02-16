import { cn } from "@/lib/utils"

import { useRouter } from "next/router"
import Link, { LinkProps } from "next/link"

type ActiveLinkProps = {
    children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
    const router = useRouter()

    const isCurrentPath = router.asPath == href || router.asPath == rest.as

    return (
        <Link href={href} className={cn("text-action-sm transition-colors hover:text-blue-200", isCurrentPath ? "text-blue-200" : "text-gray-100")}>
            {children}
        </Link>
    )
}