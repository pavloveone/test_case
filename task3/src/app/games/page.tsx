import { GamesServices } from "@/services/games.services";
import Link from "next/link";
import Image from "next/image";
import type { TGames } from "./types";

async function Games() {
  const games: TGames[] = await GamesServices.getAll();
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {games.map((game) => (
        <li
          key={game.identifier}
          className="flex flex-col items-center bg-purple-100 rounded-lg shadow-md"
        >
          <Image
            src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`}
            alt={game.title}
            className="object-top object-contain pt-4"
            width={250}
            height={250}
          />
          <div className="flex flex-col items-center p-4 h-full justify-between">
            <div>
              <h3 className="text-lg text-blue-00 text-center font-semibold mb-2">
                {game.title}
              </h3>
              <div className="mt-2 flex flex-wrap">
                {game.categories.map((category: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-blue-400 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <Link
                href={`/games/${game.provider || game.categories}/${
                  game.seo_title
                }`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                More details
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Games;
