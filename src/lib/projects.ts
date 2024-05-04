import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export type projectMetaData = {
    // id: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
}

function getAllProjectswithID() {
    // Get file names under /projects
    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        //console.log(matterResult.data);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data as projectMetaData
        };
    })
    //console.log(allProjectsData);
    return allProjectsData;
}

export function getSortedProjectsData() {
    // Sort projects by date
    const allProjectsData = getAllProjectswithID();
    const sortedProjects = allProjectsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
    //console.log(sortedProjects);
    return sortedProjects;
}