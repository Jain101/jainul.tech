import {prisma} from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

async function createPost(req: NextApiRequest, res: NextApiResponse){
    const { title, description, content } = req.body;
    const post = await prisma.posts.create({
        data: {
            title: title,
            description: description,
            content: content,
        },
    });
    res.json(post);
}

export default createPost;