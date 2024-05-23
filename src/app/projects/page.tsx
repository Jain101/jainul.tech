import { getSortedProjectsData } from '@/lib/projects'
import Search from '@/components/Search'
import ProjectsCards from '@/components/Projects'

export default function Projects() {
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