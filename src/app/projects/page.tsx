import Title from "../components/Title";


export default function Projects()   {
    return(
        <>
        <Title />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 sm:pt-4 lg:pt-15">

        {/* 1st */}
        <div className="project-item w-full mb-2 sm:mb-0">
            <div className="relative w-full h-40 overflow-hidden rounded-lg ring-1otsa ring-[#c7b8a5] ring-offset-1 ring-offset-[#2a1f1a]">
            {/* Github */}
                <a
                    href="https://github.com/paolacampos-dev/the-path-of-life"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="The Path of Life GitHub repository"
                    className="absolute top-2 right-2 z-20 opacity-70 hover:opacity-100 hover:scale-110 transition"
                >
                <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                </a>
            {/* Card Link */}
                <a
                    href="https://paolacampos-dev.github.io/the-path-of-life/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                >
                <img
                    src="/Life.png"
                    alt="UI-focused project with JavaScript enhancements"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                </a>
            </div>
            <p className="text-center mt-1 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#c7b8a5]/80">
                UI-focused landing page <br/> HTML, CSS, JS
            </p>
        </div>

        {/* 2nd */}
        <div className="project-item w-full mb-2 sm:mb-0">
            <div className="relative w-full h-40 overflow-hidden rounded-lg ring-1 ring-[#c7b8a5] ring-offset-1 ring-offset-[#2a1f1a]">
            {/* Github */}
                <a
                    href="https://github.com/paolacampos-dev/paths-of-thought"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Paths of Thought GitHub repository"
                    className="absolute top-2 right-2 z-20 opacity-70 hover:opacity-100 hover:scale-110 transition"
                >
                <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                </a>
            {/* Card Link */}
                <a
                    href="https://paolacampos-dev.github.io/paths-of-thought/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                >
                <img
                    src="/Thought.png"
                    alt="Responsive landing page built with HTML and CSS"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                </a>
            </div>
            <p className="text-center mt-1 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#c7b8a5]/80">
                Responsive layout exploring<br />HTML & CSS
            </p>
        </div>

        {/* 3rd */}
        <div className="project-item w-full mb-3 sm:mb-0">
            <div className="relative w-full h-40 overflow-hidden rounded-lg ring-1 ring-[#c7b8a5] ring-offset-1 ring-offset-[#2a1f1a]">
            {/* GitHub */}
                <a
                    href="https://github.com/paolacampos-dev/zodiac-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Zodiac Gallery GitHub repository"
                    className="absolute top-2 right-2 z-20 opacity-70 hover:opacity-100 hover:scale-110 transition"
                >
                <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                </a>
            {/* Card Link */}
                <a
                    href="https://paolacampos-dev.github.io/zodiac-gallery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                >
                <img
                    src="/Zodiac.png"
                    alt="Vanilla JavaScript image gallery"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                </a>
            </div>
            <p className="text-center mt-1 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#c7b8a5]/80">
                Interactive image gallery<br />vanilla JavaScript
            </p>
        </div>

        {/* 4th */}
        <div className="project-item w-full mb-2 sm:mb-0">
            <div className="relative w-full h-40 overflow-hidden rounded-lg ring-1 ring-[#c7b8a5] ring-offset-1 ring-offset-[#2a1f1a]">
            {/* GitHub icon – top right */}
                <a
                    href="https://github.com/paolacampos-dev/nervous-system-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Nervous System Gallery GitHub repository"
                    className="absolute top-2 right-2 z-20 opacity-70 hover:opacity-100 hover:scale-110 transition"
                >
                <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                </a>
            {/* Main clickable card */}
                <a
                    href="https://nervous-system-gallery.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                >
                <img
                    src="/GalleryN.png"
                    alt="React image gallery using Wikimedia API"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                </a>
            </div>
            <p className="text-center mt-1 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#c7b8a5]/80">
                React-based image gallery <br />fetching Wikimedia API
            </p>
        </div>
    </div>

    </>
    );
}