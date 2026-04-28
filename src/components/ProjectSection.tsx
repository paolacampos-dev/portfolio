import ProjectCard from "@/components/ProjectCard"

export default function ProjectSection({ title, projects }) {
    return (
      <section className="w-full max-w-5xl mx-auto">

        <div className="text-center mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1 text-[#c7b8a5]">
            {title}
          </h2>
          <hr className="mb-2"/>
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