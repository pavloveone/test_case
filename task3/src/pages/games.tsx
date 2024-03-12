import "../app/globals.css";

function Games({ games }: any) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {games.map((game: any, index: number) => (
        <li
          key={game.title + index}
          className="flex flex-col items-center bg-zinc-500 rounded-lg shadow-md"
        >
          <img
            src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`}
            alt={game.title}
            className="w-full h-full object-contain rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
            <div className="mt-4 flex flex-col items-center ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Play Now
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://nextjs-test-pi-hazel-56.vercel.app/data/games.json"
  );
  const games = await res.json();
  return {
    props: {
      games,
    },
  };
}

export default Games;
