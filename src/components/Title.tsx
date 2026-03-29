
"use client";

export default function Title() {
    return (
        <>
        <div className="font-signature pt-3 sm:pt-8 lg:pt-14 mb-0 pb-1 sm:pb-2">
            <h1 className="text-center text-[1.5rem] sm:text-[2rem] md:text-[3rem] text-orange-300 tracking-wide"> PaolaCampos<span className="text-orange-500">.dev</span></h1>
        </div>
        <div className="flex justify-center mt-1 mb-3 p-0">
            <a
                href="https://github.com/paolacampos-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="text-base sm:text-lg font-medium text-[#c7b8a5] hover:text-[#d6cbbc] transition-colors"
            >
            <img
                src="/github.svg"
                alt="GitHub"
                className="w-6 h-6 opacity-70 hover:opacity-100 transition bg-black/30 p-1 rounded-md backdrop-blur-sm hover:scale-110"
            />
            </a>
        </div>
        
        </>
    );       
}

