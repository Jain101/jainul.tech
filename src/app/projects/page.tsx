import { getSortedProjectsData } from '@/lib/projects'
import Search from '@/components/Search'
import ProjectsCards from '@/components/Projects'

// import { getXataClient } from '@/xata'
// import dotenv from 'dotenv'
// dotenv.config()
// const xata = getXataClient()

// const projects = [
//     {
//         id: 1,
//         title: 'First Project',
//         description: 'This is the first project',
//         slug: 'first-project',
//         pubDate: new Date('2021-01-01'),
//         tags: ['tag1', 'tag2'],
//         img: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
//     },
//     {
//         id: 2,
//         title: 'Second Project',
//         description: 'This is the second project',
//         slug: 'second-project',
//         pubDate: new Date('2021-01-02'),
//         tags: ['tag1', 'tag2'],
//         img: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
//     },
//     {
//         id: 3,
//         title: 'Third Project',
//         description: 'This is the third project',
//         slug: 'third-project',
//         pubDate: new Date('2021-01-03'),
//         tags: ['tag1', 'tag2'],
//         img: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
//     },
//     {
//         id: 4,
//         title: 'Fourth Project',
//         description: 'This is the fourth project',
//         slug: 'fourth-project',
//         pubDate: new Date('2021-01-04'),
//         tags: ['tag1', 'tag2'],
//         img: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
//     },
// ]

export default function Projects() {
    // const projects = await xata.db.projects.getAll()
    const projects = getSortedProjectsData()
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <Search />
                <ProjectsCards projects={projects}/>
            </div>
        </>
    )
}