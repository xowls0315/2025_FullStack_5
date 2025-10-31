"use client";

import Link from "next/link";
import { useState } from "react";

const GoHome = () => {
  const [num, setNum] = useState(0);

  return (
    <div
      className={"w-full h-screen flex flex-col justify-center items-center"}
    >
      <Link className={"text-5xl text-sky-300 rounded-2xl"} href={"/"}>
        🎩메인페이지 돌아가기
      </Link>
      <button
        onClick={() => {
          setNum((prev) => prev + 1);
        }}
        className={"text-3xl"}
      >
        {num}
      </button>
    </div>
  );
};

export default GoHome;
