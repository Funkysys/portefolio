"use client";

import { Circle } from "@/components/Circle";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="flex w-[100vw] min-h-[100vh] flex-col gap-8 justify-center items-center bg-perso-bg">
      <div className="relative flex w-[100vw] h-[100vh]  flex-col gap-8 justify-center items-center font-roboto">
        <Title />
        <Circle />
      </div>
    </main>
  );
}
