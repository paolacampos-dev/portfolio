import projectsData from "@/data/projectsData"

export default function Gallery()    {
    const projects = projectsData

    return (
        <>
        {projects.map((project) => {
            return (
                <div  key={project.id} className="project-item w-full mb-2 sm:mb-0 group transition transform hover:-translate-y-1">
                    <div className="relative w-full h-40 overflow-hidden rounded-lg ring-1 ring-[#c7b8a5] ring-offset-1 ring-offset-[#2a1f1a]">
                        {/* Github */}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} on  GitHub`}
                                className="absolute top-2 right-2 z-20 opacity-70 hover:opacity-100 bg-black/30 p-1 rounded-md backdrop-blur-sm transition"
                            >
                            <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                            </a>
                        )}
                        {/* Card Link */}
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10"
                            >
                            <img
                                src={project.image}
                                alt={project.alt}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                            </a>
                    </div>
                    <div className="text-center mt-1 sm:mt-2">
                        <p className="text-sm sm:text-base lg:text-lg text-[#c7b8a5]/80">
                        {project.description}
                        </p>

                        <div className="flex justify-center gap-2 mt-1 flex-wrap">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2 py-0 bg-[#c7b8a5]/20 rounded"
                                >
                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )
        })}
    </>
    )
}