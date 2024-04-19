import Link from 'next/link'

export default function BlogPost({ post }) {
    return (
        <>
            <div className="divider"></div>
            <p className="text-xs mb-2 text-purple-950 dark:text-purple-200">{post.date}</p>
            <h2 className="text-2xl mb-2">
                <Link href={`blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="text-purple-950 dark:text-purple-200 mb-5">{post.summary}</p>
            <Link
                href={`blog/${post.id}`}
                className="btn btn-success px-4 py-2 font-semibold text-sm text-white rounded-full shadow-sm w-fit"
            >
                Read more &rarr;
            </Link>
        </>
    )
}