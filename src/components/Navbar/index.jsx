import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-color-secondary shadow-lg">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-5 gap-3">
                <Link href="/" className="font-bold text-2xl text-color-primary">NIQUE <span className="text-color-accent">TRAILER</span> ANIME</Link>
                <InputSearch/>
            </div>
        </header>
    )
}

export default Navbar