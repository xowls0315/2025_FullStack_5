"use client";

import { data as champData } from "@/champ";
import Champions from "@/src/organism/Champions";
import { useLoLLine } from "@/store";

export default function Home() {
  // const champ = useChamp((state) => state.champ);
  const championsLine = useLoLLine((state) => state.champions);

  // console.log(champion);
  console.log(championsLine);

  // console.log(champData);

  const champs = Object.values(champData.data); // ← 배열로 변환

  console.log(champs);
  return (
    <>
      <Champions champs={champs} />
    </>
  );
}
