import { caveat } from "@/lib/fonts"

export default function About() {
    return (
        <section className="max-w-3xl mx-auto px-4 py-16 text-[#c7b8a5]/90 leading-relaxed text-justify">
            <h1 className={`${caveat.className} text-center text-4xl sm:text-5xl font-semibold text-[#c7b8a5] mb-6`}>
                About Me
            </h1>

            <p className="mb-4">
                I am a Full-Stack Web Developer focused on building practical, user-centered web applications with a strong emphasis on structure, clarity, and real-world usability.
            </p>

            <p className="mb-4">
                My work combines clean interface design with solid backend development, ensuring applications are not only functional but intuitive and easy to use. I work with technologies such as Next.js, React, and PostgreSQL, alongside core web technologies including HTML, CSS, and JavaScript.
                
            </p>

            <p className="mb-4">
                I approach development as a complete system — thinking in terms of data flow, architecture, and how each part of an application connects. This includes working with APIs, authentication, database design, and building scalable solutions from end to end.
            </p>

            <p className="mb-4">
                I have a growing focus on integrating AI into applications, designing structured pipelines that combine data, domain knowledge, and controlled AI reasoning to create practical, intelligent tools.
            </p>

            <p className="mb-4">
                Currently, I am expanding my skills in WordPress and PHP while developing AI-powered projects such as a website diagnostics tool and a natal chart interpretation system. My goal is to build scalable, real-world solutions that deliver clear value.
            </p>

            <p className="mb-4">
                I am driven by curiosity and continuous improvement — understanding how systems work, refining them, and turning ideas into well-structured digital products.
            </p>
            
        </section>
    );
}
