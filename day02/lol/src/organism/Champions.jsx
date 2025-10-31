import Link from "next/link";
import Champ from "../molecule/Champ";

const Champions = ({ champs }) => {
  // 이름순(ㄱ~ㅎ) 정렬
  const sortedChamps = [...champs].sort((a, b) =>
    a.name.localeCompare(b.name, "ko-KR")
  );

  return (
    <div className="container mx-auto grid grid-cols-6 gap-[10px]">
      {/* https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/Aatrox.png */}

      {sortedChamps.map((champ) => (
        <Link key={champ.id} href={`/champ/${champ.id}`} className="block">
          <Champ image={champ.image.full} name={champ.name} />
        </Link>
      ))}
    </div>
  );
};

export default Champions;
