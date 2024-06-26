
export default function ProjectCard({ project }) {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={project.img} alt={project.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {project.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{project.summary}</p>
                <div className="card-actions justify-start">
                    {(project.tags || []).map((tag) => {
                        return (
                            <div className="badge badge-outline" key={tag}>{tag}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}