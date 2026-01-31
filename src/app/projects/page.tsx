import Title from "../components/Title";


export default function Projects()   {
    return(
        <>
        <Title />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 sm:pt-4 lg:pt-15">

        <div className="project-item w-full mb-2 sm:mb-0">
            <div className="project-item w-full h-40 overflow-hidden rounded-lg ring-1 ring-[#c7b8a5] ring-offset-1 ring-offset-[#2a1f1a]">
                <a href="https://paolacampos-dev.github.io/the-path-of-life/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
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

        <div className="project-item w-full mb-2 sm:mb-0">
            <div className="project-item w-full h-40 overflow-hidden rounded-lg ring-1 ring-[#c7b8a5] ring-offset-1 ring-offset-[#2a1f1a]">
                <a href="https://paolacampos-dev.github.io/paths-of-thought/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <img
                        src="/Thought.png"
                        alt="Responsive landing page built with HTML and CSS"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </a>
            </div>
            <p className="text-center mt-1 sm:mt-3S text-sm sm:text-base lg:text-lg text-[#c7b8a5]/80">
            Responsive layout exploring<br/>HTML & CSS</p>
        </div>

         <div className="project-item w-full mb-3 sm:mb-0">   
            <div className="project-item w-full h-40 overflow-hidden rounded-lg ring-1 ring-[#c7b8a5] ring-offset-1 ring-offset-[#2a1f1a]">
                <a href="https://paolacampos-dev.github.io/zodiac-gallery/" target="_blank" rel="noopener noreferrer" className="block w-full h-full" >
                <img
                    src="/Zodiac.png"
                    alt="Vanilla JavaScript image gallery"
                    className=" w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                </a>
            </div>
            <p className="text-center mt-1 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#c7b8a5]/80">
                Interactive image gallery<br/>vanilla JavaScript</p>
        </div>

        <div className="project-item w-full mb-2 sm:mb-0">
            {/* Project 4 */}
            <div className="project-item w-full h-40 overflow-hidden rounded-lg ring-1 ring-[#c7b8a5] ring-offset-1 ring-offset-[#2a1f1a]">
                <a href="https://nervous-system-gallery.onrender.com/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <img
                        src="/GalleryN.png"
                        alt="React image gallery using Wikimedia API"
                        className=" w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </a>
            </div>
            <p className="text-center mt-1 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#c7b8a5]/80">
                React-based image gallery <br/>fetching Wikimedia API</p>
        </div>
        </div>

        </>
    )
}