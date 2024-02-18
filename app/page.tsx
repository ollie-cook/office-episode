import { episodes } from "@/utils/episodes"
import Episode from "./components/Episode"
import RefreshButton from "./components/RefreshButton";

export default function Home() {
  const episode = getRandomEpisode();

  return (
    <main className="min-h-screen">
      <Episode episode={episode} />
      <RefreshButton />
    </main>
  );
}

const getRandomEpisode = () => {
  const randomIndex = Math.floor(Math.random() * episodes.length);

  return episodes[randomIndex];
}
