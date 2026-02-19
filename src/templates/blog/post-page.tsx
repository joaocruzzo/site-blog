import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

import Link from "next/link"
import Image from "next/image"

import { useShare } from "@/hooks/use-share"

import { Post } from "contentlayer/generated"

import { Avatar } from "@/components/avatar"
import { Button } from "@/components/ui/button"
import { Markdown } from "@/components/markdown"

export type PostPageProps ={
    post: Post
}

export const PostPage = ({ post }: PostPageProps) => {
    const publishedDate = new Date(post?.date).toLocaleDateString("pt-BR")

    const postUrl = `https://site.set/blog/${post.slug}`

    const { shareButtons } = useShare({
        url: postUrl,
        title: post.title,
        text: post.description

    })

    return (
        <main className="text-gray-100 py-20 mt-4">
            <div className="container space-y-12 px-4 md:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                        <Breadcrumb>
                        <BreadcrumbList className="flex items-center flex-nowrap gap-1">
                            <BreadcrumbItem className="shrink-0">
                                <BreadcrumbLink asChild className="text-action-sm">
                                    <Link href="/blog">
                                        Blog
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <span className="text-blue-200 text-action-sm truncate">
                                {post?.title}
                            </span>
                            <BreadcrumbItem>

                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    </div>

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
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
                    <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
                        <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                            <Image
                                src={post?.image ?? ""}
                                alt={post?.title ?? ""}
                                fill
                                className="object-cover"
                            />
                        </figure>

                        <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8 md:mt-12">
                            <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                                {post?.title}
                            </h1>

                            <Avatar.Container>
                                <Avatar.Image
                                    src={post?.author.avatar}
                                    alt={post?.author.name}
                                    size="sm"
                                />

                                <Avatar.Content>
                                    <Avatar.Title>
                                        {post?.author.name}
                                    </Avatar.Title>

                                    <Avatar.Description>
                                        Publicado em {" "}
                                        <time dateTime={post.date}>
                                            {publishedDate}
                                        </time>
                                    </Avatar.Description>
                                </Avatar.Content>
                            </Avatar.Container>
                        </header>

                        <div className="prose prose-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
                            <Markdown content={post.body.raw} />
                        </div>
                    </article>

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
                </div>
            </div>
        </main>
    )
}