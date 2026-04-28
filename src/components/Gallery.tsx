import projectsData from "@/data/projectsData"
import ProjectSection from "@/components/ProjectSection"

export default function Gallery()    {
    const projects = projectsData
    const fullstackProjects = projects.filter( p => p.type === "fullstack")
    const frontendProjects = projects.filter( p => p.type === "frontend")
    const wpProjects = projects.filter( p => p.type === "wordpress")

    return (
        <div className="space-y-16">
            <ProjectSection
                title="Full-Stack Applications"
                projects={fullstackProjects}
                className=""
            />
            <ProjectSection
                title="Front-End Interfaces"
                projects={frontendProjects}
            />
            <ProjectSection
                title="WordPress Builds"
                projects={wpProjects}
            />
        </div>
    )
}
                
          