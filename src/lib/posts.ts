import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export type postMetaData = {
    // id: string;
    title: string;
    date: string;
    summary: string;
}

export function getAllPostswithID() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // Use gray-matter to parse the post metadata section
        const {data: matterResult, content} = matter(fileContents);
        // console.log(matterResult);
        // console.log(content);

        // Combine the data with the id
        return {
            id,
            ...matterResult as postMetaData, content
        };
    })
    //console.log(allPostsData);
    return allPostsData;
}

export function filterbyID(id: string) {
    const post = getAllPostswithID().find((post) => post.id === id);
    if(!post) return
    return post
}

export default function getSortedPostsData() {
    // Sort posts by date
    const allPostsData = getAllPostswithID();
    const sortedPosts = allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
    //console.log(sortedPosts);
    return sortedPosts;
}

// export default {getAllPostswithID, getSortedPostsData}