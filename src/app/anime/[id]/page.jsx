import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary md:text-3xl">{anime.data.title} {anime.data.year}</h3>
            </div>

            <div className="pt-4 px-4 gap-3 text-color-primary flex overflow-x-auto">
                <div className="bg-color-secondary shadow-md p-4 rounded text-center">
                    <h3>PERINGKAT</h3>
                    <p className="text-color-accent">{anime.data.rank}</p>
                </div>
                <div className="bg-color-secondary shadow-md p-4 rounded text-center">
                    <h3>SCORE</h3>
                    <p className="text-color-accent">{anime.data.score}</p>
                </div>
                <div className="bg-color-secondary shadow-md p-4 rounded text-center">
                    <h3>ANGGOTA</h3>
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
            <div className="pt-5 px-5 text-color-primary flex sm:flex-nowrap flex-wrap gap-4">
                <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-28 h-40 lg:w-full lg:h-full rounded object-cover"/>
                <p>{anime.data.synopsis}</p>
            </div>
        </>
    )
}


export default Page