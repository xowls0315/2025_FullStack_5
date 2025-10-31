"use client";

import Link from "next/link";

const GoHome = () => {
  return (
    <div
      className={"w-full h-screen flex flex-col justify-center items-center"}
    >
      <Link className={"text-5xl text-sky-300 rounded-2xl"} href={"/"}>
        🎩메인페이지 돌아가기
      </Link>
    </div>
  );
};

export default GoHome;
