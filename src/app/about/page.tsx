import { caveat } from "@/lib/fonts"

export default function About() {
    return (
        <section className="max-w-3xl mx-auto px-4 py-16 text-[#c7b8a5]/90 leading-relaxed text-justify">
            <h1 className={`${caveat.className} text-center text-4xl sm:text-5xl font-semibold text-[#c7b8a5] mb-6`}>
                About Me
            </h1>

            <p className="mb-4">
                I am a Full-Stack Web Developer focused on building structured, user-centered digital products that combine clarity, functionality, and real-world usability.
            </p>

            <p className="mb-4">
                My journey into development began with front-end fundamentals — HTML, CSS, responsive design — before expanding into JavaScript, React, Next.js, and backend systems. Over time, I became increasingly interested not only in how interfaces look, but in how the systems behind them connect and operate together.
            </p>

            <p className="mb-4">
                Today, I combine technical structure with thoughtful design.
            </p>

            <p className="mb-4">
                I enjoy building applications that feel intuitive, scalable, and purposeful — from clean interfaces and responsive layouts to database architecture, authentication systems, APIs, and full-stack workflows. I approach development as a complete system, thinking carefully about data flow, maintainability, and how each part of an application supports the overall experience.
            </p>

            <p className="mb-4">
                I am particularly interested in AI-powered systems and structured automation, exploring how domain knowledge, data pipelines, and controlled AI reasoning can be combined to create practical and intelligent tools.
            </p>

            <p className="mb-4">
                Currently, I’m expanding my knowledge in WordPress and PHP while developing projects such as a website diagnostics platform and an AI-assisted natal chart interpretation system. My goal is to create scalable digital products that combine technical depth with meaningful user experience.
            </p>

            <p>
                I am driven by curiosity, continuous learning, and the process of turning complexity into clarity through well-structured digital solutions.
            </p>
            
        </section>
    );
}
