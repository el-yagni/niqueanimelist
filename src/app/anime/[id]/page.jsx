import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import Link from "next/link"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary md:text-3xl">{anime.data.title} {anime.data.year}</h3>
            </div>

            <div className="pt-4 px-4 gap-3 text-color-primary flex flex-nowrap overflow-x-auto">
                <div className="bg-color-secondary shadow-md p-4 rounded text-center">
                    <h3>RANK</h3>
                    <p className="text-color-accent">{anime.data.rank}</p>
                </div>
                <div className="bg-color-secondary shadow-md p-4 rounded text-center">
                    <h3>SCORE</h3>
                    <p className="text-color-accent">{anime.data.score}</p>
                </div>
                <div className="bg-color-secondary shadow-md p-4 rounded text-center">
                    <h3>MEMBERS</h3>
                    <p className="text-color-accent">{anime.data.members}</p>
                </div>
                <div className="bg-color-secondary shadow-md p-4 rounded text-center">
                    <h3>EPISODE</h3>
                    <p className="text-color-accent">{anime.data.episodes}</p>
                </div>
            </div>
            <div className="pt-5 px-5 w-full">
                <VideoPlayer youtubeId={anime.data.trailer.embed_url}/>
            </div>

            <main className="pt-5 px-5 bg-color-secondary border-b p-5 flex h-15 items-center m-5 rounded-md">
                <h1 className="text-color-accent">{anime.data.duration} ... </h1>
                <h1 className="text-color-accent">{anime.data.rating}</h1>
            </main>

            <div className="pt-5 px-5 text-color-primary flex sm:flex-nowrap flex-wrap gap-4">
                <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-28 h-40 lg:w-full lg:h-full rounded object-cover"/>
                <p className="text-justify">{anime.data.synopsis}</p>
            </div>
            <main className="pt-5 px-5 border-b p-5 flex flex-wrap h-15 items-center m-5 rounded-md overflow-hidden">
                <Link href={anime.data.url}><h1 className="text-color-primary hover:text-color-accent"> More Details {anime.data.url}</h1></Link>
            </main>
        </>
    )
}


export default Page