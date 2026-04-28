import Title from "@/components/Title";
import Gallery from "@/components/Gallery"

export default function Projects()   {
    return(
        <>
            <Title />
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 lg:pt-12">
                <Gallery />
            </div>
        </>
    );
}