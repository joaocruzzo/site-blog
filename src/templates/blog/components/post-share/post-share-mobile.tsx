'use client'

import { useShare } from "@/hooks"
import { Button } from "@/components/ui/button"

type PostShareMobileProps = {
    url: string
    title: string
    description: string
}

export const PostShareMobile = ({ url, title, description }: PostShareMobileProps) => {
    const { shareButtons } = useShare({
        url,
        title,
        text: description
    })

    return (
        <div className="flex md:hidden gap-2 shrink-0">
            {shareButtons.map((provider) => (
                <Button
                    key={provider.provider}
                    variant="outline"
                    className="w-fit md:w-full h-10 justify-start gap-2 p-3"
                    onClick={() => provider.action()}
                >
                    {provider.icon}

                    <span className="hidden md:block">
                        {provider.name}
                    </span>
                </Button>
            ))}
        </div>
    )
}