import ProjectCard from '../components/ProjectCard'
import Search from '../components/Search'
import { getXataClient } from '@/xata'
const xata = getXataClient()

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

export default async function Projects() {
    const projects = await xata.db.projects.getAll()
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <Search />
                <div className='w-full max-w-5xl ml-32 mt-16'>
                    <div className="grid grid-cols-3 gap-4">
                        {projects.length === 0 && <p>No projects found</p>}
                        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
                    </div>
                </div>
            </div>
        </>
    )
}