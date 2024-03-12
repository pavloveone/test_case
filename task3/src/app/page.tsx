import Link from "next/link";

export default function Home() {
  return (
    <Link
      className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      href="/games"
    >
      Перейти в каталог
    </Link>
  );
}
