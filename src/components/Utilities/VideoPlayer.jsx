"use client"


const VideoPlayer = ({ youtubeId }) => {
    const option = {
        width: "1000",
        height: "200"
    }


    return (
        <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe className="w-full h-full" src={youtubeId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoPlayer