import { Project } from "@/types/project"

const projectsData: Project[] = [
    {
        id: 1, 
        title: "Self-Employment Tracker",
        type: "fullstack",
        image: "/SelfTrack.png",
        alt: "Next app for tracking self employment workload",
        github: "https://github.com/paolacampos-dev/self-employment-tracker",
        live: "https://selftrack.paolacampos.dev/",
        description: "Freelancer Manager",
        tech: ["Next.js", "Clerk", "PostgreSQL"]
    },
    {
        id: 2, 
        title: "Schedulr",
        type: "fullstack",
        image: "/Schedulr.png",
        alt: "Event scheduling interface with calendar layout",
        github: "https://github.com/paolacampos-dev/schedulr",
        live: "https://schedulr.paolacampos.dev/",
        description: "Event Scheduling App",
        tech: ["Next.js", "React", "PostgreSQL"]
    },
    {
        id: 3, 
        title: "Nervous System Gallery",
        type: "frontend",
        image: "/GalleryN.png",
        alt: "React image gallery using Wikimedia API",
        github: "https://github.com/paolacampos-dev/nervous-system-gallery",
        live: "https://neuroscope.paolacampos.dev/",
        description: "Interactive Image Gallery",
        tech: ["REACT", "fetching Wikimedia API"]
    },
    {
        id: 4, 
        title: "Zodiac Gallery",
        type: "frontend",
        image: "/Zodiac.png",
        alt: "Vanilla JavaScript image gallery",
        github: "https://github.com/paolacampos-dev/zodiac-gallery",
        live: "https://paolacampos-dev.github.io/zodiac-gallery/",
        description: "Art Collection Gallery",
        tech: ["vanilla JavaScript"]
    },
    
    {
        id: 5, 
        title: "The Path of Life",
        type: "frontend",
        image: "/Life.png",
        alt: "UI-focused project with JavaScript enhancements",
        github: "https://github.com/paolacampos-dev/the-path-of-life",
        live: "https://paolacampos-dev.github.io/the-path-of-life/",
        description: "Brand Landing Page",
        tech: ["HTML", "CSS", "JS"]
    },
    {
        id: 6, 
        title: "Paths of Tought",
        type: "frontend",
        image: "/Thought.png",
        alt: "Responsive landing page built with HTML and CSS",
        github: "https://github.com/paolacampos-dev/paths-of-thought" ,
        live: "https://paolacampos-dev.github.io/paths-of-thought/",
        description: "Responsive Landing Page",
        tech: ["HTML", "CSS "]
    },
    {
        id: 7,
        title: "Freelance WP Website ",
        type: "wordpress",
        image: "WP.png",
        alt: "Homepage of custom WordPress website with modern layout and warm color palette",
        live: "https://paolacampos.com/",
        description: "Custom WordPress Site",
        tech: ["WP", "Gutenberg"]
    },
    {
        id: 8, 
        title: "SitePulse",
        type: "AI",
        image: "",
        alt: "",
        github: "https://github.com/paolacampos-dev/sitepulse",
        live: "",
        description: "AI Site Audits",
        tech:   ["PageSpeed API", "OpenAI API"]
    },
    {
        id: 9, 
        title: "DecodeMe",
        type: "AI",
        image: "DecodeMe.png",
        alt: "",
        github: "",
        live: "",
        description: "Natal Chart AI" ,
        tech: ["Next.js", "Node.js", "OpenAI API"]
    }
];
export default projectsData;

/*{
        id: , 
        title: "",
        type: "" ,
        image: "" ,
        alt: "",
        github: "",
        live: "",
        description: "",
        tech: [·]
    },*/