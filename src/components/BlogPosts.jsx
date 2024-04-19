import BlogPost from "./BlogPost"

export default function BlogPosts({posts}) {
    return (
        <div className="w-full max-w-5xl ml-32 mt-16">
            {posts.length === 0 && <p>No blog posts found</p>}
            {posts.map((post) => (
                <div key={post.id} className="mb-8">
                    <BlogPost post={post} />
                </div>
            ))}
        </div>
    )
}