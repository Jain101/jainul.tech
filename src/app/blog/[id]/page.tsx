'use client'

import { filterbyID } from '@/lib/posts'
import Markdown from 'markdown-to-jsx'
import Giscus from '@giscus/react'
//import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'

export default function Display({ params }: { params: { id: string } }) {
    const id = params.id
    const post = filterbyID(id)

    if (!post) return (
        <div className='text-center'>No Post with id: {id}</div>
    )
    //console.log('Heyyyyyy-------!!!!!!', typeof post.content);
    return (
        <div className='text-center w-full max-w-5xl ml-32 mt-16'>
            {/* <SyntaxHighlighter language={"javascript"} style={''}> */}
            <Markdown className='prose prose-invert min-w-full'>
                {post.content}
            </Markdown>
            {/* </SyntaxHighlighter> */}
            {/* <Giscus
                repo="Jain101/jainul.tech"
                repoId="R_kgDOLm2Szg"
                category="General"
                categoryId="DIC_kwDOLm2Szs4Cefk1"
                mapping="url"
                strict="0"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="dark"
                lang="en"
                loading='lazy'
                /> */}
            <Giscus
                id="comments"
                repo="Jain101/blogcomments"
                repoId="R_kgDOK_Bw2Q"
                category="General"
                categoryId="DIC_kwDOK_Bw2c4CcFnS"
                mapping="pathname"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="dark"
                lang="en"
                loading="lazy"
            />
        </div>
    )
}