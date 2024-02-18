import { type EpisodeType } from "@/utils/types"

export default function Episode({ episode }: { episode: EpisodeType }) {

  console.log(episode)

  return (
    <div>
      <p>Season {episode.seasonNumber}</p>
      <p>Episode {episode.episodeNumber}</p>
      <p>{episode.title}</p>
      <img src={episode.image.url} alt={episode.image.caption.plainText} />

    </div>
  );
}