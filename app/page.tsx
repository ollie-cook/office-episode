import { episodes } from "@/utils/episodes"
import Episode from "./components/Episode"
import RefreshButton from "./components/RefreshButton";

export const dynamic = 'force-dynamic'

export default function Home() {
  const episode = getRandomEpisode();

  return (
    <main className="relative min-h-screen flex flex-col items-center">
      <img src="/logo.png" alt="The Office logo" className="w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-4" />
      <h1 className="text-3xl sm:text-5xl mt-2 font-semibold text-center">Random Episode Generator</h1>
      <RefreshButton />
      <Episode episode={episode} />
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm" >Built by <a href="https://www.olliecookie.com" className="underline" target="_blank">Ollie Cook</a>&#x1f36a;</p>
    </main>
  );
}

const getRandomEpisode = () => {
  const randomIndex = Math.floor(Math.random() * episodes.length);

  return episodes[randomIndex];
}
