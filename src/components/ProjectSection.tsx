import ProjectCard from "@/components/ProjectCard"
import { Project } from "@/types/project"
import { caveat } from "@/lib/fonts"

type ProjectSectionProps = {
    title: string
    projects: Project[]
}

export default function ProjectSection({ title, projects } : ProjectSectionProps) {
    return (
      <section className="w-full max-w-5xl mx-auto">

        <div className="text-center mb-4">
          <h2 className={`${caveat.className} tracking-wide text-xl sm:text-2xl font-light mb-1 text-[#c7b8a5]/40`}>
            {title}
          </h2>
          <hr className="mb-2 opacity-20"/>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project) => (
            <div key={project.id} className="w-full sm:w-[45%] lg:w-[23%]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
</section>
  )
}