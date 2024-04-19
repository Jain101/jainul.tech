import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const updatesDirectory = path.join(process.cwd(), 'src/content/updates');

export type updateMetaData = {
    // id: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    img: string;
    version: string;
    project: string;
}

function getAllUpdateswithID() {
    // Get file names under /updates
    const fileNames = fs.readdirSync(updatesDirectory);
    const allUpdatesData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(updatesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        //console.log(matterResult.data);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data as updateMetaData
        };
    })
    console.log(allUpdatesData);
    return allUpdatesData;
}

export function getSortedUpdatesData() {
    // Sort updates by date
    const allUpdatesData = getAllUpdateswithID();
    const sortedUpdates = allUpdatesData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
    console.log(sortedUpdates);
    return sortedUpdates;
}