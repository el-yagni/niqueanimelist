import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
                        <div className="flex flex-col relative rounded overflow-hidden">
                            <Image src={anime.images.webp.image_url} alt="" width={350} height={350} className="w-full max-h-64 object-cover rounded-sm" />
                            <h3 className=" absolute bottom-0 bg-color-dark w-full bg-opacity-60 font-bold md:text-xl text-md p-4">{anime.title}</h3>
                        </div>
                    </Link>
                )
            })}

        </div>

    )
}

export default AnimeList