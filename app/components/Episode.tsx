import { type EpisodeType } from "@/utils/types"

export default function Episode({ episode }: { episode: EpisodeType }) {

  console.log(episode)

  return (
    <div className="mt-4 w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-gray-300 p-2 flex flex-col mb-16">
      <p className="text-xl sm:text-3xl font-semibold ml-[calc(100%/24)]">{episode.title}</p>
      <div className="flex gap-3 ml-[calc(100%/24)]">
        <p>Season {episode.seasonNumber}</p>
        <p>Episode {episode.episodeNumber}</p>
      </div>
      <img src={episode.image.url} alt={episode.image.caption.plainText} className="w-11/12 self-center mt-2" />
    </div>
  );
}