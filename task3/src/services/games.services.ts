export const GamesServices = {
    async getAll() {
        const res = await fetch(
            "https://nextjs-test-pi-hazel-56.vercel.app/data/games.json",
            { cache: "force-cache" }
          );
        return await res.json();
    }
}