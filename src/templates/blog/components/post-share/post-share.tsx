'use client'

import { useShare } from "@/hooks"
import { Button } from "@/components/ui/button"

type PostShareProps = {
    url: string
    title: string
    description: string
}

export const PostShare = ({ url, title, description }: PostShareProps) => {
    const { shareButtons } = useShare({
        url,
        title,
        text: description
    })

    return (
        <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700">
                <h2 className="hidden md:block mb-4 text-heading-sm text-gray-100">
                    Compartilhar
                </h2>

                <div className="hidden md:flex justify-between md:flex-col gap-2">
                    {shareButtons.map((provider) => (
                        <Button
                            key={provider.provider}
                            variant="outline"
                            className="w-fit md:w-full justify-start gap-2 p-3"
                            onClick={() => provider.action()}
                        >
                            {provider.icon}

                            <span className="hidden md:block">
                                {provider.name}
                            </span>
                        </Button>
                    ))}
                </div>
            </div>
        </aside>
    )
}