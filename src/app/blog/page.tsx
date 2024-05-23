import getSortedPostsData from '@/lib/posts'
import Search from '../../components/Search'
import BlogPosts from '@/components/BlogPosts'

export default function Blog() {
    const posts = getSortedPostsData()
    return (
        <div className="flex flex-col justify-center items-center">
            <Search />
            <BlogPosts posts={posts}/>
        </div>
    )
}