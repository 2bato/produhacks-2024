import Image from "next/image";
import NewsDisplay from "./NewsDisplay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NewsDisplay />
    </main>
  );
}
