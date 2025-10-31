import ChampImage from "../atom/ChampImage";
import ChampName from "../atom/ChampName";

const Champ = ({ image, name }) => {
  return (
    <div className={"p-[5px] flex flex-col items-center"}>
      <ChampImage image={image} />
      <ChampName name={name} />
    </div>
  );
};

export default Champ;
