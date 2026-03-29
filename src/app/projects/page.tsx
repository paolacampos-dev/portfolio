import Title from "@/components/Title";
import Gallery from "@/components/Gallery"


export default function Projects()   {
    return(
        <>
            <Title />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 sm:pt-4 lg:pt-15">
                <Gallery />
            </div>
        </>
    );
}