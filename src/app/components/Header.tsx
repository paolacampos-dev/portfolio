import Link from "next/link"

export default function Header ()   {
    return (
        <>
            <header className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 py-4 bg-[#2a1f1a] text-orange-100/80">
                <Link href="/" className="text-sm sm:text-base font-bold ">Portfolio</Link>

                <nav className="flex items-center gap-4 sm:gap-8">
                    <Link href="/projects" className="text-lg font-semibold text-orange-400" >Projects</Link>
                    <Link href="/about" className="text-sm sm:text-base">About</Link>
                    <Link href="/contact"className="text-sm sm:text-base" >Contact</Link>
                </nav>
            </header>
        </>
    )
}