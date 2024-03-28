const posts = [
    {
        id: 1,
        title: 'Hello World',
        description: 'This is the first blog post',
        slug: 'hello-world',
        pubDate: new Date('2021-01-01'),
    },
    {
        id: 2,
        title: 'Second Post',
        description: 'This is the second blog post',
        slug: 'second-post',
        pubDate: new Date('2021-01-02'),
    },
    {
        id: 3,
        title: 'Third Post',
        description: 'This is the third blog post',
        slug: 'third-post',
        pubDate: new Date('2021-01-03'),
    },
]

export default function Blog() {
    return (

        // <div className="text-center justify-center">
        //     <main className="flex flex-col items-center p-8 lg:p-24 min-h-screen">
        //         <div className="z-10 h-50 w-full max-w-5xl items-center justify-between text-xl lg:flex">
        //             <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto bg-gradient-to-b from-white via-white via-65% dark:from-black dark:via-black lg:bg-none">
        //                 <a href="/">Get started with Xata and Next.js</a>
        //             </p>
        //             <div className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        //                 <a href="https://xata.io" className="w-20">
        //                     <img src="https://raw.githubusercontent.com/xataio/examples/main/docs/app_logo.svg" />
        //                 </a>
        //             </div>
        //         </div>
        //     </main>
        <div className=" flex flex-col justify-center items-center">
            <div className="w-full max-w-5xl ml-32 mt-16">
                <form>
                    <input
                        name="q"
                        placeholder="Search..."
                        className="w-full rounded-lg p-2"
                    />
                </form>
            </div>
            <div className="w-full max-w-5xl ml-32 mt-16">
                {posts.length === 0 && <p>No blog posts found</p>}
                {posts.map((post) => (
                    <div key={post.id} className="mb-16">
                        <p className="text-xs mb-2 text-purple-950 dark:text-purple-200">{post.pubDate?.toDateString()}</p>
                        <h2 className="text-2xl mb-2">
                            <a href={`posts/${post.slug}`}>{post.title}</a>
                        </h2>
                        <p className="text-purple-950 dark:text-purple-200 mb-5">{post.description}</p>
                        <a
                            href={`posts/${post.slug}`}
                            className="px-4 py-2 font-semibold text-sm bg-purple-700 text-white rounded-lg shadow-sm w-fit"
                        >
                            Read more &rarr;
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}