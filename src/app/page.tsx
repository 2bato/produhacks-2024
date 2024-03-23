"use client";

import Image from "next/image";
import getNews from "./news";

export default function Home() {
  const handleClick = () => {
    getNews();
  };

  const handleClick2 = async () => {};
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleClick}>Hey</button>
      <button onClick={handleClick2}> Bye </button>
    </main>
  );
}
