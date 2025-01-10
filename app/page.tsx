"use client";

import { Circle } from "@/components/Circle";
import { Star } from "@/components/Star";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="flex w-[100vw] min-h-[100vh] flex-col gap-8 justify-center items-center bg-perso-bg">
      <Star x="10%" y="10%" />
      <Star x="22%" y="35%" />
      <Star x="72%" y="27%" />
      <Star x="83%" y="68%" />
      <Star x="91%" y="18%" />
      <Star x="14%" y="74%" />
      <div className="relative flex w-[100vw] h-[100vh]  flex-col gap-8 justify-center items-center font-roboto">
        <Title />
        <Circle />
      </div>
    </main>
  );
}
