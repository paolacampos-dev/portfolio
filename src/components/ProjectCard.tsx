type Project = {
    id: number
    title: string
    type: string
    image?: string
    alt?: string
    github?: string
    live?: string
    description: string
    tech: string[]
}

export default function ProjectCard({ project } : {project: Project}) {
    const image = project.image
    const live = project.live
    const github = project.github

    return (
        <div className="project-item w-full group transition transform hover:-translate-y-1">
            <div className="relative w-full h-40 overflow-hidden rounded-lg ring-1 ring-[#c7b8a5] ring-offset-1 ring-offset-[#2a1f1a]">

                {github && (
                <a  href={github} target="_blank" rel="noopener noreferrer"
                    className="absolute top-2 right-2 z-20 opacity-70 hover:opacity-100 bg-black/30 p-1 rounded-md backdrop-blur-sm">
                    <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                </a>
                )}

                {live && (
                <a  href={live} target="_blank" rel="noopener noreferrer"
                    className="absolute inset-0 z-10" />
                )}

                {image && (
                <img
                    src={image}
                    alt={project.alt || ""}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                )}
            </div>

            <div className="text-center mt-2">
                <p className="text-sm text-[#c7b8a5]/80 truncate">
                {project.description}
                </p>

                <div className="flex justify-center gap-2 mt-1 flex-wrap">
                {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0 bg-[#c7b8a5]/20 rounded">
                    {tech}
                    </span>
                ))}
                </div>
            </div>
        </div>
    )
}