import ProjectCard from "./ProjectCard"

export default function Projects({ projects }) {
    return (
        <div className='w-full max-w-5xl ml-32 mt-16'>
            <div className="grid grid-cols-3 gap-4">
                {projects.length === 0 && <p>No projects found</p>}
                {projects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
        </div>
    )
}