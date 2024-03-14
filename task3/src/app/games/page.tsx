import { GamesServices } from "@/services/games.services";
import Link from "next/link";
import Image from "next/image";
import type { TGames } from "./types";
import GamesCard from "@/components/games/games-card";

async function Games() {
  const games: TGames[] = await GamesServices.getAll();
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {games.map((game) => (
        <GamesCard key={game.identifier} game={game} />
      ))}
    </ul>
  );
}

export default Games;
