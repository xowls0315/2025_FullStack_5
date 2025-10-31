import { data as champData } from "@/champ";
import Image from "next/image";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  // champData.data는 { Aatrox: {...}, Ahri: {...}, ... } 형태
  const { id } = await params;

  const champ = champData.data[id]; // 해당 챔피언 객체

  if (!champ) return notFound();

  const { name, blurb, image, title } = champ;

  // Data Dragon 이미지 경로 (이미 가지고 있는 version + image.full 활용)
  const imgSrc = `https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/${image.full}`;

  return (
    <main className="max-w-[960px] mx-auto px-6 py-10">
      <section className="flex flex-col md:flex-row items-start gap-8">
        {/* next/image 쓰면 remotePatterns 설정 필요하니, 간단히 img 사용 */}
        <Image
          src={imgSrc}
          alt={name}
          width={192} // 이미지 고정 폭(px)
          height={192} // 이미지 고정 높이(px)
          className="w-48 h-48 rounded-xl ring-1 ring-white/10 object-cover"
          priority // 첫 화면이면 우선 로드
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {name}
            <span className="text-zinc-400 text-xl align-middle">
              / {title}
            </span>
          </h1>
          <p className="mt-4 text-sky-700 leading-7">{blurb}</p>
        </div>
      </section>
    </main>
  );
};

export default page;
