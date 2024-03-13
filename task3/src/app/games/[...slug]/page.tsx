import { GamesServices } from "@/services/games.services";
import Link from "next/link";
import Image from "next/image";
import { TGames } from "../types";

async function Game({ params }: { params: { slug: string[] } }) {
  const games: TGames[] = await GamesServices.getAll();
  const game = games.find((game) => game.seo_title === params.slug.at(-1));
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link
        href="/games"
        className="text-blue-500 hover:text-blue-700 mb-4 block"
      >
        ← Back
      </Link>
      {game && (
        <div className="flex">
          <div className="w-72 bg-purple-100 p-4 flex flex-col items-center justify-center rounded-lg mr-6">
            <Image
              src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`}
              alt={game.title}
              width={250}
              height={250}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-blue-600 text-3xl font-bold mb-2">
              {game.title}
            </h1>
            <p className="text-lg mb-2">Provider: {game.provider}</p>
            <p className="text-lg mb-4">Categories:</p>
            <div className="flex flex-wrap">
              {game.categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-blue-400 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
