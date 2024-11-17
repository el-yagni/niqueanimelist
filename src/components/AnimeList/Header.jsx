import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center p-5">
            <h1 className=" md:text-2xl font-bold text-color-primary">{title}</h1>
            {linkHref && linkTitle?
            <Link href={linkHref} className="md:text-xl underline hover:text-color-accent text-color-primary font-semibold transition-all">{linkTitle}</Link>
            : null
        }
        </div>
    )
}

export default Header